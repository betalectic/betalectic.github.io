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
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

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
];

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-100 dark:bg-neutral-300 py-20 sm:mt-24 sm:py-32 lg:mt-56">
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
                        className="w-28 h-12 object-contain aspect-[7/2]"
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

export function OrbitingCirclesDemo() {
  const isMobile = ExecutionEnvironment.canUseDOM && window.innerWidth < 426;
  const isTablet =
    ExecutionEnvironment.canUseDOM &&
    window.innerWidth >= 425 &&
    window.innerWidth <= 768;

  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black"></span>

      {/* Inner Circles */}
      <>
        <OrbitingCircles
          className="size-[80px] border-none bg-transparent"
          duration={20}
          delay={20}
          radius={isMobile ? 60 : isTablet ? 70 : 80}
        >
          <div className="flex-col">
            <Icons.webMobile />
            <p className="font-bold text-sm text-center">
              Web & <br /> Mobile
            </p>
          </div>
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[45px] border-none bg-transparent"
          duration={20}
          delay={10}
          radius={isMobile ? 60 : isTablet ? 70 : 80}
        >
          <div className="flex-col">
            <Icons.api />
            <p className="font-bold text-sm text-center">APIs</p>
          </div>
        </OrbitingCircles>

        {/* Outer Circles (reverse) */}

        <OrbitingCircles
          className="size-[80px] border-none bg-transparent"
          radius={isMobile ? 125 : isTablet ? 140 : 190}
          duration={20}
          delay={25}
          reverse
        >
          <div className="flex-col">
            <Icons.bfsi />
            <p className="font-bold text-sm text-center">BFSI</p>
          </div>
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[80px] border-none bg-transparent"
          radius={isMobile ? 125 : isTablet ? 140 : 190}
          duration={20}
          delay={19}
          reverse
        >
          <div className="flex-col">
            <Icons.devOps />
            <p className="font-bold text-sm text-center">DevOps</p>
          </div>
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[80px] border-none bg-transparent"
          radius={isMobile ? 125 : isTablet ? 140 : 190}
          duration={20}
          delay={13}
          reverse
        >
          <div className="flex-col">
            <Icons.genAi />
            <p className="font-bold text-sm text-center">AI</p>
          </div>
        </OrbitingCircles>
      </>
    </div>
  );
}

