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
    intro: "Tech blogs I read and recommend.",
    items: [
      {
        name: "Julia Evans",
        url: "https://jvns.ca/",
        description:
          "Clear, friendly explanations of Linux, networking, and git.",
      },
      {
        name: "Dan Luu",
        url: "https://danluu.com/",
        description:
          "Long, data-driven essays on software, hardware, and careers.",
      },
      {
        name: "Simon Willison",
        url: "https://simonwillison.net/",
        description:
          "Daily notes on LLMs, Python, and building open source tools.",
      },
    ],
  },
];
