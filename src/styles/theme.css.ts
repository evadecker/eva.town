import { blackA, mauveDark, plum, plumDark, whiteA } from "@radix-ui/colors";
import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
  globalFontFace,
} from "@vanilla-extract/css";

const firaCode = "fira-code";

globalFontFace(firaCode, {
  src: 'url("/fonts/FiraCode-VF.woff2") format("woff2")',
  fontStyle: "normal",
});

export const fontFamily = createGlobalTheme(":root", {
  sans: 'roc-grotesk-variable, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  serif: 'loretta-variable, Georgia, Cambria, "Times New Roman", Times, serif',
  mono: `${firaCode}, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
});

// Major Third Scale
// https://typescale.com
export const fontSize = createGlobalTheme(":root", {
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
});

export const fontWeight = createGlobalTheme(":root", {
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
});

export const space = createGlobalTheme(":root", {
  xxs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  xxl: "40px",
});

export const radius = createGlobalTheme(":root", {
  sm: "8px",
  md: "16px",
  lg: "24px",
  full: "9999px",
});

export const theme = createThemeContract({
  background: {
    default: "",
    alt: "",
  },
  text: {
    default: "",
    subtle: "",
  },
  border: {
    default: "",
    subtle: "",
  },
  color: {
    ...plum,
    ...blackA,
    ...whiteA,
  },
});

export const lightThemeClass = createTheme(theme, {
  background: {
    default: plum.plum1,
    alt: plum.plum2,
  },
  text: {
    default: plum.plum12,
    subtle: plum.plum11,
  },
  border: {
    default: plum.plum3,
    subtle: plum.plum4,
  },
  color: {
    ...plum,
    ...blackA,
    ...whiteA,
  },
});

export const darkThemeClass = createTheme(theme, {
  background: {
    default: plumDark.plum1,
    alt: plumDark.plum2,
  },
  text: {
    default: mauveDark.mauve12,
    subtle: mauveDark.mauve11,
  },
  border: {
    default: plumDark.plum3,
    subtle: plumDark.plum4,
  },
  color: {
    ...plumDark,
    ...blackA,
    ...whiteA,
  },
});
