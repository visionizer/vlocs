module.exports = {
  title: 'Vlocs',
  tagline: "Vlocs | V's unofficial documentation.",
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'visionizer', // Usually your GitHub org/user name.
  projectName: 'vlocs', // Usually your repo name.
  themeConfig: {
    prism: {
      //additionalLanguages: ['uri'],
    },
    navbar: {
      title: 'Vlocs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        //{to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/visionizer/vlocs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More Vlocs',
          items: [
            {
              label: "Vloc's GitHub Repository",
              to: 'https://github.com/visionizer/vlocs',
            },
            {
              label: 'Getting Started with V',
              to: 'docs/getting_started/install-v',
            },
          ],
        },
        {
          title: "V's Community",
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/vlang',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/vlang',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/v_language',
            },
            {
              label: "VPM",
              href: "https://vpm.vlang.io/"
            },
          ],
        },
        {
          title: 'More about V',
          items: [
            {
              label: 'Official Website',
              href: 'https://vlang.io/',
            },
            {
              label: "V's Github",
              href: 'https://github.com/vlang/v',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Visionizer, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/visionizer/vlocs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/visionizer/vlocs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