const Icons = {
  api: () => (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dii_14599_553561)">
        <rect x="2" y="1" width="48" height="48" rx="24" fill="#645BFF" />
        <rect
          x="3"
          y="2"
          width="46"
          height="46"
          rx="23"
          stroke="url(#paint0_linear_14599_553561)"
          stroke-width="2"
        />
        <path
          d="M28.2163 27.2215C26.7916 27.7577 25.1951 27.7586 23.7703 27.2219C23.2335 25.7987 23.2334 24.2025 23.7695 22.7791C25.1939 22.242 26.792 22.2419 28.2164 22.779C28.753 24.202 28.7528 25.7985 28.2163 27.2215ZM36.354 23.2502H30.221L34.5574 18.9162C33.8769 17.9608 33.0367 17.1216 32.0807 16.4414L27.7439 20.7754V14.6463C26.5865 14.4517 25.3995 14.452 24.2421 14.6463V20.7754L19.9053 16.4414C18.9495 17.1211 18.1091 17.9615 17.4285 18.9162L21.7656 23.2502H15.6326C15.4812 24.4415 15.4321 25.5612 15.6326 26.7501H21.7656L17.4285 31.0841C18.1108 32.0409 18.9478 32.8774 19.9053 33.5592L24.2421 29.2249V35.3543C25.3996 35.5481 26.5863 35.5482 27.7439 35.3543V29.2249L32.081 33.5592C33.0374 32.8784 33.8762 32.0398 34.5574 31.0841L30.2203 26.7501H36.354C36.5487 25.5944 36.5487 24.4058 36.354 23.2502Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_dii_14599_553561"
          x="0"
          y="0"
          width="52"
          height="52"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            result="effect1_dropShadow_14599_553561"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_14599_553561"
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
            result="effect2_innerShadow_14599_553561"
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
            result="effect3_innerShadow_14599_553561"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.18 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_14599_553561"
            result="effect3_innerShadow_14599_553561"
          />
        </filter>
        <linearGradient
          id="paint0_linear_14599_553561"
          x1="26"
          y1="1"
          x2="26"
          y2="49"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0.12" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
    // <img
    //   alt="Betalectic logo"
    //   src={require("../images/icons/apis.png").default}
    // />
  ),
  bfsi: () => (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dii_14599_553558)">
        <rect x="2" y="1" width="48" height="48" rx="24" fill="#645BFF" />
        <rect
          x="3"
          y="2"
          width="46"
          height="46"
          rx="23"
          stroke="url(#paint0_linear_14599_553558)"
          stroke-width="2"
        />
        <path
          d="M19 22V30M23.5 22V30M28.5 22V30M33 22V30M17 31.6L17 32.4C17 32.9601 17 33.2401 17.109 33.454C17.2049 33.6422 17.3578 33.7952 17.546 33.891C17.7599 34 18.0399 34 18.6 34H33.4C33.9601 34 34.2401 34 34.454 33.891C34.6422 33.7952 34.7951 33.6422 34.891 33.454C35 33.2401 35 32.9601 35 32.4V31.6C35 31.04 35 30.7599 34.891 30.546C34.7951 30.3579 34.6422 30.2049 34.454 30.109C34.2401 30 33.9601 30 33.4 30H18.6C18.0399 30 17.7599 30 17.546 30.109C17.3578 30.2049 17.2049 30.3579 17.109 30.546C17 30.7599 17 31.04 17 31.6ZM25.6529 16.0772L18.2529 17.7216C17.8059 17.8209 17.5823 17.8706 17.4155 17.9908C17.2683 18.0969 17.1527 18.2409 17.0811 18.4076C17 18.5965 17 18.8255 17 19.2835L17 20.4C17 20.9601 17 21.2401 17.109 21.454C17.2049 21.6422 17.3578 21.7952 17.546 21.891C17.7599 22 18.0399 22 18.6 22H33.4C33.9601 22 34.2401 22 34.454 21.891C34.6422 21.7952 34.7951 21.6422 34.891 21.454C35 21.2401 35 20.9601 35 20.4V19.2835C35 18.8255 35 18.5965 34.9188 18.4076C34.8473 18.2409 34.7317 18.0969 34.5845 17.9908C34.4177 17.8706 34.1942 17.8209 33.7471 17.7216L26.3471 16.0772C26.2176 16.0484 26.1528 16.034 26.0874 16.0282C26.0292 16.0231 25.9708 16.0231 25.9126 16.0282C25.8472 16.034 25.7824 16.0484 25.6529 16.0772Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_dii_14599_553558"
          x="0"
          y="0"
          width="52"
          height="52"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            result="effect1_dropShadow_14599_553558"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_14599_553558"
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
            result="effect2_innerShadow_14599_553558"
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
            result="effect3_innerShadow_14599_553558"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.18 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_14599_553558"
            result="effect3_innerShadow_14599_553558"
          />
        </filter>
        <linearGradient
          id="paint0_linear_14599_553558"
          x1="26"
          y1="1"
          x2="26"
          y2="49"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0.12" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
    // <img
    //   alt="Betalectic logo"
    //   src={require("../images/icons/bfsi.png").default}
    // />
  ),
  devOps: () => (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dii_14599_553555)">
        <rect x="2" y="1" width="48" height="48" rx="24" fill="#645BFF" />
        <rect
          x="3"
          y="2"
          width="46"
          height="46"
          rx="23"
          stroke="url(#paint0_linear_14599_553555)"
          stroke-width="2"
        />
        <path
          d="M32.1777 21C37.2737 21 37.2737 29 32.1777 29C27.0827 29 25.0447 21 19.4388 21C14.8537 21 14.8537 29 19.4388 29C25.0447 29 27.0828 21 32.1788 21H32.1777Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_dii_14599_553555"
          x="0"
          y="0"
          width="52"
          height="52"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            result="effect1_dropShadow_14599_553555"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_14599_553555"
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
            result="effect2_innerShadow_14599_553555"
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
            result="effect3_innerShadow_14599_553555"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.18 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_14599_553555"
            result="effect3_innerShadow_14599_553555"
          />
        </filter>
        <linearGradient
          id="paint0_linear_14599_553555"
          x1="26"
          y1="1"
          x2="26"
          y2="49"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0.12" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
    // <img
    //   alt="Betalectic logo"
    //   src={require("../images/icons/devops.png").default}
    // />
  ),
  genAi: () => (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dii_14599_553543)">
        <rect x="2" y="1" width="48" height="48" rx="24" fill="#645BFF" />
        <rect
          x="3"
          y="2"
          width="46"
          height="46"
          rx="23"
          stroke="url(#paint0_linear_14599_553543)"
          stroke-width="2"
        />
        <path
          d="M23 15V17M29 15V17M23 33V35M29 33V35M34 22H36M34 27H36M16 22H18M16 27H18M22.8 33H29.2C30.8802 33 31.7202 33 32.362 32.673C32.9265 32.3854 33.3854 31.9265 33.673 31.362C34 30.7202 34 29.8802 34 28.2V21.8C34 20.1198 34 19.2798 33.673 18.638C33.3854 18.0735 32.9265 17.6146 32.362 17.327C31.7202 17 30.8802 17 29.2 17H22.8C21.1198 17 20.2798 17 19.638 17.327C19.0735 17.6146 18.6146 18.0735 18.327 18.638C18 19.2798 18 20.1198 18 21.8V28.2C18 29.8802 18 30.7202 18.327 31.362C18.6146 31.9265 19.0735 32.3854 19.638 32.673C20.2798 33 21.1198 33 22.8 33ZM24.6 28H27.4C27.9601 28 28.2401 28 28.454 27.891C28.6422 27.7951 28.7951 27.6422 28.891 27.454C29 27.2401 29 26.9601 29 26.4V23.6C29 23.0399 29 22.7599 28.891 22.546C28.7951 22.3578 28.6422 22.2049 28.454 22.109C28.2401 22 27.9601 22 27.4 22H24.6C24.0399 22 23.7599 22 23.546 22.109C23.3578 22.2049 23.2049 22.3578 23.109 22.546C23 22.7599 23 23.0399 23 23.6V26.4C23 26.9601 23 27.2401 23.109 27.454C23.2049 27.6422 23.3578 27.7951 23.546 27.891C23.7599 28 24.0399 28 24.6 28Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_dii_14599_553543"
          x="0"
          y="0"
          width="52"
          height="52"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            result="effect1_dropShadow_14599_553543"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_14599_553543"
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
            result="effect2_innerShadow_14599_553543"
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
            result="effect3_innerShadow_14599_553543"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.18 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_14599_553543"
            result="effect3_innerShadow_14599_553543"
          />
        </filter>
        <linearGradient
          id="paint0_linear_14599_553543"
          x1="26"
          y1="1"
          x2="26"
          y2="49"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0.12" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
    // <img
    //   alt="Betalectic logo"
    //   src={require("../images/icons/genai.png").default}
    // />
  ),
  webMobile: () => (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dii_14599_553564)">
        <rect x="2" y="1" width="48" height="48" rx="24" fill="#645BFF" />
        <rect
          x="3"
          y="2"
          width="46"
          height="46"
          rx="23"
          stroke="url(#paint0_linear_14599_553564)"
          stroke-width="2"
        />
        <path
          d="M19.5 33H22M31 30H31.01M22 19H19.2C18.0799 19 17.5198 19 17.092 19.218C16.7157 19.4097 16.4097 19.7157 16.218 20.092C16 20.5198 16 21.0799 16 22.2V25.8C16 26.9201 16 27.4802 16.218 27.908C16.4097 28.2843 16.7157 28.5903 17.092 28.782C17.5198 29 18.0799 29 19.2 29H22M29.2 33H32.8C33.9201 33 34.4802 33 34.908 32.782C35.2843 32.5903 35.5903 32.2843 35.782 31.908C36 31.4802 36 30.9201 36 29.8V20.2C36 19.0799 36 18.5198 35.782 18.092C35.5903 17.7157 35.2843 17.4097 34.908 17.218C34.4802 17 33.9201 17 32.8 17H29.2C28.0799 17 27.5198 17 27.092 17.218C26.7157 17.4097 26.4097 17.7157 26.218 18.092C26 18.5198 26 19.0799 26 20.2V29.8C26 30.9201 26 31.4802 26.218 31.908C26.4097 32.2843 26.7157 32.5903 27.092 32.782C27.5198 33 28.0799 33 29.2 33Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_dii_14599_553564"
          x="0"
          y="0"
          width="52"
          height="52"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            result="effect1_dropShadow_14599_553564"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_14599_553564"
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
            result="effect2_innerShadow_14599_553564"
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
            result="effect3_innerShadow_14599_553564"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.18 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_14599_553564"
            result="effect3_innerShadow_14599_553564"
          />
        </filter>
        <linearGradient
          id="paint0_linear_14599_553564"
          x1="26"
          y1="1"
          x2="26"
          y2="49"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0.12" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
    // <img
    //   alt="Betalectic logo"
    //   src={require("../images/icons/webmobile.png").default}
    // />
  ),

  api2: () => (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dii_14586_553453)">
        <path
          d="M2 11C2 5.47715 6.47715 1 12 1H40C45.5228 1 50 5.47715 50 11V39C50 44.5228 45.5228 49 40 49H12C6.47715 49 2 44.5228 2 39V11Z"
          fill="white"
        />
        <path
          d="M12 1.5H40C45.2467 1.5 49.5 5.75329 49.5 11V39C49.5 44.2467 45.2467 48.5 40 48.5H12C6.75329 48.5 2.5 44.2467 2.5 39V11C2.5 5.75329 6.75329 1.5 12 1.5Z"
          stroke="#E4E7EC"
        />
        <path
          d="M28.2163 27.2215C26.7916 27.7577 25.1951 27.7586 23.7703 27.2219C23.2335 25.7987 23.2334 24.2025 23.7695 22.7791C25.1939 22.242 26.792 22.2419 28.2164 22.779C28.753 24.202 28.7528 25.7985 28.2163 27.2215ZM36.354 23.2502H30.221L34.5574 18.9162C33.8769 17.9608 33.0367 17.1216 32.0807 16.4414L27.7439 20.7754V14.6463C26.5865 14.4517 25.3995 14.452 24.2421 14.6463V20.7754L19.9053 16.4414C18.9495 17.1211 18.1091 17.9615 17.4285 18.9162L21.7656 23.2502H15.6326C15.4812 24.4415 15.4321 25.5612 15.6326 26.7501H21.7656L17.4285 31.0841C18.1108 32.0409 18.9478 32.8774 19.9053 33.5592L24.2421 29.2249V35.3543C25.3996 35.5481 26.5863 35.5482 27.7439 35.3543V29.2249L32.081 33.5592C33.0374 32.8784 33.8762 32.0398 34.5574 31.0841L30.2203 26.7501H36.354C36.5487 25.5944 36.5487 24.4058 36.354 23.2502Z"
          fill="#525252"
        />
      </g>
      <defs>
        <filter
          id="filter0_dii_14586_553453"
          x="0"
          y="0"
          width="52"
          height="52"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            result="effect1_dropShadow_14586_553453"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_14586_553453"
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
            result="effect2_innerShadow_14586_553453"
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
            result="effect3_innerShadow_14586_553453"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.18 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_14586_553453"
            result="effect3_innerShadow_14586_553453"
          />
        </filter>
      </defs>
    </svg>
  ),

  webAndMobile2: () => (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dii_14586_553442)">
        <path
          d="M2 11C2 5.47715 6.47715 1 12 1H40C45.5228 1 50 5.47715 50 11V39C50 44.5228 45.5228 49 40 49H12C6.47715 49 2 44.5228 2 39V11Z"
          fill="white"
        />
        <path
          d="M12 1.5H40C45.2467 1.5 49.5 5.75329 49.5 11V39C49.5 44.2467 45.2467 48.5 40 48.5H12C6.75329 48.5 2.5 44.2467 2.5 39V11C2.5 5.75329 6.75329 1.5 12 1.5Z"
          stroke="#E4E7EC"
        />
        <path
          d="M19.5 33H22M31 30H31.01M22 19H19.2C18.0799 19 17.5198 19 17.092 19.218C16.7157 19.4097 16.4097 19.7157 16.218 20.092C16 20.5198 16 21.0799 16 22.2V25.8C16 26.9201 16 27.4802 16.218 27.908C16.4097 28.2843 16.7157 28.5903 17.092 28.782C17.5198 29 18.0799 29 19.2 29H22M29.2 33H32.8C33.9201 33 34.4802 33 34.908 32.782C35.2843 32.5903 35.5903 32.2843 35.782 31.908C36 31.4802 36 30.9201 36 29.8V20.2C36 19.0799 36 18.5198 35.782 18.092C35.5903 17.7157 35.2843 17.4097 34.908 17.218C34.4802 17 33.9201 17 32.8 17H29.2C28.0799 17 27.5198 17 27.092 17.218C26.7157 17.4097 26.4097 17.7157 26.218 18.092C26 18.5198 26 19.0799 26 20.2V29.8C26 30.9201 26 31.4802 26.218 31.908C26.4097 32.2843 26.7157 32.5903 27.092 32.782C27.5198 33 28.0799 33 29.2 33Z"
          stroke="#525252"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_dii_14586_553442"
          x="0"
          y="0"
          width="52"
          height="52"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            result="effect1_dropShadow_14586_553442"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_14586_553442"
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
            result="effect2_innerShadow_14586_553442"
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
            result="effect3_innerShadow_14586_553442"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.18 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_14586_553442"
            result="effect3_innerShadow_14586_553442"
          />
        </filter>
      </defs>
    </svg>
  ),

  dedicatedTeam: () => (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dii_14586_553490)">
        <path
          d="M2 11C2 5.47715 6.47715 1 12 1H40C45.5228 1 50 5.47715 50 11V39C50 44.5228 45.5228 49 40 49H12C6.47715 49 2 44.5228 2 39V11Z"
          fill="white"
        />
        <path
          d="M12 1.5H40C45.2467 1.5 49.5 5.75329 49.5 11V39C49.5 44.2467 45.2467 48.5 40 48.5H12C6.75329 48.5 2.5 44.2467 2.5 39V11C2.5 5.75329 6.75329 1.5 12 1.5Z"
          stroke="#E4E7EC"
        />
        <path
          d="M32 28.8369C33.4559 29.5683 34.7041 30.742 35.6152 32.2096C35.7957 32.5003 35.8859 32.6456 35.9171 32.8468C35.9804 33.2558 35.7008 33.7585 35.3199 33.9204C35.1325 34 34.9217 34 34.5 34M30 24.5322C31.4817 23.7959 32.5 22.2669 32.5 20.5C32.5 18.7331 31.4817 17.2041 30 16.4678M28 20.5C28 22.9853 25.9853 25 23.5 25C21.0147 25 19 22.9853 19 20.5C19 18.0147 21.0147 16 23.5 16C25.9853 16 28 18.0147 28 20.5ZM16.5592 31.9383C18.1535 29.5446 20.6694 28 23.5 28C26.3306 28 28.8465 29.5446 30.4408 31.9383C30.79 32.4628 30.9647 32.725 30.9446 33.0599C30.9289 33.3207 30.7579 33.64 30.5496 33.7976C30.2819 34 29.9138 34 29.1776 34H17.8223C17.0862 34 16.7181 34 16.4504 33.7976C16.242 33.64 16.0711 33.3207 16.0554 33.0599C16.0353 32.725 16.21 32.4628 16.5592 31.9383Z"
          stroke="#525252"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_dii_14586_553490"
          x="0"
          y="0"
          width="52"
          height="52"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            result="effect1_dropShadow_14586_553490"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_14586_553490"
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
            result="effect2_innerShadow_14586_553490"
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
            result="effect3_innerShadow_14586_553490"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.18 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_14586_553490"
            result="effect3_innerShadow_14586_553490"
          />
        </filter>
      </defs>
    </svg>
  ),

  uiUxDesign: () => (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dii_14586_553486)">
        <path
          d="M2 11C2 5.47715 6.47715 1 12 1H40C45.5228 1 50 5.47715 50 11V39C50 44.5228 45.5228 49 40 49H12C6.47715 49 2 44.5228 2 39V11Z"
          fill="white"
        />
        <path
          d="M12 1.5H40C45.2467 1.5 49.5 5.75329 49.5 11V39C49.5 44.2467 45.2467 48.5 40 48.5H12C6.75329 48.5 2.5 44.2467 2.5 39V11C2.5 5.75329 6.75329 1.5 12 1.5Z"
          stroke="#E4E7EC"
        />
        <path
          d="M22 27C22 27 23.5 29 26 29C28.5 29 30 27 30 27M29 22H29.01M22 22H24M36 25C36 30.5228 31.5228 35 26 35C20.4772 35 16 30.5228 16 25C16 19.4772 20.4772 15 26 15C31.5228 15 36 19.4772 36 25ZM29.5 22C29.5 22.2761 29.2761 22.5 29 22.5C28.7239 22.5 28.5 22.2761 28.5 22C28.5 21.7239 28.7239 21.5 29 21.5C29.2761 21.5 29.5 21.7239 29.5 22Z"
          stroke="#525252"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_dii_14586_553486"
          x="0"
          y="0"
          width="52"
          height="52"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            result="effect1_dropShadow_14586_553486"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_14586_553486"
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
            result="effect2_innerShadow_14586_553486"
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
            result="effect3_innerShadow_14586_553486"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.18 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_14586_553486"
            result="effect3_innerShadow_14586_553486"
          />
        </filter>
      </defs>
    </svg>
  ),

  genAi2: () => (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dii_14586_553472)">
        <path
          d="M2 11C2 5.47715 6.47715 1 12 1H40C45.5228 1 50 5.47715 50 11V39C50 44.5228 45.5228 49 40 49H12C6.47715 49 2 44.5228 2 39V11Z"
          fill="white"
        />
        <path
          d="M12 1.5H40C45.2467 1.5 49.5 5.75329 49.5 11V39C49.5 44.2467 45.2467 48.5 40 48.5H12C6.75329 48.5 2.5 44.2467 2.5 39V11C2.5 5.75329 6.75329 1.5 12 1.5Z"
          stroke="#E4E7EC"
        />
        <path
          d="M23 15V17M29 15V17M23 33V35M29 33V35M34 22H36M34 27H36M16 22H18M16 27H18M22.8 33H29.2C30.8802 33 31.7202 33 32.362 32.673C32.9265 32.3854 33.3854 31.9265 33.673 31.362C34 30.7202 34 29.8802 34 28.2V21.8C34 20.1198 34 19.2798 33.673 18.638C33.3854 18.0735 32.9265 17.6146 32.362 17.327C31.7202 17 30.8802 17 29.2 17H22.8C21.1198 17 20.2798 17 19.638 17.327C19.0735 17.6146 18.6146 18.0735 18.327 18.638C18 19.2798 18 20.1198 18 21.8V28.2C18 29.8802 18 30.7202 18.327 31.362C18.6146 31.9265 19.0735 32.3854 19.638 32.673C20.2798 33 21.1198 33 22.8 33ZM24.6 28H27.4C27.9601 28 28.2401 28 28.454 27.891C28.6422 27.7951 28.7951 27.6422 28.891 27.454C29 27.2401 29 26.9601 29 26.4V23.6C29 23.0399 29 22.7599 28.891 22.546C28.7951 22.3578 28.6422 22.2049 28.454 22.109C28.2401 22 27.9601 22 27.4 22H24.6C24.0399 22 23.7599 22 23.546 22.109C23.3578 22.2049 23.2049 22.3578 23.109 22.546C23 22.7599 23 23.0399 23 23.6V26.4C23 26.9601 23 27.2401 23.109 27.454C23.2049 27.6422 23.3578 27.7951 23.546 27.891C23.7599 28 24.0399 28 24.6 28Z"
          stroke="#525252"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_dii_14586_553472"
          x="0"
          y="0"
          width="52"
          height="52"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            result="effect1_dropShadow_14586_553472"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_14586_553472"
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
            result="effect2_innerShadow_14586_553472"
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
            result="effect3_innerShadow_14586_553472"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.18 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_14586_553472"
            result="effect3_innerShadow_14586_553472"
          />
        </filter>
      </defs>
    </svg>
  ),

  devOps2: () => (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dii_14586_553464)">
        <path
          d="M2 11C2 5.47715 6.47715 1 12 1H40C45.5228 1 50 5.47715 50 11V39C50 44.5228 45.5228 49 40 49H12C6.47715 49 2 44.5228 2 39V11Z"
          fill="white"
        />
        <path
          d="M12 1.5H40C45.2467 1.5 49.5 5.75329 49.5 11V39C49.5 44.2467 45.2467 48.5 40 48.5H12C6.75329 48.5 2.5 44.2467 2.5 39V11C2.5 5.75329 6.75329 1.5 12 1.5Z"
          stroke="#E4E7EC"
        />
        <path
          d="M32.1775 21C37.2735 21 37.2735 29 32.1775 29C27.0825 29 25.0445 21 19.4385 21C14.8535 21 14.8535 29 19.4385 29C25.0445 29 27.0825 21 32.1785 21H32.1775Z"
          stroke="#525252"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_dii_14586_553464"
          x="0"
          y="0"
          width="52"
          height="52"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            result="effect1_dropShadow_14586_553464"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_14586_553464"
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
            result="effect2_innerShadow_14586_553464"
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
            result="effect3_innerShadow_14586_553464"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.18 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_14586_553464"
            result="effect3_innerShadow_14586_553464"
          />
        </filter>
      </defs>
    </svg>
  ),

  mfStack: () => (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dii_14599_553550)">
        <rect x="2" y="1" width="48" height="48" rx="24" fill="#645BFF" />
        <rect
          x="3"
          y="2"
          width="46"
          height="46"
          rx="23"
          stroke="url(#paint0_linear_14599_553550)"
          stroke-width="2"
        />
        <path
          d="M35 34H18.6C18.0399 34 17.7599 34 17.546 33.891C17.3578 33.7951 17.2049 33.6422 17.109 33.454C17 33.2401 17 32.9601 17 32.4V16M34 21L30.0811 25.1827C29.9326 25.3412 29.8584 25.4204 29.7688 25.4614C29.6897 25.4976 29.6026 25.5125 29.516 25.5047C29.4179 25.4958 29.3215 25.4458 29.1287 25.3457L25.8713 23.6543C25.6785 23.5542 25.5821 23.5042 25.484 23.4953C25.3974 23.4875 25.3103 23.5024 25.2312 23.5386C25.1416 23.5796 25.0674 23.6588 24.9189 23.8173L21 28"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_dii_14599_553550"
          x="0"
          y="0"
          width="52"
          height="52"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            result="effect1_dropShadow_14599_553550"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_14599_553550"
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
            result="effect2_innerShadow_14599_553550"
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
            result="effect3_innerShadow_14599_553550"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.18 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_14599_553550"
            result="effect3_innerShadow_14599_553550"
          />
        </filter>
        <linearGradient
          id="paint0_linear_14599_553550"
          x1="26"
          y1="1"
          x2="26"
          y2="49"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0.12" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  ),

  uxUi: () => (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dii_14599_553546)">
        <rect x="2" y="1" width="48" height="48" rx="24" fill="#645BFF" />
        <rect
          x="3"
          y="2"
          width="46"
          height="46"
          rx="23"
          stroke="url(#paint0_linear_14599_553546)"
          stroke-width="2"
        />
        <path
          d="M22 27C22 27 23.5 29 26 29C28.5 29 30 27 30 27M29 22H29.01M22 22H24M36 25C36 30.5228 31.5228 35 26 35C20.4772 35 16 30.5228 16 25C16 19.4772 20.4772 15 26 15C31.5228 15 36 19.4772 36 25ZM29.5 22C29.5 22.2761 29.2761 22.5 29 22.5C28.7239 22.5 28.5 22.2761 28.5 22C28.5 21.7239 28.7239 21.5 29 21.5C29.2761 21.5 29.5 21.7239 29.5 22Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_dii_14599_553546"
          x="0"
          y="0"
          width="52"
          height="52"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            result="effect1_dropShadow_14599_553546"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_14599_553546"
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
            result="effect2_innerShadow_14599_553546"
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
            result="effect3_innerShadow_14599_553546"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.18 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_14599_553546"
            result="effect3_innerShadow_14599_553546"
          />
        </filter>
        <linearGradient
          id="paint0_linear_14599_553546"
          x1="26"
          y1="1"
          x2="26"
          y2="49"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0.12" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  ),
};

