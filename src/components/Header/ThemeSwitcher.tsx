import { useStore } from "@nanostores/react";
import { $preferredTheme, setPreferredTheme, type Theme } from "@stores/theme";
import { darkThemeClass, lightThemeClass, theme } from "@styles/theme.css";
import { useEffect, useRef, useState } from "react";

import * as styles from "./theme-switcher.css";

export const ThemeSwitcher = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [animationCoords, setAnimationCoords] = useState<{
    x?: number;
    y?: number;
  }>({
    x: buttonRef.current?.getBoundingClientRect().left,
    y: buttonRef.current?.getBoundingClientRect().top,
  });

  const preferredTheme = useStore($preferredTheme);

  const getInitialTheme = () => {
    // First check saved preferences
    if (preferredTheme === "dark") {
      return "dark";
    } else if (preferredTheme === "light") {
      return "light";
    }

    // Check media query for OS-level preference
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    if (prefersDarkScheme.matches) {
      return "dark";
    }

    // Else default to light
    return "light";
  };

  const updateMetaTheme = () => {
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme !== null)
      metaTheme.setAttribute("content", theme.background.default);
  };

  const updateClassAndDataAttr = (theme: Theme) => {
    document.body.dataset.theme = theme;
    if (theme === "light") {
      document.body.classList.replace(darkThemeClass, lightThemeClass);
    } else {
      document.body.classList.replace(lightThemeClass, darkThemeClass);
    }
  };

  const enableLightMode = () => {
    setPreferredTheme("light");
    updateClassAndDataAttr("light");
    updateMetaTheme();
  };

  const enableDarkMode = () => {
    setPreferredTheme("dark");
    updateClassAndDataAttr("dark");
    updateMetaTheme();
  };

  const setInitialTheme = () => {
    const initialTheme = getInitialTheme();
    initialTheme === "dark" ? enableDarkMode() : enableLightMode();
  };

  useEffect(() => {
    setInitialTheme();
  });

  const handleAnimationStart = () => {
    document.body.dataset.animating = "";
    setAnimationCoords({
      x: buttonRef.current?.getBoundingClientRect().left,
      y: buttonRef.current?.getBoundingClientRect().top,
    });
    setIsAnimating(true);
    setTimeout(() => {
      handleAnimationEnd();
    }, 1000);
  };

  const handleAnimationEnd = () => {
    document.body.removeAttribute("data-animating");
    setIsAnimating(false);
  };

  const handleClick = () => {
    handleAnimationStart();
    const currentTheme = document.body.dataset.theme;
    currentTheme === "light" ? enableDarkMode() : enableLightMode();
  };

  const sharedSvgProps = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
  };

  return (
    <div className={styles.buttonContainer}>
      <button
        type="button"
        data-theme-toggle
        aria-label="Toggle theme"
        onClick={handleClick}
        disabled={isAnimating}
        ref={buttonRef}
        className={styles.button}
      >
        <svg className={styles.sun} {...sharedSvgProps}>
          <path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path>
        </svg>
        <svg className={styles.sunHover} {...sharedSvgProps}>
          <path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path>
        </svg>
        <svg className={styles.moon} {...sharedSvgProps}>
          <path d="M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z"></path>
        </svg>
        <svg className={styles.moonHover} {...sharedSvgProps}>
          <path d="M11.3807 2.01904C9.91573 3.38786 9 5.33708 9 7.50018C9 11.6423 12.3579 15.0002 16.5 15.0002C18.6631 15.0002 20.6123 14.0844 21.9811 12.6195C21.6613 17.8539 17.3149 22.0002 12 22.0002C6.47715 22.0002 2 17.523 2 12.0002C2 6.68532 6.14629 2.33888 11.3807 2.01904Z"></path>
        </svg>
      </button>
      <div className={styles.animationContainer}>
        <div
          className={styles.animatedCircle}
          style={{ left: animationCoords.x, top: animationCoords.y }}
        ></div>
      </div>
    </div>
  );
};
