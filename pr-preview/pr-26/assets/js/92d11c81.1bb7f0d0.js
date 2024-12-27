"use strict";(self.webpackChunkbetalectic_website=self.webpackChunkbetalectic_website||[]).push([["395"],{5662:function(e){e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"second-story","metadata":{"permalink":"/pr-preview/pr-26/blog/second-story","source":"@site/blog/2024-12-03-second-blog-post.md","title":"Second Story Post","description":"My ideas for blog posts inevitably start to dry up after over two years at Apache APISIX. Hence, I did some triage on the APISIX repo. I stumbled upon this one question:","date":"2024-12-03T00:00:00.000Z","tags":[{"inline":false,"label":"Facebook","permalink":"/pr-preview/pr-26/blog/tags/facebook","description":"Facebook tag description"},{"inline":false,"label":"Docusaurus","permalink":"/pr-preview/pr-26/blog/tags/docusaurus","description":"Docusaurus tag description"}],"readingTime":1.835,"hasTruncateMarker":true,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","page":{"permalink":"/pr-preview/pr-26/blog/authors/all-sebastien-lorber-articles"},"socials":{"x":"https://x.com/sebastienlorber","linkedin":"https://www.linkedin.com/in/sebastienlorber/"},"imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"slug":"second-story","title":"Second Story Post","authors":["slorber"],"tags":["facebook","docusaurus"],"image":"https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg"},"unlisted":false,"nextItem":{"title":"First Amazing Featured Post","permalink":"/pr-preview/pr-26/blog/2024/12/02/first-amazing-post"}},"content":"My ideas for blog posts inevitably start to dry up after over two years at Apache APISIX. Hence, I did some triage on the APISIX repo. I stumbled upon this one question:\\n\\nWe have a requirement to use a plugin, where we need to route the traffic on percentage basis. I\'ll give an example for better understanding.\\n\\n\x3c!-- truncate --\x3e\\n\\n## What is URL\\n\\nWe have an URL https://xyz.com/ca/fr/index.html where ca is country (canada) and fr is french language. Now the traffic needs to routed 10% to https://xyz.com/ca/en/index.html and the remaining 90% to https://xyz.com/ca/fr/index.html. And whenever we\'re routing the traffic to https://xyz.com/ca/en/index.html we need to set a cookie. So for next call, if the cookie is there, it should directly go to https://xyz.com/ca/en/index.html else it should go via a 10:90 traffic split. What is the best possible way to achieve this ??\\n\\n-- help request: Setting cookie based on a condition\\n\\n## Use case\\n\\nThe use case is interesting, and I decided to tackle it.\\n\\nI\'ll rephrase the requirements first:\\n\\nIf no cookie is set, randomly forward the request to one of the upstreams\\nIf a cookie has been set, forward the request to the correct upstream.\\nFor easier testing:\\n\\nSoftware engineering is a field that always changes to keep up with innovation and client needs. As developers, we have a difficult job staying up to date with these swift changes. It is imperative that we approach our information sources selectively because it is so easy for anyone to create a blog and publish anything.\\n\\n## Change of odds\\n\\nI change the odds from 10:90 to 50:50\\nI use the root instead of a host plus a path\\nFinally, I assume that the upstream sets the cookie.\\n\\nNewcomers to Apache APISIX understand the matching algorithm very quickly: if a request matches a route\'s host, method, and path, forward it to the upstream set.\\n\\nEverything you need to know about CSS in blog and guide form. CSS Tricks is a top resource for developers who need to find out how anything in CSS works. I definitely use their site as a main resource for figuring out the best practices to meet the designs of designers on my products!"},{"id":"/2024/12/02/first-amazing-post","metadata":{"permalink":"/pr-preview/pr-26/blog/2024/12/02/first-amazing-post","source":"@site/blog/2024-12-02-first-amazing-post.md","title":"First Amazing Featured Post","description":"This is a featured blog post.","date":"2024-12-01T00:00:00.000Z","tags":[{"inline":false,"label":"Featured","permalink":"/pr-preview/pr-26/blog/tags/featured","description":"Featured tag description"}],"readingTime":0.505,"hasTruncateMarker":true,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","page":{"permalink":"/pr-preview/pr-26/blog/authors/all-sebastien-lorber-articles"},"socials":{"x":"https://x.com/sebastienlorber","linkedin":"https://www.linkedin.com/in/sebastienlorber/"},"imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"title":"First Amazing Featured Post","date":"2024-12-01T00:00:00.000Z","description":"This is a featured blog post.","tags":["featured"],"authors":["slorber"]},"unlisted":false,"prevItem":{"title":"Second Story Post","permalink":"/pr-preview/pr-26/blog/second-story"},"nextItem":{"title":"Building Scalable Mobile Apps for Financial Services - Key Features and Best Practices","permalink":"/pr-preview/pr-26/blog/user-story"}},"content":"Content of the featured post goes here.\\n\\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\\n\\n\x3c!-- truncate --\x3e\\n\\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},{"id":"user-story","metadata":{"permalink":"/pr-preview/pr-26/blog/user-story","source":"@site/blog/2024-10-12-welcome/index.md","title":"Building Scalable Mobile Apps for Financial Services - Key Features and Best Practices","description":"In today\u2019s fast-paced digital landscape, mobile apps have become an essential tool for financial services to engage with customers and deliver value. With the rise of fintech innovations and the proliferation of smartphones, consumers now expect instant access to banking, investment, insurance, and payment services at their fingertips. This shift has driven financial institutions to prioritize mobile-first strategies to meet the demands of tech-savvy users.","date":"2024-10-12T00:00:00.000Z","tags":[{"inline":false,"label":"Fintech","permalink":"/pr-preview/pr-26/blog/tags/fintech","description":"Fintech tag description"},{"inline":false,"label":"Docusaurus","permalink":"/pr-preview/pr-26/blog/tags/docusaurus","description":"Docusaurus tag description"}],"readingTime":3.145,"hasTruncateMarker":true,"authors":[{"name":"Manasa Madapu","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","page":{"permalink":"/pr-preview/pr-26/blog/authors/manasa"},"socials":{"x":"https://x.com/Manasa","linkedin":"https://www.linkedin.com/in/Manasa/"},"imageURL":"https://github.com/yangshun.png","key":"Manasa"}],"frontMatter":{"slug":"user-story","title":"Building Scalable Mobile Apps for Financial Services - Key Features and Best Practices","authors":["Manasa"],"tags":["fintech","docusaurus"]},"unlisted":false,"prevItem":{"title":"First Amazing Featured Post","permalink":"/pr-preview/pr-26/blog/2024/12/02/first-amazing-post"}},"content":"In today\u2019s fast-paced digital landscape, mobile apps have become an essential tool for financial services to engage with customers and deliver value. With the rise of fintech innovations and the proliferation of smartphones, consumers now expect instant access to banking, investment, insurance, and payment services at their fingertips. This shift has driven financial institutions to prioritize mobile-first strategies to meet the demands of tech-savvy users.\\n\\n\x3c!-- truncate --\x3e\\n\\nFrom managing portfolios to making real-time payments, the convenience and accessibility offered by mobile apps have redefined the way financial services are consumed. As a result, the financial services sector is witnessing a growing demand for mobile apps that combine functionality, security, and personalization to create a superior user experience.\\n\\nHowever, meeting this demand isn\u2019t without challenges. One critical aspect of mobile app development in the financial domain is scalability. Financial apps often face significant fluctuations in usage, particularly during market volatility, seasonal peaks, or promotional campaigns. Scalability ensures that an app can handle these surges in traffic and transactions without compromising on performance or user satisfaction. A scalable app not only provides a seamless experience during peak loads but also supports long-term growth as the user base expands.\\n\\n## Key Features of Scalable Financial Apps\\n\\n## Robust Security\\n\\n**End-to-end encryption and secure data storage**: End-to-end encryption ensures that sensitive data, such as financial transactions and personal details, remains secure during transmission by encrypting it from the sender\u2019s device to the recipient\u2019s, making it inaccessible to unauthorized parties. Complementing this, secure data storage techniques, such as encrypted databases and tokenization, protect user information from breaches and unauthorized access, ensuring compliance with regulatory standards and safeguarding user trust.\\n\\n**Multi-factor authentication** and compliance with regulations like RBI, SEBI, IRDAI, Data Protection Bill (expected) etc. In the financial services sector, robust security measures are non-negotiable, with multi-factor authentication (MFA) serving as a cornerstone for user protection. MFA adds an extra layer of security by requiring users to verify their identity through multiple factors such as passwords, biometric scans, or one-time passwords (OTPs), ensuring that sensitive financial data remains safeguarded.\\n\\n## User-Friendly Interface:\\n\\n**Intuitive UI/UX for financial literacy and accessibility**\\n\\nAn intuitive UI/UX is essential in financial apps to simplify complex financial processes and make them easily understandable for users of all experience levels, thereby promoting financial literacy. Additionally, accessibility features, such as screen readers, adjustable text sizes, and multi-language support, ensure that the app is inclusive and usable by a diverse audience, enhancing user engagement and satisfaction.\\n\\n## Real-Time Data Processing\\n\\nReal-time data processing enables financial apps to integrate live market feeds, providing users with up-to-the-minute updates on stock prices, currency rates, and other market dynamics essential for informed decision-making. Additionally, instant transaction updates ensure transparency and build user trust by confirming payments, transfers, or trades without delays, creating a seamless and reliable user experience.\\n\\n## Customizable Dashboards\\n\\nCustomizable dashboards empower users by presenting personalized insights tailored to their financial goals, preferences, and activity patterns, such as spending trends, portfolio performance, or savings milestones. By allowing users to configure widgets, select relevant data, and prioritize key metrics, these dashboards enhance engagement and decision-making, creating a more user-centric experience.\\n\\n**In modern mutual fund (MF) apps**, custom portfolios and dashboards go beyond basic portfolio tracking by offering deeply personalized goal-tracking features tailored to each investor\u2019s unique objectives. Investors can define specific financial goals, such as saving for a vacation, purchasing a home, or planning for retirement, and the app aligns their investments with these targets.\\n\\nThe dashboard provides clear visualizations of progress toward each goal, highlighting contributions, returns, and remaining targets in an intuitive format. Additionally, these apps often use advanced algorithms to suggest rebalancing strategies or additional investments to help users stay on track, ensuring a highly individualized investment experience that evolves with their needs."}]}}')}}]);