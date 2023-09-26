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
  padding: `3em 0`,
});

export const subtitle = style({
  fontSize: tokens.fontSize.h4,
  fontFamily: tokens.fontFamily.sans,
  fontVariationSettings: `'wdth' ${tokens.fontWidth.normal}, 'wght' ${theme.fontWeight.normal}`,
  lineHeight: tokens.lineHeight.h4,
  color: theme.text.subtle,
});

globalStyle(`${article} a`, {
  boxShadow: `inset 0 -2px ${theme.text.linkUnderline}`,
});

globalStyle(`${article} a:hover`, {
  borderRadius: tokens.radius[1],
  backgroundColor: theme.text.linkBg,
  boxShadow: `0 0 0 3px ${theme.text.linkBg}`,
  color: theme.text.link,
});

globalStyle(`${article} h1`, {
  marginBottom: tokens.space[4],
});

globalStyle(`${article} h2`, {
  marginTop: "2em",
});

globalStyle(`${article} h2:first-child`, {
  marginTop: 0,
});

globalStyle(`${article} * + p`, {
  marginTop: "1em",
});
