/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import clsx from "clsx";
import ErrorBoundary from "@docusaurus/ErrorBoundary";
import {
  PageMetadata,
  SkipToContentFallbackId,
  ThemeClassNames,
} from "@docusaurus/theme-common";
import { useKeyboardNavigation } from "@docusaurus/theme-common/internal";
import SkipToContent from "@theme/SkipToContent";
import AnnouncementBar from "@theme/AnnouncementBar";
import Footer from "@theme/Footer";
import LayoutProvider from "@theme/Layout/Provider";
import ErrorPageContent from "@theme/ErrorPageContent";
import type { Props } from "@theme/Layout";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import { useEffect, useId, useRef, useState } from "react";
import { Container } from "../../components/studio/components/Container";
import { Logo } from "../../components/studio/components/Logo";
import { Button } from "../../components/studio/components/Button";
import { color, motion } from "framer-motion";
import { Offices } from "../../components/studio/components/Offices";
import { SocialMedia } from "../../components/studio/components/SocialMedia";
import NavbarColorModeToggle from "@theme/Navbar/ColorModeToggle";
import BetalecticWhiteSvg from "../../../static/img/betalectic_white_svg.svg";
import BLetterLogoLight from "../../../static/img/b_letter_logo_light.svg";
import BLetterLogoWhite from "../../../static/img/b_letter_logo_white.svg";
import { initFaviconSwitcher } from "../../lib/faviconSwitcher";
import { useLocation } from "@docusaurus/router";

function XIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z" />
      <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z" />
    </svg>
  );
}

function MenuIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M2 6h20v2H2zM2 16h20v2H2z" />
    </svg>
  );
}

function Header({
  panelId,
  icon: Icon,
  expanded,
  onToggle,
  toggleRef,
  invert = false,
}: {
  panelId: string;
  icon: React.ComponentType<{ className?: string }>;
  expanded: boolean;
  onToggle: () => void;
  toggleRef: React.RefObject<HTMLButtonElement>;
  invert?: boolean;
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const updateDeviceType = () => {
      const width = window.innerWidth;
      setIsMobile(width < 426);
      setIsTablet(width >= 426 && width <= 768);
    };

    updateDeviceType();
    window.addEventListener("resize", updateDeviceType);

    // Cleanup on component unmount
    return () => window.removeEventListener("resize", updateDeviceType);
  }, []);

  return (
    <Container>
      <div className="flex items-center justify-between">
        <Link href="/" aria-label="Home">
          {currentPath === "/mf-stack" ? (
            <img
              src={require("../../images/mfstack/mfstack-logo.png").default}
              className="h-12 w-auto"
              alt="MF Stack Logo"
            />
          ) : isMobile ? (
            expanded ? (
              <BLetterLogoWhite className="h-9 w-9" />
            ) : (
              <BLetterLogoLight className="h-9 w-9" />
            )
          ) : expanded ? (
            <BetalecticWhiteSvg />
          ) : (
            <Logo className="h-8" fillOnHover invert={invert} />
          )}
        </Link>
        <div className="flex items-center gap-x-6">
          <Button
            className="bg-text-neutral-950 dark:bg-neutral-50 dark:text-neutral-950 "
            href="/about-us"
            invert={invert}
          >
            About us
          </Button>
          {!expanded && (
            <NavbarColorModeToggle className={styles.colorModeToggle} />
          )}

          <button
            ref={toggleRef}
            type="button"
            onClick={onToggle}
            aria-expanded={expanded ? "true" : "false"}
            aria-controls={panelId}
            className={clsx(
              "group -m-2.5 rounded-full p-2.5 transition",
              invert ? "hover:bg-white/10" : "hover:bg-neutral-950/10"
            )}
            aria-label="Toggle navigation"
          >
            <Icon
              className={clsx(
                "h-6 w-6",
                invert
                  ? "fill-white group-hover:fill-neutral-200"
                  : "fill-neutral-950 dark:fill-neutral-50 group-hover:fill-neutral-700 dark:group-hover:fill-neutral-300"
              )}
            />
          </button>
        </div>
      </div>
    </Container>
  );
}

function NavigationRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="even:mt-px sm:bg-neutral-950">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2">{children}</div>
      </Container>
    </div>
  );
}

function NavigationItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group relative isolate -mx-6 text-white hover:text-white bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
    >
      {children}
      <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100" />
    </Link>
  );
}

