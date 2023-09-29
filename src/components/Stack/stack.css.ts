import { globalStyle, style } from "@vanilla-extract/css";

export const stack = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
});

export const tight = style({});

globalStyle(`${stack} > *`, {
  marginBlock: "0",
});

globalStyle(`${stack} > * + *`, {
  marginBlockStart: "1rem",
});

globalStyle(`${stack}${tight} > * + *`, {
  marginBlockStart: "0.5rem",
});
