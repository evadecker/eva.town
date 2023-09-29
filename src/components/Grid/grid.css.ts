import { style } from "@vanilla-extract/css";

export const grid = style({
  display: "grid",
  gridGap: "2rem",
  // TODO: Support modifying min via props
  "@supports": {
    "(width: min(160px, 100%))": {
      gridTemplateColumns: "repeat(auto-fit, minmax(min(160px, 100%), 1fr))",
    },
  },
});
