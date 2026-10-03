import type { ReactNode } from "react";

type TextLinkProps = {
  href: string;
  children: ReactNode;
};

/**
 * Inline underlined link to an external page that opens in a new tab.
 *
 * @param href External URL to open.
 * @param children Link text.
 * @returns The anchor element.
 */
const TextLink = ({ href, children }: TextLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-neutral-900 underline decoration-neutral-300 underline-offset-2 transition-colors hover:decoration-neutral-500 dark:text-neutral-100 dark:decoration-neutral-600 dark:hover:decoration-neutral-400"
    >
      {children}
    </a>
  );
};

export default TextLink;
