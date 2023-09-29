import { style } from "@vanilla-extract/css";

export const center = style({
  boxSizing: "content-box",
  marginInline: "auto",
  maxInlineSize: "70ch",
  paddingInlineStart: "1.5rem",
  paddingInlineEnd: "1.5rem",
});
