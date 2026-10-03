import type { IconType } from "react-icons";

type IconLinkProps = {
  href: string;
  label: string;
  icon: IconType;
};

/**
 * Icon-only link. Web URLs open in a new tab; other schemes such as
 * `mailto:` open in place.
 *
 * @param href Link target.
 * @param label Accessible name for the link.
 * @param icon Icon component to render.
 * @returns The anchor element.
 */
const IconLink = ({ href, label, icon: Icon }: IconLinkProps) => {
  const isWeb = href.startsWith("http");

  return (
    <a
      href={href}
      target={isWeb ? "_blank" : undefined}
      rel={isWeb ? "noreferrer" : undefined}
      className="p-2 -m-2 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
      aria-label={label}
    >
      <Icon className="w-5 h-5" />
    </a>
  );
};

export default IconLink;
