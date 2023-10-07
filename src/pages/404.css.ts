import { globalKeyframes, style } from "@vanilla-extract/css";

globalKeyframes("text-offset", {
  "0%": {
    clipPath: "polygon(0 110%, 100% 110%, 100% 160%, 0 160%)",
  },
  "100%": {
    clipPath: "polygon(0 -90%, 100% -90%, 100% -10%, 0 -10%)",
  },
});

globalKeyframes("scanline", {
  "0%": {
    transform: "translate3d(0, 100vh, 0)",
  },
  "50%": {
    transform: "translate3d(0, -6px, 0)",
  },
});

globalKeyframes("flicker", {
  "0%": {
    opacity: "0.9",
  },
  "100%": {
    opacity: "1",
  },
});

export const glitchContainer = style({
  position: "absolute",
  inset: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  overflow: "hidden",
  zIndex: "-1",
  animation: "flicker 20ms infinite",
});

export const scanlines = style({
  position: "absolute",
  inset: "0",
  overflow: "hidden",
  pointerEvents: "none",
  background:
    "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAALElEQVQYV2NkYGD4/x9IMAIxAxoDmzhIHfU0gCxFB9S1AacfsFmNJQzAoQIAH84j/OCkeYUAAAAASUVORK5CYII=)",
  backgroundSize: "12px 6px",
  mixBlendMode: "color-dodge",
  opacity: "0.5",
  "::after": {
    content: "",
    position: "absolute",
    width: "100%",
    background: "white",
    opacity: "0.05",
    height: "6px",
    animation: "scanline 5s linear infinite",
  },
});

export const textClip = style({
  position: "absolute",
  top: "0",
  left: "-0.3rem",
  textShadow: `-1.5px 0 0 blue , 1.5px 0 0 red , 0 1.5px 0 lime , 0.35rem 0 0 var(--mauve-1) , 4px 4px 0 var(--mauve-1)`,
  animation: "text-offset 8s linear infinite",
  transition: "text-shadow 1s ease-in-out",
});

export const subtitle = style({
  fontSize: "clamp(60px,10vw,180px)",
  fontVariationSettings: "'wdth' 140, 'wght' 700",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  whiteSpace: "nowrap",
  "@media": {
    "screen and (max-width: 600px)": {
      fontSize: "20vw",
      fontVariationSettings: "'wdth' 60, 'wght' 500",
    },
  },
});

export const text = style({
  fontFamily: "var(--font-sans)",
  position: "relative",
  zIndex: "-1",
  lineHeight: "0.8",
  letterSpacing: "0.02em",
  pointerEvents: "none",
  userSelect: "none",
  textAlign: "center",
  textShadow: "-1.5px 0 0 blue, 1.5px 0 0 red, 0 1.5px 0 green",
  filter: "blur(1.5px)",
  "@media": {
    "screen and (max-width: 600px)": {
      lineHeight: "0.7",
    },
  },
});

export const title = style({
  fontSize: "clamp(180px, 30vw, 400px)",
  fontVariationSettings: "'wdth' 150, 'wght' 700",
  "@media": {
    "screen and (max-width: 600px)": {
      fontSize: "90vw",
      fontVariationSettings: "'wdth' 50, 'wght' 300",
    },
  },
});
