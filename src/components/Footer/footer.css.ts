import { style } from "@vanilla-extract/css";

import { theme } from "../../styles/theme.css";
import { tokens } from "../../styles/tokens.css";
<<<<<<< HEAD
=======

export const footer = style({
  borderTop: "1px solid",
  borderColor: theme.border.default,
  display: "flex",
  width: "100%",
  selectors: {
    "body[data-animating] &": {
      transition: "border-color 1s ease-in-out",
    },
  },
});
>>>>>>> 65aa62e2534c21d3a7ffcef53356869ad74ddfd4

export const footer = style({
  background: theme.appBg.subtle,
  width: "100%",
  padding: `${tokens.space[6]} 0`,
});

export const links = style({
  paddingBottom: tokens.space[4],
  display: "flex",
  flexDirection: "row",
});

export const linkCol = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  paddingRight: tokens.space[8],
});

export const link = style({
  padding: `${tokens.space[1]} 0`,
  display: "inline-flex",
  alignItems: "center",
  ":hover": {
    textDecoration: "underline",
  },
});

export const linkIcon = style({
  color: theme.text.inlineIcon,
  marginRight: tokens.space[2],
});

export const dialogue = style({
  alignSelf: "flex-end",
});

export const inputWrapper = style({
  display: "flex",
  flexDirection: "row",
});

export const input = style({
  width: "100%",
  padding: `${tokens.space[2]} ${tokens.space[4]}`,
  border: "none",
  borderRadius: tokens.radius[2],
  color: theme.text.default,
  background: theme.elementBg.default,
  ":hover": {
    background: theme.elementBg.hover,
  },
  ":focus": {
    outline: `2px solid ${theme.color.plum9}`,
  },
});

export const button = style({
  padding: `${tokens.space[2]} ${tokens.space[4]}`,
  border: "none",
  background: theme.solidBg.default,
  borderRadius: tokens.radius[2],
  cursor: "pointer",
  ":hover": {
    background: theme.solidBg.hover,
  },
});

export const lastTended = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  color: theme.text.subtle,
});

export const lastTendedIcon = style({
  color: theme.text.inlineIcon,
  margin: `0 ${tokens.space[3]} 0 ${tokens.space[1]}`,
});
