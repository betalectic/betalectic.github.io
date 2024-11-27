import Layout from "@theme/Layout";
import { Container } from "../components/studio/components/Container";
import HowWeSolveIcons from "../images/mfstack/HowWeSolveIcons";
import FeaturesSectionIcons from "../images/mfstack/FeaturesSectionIcons";
import WhyChooseUsSectionIcons from "../images/mfstack/WhyChooseUsSectionIcons";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useState, useRef, useEffect } from "react";
import WhatWeSolveIcons from "../images/mfstack/WhatWeSolveIcons";
import { motion, AnimatePresence } from "framer-motion";

function MfStack() {
  const howWeSolveCards = [
    {
      name: "Investor Web App",
      description:
        "A modern platform for complete portfolio management - track investments, execute transactions, and monitor performance through a secure interface.",
      icon: HowWeSolveIcons.webApp,
    },
    {
      name: "Investor Mobile App",
      description:
        "Your investments on the go. Manage portfolios, execute transactions, and track updates instantly with bank-grade security, with our Mobile Apps solutions.",
      icon: HowWeSolveIcons.mobileApp,
    },
    {
      name: "Distributor Web App",
      description:
        "Power your distribution business with our comprehensive platform. Manage clients, track performance, and grow efficiently.",
      icon: HowWeSolveIcons.webApp,
    },
    {
      name: "Distributor Mobile App",
      description:
        "Run your distribution business from anywhere. Monitor performance, execute transactions, and stay connected with clients on the move.",
      icon: HowWeSolveIcons.mobileApp,
    },
    {
      name: "Distributor assisted journeys for investors",
      description:
        "Empower your investors with a personalized assisted platform. Guide them through onboarding, investments, and reporting with ease.",
      icon: HowWeSolveIcons.distributors,
    },
    {
      name: "WhatsApp Integration for Investor Journeys",
      description:
        "Connect with investments via WhatsApp. Access updates, transactions, and support instantly through India's favorite messaging app.",
      icon: HowWeSolveIcons.whatsApp,
    },
    {
      name: "Embeddable Solutions - Domain Kit",
      description:
        "White-label investment solutions for your domain. Custom branding and seamless integration for your platform.",
      icon: HowWeSolveIcons.domainKit,
    },
    {
      name: "Embeddable Solutions - Hosted Workflows",
      description:
        "Ready-to-deploy investment workflows. Fast, secure, and compliant solutions for your fintech needs.",
      icon: HowWeSolveIcons.hostedWorkflows,
    },
    {
      name: "Embeddable Solutions - SDKs",
      description:
        "Robust investment APIs at your fingertips. Tested components and comprehensive documentation for quick integration.",
      icon: HowWeSolveIcons.sdks,
    },
    {
      name: "Tailored solutions for your needs",
      description:
        "Custom fintech solutions built for you. From development to deployment, we create technology that matches your business needs.",
      icon: HowWeSolveIcons.tailoredSolutions,
    },
  ];

  const featuresCards = [
    {
      title: "Seamless Digital Onboarding in Minutes",
      icon: FeaturesSectionIcons.seamlessOnboarding,
      description:
        "Transform your customer onboarding with our digital-first KYC solution built on Fintech Primitive APIs",
      points: [
        "Built for Resident Individuals, NRIs, & Non-Individuals investors",
        "Digital KYC for Resident Individuals",
        "PAN-based verification",
        "Digital processing for NRI investors",
        "Digilocker Integration to fetch Documents for the Investor",
        "SEBI Compliant",
        "Bank-Grade Security",
      ],
      srcLight: require("../images/mfstack/onboarding.png").default,
      srcDark: require("../images/mfstack/onboarding-dark.png").default,
    },
    {
      title: "Plug in to the powerful Mutual Fund Transaction Engine",
      icon: FeaturesSectionIcons.transactionEngine,
      description:
        "Process mutual fund transactions at scale with Fintech Primitives robust transaction engine. Built on modern APIs, designed for reliability, and engineered for performance.",
      points: [
        "Real-time order processing",
        "Multi-AMC transactions",
        "Instant status tracking",
        "Supports Lumpsum & SIP orders",
        "Support Switch & STP transactions",
        "Supports Redemption & SWP transactions",
        "Supports Step-up, Step-down, Pause, Resume, and Stop recurring transactions",
        "Multi-payment gateway support",
        "Instant order validation",
      ],
      srcLight: require("../images/mfstack/transaction-engine.png").default,
      srcDark: require("../images/mfstack/transaction-engine-dark.png").default,
    },
    {
      title: "Comprehensive Mutual Fund Reports & Analytics",
      icon: FeaturesSectionIcons.reportsAndAnalytics,
      description:
        "Unlock investment insights with our comprehensive reporting suite. Powered by reliable Fintech Primitives, delivering accurate, real-time mutual fund analytics and reports.",
      points: [
        "Real-time portfolio valuation",
        "Customizable dashboards",
        "Customizable templates",
        "Scheduled generation",
        "Supports Investor Reports such as (Holdings, Capital Gains, Investment Account wise Returns, Scheme Wise Returns)",
        "Supports Distributor Reports such as (AUM Summary, Transactions Report, Purchase and Redemption Reports)",
        "Supports custom comprehensive reports",
      ],
      srcLight: require("../images/mfstack/reports-analytics.png").default,
      srcDark: require("../images/mfstack/reports-analytics-dark.png").default,
    },
  ];

  const whyChooseUsCards = [
    {
      icon: WhyChooseUsSectionIcons.solutionsForYou,
      title: "Solutions for YOU",
      description:
        "Whether you are an Independent Distributor, Large Distribution House, or the Next Fintech looking to disrupt the MF space, we have right offering for you.",
    },
    {
      icon: WhyChooseUsSectionIcons.beyondImplementation,
      title: "Beyond Implementation",
      description:
        "Whether you are an Independent Distributor, Large Distribution House, or the Next Fintech looking to disrupt the MF space, we have right offering for you.",
    },
    {
      icon: WhyChooseUsSectionIcons.fintechApis,
      title: "Build on Fintech Primitives APIs",
      description:
        "With over 8 years of experience providing solutions in the Banking, Financial Services, and Insurance sector, we deliver expertise tailored to meet industry-specific needs.",
    },
    {
      icon: WhyChooseUsSectionIcons.bfsiExpertise,
      title: "BFSI expertise",
      description:
        "Whether you are an Independent Distributor, Large Distribution House, or the Next Fintech looking to disrupt the MF space, we have right offering for you.",
    },
  ];

  const faqQuestions = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "How does billing work?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "How do I change my account email?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
  ];

  const whatWeSolveCards = [
    {
      id: 1,
      name: "Investor Portfolio Management",
      description:
        "Real-time portfolio insights at your fingertips. Track investments, visualize allocations, and monitor performance in one comprehensive dashboard.",
      icon: WhatWeSolveIcons.investor,
      tags: [
        "Fintechs",
        "Independent Distributors",
        "Wealth Management Companies",
      ],
    },
    {
      id: 2,
      name: "Financial Planning",
      description:
        "Comprehensive financial planning tools for your clients. From goal-based planning to retirement calculations, deliver strategic guidance.",
      icon: WhatWeSolveIcons.financialPlanning,
      tags: [
        "Fintechs",
        "Independent Distributors",
        "Wealth Management Companies",
      ],
    },
    {
      id: 3,
      name: "Risk Profiling",
      description:
        "Smart risk assessment for informed decisions. Generate risk scores, analyze portfolios, and maintain alignment with client objectives.",
      icon: WhatWeSolveIcons.riskProfiling,
      tags: [
        "Fintechs",
        "Independent Distributors",
        "Wealth Management Companies",
      ],
    },
    {
      id: 4,
      name: "MF Transactions",
      description:
        "Complete mutual fund transaction platform. Process orders, manage SIPs, and track investments with real-time updates.",
      icon: WhatWeSolveIcons.mfTransactions,
      tags: [
        "Fintechs",
        "Independent Distributors",
        "Wealth Management Companies",
      ],
    },
    {
      id: 5,
      name: "KYC Checks, Onboarding and E-KYC",
      description:
        "Digital KYC made simple. Digital onboarding for all investor types with integrated verification systems.",
      icon: WhatWeSolveIcons.kycChecks,
      tags: [
        "Fintechs",
        "Independent Distributors",
        "Wealth Management Companies",
      ],
    },
    {
      id: 6,
      name: "Fund Details and Performance Data",
      description:
        "Real-time fund insights. Access NAVs, track performance, and analyze portfolio holdings instantly.",
      icon: WhatWeSolveIcons.fundDetails,
      tags: [
        "Fintechs",
        "Independent Distributors",
        "Wealth Management Companies",
      ],
    },
    {
      id: 7,
      name: "Security",
      description:
        "Enterprise-grade security for your business. Two-factor authentication, encryption, and robust access controls.",
      icon: WhatWeSolveIcons.security,
      tags: [
        "Fintechs",
        "Independent Distributors",
        "Wealth Management Companies",
      ],
    },
    {
      id: 8,
      name: "LAMF",
      description:
        "Integrated loan management platform. Calculate eligibility, track disbursements, and manage repayments through comprehensive dashboards.",
      icon: WhatWeSolveIcons.lamf,
      tags: [
        "Fintechs",
        "Independent Distributors",
        "Wealth Management Companies",
      ],
    },
    {
      id: 9,
      name: "Back office",
      description:
        "Stay in control with a dedicated dashboard to track, manage, and monitor every aspect of your application seamlessly.",
      icon: WhatWeSolveIcons.backOffice,
      tags: [
        "Fintechs",
        "Independent Distributors",
        "Wealth Management Companies",
      ],
    },
  ];

  const logoImages = [
    {
      src: require("../images/mfstack/fp.png").default,
      alt: "Fintech Primitives",
    },
    {
      src: require("../images/mfstack/kfintech.png").default,
      alt: "KFintech",
    },
    {
      src: require("../images/mfstack/cybrilla.png").default,
      alt: "Cybrilla",
    },
    {
      src: require("../images/mfstack/cams.png").default,
      alt: "Cams",
    },
  ];

  const GalleryWithTags = () => {
    const tags = [
      "Fintechs",
      "Independent Distributors",
      "Wealth Management Companies",
    ];

    const [isSticky, setIsSticky] = useState(false);
    const sectionRef = useRef(null);
    const tagRef = useRef(null);

    const [activeTag, setActiveTag] = useState("Fintechs");
    const [shuffledCards, setShuffledCards] = useState(whatWeSolveCards);

    const shuffleArray = (array) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    const handleTagChange = (tag) => {
      setActiveTag(tag);
      const filtered =
        tag === "All"
          ? whatWeSolveCards
          : whatWeSolveCards.filter((card) => card.tags.includes(tag));
      setShuffledCards(shuffleArray(filtered));
    };

    // Debounce implementation
    const debounce = (func, delay) => {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          func(...args);
        }, delay);
      };
    };

    const handleScroll = debounce(() => {
      if (sectionRef.current && tagRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const tagHeight = tagRef.current.offsetHeight;

        // Check if the tag section needs to be sticky
        const shouldStick =
          sectionRect.top <= 0 && sectionRect.bottom > tagHeight;

        if (shouldStick !== isSticky) {
          setIsSticky(shouldStick);
        }
      }
    }, 50); // Adjust the delay as needed (50ms is a good balance for performance)

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const cardVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
      exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
    };

    return (
      <div className="mx-auto">
        {/* Sticky Tags */}
        <div
          ref={tagRef}
          className={`w-full overflow-x-auto ${
            isSticky
              ? "fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 z-50 py-2"
              : "relative"
          }`}
        >
          <div className="flex gap-4 justify-center px-4 md:px-8 transition-all duration-300">
            {tags.map((tag, index) => (
              <button
                key={index}
                onClick={() => handleTagChange(tag)}
                className={`px-2 py-1 md:px-4 md:py-2 rounded-full font-medium md:text-sm text-[10px] transition-all duration-300 ${
                  activeTag === tag
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Section */}
        <div ref={sectionRef} className="mt-16">
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <AnimatePresence>
              {shuffledCards.map((card) => (
                <motion.div
                  key={card.id}
                  className="bg-gray-50 dark:bg-gray-900 shadow-lg p-6 rounded-xl ring-1 ring-neutral-200 dark:ring-neutral-700 transition-shadow duration-300"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                >
                  <div
                    className="flex flex-col"
                    style={{
                      minHeight: "100px",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <card.icon aria-hidden="true" />
                      <h2 className="font-bold text-md mt-2 text-gray-900 dark:text-gray-50">
                        {card.name}
                      </h2>
                    </div>
                    <dd className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                      {card.description}
                    </dd>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    );
  };

  return (
    <Layout title="MF Stack" description="MF Stack description to set up here">
      <Container>
        {/* Hero Image section */}
        <div className="relative isolate pt-10">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="py-24 bg-[#292399] rounded-3xl h-[550px] md:h-[750px] sm:py-32 lg:pb-40">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-50 sm:text-7xl">
                  The New Age of
                  <span className="text-[#CCC9FF]"> MF Distribution</span>
                </h1>
                <p className="mt-8 px-12 text-pretty text-lg font-medium text-[#CCC9FF] sm:text-xl/8">
                  Effortlessly build Mutual Fund Web & Mobile Applications for
                  your investors in just 8 weeks
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-[#4E45DD] px-6 py-3 text-sm font-semibold text-white shadow-md hover:cursor-pointer hover:bg-[#4E45DD] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-white"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
              <div className="mt-16 sm:mt-24">
                <img
                  loading="lazy"
                  alt="App screenshot"
                  src={require("../images/mfstack/hero-image.png").default}
                  className="rounded-2xl md:rounded-4xl shadow-2xl dark:hidden ring-2 ring-gray-900/10"
                />
                <img
                  loading="lazy"
                  alt="App screenshot"
                  src={require("../images/mfstack/hero-image-dark.png").default}
                  className="rounded-2xl md:rounded-4xl shadow-2xl hidden dark:block ring-2 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Logos section */}
        <div className="mt-[200px] md:mt-[300px] lg:mt-[700px] py-10 bg-[#F9FAFB] dark:bg-gray-100 rounded-2xl">
          <div className="mx-auto lg:px-8">
            <h2 className="text-center text-sm font-semibold text-[#475467] ">
              Our Integration Partners
            </h2>
            <div className="relative block md:hidden overflow-hidden w-full mt-10">
              <div className="flex gap-12 animate-infinite-scroll">
                {logoImages.map((logo, index) => (
                  <img
                    key={index}
                    loading="lazy"
                    alt={logo.alt}
                    src={logo.src}
                    width={158}
                    height={48}
                    className="h-12 object-contain"
                  />
                ))}
              </div>
            </div>

            <div className="hidden md:flex justify-center mt-10 md:gap-x-4 lg:gap-x-16">
              {logoImages.map((image, index) => (
                <img
                  key={index}
                  alt={image.alt}
                  src={image.src}
                  width={148}
                  height={40}
                  className={`max-h-12 object-contain`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* For whom and how section */}
        <div className="py-16">
          <div className="mx-auto lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
                For whom and how?
              </h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl lg:text-balance">
                Tailor made solutions for your business goals
              </p>
              <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
                Flexible mutual fund solutions that grow with your
                business,regardless of size or scale.
              </p>
            </div>
            {/* <TabComponent /> */}
            <GalleryWithTags />
          </div>
        </div>
        {/* How we solve section */}
        <div className="py-12">
          <div className="lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
                How we solve?
              </h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl lg:text-balance">
                Products
              </p>
              <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
                From SDKs to full-stack solutions, choose the right building
                blocks for your platform
              </p>
            </div>
            <div className="mt-10 max-w-2xl lg:max-w-none">
              <dl className="grid max-w-2xl grid-cols-1 md:grid-cols-2 mx-auto gap-x-6 gap-y-8 lg:max-w-none lg:grid-cols-3">
                {howWeSolveCards.map((feature) => (
                  <div
                    key={feature.name}
                    className="flex flex-col bg-white dark:bg-gray-900 shadow-lg p-8 rounded-xl ring-1 ring-neutral-200 dark:ring-neutral-700"
                  >
                    <feature.icon aria-hidden="true" />
                    <h2 className="mt-4 text-gray-900 dark:text-gray-50">
                      {feature.name}
                    </h2>
                    <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600 dark:text-gray-300">
                      <p className="">{feature.description}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-[#4E45DD] px-6 py-3 text-sm font-semibold text-white shadow-md hover:cursor-pointer hover:bg-[#6a47b8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-white"
            >
              Get Quote
            </a>
          </div>
        </div>
        {/* Features section */}
        <div className="py-16">
          <div className="mx-auto lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
                Features
              </h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl lg:text-balance">
                Core Mutual Fund Solutions
              </p>
              <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
                Power your Distribution platform with proven APIs for
                Onboarding, Transactions, and Reporting from Fintech Primitives.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
              <div className="mx-auto">
                {featuresCards.map((section, index) => (
                  <div
                    key={index}
                    className="mx-auto grid max-w-2xl grid-cols-1 my-32 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2"
                  >
                    <div
                      className={`lg:pr-8 lg:pt-4 ${
                        index % 2 !== 0 ? "lg:order-last" : ""
                      }`}
                    >
                      <div className="lg:max-w-lg">
                        <section.icon aria-hidden="true" />

                        <h2 className="text-2xl mt-2 font-semibold text-gray-900 dark:text-indigo-400">
                          {section.title}
                        </h2>

                        <p className="mt-6 text-md text-gray-600 dark:text-gray-300">
                          {section.description}
                        </p>
                        <dl className="max-w-xl text-base/7 text-gray-600 dark:text-gray-300 lg:max-w-none space-y-0">
                          {section.points.map((point, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <svg
                                className="flex-shrink-0 w-6 h-6"
                                width="26"
                                height="25"
                                viewBox="0 0 29 29"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.41716 14.2687L12.9172 17.7687L19.9172 10.7687M26.3338 14.2687C26.3338 20.712 21.1105 25.9354 14.6672 25.9354C8.22383 25.9354 3.00049 20.712 3.00049 14.2687C3.00049 7.8254 8.22383 2.60205 14.6672 2.60205C21.1105 2.60205 26.3338 7.8254 26.3338 14.2687Z"
                                  stroke="#4E45DD"
                                  strokeWidth="2.33333"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>

                              <p className="text-sm">{point}</p>
                            </div>
                          ))}
                        </dl>
                      </div>
                    </div>
                    <div className="my-auto">
                      <img
                        alt={`${section.title} - Light`}
                        src={section.srcLight}
                        className={`shadow-2xl rounded-2xl dark:hidden ${
                          index === 0 && "ring-2 ring-neutral-200"
                        }`}
                      />
                      <img
                        alt={`${section.title} - Dark`}
                        src={section.srcDark}
                        className={`shadow-2xl rounded-2xl hidden dark:block`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-[#4E45DD] px-6 py-3 text-sm font-semibold text-white shadow-md hover:cursor-pointer hover:bg-[#4E45DD] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-white"
            >
              Get Quote
            </a>
          </div>
        </div>

        {/* Why choose us section */}
        <div className="py-16">
          <div className="mx-auto">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
                Why choose us?
              </h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl lg:text-balance">
                Why work with us?
              </p>
              <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
                With over 8 years of experience in IT products and services
                across continents, we understand that every need is unique, and
                quality is paramount. We place the end user at the heart of
                every solution.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
              <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-4 mt-8 xl:mt-12 md:grid-cols-2 xl:grid-cols-4">
                  {whyChooseUsCards.map((component, index) => (
                    <div
                      key={index}
                      className="flex flex-col px-6 py-4 space-y-4 bg-gray-100 rounded-xl dark:bg-gray-800"
                    >
                      <div className="flex-shrink-0 flex">
                        <component.icon aria-hidden="true" />
                      </div>

                      <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white min-h-[48px]">
                        {component.title}
                      </h1>

                      <p className="text-gray-500 dark:text-gray-300 min-h-[64px]">
                        {component.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-[#4E45DD] px-6 py-3 text-sm font-semibold text-white shadow-md hover:cursor-pointer hover:bg-[#4E45DD] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-white"
            >
              Get Quote
            </a>
          </div>
        </div>
        {/* FAQ Section */}
        <div className="py-16">
          <h2 className="text-4xl font-semibold tracking-tight text-center text-gray-900 dark:text-gray-50 sm:text-5xl">
            Frequently asked questions
          </h2>
          <p className="mt-6 text-md text-gray-600 dark:text-gray-300 text-center">
            Everything you need to know about the product and billing.
          </p>
          <div className="mx-auto max-w-4xl divide-y divide-gray-900/10 dark:divide-gray-100">
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10 dark:divide-gray-100">
              {faqQuestions.map((faq) => (
                <Disclosure key={faq.question} as="div" className="pt-6">
                  <dt>
                    <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900 dark:text-gray-50">
                      <span className="text-base/7 font-semibold">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        <PlusIcon
                          aria-hidden="true"
                          className="size-6 group-data-[open]:hidden"
                        />
                        <MinusIcon
                          aria-hidden="true"
                          className="size-6 [.group:not([data-open])_&]:hidden"
                        />
                      </span>
                    </DisclosureButton>
                  </dt>
                  <DisclosurePanel as="dd" className="mt-2 pr-12">
                    <p className="text-base/7 text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
        {/* Have questions section */}
        <div className="py-16">
          <div className="relative -mx-4 overflow-hidden bg-indigo-100 px-4 py-20 sm:-mx-6 sm:px-6 md:mx-0 rounded-3xl md:px-16">
            <div>
              <p className="font-display text-center text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
                Still have questions ?
              </p>
              <p className="mt-4 text-center text-lg tracking-tight text-blue-900">
                Can’t find the answer you’re looking for? Please chat to our
                friendly team.
              </p>
              <div className="mt-10 flex justify-center items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-[#4E45DD] px-6 py-3 text-sm font-semibold text-white shadow-md hover:cursor-pointer hover:bg-[#4E45DD] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-white"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export default MfStack;
