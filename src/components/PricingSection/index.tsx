import React from "react";
type StickyContent = {
  title?: string;
  details?: string;
  image_url: string;
};
type Props = {
  children: React.ReactNode;
  stickyContent: StickyContent;
};
// const PricingSection = ({ children }) => {
//   return (
//     <div className="flex flex-col lg:flex-row py-8 mobile:ml-2 gap-6">
//       {/* Main Content */}
//       <div className="right flex flex-col items-start rounded-2xl border border-slate-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 w-full lg:w-[66.66%] shadow-lg">
//         {children}
//       </div>
//     </div>
//   );
// };
// export default PricingSection;

const PricingSection = ({ children, stickyContent, index = 0 }) => {
  return (
    <div className="flex flex-col lg:flex-row pt-0 lg:py-8 mobile:ml-2 gap-6">
      {/* Sidebar Container */}
      <div className="relative left w-full lg:w-[33.33%]">
        <div className="sticky top-[15rem] hidden lg:block">
          <div
            className={` flex flex-col items-start gap-4 ${
              index == 0 && "mt-[12rem]"
            }`}
          >
            {/* static content starts */}
            {/* {stickyContent.title && (
              <h1 className="text-[#101828] dark:text-gray-100 font-inter text-5xl font-semibold leading-[45px] tracking-[-0.96px]">
                {stickyContent.title}
              </h1>
            )}
            {stickyContent.details && (
              <span className="text-[#475467] dark:text-gray-300 font-inter text-xl font-normal leading-[30px]">
                {stickyContent.details}
              </span>
            )} */}
            {/* static content ends */}
            <img
              className="max-w-80 hidden lg:block"
              src={stickyContent.image_url}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="right flex flex-col items-start rounded-2xl border border-slate-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 w-full lg:w-[66.66%] shadow-lg">
        {children}
      </div>
    </div>
  );
};

export default PricingSection;
