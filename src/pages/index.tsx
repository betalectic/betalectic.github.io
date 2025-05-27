import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import { Container } from "../components/studio/components/Container";
import { FadeIn, FadeInStagger } from "../components/studio/components/FadeIn";
import { SectionIntro } from "../components/studio/components/SectionIntro";
import { GridPattern } from "../components/studio/components/GridPattern";
import { Testimonial } from "../components/studio/components/Testimonial";
import { ContactSection } from "../components/studio/components/ContactSection";
import {
  GridList,
  GridListItem,
} from "../components/studio/components/GridList";
import { OrbitingCircles } from "../components/magicui/orbiting-circles";
import { ShimmerButton } from "../components/magicui/shimmer-button";
import { useState, useEffect } from "react";
import Icons from "../lib/icons";
import Projects from "../components/Projects";

function CaseStudies({ caseStudies }: any) {
  return (
    <>
      <SectionIntro
        title="8+ Years of Excellence in Digital Solutions"
        className="mt-24 sm:mt-32 lg:mt-40 text-neutral-900 dark:text-neutral-50"
      >
        <p className="text-base text-neutral-600 dark:text-neutral-300">
          We believe technology is the answer to the world’s greatest
          challenges. By harnessing its power, we can create innovative
          solutions that drive progress and solve complex problems across
          industries. Through collaboration and innovation, we aim to make
          technology accessible and impactful for all
        </p>
      </SectionIntro>
      <Container className="my-20">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 dark:bg-neutral-900 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 dark:hover:bg-neutral-800 sm:p-8">
                <h3 className="flex items-center">
                  <span className="absolute inset-0 rounded-3xl" />
                  {caseStudy.icon && (
                    <caseStudy.icon className="w-16 h-16" aria-hidden="true" />
                  )}
                </h3>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950 dark:text-neutral-50">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600 dark:text-neutral-300">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
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
  ["Hyperbola", require("../images/clients/hyperbola_new.png").default],
  ["FP", require("../images/clients/FP.png").default],
  ["Analitica", require("../images/clients/analitica_logo.png").default],
  ["Kumari", require("../images/clients/kumari.png").default],
  ["UEIN", require("../images/clients/uecin.png").default],
  ["Vasista", require("../images/clients/vasista.png").default],
];

function Clients() {
  return (
    <div className="rounded-4xl bg-neutral-100 dark:bg-neutral-300 py-20 sm:mt-8 sm:py-32 lg:mt-48">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center my-auto font-display text-sm font-semibold tracking-wider text-black sm:text-left">
            Trusted by Leading Brands and Innovators
          </h2>
          <div className="h-px flex-auto bg-neutral-500" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 p-0 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => {
              return (
                <li key={client} className="list-none">
                  <FadeIn>
                    <div className="flex justify-center items-center">
                      <img
                        alt={client}
                        src={logo}
                        className="w-36 h-12 object-contain aspect-[7/2]"
                      />
                    </div>
                  </FadeIn>
                </li>
              );
            })}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
}

function OrbitingCirclesDemo() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const updateDeviceType = () => {
      const width = window.innerWidth;
      setIsMobile(width < 426);
      setIsTablet(width >= 426 && width <= 768);
    };

    updateDeviceType();
    window.addEventListener("resize", updateDeviceType);

    // Cleanup on component unmount
    return () => window.removeEventListener("resize", updateDeviceType);
  }, []);

  const radius = isMobile ? 60 : isTablet ? 70 : 80;
  const outerRadius = isMobile ? 150 : isTablet ? 160 : 190;

  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black"></span>

      {/* Inner Circles */}
      <>
        <OrbitingCircles
          text="Web & Mobile"
          className="size-[80px] border-none bg-transparent"
          duration={20}
          delay={20}
          radius={radius}
        >
          <Icons.webMobile />
        </OrbitingCircles>
        <OrbitingCircles
          text="APIs"
          className="size-[80px] border-none bg-transparent"
          duration={20}
          delay={10}
          radius={radius}
        >
          <Icons.api />
        </OrbitingCircles>

        {/* Outer Circles (reverse) */}
        <OrbitingCircles
          text="BFSI"
          className="size-[80px] border-none bg-transparent"
          radius={outerRadius}
          duration={20}
          delay={25}
          reverse
        >
          <Icons.bfsi />
        </OrbitingCircles>
        <OrbitingCircles
          text="DevOps"
          className="size-[80px] border-none bg-transparent"
          radius={outerRadius}
          duration={20}
          delay={19}
          reverse
        >
          <Icons.devOps />
        </OrbitingCircles>
        <OrbitingCircles
          text="AI"
          className="size-[80px] border-none bg-transparent"
          radius={outerRadius}
          duration={20}
          delay={13}
          reverse
        >
          <Icons.genAi />
        </OrbitingCircles>
      </>
    </div>
  );
}

