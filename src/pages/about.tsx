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
          name: "Manasa Madapu",
          role: "Co-Founder & CEO",
          image: {
            src: require("@site/static/img/favicon_betalectic.png").default,
          },
          description:
            "Manasa is the shape shifter. A young entrepreneur with a vision to develop Tech centric solutions for budding enterprises. Dynamic, committed to service excellence and developing qualitative IT products. With a background of  Civil engineering and Masters in Finance Management, Manasa envisions to bring variety of talent  in serving customers from Diverse industries.",
          xUrl: "https://x.com/ManasaMadapu",
          linkedinUrl: "https://www.linkedin.com/in/manasa-madapu-02388512a/",
        },
        {
          name: "Rajiv Seelam",
          role: "Co-Founder & CTO",
          image: {
            src: require("@site/static/img/favicon_betalectic.png").default,
          },
          description:
            "After graduating from IIT Kharagpur in Bachelors & Masters in Computer Science and Engineering, he worked at Samsung as an Android Developer. His curiosity for web technologies made him join a startup in Delhi as CTO. Later he co-founded Betalectic to start on his own. Rajiv is very passionate about learning new technologies and implementing vivid solutions.",
          xUrl: "https://x.com/rjv_im",
          linkedinUrl: "https://www.linkedin.com/in/rajivseelam/",
        },
      ],
    },
    // {
    //   title: "Team",
    //   people: [
    //     {
    //       name: "Chelsea Hagon",
    //       role: "Senior Developer",
    //       image: {
    //         src: require("@site/static/img/favicon_betalectic.png").default,
    //       },
    //     },
    //     {
    //       name: "Emma Dorsey",
    //       role: "Senior Designer",
    //       image: {
    //         src: require("@site/static/img/favicon_betalectic.png").default,
    //       },
    //     },
    //     {
    //       name: "Leonard Krasner",
    //       role: "VP, User Experience",
    //       image: {
    //         src: require("@site/static/img/favicon_betalectic.png").default,
    //       },
    //     },
    //     {
    //       name: "Blake Reid",
    //       role: "Junior Copywriter",
    //       image: {
    //         src: require("@site/static/img/favicon_betalectic.png").default,
    //       },
    //     },
    //     {
    //       name: "Kathryn Murphy",
    //       role: "VP, Human Resources",
    //       image: {
    //         src: require("@site/static/img/favicon_betalectic.png").default,
    //       },
    //     },
    //     {
    //       name: "Whitney Francis",
    //       role: "Content Specialist",
    //       image: {
    //         src: require("@site/static/img/favicon_betalectic.png").default,
    //       },
    //     },
    //     {
    //       name: "Jeffrey Webb",
    //       role: "Account Coordinator",
    //       image: {
    //         src: require("@site/static/img/favicon_betalectic.png").default,
    //       },
    //     },
    //     {
    //       name: "Benjamin Russel",
    //       role: "Senior Developer",
    //       image: {
    //         src: require("@site/static/img/favicon_betalectic.png").default,
    //       },
    //     },
    //     {
    //       name: "Angela Fisher",
    //       role: "Front-end Developer",
    //       image: {
    //         src: require("@site/static/img/favicon_betalectic.png").default,
    //       },
    //     },
    //   ],
    // },
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
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 p-0 lg:grid-cols-2 xl:gap-8"
                  >
                    {group.people.map((person) => (
                      // <li key={person.name} className="list-none">
                      //   <FadeIn>
                      //     <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                      //       <img
                      //         {...person.image}
                      //         alt={person.name}
                      //         className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                      //       />

                      //       <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                      //         <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                      //           {person.name}
                      //         </p>
                      //         <p className="mt-2 text-sm text-white">
                      //           {person.role}
                      //         </p>
                      //       </div>
                      //     </div>
                      //     <p className="mt-2 text-sm">{person.description}</p>
                      //   </FadeIn>
                      // </li>
                      <li
                        key={person.name}
                        className="rounded-2xl bg-neutral-950 px-8 py-10"
                      >
                        <img
                          alt=""
                          {...person.image}
                          className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
                        />
                        <h3 className="mt-6 text-center text-base/7 font-semibold tracking-tight text-white">
                          {person.name}
                        </h3>
                        <p className="text-sm/6 text-center text-gray-400">
                          {person.role}
                        </p>
                        <p
                          className="text-sm/6 text-justify text-gray-400"
                          style={{ whiteSpace: "pre-line" }}
                        >
                          {person.description}
                        </p>
                        <ul
                          role="list"
                          className="mt-6 flex justify-center gap-x-6"
                        >
                          <li>
                            <a
                              href={person.xUrl}
                              className="text-gray-400 hover:text-gray-200"
                            >
                              <span className="sr-only">X</span>
                              <svg
                                fill="#FFFFFF"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                                className="h-5 w-5"
                              >
                                <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href={person.linkedinUrl}
                              className="text-gray-400 hover:text-gray-200"
                            >
                              <span className="sr-only">LinkedIn</span>
                              <svg
                                fill="#FFFFFF"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                                className="h-5 w-5"
                              >
                                <path
                                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                  clipRule="evenodd"
                                  fillRule="evenodd"
                                />
                              </svg>
                            </a>
                          </li>
                        </ul>
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
