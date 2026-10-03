import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import type { ReactNode } from "react";

import { collections } from "~/content/collections";

type LayoutProps = {
  title?: string;
  children: ReactNode;
};

const navLinks = [
  { href: "/", label: "Home" },
  ...collections.map((collection) => ({
    href: `/${collection.slug}`,
    label: collection.title,
  })),
];

/**
 * Page shell with site navigation and the shared fade-in animation.
 * Navigation includes Home and one link per collection.
 *
 * @param title Page name shown before the site name in the browser tab.
 * @param children Page content.
 * @returns The page wrapped in the site layout.
 */
const Layout = ({ title, children }: LayoutProps) => {
  const { asPath } = useRouter();

  return (
    <>
      {title && (
        <Head>
          <title>{`${title} · Jonathan Cruz`}</title>
        </Head>
      )}
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl mx-auto px-6 py-16 md:py-24"
      >
        <nav className="mb-12 flex items-center gap-5 text-sm">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={asPath === href ? "page" : undefined}
              className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 aria-[current=page]:text-neutral-900 dark:aria-[current=page]:text-neutral-100 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
        {children}
      </motion.main>
    </>
  );
};

export default Layout;
