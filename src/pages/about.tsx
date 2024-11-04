import Layout from "@theme/Layout";
import { SectionIntro } from "../components/studio/components/SectionIntro";
import { Container } from "../components/studio/components/Container";
import {
  GridList,
  GridListItem,
} from "../components/studio/components/GridList";
import { PageIntro } from "../components/studio/components/PageIntro";
import {
  StatList,
  StatListItem,
} from "../components/studio/components/StatList";
import { FadeIn, FadeInStagger } from "../components/studio/components/FadeIn";
import { Border } from "../components/studio/components/Border";
import { ContactSection } from "../components/studio/components/ContactSection";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import { GridPattern } from "../components/studio/components/GridPattern";

export default function About() {
  let shouldReduceMotion = useReducedMotion();

  function Culture() {
    return (
      <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
        <SectionIntro
          eyebrow="Our culture"
          title="Your Partner in Transformative Technology and Long-Term Growth"
          invert
        >
          <p>
          Partnering with businesses to deliver tailored technology solutions that address unique challenges, drive growth, and ensure sustainable success over the long term.
          </p>
        </SectionIntro>
        <Container className="mt-16">
          <GridList>
            <GridListItem className="list-none" title="Client-Centric Approach" invert>
            At Betalectic, we’re not just about delivering code; we’re about delivering results. We take the time to understand each client’s unique challenges, working as an extension of their team to craft solutions that truly address their business needs. By immersing ourselves in our clients’ goals, we ensure that each web app, mobile solution, or API we create drives tangible results, meeting the demands of today while setting them up for tomorrow.
            </GridListItem>
            <GridListItem className="list-none" title="Outcome-Focused Services" invert>
            Our services go beyond technology—we deliver results. Every solution we develop is designed with a focus on driving business outcomes, whether it’s increasing user engagement, enhancing operational efficiency, or elevating customer satisfaction. We define success by the value our work adds to our clients’ businesses and their bottom line, not by technical completion alone.
            </GridListItem>
            <GridListItem className="list-none" title="Empowering Domain Experts with Our Technology Solutions" invert>
            We recognize that our clients are the domain experts in their fields, and we leverage this knowledge to create technology solutions that fit their unique requirements. By deeply understanding their industry challenges and objectives, we develop tailored products that enhance their operational effectiveness and drive innovation. Our collaborative approach ensures that we align our technical expertise with our clients’ insights, resulting in solutions that not only meet but exceed their expectations.            </GridListItem>
          </GridList>
          <GridList>
            <GridListItem className="list-none" title="Long term Partnership" invert>
            Our relationship with clients doesn’t end at launch. As a full-cycle partner, we guide our clients from ideation through development, launch, and ongoing support, ensuring each solution adapts to changing needs and continues to provide value. By staying involved at every stage, we help our clients evolve and grow, aligning our efforts with their long-term vision and goals.
            </GridListItem>
            <GridListItem className="list-none" title="Empowering Client Success" invert>
            We measure our success by the success of our clients. Every line of code we write, every feature we develop, and every deployment we execute is aimed at empowering our clients to achieve their strategic objectives. We believe in delivering more than a solution—we deliver a pathway to growth, efficiency, and innovation, helping clients position themselves ahead in their respective markets.
            </GridListItem>
            <GridListItem className="list-none" title="Lasting Impact" invert>
            Our work is designed to make a lasting impact. Over the years, we’ve enabled clients to not only overcome current challenges but to thrive in a rapidly evolving digital landscape. By building scalable, adaptable solutions, we ensure that our clients can meet future demands and continue achieving sustainable growth well beyond project completion.
            </GridListItem>
          </GridList>
        </Container>
      </div>
    );
  }

  const team = [
    {
      title: "Leadership",
      people: [
        {
          name: "Leslie Alexander",
          role: "Co-Founder / CEO",
          image: {
            src: require("@site/static/img/favicon_betalectic.png").default,
          },
        },
        {
          name: "Michael Foster",
          role: "Co-Founder / CTO",
          image: {
            src: require("@site/static/img/favicon_betalectic.png").default,
          },
        },
        {
          name: "Dries Vincent",
          role: "Partner & Business Relations",
          image: {
            src: require("@site/static/img/favicon_betalectic.png").default,
          },
        },
      ],
    },
    {
      title: "Team",
      people: [
        {
          name: "Chelsea Hagon",
          role: "Senior Developer",
          image: {
            src: require("@site/static/img/favicon_betalectic.png").default,
          },
        },
        {
          name: "Emma Dorsey",
          role: "Senior Designer",
          image: {
            src: require("@site/static/img/favicon_betalectic.png").default,
          },
        },
        {
          name: "Leonard Krasner",
          role: "VP, User Experience",
          image: {
            src: require("@site/static/img/favicon_betalectic.png").default,
          },
        },
        {
          name: "Blake Reid",
          role: "Junior Copywriter",
          image: {
            src: require("@site/static/img/favicon_betalectic.png").default,
          },
        },
        {
          name: "Kathryn Murphy",
          role: "VP, Human Resources",
          image: {
            src: require("@site/static/img/favicon_betalectic.png").default,
          },
        },
        {
          name: "Whitney Francis",
          role: "Content Specialist",
          image: {
            src: require("@site/static/img/favicon_betalectic.png").default,
          },
        },
        {
          name: "Jeffrey Webb",
          role: "Account Coordinator",
          image: {
            src: require("@site/static/img/favicon_betalectic.png").default,
          },
        },
        {
          name: "Benjamin Russel",
          role: "Senior Developer",
          image: {
            src: require("@site/static/img/favicon_betalectic.png").default,
          },
        },
        {
          name: "Angela Fisher",
          role: "Front-end Developer",
          image: {
            src: require("@site/static/img/favicon_betalectic.png").default,
          },
        },
      ],
    },
  ];

  function Team() {
    return (
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="space-y-24">
          {team.map((group) => (
            <FadeInStagger key={group.title}>
              <Border as={FadeIn} />
              <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
                <FadeIn>
                  <h2 className="font-display text-2xl font-semibold text-neutral-950 dark:text-neutral-50">
                    {group.title}
                  </h2>
                </FadeIn>
                <div className="lg:col-span-3">
                  <ul
                    role="list"
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 p-0 lg:grid-cols-3 xl:gap-8"
                  >
                    {group.people.map((person) => (
                      <li key={person.name} className="list-none">
                        <FadeIn>
                          <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                            <img
                              {...person.image}
                              alt={person.name}
                              className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                            />

                            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                              <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                                {person.name}
                              </p>
                              <p className="mt-2 text-sm text-white">
                                {person.role}
                              </p>
                            </div>
                          </div>
                        </FadeIn>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeInStagger>
          ))}
        </div>
      </Container>
    );
  }
  return (
    <Layout title="About" description="About Betalectic">
      <MotionConfig
        transition={shouldReduceMotion ? { duration: 0 } : undefined}
      >
        <motion.div layout className="relative isolate flex w-full flex-col">
          <motion.div layout className="relative isolate flex w-full flex-col">
            <GridPattern
              className="absolute inset-x-0 -top-24 -z-10 h-[1000px] w-full fill-neutral-50  stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
              yOffset={-96}
              interactive
            />
            <div className="w-full mx-auto">
              <PageIntro
                eyebrow=""
                title="About Betalectic"
              >
                <p>
                Eclectic means ‘deriving ideas, style, or taste from a broad and diverse range of sources’
                </p>
                <div className="mt-10 max-w-2xl space-y-6 text-base">
                  <p>
                  In world of open source software, saas and innumerable technology stacks – we figure out what is best for your product (cost wise, development wise, scaling wise) and give you the beta.
                  </p>
                </div>
              </PageIntro>
              <Culture />

              <Team />

              <ContactSection />
            </div>
          </motion.div>
        </motion.div>
      </MotionConfig>
    </Layout>
  );
}
