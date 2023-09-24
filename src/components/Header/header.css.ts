import { theme } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const header = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `${theme.space.md} ${theme.space.lg}`,
});

export const wordmark = style({
  fontFamily: theme.fontFamily.sans,
  fontVariationSettings: '"wdth" 125, "wght" 600',
  textDecoration: "none",
});
