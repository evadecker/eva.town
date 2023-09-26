import { theme } from "@styles/theme.css";
import { tokens } from "@styles/tokens.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const article = style({
  maxWidth: tokens.breakpoint.sm,
  margin: "0 auto",
});

export const articleBody = style({
  selectors: {
    "&::after": {
      content: "⁂",
      display: "block",
      textAlign: "center",
      paddingTop: tokens.space[9],
      paddingBottom: tokens.space[9],
      fontSize: tokens.fontSize.h3,
      color: theme.text.inlineIcon,
    },
  },
});

export const header = style({
  padding: `2em 0 6em`,
});

export const subtitle = style({
  fontSize: tokens.fontSize.h4,
  fontFamily: tokens.fontFamily.sans,
  fontVariationSettings: `'wdth' ${tokens.fontWidth.normal}, 'wght' ${theme.fontWeight.normal}`,
  lineHeight: tokens.lineHeight.h4,
  color: theme.text.subtle,
  marginTop: "0.3em",
});

globalStyle(`${article} p a`, {
  boxShadow: `inset 0 -2px ${theme.text.linkUnderline}`,
});

globalStyle(`${article} a:hover`, {
  borderRadius: tokens.radius[1],
  backgroundColor: theme.text.linkBg,
  boxShadow: `0 0 0 3px ${theme.text.linkBg}`,
  color: theme.text.link,
});

globalStyle(
  `${article} h1, ${article} h2, ${article} h3, ${article} h4, ${article} h5, ${article} h6`,
  {
    scrollMarginTop: tokens.space[5],
  }
);

globalStyle(
  `${article} h1 a, ${article} h2 a, ${article} h3 a, ${article} h4 a, ${article} h5 a, ${article} h6 a`,
  {
    color: theme.text.subtle,
    display: "inline-flex",
    alignItems: "center",
    marginLeft: "0.3em",
    padding: "0.05em",
  }
);

globalStyle(
  `${article} h1 a svg, ${article} h2 a svg, ${article} h3 a svg, ${article} h4 a svg, ${article} h5 a svg, ${article} h6 a svg`,
  {
    width: tokens.fontSize.body,
    height: tokens.fontSize.body,
  }
);

globalStyle(`${article} h2`, {
  marginTop: "2em",
});

globalStyle(`${article} h2:first-child`, {
  marginTop: 0,
});

globalStyle(`${articleBody} * + p`, {
  marginTop: "1em",
});

globalStyle(`${article} code`, {
  fontSize: "0.85em",
});

globalStyle(`${article} abbr`, {
  borderBottom: `none`,
  textDecoration: "none",
  position: "relative",
  cursor: "help",
});

globalStyle(`${article} abbr::after`, {
  content: "",
  height: "2px",
  borderBottom: `2px dotted ${theme.text.linkUnderline}`,
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
});
