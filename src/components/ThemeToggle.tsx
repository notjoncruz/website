import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

/**
 * Button that switches between the light and dark theme. CSS picks the icon
 * from the active theme, so the server and client render the same markup.
 *
 * @returns The theme toggle button.
 */
const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="-m-2 ml-auto p-2 text-stone-500 transition-[color,transform] duration-150 ease-out hover:text-stone-900 active:scale-95 dark:text-stone-400 dark:hover:text-stone-100"
      aria-label="Toggle dark mode"
    >
      <FiMoon className="h-4 w-4 dark:hidden" />
      <FiSun className="hidden h-4 w-4 dark:block" />
    </button>
  );
};

export default ThemeToggle;