function Navigation() {
  return (
    <nav className="mt-px font-display text-5xl font-medium tracking-tight text-white">
      <NavigationRow>
        <NavigationItem href="/">Home</NavigationItem>
        <NavigationItem href="/mf-stack">MF Stack</NavigationItem>
      </NavigationRow>
      <NavigationRow>
        <NavigationItem href="/work">Our Work</NavigationItem>
        <NavigationItem href="/contact">Contact Us</NavigationItem>
      </NavigationRow>
    </nav>
  );
}

export default function Layout(props: Props): JSX.Element {
  const {
    children,
    noFooter,
    wrapperClassName,
    // Not really layout-related, but kept for convenience/retro-compatibility
    title,
    description,
  } = props;

  useKeyboardNavigation();

  let panelId = useId();
  let [expanded, setExpanded] = useState(false);
  let openRef = useRef<React.ElementRef<"button">>(null);
  let closeRef = useRef<React.ElementRef<"button">>(null);
  let navRef = useRef<React.ElementRef<"div">>(null);

  const location = useLocation();
  const isBlogPath = location.pathname.startsWith("/blog");
  // console.log("docusaurus context", useDocusaurusContext());

  useEffect(() => {
    initFaviconSwitcher();
    function onClick(event: MouseEvent) {
      if (
        event.target instanceof HTMLElement &&
        event.target.closest("a")?.href === window.location.href
      ) {
        setExpanded(false);
      }
    }

    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <LayoutProvider>
      <PageMetadata title={title} description={description} />

      <SkipToContent />

      <AnnouncementBar />

      {/* <Navbar /> */}
      <header>
        <div className="absolute left-0 right-0 top-0 z-30 h-20 bg-black dark:bg-white"></div>
        <div
          className="absolute left-0 right-0 top-2 z-40 pt-14 bg-white dark:bg-neutral-950 rounded-tl-[40px] rounded-tr-[40px]"
          aria-hidden={expanded ? "true" : undefined}
          // @ts-ignore (https://github.com/facebook/react/issues/17157)
          inert={expanded ? "" : undefined}
        >
          <Header
            panelId={panelId}
            icon={MenuIcon}
            toggleRef={openRef}
            expanded={expanded}
            onToggle={() => {
              setExpanded((expanded) => !expanded);
              window.setTimeout(() =>
                closeRef.current?.focus({ preventScroll: true })
              );
            }}
          />
        </div>

        <motion.div
          layout
          id={panelId}
          style={{ height: expanded ? "auto" : "0.5rem" }}
          className="relative z-50 overflow-hidden bg-neutral-950 dark:bg-neutral-50 pt-2"
          aria-hidden={expanded ? undefined : "true"}
          // @ts-ignore (https://github.com/facebook/react/issues/17157)
          inert={expanded ? undefined : ""}
        >
          <motion.div layout className="bg-neutral-800">
            <div ref={navRef} className="bg-neutral-950 pb-16 pt-14">
              <Header
                invert
                panelId={panelId}
                icon={XIcon}
                toggleRef={closeRef}
                expanded={expanded}
                onToggle={() => {
                  setExpanded((expanded) => !expanded);
                  window.setTimeout(() =>
                    openRef.current?.focus({ preventScroll: true })
                  );
                }}
              />
            </div>
            <Navigation />
            <div className="relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800">
              <Container>
                <div className="grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-2 sm:pt-16">
                  <div>
                    <h2 className="font-display text-base font-semibold text-white">
                      Our offices
                    </h2>
                    <Offices
                      invert
                      className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
                    />
                  </div>
                  <div className="sm:border-l sm:border-transparent sm:pl-16">
                    <h2 className="font-display text-base font-semibold text-white">
                      Follow us
                    </h2>
                    <SocialMedia className="mt-6" nav />
                  </div>
                </div>
              </Container>
            </div>
          </motion.div>
        </motion.div>
      </header>

      <motion.div
        layout
        style={{
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
        className="relative flex flex-auto overflow-hidden bg-white dark:bg-neutral-950 pt-14 "
      >
        <motion.div
          layout
          className="relative isolate flex w-full flex-col pt-9"
        >
          <div
            id={SkipToContentFallbackId}
            className={clsx(
              ThemeClassNames.wrapper.main,
              styles.mainWrapper,
              wrapperClassName,
              `${isBlogPath ? "max-w-7xl mx-auto px-6 lg:px-8 mt-8" : ""}`
            )}
          >
            <ErrorBoundary
              fallback={(params) => <ErrorPageContent {...params} />}
            >
              {children}
            </ErrorBoundary>
          </div>

          {!noFooter && <Footer />}
        </motion.div>
      </motion.div>
    </LayoutProvider>
  );
}
