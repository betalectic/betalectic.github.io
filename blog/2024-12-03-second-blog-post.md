---
slug: second-story
title: Second Story Post
authors: [shrey]
tags: [facebook, docusaurus]
image: https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg
---

My ideas for blog posts inevitably start to dry up after over two years at Apache APISIX. Hence, I did some triage on the APISIX repo. I stumbled upon this one question:

We have a requirement to use a plugin, where we need to route the traffic on percentage basis. I'll give an example for better understanding.

<!-- truncate -->

## What is URL

We have an URL https://xyz.com/ca/fr/index.html where ca is country (canada) and fr is french language. Now the traffic needs to routed 10% to https://xyz.com/ca/en/index.html and the remaining 90% to https://xyz.com/ca/fr/index.html. And whenever we're routing the traffic to https://xyz.com/ca/en/index.html we need to set a cookie. So for next call, if the cookie is there, it should directly go to https://xyz.com/ca/en/index.html else it should go via a 10:90 traffic split. What is the best possible way to achieve this ??

-- help request: Setting cookie based on a condition

## Use case

The use case is interesting, and I decided to tackle it.

I'll rephrase the requirements first:

If no cookie is set, randomly forward the request to one of the upstreams
If a cookie has been set, forward the request to the correct upstream.
For easier testing:

Software engineering is a field that always changes to keep up with innovation and client needs. As developers, we have a difficult job staying up to date with these swift changes. It is imperative that we approach our information sources selectively because it is so easy for anyone to create a blog and publish anything.

## Change of odds

I change the odds from 10:90 to 50:50
I use the root instead of a host plus a path
Finally, I assume that the upstream sets the cookie.

Newcomers to Apache APISIX understand the matching algorithm very quickly: if a request matches a route's host, method, and path, forward it to the upstream set.

Everything you need to know about CSS in blog and guide form. CSS Tricks is a top resource for developers who need to find out how anything in CSS works. I definitely use their site as a main resource for figuring out the best practices to meet the designs of designers on my products!
