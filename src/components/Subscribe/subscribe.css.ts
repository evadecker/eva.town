import { globalKeyframes, style } from "@vanilla-extract/css";

import { theme } from "../../styles/theme.css";
import { tokens } from "../../styles/tokens.css";

export const form = style({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const inputWrapper = style({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginBlockEnd: "0.5rem",
  color: theme.text.default,
  background: theme.elementBg.default,
  borderRadius: tokens.radius[2],
  paddingLeft: "0.75rem",
  ":hover": {
    background: theme.elementBg.hover,
  },
  ":focus-within": {
    outline: `2px solid ${theme.border.outline}`,
  },
  selectors: {
    "&[aria-disabled=true]": {
      pointerEvents: "none",
    },
  },
});

export const inputIcon = style({
  color: theme.text.subtle,
});

globalKeyframes("spin", {
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

export const loading = style({
  animation: "spin 1s linear infinite",
});

export const input = style({
  background: "transparent",
  padding: "0.3rem 0.75rem",
  color: theme.text.default,
  flex: "1",
  outline: "none",
  border: "none",
  ":disabled": {
    pointerEvents: "none",
  },
});

export const button = style({
  background: theme.solidBg.default,
  color: theme.color.whiteA12,
  padding: "0.3rem 1rem",
  borderRadius: tokens.radius[2],
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  cursor: "pointer",
  ":hover": {
    background: theme.solidBg.hover,
  },
  ":disabled": {
    background: theme.solidBg.default,
    opacity: 0.8,
    pointerEvents: "none",
  },
});

export const buttonIcon = style({
  flexShrink: "0",
  width: "24px",
  height: "auto",
  marginInlineEnd: "1rem",
});
