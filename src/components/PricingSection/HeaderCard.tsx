import React from "react";
import { Container } from "../studio/components/Container";
import Tag from "./Tag";

type Props = {
  title: string;
  description: string;
  price: string;
  tag?: string;
};

const Header = ({ title, description, price, tag }: Props) => {
  return (
    <div className="p-8 w-full border-b border-slate-200 dark:border-neutral-700">
      <div className="flex justify-between flex-wrap gap-2">
        <div className="flex flex-col items-start gap-1 min-w-60">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-2xl text-gray-900 dark:text-gray-50 font-[Inter]">
              {title}
            </span>
            <Tag content={tag} />
          </div>
          <span className="font-normal text-sm text-gray-600 dark:text-gray-400 font-[Inter]">
            {description}
          </span>
        </div>
        <div className="PriceDiv flex items-center gap-[2px]">
          <div className="flex items-center gap-1 ">
            <span className="text-gray-900 dark:text-gray-50 text-3xl font-medium tracking-[-0.72px]">
              $
            </span>
            <span className="text-gray-900 dark:text-gray-50 font-inter text-4xl font-semibold tracking-[-0.96px]">
              {price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
