import { blackA, plum, plumDark, whiteA } from "@radix-ui/colors";
import { createTheme, createThemeContract } from "@vanilla-extract/css";

export const theme = createThemeContract({
  background: {
    default: "",
    alt: "",
  },
  text: {
    default: "",
    subtle: "",
    selection: "",
  },
  border: {
    default: "",
    subtle: "",
  },
  fontWeight: {
    normal: "",
    medium: "",
    bold: "",
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
    selection: plum.plum8,
  },
  border: {
    default: plum.plum4,
    subtle: plum.plum3,
  },
  fontWeight: {
    normal: "440",
    medium: "500",
    bold: "700",
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
    default: plumDark.plum12,
    subtle: plumDark.plum11,
    selection: plumDark.plum8,
  },
  border: {
    default: plumDark.plum4,
    subtle: plumDark.plum3,
  },
  // Weights on dark background slightly reduced to reduce bleed
  fontWeight: {
    normal: "380",
    medium: "420",
    bold: "620",
  },
  color: {
    ...plumDark,
    ...blackA,
    ...whiteA,
  },
});
