import Layout from "@theme/Layout";
import React from "react";
import { Container } from "../components/studio/components/Container";
import PricingSection from "../components/PricingSection";
import Header from "../components/PricingSection/header";
import { title } from "framer-motion/client";
import Features from "../components/PricingSection/features";

const PricingData = [
  {
    title: "Website Deign & Development",
    description: "Advanced features and reporting",
    price: "5000",
    features: {
      title: "Deliverable",
      featureList: [
        "Website Design - UI/UX (Figma designs) (2x Rounds of Revisions)",
        "Hero section - (3 Iterations)",
        "Landing Page",
        "Products/ Services/ Offerings/ Info Page (based on your offering)",
        "Pricing Page (If you do not have a pricing page, it will be replaced with another page of your choice)",
        "This is dummy text in line no sixth ",
      ],
    },
  },
  {
    title: "Mobile App Development",
    description: "Advanced features and reporting",
    price: "15,000",
    features: {
      title: "Deliverable",
      featureList: [
        "this is first feature",
        "this is second feature",
        "this is third feature",
        "this is fourth feature",
      ],
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
          <div className="flex flex-col gap-y-8">
            {PricingData.map((item) => {
              return (
                <>
                  <PricingSection key={item.title}>
                    <Header
                      title={item.title}
                      description={item.description}
                      price={item.price}
                    />
                    <Features
                      title={item.features.title}
                      features={item.features.featureList}
                    />
                  </PricingSection>
                </>
              );
            })}
          </div>
        </Container>
      </main>
    </Layout>
  );
};

export default Pricing;
