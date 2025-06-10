---
slug: concurrency-in-nodejs
title: "Scaling Node.js Concurrency with the Cluster Module"
authors: [avir]
image: /img/blogs/concurrency.jpg
---

# Scaling Node.js Concurrency with the Cluster Module

Node.js is often described as **single-threaded**, but it powers some of the world’s highest-traffic applications. So how does it manage to handle **thousands of concurrent connections**, **network I/O**, <!-- truncate --> and **file reads/writes**—with just one thread?

The short answer: **It doesn’t.**

Node.js uses a **single thread for executing JavaScript**, but it’s backed by a **multi-threaded architecture under the hood** using:

- The **libuv thread pool** (4 threads by default)
- The **cluster module** (multi-process architecture)
- **Worker threads** (for CPU-bound tasks)

In this post, we’ll dive into how Node.js achieves real-world scalability using the `cluster` module—comparing this process-based approach with Java’s traditional multithreading model

---

## What is the Cluster Module ?

The `cluster` module allows you to **create multiple copies (workers)** of your Node.js application. These workers are separate **processes**, not threads. These are forked from a single **master process**, and they can be scheduled by the OS to run on **different CPU cores**, giving you **true parallelism** — not just concurrency. The workers have these similarity among them:

- Run the **same code**
- Share the same **server port**
- Can handle requests **independently and in parallel**

So even though each process is still single-threaded internally, together they give the illusion of **multithreaded execution**—because multiple requests can be handled **at the same time** by different processes.

### Why use clustering?

- To **utilize all CPU cores** on the machine (default Node.js uses only one)
- To handle **more concurrent requests** without blocking
- To build **scalable** and **high-performance** applications

### Understanding Node.js Scaling with the Kitchen Analogy

Imagine your restaurant has **8 kitchens.**

- At first, you have **only 1 chef** working in **just one kitchen**. That chef can only cook one order at a time, so the other 7 kitchens sit empty and unused.
- Now, you hire **7 more chefs**, so you have **8 chefs working in 8 separate kitchens**.
  Each chef can cook orders independently, so you can serve **8 customers at the same time** — fully using all your kitchens.

Here in this analogy, kitchen refers to the CPU cores and the chefs are the processes to handle different operations.

Note:- When you use the **`cluster` module** in Node.js, you're not creating _threads_ like you might in Java or C++. Instead, you're creating multiple **independent processes.**

---

## Practical Example with Code

```jsx
const cluster = require("cluster");
const os = require("os");
const knexConfig = //DB_Connections
const knex = require("knex")(knexConfig);
const numCPUs = os.cpus().length;

const mode =
  process.argv.find((arg) => arg.startsWith("--mode="))?.split("=")[1] ||
  "cluster";

async function processPropertiesSequentially(properties) {
  const workerKnex = require("knex")(knexConfig);

  for (const property of properties) {
    await workerKnex("properties").where("uuid", property.uuid).update({
      property_date_type: "date-given",
    });
  }

  await workerKnex.destroy();
}

if (mode === "single") {
  console.log("Running in SINGLE-threaded mode");
  console.time("Single-threaded duration");

  knex("properties")
    .select("uuid", "property_date_type")
    .where("property_date_type", "dated")
    .then(async (properties) => {
      await processPropertiesSequentially(properties);
      console.timeEnd("Single-threaded duration");
      await knex.destroy();
      process.exit(0);
    })
    .catch(async (err) => {
      console.error("Error fetching properties:", err);
      await knex.destroy();
      process.exit(1);
    });
} else if (mode === "cluster") {
  if (cluster.isMaster) {
    console.log("Running in CLUSTER mode");
    console.log(`Master ${process.pid} is running`);
    console.time("Cluster duration");

    knex("properties")
      .select("uuid", "property_date_type")
      .where("property_date_type", "dated")
      .then((properties) => {
        const plainProperties = JSON.parse(JSON.stringify(properties));
        const chunkSize = Math.ceil(plainProperties.length / numCPUs);
        let exitedWorkers = 0;

        for (let i = 0; i < numCPUs; i++) {
          const start = i * chunkSize;
          const end = start + chunkSize;
          const propertyChunk = plainProperties.slice(start, end);

          const worker = cluster.fork();
          worker.send(propertyChunk);

          worker.on("message", (msg) => {
            console.log(`Worker ${worker.process.pid}: ${msg}`);
          });

          worker.on("exit", async (code) => {
            exitedWorkers++;
            if (exitedWorkers === numCPUs) {
              console.timeEnd("Cluster duration");
              await knex.destroy();
              process.exit(0);
            }
          });
        }
      })
      .catch(async (err) => {
        console.error("Error fetching properties:", err);
        await knex.destroy();
        process.exit(1);
      });
  } else {
    process.on("message", async (propertyChunk) => {
      const workerKnex = require("knex")(knexConfig);
      try {
        for (const property of propertyChunk) {
          await workerKnex("properties").where("uuid", property.uuid).update({
            property_date_type: "date-given",
          });
        }
      } catch (err) {
        process.send(`Error: ${err.message}`);
      } finally {
        await workerKnex.destroy();
        process.exit(0);
      }
    });
  }
} else {
  console.error(`Unknown mode: ${mode}`);
  process.exit(1);
}
```

## Pseudo Code

```jsx
1. Initialize database connections and detect the number of available CPU    cores.

2. Check if the current process is the "master":
   - Yes (Master Process):
     a. Fetch all properties from the database where `property_date_type` is         "dated".
     b. Split the list of properties into equal chunks based on number of            CPU cores.
     c. For each chunk:
        i. Fork a new worker process.
        ii. Send the chunk of properties to that worker.

     d. Listen for messages or completion signals from workers.
     e. When all workers have completed:
        - Log total time taken.
        - Close the database connection.

   - No (Worker Process):
     a. Receive a chunk of properties from the master.
     b. For each property in the chunk:
        - Update its `property_date_type` from "dated" to "date-given" in              the database.
     c. After finishing:
        - Close the database connection.
        - Exit the worker process.

```

## Results

- When the dataset is not large enough, the single-threaded approach can be faster, and the multi-threaded (cluster) approach may become an overkill. In this case, the dataset contains only 1,000 properties.

![Screenshot 2025-05-18 at 10.12.12 PM.png](/img/blogs/avi_result_1.png)

- As the dataset size increases, the cluster-based approach starts performing better—taking nearly half the time compared to the single-threaded approach. In this case, the dataset consists of 62,000 properties.

![Screenshot 2025-05-18 at 10.04.04 PM.png](/img/blogs/avi_result_2.png)

## 📝 Java vs Node.js Cluster Module - Quick Reference

Just for context, here are a few quick differences between Java and Node.js threads:

- 🧩 Node.js `cluster` creates **multiple processes**, while Java typically uses **multiple threads** within one process.
- 🧠 Java threads **share memory**, whereas Node.js cluster workers **do not** — they communicate via **IPC (message passing)**.
- ⚙️ Java gives **fine-grained control** over threading (e.g., `start()`, `join()`), while Node.js `cluster` manages workers more like **isolated services**.
