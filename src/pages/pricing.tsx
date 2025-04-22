import Layout from "@theme/Layout";
import React from "react";
import { Container } from "../components/studio/components/Container";
import PricingSection from "../components/PricingSection";
import Header from "../components/PricingSection/HeaderCard";
import { title } from "framer-motion/client";
import Features from "../components/PricingSection/FeaturesCard";
import Additional_Info from "../components/PricingSection/Additional_InfoCard";
import FaqCard from "../components/PricingSection/FaqCard";
import FooterCard from "../components/PricingSection/FooterCard";
import BottomFaqSection from "../components/PricingSection/BottomFaqSection";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import { FadeIn } from "../components/studio/components/FadeIn";

const PricingData = [
  {
    title: "Website Deign & Development",
    description: "Design, Development & Deployment of Website",
    price: "5000",

    features: {
      title: "Deliverables",
      featureList: [
        "Website Design - UI/UX (Figma designs) (2x Rounds of Revisions)",
        "Hero section - (3 Iterations)",
        "Landing Page",
        "Completely done on CMS - Sanity/Strapi cloud CMS integration (Manage website content)",
        "Products/ Services/ Offerings/ Info Page (based on your offering)",
        "Pricing Page (If you do not have a pricing page, it will be replaced with another page of your choice)",
        "Contact Us Page",
        "Terms & Conditions/Privacy Policy/Refunds & cancellations - If applicable to your business (3 pages only)",
        "FAQs page; About Us page; Team page - (3 pages only)",
        "News letter subscription (SaaS solution of your choice)",
        "Infra setup & Deployments (UAT & Prod.)",
        "App will be hosted in vercel",
        "SEO & Site map generation",
        "Blogs: Blog home + Blog detail page",
        "Built on NextJS",
      ],
    },
    additional_info: {
      title: "Additional Info",
      info: "For any additional custom features or pages beyond the scope mentioned above, development will be billed at USD 50 per hour. Only actual development hours are charged, and we will provide an estimate in advance before starting any work.",
    },
    
    StickyContent: {
      title: "Plans that fit your scale",
      details:
        "Simple, transparent pricing that grows with you. Try any plan free for 30 days.",
      image_url: "/img/pricing/TableGirl.svg",
    },
  },
  {
    title: "Mobile App Development",
    description: "Design, Development & Deployment of Mobile Applications",
    price: "15,000",
    tag: "Popular",
    features: {
      title: "Deliverables",
      featureList: [
        "Low-fi wireframes to UI - Figma designs - 2x Rounds of Revisions",
        "PRD",
        "Data modelling - 3 iterations",
        "Auth - Email/SMS/Social/SSO",
        "Dashboard - Home screen",
        "Master lists (CRUD)",
        "Core feature development (your Product USP)",
        "Explore Data/search, sort & filters",
        "CRUD forms (based on data model)",
        "Account settings, Profile, Privacy & Terms, Delete account",
        "Notifications - Email/SMS/Push",
        "III party integrations – e.g., payment gateways, Algolia, Typesense, Firebase, etc. (This pricing includes up to 3 third-party integrations.)",
        "Infra setup & Deployments (UAT & Production)",
        "Publish Apps in both app store (iOS) & play store(Android)",
        "Tech Stack: ReactNative, NodeJS, Postgres SQL",
        "You own the code from day 1 (Pushed to your Github)",
        "Also includes static website (5-7 pages)",
      ],
    },
    additional_info: {
      title: "Additional Info",
      info: "We aim to include all your product features within the quoted cost. However, if you require any additional custom mobile app features beyond those listed above, development will be charged at USD 50 per hour. We’ll begin by gathering your requirements, conducting domain modeling, and preparing a Product Requirement Document (PRD), followed by a detailed estimate before starting development",
    },
    StickyContent: {
      image_url: "/img/pricing/GearPc.svg",
    },
  },
  {
    title: "Web App Development",
    description: "Design, Development & Deployment of Web Applications",
    price: "12,000",
    features: {
      title: "Deliverables",
      featureList: [
        "Low-fi wireframes to Hi-Fi - UI - Figma screens - 2x Rounds of Revisions",
        "PRD",
        "Domain modelling & data model - 3 iterations",
        "User Authentication - Email/SMS/Social/SSO",
        "Web App - Dashboard Homepage - Lists/Graphs/Tables etc.,",
        "Master lists (CRUD)",
        "Core feature development (your Product USP)",
        "Explore Data/search, sort & filters",
        "CRUD forms (based on data model)",
        "Notifications - Email/SMS/Web",
        "III party integrations - Eg: Payment gateway integration; Algolia/Typesense/Firebase etc (Only 2  III-party integrations are covered at this price)",
        "Infra setup & Deployments (UAT & Production)",
        "Hosted on modern cloud providers of your choice like Vercel, Netlify etc.,",
        "Tech Stack: ReactJS, NodeJS or Laravel, Postgres SQL",
        "You own the code from day 1 (Pushed to your Github)",
        "Includes static website (5-7 pages), User Web App, Admin Web app",
      ],
    },
    additional_info: {
      title: "Additional Info",
      info: "We aim to include all your product features within the quoted cost. However, if you require any additional custom web app features beyond those listed above, development will be charged at USD 50 per hour. We’ll begin by gathering your requirements, conducting domain modeling, and preparing a Product Requirement Document (PRD), followed by a detailed estimate before starting development",
    },
    StickyContent: {
      image_url: "/img/pricing/FinanceApp.svg",
    },
  },
];

