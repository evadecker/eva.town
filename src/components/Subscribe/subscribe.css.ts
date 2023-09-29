import { globalStyle, style } from "@vanilla-extract/css";

import { theme } from "../../styles/theme.css";
import { tokens } from "../../styles/tokens.css";

export const subscribe = style({
  border: `1px solid ${theme.border.subtle}`,
  padding: "2rem",
  borderRadius: tokens.radius[2],
});

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
  cursor: "pointer",
  ":hover": {
    background: theme.solidBg.hover,
  },
});

globalStyle(`${input}, ${button}`, {
  padding: "0.5rem 1rem",
  border: "none",
});
