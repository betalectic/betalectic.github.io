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

const PricingData = [
  {
    title: "Website Deign & Development",
    description: "Advanced features and reporting",
    price: "5000",

    features: {
      title: "Deliverables",
      featureList: [
        "Website Design - UI/UX (Figma designs) (2x Rounds of Revisions)",
        "Hero section - (3 Iterations)",
        "Landing Page",
        "Products/ Services/ Offerings/ Info Page (based on your offering)",
        "Pricing Page (If you do not have a pricing page, it will be replaced with another page of your choice)",
        "This is dummy text in line no sixth ",
      ],
    },
    additional_info: {
      title: "Additional Info",
      info: "Other additional custom features/Pages @ USD 50 per hour (Only development hours are billed)",
    },
    faqs: [
      {
        title:
          "What if my website requirements are not included in the pages listed above?",
        content:
          "The features listed above serve as a baseline for estimating effort and pricing. However, we understand that every product is unique, and your MVP may have different requirements. If the listed features/pages do not align with your product’s needs, we will replace them with your actual offerings, ensuring the scope remains relevant to your vision/MVP.",
      },
      {
        title: "What if we need more pages to be developed for our website",
        content:
          "The features listed above serve as a baseline for estimating effort and pricing. ",
      },
    ],
    StickyContent: {
      title: "Plans that fit your scale",
      details:
        "Simple, transparent pricing that grows with you. Try any plan free for 30 days.",
      image_url: "/img/pricing_web_design.svg",
    },
  },
  {
    title: "Mobile App Development",
    description: "Advanced features and reporting",
    price: "15,000",
    tag: "Popular",
    features: {
      title: "Deliverables",
      featureList: [
        "this is first feature",
        "this is second feature",
        "this is third feature",
        "this is fourth feature",
      ],
    },
    faqs: [
      {
        title:
          "What if my website requirements are not included in the pages listed above?",
        content:
          "The features listed above serve as a baseline for estimating effort and pricing. However, we understand that every product is unique, and your MVP may have different requirements. If the listed features/pages do not align with your product’s needs, we will replace them with your actual offerings, ensuring the scope remains relevant to your vision/MVP.",
      },
      {
        title: "What if we need more pages to be developed for our website",
        content:
          "The features listed above serve as a baseline for estimating effort and pricing. ",
      },
    ],
    additional_info: {
      title: "Additional Info",
      info: "Other additional custom features/Pages @ USD 50 per hour (Only development hours are billed)",
    },
    StickyContent: {
      image_url: "/img/pricing_mobile_app.svg",
    },
  },
  {
    title: "Web App Development",
    description: "Advanced features and reporting",
    price: "10,000",
    features: {
      title: "Deliverables",
      featureList: [
        "Low-fi wireframes to HI-Fi - UI - Figma screens - (2x Rounds of Revisions)",
        "PRD",
        "tDomain modelling & data model - (3 iteration)",
        "Auth - Email/SMS/Social/SSO",
        "Web Dashboard - Lists/Graphs/Tablets etc.,",
      ],
    },
    additional_info: {
      title: "Additional Info",
      info: "Other additional custom features/Pages @ USD 50 per hour (Only development hours are billed)",
    },
    faqs: [
      {
        title:
          "What if my website requirements are not included in the pages listed above?",
        content:
          "The features listed above serve as a baseline for estimating effort and pricing. However, we understand that every product is unique, and your MVP may have different requirements. If the listed features/pages do not align with your product’s needs, we will replace them with your actual offerings, ensuring the scope remains relevant to your vision/MVP.",
      },
      {
        title: "What if we need more pages to be developed for our website",
        content:
          "The features listed above serve as a baseline for estimating effort and pricing. ",
      },
      {
        title: "What if we need more pages to be developed for our website",
        content:
          "The features listed above serve as a baseline for estimating effort and pricing. ",
      },
    ],
    StickyContent: {
      image_url: "/img/pricing_web_app.svg",
    },
  },
];

const Pricing = () => {
  return (
    <Layout
      title="Betalectic: We build Web Apps, Mobile Apps, UI, UX designs, APIs, Generative AI solutions & DevOps"
      description="Betalectic is a custom software development company specialising in building scalable web and mobile applications, robust APIs, and generative AI solutions. With expertise in DevOps, secure deployments, and scalable tech architecture, we support businesses across industries to bring their digital products to market faster"
    >
      <main className="w-full flex-auto">
        <Container className="mt-12 lg:mt-28">
          <div className="gap-20 flex flex-col">
            <div className="flex flex-col gap-y-8 items-start">
              {PricingData.map((item) => {
                return (
                  <div key={item.title} className=" ">
                    <PricingSection stickyContent={item.StickyContent}>
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
                  </div>
                );
              })}
            </div>

            <BottomFaqSection />
          </div>
        </Container>
      </main>
    </Layout>
  );
};

export default Pricing;
