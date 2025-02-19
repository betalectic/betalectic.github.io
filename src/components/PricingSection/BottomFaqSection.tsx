import React from "react";
import Accordion from "../studio/components/Accordion";

type Props = {};

const faqs = [
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
];
const BottomFaqSection = (props: Props) => {
  return (
    <div className="flex flex-col p-8 max-w-7xl items-center gap-9 self-stretch">
      <div className="flex flex-col items-center gap-0">
        <h1 className="text-gray-900 dark:text-gray-50 text-center font-inter text-4xl font-semibold leading-[44px] tracking-[-0.72px]">
          Freuently asked questions
        </h1>
        <span className="text-gray-600 dark:text-gray-400 text-center font-inter text-xl font-normal leading-[30px]">
          Everything you need to know about the product and billing.
        </span>
      </div>
      <div className="">
        {/* <div className="max-w-4xl"> */}
        <Accordion items={faqs} />
      </div>
    </div>
  );
};

export default BottomFaqSection;
