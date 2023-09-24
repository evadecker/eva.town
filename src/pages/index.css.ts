import { fontFamily, fontSize } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const header = style({
  maxWidth: "540px",
  textAlign: "left",
});

export const subtitle = style({
  fontSize: fontSize.h5,
  fontFamily: fontFamily.sans,
  marginTop: "1em",
});

export const noBreak = style({
  whiteSpace: "nowrap",
});

export const samButton = style({
  all: "unset",
  textDecoration: "underline",
  cursor: "pointer",
});
