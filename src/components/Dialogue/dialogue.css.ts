import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-end",
  height: "96px",
  padding: "0 0.5rem",
  marginTop: "-8px",
});

export const bubble = style({
  backgroundColor: "var(--mauve-3)",
  padding: "0.5rem 1rem",
  fontFamily: "var(--font-family-sans)",
  fontSize: "var(--text-small)",
  lineHeight: "1.1",
  letterSpacing: "var(--letter-spacing-loose)",
  alignSelf: "center",
});

export const big = style({
  fontSize: "var(--text-h5)",
});

export const character = style({
  display: "inline-block",
  whiteSpace: "pre",
});

export const emote = style({
  width: "auto",
  height: "100%",
  marginInlineEnd: "1rem",
  userSelect: "none",
  flexShrink: "0",
});

export const emphasized = style({
  display: "inline-block",
  fontVariationSettings: `'wdth' var(--font-width-normal), 'wght' var(--font-weight-medium)`,
});

export const word = style({
  display: "inline-block",
});
