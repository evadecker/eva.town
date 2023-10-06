import { style } from "@vanilla-extract/css";

import { theme } from "../styles/theme.css";
import { tokens } from "../styles/tokens.css";

export const header = style({
  paddingBottom: "2rem",
});

export const designs = style({
  "::before": {
    content: "✦",
    color: theme.text.subtle,
  },
  "::after": {
    content: "✦",
    color: theme.text.subtle,
  },
});

export const builds = style({
  "::before": {
    content: "✸",
    color: theme.text.subtle,
  },
  "::after": {
    content: "✸",
    color: theme.text.subtle,
  },
});

export const web = style({
  "::after": {
    content: "☺︎",
    width: "3em",
    display: "inline-block",
    textAlign: "right",
  },
});

export const subtitle = style({
  fontSize: tokens.fontSize.h5,
  fontFamily: tokens.fontFamily.sans,
  fontVariationSettings: `'wdth' ${tokens.fontWidth.normal}, 'wght' ${theme.fontWeight.normal}`,
  lineHeight: tokens.lineHeight.h5,
  marginTop: "1em",
});

export const noBreak = style({
  whiteSpace: "nowrap",
});

export const samButton = style({
  all: "unset",
  textDecoration: "underline",
  cursor: "pointer",
});
