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
import GalleryWithTags from "../components/mfstack/GalleryWithTags";
import GetQuoteCTA from "../components/mfstack/GetQuoteCTA";
import SectionHeader from "../components/mfstack/SectionHeader";

function MfStack() {
  const howWeSolveCards = [
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
      question: "What Mutual fund Transaction Providers do you Support?",
      answer:
        "Our Transaction production is powered by Fintech Primitive APIs.",
    },
    {
      question: "What product do I get in 8 weeks?",
      answer:
        "In 8 weeks we provide our standard templated app, which comprises of features like Investor Onboarding, Different types of transactions and Standard Reports. ",
    },
    {
      question: "What kind of transactions do you support?",
      answer:
        "We support the following kinds of transactions: One time purchase, SIP, Switch, SWP, STP and Redemption",
    },
    {
      question: "What features do you support for SIP investments?",
      answer:
        "We support Pause, Cancel and Resume of SIP. Other than this we also support Step up and Step down SIPs",
    },
    {
      question: "Do you build solutions for customized MF Product?",
      answer:
        "Yes, we can build a custom solution for your needs. You can setup a call with our team which will understand your requirements, and layout a plan for your custom application. We take care of the look and feel of your app and build you an enterprise grade application which can help you scale your business.",
    },
    {
      question: "How to migrate my current investors to FP?",
      answer: "",
    },
    {
      question:
        "If I migrate to FP, do I have to create new mandates for my investors?",
      answer: "",
    },
    {
      question: "How to migrate the existing folios to FP?",
      answer: "",
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
    // {
    //   src: require("../images/mfstack/cybrilla.png").default,
    //   alt: "Cybrilla",
    // },
    {
      src: require("../images/mfstack/cams.png").default,
      alt: "Cams",
    },
  ];

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
                <p className="mt-4 px-4 py-2 text-center shadow-custom-inset max-w-fit mx-auto text-pretty text-lg rounded-lg font-medium text-gray-50 bg-[#1B1677] sm:text-xl/8">
                  Empowered by Fintech Primitive APIs
                </p>
                <p className="mt-8 px-12 text-pretty text-lg font-medium text-[#CCC9FF] sm:text-xl/8">
                  Effortlessly build Mutual Fund Web & Mobile Applications for
                  your investors in just 8 weeks
                </p>
                <GetQuoteCTA buttonText={"Get Quote"} buttonLink={"#"} />
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
            <div className="relative block md:hidden overflow-hidden w-full mt-6">
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

            <div className="hidden md:flex justify-around mt-6 md:gap-x-4 lg:gap-x-16">
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

        <div className="flex flex-col gap-y-24 my-24">
          {/* For whom and how section */}
          <div className="mx-auto lg:px-8 flex flex-col gap-y-12">
            <SectionHeader
              sectionTag={"For whom and how?"}
              sectionTitle={"Tailor made solutions for your business goals"}
              sectionDescription={
                "Flexible mutual fund solutions that grow with your business, regardless of size or scale."
              }
            />

            <GalleryWithTags />
          </div>
          {/* How we solve section */}
          <div className="mx-auto lg:px-8">
            <SectionHeader
              sectionTag={"How we solve?"}
              sectionTitle={"Products"}
              sectionDescription={
                "From SDKs to full-stack solutions, choose the right building blocks for your platform."
              }
            />
            <div className="mt-8">
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
                    <dd className="flex flex-auto flex-col text-base/7 text-gray-600 dark:text-gray-300">
                      <p className="">{feature.description}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <GetQuoteCTA buttonText={"Get Quote"} buttonLink={"#"} />
          </div>

          {/* Features section */}
          <div>
            <div className="mx-auto lg:px-8 flex flex-col gap-y-12">
              <SectionHeader
                sectionTag={"Features"}
                sectionTitle={"Core Mutual Fund Solutions"}
                sectionDescription={
                  "Power your Distribution platform with proven APIs for Onboarding, Transactions, and Reporting from Fintech Primitives."
                }
              />
              <div className="mx-auto flex flex-col gap-y-12">
                {featuresCards.map((section, index) => (
                  <div
                    key={index}
                    className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2"
                  >
                    <div
                      className={`lg:pr-8 ${
                        index % 2 !== 0 ? "lg:order-last" : ""
                      }`}
                    >
                      <div className="lg:max-w-lg">
                        <section.icon aria-hidden="true" />

                        <h2 className="text-2xl mt-2 font-semibold text-gray-900 dark:text-indigo-400">
                          {section.title}
                        </h2>

                        <p className="text-md text-gray-600 dark:text-gray-300">
                          {section.description}
                        </p>

                        <dl className="mt-8 max-w-xl text-base/7 text-gray-600 dark:text-gray-300 lg:max-w-none space-y-0">
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

                              <p className="text-base">{point}</p>
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
            <GetQuoteCTA buttonText={"Get Quote"} buttonLink={"#"} />
          </div>

          {/* Why choose us section */}

          <div className="mx-auto">
            <SectionHeader
              sectionTag={"Why choose us?"}
              sectionTitle={"Why work with us?"}
              sectionDescription={
                " With over 8 years of experience in IT products and services across continents, we understand that every need is unique, and quality is paramount. We place the end user at the heart of every solution."
              }
            />
            <div className="mt-16 lg:max-w-none">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
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
            <GetQuoteCTA buttonText={"Get Quote"} buttonLink={"#"} />
          </div>

          {/* FAQ Section */}
          <div className="">
            <h2 className="text-4xl font-semibold tracking-tight text-center text-gray-900 dark:text-gray-50 sm:text-5xl">
              Frequently asked questions
            </h2>
            <p className="mt-6 mb-10 text-md text-gray-600 dark:text-gray-300 text-center">
              Everything you need to know about the product and billing.
            </p>
            <div className="mx-auto max-w-4xl">
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
          <div className="relative -mx-4 overflow-hidden bg-indigo-100 px-4 py-20 sm:-mx-6 sm:px-6 md:mx-0 rounded-3xl md:px-16">
            <div>
              <p className="font-display text-center text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
                Still have questions ?
              </p>
              <p className="mt-4 text-center text-lg tracking-tight text-blue-900">
                Can’t find the answer you’re looking for? Please chat to our
                friendly team.
              </p>
              <GetQuoteCTA buttonText={"Get in touch"} buttonLink={"#"} />
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export default MfStack;
