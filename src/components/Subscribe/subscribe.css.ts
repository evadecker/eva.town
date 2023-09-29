import { globalStyle, style } from "@vanilla-extract/css";

import { theme } from "../../styles/theme.css";
import { tokens } from "../../styles/tokens.css";

export const form = style({
  marginTop: "-0.6rem",
});

export const pixelArt = style({
  width: "72px",
  height: "72px",
  marginInlineStart: "0.5rem",
});

export const inputWrapper = style({
  display: "flex",
  flexDirection: "row",
});

globalStyle(`${inputWrapper} > :first-child`, {
  borderTopLeftRadius: tokens.radius[2],
  borderBottomLeftRadius: tokens.radius[2],
});

globalStyle(`${inputWrapper} > :last-child`, {
  borderTopRightRadius: tokens.radius[2],
  borderBottomRightRadius: tokens.radius[2],
});

export const input = style({
  width: "100%",
  padding: "0.5rem 1rem 0.5rem 0",
  textIndent: "1rem",
  border: "none",
  color: theme.text.default,
  background: theme.elementBg.default,
  ":hover": {
    background: theme.elementBg.hover,
  },
  ":focus": {
    outline: `2px solid ${theme.border.outline}`,
  },
});

export const button = style({
  background: theme.solidBg.default,
  padding: "0.5rem 1rem",
  border: "none",
  cursor: "pointer",
  ":hover": {
    background: theme.solidBg.hover,
  },
});
