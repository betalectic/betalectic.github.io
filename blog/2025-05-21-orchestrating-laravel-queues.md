---
slug: orchestrating-laravel-queues
title: "Orchestrating Laravel Queues & Scheduling in Docker with Cron & Supervisor"
authors: [rajesh]
image: /img/blogs/docker_laravel_cron.jpg
---

# Orchestrating Laravel Queues & Scheduling in Docker with Cron & Supervisor

## **Introduction**

Deploying Laravel applications in Docker often means packaging not only the HTTP server but also background processes—namely, the queue workers and the scheduler. While it’s easy to get “the app” running, orchestrating and monitoring <!--truncate--> these long–running processes reliably can be tricky. In this post, we’ll walk through how I moved from a basic shell‐loop entrypoint to a more robust setup using cron for the scheduler and Supervisor for queue workers.

### Problem Statement

A production-ready Laravel container needs to handle three things:

1. **The web server** (`FrankenPHP`)
2. **Queue workers** (`php artisan queue:work`)
3. **The scheduler** (`php artisan schedule:run`)

My initial Docker entrypoint bundled 2 & 3 into a shell loop, but it lacked visibility, crash recovery, and proper PID management. Let’s fix that.

### Initial Entrypoint Approach

Here’s the one-liner I started with:

```
ENTRYPOINT ["sh", "-c", "php artisan queue:work & while true; do php artisan schedule:run --verbose --no-interaction; sleep 60; done"]
```

- **Pros**
  - Extremely simple.
- **Cons**
  - Both processes run under the same PID 1—no clean signals, no easy restarts.
  - If the scheduler crashes, it silently stops, and you won’t notice.

### Introducing Cron for the Scheduler

Offload scheduling to cron for reliability and observability. Create `franken-scheduler-cron` in your project root:

```
* * * * * root cd /app && /usr/local/bin/php artisan schedule:run --verbose --no-interaction >> /proc/1/fd/1 2>&1

# ← **Make sure there’s an empty line after the above entry!**
```

**Why cron?** Cron is battle-tested for running periodic jobs. By redirecting to `/proc/1/fd/1`, Laravel’s scheduler logs appear in Docker’s stdout.

In your Dockerfile:

```
# install and register cron
RUN apt-get update \
 && apt-get install -y cron

COPY franken-scheduler-cron /etc/cron.d/franken-scheduler-cron
RUN chmod 0644 /etc/cron.d/franken-scheduler-cron \
    && crontab /etc/cron.d/franken-scheduler-cron
```

You can verify inside the container:

```
docker exec -it my-app-container crontab -l

* * * * * root cd /app && /usr/local/bin/php artisan schedule:run --verbose --no-interaction >> /proc/1/fd/1 2>&1

```

**Learn more about Laravel scheduling:** [Scheduling → Laravel Docs](https://laravel.com/docs/11.x/scheduling)

### Managing Queue Workers with Supervisor

Supervisor provides automatic restarts, log management, and multi-process control—ideal for Laravel queues.

Create `supervisor.conf` in your project root:

```
[unix_http_server]
file=/var/run/supervisor.sock
chmod=0700

[supervisord]
logfile=/dev/stdout
logfile_maxbytes=0

[rpcinterface:supervisor]
supervisor.rpcinterface_factory = supervisor.rpcinterface:make_main_rpcinterface

[supervisorctl]
serverurl=unix:///var/run/supervisor.sock

[program:laravel-worker]
process_name=%(program_name)s_%(process_num)02d
command=/usr/local/bin/php artisan queue:work sqs --sleep=3 --tries=3 --max-jobs=1000 --max-time=3600
autostart=true
autorestart=true
stopasgroup=true
killasgroup=true
user=root
numprocs=2
redirect_stderr=true
stdout_logfile=/dev/stdout
stdout_logfile_maxbytes=0
stopwaitsecs=3600
```

- `numprocs=2` launches two workers
- Logs stream to Docker’s stdout
- Workers auto-restart on failure

Install Supervisor and add your config in your dockerfile:

```
RUN apt-get install -y supervisor

ADD supervisord.conf /etc/supervisord.conf
```

**Learn more about [Supervisor](https://supervisord.org/) and [Running Laravel queues](https://laravel.com/docs/11.x/queues#running-the-queue-worker)**

### The Final Dockerfile

Here’s the polished image, based on `dunglas/frankenphp`. Since cron and Supervisor both daemonize (run in the background), the container would exit immediately—so we append `tail -f /dev/null` to keep it alive.

```
FROM dunglas/frankenphp

RUN apt-get update \
    && DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
    git \
    unzip \
    librabbitmq-dev \
    libpq-dev \
    jq \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libpng-dev \
    libzip-dev \
    procps \
    cron \
    supervisor

RUN install-php-extensions pcntl pdo_pgsql gd zip

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

COPY . /app

# install our cron job
COPY franken-scheduler-cron /etc/cron.d/franken-scheduler-cron
RUN chmod 0644 /etc/cron.d/franken-scheduler-cron \
    && crontab /etc/cron.d/franken-scheduler-cron

ADD supervisord.conf /etc/

RUN composer install --no-dev --optimize-autoloader

ENTRYPOINT ["sh", "-c", "cron && supervisord -c /etc/supervisord.conf && tail -f /dev/null"]
```

### Verifying Your Background Processes

- List All Processes

```
docker exec -it <container> ps aux
```

You should see `cron`, `supervisord`, and your `php artisan queue:work` processes.

- Check Supervisor Status

```
docker exec -it <container> supervisorctl status
```

### Conclusion

By splitting responsibilities—**cron** for scheduling and **Supervisor** for queue workers—you gain:

- **Crash recovery:** Supervisor auto-restarts failed workers
- **Observability:** All logs in docker logs
- **Clean process trees:** Proper PID handling and signal propagation

This pattern scales to any long-running tasks in Docker. Happy deploying!
