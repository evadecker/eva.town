import { globalStyle } from "@vanilla-extract/css";

import { theme } from "./theme.css";

globalStyle("html, body", {
  height: "100%",
  fontFamily: theme.fontFamily.serif,
  fontSize: theme.fontSize.body.mobile,
  lineHeight: 1.4,
  fontVariationSettings: '"wdth" 100, "wght" 450',
  textRendering: "optimizeLegibility",

  "@media": {
    "screen and (width >= 620px)": {
      fontSize: theme.fontSize.body.tablet,
    },
    "screen and (width >= 820px)": {
      fontSize: theme.fontSize.body.desktop,
    },
  },
});

globalStyle("body", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  color: theme.text.default,
  backgroundColor: theme.background.default,
});

globalStyle("body[data-theme='dark']", {
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
});

globalStyle("body[data-animating]", {
  transition: "color 1s ease-in-out, background-color 1s ease-in-out",
});

globalStyle("body[data-animating] svg *", {
  transition: "fill 1s ease-in-out",
});

globalStyle("main", {
  flex: 1,
  padding: theme.space.lg,
  paddingTop: 0,
  width: "100%",
});

globalStyle("h1", {
  fontSize: theme.fontSize.h1,
  fontFamily: theme.fontFamily.sans,
});

globalStyle("h2", {
  fontSize: theme.fontSize.h2,
  fontFamily: theme.fontFamily.sans,
});

globalStyle("h3", {
  fontSize: theme.fontSize.h3,
  fontFamily: theme.fontFamily.sans,
});

globalStyle("h4", {
  fontSize: theme.fontSize.h4,
  fontFamily: theme.fontFamily.sans,
});

globalStyle("h5", {
  fontSize: theme.fontSize.h5,
  fontFamily: theme.fontFamily.sans,
});

globalStyle("h6", {
  fontFamily: theme.fontFamily.sans,
});

globalStyle("small", {
  fontSize: theme.fontSize.small,
});

globalStyle("code, pre", {
  fontFamily: theme.fontFamily.mono,
});