export default function Home(): JSX.Element {
  let shouldReduceMotion = useReducedMotion();

  return (
    <Layout
      title={`Home`}
      description="We are a digital solutions powerhouse, where innovation meets execution at full speed. At this crossroads of creativity and technology, "
      wrapperClassName="rajiv"
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

            <main>
              <Container className="md:mt-12">
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
                      products since 2016, using Laravel & JavaScript{" "}
                      <span className="font-semibold">API backends</span>, React{" "}
                      <span className="font-semibold">web apps</span>, React
                      Native <span className="font-semibold">mobile apps</span>,
                      backed by expert product management throughout your
                      journey. We are{" "}
                      <span className="font-semibold">
                        partners for the long run
                      </span>{" "}
                      - maintaining and scaling your product while you build
                      your business.
                    </p>

                    <Link to="/contact">
                      <ShimmerButton className="shadow-2xl">
                        <span className="whitespace-pre-wrap text-center text-xl font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-2xl">
                          Setup a 30 min free call & Start Shipping
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

              <div className="mt-34">
                <Clients />
              </div>

              <div className="mt-32">
                <SectionIntro
                  eyebrow="Our Services"
                  title="Transforming Ideas into Products"
                >
                  <p className="text-base text-neutral-600 dark:text-neutral-300">
                    Build your Minimum Viable Product with
                    <span className="font-bold"> #shipcentric</span> mindset. We
                    empower your businesses to scale, innovate, and thrive. We
                    provide end-to-end services from
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

              <CaseStudies
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
              />

              <Testimonial className="mt-24 sm:mt-32 lg:mt-40">
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
