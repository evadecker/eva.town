import { globalStyle } from "@vanilla-extract/css";

import { fontFamily, fontSize, space, theme } from "./theme.css";

// ======================
// Typography
// ======================

globalStyle("html", {
  fontSize: fontSize.base.mobile,

  "@media": {
    "screen and (min-width: 620px)": {
      fontSize: fontSize.base.tablet,
    },
    "screen and (min-width: 820px)": {
      fontSize: fontSize.base.desktop,
    },
  },
});

globalStyle("body[data-global.'dark']", {
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
});

globalStyle("body", {
  // rems won't work properly on body so we have to use em here
  // use rem everywhere else
  // fontSize: "1em",
  fontFamily: fontFamily.serif,
  lineHeight: 1.4,
  textRendering: "optimizeLegibility",
});

globalStyle("h1", {
  fontSize: fontSize.h1,
  fontFamily: fontFamily.sans,
  lineHeight: 1,
  letterSpacing: "-0.01em",
});

globalStyle("h2", {
  fontSize: fontSize.h2,
  fontFamily: fontFamily.sans,
  lineHeight: 1.1,
});

globalStyle("h3", {
  fontSize: fontSize.h3,
  fontFamily: fontFamily.sans,
  lineHeight: 1.2,
});

globalStyle("h4", {
  fontSize: fontSize.h4,
  fontFamily: fontFamily.sans,
  lineHeight: 1.3,
});

globalStyle("h5", {
  fontSize: fontSize.h5,
  fontFamily: fontFamily.sans,
  lineHeight: 1.4,
});

globalStyle("h6", {
  fontSize: fontSize.h6,
  fontFamily: fontFamily.sans,
  lineHeight: 1.4,
});

globalStyle("[role='doc-subtitle']", {
  fontSize: fontSize.h3,
  fontFamily: fontFamily.sans,
  lineHeight: 1.2,
});

globalStyle("small", {
  fontSize: fontSize.small,
  letterSpacing: "0.03em",
});

globalStyle("code, pre", {
  fontFamily: fontFamily.mono,
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
  padding: space.lg,
  paddingTop: 0,
  width: "100%",
});

// ======================
// Animation
// ======================

globalStyle("body[data-animating]", {
  transition: "color 1s ease-in-out, background-color 1s ease-in-out",
});

globalStyle("body[data-animating] svg *", {
  transition: "fill 1s ease-in-out",
});
