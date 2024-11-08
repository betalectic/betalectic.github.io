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

function CaseStudies({ caseStudies }: any) {
  return (
    <>
      <SectionIntro
        title="8 Years of Excellence in IT Services"
        className="mt-24 sm:mt-32 lg:mt-40 text-neutral-900 dark:text-neutral-50"
      >
        <p className="text-base text-neutral-600 dark:text-neutral-300">
          We believe technology is the answer to the world’s greatest
          challenges. By harnessing its power, we can create innovative
          solutions that drive progress and solve complex problems across
          industries. Through collaboration and innovation, we aim to make
          technology accessible and impactful for all.
        </p>
      </SectionIntro>
      <Container className="my-20">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 dark:bg-neutral-900 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 dark:hover:bg-neutral-800 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <img
                      alt="\ Logo"
                      src={
                        require("@site/static/img/favicon_betalectic.png")
                          .default
                      }
                      className="w-16 h-16"
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950 dark:text-neutral-50">
                  <time
                    dateTime={caseStudy.date.split("-")[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split("-")[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
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
    <div className="mt-24 rounded-4xl bg-neutral-50 dark:bg-neutral-300 py-20 sm:mt-24 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center my-auto font-display text-sm font-semibold tracking-wider text-black sm:text-left">
            We’ve worked with hundreds of amazing people
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
  const isMobile = window.innerWidth < 426 ? true : false;
  const isTablet = window.innerWidth >= 425 && window.innerWidth <= 768;

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
          <Icons.webMobile />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[45px] border-none bg-transparent"
          duration={20}
          delay={10}
          radius={isMobile ? 60 : isTablet ? 70 : 80}
        >
          <Icons.api />
        </OrbitingCircles>

        {/* Outer Circles (reverse) */}

        <OrbitingCircles
          className="size-[80px] border-none bg-transparent"
          radius={isMobile ? 125 : isTablet ? 140 : 190}
          duration={20}
          delay={25}
          reverse
        >
          <Icons.bfsi />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[80px] border-none bg-transparent"
          radius={isMobile ? 125 : isTablet ? 140 : 190}
          duration={20}
          delay={19}
          reverse
        >
          <Icons.devOps />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[80px] border-none bg-transparent"
          radius={isMobile ? 125 : isTablet ? 140 : 190}
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

const Icons = {
  api: () => (
    <svg
      width="52"
      height="73"
      viewBox="0 0 52 73"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dii_14586_553384)">
        <rect x="2" y="1" width="48" height="48" rx="24" fill="#645BFF" />
        <rect
          x="3"
          y="2"
          width="46"
          height="46"
          rx="23"
          stroke="url(#paint0_linear_14586_553384)"
          stroke-width="2"
        />
        <path
          d="M28.2163 27.2215C26.7916 27.7577 25.1951 27.7586 23.7703 27.2219C23.2335 25.7987 23.2334 24.2025 23.7695 22.7791C25.1939 22.242 26.792 22.2419 28.2164 22.779C28.753 24.202 28.7528 25.7985 28.2163 27.2215ZM36.354 23.2502H30.221L34.5574 18.9162C33.8769 17.9608 33.0367 17.1216 32.0807 16.4414L27.7439 20.7754V14.6463C26.5865 14.4517 25.3995 14.452 24.2421 14.6463V20.7754L19.9053 16.4414C18.9495 17.1211 18.1091 17.9615 17.4285 18.9162L21.7656 23.2502H15.6326C15.4812 24.4415 15.4321 25.5612 15.6326 26.7501H21.7656L17.4285 31.0841C18.1108 32.0409 18.9478 32.8774 19.9053 33.5592L24.2421 29.2249V35.3543C25.3996 35.5481 26.5863 35.5482 27.7439 35.3543V29.2249L32.081 33.5592C33.0374 32.8784 33.8762 32.0398 34.5574 31.0841L30.2203 26.7501H36.354C36.5487 25.5944 36.5487 24.4058 36.354 23.2502Z"
          fill="white"
        />
      </g>
      <path
        d="M12.9788 68H11.01L14.5945 57.8182H16.8715L20.461 68H18.4923L15.7728 59.9062H15.6933L12.9788 68ZM13.0434 64.0078H18.4127V65.4893H13.0434V64.0078ZM21.8021 68V57.8182H25.6203C26.4025 57.8182 27.0587 57.964 27.589 58.2557C28.1227 58.5473 28.5254 58.9484 28.7971 59.4588C29.0722 59.9659 29.2098 60.5426 29.2098 61.1889C29.2098 61.8419 29.0722 62.4219 28.7971 62.929C28.522 63.4361 28.116 63.8355 27.5791 64.1271C27.0422 64.4155 26.3809 64.5597 25.5954 64.5597H23.0649V63.0433H25.3469C25.8042 63.0433 26.1788 62.9638 26.4704 62.8047C26.7621 62.6456 26.9775 62.4268 27.1167 62.1484C27.2593 61.87 27.3305 61.5502 27.3305 61.1889C27.3305 60.8277 27.2593 60.5095 27.1167 60.2344C26.9775 59.9593 26.7604 59.7455 26.4655 59.593C26.1738 59.4373 25.7976 59.3594 25.3369 59.3594H23.6466V68H21.8021ZM32.6563 57.8182V68H30.8119V57.8182H32.6563ZM40.6096 62.3821L38.969 62.5611C38.9226 62.3954 38.8414 62.2396 38.7254 62.0938C38.6127 61.9479 38.4603 61.8303 38.268 61.7408C38.0758 61.6513 37.8405 61.6065 37.5621 61.6065C37.1875 61.6065 36.8727 61.6877 36.6175 61.8501C36.3656 62.0125 36.2413 62.223 36.2446 62.4815C36.2413 62.7036 36.3225 62.8842 36.4882 63.0234C36.6572 63.1626 36.9356 63.277 37.3234 63.3665L38.626 63.6449C39.3485 63.8007 39.8854 64.0476 40.2368 64.3857C40.5914 64.7237 40.7704 65.1662 40.7737 65.7131C40.7704 66.1937 40.6295 66.6179 40.3511 66.9858C40.076 67.3504 39.6932 67.6354 39.2027 67.8409C38.7122 68.0464 38.1487 68.1491 37.5123 68.1491C36.5777 68.1491 35.8253 67.9536 35.2552 67.5625C34.6852 67.1681 34.3454 66.6196 34.2361 65.9169L35.991 65.7479C36.0706 66.0926 36.2396 66.3527 36.4981 66.5284C36.7567 66.7041 37.0931 66.7919 37.5074 66.7919C37.9349 66.7919 38.278 66.7041 38.5365 66.5284C38.7983 66.3527 38.9292 66.1357 38.9292 65.8771C38.9292 65.6584 38.8447 65.4777 38.6757 65.3352C38.51 65.1927 38.2515 65.0833 37.9001 65.0071L36.5976 64.7337C35.8651 64.5812 35.3232 64.3243 34.9719 63.9631C34.6205 63.5985 34.4465 63.1378 34.4498 62.581C34.4465 62.1103 34.5741 61.7027 34.8327 61.358C35.0945 61.0099 35.4574 60.7415 35.9214 60.5526C36.3888 60.3603 36.9273 60.2642 37.5372 60.2642C38.4321 60.2642 39.1364 60.4548 39.6501 60.8359C40.1672 61.2171 40.487 61.7325 40.6096 62.3821Z"
        fill="#475467"
      />
      <defs>
        <filter
          id="filter0_dii_14586_553384"
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
            result="effect1_dropShadow_14586_553384"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_14586_553384"
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
            result="effect2_innerShadow_14586_553384"
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
            result="effect3_innerShadow_14586_553384"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.18 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_14586_553384"
            result="effect3_innerShadow_14586_553384"
          />
        </filter>
        <linearGradient
          id="paint0_linear_14586_553384"
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
      width="72"
      height="73"
      viewBox="0 0 72 73"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dii_14586_553393)">
        <rect x="12" y="1" width="48" height="48" rx="24" fill="#645BFF" />
        <rect
          x="13"
          y="2"
          width="46"
          height="46"
          rx="23"
          stroke="url(#paint0_linear_14586_553393)"
          stroke-width="2"
        />
        <path
          d="M29 22V30M33.5 22V30M38.5 22V30M43 22V30M27 31.6L27 32.4C27 32.9601 27 33.2401 27.109 33.454C27.2049 33.6422 27.3578 33.7952 27.546 33.891C27.7599 34 28.0399 34 28.6 34H43.4C43.9601 34 44.2401 34 44.454 33.891C44.6422 33.7952 44.7951 33.6422 44.891 33.454C45 33.2401 45 32.9601 45 32.4V31.6C45 31.04 45 30.7599 44.891 30.546C44.7951 30.3579 44.6422 30.2049 44.454 30.109C44.2401 30 43.9601 30 43.4 30H28.6C28.0399 30 27.7599 30 27.546 30.109C27.3578 30.2049 27.2049 30.3579 27.109 30.546C27 30.7599 27 31.04 27 31.6ZM35.6529 16.0772L28.2529 17.7216C27.8059 17.8209 27.5823 17.8706 27.4155 17.9908C27.2683 18.0969 27.1527 18.2409 27.0811 18.4076C27 18.5965 27 18.8255 27 19.2835L27 20.4C27 20.9601 27 21.2401 27.109 21.454C27.2049 21.6422 27.3578 21.7952 27.546 21.891C27.7599 22 28.0399 22 28.6 22H43.4C43.9601 22 44.2401 22 44.454 21.891C44.6422 21.7952 44.7951 21.6422 44.891 21.454C45 21.2401 45 20.9601 45 20.4V19.2835C45 18.8255 45 18.5965 44.9188 18.4076C44.8473 18.2409 44.7317 18.0969 44.5845 17.9908C44.4177 17.8706 44.1942 17.8209 43.7471 17.7216L36.3471 16.0772C36.2176 16.0484 36.1528 16.034 36.0874 16.0282C36.0292 16.0231 35.9708 16.0231 35.9126 16.0282C35.8472 16.034 35.7824 16.0484 35.6529 16.0772Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <path
        d="M21.8353 68V57.8182H25.733C26.4688 57.8182 27.0803 57.9342 27.5676 58.1662C28.0581 58.3949 28.4243 58.7081 28.6663 59.1058C28.9115 59.5036 29.0342 59.9543 29.0342 60.4581C29.0342 60.8724 28.9546 61.227 28.7955 61.522C28.6365 61.8137 28.4227 62.0507 28.1542 62.233C27.8857 62.4152 27.5858 62.5462 27.2544 62.6257V62.7251C27.6156 62.745 27.962 62.8561 28.2934 63.0582C28.6282 63.2571 28.9016 63.5388 29.1137 63.9034C29.3258 64.268 29.4319 64.7088 29.4319 65.2259C29.4319 65.7528 29.3043 66.2268 29.0491 66.6477C28.7939 67.0653 28.4094 67.3951 27.8957 67.6371C27.382 67.879 26.7356 68 25.9568 68H21.8353ZM23.6798 66.4588H25.6634C26.3329 66.4588 26.8152 66.3312 27.1102 66.076C27.4085 65.8175 27.5576 65.486 27.5576 65.0817C27.5576 64.7801 27.483 64.5083 27.3339 64.2663C27.1847 64.0211 26.9726 63.8288 26.6975 63.6896C26.4224 63.5471 26.0943 63.4759 25.7132 63.4759H23.6798V66.4588ZM23.6798 62.1484H25.5044C25.8225 62.1484 26.1092 62.0904 26.3644 61.9744C26.6196 61.8551 26.8202 61.6877 26.966 61.4723C27.1151 61.2536 27.1897 60.995 27.1897 60.6967C27.1897 60.3023 27.0505 59.9775 26.7721 59.7223C26.497 59.4671 26.0877 59.3395 25.5441 59.3395H23.6798V62.1484ZM31.0365 68V57.8182H37.5592V59.3643H32.8809V62.1286H37.1118V63.6747H32.8809V68H31.0365ZM44.773 60.6172C44.7266 60.183 44.531 59.8449 44.1863 59.603C43.845 59.361 43.4008 59.2401 42.854 59.2401C42.4695 59.2401 42.1397 59.2981 41.8646 59.4141C41.5895 59.5301 41.3791 59.6875 41.2332 59.8864C41.0874 60.0852 41.0128 60.3123 41.0095 60.5675C41.0095 60.7796 41.0576 60.9635 41.1537 61.1193C41.2531 61.2751 41.3873 61.4077 41.5564 61.517C41.7254 61.6231 41.9127 61.7126 42.1182 61.7855C42.3237 61.8584 42.5308 61.9197 42.7396 61.9695L43.6942 62.2081C44.0786 62.2976 44.4482 62.4186 44.8028 62.571C45.1608 62.7235 45.4806 62.9157 45.7623 63.1477C46.0474 63.3797 46.2728 63.6598 46.4385 63.9879C46.6042 64.3161 46.6871 64.7005 46.6871 65.1413C46.6871 65.7379 46.5346 66.2633 46.2297 66.7173C45.9247 67.1681 45.4839 67.5211 44.9072 67.7763C44.3338 68.0282 43.6395 68.1541 42.8241 68.1541C42.032 68.1541 41.3443 68.0315 40.7609 67.7862C40.1809 67.541 39.7268 67.183 39.3987 66.7124C39.0739 66.2417 38.8982 65.6683 38.8717 64.9922H40.6863C40.7129 65.3468 40.8222 65.6418 41.0145 65.8771C41.2067 66.1125 41.4569 66.2881 41.7652 66.4041C42.0767 66.5201 42.4247 66.5781 42.8092 66.5781C43.2103 66.5781 43.5616 66.5185 43.8632 66.3991C44.1681 66.2765 44.4068 66.1075 44.5791 65.892C44.7515 65.6733 44.8393 65.4181 44.8426 65.1264C44.8393 64.8613 44.7614 64.6425 44.6089 64.4702C44.4565 64.2945 44.2427 64.1487 43.9676 64.0327C43.6958 63.9134 43.3776 63.8073 43.0131 63.7145L41.8547 63.4162C41.0161 63.2008 40.3532 62.8743 39.866 62.4368C39.3821 61.996 39.1402 61.411 39.1402 60.6818C39.1402 60.0819 39.3026 59.5566 39.6274 59.1058C39.9555 58.6551 40.4013 58.3054 40.9648 58.0568C41.5282 57.8049 42.1662 57.679 42.8788 57.679C43.6014 57.679 44.2344 57.8049 44.778 58.0568C45.3248 58.3054 45.7541 58.6518 46.0656 59.0959C46.3772 59.5367 46.5379 60.0438 46.5479 60.6172H44.773ZM50.1759 57.8182V68H48.3314V57.8182H50.1759Z"
        fill="#475467"
      />
      <defs>
        <filter
          id="filter0_dii_14586_553393"
          x="10"
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
            result="effect1_dropShadow_14586_553393"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_14586_553393"
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
            result="effect2_innerShadow_14586_553393"
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
            result="effect3_innerShadow_14586_553393"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.18 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_14586_553393"
            result="effect3_innerShadow_14586_553393"
          />
        </filter>
        <linearGradient
          id="paint0_linear_14586_553393"
          x1="36"
          y1="1"
          x2="36"
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
      width="72"
      height="73"
      viewBox="0 0 72 73"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dii_14586_553385)">
        <rect x="12" y="1" width="48" height="48" rx="24" fill="#645BFF" />
        <rect
          x="13"
          y="2"
          width="46"
          height="46"
          rx="23"
          stroke="url(#paint0_linear_14586_553385)"
          stroke-width="2"
        />
        <path
          d="M42.1777 21C47.2737 21 47.2737 29 42.1777 29C37.0827 29 35.0447 21 29.4388 21C24.8537 21 24.8537 29 29.4388 29C35.0447 29 37.0828 21 42.1788 21H42.1777Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <path
        d="M14.9633 68H11.5131V57.8182H15.0329C16.0438 57.8182 16.9122 58.022 17.6381 58.4297C18.3672 58.834 18.9274 59.4157 19.3184 60.1747C19.7095 60.9337 19.9051 61.8419 19.9051 62.8991C19.9051 63.9598 19.7079 64.8712 19.3135 65.6335C18.9224 66.3958 18.3573 66.9808 17.6182 67.3885C16.8824 67.7962 15.9974 68 14.9633 68ZM13.3575 66.4041H14.8738C15.5831 66.4041 16.1747 66.2749 16.6487 66.0163C17.1227 65.7545 17.479 65.3651 17.7176 64.848C17.9562 64.3277 18.0756 63.678 18.0756 62.8991C18.0756 62.1203 17.9562 61.474 17.7176 60.9602C17.479 60.4432 17.126 60.0571 16.6586 59.8018C16.1946 59.5433 15.6179 59.4141 14.9285 59.4141H13.3575V66.4041ZM24.9587 68.1491C24.1931 68.1491 23.5319 67.9901 22.9751 67.6719C22.4215 67.3504 21.9956 66.8963 21.6974 66.3097C21.3991 65.7197 21.2499 65.0253 21.2499 64.2266C21.2499 63.4411 21.3991 62.7517 21.6974 62.1584C21.999 61.5618 22.4199 61.0978 22.9601 60.7663C23.5004 60.4316 24.1351 60.2642 24.8643 60.2642C25.3349 60.2642 25.779 60.3404 26.1966 60.4929C26.6176 60.642 26.9888 60.8741 27.3103 61.1889C27.6351 61.5038 27.8903 61.9048 28.0759 62.392C28.2615 62.8759 28.3543 63.4527 28.3543 64.1222V64.674H22.0951V63.4609H26.6292C26.6259 63.1162 26.5513 62.8097 26.4055 62.5412C26.2596 62.2694 26.0558 62.0556 25.7939 61.8999C25.5354 61.7441 25.2338 61.6662 24.8891 61.6662C24.5212 61.6662 24.1981 61.7557 23.9197 61.9347C23.6412 62.1103 23.4242 62.3423 23.2684 62.6307C23.1159 62.9157 23.038 63.2289 23.0347 63.5703V64.6293C23.0347 65.0734 23.1159 65.4545 23.2783 65.7727C23.4407 66.0876 23.6678 66.3295 23.9594 66.4986C24.2511 66.6643 24.5925 66.7472 24.9836 66.7472C25.2454 66.7472 25.4824 66.7107 25.6945 66.6378C25.9066 66.5616 26.0906 66.4505 26.2464 66.3047C26.4021 66.1589 26.5198 65.9782 26.5993 65.7628L28.2797 65.9517C28.1737 66.3958 27.9715 66.7836 27.6732 67.1151C27.3782 67.4432 27.0004 67.6984 26.5397 67.8807C26.079 68.0597 25.552 68.1491 24.9587 68.1491ZM36.4791 60.3636L33.7597 68H31.771L29.0516 60.3636H30.9706L32.7256 66.0362H32.8051L34.5651 60.3636H36.4791ZM40.7957 68.1491C40.05 68.1491 39.4037 67.9851 38.8568 67.657C38.3099 67.3288 37.8857 66.8698 37.5841 66.2798C37.2858 65.6899 37.1366 65.0005 37.1366 64.2116C37.1366 63.4228 37.2858 62.7318 37.5841 62.1385C37.8857 61.5452 38.3099 61.0845 38.8568 60.7564C39.4037 60.4283 40.05 60.2642 40.7957 60.2642C41.5415 60.2642 42.1878 60.4283 42.7346 60.7564C43.2815 61.0845 43.7041 61.5452 44.0024 62.1385C44.304 62.7318 44.4548 63.4228 44.4548 64.2116C44.4548 65.0005 44.304 65.6899 44.0024 66.2798C43.7041 66.8698 43.2815 67.3288 42.7346 67.657C42.1878 67.9851 41.5415 68.1491 40.7957 68.1491ZM40.8057 66.7074C41.21 66.7074 41.5481 66.5964 41.8199 66.3743C42.0916 66.1489 42.2938 65.8473 42.4264 65.4695C42.5623 65.0916 42.6302 64.6707 42.6302 64.2067C42.6302 63.7393 42.5623 63.3168 42.4264 62.9389C42.2938 62.5578 42.0916 62.2545 41.8199 62.0291C41.5481 61.8037 41.21 61.6911 40.8057 61.6911C40.3914 61.6911 40.0467 61.8037 39.7716 62.0291C39.4998 62.2545 39.296 62.5578 39.1601 62.9389C39.0275 63.3168 38.9612 63.7393 38.9612 64.2067C38.9612 64.6707 39.0275 65.0916 39.1601 65.4695C39.296 65.8473 39.4998 66.1489 39.7716 66.3743C40.0467 66.5964 40.3914 66.7074 40.8057 66.7074ZM45.9823 70.8636V60.3636H47.7522V61.6264H47.8566C47.9494 61.4408 48.0803 61.2436 48.2494 61.0348C48.4184 60.8227 48.6471 60.642 48.9355 60.4929C49.2238 60.3404 49.5917 60.2642 50.0392 60.2642C50.6291 60.2642 51.1611 60.415 51.635 60.7166C52.1123 61.0149 52.4901 61.4574 52.7686 62.044C53.0503 62.6274 53.1911 63.3433 53.1911 64.1918C53.1911 65.0303 53.0536 65.7429 52.7785 66.3295C52.5034 66.9162 52.1289 67.3636 51.6549 67.6719C51.181 67.9801 50.644 68.1342 50.0441 68.1342C49.6066 68.1342 49.2437 68.0613 48.9553 67.9155C48.667 67.7696 48.435 67.594 48.2593 67.3885C48.087 67.1797 47.9527 66.9825 47.8566 66.7969H47.782V70.8636H45.9823ZM47.7472 64.1818C47.7472 64.6757 47.8169 65.1082 47.9561 65.4794C48.0986 65.8506 48.3024 66.1406 48.5676 66.3494C48.836 66.5549 49.1608 66.6577 49.542 66.6577C49.9397 66.6577 50.2728 66.5516 50.5413 66.3395C50.8097 66.1241 51.0119 65.8307 51.1478 65.4595C51.287 65.085 51.3566 64.6591 51.3566 64.1818C51.3566 63.7079 51.2887 63.2869 51.1528 62.919C51.0169 62.5511 50.8147 62.2628 50.5463 62.054C50.2778 61.8452 49.943 61.7408 49.542 61.7408C49.1575 61.7408 48.8311 61.8419 48.5626 62.044C48.2941 62.2462 48.0903 62.5296 47.9511 62.8942C47.8152 63.2588 47.7472 63.688 47.7472 64.1818ZM60.7678 62.3821L59.1272 62.5611C59.0808 62.3954 58.9996 62.2396 58.8836 62.0938C58.7709 61.9479 58.6185 61.8303 58.4262 61.7408C58.234 61.6513 57.9987 61.6065 57.7203 61.6065C57.3457 61.6065 57.0309 61.6877 56.7757 61.8501C56.5238 62.0125 56.3995 62.223 56.4028 62.4815C56.3995 62.7036 56.4807 62.8842 56.6464 63.0234C56.8154 63.1626 57.0938 63.277 57.4816 63.3665L58.7842 63.6449C59.5067 63.8007 60.0436 64.0476 60.395 64.3857C60.7496 64.7237 60.9286 65.1662 60.9319 65.7131C60.9286 66.1937 60.7877 66.6179 60.5093 66.9858C60.2342 67.3504 59.8514 67.6354 59.3609 67.8409C58.8704 68.0464 58.3069 68.1491 57.6705 68.1491C56.7359 68.1491 55.9835 67.9536 55.4134 67.5625C54.8434 67.1681 54.5036 66.6196 54.3943 65.9169L56.1492 65.7479C56.2288 66.0926 56.3978 66.3527 56.6563 66.5284C56.9149 66.7041 57.2513 66.7919 57.6656 66.7919C58.0931 66.7919 58.4362 66.7041 58.6947 66.5284C58.9565 66.3527 59.0874 66.1357 59.0874 65.8771C59.0874 65.6584 59.0029 65.4777 58.8339 65.3352C58.6682 65.1927 58.4097 65.0833 58.0583 65.0071L56.7558 64.7337C56.0233 64.5812 55.4814 64.3243 55.1301 63.9631C54.7787 63.5985 54.6047 63.1378 54.608 62.581C54.6047 62.1103 54.7323 61.7027 54.9909 61.358C55.2527 61.0099 55.6156 60.7415 56.0796 60.5526C56.547 60.3603 57.0856 60.2642 57.6954 60.2642C58.5903 60.2642 59.2946 60.4548 59.8083 60.8359C60.3254 61.2171 60.6452 61.7325 60.7678 62.3821Z"
        fill="#475467"
      />
      <defs>
        <filter
          id="filter0_dii_14586_553385"
          x="10"
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
            result="effect1_dropShadow_14586_553385"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_14586_553385"
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
            result="effect2_innerShadow_14586_553385"
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
            result="effect3_innerShadow_14586_553385"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.18 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_14586_553385"
            result="effect3_innerShadow_14586_553385"
          />
        </filter>
        <linearGradient
          id="paint0_linear_14586_553385"
          x1="36"
          y1="1"
          x2="36"
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
      width="72"
      height="73"
      viewBox="0 0 72 73"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dii_14586_553407)">
        <rect x="12" y="1" width="48" height="48" rx="24" fill="#645BFF" />
        <rect
          x="13"
          y="2"
          width="46"
          height="46"
          rx="23"
          stroke="url(#paint0_linear_14586_553407)"
          stroke-width="2"
        />
        <path
          d="M33 15V17M39 15V17M33 33V35M39 33V35M44 22H46M44 27H46M26 22H28M26 27H28M32.8 33H39.2C40.8802 33 41.7202 33 42.362 32.673C42.9265 32.3854 43.3854 31.9265 43.673 31.362C44 30.7202 44 29.8802 44 28.2V21.8C44 20.1198 44 19.2798 43.673 18.638C43.3854 18.0735 42.9265 17.6146 42.362 17.327C41.7202 17 40.8802 17 39.2 17H32.8C31.1198 17 30.2798 17 29.638 17.327C29.0735 17.6146 28.6146 18.0735 28.327 18.638C28 19.2798 28 20.1198 28 21.8V28.2C28 29.8802 28 30.7202 28.327 31.362C28.6146 31.9265 29.0735 32.3854 29.638 32.673C30.2798 33 31.1198 33 32.8 33ZM34.6 28H37.4C37.9601 28 38.2401 28 38.454 27.891C38.6422 27.7951 38.7951 27.6422 38.891 27.454C39 27.2401 39 26.9601 39 26.4V23.6C39 23.0399 39 22.7599 38.891 22.546C38.7951 22.3578 38.6422 22.2049 38.454 22.109C38.2401 22 37.9601 22 37.4 22H34.6C34.0399 22 33.7599 22 33.546 22.109C33.3578 22.2049 33.2049 22.3578 33.109 22.546C33 22.7599 33 23.0399 33 23.6V26.4C33 26.9601 33 27.2401 33.109 27.454C33.2049 27.6422 33.3578 27.7951 33.546 27.891C33.7599 28 34.0399 28 34.6 28Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <path
        d="M31.3255 68H29.3567L32.9412 57.8182H35.2182L38.8077 68H36.839L34.1195 59.9062H34.04L31.3255 68ZM31.3901 64.0078H36.7594V65.4893H31.3901V64.0078ZM41.9933 57.8182V68H40.1488V57.8182H41.9933Z"
        fill="#475467"
      />
      <defs>
        <filter
          id="filter0_dii_14586_553407"
          x="10"
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
            result="effect1_dropShadow_14586_553407"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_14586_553407"
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
            result="effect2_innerShadow_14586_553407"
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
            result="effect3_innerShadow_14586_553407"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.18 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_14586_553407"
            result="effect3_innerShadow_14586_553407"
          />
        </filter>
        <linearGradient
          id="paint0_linear_14586_553407"
          x1="36"
          y1="1"
          x2="36"
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
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dii_14586_553417)">
        <rect x="24" y="2" width="48" height="48" rx="24" fill="#645BFF" />
        <rect
          x="25"
          y="3"
          width="46"
          height="46"
          rx="23"
          stroke="url(#paint0_linear_14586_553417)"
          stroke-width="2"
        />
        <path
          d="M41.5 34H44M53 31H53.01M44 20H41.2C40.0799 20 39.5198 20 39.092 20.218C38.7157 20.4097 38.4097 20.7157 38.218 21.092C38 21.5198 38 22.0799 38 23.2V26.8C38 27.9201 38 28.4802 38.218 28.908C38.4097 29.2843 38.7157 29.5903 39.092 29.782C39.5198 30 40.0799 30 41.2 30H44M51.2 34H54.8C55.9201 34 56.4802 34 56.908 33.782C57.2843 33.5903 57.5903 33.2843 57.782 32.908C58 32.4802 58 31.9201 58 30.8V21.2C58 20.0799 58 19.5198 57.782 19.092C57.5903 18.7157 57.2843 18.4097 56.908 18.218C56.4802 18 55.9201 18 54.8 18H51.2C50.0799 18 49.5198 18 49.092 18.218C48.7157 18.4097 48.4097 18.7157 48.218 19.092C48 19.5198 48 20.0799 48 21.2V30.8C48 31.9201 48 32.4802 48.218 32.908C48.4097 33.2843 48.7157 33.5903 49.092 33.782C49.5198 34 50.0799 34 51.2 34Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <path
        d="M29.5523 69L26.6787 58.8182H28.6624L30.4969 66.3004H30.5914L32.5502 58.8182H34.3548L36.3186 66.3054H36.4081L38.2426 58.8182H40.2263L37.3527 69H35.5331L33.4948 61.8558H33.4152L31.3719 69H29.5523ZM44.0271 69.1491C43.2615 69.1491 42.6002 68.9901 42.0434 68.6719C41.4899 68.3504 41.064 67.8963 40.7657 67.3097C40.4674 66.7197 40.3183 66.0253 40.3183 65.2266C40.3183 64.4411 40.4674 63.7517 40.7657 63.1584C41.0673 62.5618 41.4883 62.0978 42.0285 61.7663C42.5687 61.4316 43.2035 61.2642 43.9326 61.2642C44.4033 61.2642 44.8474 61.3404 45.265 61.4929C45.6859 61.642 46.0571 61.8741 46.3786 62.1889C46.7035 62.5038 46.9587 62.9048 47.1443 63.392C47.3299 63.8759 47.4227 64.4527 47.4227 65.1222V65.674H41.1634V64.4609H45.6975C45.6942 64.1162 45.6196 63.8097 45.4738 63.5412C45.328 63.2694 45.1241 63.0556 44.8623 62.8999C44.6038 62.7441 44.3022 62.6662 43.9575 62.6662C43.5896 62.6662 43.2664 62.7557 42.988 62.9347C42.7096 63.1103 42.4925 63.3423 42.3367 63.6307C42.1843 63.9157 42.1064 64.2289 42.1031 64.5703V65.6293C42.1031 66.0734 42.1843 66.4545 42.3467 66.7727C42.5091 67.0876 42.7361 67.3295 43.0278 67.4986C43.3195 67.6643 43.6608 67.7472 44.0519 67.7472C44.3138 67.7472 44.5508 67.7107 44.7629 67.6378C44.975 67.5616 45.1589 67.4505 45.3147 67.3047C45.4705 67.1589 45.5882 66.9782 45.6677 66.7628L47.3481 66.9517C47.242 67.3958 47.0399 67.7836 46.7416 68.1151C46.4466 68.4432 46.0687 68.6984 45.608 68.8807C45.1473 69.0597 44.6204 69.1491 44.0271 69.1491ZM49.0248 69V58.8182H50.8245V62.6264H50.8991C50.9919 62.4408 51.1228 62.2436 51.2918 62.0348C51.4608 61.8227 51.6895 61.642 51.9779 61.4929C52.2662 61.3404 52.6341 61.2642 53.0816 61.2642C53.6715 61.2642 54.2035 61.415 54.6775 61.7166C55.1547 62.0149 55.5326 62.4574 55.811 63.044C56.0927 63.6274 56.2336 64.3433 56.2336 65.1918C56.2336 66.0303 56.096 66.7429 55.8209 67.3295C55.5458 67.9162 55.1713 68.3636 54.6974 68.6719C54.2234 68.9801 53.6865 69.1342 53.0866 69.1342C52.6491 69.1342 52.2861 69.0613 51.9978 68.9155C51.7094 68.7696 51.4774 68.594 51.3018 68.3885C51.1294 68.1797 50.9952 67.9825 50.8991 67.7969H50.7947V69H49.0248ZM50.7897 65.1818C50.7897 65.6757 50.8593 66.1082 50.9985 66.4794C51.141 66.8506 51.3448 67.1406 51.61 67.3494C51.8785 67.5549 52.2033 67.6577 52.5844 67.6577C52.9822 67.6577 53.3153 67.5516 53.5837 67.3395C53.8522 67.1241 54.0544 66.8307 54.1903 66.4595C54.3295 66.085 54.3991 65.6591 54.3991 65.1818C54.3991 64.7079 54.3311 64.2869 54.1952 63.919C54.0593 63.5511 53.8572 63.2628 53.5887 63.054C53.3202 62.8452 52.9855 62.7408 52.5844 62.7408C52.2 62.7408 51.8735 62.8419 51.605 63.044C51.3366 63.2462 51.1327 63.5296 50.9935 63.8942C50.8576 64.2588 50.7897 64.688 50.7897 65.1818ZM64.2789 69.1491C63.5828 69.1491 62.9846 69.0232 62.4841 68.7713C61.9836 68.5194 61.5975 68.1797 61.3257 67.7521C61.0573 67.3213 60.923 66.8357 60.923 66.2955C60.923 65.8878 61.0059 65.5265 61.1716 65.2116C61.3406 64.8968 61.5727 64.6051 61.8676 64.3366C62.1659 64.0682 62.5106 63.8014 62.9017 63.5362L64.7064 62.3082C64.9716 62.1359 65.1721 61.9536 65.308 61.7614C65.4472 61.5691 65.5168 61.3437 65.5168 61.0852C65.5168 60.8665 65.424 60.6593 65.2384 60.4638C65.0561 60.2682 64.8042 60.1705 64.4827 60.1705C64.2673 60.1705 64.0767 60.2218 63.911 60.3246C63.7486 60.424 63.6209 60.5549 63.5281 60.7173C63.4387 60.8797 63.3939 61.0521 63.3939 61.2344C63.3939 61.4564 63.4552 61.6818 63.5779 61.9105C63.7038 62.1392 63.8662 62.3762 64.0651 62.6214C64.2673 62.8667 64.4827 63.1269 64.7114 63.402L69.4891 69H67.5402L63.5729 64.456C63.2779 64.1113 62.9929 63.7715 62.7178 63.4368C62.446 63.102 62.2223 62.754 62.0466 62.3928C61.8743 62.0282 61.7881 61.6338 61.7881 61.2095C61.7881 60.7289 61.8991 60.2997 62.1212 59.9219C62.3432 59.5407 62.6531 59.2408 63.0509 59.022C63.4519 58.8033 63.9209 58.6939 64.4578 58.6939C64.9948 58.6939 65.4555 58.8 65.8399 59.0121C66.2244 59.2242 66.521 59.5059 66.7298 59.8572C66.9387 60.2086 67.0431 60.5914 67.0431 61.0057C67.0431 61.4863 66.9237 61.9171 66.6851 62.2983C66.4465 62.6761 66.115 63.0192 65.6908 63.3274L63.6325 64.8338C63.2945 65.0791 63.0525 65.3277 62.9067 65.5795C62.7609 65.8281 62.6879 66.0402 62.6879 66.2159C62.6879 66.4844 62.7559 66.728 62.8918 66.9467C63.0277 67.1655 63.2182 67.3411 63.4635 67.4737C63.7121 67.603 64.0021 67.6676 64.3335 67.6676C64.6981 67.6676 65.0577 67.5864 65.4124 67.424C65.767 67.2583 66.0902 67.023 66.3818 66.718C66.6735 66.4131 66.9055 66.0485 67.0779 65.6243C67.2502 65.1967 67.3364 64.7228 67.3364 64.2024H68.8825C68.8825 64.8454 68.8113 65.4055 68.6688 65.8828C68.5262 66.3568 68.3423 66.7578 68.1169 67.0859C67.8915 67.4107 67.6529 67.6709 67.401 67.8665C67.3215 67.9228 67.2452 67.9792 67.1723 68.0355C67.0994 68.0919 67.0232 68.1482 66.9436 68.2045C66.5857 68.5294 66.1664 68.768 65.6858 68.9205C65.2085 69.0729 64.7396 69.1491 64.2789 69.1491ZM26.1927 78.8182H28.4498L31.4726 86.196H31.5919L34.6146 78.8182H36.8717V89H35.1018V82.005H35.0074L32.1934 88.9702H30.871L28.0571 81.9901H27.9626V89H26.1927V78.8182ZM42.1317 89.1491C41.3859 89.1491 40.7396 88.9851 40.1927 88.657C39.6459 88.3288 39.2216 87.8698 38.92 87.2798C38.6217 86.6899 38.4726 86.0005 38.4726 85.2116C38.4726 84.4228 38.6217 83.7318 38.92 83.1385C39.2216 82.5452 39.6459 82.0845 40.1927 81.7564C40.7396 81.4283 41.3859 81.2642 42.1317 81.2642C42.8774 81.2642 43.5237 81.4283 44.0706 81.7564C44.6175 82.0845 45.04 82.5452 45.3383 83.1385C45.6399 83.7318 45.7907 84.4228 45.7907 85.2116C45.7907 86.0005 45.6399 86.6899 45.3383 87.2798C45.04 87.8698 44.6175 88.3288 44.0706 88.657C43.5237 88.9851 42.8774 89.1491 42.1317 89.1491ZM42.1416 87.7074C42.546 87.7074 42.884 87.5964 43.1558 87.3743C43.4276 87.1489 43.6298 86.8473 43.7623 86.4695C43.8982 86.0916 43.9662 85.6707 43.9662 85.2067C43.9662 84.7393 43.8982 84.3168 43.7623 83.9389C43.6298 83.5578 43.4276 83.2545 43.1558 83.0291C42.884 82.8037 42.546 82.6911 42.1416 82.6911C41.7273 82.6911 41.3826 82.8037 41.1075 83.0291C40.8357 83.2545 40.6319 83.5578 40.496 83.9389C40.3634 84.3168 40.2971 84.7393 40.2971 85.2067C40.2971 85.6707 40.3634 86.0916 40.496 86.4695C40.6319 86.8473 40.8357 87.1489 41.1075 87.3743C41.3826 87.5964 41.7273 87.7074 42.1416 87.7074ZM47.3978 89V78.8182H49.1975V82.6264H49.2721C49.3649 82.4408 49.4958 82.2436 49.6649 82.0348C49.8339 81.8227 50.0626 81.642 50.3509 81.4929C50.6393 81.3404 51.0072 81.2642 51.4546 81.2642C52.0446 81.2642 52.5766 81.415 53.0505 81.7166C53.5278 82.0149 53.9056 82.4574 54.184 83.044C54.4658 83.6274 54.6066 84.3433 54.6066 85.1918C54.6066 86.0303 54.4691 86.7429 54.194 87.3295C53.9189 87.9162 53.5444 88.3636 53.0704 88.6719C52.5964 88.9801 52.0595 89.1342 51.4596 89.1342C51.0221 89.1342 50.6592 89.0613 50.3708 88.9155C50.0825 88.7696 49.8505 88.594 49.6748 88.3885C49.5025 88.1797 49.3682 87.9825 49.2721 87.7969H49.1677V89H47.3978ZM49.1627 85.1818C49.1627 85.6757 49.2323 86.1082 49.3715 86.4794C49.5141 86.8506 49.7179 87.1406 49.983 87.3494C50.2515 87.5549 50.5763 87.6577 50.9575 87.6577C51.3552 87.6577 51.6883 87.5516 51.9568 87.3395C52.2252 87.1241 52.4274 86.8307 52.5633 86.4595C52.7025 86.085 52.7721 85.6591 52.7721 85.1818C52.7721 84.7079 52.7042 84.2869 52.5683 83.919C52.4324 83.5511 52.2302 83.2628 51.9617 83.054C51.6933 82.8452 51.3585 82.7408 50.9575 82.7408C50.573 82.7408 50.2465 82.8419 49.9781 83.044C49.7096 83.2462 49.5058 83.5296 49.3666 83.8942C49.2307 84.2588 49.1627 84.688 49.1627 85.1818ZM56.1366 89V81.3636H57.9363V89H56.1366ZM57.0415 80.2798C56.7564 80.2798 56.5112 80.1854 56.3057 79.9964C56.1002 79.8042 55.9974 79.5739 55.9974 79.3054C55.9974 79.0336 56.1002 78.8033 56.3057 78.6143C56.5112 78.4221 56.7564 78.326 57.0415 78.326C57.3298 78.326 57.5751 78.4221 57.7773 78.6143C57.9827 78.8033 58.0855 79.0336 58.0855 79.3054C58.0855 79.5739 57.9827 79.8042 57.7773 79.9964C57.5751 80.1854 57.3298 80.2798 57.0415 80.2798ZM61.5867 78.8182V89H59.787V78.8182H61.5867ZM66.8181 89.1491C66.0525 89.1491 65.3912 88.9901 64.8344 88.6719C64.2809 88.3504 63.855 87.8963 63.5567 87.3097C63.2584 86.7197 63.1093 86.0253 63.1093 85.2266C63.1093 84.4411 63.2584 83.7517 63.5567 83.1584C63.8583 82.5618 64.2793 82.0978 64.8195 81.7663C65.3598 81.4316 65.9945 81.2642 66.7236 81.2642C67.1943 81.2642 67.6384 81.3404 68.056 81.4929C68.4769 81.642 68.8482 81.8741 69.1697 82.1889C69.4945 82.5038 69.7497 82.9048 69.9353 83.392C70.1209 83.8759 70.2137 84.4527 70.2137 85.1222V85.674H63.9545V84.4609H68.4885C68.4852 84.1162 68.4107 83.8097 68.2648 83.5412C68.119 83.2694 67.9152 83.0556 67.6533 82.8999C67.3948 82.7441 67.0932 82.6662 66.7485 82.6662C66.3806 82.6662 66.0574 82.7557 65.779 82.9347C65.5006 83.1103 65.2835 83.3423 65.1278 83.6307C64.9753 83.9157 64.8974 84.2289 64.8941 84.5703V85.6293C64.8941 86.0734 64.9753 86.4545 65.1377 86.7727C65.3001 87.0876 65.5271 87.3295 65.8188 87.4986C66.1105 87.6643 66.4519 87.7472 66.843 87.7472C67.1048 87.7472 67.3418 87.7107 67.5539 87.6378C67.766 87.5616 67.95 87.4505 68.1057 87.3047C68.2615 87.1589 68.3792 86.9782 68.4587 86.7628L70.1391 86.9517C70.0331 87.3958 69.8309 87.7836 69.5326 88.1151C69.2376 88.4432 68.8598 88.6984 68.3991 88.8807C67.9384 89.0597 67.4114 89.1491 66.8181 89.1491Z"
        fill="#475467"
      />
      <defs>
        <filter
          id="filter0_dii_14586_553417"
          x="22"
          y="1"
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
            result="effect1_dropShadow_14586_553417"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_14586_553417"
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
            result="effect2_innerShadow_14586_553417"
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
            result="effect3_innerShadow_14586_553417"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.18 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_14586_553417"
            result="effect3_innerShadow_14586_553417"
          />
        </filter>
        <linearGradient
          id="paint0_linear_14586_553417"
          x1="48"
          y1="2"
          x2="48"
          y2="50"
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
              <Container className="mt-12">
                <div className="md:flex">
                  <FadeIn className="md:w-full m-auto ">
                    <h1 className="font-display text-5xl font-medium md:text-start sm:text-center tracking-tight text-neutral-950 dark:text-gray-50 [text-wrap:balance] sm:text-7xl">
                      {/* Your End-to-End Product Development Partner — Crafting,
                      Building, and Scaling Solutions */}
                      Partner with Us to Build Web & Mobile Apps, APIs, GenAI,
                      and DevOps
                      {/* 635bff */}
                    </h1>

                    <p className="mt-6 text-xl md:text-start sm:text-center text-neutral-600 dark:text-neutral-300">
                      We are a digital solutions powerhouse, where innovation
                      meets execution at full speed. We don’t just build
                      software we engineer impact. Our team thrives on turning
                      complex challenges into seamless, tailored solutions that
                      move fast, scale effortlessly.
                    </p>

                    <Link to="/contact">
                      <ShimmerButton className="shadow-2xl mx-auto md:mx-0">
                        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                          Connect Now
                        </span>
                      </ShimmerButton>
                    </Link>
                  </FadeIn>

                  <div className="z-50 md:w-full ">
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
                    provide end-to-end services,
                    <span className="font-bold">
                      from design, development to deployment
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
                  },
                  {
                    href: "/",
                    date: "2024-11-01",
                    title: "Betalectic AI",
                    description:
                      "Harness Betalectic AI’s advanced Generative AI solutions, designed to meet your unique business needs and drive transformative growth.",
                  },
                  {
                    href: "/",
                    date: "2025-11-01",
                    title: "UX Designs",
                    description:
                      "Create intuitive, visually compelling user interfaces with our expert UI/UX design services, enhancing user experience and engagement.",
                  },
                ]}
              />

              <Testimonial
                className="mt-24 sm:mt-32 lg:mt-40"
                client={{
                  name: "Betalectic",
                  logo: require("@site/static/img/favicon_betalectic.png")
                    .default,
                }}
              >
                The team at Studio went above and beyond with our onboarding,
                even finding a way to access the user’s microphone without
                triggering one of those annoying permission dialogs.
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
