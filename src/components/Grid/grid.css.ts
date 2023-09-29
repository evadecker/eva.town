import { style } from "@vanilla-extract/css";

export const grid = style({
  display: "grid",
  gridGap: "2rem",
  "@supports": {
    "(width: min(200px, 100%))": {
      gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))",
    },
  },
});