export default function Home(): JSX.Element {
  let shouldReduceMotion = useReducedMotion();

  return (
    <Layout
      title="Betalectic: We build Web Apps, Mobile Apps, UI, UX designs, APIs, Generative AI solutions & DevOps"
      description="Betalectic is a custom software development company specialising in building scalable web and mobile applications, robust APIs, and generative AI solutions. With expertise in DevOps, secure deployments, and scalable tech architecture, we support businesses across industries to bring their digital products to market faster"
    >
      <MotionConfig
        transition={shouldReduceMotion ? { duration: 0 } : undefined}
      >
        <motion.div
          layout
          className="relative isolate flex w-full flex-col pt-9"
        >
          <motion.div
            layout
            className="relative isolate flex w-full flex-col pt-9"
          >
            <GridPattern
              className="absolute inset-x-0 -top-24 -z-10 h-[1000px] w-full fill-neutral-50  stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
              yOffset={-96}
              interactive
            />

            <main className="w-full flex-auto">
              <Container className="mt-12 lg:mt-28">
                <div className="md:flex">
                  <FadeIn className="md:w-full mx-auto flex flex-col gap-8 items-center md:items-start">
                    <h1 className="font-display text-6xl md:text-7xl font-bold md:text-start text-center tracking-tight text-neutral-950 dark:text-gray-50 [text-wrap:balance] m-0">
                      {/* Your End-to-End Product Development Partner — Crafting,
                      Building, and Scaling Solutions */}
                      {/* Your Tech Partner in Taking Product Ideas to Market
                      Success & Beyond */}
                      {/* <p>
                        We build APIs, Web & Mobile Apps, and support you for
                        years.
                      </p> */}
                      Turning Visionary Ideas into Market-Ready Technology
                    </h1>

                    <p className="text-xl md:text-start text-center text-neutral-600 dark:text-neutral-300 m-0">
                      We've been transforming visions into successful digital
                      products since 2016, crafting developer-friendly{" "}
                      <span className="font-semibold">APIs</span>, intuitive{" "}
                      <span className="font-semibold">web apps</span> and{" "}
                      <span className="font-semibold">mobile apps</span> with
                      user-friendly <span className="font-semibold">UX/UI</span>
                      . Our partnerships extend beyond launch - we stay as{" "}
                      <span className="font-semibold">your technical team</span>{" "}
                      evolving your product while you grow.
                    </p>

                    <Link to="https://cal.com/manasa-madapu">
                      <ShimmerButton className="shadow-2xl">
                        <span className="whitespace-pre-wrap text-center text-xl font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-2xl">
                          Setup a 30 min free call
                        </span>
                      </ShimmerButton>
                    </Link>
                  </FadeIn>

                  <div className="z-50 md:w-full">
                    {/* <img
                      alt="Betalectic logo"
                      src={require("@site/static/img/hexagons.png").default}
                    /> */}
                    <OrbitingCirclesDemo />
                    {/* <AnimatedBeamDemo /> */}
                  </div>
                </div>
              </Container>

              <Clients />

              <div className="mt-32">
                <SectionIntro
                  eyebrow="Our Services"
                  title="Transforming Ideas into Businesses"
                >
                  <p className="text-base text-neutral-600 dark:text-neutral-300">
                    Build your Minimum Viable Product with
                    <span className="font-bold"> #shipcentric</span> mindset. We
                    empower your businesses to scale, innovate, and thrive. We
                    provide end-to-end services from{" "}
                    <span className="font-bold">
                      Design, Development to Deployment
                    </span>
                    , ensuring seamless growth and efficiency.
                  </p>
                </SectionIntro>

                <Container className="mt-24">
                  <GridList>
                    <GridListItem
                      title="Web & Mobile Apps"
                      icon={Icons.webAndMobile2}
                    >
                      We build responsive, scalable web and mobile applications
                      tailored to your business needs and goals.
                    </GridListItem>
                    <GridListItem title="APIs" icon={Icons.api2}>
                      We design robust, secure APIs that streamline
                      communication between systems, enhancing integration and
                      scalability.
                    </GridListItem>
                    <GridListItem title="DevOps" icon={Icons.devOps2}>
                      Our DevOps services optimize your development process,
                      ensuring continuous integration, delivery, and efficient
                      system operations.
                    </GridListItem>
                    <GridListItem title="Generative AI" icon={Icons.genAi2}>
                      We develop cutting-edge Generative AI solutions that drive
                      automation and deliver tailored, data-driven experiences
                      for businesses.
                    </GridListItem>
                    <GridListItem title="UI/UX Design" icon={Icons.uiUxDesign}>
                      Focused on user-centric design, we craft intuitive,
                      visually appealing interfaces that enhance user engagement
                      and satisfaction.
                    </GridListItem>
                    <GridListItem
                      title="Dedicated Team"
                      icon={Icons.dedicatedTeam}
                    >
                      Our skilled, dedicated team seamlessly integrates with
                      your project, delivering high-quality solutions and
                      exceptional service.
                    </GridListItem>
                  </GridList>
                </Container>
              </div>

              {/* <CaseStudies
                caseStudies={[
                  {
                    href: "/",
                    date: "2023-11-01",
                    title: "Betalectic's MF Stack",
                    description:
                      "Distribute Mutual Funds efficiently with our robust MF stack, delivering seamless solutions in just 6-8 weeks for fast market entry.",
                    icon: Icons.mfStack,
                  },
                  {
                    href: "/",
                    date: "2024-11-01",
                    title: "Betalectic AI",
                    description:
                      "Harness Betalectic AI’s advanced Generative AI solutions, designed to meet your unique business needs and drive transformative growth.",
                    icon: Icons.genAi,
                  },
                  {
                    href: "/",
                    date: "2025-11-01",
                    title: "UX Designs",
                    description:
                      "Create intuitive, visually compelling user interfaces with our expert UI/UX design services, enhancing user experience and engagement.",
                    icon: Icons.uxUi,
                  },
                ]}
              /> */}

              <Projects />

              <Testimonial className="">
                We understand the challenges businesses face in today’s
                competitive landscape. We’re here to guide you through every
                stage - helping you shape your vision, overcome challenges, and
                get your app to market seamlessly.
              </Testimonial>
              {/* <Services /> */}
              <ContactSection />
            </main>
          </motion.div>
        </motion.div>
      </MotionConfig>
    </Layout>
  );
}
