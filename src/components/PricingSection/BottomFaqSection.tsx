import React from "react";
import Accordion from "../studio/components/Accordion";

type Props = {};

const faqs = [
  {
    title:
      "What if my requirements are not included in the above list?",
    content:
      "The features listed above serve as a baseline for estimating cost. However, we understand that every product is unique, and your MVP may have different requirements. If the listed features or pages don’t align with your needs, we’ll replace them with your actual requirements—ensuring the scope stays relevant to your vision while keeping the quoted cost unchanged.",
  },
  {
    title: "What if one or more core features of the product/MVP demands significant effort?",
    content:
      "We will assess your core features and functionalities and provide a detailed estimate of the effort and cost involved. While we strive to stay within the originally quoted price, if a feature requires significantly more effort, we’ll share revised estimates with you well in advance.",
  },

  {
    title: "What are the project timelines?",
    content:
      "We aim to deliver in weeks or even days—not months. For mobile and web apps, we’ll share detailed timelines after gathering your requirements and completing domain modeling. For website custom-design and development, we usually deliver within 2 weeks. Choosing an existing design template for a website can help reduce both timelines and costs.",
  },

];
const BottomFaqSection = (props: Props) => {
  return (
    <div className="flex flex-col py-8 lg:px-8 ml-1 mobile:ml-2 max-w-7xl items-center gap-9 self-stretch">
      <div className="flex flex-col items-center gap-0">
        <span className="text-gray-900 dark:text-gray-50 text-center font-inter text-4xl font-semibold leading-[44px] tracking-[-0.72px] hidden mobile:block">
          Frequently asked questions
        </span>
        <span className="text-gray-900 dark:text-gray-50 text-center font-inter text-4xl font-semibold leading-[44px] tracking-[-0.72px] mobile:hidden">
          FAQs
        </span>
        <span className="text-gray-600 dark:text-gray-400 text-center font-inter text-l font-normal leading-[30px]">
          Everything you need to know about the product development and billing.
        </span>
      </div>
      {/* <div className=""> */}
      <div className="max-w-4xl">
        <Accordion items={faqs} />
      </div>
    </div>
  );
};

export default BottomFaqSection;
