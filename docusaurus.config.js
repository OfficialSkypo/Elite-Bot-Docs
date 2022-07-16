module.exports = {
  title: 'Elite Bot Documentation',
  tagline: '',
  url: 'https://ThatGuyJacobee.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/elitegaming.ico',
  organizationName: 'ThatGuyJacobee', // Usually your GitHub org/user name.
  projectName: 'Elite-Bot-Docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Elite Bot',
      logo: {
        alt: 'Elite Gaming Logo',
        src: 'img/elitegaming.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/ThatGuyJacobee/Elite-Bot-Docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Setting up Elite Bot',
              to: 'docs/',
            },
            {
              label: 'Customisations',
              to: 'docs/doc2/',
            },
			{
              label: 'Toggling Auto-Features',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/2XvwvgR',
            },
			{
              label: 'Twitter',
              href: 'https://twitter.com/EliteGamingUK_',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/elitegaming_uk/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Elite Gaming UK & Elite Bot`,
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
            'https://github.com/ThatGuyJacobee/Elite-Bot-Docs/edit/main/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/ThatGuyJacobee/Elite-Bot-Docs/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
