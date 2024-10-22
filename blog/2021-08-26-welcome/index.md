---
slug: user-story
title: User Story Post
authors: [slorber, yangshun]
tags: [facebook, docusaurus]
---

A user story describes product features from the end user’s perspective. Product managers and designers write these brief stories to convey why users need or want certain functionality

Here are a few tips you might find useful.

<!-- truncate -->

For software devs, it's easy to focus on what you're making and forget who you're building software for. While the Agile methodology stresses the importance of feature requirements, the end user should be top of mind throughout the entire software development process. Thankfully, you can frame these requirements in a short, simple description. We call these templates a user story.

**Creating user** stories helps devs understand the problems they’re solving for users and how to make their tasks easier. With simple, non-technical language, you can establish the value behind a piece of software. Not only will this help teams understand what they're making, but also why it matters.

## What is a user story?

![User Story](https://www.pluralsight.com/content/dam/pluralsight2/siege-blog-assets/user-story-definition.png)

A user story describes product features from the end user’s perspective. Product managers and designers write these brief stories to convey why users need or want certain functionality. Within the range of Agile team practices, user stories are the smallest unit of work, so they are intended to be specific.

## Three C's

Three elements go into creating user stories, known as the three C’s:

**The card**: This is the physical place where you write a user story. Placing the story on a physical card helps cement for team members the criteria and user problem it’s solving.

**The conversation**: User stories inspire team discussions on how to meet the user requirements. Your team can brainstorm new solutions by asking questions and reaching a shared understanding.

**The confirmation**: Product managers and designers need to lay out acceptance criteria that meet user requirements. Once your team wants to proceed with a solution, devs move forward with this confirmation.

## Standard user story template

User stories consist of one or two sentences. In that space, they describe end users who earn value through your product. The user story format reads: "As a [user], I want to [goal] so that [benefit]."

Let's explore that format in more detail:

**As a [user]**: Explain who you're building this product for. Go beyond job titles and cliches, and capture the user's inner sense of value. If your organization uses buyer personas, you can apply a specific one here.

**I want to [goal]**: Describe the user’s intentions rather than how they get there. The goal matters more than implementation.

**So that [benefit]**: Break down how meeting a goal benefits the user. Remember to look at the bigger picture or a deeper desire in users.

## Types of user stories

Depending on the complexity of your user stories, they may fit into different categories. Sometimes, you can even combine user stories into a larger narrative. Below are the four main types of user stories:

**Simple**: These are individual or self-contained user stories that focus on a particular user or type of product.

**Epic**: Groups of related user stories come together to form epics. They may involve multiple users working together or independently or multiple needs for a single type of user to achieve some goal or benefit.

**Thematic**: These are major investments and strategies that group epics together. Thematic user stories highlight how a company will achieve wider goals.

**Scaled Agile Framework (SAFe)**: These user stories add extra details such as a benefit hypothesis, cost of delay, or nonfunctional requirements.

![Types of User Stories](https://www.pluralsight.com/content/dam/pluralsight2/siege-blog-assets/user-story-types.png)

Simply add Markdown files (or folders) to the `blog` directory.

Regular blog authors can be added to `authors.yml`.

The blog post date can be extracted from filenames, such as:

- `2019-05-30-welcome.md`
- `2019-05-30-welcome/index.md`

A blog post folder can be convenient to co-locate blog post images:

![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)

The blog supports tags as well!

**And if you don't want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config.
