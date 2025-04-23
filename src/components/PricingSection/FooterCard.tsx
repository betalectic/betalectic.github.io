import Link from "@docusaurus/Link";
import React from "react";
import { ShimmerButton } from "../magicui/shimmer-button";

type Props = {};

const FooterCard = (props: Props) => {
  return (
    <div className="p-8 w-full">
      <Link to="https://cal.com/manasa-madapu">
        <button className="flex justify-center items-center gap-1.5 px-4 py-3 w-full rounded-lg text-white bg-[#4E45DD] shadow-sm">
          <span className="text-base font-semibold leading-6 ">
            Get started
          </span>
        </button>
      </Link>
    </div>
  );
};

export default FooterCard;
