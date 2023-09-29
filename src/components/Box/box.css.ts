import { globalStyle, style } from "@vanilla-extract/css";

import { theme } from "../../styles/theme.css";
import { tokens } from "../../styles/tokens.css";

export const box = style({
  border: `1px solid ${theme.border.subtle}`,
  padding: "2rem",
  borderRadius: tokens.radius[3],
});

globalStyle(`body[data-animating] ${box}`, {
  transition: "border 0.5s ease-in-out",
});
