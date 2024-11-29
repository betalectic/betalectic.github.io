import Link from "@docusaurus/Link";
import { Border } from "../components/studio/components/Border";
import { ContactSection } from "../components/studio/components/ContactSection";
import { Container } from "../components/studio/components/Container";
import { FadeIn, FadeInStagger } from "../components/studio/components/FadeIn";
import { PageIntro } from "../components/studio/components/PageIntro";
import { Testimonial } from "../components/studio/components/Testimonial";
import Icons from "../lib/icons";
import Layout from "@theme/Layout";
import { Button } from "../components/studio/components/Button";
import { Blockquote } from "../components/studio/components/Blockquote";
import { formatDate } from "../lib/formatDate";

// function CaseStudies({ caseStudies }) {
//   return (
//     <Container className="w-full mt-40">
//       <FadeIn>
//         <h2 className="font-display text-2xl font-semibold text-neutral-950">
//           Case studies
//         </h2>
//       </FadeIn>
//       <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
//         {caseStudies.map((caseStudy, index) => (
//           <FadeIn key={`${caseStudy.client - index}`}>
//             <article>
//               <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
//                 <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
//                   <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
//                     <span className="absolute inset-0 rounded-3xl" />
//                     {caseStudy.icon && (
//                       <caseStudy.icon
//                         className="w-16 h-16"
//                         aria-hidden="true"
//                       />
//                     )}
//                     <h3 className="mt-6 text-sm font-semibold text-neutral-950 dark:text-neutral-50 sm:mt-0 lg:mt-8">
//                       {caseStudy.client}
//                     </h3>
//                   </div>
//                   <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
//                     <p className="text-sm tracking-tight text-neutral-950 dark:text-neutral-50 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
//                       {caseStudy.service}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
//                   <p className="font-display text-4xl font-medium text-neutral-950">
//                     <Link
//                       className="text-neutral-950 dark:text-neutral-50"
//                       href={caseStudy.href}
//                     >
//                       {caseStudy.title}
//                     </Link>
//                   </p>
//                   <div className="mt-6 space-y-6 text-base text-neutral-600 dark:text-neutral-300">
//                     {caseStudy.summary}
//                   </div>
//                   <div className="mt-8 flex">
//                     <Button
//                       className=""
//                       invert={true}
//                       href={caseStudy.href}
//                       aria-label={`Read case study: ${caseStudy.client}`}
//                     >
//                       Read case study
//                     </Button>
//                   </div>
//                 </div>
//               </Border>
//             </article>
//           </FadeIn>
//         ))}
//       </div>
//     </Container>
//   );
// }

