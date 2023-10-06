import { mauve, mauveDark } from "@radix-ui/colors";
import { useEffect, useRef, useState } from "react";

import { Icon } from "../Icon/Icon";
import * as styles from "./toggle-theme.css";

type Theme = "light" | "dark";

export const ToggleTheme = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [activeTheme, setActiveTheme] = useState<Theme>(
    document.body.dataset.theme as Theme
  );
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!activeTheme) return;

    // Update data attribute on body
    document.body.dataset.theme = activeTheme;

    // Update localStorage
    localStorage.setItem("theme", activeTheme);

    // Update meta theme
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme !== null)
      metaTheme.setAttribute(
        "content",
        activeTheme === "dark" ? mauveDark.mauve1 : mauve.mauve1
      );
  }, [activeTheme]);

  return (
    <>
      <button
        type="button"
        data-theme-toggle
        aria-label="Toggle theme"
        onClick={() => {
          setActiveTheme(inactiveTheme);
        }}
        onMouseOver={() => {
          setIsHovering(true);
        }}
        onMouseOut={() => {
          setIsHovering(false);
        }}
        ref={buttonRef}
        className={styles.button}
      >
        <Icon
          icon="sun"
          variant={isHovering ? "filled" : "line"}
          className={styles.sun}
        />
        <Icon
          icon="moon"
          variant={isHovering ? "filled" : "line"}
          className={styles.moon}
        />
      </button>
    </>
  );
};
