import { theme } from "@styles/theme.css";
import { tokens } from "@styles/tokens.css";
import { style } from "@vanilla-extract/css";

export const footer = style({
  borderTop: "1px solid",
  borderColor: theme.border.default,
  display: "flex",
  width: "100%",
  selectors: {
    "body[data-animating] &": {
      transition: "border-color 1s ease-in-out",
    },
  },
});

export const footerContent = style({
  marginRight: "auto",
  padding: tokens.space[5],
  paddingBottom: tokens.space[4],
});

export const links = style({
  paddingBottom: tokens.space[4],
  display: "flex",
  flexDirection: "row",
});

export const linkCol = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  paddingRight: tokens.space[8],
});

export const link = style({
  padding: `${tokens.space[1]} 0`,
  display: "inline-flex",
  alignItems: "center",
});

export const linkText = style({
  selectors: {
    [`${link}:hover &`]: {
      textDecoration: "underline",
    },
  },
});

export const linkIcon = style({
  color: theme.text.inlineIcon,
  marginRight: tokens.space[2],
});

export const dialogue = style({
  alignSelf: "flex-end",
});

export const lastTended = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  color: theme.text.subtle,
});

export const lastTendedIcon = style({
  color: theme.text.inlineIcon,
  margin: `0 ${tokens.space[3]} 0 ${tokens.space[1]}`,
});
