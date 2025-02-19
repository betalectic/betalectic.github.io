import React, { useState } from "react";

type Props = {
  title: string;
  features: string[];
};

const Features = ({ title, features }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const maxItems = 5;
  const shouldShowButton = features.length > maxItems;

  return (
    <div className="p-8 flex flex-col items-center self-stretch gap-8 border-b border-slate-200 dark:border-neutral-700">
      <div className="text-gray-900 dark:text-gray-50 font-inter text-xl font-semibold leading-6 w-full">
        {title}
      </div>

      <ul className="list-none p-0 m-0 flex flex-col items-start gap-4 self-stretch">
        {(expanded ? features : features.slice(0, maxItems)).map(
          (feature, index) => (
            <li
              className="flex items-start min-w-60 gap-3"
              key={`price_feature_${index}`}
            >
              <span className="text-green-200 dark:text-green-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M0 12.0789C0 5.45153 5.37258 0.078949 12 0.078949C18.6274 0.078949 24 5.45153 24 12.0789C24 18.7064 18.6274 24.0789 12 24.0789C5.37258 24.0789 0 18.7064 0 12.0789Z"
                    fill="#DCFAE6"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.0965 7.46899L9.9365 14.379L8.0365 12.349C7.6865 12.019 7.1365 11.999 6.7365 12.279C6.3465 12.569 6.2365 13.079 6.4765 13.489L8.7265 17.149C8.9465 17.489 9.3265 17.699 9.7565 17.699C10.1665 17.699 10.5565 17.489 10.7765 17.149C11.1365 16.679 18.0065 8.48899 18.0065 8.48899C18.9065 7.56899 17.8165 6.75899 17.0965 7.45899V7.46899Z"
                    fill="#079455"
                  />
                </svg>
              </span>
              <span className="text-gray-600 dark:text-gray-400 font-[Inter] text-sm">
                {feature}
              </span>
            </li>
          )
        )}
      </ul>

      {shouldShowButton && (
        <button
          className="text-[#3A33BB] text-sm font-semibold mt-2 flex items-center gap-[6px]"
          onClick={() => setExpanded(!expanded)}
        >
          <span> {expanded ? "View less" : "View more"}</span>
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              className={`transition-transform duration-200 ${
                expanded ? "rotate-180" : "rotate-0"
              }`}
            >
              <path
                d="M5 7.57898L10 12.579L15 7.57898"
                stroke="#3A33BB"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
};

export default Features;
