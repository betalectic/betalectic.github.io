import Layout from "@theme/Layout";
import { SectionIntro } from "../components/studio/components/SectionIntro";
import { Container } from "../components/studio/components/Container";
import {
  GridList,
  GridListItem,
} from "../components/studio/components/GridList";
import { PageIntro } from "../components/studio/components/PageIntro";
import { FadeIn, FadeInStagger } from "../components/studio/components/FadeIn";
import { Border } from "../components/studio/components/Border";
import { ContactSection } from "../components/studio/components/ContactSection";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import { GridPattern } from "../components/studio/components/GridPattern";
import { List, ListItem } from "../components/studio/components/List";
import { StylizedImage } from "../components/studio/components/StylizedImage";
import { TagList, TagListItem } from "../components/studio/components/TagList";
import { IconCloud } from "../components/magicui/icon-cloud";

export default function About() {
  let shouldReduceMotion = useReducedMotion();
  const articles = [
    {
      title: "Client-Centric Approach",
      href: "/our-approach/",
      description:
        "At Betalectic, we’re not just about delivering code; we’re about delivering results. We take the time to understand each client’s unique challenges, working as an extension of their team to craft solutions that truly address their business needs. By immersing ourselves in our clients’ goals, we ensure that each web app, mobile solution, or API we create drives tangible results, meeting the demands of today while setting them up for tomorrow.",
    },
    {
      title: "Outcome-Focused Services",
      href: "/our-approach/",
      description:
        "Our services go beyond technology—we deliver results. Every solution we develop is designed with a focus on driving business outcomes, whether it’s increasing user engagement, enhancing operational efficiency, or elevating customer satisfaction. We define success by the value our work adds to our clients’ businesses and their bottom line, not by technical completion alone.",
    },
    {
      title: "Empowering Domain Experts with Our Technology Solutions",
      href: "/our-approach/",
      description:
        " We recognize that our clients are the domain experts in their fields, and we leverage this knowledge to create technology solutions that fit their unique requirements. By deeply understanding their industry challenges and objectives, we develop tailored products that enhance their operational effectiveness and drive innovation. Our collaborative approach ensures that we align our technical expertise with our clients’ insights, resulting in solutions that not only meet but exceed their expectations.",
    },
    {
      title: "Long term Partnership",
      href: "/our-approach/",
      description:
        "Our relationship with clients doesn’t end at launch. As a full-cycle partner, we guide our clients from ideation through development, launch, and ongoing support, ensuring each solution adapts to changing needs and continues to provide value. By staying involved at every stage, we help our clients evolve and grow, aligning our efforts with their long-term vision and goals.",
    },
    {
      title: "Empowering Client Success",
      href: "/our-approach/",
      description:
        "We measure our success by the success of our clients. Every line of code we write, every feature we develop, and every deployment we execute is aimed at empowering our clients to achieve their strategic objectives. We believe in delivering more than a solution—we deliver a pathway to growth, efficiency, and innovation, helping clients position themselves ahead in their respective markets.",
    },
    {
      title: "Long-Term Impact",
      href: "/our-approach/",
      description:
        "Our work is designed to make a lasting impact. Over the years, we’ve enabled clients to not only overcome current challenges but to thrive in a rapidly evolving digital landscape. By building scalable, adaptable solutions, we ensure that our clients can meet future demands and continue achieving sustainable growth well beyond project completion.",
    },
  ];

  function Culture() {
    return (
      <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
        <SectionIntro
          eyebrow="Our culture"
          title="Your Partner in Transformative Technology and Long-Term Growth"
          invert
        >
          <p>
            Partnering with businesses to deliver tailored technology solutions
            that address unique challenges, drive growth, and ensure sustainable
            success over the long term.
          </p>
        </SectionIntro>
        <Container className="mt-16">
          {/* <GridList>
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
          </GridList> */}
          <FadeInStagger className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            {articles.map((article) => (
              <FadeIn key={article.href}>
                <PageLink page={article} />
              </FadeIn>
            ))}
          </FadeInStagger>
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
            src: require("../images/team/manasa_ai.jpg").default,
          },
          description:
            "Manasa is a shape shifter. An entrepreneur with a vision to develop tech-centric solutions for budding enterprises. Dynamic, committed to service excellence and developing qualitative IT products. Manasa envisions a world where businesses of all sizes can easily adapt to emerging technologies, empowering them to run their operations seamlessly and thrive in a digital-first world.",
          xUrl: "https://x.com/ManasaMadapu",
          linkedinUrl: "https://www.linkedin.com/in/manasa-madapu-02388512a/",
        },
        {
          name: "Rajiv Seelam",
          role: "Co-Founder & CTO",
          image: {
            src: require("../images/team/rajiv_ai.jpg").default,
          },
          description:
            "Rajiv is a visionary CTO and Head of Technology. With an insatiable curiosity for emerging technologies, he is constantly exploring new approaches to bring vivid, impactful solutions. Under his leadership, the team is inspired and empowered to push boundaries, developing solutions that drive innovation and elevate the company’s capabilities. Rajiv’s commitment to fostering a culture of collaboration and excellence makes him a guiding force, transforming ambitious ideas into impactful, user-centered products.",
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
                      <li
                        key={person.name}
                        className="rounded-2xl bg-white dark:bg-neutral-900 border-2 hover:bg-neutral-50 dark:hover:bg-neutral-800  hover:cursor-pointer border-neutral-100 dark:border-neutral-800 px-8 py-10"
                      >
                        <img
                          alt=""
                          {...person.image}
                          className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
                        />
                        <h3 className="mt-6 text-center text-base/7 font-semibold tracking-tight dark:text-white text-black">
                          {person.name}
                        </h3>
                        <p className="text-sm/6 text-center text-gray-500 font-extrabold">
                          {person.role}
                        </p>
                        <p
                          className="text-sm/6 text-gray-700 dark:text-gray-300"
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
                                fill="currentColor"
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
                                fill="currentColor"
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

  const Icons = {
    continousLearningAndImprovement: () => (
      <svg
        width="53"
        height="52"
        viewBox="0 0 53 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_dii_14594_553521)">
          <path
            d="M2.50101 11C2.50101 5.47715 6.97816 1 12.501 1H40.501C46.0239 1 50.501 5.47715 50.501 11V39C50.501 44.5228 46.0239 49 40.501 49H12.501C6.97816 49 2.50101 44.5228 2.50101 39V11Z"
            fill="white"
          />
          <path
            d="M12.501 1.5H40.501C45.7477 1.5 50.001 5.75329 50.001 11V39C50.001 44.2467 45.7477 48.5 40.501 48.5H12.501C7.2543 48.5 3.00101 44.2467 3.00101 39V11C3.00101 5.75329 7.2543 1.5 12.501 1.5Z"
            stroke="#E4E7EC"
          />
          <path
            d="M25.501 16H22.301C20.6208 16 19.7808 16 19.139 16.327C18.5745 16.6146 18.1156 17.0735 17.828 17.638C17.501 18.2798 17.501 19.1198 17.501 20.8V29.2C17.501 30.8802 17.501 31.7202 17.828 32.362C18.1156 32.9265 18.5745 33.3854 19.139 33.673C19.7808 34 20.6208 34 22.301 34H30.701C32.3812 34 33.2212 34 33.863 33.673C34.4275 33.3854 34.8864 32.9265 35.174 32.362C35.501 31.7202 35.501 30.8802 35.501 29.2V26M26.501 21H30.501V25M30.001 16.5V15M33.9403 17.5607L35.001 16.5M35.0113 21.5H36.5113M17.501 26.3471C18.1529 26.4478 18.8209 26.5 19.501 26.5C23.8874 26.5 27.7663 24.3276 30.1207 21"
            stroke="#525252"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_dii_14594_553521"
            x="0.501007"
            y="0"
            width="52"
            height="52"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_14594_553521"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_14594_553521"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_14594_553521"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="1"
              operator="erode"
              in="SourceAlpha"
              result="effect3_innerShadow_14594_553521"
            />
            <feOffset />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.18 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_14594_553521"
              result="effect3_innerShadow_14594_553521"
            />
          </filter>
        </defs>
      </svg>
    ),

    collaborationAndTeamwork: () => (
      <svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_dii_14591_553516)">
          <path
            d="M2 11C2 5.47715 6.47715 1 12 1H40C45.5228 1 50 5.47715 50 11V39C50 44.5228 45.5228 49 40 49H12C6.47715 49 2 44.5228 2 39V11Z"
            fill="white"
          />
          <path
            d="M12 1.5H40C45.2467 1.5 49.5 5.75329 49.5 11V39C49.5 44.2467 45.2467 48.5 40 48.5H12C6.75329 48.5 2.5 44.2467 2.5 39V11C2.5 5.75329 6.75329 1.5 12 1.5Z"
            stroke="#E4E7EC"
          />
          <path
            d="M29.5455 22.9254C29.9195 22.261 30.2313 21.6615 30.4236 21.2052C31.3573 18.9895 30.434 16.4408 28.1769 15.4011C25.9199 14.3615 23.6534 15.4395 22.6587 17.5209C20.7566 16.2157 18.2192 16.4074 16.8199 18.4442C15.4206 20.4811 15.8598 23.142 17.7763 24.594C18.6461 25.253 20.3664 26.2242 21.986 27.0884M30.2972 24.7499C29.8751 22.482 27.9454 20.8233 25.5156 21.2742C23.0859 21.725 21.5149 23.9171 21.8433 26.299C22.1072 28.2127 23.5639 32.7027 24.1264 34.394C24.2032 34.6248 24.2415 34.7402 24.3175 34.8206C24.3837 34.8907 24.4717 34.9416 24.5655 34.9638C24.6732 34.9894 24.7923 34.9649 25.0306 34.916C26.7765 34.5575 31.3933 33.574 33.1826 32.8457C35.4096 31.9392 36.5589 29.4841 35.6981 27.153C34.8372 24.8219 32.4723 23.9815 30.2972 24.7499Z"
            stroke="#525252"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_dii_14591_553516"
            x="0"
            y="0"
            width="52"
            height="52"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_14591_553516"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_14591_553516"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_14591_553516"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="1"
              operator="erode"
              in="SourceAlpha"
              result="effect3_innerShadow_14591_553516"
            />
            <feOffset />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.18 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_14591_553516"
              result="effect3_innerShadow_14591_553516"
            />
          </filter>
        </defs>
      </svg>
    ),

    agilityAndSpeed: () => (
      <svg
        width="53"
        height="52"
        viewBox="0 0 53 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_dii_14591_553512)">
          <path
            d="M2.49863 11C2.49863 5.47715 6.97578 1 12.4986 1H40.4986C46.0215 1 50.4986 5.47715 50.4986 11V39C50.4986 44.5228 46.0215 49 40.4986 49H12.4986C6.97578 49 2.49863 44.5228 2.49863 39V11Z"
            fill="white"
          />
          <path
            d="M12.4986 1.5H40.4986C45.7453 1.5 49.9986 5.75329 49.9986 11V39C49.9986 44.2467 45.7453 48.5 40.4986 48.5H12.4986C7.25192 48.5 2.99863 44.2467 2.99863 39V11C2.99863 5.75329 7.25192 1.5 12.4986 1.5Z"
            stroke="#E4E7EC"
          />
          <path
            d="M26.4986 27.9998L23.4986 24.9998M26.4986 27.9998C27.8955 27.4685 29.2355 26.7985 30.4986 25.9998M26.4986 27.9998V32.9998C26.4986 32.9998 29.5286 32.4498 30.4986 30.9998C31.5786 29.3798 30.4986 25.9998 30.4986 25.9998M23.4986 24.9998C24.0308 23.6192 24.7008 22.2958 25.4986 21.0498C26.6638 19.1867 28.2862 17.6528 30.2116 16.5939C32.137 15.5349 34.3013 14.9861 36.4986 14.9998C36.4986 17.7198 35.7186 22.4998 30.4986 25.9998M23.4986 24.9998H18.4986C18.4986 24.9998 19.0486 21.9698 20.4986 20.9998C22.1186 19.9198 25.4986 20.9998 25.4986 20.9998M18.9986 29.4998C17.4986 30.7598 16.9986 34.4998 16.9986 34.4998C16.9986 34.4998 20.7386 33.9998 21.9986 32.4998C22.7086 31.6598 22.6986 30.3698 21.9086 29.5898C21.5199 29.2188 21.0079 29.0044 20.4709 28.9878C19.9338 28.9712 19.4095 29.1535 18.9986 29.4998Z"
            stroke="#525252"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_dii_14591_553512"
            x="0.498627"
            y="0"
            width="52"
            height="52"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_14591_553512"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_14591_553512"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_14591_553512"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="1"
              operator="erode"
              in="SourceAlpha"
              result="effect3_innerShadow_14591_553512"
            />
            <feOffset />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.18 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_14591_553512"
              result="effect3_innerShadow_14591_553512"
            />
          </filter>
        </defs>
      </svg>
    ),

    execellanceAndQuality: () => (
      <svg
        width="53"
        height="52"
        viewBox="0 0 53 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_dii_14591_553508)">
          <path
            d="M2.49863 11C2.49863 5.47715 6.97578 1 12.4986 1H40.4986C46.0215 1 50.4986 5.47715 50.4986 11V39C50.4986 44.5228 46.0215 49 40.4986 49H12.4986C6.97578 49 2.49863 44.5228 2.49863 39V11Z"
            fill="white"
          />
          <path
            d="M12.4986 1.5H40.4986C45.7453 1.5 49.9986 5.75329 49.9986 11V39C49.9986 44.2467 45.7453 48.5 40.4986 48.5H12.4986C7.25192 48.5 2.99863 44.2467 2.99863 39V11C2.99863 5.75329 7.25192 1.5 12.4986 1.5Z"
            stroke="#E4E7EC"
          />
          <path
            d="M18.9986 35V30M18.9986 20V15M16.4986 17.5H21.4986M16.4986 32.5H21.4986M27.4986 16L25.7644 20.5089C25.4824 21.2421 25.3414 21.6087 25.1222 21.9171C24.9278 22.1904 24.689 22.4292 24.4157 22.6235C24.1073 22.8428 23.7407 22.9838 23.0075 23.2658L18.4986 25L23.0075 26.7342C23.7407 27.0162 24.1073 27.1572 24.4157 27.3765C24.689 27.5708 24.9278 27.8096 25.1222 28.0829C25.3414 28.3913 25.4824 28.7579 25.7645 29.4911L27.4986 34L29.2328 29.4911C29.5148 28.7579 29.6558 28.3913 29.8751 28.0829C30.0694 27.8096 30.3082 27.5708 30.5815 27.3765C30.8899 27.1572 31.2565 27.0162 31.9898 26.7342L36.4986 25L31.9898 23.2658C31.2565 22.9838 30.8899 22.8428 30.5815 22.6235C30.3082 22.4292 30.0694 22.1904 29.8751 21.9171C29.6558 21.6087 29.5148 21.2421 29.2328 20.5089L27.4986 16Z"
            stroke="#525252"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_dii_14591_553508"
            x="0.498627"
            y="0"
            width="52"
            height="52"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_14591_553508"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_14591_553508"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_14591_553508"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="1"
              operator="erode"
              in="SourceAlpha"
              result="effect3_innerShadow_14591_553508"
            />
            <feOffset />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.18 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_14591_553508"
              result="effect3_innerShadow_14591_553508"
            />
          </filter>
        </defs>
      </svg>
    ),

    integrityAndTransparency: () => (
      <svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_dii_14591_553504)">
          <path
            d="M2 11C2 5.47715 6.47715 1 12 1H40C45.5228 1 50 5.47715 50 11V39C50 44.5228 45.5228 49 40 49H12C6.47715 49 2 44.5228 2 39V11Z"
            fill="white"
          />
          <path
            d="M12 1.5H40C45.2467 1.5 49.5 5.75329 49.5 11V39C49.5 44.2467 45.2467 48.5 40 48.5H12C6.75329 48.5 2.5 44.2467 2.5 39V11C2.5 5.75329 6.75329 1.5 12 1.5Z"
            stroke="#E4E7EC"
          />
          <path
            d="M24 27.5347C25.2335 26.8218 26.7663 26.8218 27.9999 27.5347M16 28L16.7015 20.9851C16.7281 20.7192 16.7414 20.5862 16.7618 20.4721C17.0022 19.127 18.1212 18.1144 19.4835 18.0089C19.5991 18 19.7327 18 20 18M36 28L35.2985 20.9851C35.2719 20.7192 35.2586 20.5862 35.2382 20.4721C34.9978 19.127 33.8788 18.1144 32.5165 18.0089C32.4009 18 32.2673 18 32 18M22.8284 25.1716C24.3905 26.7337 24.3905 29.2663 22.8284 30.8284C21.2663 32.3905 18.7337 32.3905 17.1716 30.8284C15.6095 29.2663 15.6095 26.7337 17.1716 25.1716C18.7337 23.6095 21.2663 23.6095 22.8284 25.1716ZM34.8284 25.1716C36.3905 26.7337 36.3905 29.2663 34.8284 30.8284C33.2663 32.3905 30.7337 32.3905 29.1716 30.8284C27.6095 29.2663 27.6095 26.7337 29.1716 25.1716C30.7337 23.6095 33.2663 23.6095 34.8284 25.1716Z"
            stroke="#525252"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_dii_14591_553504"
            x="0"
            y="0"
            width="52"
            height="52"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_14591_553504"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_14591_553504"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_14591_553504"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="1"
              operator="erode"
              in="SourceAlpha"
              result="effect3_innerShadow_14591_553504"
            />
            <feOffset />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.18 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_14591_553504"
              result="effect3_innerShadow_14591_553504"
            />
          </filter>
        </defs>
      </svg>
    ),

    clientCenteredInnovation: () => (
      <svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_dii_14591_553500)">
          <path
            d="M2 11C2 5.47715 6.47715 1 12 1H40C45.5228 1 50 5.47715 50 11V39C50 44.5228 45.5228 49 40 49H12C6.47715 49 2 44.5228 2 39V11Z"
            fill="white"
          />
          <path
            d="M12 1.5H40C45.2467 1.5 49.5 5.75329 49.5 11V39C49.5 44.2467 45.2467 48.5 40 48.5H12C6.75329 48.5 2.5 44.2467 2.5 39V11C2.5 5.75329 6.75329 1.5 12 1.5Z"
            stroke="#E4E7EC"
          />
          <path
            d="M20 33.087H22.6103C22.9506 33.087 23.2889 33.1275 23.6188 33.2085L26.3769 33.8788C26.9753 34.0246 27.5988 34.0387 28.2035 33.9213L31.253 33.328C32.0585 33.1711 32.7996 32.7853 33.3803 32.2204L35.5379 30.1216C36.154 29.5233 36.154 28.5523 35.5379 27.953C34.9832 27.4133 34.1047 27.3526 33.4771 27.8102L30.9626 29.6447C30.6025 29.908 30.1643 30.0497 29.7137 30.0497H27.2855L28.8311 30.0497C29.7022 30.0497 30.4079 29.3632 30.4079 28.5158V28.209C30.4079 27.5054 29.9156 26.8919 29.2141 26.7218L26.8286 26.1416C26.4404 26.0475 26.0428 25.9999 25.6431 25.9999C24.6783 25.9999 22.9319 26.7987 22.9319 26.7987L20 28.0248M16 27.5999L16 33.3999C16 33.9599 16 34.24 16.109 34.4539C16.2049 34.642 16.3578 34.795 16.546 34.8909C16.7599 34.9999 17.0399 34.9999 17.6 34.9999H18.4C18.9601 34.9999 19.2401 34.9999 19.454 34.8909C19.6422 34.795 19.7951 34.642 19.891 34.4539C20 34.24 20 33.9599 20 33.3999V27.5999C20 27.0398 20 26.7598 19.891 26.5459C19.7951 26.3577 19.6422 26.2048 19.454 26.1089C19.2401 25.9999 18.9601 25.9999 18.4 25.9999H17.6C17.0399 25.9999 16.7599 25.9999 16.546 26.1089C16.3578 26.2048 16.2049 26.3577 16.109 26.5459C16 26.7598 16 27.0398 16 27.5999ZM31.1914 16.5921C30.5946 15.3433 29.2186 14.6817 27.8804 15.3203C26.5423 15.9589 25.9722 17.4733 26.5325 18.8027C26.8787 19.6244 27.8707 21.2199 28.5781 22.3189C28.8394 22.725 28.9701 22.928 29.161 23.0468C29.3247 23.1487 29.5297 23.2036 29.7224 23.1972C29.9471 23.1898 30.1618 23.0793 30.5911 22.8583C31.7532 22.2602 33.4101 21.3744 34.1208 20.836C35.2707 19.9648 35.5556 18.3635 34.6947 17.1461C33.8337 15.9288 32.3327 15.809 31.1914 16.5921Z"
            stroke="#525252"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_dii_14591_553500"
            x="0"
            y="0"
            width="52"
            height="52"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_14591_553500"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_14591_553500"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_14591_553500"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="1"
              operator="erode"
              in="SourceAlpha"
              result="effect3_innerShadow_14591_553500"
            />
            <feOffset />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.18 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_14591_553500"
              result="effect3_innerShadow_14591_553500"
            />
          </filter>
        </defs>
      </svg>
    ),
  };

  function Section({ title, image, children }) {
    return (
      <Container className="group/section [counter-increment:section]">
        <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
          <div className="flex justify-center">
            <FadeIn className="w-[23.5rem] flex-none lg:w-[45rem]">
              <StylizedImage
                {...image}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end lg:group-even/section:justify-start"
              />
            </FadeIn>
          </div>
          <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
            <FadeIn>
              <div
                className="font-display text-base font-semibold before:text-neutral-300 after:text-neutral-950 "
                aria-hidden="true"
              />
              <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 dark:text-neutral-50 sm:text-4xl">
                {title}
              </h2>
              <div className="mt-6">{children}</div>
            </FadeIn>
          </div>
        </div>
      </Container>
    );
  }

  function Discover() {
    return (
      <Section
        title="Customer-Centric Approach"
        image={{ src: require("../images/whiteboard.jpg").default }}
      >
        <div className="space-y-6 text-base text-neutral-600 dark:text-neutral-300">
          <p>
            At Betalectic, we’re not just about delivering code;{" "}
            <strong className="font-semibold text-neutral-950 dark:text-neutral-50">
              we’re about delivering results.
            </strong>{" "}
            We take the time to understand each client’s unique challenges,
            working as an extension of their team to craft solutions that truly
            address their business needs.
          </p>
          <p>
            By immersing ourselves in our clients’ goals, we ensure that each
            web app, mobile solution, or API we create drives tangible results,
            meeting the demands of today while setting them up for tomorrow.
          </p>
          <p>
            Every project at Betalectic begins with deep collaboration and
            strategic planning, ensuring that our solutions are not only
            technically sound but also aligned with long-term objectives.
            Through consistent communication and iterative feedback, we empower
            our clients to remain agile and competitive, adapting to new
            challenges and seizing opportunities as they emerge.
          </p>
        </div>
      </Section>
    );
  }

  function Build() {
    return (
      <Section
        title="Empowering Domain Experts with Our Technology Solutions"
        image={{ src: require("../images/laptop.jpg").default }}
      >
        <div className="space-y-6 text-base text-neutral-600 dark:text-neutral-300">
          <p>
            We recognize that our clients are the domain experts in their
            fields, and we leverage this knowledge to create technology
            solutions that fit their unique requirements.
          </p>
          <p>
            By deeply understanding their industry challenges and objectives, we
            develop tailored products that enhance their operational
            effectiveness and drive innovation. Our collaborative approach
            ensures that we align our technical expertise with our clients’
            insights, resulting in solutions that not only meet but exceed their
            expectations
          </p>
          <p>
            We have been able to successfully launch various products in domains
            such as BFSI, Oil & Gas, EduTech, Ecommerce.
          </p>
        </div>
      </Section>
    );
  }

  function Deliver() {
    return (
      <Section
        title="Long term Partnership"
        image={{ src: require("../images/meeting.jpg").default }}
      >
        <div className="space-y-6 text-base text-neutral-600 dark:text-neutral-300">
          <p>
            Our relationship with clients doesn’t end at launch. As a full-cycle
            partner, we guide our clients from ideation through development,
            launch, and{" "}
            <strong className="font-semibold text-neutral-950 dark:text-neutral-50">
              ongoing support,
            </strong>
            ensuring each solution adapts to changing needs and continues to
            provide value.
          </p>
          <p>
            By staying involved at every stage, we help our clients evolve and
            grow, aligning our efforts with their long-term vision and goals.
          </p>
          <p>
            Our commitment goes beyond project delivery; we’re dedicated to
            fostering lasting partnerships that evolve with our clients’ growth
            and ambitions
          </p>
        </div>

        <h3 className="mt-12 font-display text-base font-semibold text-neutral-950 dark:text-neutral-50">
          Our Offerings also include:
        </h3>
        <List className="mt-8">
          <ListItem title="Dedicated Support">
            Our team remains accessible post-launch, providing reliable support
            and updates to keep applications performing optimally.
          </ListItem>
          <ListItem title="Scalable Solutions">
            Our solutions are built to scale, ensuring they can seamlessly
            support the business as it grows.
          </ListItem>
          <ListItem title="Continuous Innovation">
            We stay updated with the latest tech, ensuring clients stay
            competitive in an ever-evolving digital landscape.
          </ListItem>
        </List>
      </Section>
    );
  }

  function Values() {
    return (
      <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />

        <SectionIntro eyebrow="Our values" title="Driven by values">
          <p className="text-base text-neutral-600 dark:text-neutral-300">
            Our values are the foundation of everything we do. We prioritize
            integrity, collaboration, and innovation, striving to create lasting
            impact through our work. We are committed to delivering exceptional
            solutions that empower our clients and drive mutual growth and
            success
          </p>
        </SectionIntro>

        <Container className="mt-24">
          <GridList>
            <GridListItem
              title="Client-Centric Innovation"
              icon={Icons.clientCenteredInnovation}
            >
              We prioritize our clients’ needs, crafting solutions that foster
              their growth and innovation.
            </GridListItem>
            <GridListItem
              title="Integrity and Transparency"
              icon={Icons.integrityAndTransparency}
            >
              We uphold honesty and transparency in all interactions, building
              trust and credibility.
            </GridListItem>
            <GridListItem
              title="Excellence in Quality"
              icon={Icons.execellanceAndQuality}
            >
              We are committed to delivering high-quality, secure, and scalable
              solutions.
            </GridListItem>
            <GridListItem
              title="Agility and Speed"
              icon={Icons.agilityAndSpeed}
            >
              We embrace flexibility and prioritize swift delivery, especially
              in bringing MVPs to market.
            </GridListItem>
            <GridListItem
              title="Collaboration and Teamwork"
              icon={Icons.collaborationAndTeamwork}
            >
              We believe in the power of collaboration — both within our team
              and with our clients.
            </GridListItem>
            <GridListItem
              title="Continuous Learning and Improvement"
              icon={Icons.continousLearningAndImprovement}
            >
              We are dedicated to learning, growing, and adapting with the tech
              landscape.
            </GridListItem>
          </GridList>
        </Container>
      </div>
    );
  }

  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];

  function IconCloudDemo() {
    return (
      <div className="relative flex w-[300px] md:w-[800px] max-w-xl items-center justify-center overflow-hidden rounded-lg bg-background md:px-20  ">
        <IconCloud iconSlugs={slugs} />
      </div>
    );
  }

  return (
    <div className="twp">
      <Layout
        title="About Betalectic: Your Partner in Digital Transformation
"
        description="At Betalectic we go beyond traditional software development to deliver custom, innovative technology solutions. From web and mobile applications to AI-powered tools, API development, and DevOps, we design systems that drive growth and efficiency. We are specialised in domains like Banking, Financial Services & Insurance where we build custom web, mobile apps, APIs and Software as a Service solutions."
      >
        <MotionConfig
          transition={shouldReduceMotion ? { duration: 0 } : undefined}
        >
          <motion.div layout className="relative isolate flex w-full flex-col">
            <Container className="mx-auto max-w-7xl px-6  lg:py-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 md:mt-12 gap-10 lg:gap-12">
                <div className="flex justify-center order-1 lg:order-2">
                  <IconCloudDemo />
                </div>
                <div className="order-2 lg:order-1 my-auto">
                  <FadeIn className="md:w-full">
                    <h1 className="font-display text-4xl my-auto md:text-start sm:text-center font-bold tracking-tight text-neutral-950 dark:text-gray-50 [text-wrap:balance] sm:text-5xl">
                      {/* Your End-to-End Product Development Partner — Crafting,
                      Building, and Scaling Solutions */}
                      About Betalectic
                      {/* 635bff */}
                    </h1>
                    <p className="mt-8">
                      Eclectic means 'deriving ideas, style, or taste from a
                      broad and diverse range of sources'
                    </p>

                    <div className="mt-8 space-y-6 text-base">
                      <p>
                        In a world of open-source softwares, SaaS solutions, and
                        a multitude of development frameworks, we figure out
                        what is best for your product (cost wise, development
                        wise, scaling wise) and give you the beta.
                      </p>
                      <p>
                        We assess your specific needs and goals to determine the
                        ideal tech stack—one that aligns with your budget
                        constraints, optimizes development time, and scales
                        effortlessly as your user base grows.
                      </p>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </Container>
            {/* <Culture /> */}
            <div className="mt-20 space-y-20 [counter-reset:section] sm:mt-24 sm:space-y-24 lg:mt-32 lg:space-y-32">
              <Discover />
              <Build />
              <Deliver />
            </div>
            <Values />
            <Team />
            <div className="w-full">
              <ContactSection />
            </div>
          </motion.div>
        </MotionConfig>
      </Layout>
    </div>
  );
}

function PageLink({ page }) {
  return (
    <article key={page.href}>
      <Border position="left" className="pl-8" invert={true}>
        <h3 className="mt-6 text-base font-semibold text-white">
          {page.title}
        </h3>

        <p className="mt-2.5 text-base text-white">{page.description}</p>
      </Border>
    </article>
  );
}
