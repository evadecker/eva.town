import { style } from "@vanilla-extract/css";

import { theme } from "../../styles/theme.css";
import { tokens } from "../../styles/tokens.css";

export const header = style({
  width: "100%",
  padding: `${tokens.space[4]} ${tokens.space[5]}`,
});

export const headerContents = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const wordmark = style({
  fontFamily: tokens.fontFamily.sans,
  fontVariationSettings: `"wdth" ${tokens.fontWidth.wide}, "wght" ${theme.fontWeight.bold}`,
  textDecoration: "none",
});

export const toggleTheme = style({
  position: "relative",
  width: "40px",
  height: "40px",
});
