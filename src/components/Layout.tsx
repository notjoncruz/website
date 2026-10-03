import Link from "next/link";
import { useRouter } from "next/router";
import type { ReactNode } from "react";

import { collections } from "~/content/collections";

type LayoutProps = {
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
 * Site shell that stays mounted across page changes. The shell fades up once
 * on first load. On each page change only the page content fades in. Visitors
 * who prefer reduced motion get the fade without the upward movement.
 *
 * @param children Current page content.
 * @returns The page wrapped in the site navigation.
 */
const Layout = ({ children }: LayoutProps) => {
  const { asPath } = useRouter();

  return (
    <main className="mx-auto max-w-xl px-6 py-16 motion-safe:animate-enter motion-reduce:animate-fade md:py-24">
      <nav className="mb-12 flex items-center gap-5 text-sm">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            aria-current={asPath === href ? "page" : undefined}
            className="text-stone-600 transition-colors hover:text-stone-900 aria-[current=page]:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 dark:aria-[current=page]:text-stone-100"
          >
            {label}
          </Link>
        ))}
      </nav>
      <div key={asPath} className="animate-fade">
        {children}
      </div>
    </main>
  );
};

export default Layout;
