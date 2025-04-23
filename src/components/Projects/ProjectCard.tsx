"use client";
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
};

export default function ProjectCard({
  company_details,
  feature_details,
  image_link,
  live_link,
  blog_link,
}: Props) {
  return (
    <div className="bg-white dark:bg-neutral-800 p-12 rounded-3xl">
      <div className="container mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="py-8 flex flex-col ">
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
              <span className="text-gray-400 px-2 text-sm flex text-left">
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
                <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white transition-colors duration-300 transform bg-indigo-600 rounded-lg lg:w-auto  focus:outline-none ">
                  Visit Live
                </button>
                <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-gray-700 dark:text-gray-300 transition-colors duration-300 transform  rounded-lg lg:w-auto  focus:outline-none flex items-center whitespace-nowrap">
                  Read more <ArrowRight className="w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              className="w-full h-full lg:max-w-3xl"
              src={image_link}
              alt="Catalogue-pana.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
