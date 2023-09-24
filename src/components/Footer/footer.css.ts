import { fontFamily, space, theme } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const footer = style({
  borderTop: "1px solid",
  borderColor: theme.border.default,
  fontFamily: fontFamily.sans,
  display: "flex",
  width: "100%",
  selectors: {
    "body[data-animating] &": {
      transition: "border-color 1s ease-in-out",
    },
  },
});

export const linkCol = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

export const links = style({
  padding: space.lg,
  marginRight: "auto",
});

export const link = style({
  display: "inline",
  opacity: "0.7",
  ":hover": {
    opacity: "1",
  },
});

export const dialogue = style({
  alignSelf: "flex-end",
});
