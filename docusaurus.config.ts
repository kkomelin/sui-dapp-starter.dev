import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const SITE_TITLE = "Sui dApp Starter";
const SITE_SLOGAN = "Full-Stack Sui Starter on Steroids";
const SITE_URL = "https://sui-dapp-starter.dev";
const GITHUB_PROJECT_NAME = "sui-dapp-starter.dev";
const GITHUB_PROJECT_USER = "kkomelin";
const DISCORD_INVITE_LINK = "https://discord.com/invite/HuDPpXz4Hx";

const config: Config = {
  title: SITE_TITLE,
  tagline: SITE_SLOGAN,
  favicon: "img/favicon.ico",

  url: SITE_URL,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  organizationName: GITHUB_PROJECT_USER,
  projectName: GITHUB_PROJECT_NAME,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            `https://github.com/${GITHUB_PROJECT_USER}/${GITHUB_PROJECT_NAME}/tree/main/`,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            `https://github.com/${GITHUB_PROJECT_USER}/${GITHUB_PROJECT_NAME}/tree/main/`,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: SITE_TITLE,
      logo: {
        alt: `${SITE_TITLE} Logo`,
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: `https://github.com/${GITHUB_PROJECT_USER}/${GITHUB_PROJECT_NAME}`,
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: DISCORD_INVITE_LINK,
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: `https://github.com/${GITHUB_PROJECT_USER}/${GITHUB_PROJECT_NAME}`,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Konstantin Komelin. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    [
      "@dipakparmar/docusaurus-plugin-umami",
      /** @type {import('@dipakparmar/docusaurus-plugin-umami').Options} */
      {
        websiteID: "80fb4309-441e-4f26-b820-5af1014a4d18", // Required
        analyticsDomain: "sui-dapp-starter.dev", // Required
        // scriptName: "", // Optional
        // dataHostURL: "", // Optional
        // dataAutoTrack: true, // Optional
        // dataDoNotTrack: true, // Optional
        // dataCache: true, // Optional
        // dataDomains: "", // comma separated list of domains, *Recommended*
      },
    ],
  ],
};

export default config;
