import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Content Guide',
      collapsed: false,
      items: [
        'content/overview',
        'content/about',
        'content/projects',
        'content/contact',
      ],
    },
    {
      type: 'category',
      label: 'Deployment',
      collapsed: false,
      items: [
        'deployment/docker',
        'deployment/github-pages',
      ],
    },
  ],
};

export default sidebars;
