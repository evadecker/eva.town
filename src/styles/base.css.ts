import { globalStyle, style } from "@vanilla-extract/css";

import { theme } from "./theme.css";
import { tokens } from "./tokens.css";

// ======================
// Typography
// ======================

globalStyle("html", {
  fontSize: "100%",
});

globalStyle("[data-theme='dark']", {
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
});

globalStyle("body", {
  fontSize: tokens.fontSize.body,
  fontFamily: tokens.fontFamily.sans,
  fontFeatureSettings: '"ss02" 1', // Use opentail g
  fontVariationSettings: `'wdth' ${tokens.fontWidth.normal}, 'wght' ${theme.fontWeight.normal}`,
  lineHeight: tokens.lineHeight.body,
  textRendering: "optimizeLegibility",
});

globalStyle("::selection", {
  background: theme.text.selection,
});

globalStyle("h1", {
  fontSize: tokens.fontSize.h1,
  fontVariationSettings: `'wdth' ${tokens.fontWidth.wide}, 'wght' ${theme.fontWeight.medium}`,
  lineHeight: tokens.lineHeight.h1,
  letterSpacing: tokens.letterSpacing.condensed,
});

globalStyle("h2", {
  fontSize: tokens.fontSize.h2,
  fontVariationSettings: `'wdth' ${tokens.fontWidth.normal}, 'wght' ${theme.fontWeight.normal}`,
  lineHeight: tokens.lineHeight.h2,
  letterSpacing: tokens.letterSpacing.condensed,
});

globalStyle("h3", {
  fontSize: tokens.fontSize.h3,
  fontVariationSettings: `'wdth' ${tokens.fontWidth.normal}, 'wght' ${theme.fontWeight.medium}`,
  lineHeight: tokens.lineHeight.h3,
});

globalStyle("h4", {
  fontSize: tokens.fontSize.h4,
  fontVariationSettings: `'wdth' ${tokens.fontWidth.normal}, 'wght' ${theme.fontWeight.medium}`,
  lineHeight: tokens.lineHeight.h4,
});

globalStyle("h5", {
  fontSize: tokens.fontSize.h5,
  fontVariationSettings: `'wdth' ${tokens.fontWidth.normal}, 'wght' ${theme.fontWeight.medium}`,
  lineHeight: tokens.lineHeight.h5,
});

globalStyle("h6", {
  fontSize: tokens.fontSize.body,
  fontVariationSettings: `'wdth' ${tokens.fontWidth.normal}, 'wght' ${theme.fontWeight.medium}`,
  lineHeight: tokens.lineHeight.h6,
});

globalStyle("small", {
  fontSize: tokens.fontSize.small,
  lineHeight: tokens.lineHeight.small,
  letterSpacing: tokens.letterSpacing.loose,
});

globalStyle("code, pre", {
  fontFamily: tokens.fontFamily.mono,
});

// ======================
// Layout
// ======================

globalStyle("html, body", {
  height: "100%",
});

globalStyle("body", {
  color: theme.text.default,
  backgroundColor: theme.appBg.default,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

globalStyle("main", {
  flex: 1,
  width: "100%",
  paddingBottom: "4rem",
});

// ======================
// Animation
// ======================

globalStyle("body[data-animating]", {
  transitionProperty: "color, background-color, fontVariationSettings",
  transitionDuration: "1s",
  transitionTimingFunction: "ease-in-out",
});

globalStyle("body[data-animating] svg *", {
  transition: "fill 1s ease-in-out",
});

// ======================
// Helpers
// ======================

export const visuallyHidden = style({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: "1px",
  overflow: "hidden",
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px",
});