const Pricing = () => {
  let shouldReduceMotion = useReducedMotion();

  return (
    <Layout
      title="Betalectic: We build Web Apps, Mobile Apps, UI, UX designs, APIs, Generative AI solutions & DevOps"
      description="Betalectic is a custom software development company specialising in building scalable web and mobile applications, robust APIs, and generative AI solutions. With expertise in DevOps, secure deployments, and scalable tech architecture, we support businesses across industries to bring their digital products to market faster"
    >
      <MotionConfig
        transition={shouldReduceMotion ? { duration: 0 } : undefined}
      >
        <motion.div className="w-full flex-auto">
          <Container className="mt-12 lg:mt-28">
            <div className=" flex flex-col gap-y-16">
              <div className="relative">
                <div className="lg:sticky mt-16 lg:mt-0 z-40 top-0 w-full mobile:ml-2">
                  <div className="lg:w-[33.33%] lg:mb-[-15rem] lg2:mb-[-14rem] lg:pt-8 lg:pb-6 bg-white dark:bg-neutral-950">
                    <h1 className="text-[#101828] dark:text-gray-100 font-inter text-5xl font-semibold leading-[45px] tracking-[-0.96px]">
                      Plans that fit your scale
                    </h1>

                    <span className="text-[#475467] dark:text-gray-300 font-inter text-xl font-normal leading-[30px]">
                      Simple, transparent pricing that grows with you.
                    </span>
                  </div>
                </div>

                {/* lower */}
                <div className="flex flex-col gap-y-8 items-start z-20">
                  {PricingData.map((item, index) => {
                    return (
                      <FadeIn key={item.title} className="w-full ">
                        <PricingSection
                          stickyContent={item.StickyContent}
                          index={index}
                        >
                          <Header
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            tag={item.tag}
                          />
                          <Features
                            title={item.features.title}
                            features={item.features.featureList}
                          />
                          <Additional_Info
                            title={item.additional_info.title}
                            info={item.additional_info.info}
                          />
                          <FaqCard faqs={item.faqs} />
                          <FooterCard />
                        </PricingSection>
                      </FadeIn>
                    );
                  })}
                </div>
              </div>

              <FadeIn className="w-full">
                <BottomFaqSection />
              </FadeIn>
            </div>
          </Container>
        </motion.div>
      </MotionConfig>
    </Layout>
  );
};

export default Pricing;
