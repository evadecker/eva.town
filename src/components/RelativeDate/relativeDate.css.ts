import { style } from "@vanilla-extract/css";

import { theme } from "../../styles/theme.css";

export const date = style({
  display: "inline-flex",
  alignItems: "baseline",
  color: theme.text.subtle,
});

export const icon = style({
  color: theme.text.inlineIcon,
  position: "relative",
  top: "0.15rem",
  marginRight: "0.5rem",
});
