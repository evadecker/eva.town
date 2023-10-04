import { mauve, mauveDark, plum, plumDark } from "@radix-ui/colors";
import { useEffect, useRef, useState } from "react";

import { Icon } from "../Icon/Icon";
import * as styles from "./toggle-theme.css";

type Theme = "light" | "dark";

export const ToggleTheme = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeTheme, setActiveTheme] = useState<Theme>(
    document.body.dataset.theme as Theme
  );
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [animationCoords, setAnimationCoords] = useState<{
    x?: number;
    y?: number;
  }>({
    x: buttonRef.current?.getBoundingClientRect().left,
    y: buttonRef.current?.getBoundingClientRect().top,
  });

  const handleAnimation = () => {
    // Toggle animation
    setIsAnimating(true);
    document.body.dataset.animating = "";

    // Position background animation center
    setAnimationCoords({
      x: buttonRef.current?.getBoundingClientRect().left,
      y: buttonRef.current?.getBoundingClientRect().top,
    });

    // End animation
    setTimeout(() => {
      document.body.removeAttribute("data-animating");
      setIsAnimating(false);
    }, 1000);
  };

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

    handleAnimation();
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
        disabled={isAnimating}
        ref={buttonRef}
        className={styles.button}
      >
        <Icon icon="sun" className={styles.sun} />
        <Icon icon="sun" variant="filled" className={styles.sunHover} />
        <Icon icon="moon" className={styles.moon} />
        <Icon icon="moon" variant="filled" className={styles.moonHover} />
      </button>
      <div className={styles.animationContainer}>
        <div
          className={styles.animatedCircle}
          style={{ left: animationCoords.x, top: animationCoords.y }}
        ></div>
      </div>
    </>
  );
};
