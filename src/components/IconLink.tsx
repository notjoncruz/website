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
      className="-m-2 p-2 text-stone-500 transition-colors hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
      aria-label={label}
    >
      <Icon className="h-5 w-5" />
    </a>
  );
};

export default IconLink;
