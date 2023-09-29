import { globalStyle, style } from "@vanilla-extract/css";

import { theme } from "../styles/theme.css";
import { tokens } from "../styles/tokens.css";

export const main = style({
  paddingBottom: "4rem",
});

export const article = style({
  margin: "0 auto",
});

export const articleBody = style({
  selectors: {
    "&::after": {
      content: "⁂",
      display: "block",
      textAlign: "center",
      paddingTop: "3rem",
      paddingBottom: "3rem",
      fontSize: tokens.fontSize.h3,
    },
  },
});

export const header = style({
  padding: `2rem 0 5rem`,
});

export const subtitle = style({
  fontSize: tokens.fontSize.h4,
  fontFamily: tokens.fontFamily.sans,
  fontVariationSettings: `'wdth' ${tokens.fontWidth.normal}, 'wght' ${theme.fontWeight.medium}`,
  lineHeight: tokens.lineHeight.h4,
});

globalStyle(`${articleBody} p, ${articleBody} ol, ${articleBody} ul`, {
  fontFamily: tokens.fontFamily.serif,
  fontVariationSettings: `'wght' ${theme.fontWeight.prose}`,
});

globalStyle(`${articleBody} :not(h1, h2, h3, h4, h5, h6) a`, {
  boxShadow: `inset 0 -2px ${theme.text.linkUnderline}`,
});

globalStyle(`${article} a:hover`, {
  borderRadius: tokens.radius[1],
  backgroundColor: theme.text.linkBg,
  boxShadow: `0 0 0 3px ${theme.text.linkBg}`,
  color: theme.text.link,
});

globalStyle(
  `${article} h2, ${article} h3, ${article} h4, ${article} h5, ${article} h6`,
  {
    scrollMarginTop: "3rem",
    marginBottom: "1rem",
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
  marginTop: "4rem",
});

globalStyle(`${article} h2:first-child`, {
  marginTop: 0,
});

globalStyle(`${article} p + p`, {
  textIndent: "2rem",
});

globalStyle(`${articleBody} * + ul, ${articleBody} * + ol`, {
  marginTop: "1em",
});

globalStyle(`${articleBody} ul ul, ${articleBody} ol ol`, {
  marginTop: "0",
});

globalStyle(`${articleBody} ul, ${articleBody} ol`, {
  listStyleType: "none",
  paddingLeft: "2.5rem",
});

globalStyle(`${articleBody} li`, {
  position: "relative",
});

globalStyle(`${articleBody} li::before`, {
  position: "absolute",
  width: "2.5rem",
  left: "-2.5rem",
  color: theme.text.subtle,
});

globalStyle(`${articleBody} ul li::before`, {
  content: "→",
  fontSize: "1.3em",
  lineHeight: "1.3",
});

globalStyle(`${articleBody} ol li::before`, {
  fontFamily: tokens.fontFamily.sans,
  content: "counter(list-item, decimal-leading-zero)",
  fontVariantNumeric: "tabular-nums",
});

globalStyle(`${article} code`, {
  backgroundColor: theme.text.codeBg,
  borderRadius: tokens.radius[1],
  fontVariationSettings: `'wght' ${theme.fontWeight.code}`,
  padding: "0.1rem 0.2rem",
  fontSize: "0.8em",
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
