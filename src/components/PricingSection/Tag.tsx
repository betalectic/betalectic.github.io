import React from "react";

type Props = {
  content: string;
};

const Tag = ({ content }: Props) => {
  if (!content || content.length === 0) return null;

  return (
    <div className="px-2   flex justify-center items-center rounded-full border border-[#CCC9FF] bg-[#E9E8FF]">
      <span className="text-[#3A33BB] text-center font-inter text-xs font-medium leading-5">
        {content}
      </span>
    </div>
  );
};

export default Tag;
