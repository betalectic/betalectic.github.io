---
slug: monitoring-laravel-queued-jobs
title: "Monitoring Laravel Queued Jobs with Lifecycle Events"
authors: [arihant]
image: /img/blogs/laravel-queue-monitoring.jpg
---

# Monitoring Laravel Queued Jobs with Lifecycle Events

When it comes to scheduled task monitoring, tools like [Healthchecks.io](https://healthchecks.io/) do a stellar job. But what about **queued jobs** — those background tasks running via Redis, Amazon SQS, or other drivers in Laravel?

<!--truncate-->

Out of the box, Laravel doesn’t offer a dashboard or built-in UI to track job status. But the good news is: **Laravel provides a robust job event system** that allows you to hook into every phase of a job's lifecycle. By tapping into these events, you can build your own real-time job monitoring system with just a bit of code.

---

## Laravel’s Built-in Job Lifecycle Events

Laravel fires several events during the lifecycle of a queued job. Here’s what you get out of the box:

| Event                  | Description                                |
| ---------------------- | ------------------------------------------ |
| `JobQueued`            | Fired when a job is added to the queue     |
| `JobProcessing`        | Fired just before the job starts executing |
| `JobProcessed`         | Fired when the job finishes successfully   |
| `JobFailed`            | Fired if the job throws an exception       |
| `JobTimedOut`          | Fired when a job times out                 |
| `JobExceptionOccurred` | Fired for unhandled exceptions             |

These events give us fine-grained visibility into every queued job. By listening to them, we can log activity, measure performance, or alert on failures — all without changing our job classes.

---

## Setting Up Job Tracking in Laravel

Here’s a step-by-step guide to building a minimal yet powerful job tracking system using these native events.

---

### 1. Create a Table to Track Job Statuses

In a migration file:

```php
Schema::create('job_statuses', function (Blueprint $table) {
    $table->id();
    $table->string('job_id')->unique();
    $table->string('name');
    $table->string('status'); // queued, processing, completed, failed
    $table->timestamp('queued_at')->nullable();
    $table->timestamp('started_at')->nullable();
    $table->timestamp('completed_at')->nullable();
    $table->text('exception')->nullable();
    $table->timestamps();
});
```

---

### 2. Create a Listener to Track Events

`app/Listeners/TrackJobStatus.php`:

```php
namespace App\Listeners;

use Illuminate\Queue\Events\JobQueued;
use Illuminate\Queue\Events\JobProcessing;
use Illuminate\Queue\Events\JobProcessed;
use Illuminate\Queue\Events\JobFailed;
use App\Models\JobStatus;

class TrackJobStatus
{
    public function handle($event)
    {
        $jobId = method_exists($event->job, 'uuid') ? $event->job->uuid() : null;

        if (!$jobId) return;

        if ($event instanceof JobQueued) {
            JobStatus::updateOrCreate(
                ['job_id' => $jobId],
                ['name' => $name, 'status' => 'queued', 'queued_at' => now()]
            );
        }

        if ($event instanceof JobProcessing) {
            JobStatus::where('job_id', $jobId)
                ->update(['status' => 'processing', 'started_at' => now()]);
        }

        if ($event instanceof JobProcessed) {
            JobStatus::where('job_id', $jobId)
                ->update(['status' => 'completed', 'completed_at' => now()]);
        }

        if ($event instanceof JobFailed) {
            JobStatus::where('job_id', $jobId)
                ->update([
                    'status' => 'failed',
                    'completed_at' => now(),
                    'exception' => $event->exception->getMessage(),
                ]);
        }
    }
}
```

---

### 3. Register the Listener in `EventServiceProvider`

Add the following to your `EventServiceProvider`:

```php
protected $listen = [
    \Illuminate\Queue\Events\JobQueued::class => [
        \App\Listeners\TrackJobStatus::class,
    ],
    \Illuminate\Queue\Events\JobProcessing::class => [
        \App\Listeners\TrackJobStatus::class,
    ],
    \Illuminate\Queue\Events\JobProcessed::class => [
        \App\Listeners\TrackJobStatus::class,
    ],
    \Illuminate\Queue\Events\JobFailed::class => [
        \App\Listeners\TrackJobStatus::class,
    ],
];
```

Laravel will now automatically dispatch your listener whenever these events occur.

---

## What You Gain

With this lightweight system in place, you can:

- Monitor jobs that are **queued**, **processing**, or **completed**
- Gain insight into job **execution times**
- Catch and log **failures with exception messages**
- Build a **live dashboard** of job activity using Inertia.js, Livewire, or any frontend stack
- Trigger **Slack/email alerts** when critical jobs fail

You’re now equipped to build custom observability around one of Laravel’s most powerful background features — without relying on third-party infrastructure.

---

## Final Thoughts

Laravel’s event system isn’t just for jobs — it’s a powerful architectural tool that gives you hooks into the core of the framework. By simply listening to the events Laravel already fires, you can build clean, decoupled systems for monitoring, alerting, and more.

Pair this queue monitoring setup with **Healthchecks.io** (for cron tasks) and you’ve got full coverage over your background workload — **for free**.

---

### Bonus Tip: Extend the Listener

You can easily enhance this system to:

- Track **payload details** like user ID, batch ID, or job tags
- Visualize job durations over time
- Clean up old records with a scheduled command

Let Laravel do the heavy lifting — you just have to listen.
