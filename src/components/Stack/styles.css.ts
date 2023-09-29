import { globalStyle, style } from "@vanilla-extract/css";

export const stack = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
});

export const horizontal = style({
  flexDirection: "row",
});

globalStyle(`${stack} > *`, {
  marginBlock: "0",
});

globalStyle(`${stack}:not(${horizontal}) > * + *`, {
  marginBlockStart: "1rem",
});

globalStyle(`${stack}${horizontal} > * + *`, {
  marginBlockStart: "0",
  marginInlineStart: "1rem",
});
