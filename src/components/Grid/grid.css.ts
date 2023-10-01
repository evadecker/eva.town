import { style } from "@vanilla-extract/css";

export const grid = style({
  display: "grid",
  gridGap: "1.5rem",
});

export const regular = style({
  "@supports": {
    "(width: min(200px, 100%))": {
      gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))",
    },
  },
});

export const narrow = style({
  "@supports": {
    "(width: min(80px, 100%))": {
      gridTemplateColumns: "repeat(auto-fit, minmax(min(80px, 100%), 1fr))",
    },
  },
});
