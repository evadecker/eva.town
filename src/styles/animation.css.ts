import { globalKeyframes } from "@vanilla-extract/css";

globalKeyframes("appear", {
  "0%": {
    opacity: "0",
  },
  "100%": {
    opacity: "1",
  },
});

globalKeyframes("grow", {
  "0%": {
    transform: "scale(1)",
  },
  "100%": {
    transform: "scale(100)",
  },
});

globalKeyframes("stroke", {
  "0%": {
    stroke: "transparent",
    strokeDashoffset: "1",
  },
  "0.0001%": {
    stroke: "currentColor",
  },
  "100%": {
    strokeDashoffset: "0",
  },
});

globalKeyframes("spin", {
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});
