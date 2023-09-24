import { theme } from "@styles/theme.css";
import { globalKeyframes, style } from "@vanilla-extract/css";

globalKeyframes("grow", {
  "0%": {
    transform: "scale(1)",
  },
  "100%": {
    transform: "scale(100)",
  },
});

export const animationContainer = style({
  position: "fixed",
  inset: "0",
  overflow: "hidden",
  zIndex: "-1",
  pointerEvents: "none",
});

export const buttonContainer = style({
  position: "relative",
});

export const button = style({
  background: "transparent",
  cursor: "pointer",
  border: "none",
  width: "40px",
  height: "40px",
  borderRadius: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",
  color: theme.text.default,
  transition: "transform 0.2s ease-in-out",
  ":disabled": {
    cursor: "default",
  },
  ":hover": {
    background: theme.background.alt,
  },
});

export const animatedCircle = style({
  position: "absolute",
  left: "0",
  top: "0",
  width: "40px",
  height: "40px",
  background: theme.background.default,
  borderRadius: "100%",
  transformOrigin: "50% 50%",
  selectors: {
    "body[data-animating] &": {
      animation: "grow 1s ease-in",
    },
  },
});

const icon = style({
  transformOrigin: "50% 200%",
  transition: "transform 0.4s ease-out , opacity 0.2s ease-in-out",
  position: "absolute",
  width: "24px",
  height: "24px",
});

export const moon = style([
  icon,
  {
    selectors: {
      "body[data-theme='light'] &": {
        transform: "rotate(60deg)",
      },
    },
  },
]);

export const moonHover = style([
  icon,
  {
    opacity: "0",
    selectors: {
      "body[data-theme='light'] &": {
        transform: "rotate(60deg)",
      },
      "button[data-theme-toggle]:hover &": {
        opacity: "1",
      },
    },
  },
]);

export const sun = style([
  icon,
  {
    selectors: {
      "body[data-theme='dark'] &": {
        transform: "rotate(-60deg)",
      },
    },
  },
]);

export const sunHover = style([
  icon,
  {
    opacity: "0",
    selectors: {
      "body[data-theme='dark'] &": {
        transform: "rotate(-60deg)",
      },
      "button[data-theme-toggle]:hover &": {
        opacity: "1",
      },
    },
  },
]);
