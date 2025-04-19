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

  // Set the production url of your site here
  url: "https://betalectic.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: BASE_URL,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Betalectic", // Usually your GitHub org/user name.
  projectName: "betalectic", // Usually your repo name.
  deploymentBranch: "main",
  trailingSlash: false,
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  plugins: ["docusaurus-tailwindcss-loader"],
  future: {
    experimental_faster: true,
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          blogTitle: "Software Development Resources & Guides",
          blogDescription:
            "Technical articles on React, Node.js, and software architecture. Code examples, tutorials and industry insights from our development team.",
          blogSidebarCount: 0,
          showReadingTime: false,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
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

  scripts: [
    {
      src: "//cdn.jsdelivr.net/npm/meta-scan@0.14.1/dist/auto.global.js",
      "data-auto-enable": "false",
      crossorigin: "anonymous",
    },
  ],

  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap", // Adjust weights as needed
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
        content: "Custom Software Development for Web, Mobile, AI & DevOps",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://betalectic.github.io/" },
      // {
      //   property: "og:image",
      //   content: "img/social-preview.png",
      // },
      {
        property: "og:description",
        content:
          "Betalectic specializes in custom software development for web, mobile, AI, and DevOps. We build scalable applications, robust APIs, and generative AI solutions to help businesses launch digital products faster. Partner with us for secure, scalable, and innovative tech solutions.",
      },
      { property: "og:site_name", content: "Betalectic" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Custom Software Development for Web, Mobile, AI & DevOps",
      },
      {
        name: "twitter:description",
        content:
          "Betalectic specializes in custom software development for web, mobile, AI, and DevOps. We build scalable applications, robust APIs, and generative AI solutions to help businesses launch digital products faster. Partner with us for secure, scalable, and innovative tech solutions.",
      },
      {
        name: "twitter:image",
        content: "img/social-preview.png",
      },
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

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
};

export default config;
