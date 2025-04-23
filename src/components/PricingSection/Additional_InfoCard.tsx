import React from "react";

type Props = {
  title: string;
  info: string;
};

const Additional_Info = ({ title, info }: Props) => {
  return (
    <div className="p-8 flex flex-col items-start gap-6 border-b border-slate-200 dark:border-neutral-700">
      <span className="text-gray-900  dark:text-gray-50 font-inter text-xl font-semibold leading-6">
        {title}
      </span>
      <span className="text-gray-600 dark:text-gray-400 font-inter text-base font-normal leading-6">
        {info}
      </span>
    </div>
  );
};

export default Additional_Info;
