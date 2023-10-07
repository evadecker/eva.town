import { globalStyle, style } from "@vanilla-extract/css";

export const header = style({
  fontSize: "var(--text-h5)",
  fontVariationSettings:
    "'wdth' var(--font-width-normal), 'wght' var(--font-weight-medium)",
  lineHeight: "var(--line-height-h5)",
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
  color: "var(--mauve-12)",
  background: "var(--mauve-3)",
  padding: "0 1em",
  paddingInlineEnd: "3rem",
  ":hover": {
    background: "var(--mauve-4)",
  },
  ":focus": {
    outline: "2px solid var(--plumA-9)",
  },
  ":disabled": {
    pointerEvents: "none",
  },
});

export const iconButton = style({
  background: "var(--plum-9)",
  color: "white",
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  right: "0.5rem",
  width: "48px",
  height: "32px",
  padding: "0",
  borderRadius: "var(--radius-full)",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ":hover": {
    background: "var(--plum-10)",
  },
  ":disabled": {
    background: "var(--plum-9)",
    opacity: 0.8,
    pointerEvents: "none",
  },
});

export const sniperLink = style({
  background: "var(--plum-9)",
  color: "white",
  fontVariationSettings:
    "'wdth' var(--font-width-normal), 'wght' var(--font-weight-medium)",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "row",
  borderRadius: "var(--radius-md)",
  padding: "0 0.5rem",
  ":hover": {
    background: "var(--plum-10)",
  },
});

export const checkInbox = style({
  background: "var(--mauve-3)",
  color: "var(--mauve-12)",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

globalStyle(`${input}, ${sniperLink}, ${checkInbox}`, {
  height: "3rem",
  width: "100%",
  border: "none",
  borderRadius: "var(--radius-full)",
  lineHeight: "1",
});

export const arrow = style({
  flexShrink: "0",
  position: "relative",
  marginInlineStart: "auto",
  marginInlineEnd: "0.25rem",
});

export const sniperLogo = style({
  backgroundColor: "white",
  width: "48px",
  height: "32px",
  padding: "0.25rem",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  marginInlineEnd: "0.75rem",
  borderRadius: "var(--radius-full)",
});

globalStyle(`${sniperLogo} img`, {
  width: "24px",
});
