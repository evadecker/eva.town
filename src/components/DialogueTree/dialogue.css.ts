import { style } from "@vanilla-extract/css";

export const big = style({
  fontSize: "1.2rem",
});

export const bubble = style({
  backgroundColor: "var(--text)",
  fontVariationSettings: "wdth 90 , wght 450",
  color: "var(--bg)",
  padding: "8px 12px",
});

export const bubblewrap = style({
  position: "absolute",
  bottom: "100%",
  width: "12rem",
  marginBottom: "16px",
  display: "flex",
  justifyContent: "center",
});

export const character = style({
  display: "inline-block",
  whiteSpace: "pre",
});

export const container = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "224px",
});

export const continueButton = style({
  position: "absolute",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  background: "none",
  border: "none",
  width: "100%",
  height: "100%",
  inset: "0",
  color: "var(--bg)",
  cursor: "pointer",
});

export const emote = style({
  background: "transparent",
  padding: "0",
  border: "none",
  display: "block",
});

export const emoteImg = style({
  height: "96px",
});

export const emphasized = style({
  display: "inline-block",
  fontVariationSettings: "wdth 90 , wght 600",
});

export const line = style({
  fontFamily: "var(--family-sans)",
  fontSize: "0.8rem",
  lineHeight: "1.2",
  letterSpacing: "0.04em",
  flex: "1",
});

export const option = style({
  fontSize: "15px",
  border: "none",
  background: "white",
  borderRadius: "16px",
  height: "32px",
  padding: "4px 12px",
  marginBottom: "4px",
  fontStyle: "italic",
  cursor: "pointer",
});

export const options = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  marginRight: "16px",
  marginBottom: "4px",
});

export const speaker = style({
  position: "relative",
  display: "flex",
  justifyContent: "center",
});

export const word = style({
  display: "inline-block",
});
