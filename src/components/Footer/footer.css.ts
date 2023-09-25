import { theme } from "@styles/theme.css";
import { tokens } from "@styles/tokens.css";
import { style } from "@vanilla-extract/css";

export const footer = style({
  borderTop: "1px solid",
  borderColor: theme.border.default,
  fontFamily: tokens.fontFamily.sans,
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
  padding: tokens.space.lg,
  paddingBottom: tokens.space.md,
});

export const links = style({
  paddingBottom: tokens.space.md,
});

export const linkCol = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

export const link = style({
  display: "inline",
  ":hover": {
    textDecoration: "underline",
  },
});

export const dialogue = style({
  alignSelf: "flex-end",
});

export const lastTended = style({
  color: theme.text.subtle,
});
