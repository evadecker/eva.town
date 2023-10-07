import { style } from "@vanilla-extract/css";

export const header = style({
  padding: "3rem 0",
});

export const designs = style({
  "::before": {
    content: "✦",
    color: "var(--mauve-11)",
  },
  "::after": {
    content: "✦",
    color: "var(--mauve-11)",
  },
});

export const builds = style({
  "::before": {
    content: "✸",
    color: "var(--mauve-11)",
  },
  "::after": {
    content: "✸",
    color: "var(--mauve-11)",
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
  fontSize: "var(--text-h5)",
  fontFamily: "var(--font-sans)",
  fontVariationSettings: `'wdth' var(--font-width-normal), 'wght' var(--font-weight-normal)`,
  lineHeight: "var(--line-height-h5)",
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
