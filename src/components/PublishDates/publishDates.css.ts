import { theme } from "@styles/theme.css";
import { tokens } from "@styles/tokens.css";
import { style } from "@vanilla-extract/css";

export const publishDates = style({
  fontSize: tokens.fontSize.small,
  letterSpacing: tokens.letterSpacing.loose,
  fontVariationSettings: `'wdth' ${tokens.fontWidth.normal}, 'wght' ${theme.fontWeight.normal}`,
  marginTop: "1rem",
  color: theme.text.subtle,
});
