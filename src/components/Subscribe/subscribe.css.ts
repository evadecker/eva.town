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
  width: "100%",
  marginBlockEnd: "0.5rem",

  selectors: {
    "&[aria-disabled=true]": {
      pointerEvents: "none",
    },
  },
});

export const inputIcon = style({
  color: theme.text.iconA,
  position: "absolute",
  marginTop: "-0.1rem",
  top: "calc(50% - 11px)",
  left: "0.5rem",
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
  color: theme.text.default,
  background: theme.elementBg.default,
  lineHeight: "1",
  borderRadius: tokens.radius[2],
  padding: "0.75rem 0.75rem 0.75rem 2.5rem",
  width: "100%",
  border: "none",
  ":hover": {
    background: theme.elementBg.hover,
  },
  ":focus": {
    outline: `2px solid ${theme.border.outline}`,
  },
  ":disabled": {
    pointerEvents: "none",
  },
});

export const button = style({
  background: theme.solidBg.default,
  color: theme.color.whiteA12,
  padding: "0.75rem",
  borderRadius: tokens.radius[2],
  lineHeight: "1",
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
  position: "relative",
  marginBlock: "-0.5rem",
  marginInlineStart: "0.5rem",
});
