import { globalStyle, style } from "@vanilla-extract/css";

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
      fontSize: "var(--text-h3)",
    },
  },
});

export const header = style({
  padding: `2rem 0 5rem`,
});

export const subtitle = style({
  fontSize: "var(--text-h4)",
  fontFamily: "var(--font-sans)",
  fontVariationSettings: `'wdth' var(--font-width-normal), 'wght' var(--font-weight-medium)`,
  lineHeight: "var(--line-height-h4)",
});

globalStyle(`${articleBody} p, ${articleBody} ol, ${articleBody} ul`, {
  fontFamily: "var(--font-serif)",
  fontVariationSettings: `'wght' var(--font-weight-prose)`,
});

globalStyle(`${articleBody} :not(h1, h2, h3, h4, h5, h6) a`, {
  boxShadow: "inset 0 -2px var(--mauve-7)",
  // Visual alignment and increasing tap target
  paddingBlock: "0.3rem 0.1rem",
  marginBlock: "-0.3rem -0.1rem",
});

globalStyle(`${article} a:hover`, {
  borderRadius: "var(--radius-sm)",
  backgroundColor: "var(--plum-3)",
  boxShadow: "0 0 0 3px var(--plum-3)",
  color: "var(--plum-11)",
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
    color: "var(--mauve-11)",
    display: "inline-flex",
    alignItems: "center",
    marginLeft: "0.3em",
    padding: "0.05em",
  }
);

globalStyle(
  `${article} h1 a svg, ${article} h2 a svg, ${article} h3 a svg, ${article} h4 a svg, ${article} h5 a svg, ${article} h6 a svg`,
  {
    width: "var(--text-body)",
    height: "var(--text-body)",
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
  marginBottom: "1em",
});

globalStyle(`${articleBody} ul ul, ${articleBody} ol ol`, {
  marginTop: "0",
  marginBottom: "0",
});

globalStyle(`${articleBody} ul, ${articleBody} ol`, {
  listStyleType: "none",
  paddingLeft: "2rem",
});

globalStyle(`${articleBody} li`, {
  position: "relative",
});

globalStyle(`${articleBody} li::before`, {
  position: "absolute",
  width: "2rem",
  left: "-2rem",
  color: "var(--mauve-11)",
});

globalStyle(`${articleBody} ul li::before`, {
  content: "→",
  fontSize: "1.3em",
  lineHeight: "1.3",
});

globalStyle(`${articleBody} ol li::before`, {
  fontFamily: "var(--font-sans)",
  content: "counter(list-item, decimal-leading-zero)",
  fontVariantNumeric: "tabular-nums",
});

globalStyle(`${article} code`, {
  backgroundColor: "var(--mauve-3)",
  borderRadius: "var(--radius-xs)",
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
  borderBottom: `2px dotted var(--mauve-7)`,
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
});
