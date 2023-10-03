import { globalStyle, style } from "@vanilla-extract/css";

import { theme } from "../../styles/theme.css";
import { tokens } from "../../styles/tokens.css";

export const header = style({
  fontSize: tokens.fontSize.h5,
  fontVariationSettings: `'wdth' ${tokens.fontWidth.normal}, 'wght' ${theme.fontWeight.medium}`,
  lineHeight: tokens.lineHeight.h5,
});

export const form = style({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const inputWrapper = style({
  position: "relative",
  width: "100%",
  selectors: {
    "&[aria-disabled=true]": {
      pointerEvents: "none",
    },
  },
});

export const loading = style({
  animation: "spin 1s linear infinite",
});

export const input = style({
  color: theme.text.default,
  background: theme.elementBg.default,
  padding: "0 1em",
  paddingInlineEnd: "3rem",
  ":hover": {
    background: theme.elementBg.hover,
  },
  ":focus": {
    outline: `2px solid ${theme.border.outline}`,
  },
  ":disabled": {
    pointerEvents: "none",
  },
});

export const iconButton = style({
  background: theme.solidBg.default,
  color: theme.color.whiteA12,
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  right: "0.5rem",
  width: "48px",
  height: "32px",
  padding: "0",
  borderRadius: tokens.radius[100],
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ":hover": {
    background: theme.solidBg.hover,
  },
  ":disabled": {
    background: theme.solidBg.default,
    opacity: 0.8,
    pointerEvents: "none",
  },
});

export const sniperLink = style({
  background: theme.solidBg.default,
  color: theme.color.whiteA12,
  fontVariationSettings: `'wdth' ${tokens.fontWidth.normal}, 'wght' ${theme.fontWeight.medium}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "row",
  borderRadius: tokens.radius[3],
  padding: "0 0.5rem",
  ":hover": {
    background: theme.solidBg.hover,
  },
});

export const checkInbox = style({
  background: theme.elementBg.default,
  color: theme.text.default,
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

globalStyle(`${input}, ${sniperLink}, ${checkInbox}`, {
  height: "3rem",
  width: "100%",
  border: "none",
  borderRadius: tokens.radius[100],
  lineHeight: "1",
});

export const arrow = style({
  flexShrink: "0",
  position: "relative",
  marginInlineStart: "auto",
  marginInlineEnd: "0.25rem",
});

export const sniperLogo = style({
  backgroundColor: theme.color.whiteA12,
  width: "48px",
  height: "32px",
  padding: "0.25rem",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  marginInlineEnd: "0.75rem",
  borderRadius: tokens.radius[100],
});

globalStyle(`${sniperLogo} img`, {
  width: "24px",
});
