import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const BASE_URL =
  process.env.PR_NUMBER !== undefined
    ? `/pr-preview/pr-${process.env.PR_NUMBER}/`
    : "/";

const config: Config = {
  title: "Betalectic",
  tagline: "Some tagline to keep things simple",
  favicon: "img/favicon.ico",

  url: "https://betalectic.github.io",
  baseUrl: BASE_URL,
  organizationName: "Betalectic",
  projectName: "betalectic",
  deploymentBranch: "main",
  trailingSlash: false,
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  plugins: [
    "docusaurus-tailwindcss-loader",
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "our-work",
        path: "./our-work", // Ensure this path exists in your project
        routeBasePath: "our-work", // Access at /our-work
        blogSidebarCount: 0,
        showReadingTime: true,
      },
    ],
  ],

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: false,
        blog: {
          path: "./blog",
          blogSidebarCount: 0,
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        gtag: {
          trackingID: "G-RPRDEYF37G",
        },
        sitemap: {
          lastmod: "date",
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes("/page/"));
          },
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap",
      },
    },
  ],

  themeConfig: {
    metadata: [
      {
        name: "keywords",
        content:
          "Betalectic, software development, web apps, mobile apps, UI/UX design, APIs, generative AI, DevOps, mutual fund tech, digital solutions, tech blog, documentation",
      },
      {
        property: "og:title",
        content:
          "Betalectic: We build Web Apps, Mobile Apps, UI, UX designs, APIs, Generative AI solutions & DevOps",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://betalectic.github.io/" },
      {
        property: "og:description",
        content:
          "Betalectic is a custom software development company specialising in building scalable web and mobile applications, robust APIs, and generative AI solutions.",
      },
      { property: "og:site_name", content: "Betalectic" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content:
          "Betalectic: We build Web Apps, Mobile Apps, UI, UX designs, APIs, Generative AI solutions & DevOps",
      },
      {
        name: "twitter:description",
        content:
          "Betalectic is a custom software development company specialising in building scalable web and mobile applications.",
      },
      { name: "twitter:image", content: "img/social-preview.png" },
      { name: "twitter:site", content: "@betalectic" },
    ],
    image: "img/social-preview.png",
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: "My Site Logo",
        src: "img/betalectic_logo_svg.svg",
        href: "/",
      },
      items: [
        {
          to: "/about-us",
          label: "About us",
          position: "right",
        },
        {
          to: "/contact",
          label: "Contact",
          position: "right",
        },
      ],
    },

    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [],
        },
        {
          title: "Community",
          items: [
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/betalectic/",
            },
            {
              label: "Twitter",
              href: "https://x.com/betalectic/",
            },
          ],
        },
        {
          title: "Contact us",
          items: [
            {
              label: "Email",
              href: "mailto:contact@betalectic.com",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Betalectic.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
