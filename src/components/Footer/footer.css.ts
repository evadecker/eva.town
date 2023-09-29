import { style } from "@vanilla-extract/css";

import { theme } from "../../styles/theme.css";
import { tokens } from "../../styles/tokens.css";

export const footer = style({
  background: theme.appBg.subtle,
  width: "100%",
  padding: "2rem 0",
});

export const link = style({
  display: "inline-flex",
  alignItems: "center",
  ":hover": {
    textDecoration: "underline",
  },
});

export const linkIcon = style({
  color: theme.text.inlineIcon,
  marginRight: "0.5rem",
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
  padding: "0.5rem 1rem",
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
  padding: "0.5rem 1rem",
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
  marginRight: "0.75rem",
});
