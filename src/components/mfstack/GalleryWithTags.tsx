import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WhatWeSolveIcons from "../../images/mfstack/WhatWeSolveIcons";

const GalleryWithTags = () => {
  const whatWeSolveCards = [
    {
      id: 1,
      name: "Investor Portfolio Management",
      description:
        "Real-time portfolio insights at your fingertips. Track investments, visualize allocations, and monitor performance in one comprehensive dashboard.",
      icon: WhatWeSolveIcons.investor,
      tags: [
        "Fintechs",
        "Independent Distributors",
        "Wealth Management Companies",
        "AMCs",
      ],
    },
    {
      id: 2,
      name: "Financial Planning",
      description:
        "Comprehensive financial planning tools for your clients. From goal-based planning to retirement calculations, deliver strategic guidance.",
      icon: WhatWeSolveIcons.financialPlanning,
      tags: [
        "Fintechs",
        "Independent Distributors",
        "Wealth Management Companies",
        "AMCs",
      ],
    },
    {
      id: 3,
      name: "Risk Profiling",
      description:
        "Smart risk assessment for informed decisions. Generate risk scores, analyze portfolios, and maintain alignment with client objectives.",
      icon: WhatWeSolveIcons.riskProfiling,
      tags: [
        "Fintechs",
        "Independent Distributors",
        "Wealth Management Companies",
        "AMCs",
      ],
    },
    {
      id: 4,
      name: "MF Transactions",
      description:
        "Complete mutual fund transaction platform. Process orders, manage SIPs, and track investments with real-time updates.",
      icon: WhatWeSolveIcons.mfTransactions,
      tags: [
        "Fintechs",
        "Independent Distributors",
        "Wealth Management Companies",
        "AMCs",
      ],
    },
    {
      id: 5,
      name: "KYC Checks, Onboarding and E-KYC",
      description:
        "Digital KYC made simple. Digital onboarding for all investor types with integrated verification systems.",
      icon: WhatWeSolveIcons.kycChecks,
      tags: [
        "Fintechs",
        "Independent Distributors",
        "Wealth Management Companies",
        "AMCs",
      ],
    },
    {
      id: 6,
      name: "Fund Details and Performance Data",
      description:
        "Real-time fund insights. Access NAVs, track performance, and analyze portfolio holdings instantly.",
      icon: WhatWeSolveIcons.fundDetails,
      tags: [
        "Fintechs",
        "Independent Distributors",
        "Wealth Management Companies",
        "AMCs",
      ],
    },
    {
      id: 7,
      name: "Security",
      description:
        "Enterprise-grade security for your business. Two-factor authentication, encryption, and robust access controls.",
      icon: WhatWeSolveIcons.security,
      tags: [
        "Fintechs",
        "Independent Distributors",
        "Wealth Management Companies",
        "AMCs",
      ],
    },
    {
      id: 8,
      name: "LAMF",
      description:
        "Integrated loan management platform. Calculate eligibility, track disbursements, and manage repayments through comprehensive dashboards.",
      icon: WhatWeSolveIcons.lamf,
      tags: [
        "Fintechs",
        "Independent Distributors",
        "Wealth Management Companies",
        "AMCs",
      ],
    },
    {
      id: 9,
      name: "Back office",
      description:
        "Stay in control with a dedicated dashboard to track, manage, and monitor every aspect of your application seamlessly.",
      icon: WhatWeSolveIcons.backOffice,
      tags: [
        "Fintechs",
        "Independent Distributors",
        "Wealth Management Companies",
        "AMCs",
      ],
    },
    {
      id: 10,
      name: "Standard Reports",
      description:
        "Keep your investors updated about their investments with our seamless integrations of Capital Gain, Transactions and Holdings report.",
      icon: WhatWeSolveIcons.standardReports,
      tags: [
        "Fintechs",
        "Independent Distributors",
        "Wealth Management Companies",
        "AMCs",
      ],
    },
    {
      id: 11,
      name: "Custom reports",
      description:
        "Customise your reports to your brand and corporate image and comply with the regulation.",
      icon: WhatWeSolveIcons.customReports,
      tags: [
        "Fintechs",
        "Independent Distributors",
        "Wealth Management Companies",
        "AMCs",
      ],
    },
  ];

  const tags = [
    "Fintechs",
    "Independent Distributors",
    "Wealth Management Companies",
    "AMCs",
  ];

  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef(null);
  const tagRef = useRef(null);

  const [activeTag, setActiveTag] = useState("Fintechs");
  const [shuffledCards, setShuffledCards] = useState(whatWeSolveCards);

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleTagChange = (tag) => {
    setActiveTag(tag);
    const filtered =
      tag === "All"
        ? whatWeSolveCards
        : whatWeSolveCards.filter((card) => card.tags.includes(tag));
    setShuffledCards(shuffleArray(filtered));
  };

  // Debounce implementation
  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleScroll = debounce(() => {
    if (sectionRef.current && tagRef.current) {
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const tagHeight = tagRef.current.offsetHeight;

      // Check if the tag section needs to be sticky
      const shouldStick =
        sectionRect.top <= 0 && sectionRect.bottom > tagHeight;

      if (shouldStick !== isSticky) {
        setIsSticky(shouldStick);
      }
    }
  }, 50); // Adjust the delay as needed (50ms is a good balance for performance)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <div className="mx-auto">
      {/* Sticky Tags */}
      <div
        ref={tagRef}
        className={`w-full overflow-x-auto ${
          isSticky
            ? "fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 z-50 py-2"
            : "relative"
        }`}
      >
        <div className="flex gap-4 justify-center px-4 md:px-8 transition-all duration-300">
          {tags.map((tag, index) => (
            <button
              key={index}
              onClick={() => handleTagChange(tag)}
              className={`px-2 py-1 md:px-4 md:py-2 rounded-full font-medium md:text-sm text-[10px] transition-all duration-300 ${
                activeTag === tag
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Cards Section */}
      <div ref={sectionRef} className="mt-14">
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <AnimatePresence>
            {shuffledCards.map((card) => (
              <motion.div
                key={card.id}
                className="bg-gray-50 dark:bg-gray-900 shadow-lg p-6 rounded-xl ring-1 ring-neutral-200 dark:ring-neutral-700 transition-shadow duration-300"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
              >
                <div
                  className="flex flex-col"
                  style={{
                    minHeight: "100px",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <card.icon aria-hidden="true" />
                    <h2 className="font-bold text-md mt-2 text-gray-900 dark:text-gray-50">
                      {card.name}
                    </h2>
                  </div>
                  <dd className="text-base/7 text-gray-600 dark:text-gray-300">
                    {card.description}
                  </dd>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default GalleryWithTags;
