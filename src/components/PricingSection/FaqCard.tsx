import React from "react";
import Accordion from "../studio/components/Accordion";

type faq = {
  title: string;
  content: string;
};

type Props = {
  faqs: faq[];
};

const FaqCard = ({ faqs }: Props) => {
  if (!faqs || faqs.length === 0) return null;
  return (
    <div className="p-8 pb-6 gap-8 flex flex-col items-start self-stretch border-b border-slate-200 dark:border-neutral-700">
      <span className="text-gray-900 dark:text-gray-50 font-inter text-xl font-semibold leading-6">
        Frequently asked questions
      </span>
      <div>
        <Accordion items={faqs} />
      </div>
    </div>
  );
};

export default FaqCard;
