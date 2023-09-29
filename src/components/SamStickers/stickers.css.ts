import { style } from "@vanilla-extract/css";

import { theme } from "../../styles/theme.css";
import { tokens } from "../../styles/tokens.css";

export const shoo = style({
  all: "unset",
  position: "fixed",
  background: theme.text.default,
  color: theme.appBg.default,
  padding: "1rem 2rem",
  borderRadius: tokens.radius[2],
  right: "2rem",
  bottom: "2rem",
  fontVariationSettings: "wght 600",
  cursor: "pointer",
  pointerEvents: "auto",
  zIndex: "500",
});

export const sticker = style({
  position: "absolute",
  width: "200px",
  pointerEvents: "none",
  ":active": {
    cursor: "grabbing",
    pointerEvents: "auto",
  },
});

export const stickerPath = style({
  pointerEvents: "auto",
  cursor: "grab",
  ":hover": {
    stroke: theme.color.plum9,
    strokeWidth: "6px",
  },
  selectors: {
    [`${sticker}:active &`]: {
      stroke: theme.color.plum9,
      strokeWidth: "6px",
    },
  },
});

export const stickerPicture = style({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  userSelect: "none",
});

export const stickerSvg = style({
  pointerEvents: "fill",
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  userSelect: "none",
});

export const stickers = style({
  position: "absolute",
  inset: "0",
  pointerEvents: "none",
  overflow: "hidden",
  userSelect: "none",
});
