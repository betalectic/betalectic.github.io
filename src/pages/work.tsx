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

function CaseStudies({ caseStudies }) {
  return (
    <Container className="w-full mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Case studies
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {caseStudies.map((caseStudy, index) => (
          <FadeIn key={`${caseStudy.client - index}`}>
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
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                    <Link
                      className="text-neutral-950 dark:text-neutral-50"
                      href={caseStudy.href}
                    >
                      {caseStudy.title}
                    </Link>
                  </p>
                  <div className="mt-6 space-y-6 text-base text-neutral-600 dark:text-neutral-300">
                    {caseStudy.summary}
                  </div>
                  <div className="mt-8 flex">
                    <Button
                      className=""
                      invert={true}
                      href={caseStudy.href}
                      aria-label={`Read case study: ${caseStudy.client}`}
                    >
                      Read case study
                    </Button>
                  </div>
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
  ["Analitica", require("../images/clients/analitica.png").default],
  ["Kumari", require("../images/clients/kumari.png").default],
];

function Clients() {
  return (
    // <div className="bg-neutral-100 dark:bg-neutral-300 rounded-4xl py-8 sm:mt-8 sm:py-32 lg:mt-48">
    //   <div className="max-w-7xl mx-auto">
    //     <FadeIn>
    //       <h2 className="font-display text-2xl font-semibold ">
    //         You’re in good company
    //       </h2>
    //     </FadeIn>
    //     <FadeInStagger className="mt-10" faster>
    //       <Border as={FadeIn} />
    //       <ul
    //         role="list"
    //         className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4"
    //       >
    //         {clients.map(([client, logo]) => (
    //           <li key={client} className="group">
    //             <FadeIn className="overflow-hidden">
    //               <Border className="pt-12 group-[&:nth-child(-n+2)]:-mt-px sm:group-[&:nth-child(3)]:-mt-px lg:group-[&:nth-child(4)]:-mt-px">
    //                 <img
    //                   alt={client}
    //                   src={logo}
    //                   className="w-36 h-12 object-contain aspect-auto"
    //                 />
    //               </Border>
    //             </FadeIn>
    //           </li>
    //         ))}
    //       </ul>
    //     </FadeInStagger>
    //   </div>
    // </div>
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
            href: "/",
            date: "2023-11-01",
            title: "Betalectic's MF Stack",
            client: "Test Client",
            service: "Test Service",
            summary:
              "Distribute Mutual Funds efficiently with our robust MF stack, delivering seamless solutions in just 6-8 weeks for fast market entry.",
            icon: Icons.mfStack,
          },
          {
            href: "/",
            date: "2024-11-01",
            title: "Betalectic AI",
            client: "Test Client",
            service: "Test Service",
            summary:
              "Harness Betalectic AI’s advanced Generative AI solutions, designed to meet your unique business needs and drive transformative growth.",
            icon: Icons.genAi2,
          },
          {
            href: "/",
            date: "2025-11-01",
            title: "UX Designs",
            client: "Test Client",
            service: "Test Service",
            summary:
              "Create intuitive, visually compelling user interfaces with our expert UI/UX design services, enhancing user experience and engagement.",
            icon: Icons.uiUxDesign,
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
