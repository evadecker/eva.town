import { style } from "@vanilla-extract/css";

export const button = style({
  background: "transparent",
  cursor: "pointer",
  border: "none",
  width: "100%",
  height: "100%",
  borderRadius: "var(--radius-full)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",
  color: "var(--mauve-12)",
  transition: "transform 0.2s ease-in-out",
  ":disabled": {
    cursor: "default",
  },
  ":hover": {
    background: "var(--mauve-4)",
  },
});

const icon = style({
  transformOrigin: "50% 200%",
  transition: "transform 0.4s ease-out , opacity 0.2s ease-in-out",
  position: "absolute",
  width: "24px",
  height: "24px",
  color: "var(--plum-12)",
});

export const moon = style([
  icon,
  {
    selectors: {
      "body.light &": {
        transform: "rotate(60deg)",
      },
    },
  },
]);

export const sun = style([
  icon,
  {
    selectors: {
      "body.dark &": {
        transform: "rotate(-60deg)",
      },
    },
  },
]);
