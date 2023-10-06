import { style } from "@vanilla-extract/css";

import { theme } from "../../styles/theme.css";
import { tokens } from "../../styles/tokens.css";

export const box = style({
  border: `1px solid ${theme.border.subtle}`,
  padding: "1.5rem",
  borderRadius: tokens.radius[3],
});
