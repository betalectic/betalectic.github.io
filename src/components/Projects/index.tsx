"use client";
import BrowserOnly from "@docusaurus/BrowserOnly";
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { Container } from "../studio/components/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
import "./styles.css";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import { FadeIn } from "../studio/components/FadeIn";
import { image } from "framer-motion/client";
type Props = {};

const mf_stack_image = require("../../images/mf_stack.png").default;
const collab = require("../../images/collab.png").default;
const auction_bazzar = require("../../images/auction_bazzar.png").default;
const wired_up = require("../../images/wired_up.png").default;
const principal_india = require("../../images/principal_india.png").default;

const data = [
  {
    showCustom: true,
    company_details: {
      logo_url: "https://www.heritagefoods.in/static/images/logo.png",
      logo_width: "",
      details: "Mumbai, India",
      company_name: "MF Stack",
    },
    feature_details: {
      title: " Trusted Marketplace for Property Needs",
      features: [
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. beatae error laborum ab amet sunt recusandae? Reiciendisnatus perspiciatis optio.",
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      ],
    },
    image_link: mf_stack_image,
    bg_image: mf_stack_image,
    image_classes: "lg:absolute object-cover opacity-0",
    live_link: "",
    blog_link: "",
  },
  {
    company_details: {
      logo_url: "https://www.heritagefoods.in/static/images/logo.png",
      logo_width: "",
      details: "Mumbai, India",
      company_name: "Wiredup",
    },
    feature_details: {
      title: " Lorem ipsum dolor sit amet, consectetur ",
      features: [
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. beatae error laborum ab amet sunt recusandae? Reiciendisnatus perspiciatis optio.",
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      ],
    },
    image_link: wired_up,
    image_classes: "lg:absolute bottom-0 right-0 w-[450px]",
    live_link: "",
    blog_link: "",
  },
  {
    company_details: {
      logo_url: "https://www.heritagefoods.in/static/images/logo.png",
      logo_width: "",
      details: "Mumbai, India",
      company_name: "Collab",
    },
    feature_details: {
      title: " This is the header for Some Heading",
      features: [
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. beatae error laborum ab amet sunt recusandae? Reiciendisnatus perspiciatis optio.",
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      ],
    },
    image_link: collab,
    image_classes: "lg:absolute -bottom-4 -right-2 w-[550px]",
    live_link: "",
    blog_link: "",
  },
  {
    company_details: {
      logo_url: "https://www.heritagefoods.in/static/images/logo.png",
      logo_width: "",
      details: "Mumbai, India",
      company_name: "Auction bazaar",
    },
    feature_details: {
      title: " Lorem ipsum dolor sit amet, consectetur ",
      features: [
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. beatae error laborum ab amet sunt recusandae? Reiciendisnatus perspiciatis optio.",
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      ],
    },
    image_link: auction_bazzar,
    image_classes: "lg:absolute bottom-0 right-0 w-[500px]",
    // "https://freepngimg.com/thumb/web_development/3-2-web-development-png-hd.png",
    live_link: "",
    blog_link: "",
  },
  {
    company_details: {
      logo_url: "https://www.heritagefoods.in/static/images/logo.png",
      logo_width: "",
      details: "Mumbai, India",
      company_name: "Principal MF",
    },
    feature_details: {
      title: " Lorem ipsum dolor sit amet, consectetur ",
      features: [
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. beatae error laborum ab amet sunt recusandae? Reiciendisnatus perspiciatis optio.",
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      ],
    },
    image_link: principal_india,
    image_classes: "lg:absolute bottom-0 right-0 w-[500px]",
    live_link: "",
    blog_link: "",
  },
];

const Projects = (props: Props) => {
  let shouldReduceMotion = useReducedMotion();

  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    if (!isMobile) {
      setIsMobile(window.innerWidth < 768);
    }
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-neutral-950 py-40 pb-60 mt-40">
      <MotionConfig
        transition={shouldReduceMotion ? { duration: 0 } : undefined}
      >
        <motion.div className="w-full flex-auto">
          <FadeIn className="w-full">
            <Container>
              <FadeIn className="w-full">
                <div className="mx-auto max-w-2xl lg:mx-0 mb-24">
                  <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                    Notable Work
                  </h2>
                  <p className=" text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
                    Design. Develop. Deploy. We Handle It All
                  </p>
                </div>
              </FadeIn>
            </Container>
            <div className="overflow-hidden">
              <FadeIn className="w-full">
                <Swiper
                  slidesPerView={isMobile ? 1 : 1.3}
                  centeredSlides={true}
                  spaceBetween={30}
                  loop={true}
                  navigation={true}
                  modules={[Navigation, Autoplay]}
                  autoplay={{
                    delay: 15000,
                    disableOnInteraction: false,
                  }}
                  className="mySwiper w-full h-full"
                >
                  {data?.map((item, index) => {
                    return (
                      <SwiperSlide key={index} className="w-full h-full">
                        <ProjectCard
                          company_details={item.company_details}
                          feature_details={item.feature_details}
                          image_link={item.image_link}
                          image_classes={item?.image_classes ?? ""}
                          {...item}
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </FadeIn>
            </div>
          </FadeIn>
        </motion.div>
      </MotionConfig>
    </div>
  );
};

export default Projects;
