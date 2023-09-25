import { globalStyle } from "@vanilla-extract/css";

import { theme } from "./theme.css";
import { tokens } from "./tokens.css";

// ======================
// Typography
// ======================

globalStyle("html", {
  fontSize: tokens.fontSize.base.mobile,

  "@media": {
    "screen and (min-width: 620px)": {
      fontSize: tokens.fontSize.base.tablet,
    },
    "screen and (min-width: 820px)": {
      fontSize: tokens.fontSize.base.desktop,
    },
  },
});

globalStyle("[data-theme='dark']", {
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
});

globalStyle("body", {
  fontFamily: tokens.fontFamily.serif,
  // These variations only apply to the sans serif
  fontVariationSettings: `'wdth' ${tokens.fontWidth.normal}, 'wght' ${theme.fontWeight.normal}`,
  lineHeight: 1.4,
  textRendering: "optimizeLegibility",
});

globalStyle("::selection", {
  background: theme.text.selection,
});

globalStyle("h1", {
  fontSize: tokens.fontSize.h1,
  fontFamily: tokens.fontFamily.sans,
  fontVariationSettings: `'wdth' ${tokens.fontWidth.wide}, 'wght' ${theme.fontWeight.medium}`,
  lineHeight: tokens.lineHeight.h1,
  letterSpacing: tokens.letterSpacing.condensed,
});

globalStyle("h2", {
  fontSize: tokens.fontSize.h2,
  fontFamily: tokens.fontFamily.sans,
  fontVariationSettings: `'wdth' ${tokens.fontWidth.wide}, 'wght' ${theme.fontWeight.medium}`,
  lineHeight: tokens.lineHeight.h2,
});

globalStyle("h3", {
  fontSize: tokens.fontSize.h3,
  fontFamily: tokens.fontFamily.sans,
  fontVariationSettings: `'wdth' ${tokens.fontWidth.wide}, 'wght' ${theme.fontWeight.medium}`,
  lineHeight: tokens.lineHeight.h3,
});

globalStyle("h4", {
  fontSize: tokens.fontSize.h4,
  fontFamily: tokens.fontFamily.sans,
  fontVariationSettings: `'wdth' ${tokens.fontWidth.wide}, 'wght' ${theme.fontWeight.bold}`,
  lineHeight: tokens.lineHeight.h4,
});

globalStyle("h5", {
  fontSize: tokens.fontSize.h5,
  fontFamily: tokens.fontFamily.sans,
  fontVariationSettings: `'wdth' ${tokens.fontWidth.wide}, 'wght' ${theme.fontWeight.bold}`,
  lineHeight: tokens.lineHeight.h5,
});

globalStyle("h6", {
  fontSize: tokens.fontSize.h6,
  fontFamily: tokens.fontFamily.sans,
  fontVariationSettings: `'wdth' ${tokens.fontWidth.wide}, 'wght' ${theme.fontWeight.bold}`,
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
  backgroundColor: theme.background.default,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

globalStyle("main", {
  flex: 1,
  padding: tokens.space.lg,
  paddingTop: 0,
  width: "100%",
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
