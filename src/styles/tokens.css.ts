import { createGlobalTheme, globalFontFace } from "@vanilla-extract/css";

const firaCode = "fira-code";

globalFontFace(firaCode, {
  src: 'url("/fonts/FiraCode-VF.woff2") format("woff2")',
  fontStyle: "normal",
});

export const tokens = createGlobalTheme(":root", {
  fontFamily: {
    sans: 'roc-grotesk-variable, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    serif:
      'loretta-variable, Georgia, Cambria, "Times New Roman", Times, serif',
    mono: `${firaCode}, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
  },

  // https://utopia.fyi/type/calculator?c=320,16,1.125,800,22,1.2,6,1,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12
  fontSize: {
    h1: "clamp(2.03rem, 0.64rem + 6.93vw, 4.11rem)",
    // Skip one step in the scale clamp(1.80rem, 0.72rem + 5.40vw, 3.42rem)
    h2: "clamp(1.60rem, 0.77rem + 4.16vw, 2.85rem)",
    h3: "clamp(1.42rem, 0.79rem + 3.18vw, 2.38rem)",
    h4: "clamp(1.27rem, 0.79rem + 2.38vw, 1.98rem)",
    h5: "clamp(1.13rem, 0.78rem + 1.75vw, 1.65rem)",
    body: "clamp(1.00rem, 0.75rem + 1.25vw, 1.38rem)",
    small: "clamp(0.89rem, 0.72rem + 0.86vw, 1.15rem)",
  },

  fontWidth: {
    normal: "93",
    wide: "115",
    extraWide: "125",
    superWide: "150",
  },

  lineHeight: {
    h1: "1",
    h2: "1.1",
    h3: "1.2",
    h4: "1.3",
    h5: "1.4",
    h6: "1.4",
    body: "1.55",
    small: "1.4",
  },

  letterSpacing: {
    condensed: "-0.01em",
    normal: "0",
    loose: "0.03em",
  },

  radius: {
    1: "4px",
    2: "8px",
    3: "16px",
    4: "24px",
    100: "9999px",
  },

  breakpoint: {
    xs: "520px",
    sm: "768px",
    md: "1024px",
    lg: "1280px",
    xl: "1640px",
  },
});
