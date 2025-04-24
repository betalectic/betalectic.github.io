---
slug: cron-health-laravel
title: "Cron Health in Laravel: A Practical Monitoring Setup"
authors: [arihant, param]
image: /img/blogs/cronhealth.jpg
---

# Cron Health in Laravel: A Practical Monitoring Setup

Ensuring your background jobs and scheduled tasks run reliably is essential for any modern web application. Laravel offers solid queue and scheduling capabilities,<!-- truncate --> but **observability**—knowing _what’s running, what’s stuck, and what’s failed_—is often overlooked.

In this post, I’ll walk you through how we built a system to monitor the **health of cron jobs and queued jobs** in Laravel using [Healthchecks.io](https://healthchecks.io/) (free tier) for scheduled tasks

---

## Why Not Sentry?

We initially tried **Sentry’s job monitor** to track failed jobs. It’s a powerful tool and provides rich diagnostics - like stack traces, job context, and alerting capabilities - which can be incredibly helpful when debugging production issues. However, for our use case, the **cost became a constraint**.

Sentry’s free tier is quite limited: it includes only **one cron monitor**, and after that, they charge based on the number of monitors and event volume. For teams running multiple background jobs, scheduled tasks, or high-throughput queues, it’s easy to **outgrow the free plan quickly**. Once you cross the free limits, pricing scales up significantly, especially if you want detailed event retention, multiple projects, or alerting features.

We needed a **free or low-cost alternative** that still gave us insight into what's happening behind the scenes - without the pricing model scaling steeply as our system grows.

---

## Why Healthchecks.io Works (for Cron)

I’ve continued using [**Healthchecks.io**](https://healthchecks.io/) to track cron jobs. It's perfect for scheduled tasks and gives you 20 free monitors - plenty for most small to mid-sized applications.

**Integration with Laravel is simple**, using `->pingBefore()` and `->thenPing()` in your `App\Console\Kernel`:

```php
$schedule->command('your:daily-task')
    ->daily()
    ->before(function () {
        Http::get('https://hc-ping.com/your-uuid/start');
    })
    ->after(function () {
        Http::get('https://hc-ping.com/your-uuid');
    });
```

Healthchecks will notify you if a cron job **doesn't run**, **takes too long**, or **fails silently**—and that’s invaluable.

---

## Understanding Cron Monitoring (Sync vs Async)

Unlike queued jobs that run asynchronously, cron jobs in Laravel are **synchronous,** meaning the scheduler kicks them off, waits for them to finish, and then moves on. That makes them **ideal for heartbeat-based monitoring**, where a remote service like Healthchecks tracks:

- If the job **started** (via the `/start` ping)
- If the job **finished** (via the default ping)
- If it **didn’t finish in time**, or never started at all

And the best part? You don’t need to modify your command’s internal logic—just attach the `before()` and `after()` methods to your scheduler.

## Alternative: Monitoring When Schedule Dispatches a Job

In some cases, your scheduled command doesn’t do much by itself—it simply dispatches a queued job. That makes the default `before()`/`after()` Healthchecks pings unreliable, because the command finishes immediately, while the actual work happens later in the queue.

**Here’s the fix:**

Use the Healthchecks `start` ping **before dispatch**, and call the **success/failure pings from within the job itself.**

---

### Step-by-Step Flow

1. In your **scheduled Artisan command**, ping Healthchecks `/start` **just before dispatching the job**.
2. In your queued job, override the `handle()` and `failed()` methods to call the **success** or **failure** ping.

### Example

```php
// In your scheduled command:
public function handle()
{
    // Ping start
    Http::get('https://hc-ping.com/your-uuid/start');

    // Dispatch the actual job
    YourQueuedJob::dispatch();
}

```

```php
// In your queued job:
use Illuminate\Support\Facades\Http;

class YourQueuedJob implements ShouldQueue
{
    public function handle()
    {
        // Do the work...

        // Ping success
        Http::get('https://hc-ping.com/your-uuid');
    }

    public function failed(\Throwable $exception)
    {
        // Ping failure
        Http::get('https://hc-ping.com/your-uuid/fail');
    }
}

```

> This method ensures you monitor the actual logic, not just the wrapper command. It’s especially useful for jobs that might take time or fail in unexpected ways.

---

## Securing and Scaling This Setup

### 1. Store Ping URLs in `.env`

Hardcoding your ping URLs is okay for a quick test, but in production, keep it clean:

```
HEALTHCHECK_PING_DAILY_REPORT=https://hc-ping.com/uuid-1234
HEALTHCHECK_PING_DAILY_REPORT_START=https://hc-ping.com/uuid-1234/start

```

Then in `Kernel.php`:

```php
$schedule->command('report:daily')
    ->daily()
    ->before(fn () => Http::get(env('HEALTHCHECK_PING_DAILY_REPORT_START')))
    ->after(fn () => Http::get(env('HEALTHCHECK_PING_DAILY_REPORT')));

```

### 2. Set Timeouts Per Job

In Healthchecks.io, configure a timeout per monitor—e.g., expect a ping every 24 hours, and alert if it doesn't happen within 25. That way, even if your Laravel scheduler stops or your server crashes, you'll still be notified.

---

## Final Thoughts

Monitoring your cron jobs should be **as essential as writing them**. With tools like Healthchecks.io, you can gain confidence that your scheduled tasks are running exactly when (and how) they should, without breaking the bank.

Set it up once, and sleep easier knowing your background jobs are being watched.
