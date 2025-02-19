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
const PricingSection = ({ children, stickyContent }) => {
  return (
    <div className="flex flex-col lg:flex-row  p-8 gap-6">
      {/* Sidebar Container */}
      <div className="relative left w-full lg:w-[33.33%]">
        <div className="flex flex-col items-start gap-4">
          {stickyContent.title && (
            <h1 className="text-[#101828] dark:text-gray-100 font-inter text-5xl font-semibold leading-[45px] tracking-[-0.96px]">
              {stickyContent.title}
            </h1>
          )}
          {stickyContent.details && (
            <span className="text-[#475467] dark:text-gray-300 font-inter text-xl font-normal leading-[30px]">
              {stickyContent.details}
            </span>
          )}
        </div>
        <div className="sticky top-8 ">
          <div className=" p-4 flex flex-col items-start gap-4">
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
            <img
              className="max-w-60 hidden lg:block"
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
// import React from "react";
// import { Container } from "../studio/components/Container";
// import Header from "./HeaderCard";

// type Props = {
//   children: React.ReactNode;
// };

// const PricingSection = ({ children }: Props) => {
//   return (

//     <div className="flex flex-col md:flex-row justify-center p-8 gap-6">
//       <div
//         className="left w-full md:w-[40%]"
//         style={{
//           position: "sticky",
//           top: "20px",
//           alignSelf: "flex-start",
//           height: "fit-content",
//         }}
//       >
//         <div className="bg-yellow-400 rounded-xl p-4">
//           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga officia
//           in ducimus? Temporibus quae necessitatibus eius adipisci nemo
//           explicabo veniam debitis, enim iste! Hic, voluptas. Suscipit nihil
//           soluta totam dolore.
//         </div>
//       </div>
//       <div className="right flex flex-col items-start rounded-2xl border border-slate-200 bg-white w-full md:w-[60%] shadow-lg">
//         {children}
//       </div>
//     </div>
//   );
// };

// export default PricingSection;
