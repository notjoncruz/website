export type CollectionItem = {
  name: string;
  url: string;
  description: string;
};

export type Collection = {
  slug: string;
  title: string;
  intro: string;
  items: CollectionItem[];
};

export const collections: Collection[] = [
  {
    slug: "blogs",
    title: "Blogs",
    intro: "Tech blog posts I read and recommend.",
    items: [
      {
        name: "Minions: Stripe's one-shot, end-to-end coding agents",
        url: "https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents",
        description:
          "How Stripe runs unattended coding agents that merge over a thousand pull requests each week.",
      },
      {
        name: "Minions: Stripe's one-shot, end-to-end coding agents, Part 2",
        url: "https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2",
        description:
          "The setup behind them: devboxes, blueprints, rule files, MCP context, and CI feedback loops.",
      },
    ],
  },
];
