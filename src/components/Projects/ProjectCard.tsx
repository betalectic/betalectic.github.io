"use client";
import { cn } from "../../lib/utils";
import Link from "@docusaurus/Link";
import { image } from "framer-motion/client";
import { ArrowRight } from "lucide-react";

type companyDetailsProps = {
  logo_url: string;
  logo_width?: string;
  company_name: string;
  details: string;
};
type featureDetailsProps = {
  title: string;
  features: string[];
};
type Props = {
  company_details: companyDetailsProps;
  feature_details: featureDetailsProps;
  image_link: string;
  live_link?: string;
  blog_link?: string;
  image_classes?: string;
  [key: string]: any;
};

export default function ProjectCard({
  company_details,
  feature_details,
  image_link,
  image_classes,
  live_link,
  blog_link,
  ...props
}: Props) {
  const isMFStack = props.showCustom;

  return (
    <div
      className={cn(
        "relative bg-white dark:bg-neutral-800 p-12 rounded-3xl w-full bg-cover bg-no-repeat",
        isMFStack ? "p-4" : ""
      )}
    >
      {isMFStack ? (
        <div className="relative w-full h-full">
          {/* Mobile image */}
          <img
            className="block lg:hidden w-full h-full object-cover"
            src={props.mobile_image}
            alt={company_details.company_name}
          />

          {/* Desktop image */}
          <img
            className="hidden lg:block w-full h-full object-cover"
            src={props.web_image}
            alt={company_details.company_name}
          />
        </div>
      ) : (
        <div className={cn("container mx-auto", isMFStack ? "opacity-0" : "")}>
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2 z-10">
              <span className=" text-3xl lg:text-4xl flex text-left font-bold dark:text-white">
                {company_details.company_name}
              </span>
              <div className="py-2 flex flex-col ">
                <img
                  src={company_details.logo_url}
                  className="max-w-32"
                  alt=""
                  style={
                    company_details.logo_width
                      ? { maxWidth: company_details.logo_width }
                      : {}
                  }
                />
                <span className="text-gray-400  text-sm flex text-left">
                  {company_details.details}
                </span>
              </div>
              <div className="lg:max-w-lg flex flex-col items-start">
                <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl text-left">
                  {feature_details.title}
                </h1>

                <div className="space-y-3 py-3">
                  {feature_details.features?.map((feature, index) => {
                    return (
                      <p
                        key={`Projects_${company_details.company_name}_${index}`}
                        className="m-0 text-gray-500 dark:text-gray-400 text-left"
                      >
                        {feature}
                      </p>
                    );
                  })}
                </div>

                <div className="flex items-center space-x-2">
                  <Link className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white transition-colors duration-300 transform bg-indigo-600 rounded-lg lg:w-auto  focus:outline-none">
                    Visit Live
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                className={cn("w-full lg:max-w-3xl", image_classes)}
                width={400}
                height={400}
                src={image_link}
                alt={`${company_details.company_name}`}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
