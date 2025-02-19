import { useState } from "react";
import { motion } from "framer-motion";

type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div
          key={index}
          className={`${
            index !== items.length - 1
              ? "border-b border-gray-300 dark:border-neutral-700"
              : ""
          } ${
            index === 0 ? "pb-6" : "py-6"
          } w-full flex justify-between items-start gap-6`}
        >
          <div className="flex flex-col items-start gap-2 w-full">
            <button
              className="w-full text-left"
              onClick={() => toggleAccordion(index)}
            >
              <div className="hover:text-gray-700 transition text-gray-900 dark:text-gray-50 font-inter text-lg font-medium leading-7">
                {item.title}
              </div>
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openIndex === index ? "auto" : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="text-gray-600 dark:text-gray-400 font-inter text-base font-normal leading-6">
                {item.content}
              </div>
            </motion.div>
          </div>
          <div
            className="mt-1 cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d={
                  openIndex === index
                    ? "M8 12.079H16M22 12.079C22 17.6018 17.5228 22.079 12 22.079C6.47715 22.079 2 17.6018 2 12.079C2 6.55613 6.47715 2.07898 12 2.07898C17.5228 2.07898 22 6.55613 22 12.079Z"
                    : "M12 8.07898V16.079M8 12.079H16M22 12.079C22 17.6018 17.5228 22.079 12 22.079C6.47715 22.079 2 17.6018 2 12.079C2 6.55613 6.47715 2.07898 12 2.07898C17.5228 2.07898 22 6.55613 22 12.079Z"
                }
                stroke="#98A2B3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