function CaseStudies({ caseStudies }) {
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Case studies
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {caseStudies.map((caseStudy) => (
          <FadeIn key={caseStudy.client}>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <span className="absolute inset-0 rounded-3xl" />
                    {caseStudy.icon && (
                      <caseStudy.icon
                        className="w-16 h-16"
                        aria-hidden="true"
                      />
                    )}
                    <h3 className="mt-6 text-sm font-semibold text-neutral-950 dark:text-neutral-50 sm:mt-0 lg:mt-8">
                      {caseStudy.client}
                    </h3>
                  </div>
                  <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                    <p className="text-sm tracking-tight text-neutral-950 dark:text-neutral-50 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                      {caseStudy.service}
                    </p>
                    <p className="text-sm text-neutral-950 dark:text-neutral-50 lg:mt-2">
                      <time dateTime={caseStudy.date}>
                        {formatDate(caseStudy.date)}
                      </time>
                    </p>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950 dark:text-neutral-50">
                    <Link
                      className="text-neutral-950 dark:text-neutral-50"
                      href={caseStudy.href}
                    >
                      {caseStudy.title}
                    </Link>
                  </p>
                  <div className="mt-6 space-y-6 text-base text-neutral-600 dark:text-neutral-300">
                    {caseStudy.summary.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8 flex">
                    <Button
                      invert={false}
                      href={caseStudy.href}
                      aria-label={`Read case study: ${caseStudy.client}`}
                    >
                      Read case study
                    </Button>
                  </div>
                  {caseStudy.testimonial && (
                    <Blockquote
                      author={caseStudy.testimonial.author}
                      className="mt-12"
                    >
                      {caseStudy.testimonial.content}
                    </Blockquote>
                  )}
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  );
}

const clients = [
  [
    "Principal India",
    require("../images/clients/principal-india.webp").default,
  ],
  ["Cybrilla", require("../images/clients/cybrilla.png").default],
  ["Auction Bazaar", require("../images/clients/auction-bazaar.png").default],
  ["Chick-fil-A", require("../images/clients/chick-fil-a.png").default],
  ["Finezzy", require("../images/clients/finezzy.png").default],
  ["Evoilve", require("../images/clients/evoilve.png").default],
  ["Novo", require("../images/clients/novo.png").default],
  ["Wiredup", require("../images/clients/wiredup.png").default],
  ["Hyperbola", require("../images/clients/hyperbola.png").default],
  ["FP", require("../images/clients/FP.png").default],
  ["Analitica", require("../images/clients/analitica_logo.png").default],
  ["Kumari", require("../images/clients/kumari.png").default],
  ["UEIN", require("../images/clients/uecin.png").default],
  ["Vasista", require("../images/clients/vasista.png").default],
];

function Clients() {
  return (
    <div className="bg-neutral-100 dark:bg-neutral-300 rounded-4xl py-8 sm:mt-8 sm:py-32 lg:mt-48">
      <div className="max-w-7xl px-2 mx-auto">
        <FadeIn>
          <h2 className="font-display text-2xl text-black font-semibold text-center sm:text-left">
            You’re in good company
          </h2>
        </FadeIn>
        <FadeInStagger className="mt-10" faster>
          <Border as={FadeIn} />
          <ul
            role="list"
            className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client} className="group">
                <FadeIn className="overflow-hidden">
                  <Border className="pt-12 group-[&:nth-child(-n+2)]:-mt-px sm:group-[&:nth-child(3)]:-mt-px lg:group-[&:nth-child(4)]:-mt-px">
                    <img
                      alt={client}
                      src={logo}
                      className="w-36 h-12 object-contain aspect-auto"
                    />
                  </Border>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <Layout
      title="Our Work"
      description="We believe in efficiency and maximizing our resources to provide the best value to our clients."
    >
      <PageIntro
        eyebrow="Our work"
        title="Proven solutions for real-world problems."
      >
        <p>
          We believe in efficiency and maximizing our resources to provide the
          best value to our clients. The primary way we do that is by re-using
          the same five projects we’ve been developing for the past decade.
        </p>
      </PageIntro>

      <CaseStudies
        caseStudies={[
          {
            href: "./family-fund/",
            client: "FamilyFund",
            title: "Skip the bank, borrow from those you trust",
            description:
              "FamilyFund is a crowdfunding platform for friends and family. Allowing users to take personal loans from their network without a traditional financial institution.",
            summary: [
              "FamilyFund is a crowdfunding platform for friends and family. Allowing users to take personal loans from their network without a traditional financial institution.",
              "We developed a custom CMS to power their blog with and optimised their site to rank higher for the keywords “Gary Vee” and “Tony Robbins”.",
            ],
            icon: Icons.mfStack,
            date: "2023-01",
            service: "Web development, CMS",
            testimonial: {
              author: { name: "Debra Fiscal", role: "CEO of FamilyFund" },
              content:
                "Working with Studio, we felt more like a partner than a customer. They really resonated with our mission to change the way people convince their parents to cash out their pensions.",
            },
          },
          {
            client: "Phobia",
            title: "Overcome your fears, find your match",
            description:
              "Find love in the face of fear — Phobia is a dating app that matches users based on their mutual phobias so they can be scared together.",
            summary: [
              "Find love in the face of fear — Phobia is a dating app that matches users based on their mutual phobias so they can be scared together.",
              "We worked with Phobia to develop a new onboarding flow. A user is shown pictures of common phobias and we use the microphone to detect which ones make them scream, feeding the results into the matching algorithm.",
            ],
            icon: Icons.genAi2,
            date: "2022-06",
            service: "App development",
            testimonial: {
              author: { name: "Jenny Wilson", role: "CPO of Phobia" },
              content:
                "The team at Studio went above and beyond with our onboarding, even finding a way to access the user’s microphone without triggering one of those annoying permission dialogs.",
            },
          },
          {
            client: "Unseal",
            title: "Get a hodl of your health",
            description:
              "Unseal is the first NFT platform where users can mint and trade NFTs of their own personal health records, allowing them to take control of their data.",
            summary: [
              "Unseal is the first NFT platform where users can mint and trade NFTs of their own personal health records, allowing them to take control of their data.",
              "We built out the blockchain infrastructure that supports Unseal. Unfortunately, we took a massive loss on this project when Unseal’s cryptocurrency, PlaceboCoin, went to zero.",
            ],
            icon: Icons.uiUxDesign,
            date: "2022-10",
            service: "Blockchain development",
            testimonial: {
              author: {
                name: "Emily Selman",
                role: "Head of Engineering at Unseal",
              },
              content:
                "Studio did an amazing job building out our core blockchain infrastructure and I’m sure once PlaceboCoin rallies they’ll be able to finish the project.",
            },
          },
        ]}
      />

      <Testimonial className="mt-24 sm:mt-32 lg:mt-40">
        We approached because we loved their past work. They delivered something
        remarkably similar in record time.
      </Testimonial>

      <Clients />

      <ContactSection />
    </Layout>
  );
}
