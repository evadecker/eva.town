import "./toggle-theme.css";

import classNames from "classnames";
import { useEffect, useState } from "react";

import { Icon } from "../Icon/Icon";

type Theme = "light" | "dark";

export const ToggleTheme = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [activeTheme, setActiveTheme] = useState<Theme>(
    document.body.classList.contains("dark") ? "dark" : "light"
  );

  useEffect(() => {
    if (!activeTheme) return;

    // Update class on body
    document.body.classList.remove("light", "dark");
    document.body.classList.add(activeTheme);

    // Update localStorage
    window.localStorage.setItem("theme", activeTheme);
  }, [activeTheme]);

  return (
    <>
      <button
        type="button"
        data-theme-toggle
        aria-label="Toggle theme"
        onClick={() => {
          setActiveTheme(activeTheme === "light" ? "dark" : "light");
        }}
        onMouseOver={() => {
          setIsHovering(true);
        }}
        onMouseOut={() => {
          setIsHovering(false);
        }}
        className="toggleButton"
      >
        <Icon
          icon="sun"
          variant={isHovering ? "filled" : "line"}
          className={classNames("sun", {
            active: activeTheme === "light",
          })}
        />
        <Icon
          icon="moon"
          variant={isHovering ? "filled" : "line"}
          className={classNames("moon", {
            active: activeTheme === "dark",
          })}
        />
      </button>
    </>
  );
};
