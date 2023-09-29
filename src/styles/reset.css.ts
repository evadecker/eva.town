import { globalStyle } from "@vanilla-extract/css";

globalStyle("*", {
  margin: 0,
  scrollBehavior: "smooth",
});

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
});

globalStyle("body", {
  WebkitFontSmoothing: "antialiased",
});

globalStyle("img, picture, video, canvas, svg", {
  display: "block",
  maxWidth: "100%",
  height: "auto",
});

globalStyle("input, button, textarea, select", {
  font: "inherit",
});

globalStyle("p, h1, h2, h3, h4, h5, h6", {
  overflowWrap: "break-word",
});

globalStyle("a", {
  color: "unset",
  textDecoration: "none",
});
