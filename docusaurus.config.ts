import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";
import tailwindPlugin from "./plugins/tailwind-plugin.cjs";
import {
  DISCORD_INVITE_LINK,
  GITHUB_DOCS_PROJECT_NAME,
  GITHUB_DOCS_PROJECT_USER,
  GITHUB_TARGET_PROJECT_URL,
  SITE_SLOGAN,
  SITE_TITLE,
  SITE_URL,
} from './src/constants/site'

const config: Config = {
  title: SITE_TITLE,
  titleDelimiter: '-',
  tagline: SITE_SLOGAN,
  favicon: 'img/favicon.ico',

  url: SITE_URL,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: GITHUB_DOCS_PROJECT_USER,
  projectName: GITHUB_DOCS_PROJECT_NAME,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: `${GITHUB_TARGET_PROJECT_URL}/tree/main/`,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: `${GITHUB_TARGET_PROJECT_URL}/tree/main/`,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: 'img/sui-dapp-starter-social-preview.png',
    metadata: [
      { name: 'msapplication-TileColor', content: '#242424' },
      { name: 'theme-color', content: '#242424' },
    ],
    navbar: {
      title: SITE_TITLE,
      logo: {
        alt: `${SITE_TITLE} Logo`,
        src: 'img/logo.svg',
      },
      items: [
        // {
        //   type: "docSidebar",
        //   sidebarId: "tutorialSidebar",
        //   position: "left",
        //   label: "Tutorial",
        // },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        // { to: "/blog", label: "Blog", position: "left" },
        {
          href: GITHUB_TARGET_PROJECT_URL,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Frontend',
              to: '/docs/category/frontend',
            },
            {
              label: 'Miscellaneous',
              to: '/docs/category/miscellaneous',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: DISCORD_INVITE_LINK,
            },
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: "Blog",
            //   to: "/blog",
            // },
            {
              label: 'GitHub',
              href: GITHUB_TARGET_PROJECT_URL,
            },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} Konstantin Komelin`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/img/apple-touch-icon.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        type: 'image/png',
        sizes: '32x32',
        href: '/img/favicon-32x32.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/img/favicon-16x16.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'mask-icon',
        href: '/img/safari-pinned-tab.svg',
        color: '#4da2ff',
      },
    },
    // // Declare some json-ld structured data
    // {
    //   tagName: 'script',
    //   attributes: {
    //     type: 'application/ld+json',
    //   },
    //   innerHTML: JSON.stringify({
    //     '@context': 'https://schema.org/',
    //     '@type': 'Organization',
    //     name: 'Meta Open Source',
    //     url: 'https://opensource.fb.com/',
    //     logo: 'https://opensource.fb.com/img/logos/Meta-Open-Source.svg',
    //   }),
    // },
  ],
  scripts: [
    {
      src: 'https://cloud.umami.is/script.js',
      defer: true,
      'data-website-id': '80fb4309-441e-4f26-b820-5af1014a4d18',
    },
  ],
  plugins: [tailwindPlugin],
}

export default config;
