// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'get-started',
    {
      type: 'category',
      label: 'API Documentation',
      items: [
        {
          type: 'category',
          label: 'Global APIs',
          items: [
            'api/global/dungeon-base-item-drop-chances',
            'api/global/loot-exchange-all-offers',
            'api/global/loot-exchange-recent-exchanges',
            'api/global/marketplace-nfts',
            'api/global/quest-recent-claims',
            'api/global/recent-rewards-api-docs',
            'api/global/tavern-staking-recent-stakings',
          ],
        },
        {
          type: 'category',
          label: 'Player-Scoped APIs',
          items: [
            'api/player-scoped/dungeon-definitions',
            'api/player-scoped/fungible-asset-my-balances',
            'api/player-scoped/item-get-all-items',
            'api/player-scoped/nft-counts-by-classes-imported-false',
            'api/player-scoped/nft-resting-count',
            'api/player-scoped/quest-active-count',
            'api/player-scoped/tavern-staking-active-count',
            'api/player-scoped/trip-active-count-all',
            'api/player-scoped/user-achievement-stat-me',
            'api/player-scoped/user-me',
          ],
        },
        {
          type: 'category',
          label: 'Socket APIs',
          items: [
            'socket/steam-game-events',
          ],
        },
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
