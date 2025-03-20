"use strict";(self.webpackChunkbetalectic_website=self.webpackChunkbetalectic_website||[]).push([["175"],{2842:function(e,t,n){n.r(t),n.d(t,{assets:function(){return o},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var s=n(2307),r=n(5893),a=n(65);let i={slug:"kafka-streaming-for-live-currency-rates",title:"Kafka Streaming for Live Currency Rates",authors:["Rakshith","Shreekant"],image:"https://images.ctfassets.net/23aumh6u8s0i/502rnJxNrX6JVYCUa9wjOe/b853ef9440c5d072a051b637c9c678c9/kafka-hero.jpg"},l="Kafka Streaming for Live Currency Rates",o={authorsImageUrls:[void 0,void 0]},c=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Why Not a Normal PostgreSQL Database?",id:"why-not-a-normal-postgresql-database",level:2},{value:"Why We Used Kafka?",id:"why-we-used-kafka",level:2},{value:"Implementation Overview",id:"implementation-overview",level:2},{value:"Additional Considerations",id:"additional-considerations",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){let t={h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,r.jsxs)(t.p,{children:["In the fintech world, live currency rate streaming is a critical feature that ensures users receive real-time updates on exchange rates. Our challenge was to build a ",(0,r.jsx)(t.strong,{children:"continuous live rate streaming system"})," for Real-Time Currency Exchange Rates that updates ",(0,r.jsx)(t.strong,{children:"every second"}),"  for multiple currency pairs and serves ",(0,r.jsx)(t.strong,{children:"multiple users concurrently"}),". Traditional database-driven approaches struggled with performance bottlenecks, latency, and scalability issues, prompting us to explore a more robust solution."]}),"\n",(0,r.jsx)(t.h2,{id:"why-not-a-normal-postgresql-database",children:"Why Not a Normal PostgreSQL Database?"}),"\n",(0,r.jsx)(t.p,{children:"While PostgreSQL is a powerful relational database, it was not well-suited for real-time, high-frequency data streaming due to the following reasons:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"High Write and Read Latency:"})," Storing every second\u2019s rate updates would lead to frequent write operations, causing significant latency when querying real-time data."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Scalability Issues:"})," A large number of concurrent users fetching live rates would overload the database, leading to slow response times."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Polling Inefficiency:"})," Fetching the latest rates via polling would increase database load and lead to unnecessary resource consumption."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Event-Driven Processing Challenges:"})," A traditional database does not natively support event-driven architectures, making real-time processing complex."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"why-we-used-kafka",children:"Why We Used Kafka?"}),"\n",(0,r.jsxs)(t.p,{children:["To address these challenges, we chose ",(0,r.jsx)(t.strong,{children:"Apache Kafka"})," as the backbone of our live rate streaming system. Here\u2019s why:"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Real-Time Data Streaming:"})," Kafka\u2019s publish-subscribe model allows us to ",(0,r.jsx)(t.strong,{children:"continuously push live rates"})," without querying a database."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"High Throughput and Low Latency:"})," Kafka can handle millions of messages per second with minimal latency, ensuring seamless rate updates."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Scalability:"})," It supports partitioning, allowing horizontal scaling as the number of users grows."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Fault Tolerance:"})," Kafka\u2019s distributed architecture ensures data durability and prevents single points of failure."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Decoupling Producers and Consumers:"})," Currency rate providers (producers) can push data independently of users (consumers), reducing bottlenecks."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Efficient Data Processing:"})," Kafka integrates well with stream processing frameworks like Apache Flink or Kafka Streams to process and analyze data in real time."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"implementation-overview",children:"Implementation Overview"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Data Source Integration:"})," We fetch live currency rates from multiple financial market APIs."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Kafka Producer:"})," A producer service ingests real-time currency rates into ",(0,r.jsx)(t.strong,{children:"Kafka topics"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Kafka Topics & Partitioning:"})," All currency pair details are received from a single subscribed topic, rather than separate topics for each pair, ensuring centralized data access."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Kafka Consumer:"})," User applications subscribe to relevant topics to receive ",(0,r.jsx)(t.strong,{children:"instant rate updates"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"WebSockets for UI Updates:"})," A WebSocket layer pushes live rate updates to the front end, ensuring a smooth real-time experience."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Monitoring & Alerts:"})," Kafka\u2019s built-in metrics and third-party tools (Prometheus, Grafana) monitor system performance."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"additional-considerations",children:"Additional Considerations"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Message Retention:"})," We configured a short retention period since users only need the latest rate."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Backpressure Handling:"})," Implemented a rate limiter to prevent overwhelming consumers."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Security & Authentication:"})," Used Kafka ACLs and SSL encryption to secure data transmission."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsx)(t.p,{children:"Using Kafka for real-time currency rate streaming enabled us to build a scalable, low-latency, and fault-tolerant system that efficiently handles high-frequency updates for multiple users. This approach significantly outperformed traditional database-driven methods, making Kafka the perfect choice for our use case."})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},2307:function(e){e.exports=JSON.parse('{"permalink":"/pr-preview/pr-32/blog/kafka-streaming-for-live-currency-rates","source":"@site/blog/2025-03-15-kafka-streaming.md","title":"Kafka Streaming for Live Currency Rates","description":"Problem Statement","date":"2025-03-15T00:00:00.000Z","tags":[],"hasTruncateMarker":true,"authors":[{"name":"Rakshith V S","title":"Full stack web developer","url":"https://github.com/RakshithBeta","page":{"permalink":"/pr-preview/pr-32/blog/authors/rakshith"},"socials":{"x":"https://x.com/im_Rakshith_","linkedin":"https://www.linkedin.com/in/rakshith1999/"},"imageURL":"https://media.licdn.com/dms/image/v2/D5603AQF0R5D1BSug0g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731681562851?e=1747872000&v=beta&t=dmEjL5i8RgMLM4utikRk-TRTDXcW7rcelAv5c9I3-YU","key":"Rakshith"},{"name":"Shreekant totla","title":"Full stack developer","url":"https://github.com/Shreekant-totla","page":{"permalink":"/pr-preview/pr-32/blog/authors/shreekant"},"socials":{"x":"https://x.com/shreekant_totla","linkedin":"https://www.linkedin.com/in/shreekant-totla-9484811a7"},"imageURL":"https://media.licdn.com/dms/image/v2/D5603AQH6ebikD7K9kw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1691139304171?e=1747872000&v=beta&t=F0ama3reXX1HM1c2TTelKFba4b6nlSEa2F-VX0WwHc4","key":"Shreekant"}],"frontMatter":{"slug":"kafka-streaming-for-live-currency-rates","title":"Kafka Streaming for Live Currency Rates","authors":["Rakshith","Shreekant"],"image":"https://images.ctfassets.net/23aumh6u8s0i/502rnJxNrX6JVYCUa9wjOe/b853ef9440c5d072a051b637c9c678c9/kafka-hero.jpg"},"unlisted":false,"nextItem":{"title":"Building Asset Monitoring Systems for Lending Apps | Secured Lending Solutions","permalink":"/pr-preview/pr-32/blog/asset-monitoring-system-lending-apps"}}')}}]);