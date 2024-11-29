import Link from "@docusaurus/Link";
import { Container } from "./Container";
import { FadeIn } from "./FadeIn";
import { socialMediaProfiles } from "./SocialMedia";
import { Logo } from "./Logo";

const navigation = [
  {
    title: <p className="text-neutral-950 dark:text-neutral-50">Company</p>,
    links: [
      { title: "Our Work", href: "/work" },
      { title: "About us", href: "/about-us" },
      { title: "Contact", href: "/contact" },
    ],
  },
  {
    title: <p className="text-neutral-950 dark:text-neutral-50">Connect</p>,
    links: socialMediaProfiles,
  },
];

function Navigation() {
  return (
    <nav>
      <ul
        role="list"
        className="grid grid-cols-2 gap-8 sm:grid-cols-3 m-0 p-0"
        style={{ listStyle: "none" }}
      >
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex} style={{ listStyle: "none" }}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {section.title}
            </div>
            <ul
              role="list"
              className="mt-4 text-sm text-neutral-700 m-0 p-0"
              style={{ listStyle: "none" }}
            >
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950 no-underline"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
          <div className="flex md:flex-col justify-between md:my-auto md:ml-auto">
            <Link href="/mf-stack">
              <img
                className="w-36"
                src={
                  require("../../../images/mfstack/mfstack-logo.png").default
                }
                alt=""
              />
            </Link>
            <Link href="/" aria-label="Home">
              <span className="text-sm text-neutral-700 dark:text-neutral-50">
                <Logo className="h-8" fillOnHover />
              </span>
            </Link>
          </div>
        </div>
        <div className="py-8 text-center">
          <p className="text-sm">
            Copyright {new Date().getFullYear()} © Betalectic
          </p>
        </div>
      </FadeIn>
    </Container>
  );
}
