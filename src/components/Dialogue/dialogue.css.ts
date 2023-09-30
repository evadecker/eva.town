import { style } from "@vanilla-extract/css";
import { theme } from "src/styles/theme.css";
import { tokens } from "src/styles/tokens.css";

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
  backgroundColor: theme.elementBg.default,
  padding: "0.5rem 1rem",
  fontFamily: tokens.fontFamily.sans,
  fontSize: tokens.fontSize.small,
  lineHeight: tokens.lineHeight.small,
  letterSpacing: tokens.letterSpacing.loose,
  alignSelf: "center",
});

export const big = style({
  fontSize: tokens.fontSize.h5,
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
  fontVariationSettings: "wdth 90 , wght 600",
});

export const word = style({
  display: "inline-block",
});
