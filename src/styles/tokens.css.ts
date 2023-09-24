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

  // Major Third Scale
  // https://typescale.com
  fontSize: {
    h1: "3.052rem",
    h2: "2.441rem",
    h3: "1.953rem",
    h4: "1.563rem",
    h5: "1.25rem",
    h6: "1rem",
    body: "1rem",
    base: {
      mobile: "112.5%", // 18px
      tablet: "118.8%", // 19px
      desktop: "125%", // 20px
    },
    small: "0.8rem",
  },

  fontWidth: {
    normal: "100",
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
    body: "1.4",
    small: "1.5",
  },

  letterSpacing: {
    condensed: "-0.01em",
    normal: "0",
    loose: "0.03em",
  },

  space: {
    xxs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "40px",
  },

  radius: {
    sm: "8px",
    md: "16px",
    lg: "24px",
    full: "9999px",
  },
});
