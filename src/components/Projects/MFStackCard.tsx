"use client";
import { cn } from "../../lib/utils";
import Link from "@docusaurus/Link";
import { div, image, p } from "framer-motion/client";
import { ArrowRight } from "lucide-react";
import StarListIcon from "./StarListIcon";

export default function MFStackCard() {
  const mf_stack_image1 = require("../../images/mfstack/11.png").default;
  const mf_stack_image2 = require("../../images/mfstack/12.png").default;
  const mf_stack_image3 = require("../../images/mfstack/13.png").default;
  const mf_stack_image4 = require("../../images/mfstack/14.png").default;

  const mf_stack_mobile_image1 = require("../../images/mfstack/15.png").default;
  const mf_stack_mobile_image2 = require("../../images/mfstack/16.png").default;
  const mf_stack_mobile_image3 = require("../../images/mfstack/17.png").default;
  const mf_stack_mobile_image4 = require("../../images/mfstack/18.png").default;

  const cardData = [
    {
      imgLink: mf_stack_image1,
      mobileImgLink: mf_stack_mobile_image1,
      cardHeading: "Paperless Onboarding/ KYC",
      headingWrapperClass: "absolute top-14 left-4 lg:left-8 max-w-[200px]",
      headingClass:
        "lg:font-extrabold font-semibold text-[10px] lg:text-sm mb-1",
      subItems: ["Pan verification", "Aadhar base KYC"],
      subItemsClass: "",
    },
    {
      imgLink: mf_stack_image3,
      mobileImgLink: mf_stack_mobile_image3,
      cardHeading: "Transaction/Explore Fund",
      headingWrapperClass: "absolute top-5 lg:top-auto lg:bottom-8 left-4",
      headingClass:
        "lg:font-extrabold font-semibold text-[10px] lg:text-sm mb-1",
      subItems: ["SIP", "Lump Sum", "Easy Redemption", "Switch/STP"],
      subItemsClass: "",
    },
    {
      imgLink: mf_stack_image2,
      mobileImgLink: mf_stack_mobile_image2,
      cardHeading: "Create mandate",
      headingWrapperClass:
        "absolute right-12 bottom-12 bg-transparent lg:top-5 lg:left-8",
      headingClass:
        "lg:font-extrabold font-semibold text-[10px] lg:text-sm mb-1",
      subItems: ["Add upto 5 banks", "Auto Pay"],
      subItemsClass: "",
    },
    {
      imgLink: mf_stack_image4,
      mobileImgLink: mf_stack_mobile_image4,
      cardHeading: "Reports",
      headingWrapperClass: "absolute bottom-12 right-12 lg:top-28 lg:left-8",
      headingClass:
        "lg:font-extrabold font-semibold text-[10px] lg:text-sm mb-1",
      subItems: ["Capital gain", "Holdings Report", "Transaction Report"],
      subItemsClass: "",
    },
  ];

  return (
    <div className="grid grid-cols-1  lg:grid-cols-4 p-6 h-[850px] max-h-[850px] lg:h-fit rounded-3xl lg:gap-x-4 bg-white">
      {cardData?.map((item, idx) => (
        <div className="relative   lg:max-h-[450px] lg:min-h-[450px]">
          <img
            key={idx}
            src={item?.imgLink}
            alt={`Image ${idx + 1}`}
            className="h-full w-full hidden lg:block"
          />
          <img
            key={idx}
            src={item?.mobileImgLink}
            alt={`Image ${idx + 1}`}
            className="w-full min-h-[190px] max-h-[195px] lg:hidden"
          />
          <div className={item?.headingWrapperClass}>
            <p className={item?.headingClass}>{item?.cardHeading}</p>
            {item?.subItems?.length > 0 &&
              item.subItems.map((listItem) => (
                <div
                  className={` flex items-center space-x-1 lg:space-x-2 ${item?.subItemsClass}`}
                >
                  <StarListIcon />
                  <p className={`m-0 text-[8px] lg:text-xs lg:font-semibold`}>
                    {listItem}
                  </p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
