import { style } from "@vanilla-extract/css";

import { theme } from "../../styles/theme.css";
import { tokens } from "../../styles/tokens.css";

export const header = style({
  width: "100%",
  position: "sticky",
  top: "0",
  zIndex: 100,
  backgroundColor: theme.appBg.subtle,
  borderBottom: `1px solid ${theme.border.subtle}`,
});

export const headerContents = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0.5rem 0",
});

export const wordmark = style({
  fontSize: tokens.fontSize.body,
  fontFamily: tokens.fontFamily.sans,
  fontVariationSettings: `"wdth" ${tokens.fontWidth.wide}, "wght" ${theme.fontWeight.bold}`,
  textDecoration: "none",
  position: "relative",
  bottom: "-0.08em",
});

export const toggleTheme = style({
  position: "relative",
  width: "40px",
  height: "40px",
});
