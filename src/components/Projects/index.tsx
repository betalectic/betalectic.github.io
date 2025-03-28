import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { Container } from "../studio/components/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import { FadeIn } from "../studio/components/FadeIn";
type Props = {};

const data = [
  {
    company_details: {
      logo_url: "https://www.heritagefoods.in/static/images/logo.png",
      logo_width: "",
      details: "Mumbai, India",
      company_name: "",
    },
    feature_details: {
      title: " Trusted Marketplace for Property Needs",
      features: [
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. beatae error laborum ab amet sunt recusandae? Reiciendisnatus perspiciatis optio.",
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      ],
    },
    image_link:
      "https://blackhattechnologies.com/assets/media/others/mobile-application-development.png",
    live_link: "",
    blog_link: "",
  },
  {
    company_details: {
      logo_url: "https://www.heritagefoods.in/static/images/logo.png",
      logo_width: "",
      details: "Mumbai, India",
      company_name: "",
    },
    feature_details: {
      title: " Lorem ipsum dolor sit amet, consectetur ",
      features: [
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. beatae error laborum ab amet sunt recusandae? Reiciendisnatus perspiciatis optio.",
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      ],
    },
    image_link:
      "https://freepngimg.com/thumb/web_development/3-2-web-development-png-hd.png",
    live_link: "",
    blog_link: "",
  },
  {
    company_details: {
      logo_url: "https://www.heritagefoods.in/static/images/logo.png",
      logo_width: "",
      details: "Mumbai, India",
      company_name: "",
    },
    feature_details: {
      title: " This is the header for Some Heading",
      features: [
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. beatae error laborum ab amet sunt recusandae? Reiciendisnatus perspiciatis optio.",
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      ],
    },
    image_link:
      "https://freepngimg.com/thumb/web_design/2-2-web-design-png-image.png",
    live_link: "",
    blog_link: "",
  },
  {
    company_details: {
      logo_url: "https://www.heritagefoods.in/static/images/logo.png",
      logo_width: "",
      details: "Mumbai, India",
      company_name: "",
    },
    feature_details: {
      title: " Lorem ipsum dolor sit amet, consectetur ",
      features: [
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. beatae error laborum ab amet sunt recusandae? Reiciendisnatus perspiciatis optio.",
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      ],
    },
    image_link:
      "https://freepngimg.com/thumb/web_development/3-2-web-development-png-hd.png",
    live_link: "",
    blog_link: "",
  },
];

const Projects = (props: Props) => {
  let shouldReduceMotion = useReducedMotion();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
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
                    Explore our projects
                  </h2>
                  <p className=" text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
                    Anim aute id magna aliqua ad ad non deserunt sunt.
                  </p>
                </div>
              </FadeIn>
            </Container>
            <div className=" overflow-hidden">
              <FadeIn className="w-full">
                <Swiper
                  slidesPerView={isMobile ? 1 : 1.3}
                  centeredSlides={true}
                  spaceBetween={30}
                  loop={true}
                  navigation={true}
                  modules={[Navigation, Autoplay]}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  className="mySwiper"
                >
                  {data?.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <ProjectCard
                          company_details={item.company_details}
                          feature_details={item.feature_details}
                          image_link={item.image_link}
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
