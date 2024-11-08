import Link from "@docusaurus/Link";
import { Container } from "./Container";
import { FadeIn } from "./FadeIn";
import { socialMediaProfiles } from "./SocialMedia";
import { Logo } from "./Logo";

const navigation = [
  {
    title: <p className="text-neutral-950 dark:text-neutral-50">Company</p>,
    links: [
      { title: "About us", href: "/about" },
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
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-end justify-center gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href="/" aria-label="Home">
            <p className="text-sm text-neutral-700 dark:text-neutral-50">
              <Logo className="h-8" fillOnHover />© Betalectic{" "}
              {new Date().getFullYear()}
            </p>
          </Link>
        </div>
      </FadeIn>
    </Container>
  );
}
