import { globalKeyframes, style } from "@vanilla-extract/css";

globalKeyframes("press-start", {
  "0%, 10%": {
    opacity: "0.8",
  },
  "100%": {
    opacity: "1",
  },
});

export const loading = style({
  pointerEvents: "none",
});

export const instrumentArrow = style({
  cursor: "pointer",
});

export const lcdBase = style({
  fill: theme.synth.lcd.medium,
  get selectors() {
    return {
      [`${instrumentArrow}:hover &`]: {
        fill: theme.synth.lcd.dark,
      },
      [`${synthStart}:hover &`]: {
        opacity: "1",
        fill: theme.synth.lcd.dark,
      },
      [`${synthInstrument} &`]: {
        fill: theme.synth.lcd.dark,
      },
      [`${synthInstrument}:hover &`]: {
        fill: theme.synth.lcd.dark,
      },
      [`${synthStart}:not(:hover) &`]: {
        animation: "press-start 2s infinite",
      },
    };
  },
});

export const black = style({});

export const fadeout = style({});

export const hasTouch = style({});

export const pressed = style({});

export const synthInstrument = style({});

export const lcdBg = style({
  fill: theme.synth.lcd.bg,
});

export const lcdHighlight = style({
  fill: theme.synth.lcd.light,
});

export const lcdOutline = style({
  fill: theme.synth.lcdOutline,
});

export const notehead = style({
  fill: theme.synth.lcd.dark,
});

export const synthBase = style({
  fill: theme.synth.base,
});

export const synthBetweenKeys = style({
  fill: theme.synth.betweenKeys,
});

export const synthEndcap = style({
  fill: theme.synth.endcap,
});

export const synthKey = style({
  cursor: "pointer",
  transition: "fill 0.4s ease-out",
});

export const synthKeysOutline = style({
  fill: theme.synth.keysOutline,
});

export const synthKeysShadow = style({
  fill: "black",
  opacity: "0.1",
});

export const visible = style({});

export const white = style({});

export const synth = style({
  width: "100%",
  maxWidth: "540px",
  marginTop: "2rem",
  selectors: {
    "&[data-loading='true']": {
      pointerEvents: "none",
    },
  },
});

export const synthStart = style({
  cursor: "pointer",
  selectors: {
    [`${synth}[data-enabled='true'] &`]: {
      display: "none",
    },
    [`:not(:hover) &:nth-child(2)`]: {
      animationDelay: "0.2s",
    },
    [`:not(:hover) &:nth-child(3)`]: {
      animationDelay: "0.4s",
    },
    [`:not(:hover) &:nth-child(4)`]: {
      animationDelay: "0.6s",
    },
    [`:not(:hover) &:nth-child(5)`]: {
      animationDelay: "0.8s",
    },
  },
});

export const base = style({
  selectors: {
    [`${synthKey} &`]: {
      transition: "fill 0.4s ease-out",
    },
    [`${synthKey}${black} &`]: {
      fill: theme.synth.blackkey,
    },
    [`${synthKey}${pressed}${white} &`]: {
      transition: "none",
      fill: theme.synth.whitekeyPressed,
    },
    [`${synthKey}${pressed}${black} &`]: {
      transition: "none",
      fill: theme.synth.blackkeyPressed,
    },
    [`${synthKey}${white} &`]: {
      fill: theme.synth.whitekey,
    },
  },
});

export const crack = style({
  selectors: {
    [`${synthKey} &`]: {
      fill: theme.synth.keysOutline,
      opacity: "0",
      transition: "opacity 0.4s ease-out",
    },
    [`${synthKey}${pressed} &`]: {
      transition: "none",
      opacity: "1",
    },
  },
});

export const highlight = style({
  selectors: {
    [`${synthKey}${black} &`]: {
      fill: theme.color.whiteA12,
      fillOpacity: "0.15",
    },
  },
});

export const instrument = style({
  display: "none",
  selectors: {
    [`&${visible}`]: {
      display: "block",
    },
  },
  "@media": {
    "not all and (pointer: coarse)": {
      selectors: {
        [`:not(${loading}) ${synthInstrument}:hover &`]: {
          display: "none",
        },
      },
    },
  },
});

export const keyLetter = style({
  fill: theme.synth.keyLetter,
  fillOpacity: "0.3",
  opacity: "0",
  transform: "translateY(4px)",
  transition: "0.4s ease-out",
  selectors: {
    [`&${visible}`]: {
      opacity: "1",
      transform: "translateY(0)",
    },
  },
});

export const pressedOverlay = style({
  selectors: {
    [`${synthKey} &`]: {
      fill: theme.synth.keysOutline,
      transform: "translateY(2px)",
      transition: "transform 0.1s ease-out",
    },
    [`${synthKey}${pressed} &`]: {
      transition: "none",
      transform: "translateY(0)",
    },
  },
});

export const synthRandomize = style({
  display: "none",
  "@media": {
    "not all and (pointer: coarse)": {
      selectors: {
        [`${synthInstrument}:hover &`]: {
          display: "block",
        },
      },
    },
    "all and (pointer: coarse)": {
      display: "none",
    },
  },
});
