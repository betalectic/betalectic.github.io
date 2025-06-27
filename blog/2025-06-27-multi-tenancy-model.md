---
slug: multi-tenancy-models
title: "From Shared Offices to Skyscrapers: Explaining SaaS Multi-Tenancy Models"
authors: [shrey]
image: /img/blogs/multi_tenancy.jpg
---

# From Shared Offices to Skyscrapers: Explaining SaaS Multi-Tenancy Models

### Introduction

In a SaaS (Software as a Service) environment, tenant isolation, scalability, cost-efficiency, and security are key architectural concerns. Here are three common approaches <!--truncate --> to architecting multi-tenant SaaS applications using AWS infrastructure:

---

## **Same AWS Account Multi-Tenancy**

This model consolidates all tenant data and infrastructure into a **single AWS account**. It can further be broken down into two tenancy models:

### **Single-Database Tenancy**

**Overview:**

All tenants share the same database and schema. Tenant data is typically separated using a `tenant_id` column.

**Pros:**

- **Simpler to manage** and cost-effective.
- Easier to implement analytics across tenants.
- High resource utilization efficiency.

**Cons:**

- Weaker **data isolation**—harder to meet compliance or security requirements.
- Risk of **noisy neighbor** issues (one tenant’s activity affects others).
- Complex data access controls.

**Best for:**

Startups, low-complexity SaaS products, or internal tools with limited tenant-specific customization needs.

**Tenancy Diagram:**

![Screenshot 2025-05-26 at 3.00.53 PM.png](/img/blogs/multi_tenancy_1.png)

---

### **Multi-Database Tenancy**

**Overview:**

All tenants are in the same AWS account, but each has their own dedicated database instance or schema.

**Pros:**

- **Better isolation** of tenant data than single-database tenancy.
- Easier to handle **data migrations or customisations** per tenant.
- Safer for GDPR/data localisation requirements.

**Cons:**

- Still shares the same infrastructure limits of a single AWS account.
- Harder to **scale operationally** as tenant count grows.
- Resource constraints or failures can still impact multiple tenants.

**Best for:**

SaaS offerings with moderate isolation requirements or mid-sized tenants.

**Tenancy Diagram:**

![Screenshot 2025-05-26 at 3.09.35 PM.png](/img/blogs/multi_tenancy_2.png)

---

## **Same AWS Account with Multiple AWS Sub-Accounts**

**Overview:**

This architecture uses a **central AWS account** for core services (e.g., control plane, shared services, global management) and creates **dedicated AWS sub-accounts** for each tenant. Each sub-account encapsulates a tenant's infrastructure and resources.

**Pros:**

- Strong **tenant isolation** for security and compliance.
- Easier to apply **resource quotas**, billing tracking, and monitoring per tenant.
- Better **blast radius control**—failures in one tenant’s environment do not impact others.
- Clear **cost attribution** per tenant.

**Cons:**

- Slightly higher **operational complexity** (account provisioning, cross-account access).
- **Increased cost** for control infrastructure replication.
- Requires **centralised orchestration** and tooling for deployments, logging, etc.

**Best for:**

Enterprise SaaS platforms that require strong isolation, customisations per tenant, or compliance with strict regulatory frameworks.

**Tenancy Diagram:**

![Screenshot 2025-05-26 at 2.56.01 PM.png](/img/blogs/multi_tenancy_3.png)

---

## **Individual AWS Account per Tenant**

**Overview:**

Each tenant gets a **completely separate AWS account**, with fully isolated infrastructure and services. Often paired with AWS Organizations and Control Tower.

**Pros:**

- **Maximum isolation** and security.
- Independent scaling and cost tracking per tenant.
- Ideal for **white-label solutions** or tenants needing full customization.

**Cons:**

- **High overhead** for account creation, management, and automation.
- Harder to implement centralized monitoring and control.
- Costly for small-scale tenants.

**Best for:**

High-paying enterprise customers needing full-stack control or regulatory-driven segmentation.

## Real-World Analogy for Multi-Tenant SaaS Architectures

To simplify and communicate different **SaaS multi-tenancy deployment models**, we can use a relatable analogy of **office buildings and workplace setups**.

### Shared AWS Account, **Single-Database Tenancy**

> Shared Office Space with One Big Room and One Entrance

- **All tenants (clients)** share the same application infrastructure and **a single database**.
- Data separation is enforced **logically** (e.g., using tenant IDs in rows).
- Minimal overhead, easy to manage, **but least isolated**.

**Analogy**:

Multiple companies operate in a **shared coworking space** on one floor, using the **same reception, same desks, and same conference rooms**. Everyone enters through the **same front door**. Privacy is limited to desk partitions.

---

### Shared AWS Account, **Multi-Database Tenancy**

> Shared Office Space with Separate Entrances and Individual Rooms

- All tenants use **the same application infrastructure**, but each tenant has **its own database** (or schema).
- Offers better **data isolation** while still sharing operational resources.
- Still a **single AWS account**, so resources like ECS/S3 may be reused.

**Analogy**:

Companies still share a **building floor**, but now **each company has its own locked room**. They can enter via **different doors**, though the floor’s utilities (like electricity, internet, etc.) are shared. More secure and better privacy than a single room.

---

### Single AWS Account with **Multiple Sub-Accounts per Tenant**

> Same Building, Different Floors, with Separate Lifts

- Centralized **root or management account** with **dedicated sub-accounts** per tenant.
- Central services (like CI/CD or image repo) reside in the management account.
- Tenants operate in their own **isolated AWS environments** with independent IAM, billing, and network scopes.

**Analogy**:

The business now owns a **multi-storey building**. Each tenant occupies **a separate floor**, with their **own private lift** and office design. While the building is the same, they never interfere with one another and have a good level of operational independence.

---

### Fully Isolated AWS Account per Tenant

> Each Company Has Its Own Building

- Every tenant has **its own AWS account**, with full resource and network isolation.
- **Most secure and compliant model**, often used in enterprise-grade SaaS or regulated industries (e.g., healthcare, finance).
- Slightly higher operational complexity and cost, but enables the most flexibility.

**Analogy**:

Each company owns and operates in **a separate building entirely**—with **its own reception, security, power, and IT systems**. No shared walls, no shared infrastructure. The **highest level of control, security, and customization** is possible.

---

## Summary Table

| Model                          | Analogy Description                     | Isolation Level | Operational Cost |
| ------------------------------ | --------------------------------------- | --------------- | ---------------- |
| Shared Account, Single DB      | Shared room in coworking space          | 🔴 Low          | 🟢 Low           |
| Shared Account, Multi DB       | Shared office floor with separate rooms | 🟠 Medium       | 🟢 Low-Medium    |
| Same Account with Sub-Accounts | Multi-floor building with private lifts | 🟡 Medium-High  | 🟡 Medium        |
| Fully Isolated AWS Account     | Separate buildings per tenant           | 🟢 Very High    | 🔴 High          |
