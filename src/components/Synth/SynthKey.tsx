import { useStore } from "@nanostores/react";
import classNames from "classnames";

import {
  $isLoading,
  $isShowingKeyboardLetters,
  pressKey,
  releaseAllKeys,
  releaseKey,
} from "../../stores/synth";

type WhiteKey =
  | "C3"
  | "D3"
  | "E3"
  | "F3"
  | "G3"
  | "A3"
  | "B3"
  | "C4"
  | "D4"
  | "E4";

type BlackKey =
  | "Csharp3"
  | "Dsharp3"
  | "Fsharp3"
  | "Gsharp3"
  | "Asharp3"
  | "Csharp4"
  | "Dsharp4";

export type NoteName = WhiteKey | BlackKey;

interface SynthKeyProps {
  note: NoteName;
  isPressed: boolean;
  isMouseDown: boolean;
}

const Crack = () => {
  return <rect x="0" y="0" width="24" height="82" className="crack"></rect>;
};

export const SynthKey = ({ note, isPressed, isMouseDown }: SynthKeyProps) => {
  const isTouchDevice = window.matchMedia("(pointer:coarse)").matches;

  const isSynthLoading = useStore($isLoading);
  const isShowingKeyboardLetters = useStore($isShowingKeyboardLetters);

  const whiteKeyClasses = classNames("synthKey", "white", {
    pressed: isPressed,
  });

  const blackKeyClasses = classNames("synthKey", "black", {
    pressed: isPressed,
  });

  const keyLetterClasses = classNames("keyLetter", {
    visible: isShowingKeyboardLetters && !isTouchDevice,
  });

  const getInteractionHandlers = (note: NoteName, isMouseDown: boolean) => {
    const mouseHandlers = {
      onMouseDown: () => {
        pressKey(note);
      },
      onMouseEnter: () => {
        if (isMouseDown) pressKey(note);
      },
      onMouseUp: () => {
        releaseKey(note);
      },
      onMouseOut: () => {
        releaseKey(note);
      },
    };

    const touchHandlers = {
      onTouchStart: () => {
        pressKey(note);
      },
      onTouchEnd: () => {
        releaseAllKeys();
      },
    };

    const handlers = isTouchDevice ? touchHandlers : mouseHandlers;

    return !isSynthLoading ? { ...handlers } : null;
  };

  switch (note) {
    case "C3":
      return (
        <g
          {...getInteractionHandlers("C3", isMouseDown)}
          className={whiteKeyClasses}
          transform="translate(2.000000, 2.000000)"
        >
          <Crack />
          <path
            d="M0,1.99749826 C0,0.894310431 0.893397331,0 1.99188419,0 L15,0 L15,44 L20,44 L20,78.0002927 C20,79.1047006 19.1017876,80 18.0092049,80 L1.99079514,80 C0.891309342,80 0,79.1015625 0,78.0025017 L0,1.99749826 Z"
            className="base"
          ></path>
          <path
            d="M15.024,73 L12.704,73 L12.032,70.984 L7.984,70.984 L7.296,73 L4.976,73 L9.12,61.608 L10.864,61.608 L15.024,73 Z M11.44,69.112 L10.048,64.968 L8.608,69.112 L11.44,69.112 Z"
            className={keyLetterClasses}
            style={{ transitionDelay: "0.05s" }}
          ></path>
          <path
            d="M20,76.0025017 L20,80.0025017 C20,81.1056896 19.1017876,82 18.0092049,82 L1.99079514,82 C0.891309342,82 0,81.1015625 0,80.0025017 L0,76.0025017 C0,77.1015625 0.891309342,78 1.99079514,78 L18.0092049,78 C19.1017876,78 20,77.1056896 20,76.0025017 Z"
            className="pressedOverlay"
          ></path>
        </g>
      );

    case "D3":
      return (
        <g
          {...getInteractionHandlers("D3", isMouseDown)}
          className={whiteKeyClasses}
          transform="translate(22.000000, 2.000000)"
        >
          <Crack />
          <path
            d="M7,0 L17,0 L17,44 L22,44 L22,78.0002927 C22,79.1047006 21.1017876,80 20.0092049,80 L3.99079514,80 C2.89130934,80 2,79.1101074 2,78.0002927 L2,44 L7,44 L7,0 Z"
            className="base"
          ></path>
          <path
            d="M15.96,69.64 C15.96,71.848 14.12,73.096 11.736,73.096 C10.008,73.096 8.696,72.728 7.576,71.592 L9.016,70.152 C9.736,70.872 10.712,71.112 11.768,71.112 C13.08,71.112 13.784,70.616 13.784,69.704 C13.784,69.304 13.672,68.968 13.432,68.744 C13.208,68.536 12.952,68.424 12.424,68.344 L11.048,68.152 C10.072,68.008 9.352,67.704 8.84,67.208 C8.296,66.664 8.024,65.928 8.024,64.968 C8.024,62.936 9.528,61.512 11.992,61.512 C13.56,61.512 14.696,61.896 15.672,62.84 L14.264,64.232 C13.544,63.544 12.68,63.448 11.928,63.448 C10.744,63.448 10.168,64.104 10.168,64.888 C10.168,65.176 10.264,65.48 10.504,65.704 C10.728,65.912 11.096,66.088 11.56,66.152 L12.904,66.344 C13.944,66.488 14.6,66.776 15.08,67.224 C15.688,67.8 15.96,68.632 15.96,69.64 Z"
            className={keyLetterClasses}
            style={{ transitionDelay: "0.1s" }}
          ></path>
          <path
            d="M22,76.0025017 L22,80.0025017 C22,81.1056896 21.1017876,82 20.0092049,82 L3.99079514,82 C2.89130934,82 2,81.1015625 2,80.0025017 L2,76.0025017 C2,77.1015625 2.89130934,78 3.99079514,78 L20.0092049,78 C21.1017876,78 22,77.1056896 22,76.0025017 Z"
            className="pressedOverlay"
          ></path>
        </g>
      );

    case "E3":
      return (
        <g
          {...getInteractionHandlers("E3", isMouseDown)}
          className={whiteKeyClasses}
          transform="translate(44.000000, 2.000000)"
        >
          <Crack />
          <path
            d="M7,0 L22,0 L22,78.0025017 C22,79.1056896 21.1017876,80 20.0092049,80 L3.99079514,80 C2.89130934,80 2,79.1101693 2,78.0004317 L2,44.0025017 L7,44 L7,0 Z"
            className="base"
          ></path>
          <path
            d="M16.328,67.256 C16.328,68.968 16.456,70.632 15.176,71.912 C14.424,72.664 13.352,73 12.168,73 L8.056,73 L8.056,61.608 L12.168,61.608 C13.352,61.608 14.424,61.944 15.176,62.696 C16.456,63.976 16.328,65.544 16.328,67.256 Z M14.104,67.256 C14.104,65.528 14.04,64.808 13.624,64.296 C13.24,63.832 12.728,63.592 11.96,63.592 L10.28,63.592 L10.28,71.016 L11.96,71.016 C12.728,71.016 13.24,70.776 13.624,70.312 C14.04,69.8 14.104,68.984 14.104,67.256 Z"
            className={keyLetterClasses}
            style={{ transitionDelay: "0.15s" }}
          ></path>
          <path
            d="M22,76.0025017 L22,80.0025017 C22,81.1056896 21.1017876,82 20.0092049,82 L3.99079514,82 C2.89130934,82 2,81.1015625 2,80.0025017 L2,76.0025017 C2,77.1015625 2.89130934,78 3.99079514,78 L20.0092049,78 C21.1017876,78 22,77.1056896 22,76.0025017 Z"
            className="pressedOverlay"
          ></path>
        </g>
      );

    case "F3":
      return (
        <g
          {...getInteractionHandlers("F3", isMouseDown)}
          className={whiteKeyClasses}
          transform="translate(66.000000, 2.000000)"
        >
          <Crack />
          <path
            d="M2,0 L17,0 L17,44 L22,44 L22,78.0002927 C22,79.1047006 21.1017876,80 20.0092049,80 L3.99079514,80 C2.89130934,80 2,79.1015625 2,78.0025017 L2,0 Z"
            className="base"
          ></path>
          <polygon
            points="16.112 63.592 10.832 63.592 10.832 66.392 15.328 66.392 15.328 68.376 10.832 68.376 10.832 73 8.608 73 8.608 61.608 16.112 61.608"
            className={keyLetterClasses}
            style={{ transitionDelay: "0.2s" }}
          ></polygon>
          <path
            d="M22,76.0025017 L22,80.0025017 C22,81.1056896 21.1017876,82 20.0092049,82 L3.99079514,82 C2.89130934,82 2,81.1015625 2,80.0025017 L2,76.0025017 C2,77.1015625 2.89130934,78 3.99079514,78 L20.0092049,78 C21.1017876,78 22,77.1056896 22,76.0025017 Z"
            className="pressedOverlay"
          ></path>
        </g>
      );

    case "G3":
      return (
        <g
          {...getInteractionHandlers("G3", isMouseDown)}
          className={whiteKeyClasses}
          transform="translate(88.000000, 2.000000)"
        >
          <Crack />
          <path
            d="M7,0 L17,0 L17,44 L22,44 L22,78.0002927 C22,79.1047006 21.1017876,80 20.0092049,80 L3.99079514,80 C2.89130934,80 2,79.1101074 2,78.0002927 L2,44 L7,44 L7,0 Z"
            className="base"
          ></path>
          <path
            d="M16.344,68.328 C16.344,69.992 16.04,70.968 15.256,71.8 C14.376,72.696 13.32,73.096 12.04,73.096 C10.824,73.096 9.8,72.68 8.968,71.848 C8.472,71.352 8.168,70.776 8.04,70.136 C7.912,69.496 7.848,68.552 7.848,67.304 C7.848,66.056 7.912,65.112 8.04,64.472 C8.168,63.816 8.472,63.256 8.968,62.76 C9.8,61.928 10.824,61.512 12.04,61.512 C14.632,61.512 16.024,63.176 16.328,65.16 L14.088,65.16 C13.816,64.056 13.144,63.496 12.04,63.496 C11.448,63.496 10.968,63.704 10.616,64.104 C10.2,64.632 10.072,65.048 10.072,67.304 C10.072,69.544 10.168,69.992 10.616,70.52 C10.952,70.92 11.432,71.112 12.04,71.112 C12.696,71.112 13.224,70.904 13.624,70.472 C13.96,70.088 14.136,69.576 14.136,68.952 L14.136,68.52 L12.04,68.52 L12.04,66.664 L16.344,66.664 L16.344,68.328 Z"
            className={keyLetterClasses}
            style={{ transitionDelay: "0.25s" }}
          ></path>
          <path
            d="M22,76.0025017 L22,80.0025017 C22,81.1056896 21.1017876,82 20.0092049,82 L3.99079514,82 C2.89130934,82 2,81.1015625 2,80.0025017 L2,76.0025017 C2,77.1015625 2.89130934,78 3.99079514,78 L20.0092049,78 C21.1017876,78 22,77.1056896 22,76.0025017 Z"
            className="pressedOverlay"
          ></path>
        </g>
      );

    case "A3":
      return (
        <g
          {...getInteractionHandlers("A3", isMouseDown)}
          className={whiteKeyClasses}
          transform="translate(110.000000, 2.000000)"
        >
          <Crack />
          <path
            d="M7,0 L17,0 L17,44 L22,44 L22,78.0002927 C22,79.1047006 21.1017876,80 20.0092049,80 L3.99079514,80 C2.89130934,80 2,79.1101074 2,78.0002927 L2,44 L7,44 L7,0 Z"
            className="base"
          ></path>
          <polygon
            points="16.152 73 13.928 73 13.928 68.232 10.072 68.232 10.072 73 7.848 73 7.848 61.608 10.072 61.608 10.072 66.264 13.928 66.264 13.928 61.608 16.152 61.608"
            className={keyLetterClasses}
            style={{ transitionDelay: "0.3s" }}
          ></polygon>
          <path
            d="M22,76.0025017 L22,80.0025017 C22,81.1056896 21.1017876,82 20.0092049,82 L3.99079514,82 C2.89130934,82 2,81.1015625 2,80.0025017 L2,76.0025017 C2,77.1015625 2.89130934,78 3.99079514,78 L20.0092049,78 C21.1017876,78 22,77.1056896 22,76.0025017 Z"
            className="pressedOverlay"
          ></path>
        </g>
      );

    case "B3":
      return (
        <g
          {...getInteractionHandlers("B3", isMouseDown)}
          className={whiteKeyClasses}
          transform="translate(132.000000, 2.000000)"
        >
          <Crack />
          <path
            d="M7,0 L22,0 L22,78.0025017 C22,79.1056896 21.1017876,80 20.0092049,80 L3.99079514,80 C2.89130934,80 2,79.1101693 2,78.0004317 L2,44.0025017 L7,44 L7,0 Z"
            className="base"
          ></path>
          <path
            d="M14.904,69.256 C14.904,71.768 13,73.096 10.888,73.096 C9.656,73.096 8.808,72.776 7.96,71.928 L9.432,70.472 C9.8,70.84 10.152,71.112 10.888,71.112 C11.976,71.112 12.68,70.472 12.68,69.16 L12.68,61.608 L14.904,61.608 L14.904,69.256 Z"
            className={keyLetterClasses}
            style={{ transitionDelay: "0.35s" }}
          ></path>
          <path
            d="M22,76.0025017 L22,80.0025017 C22,81.1056896 21.1017876,82 20.0092049,82 L3.99079514,82 C2.89130934,82 2,81.1015625 2,80.0025017 L2,76.0025017 C2,77.1015625 2.89130934,78 3.99079514,78 L20.0092049,78 C21.1017876,78 22,77.1056896 22,76.0025017 Z"
            className="pressedOverlay"
          ></path>
        </g>
      );

    case "C4":
      return (
        <g
          {...getInteractionHandlers("C4", isMouseDown)}
          className={whiteKeyClasses}
          transform="translate(154.000000, 2.000000)"
        >
          <Crack />
          <path
            d="M2,0 L17,0 L17,44 L22,44 L22,78.0002927 C22,79.1047006 21.1017876,80 20.0092049,80 L3.99079514,80 C2.89130934,80 2,79.1015625 2,78.0025017 L2,0 Z"
            className="base"
          ></path>
          <polygon
            points="17.224 73 14.632 73 11.704 67.816 10.232 69.576 10.232 73 8.008 73 8.008 61.608 10.232 61.608 10.232 66.568 14.248 61.608 16.952 61.608 13.176 66.136"
            className={keyLetterClasses}
            style={{ transitionDelay: "0.4s" }}
          ></polygon>
          <path
            d="M22,76.0025017 L22,80.0025017 C22,81.1056896 21.1017876,82 20.0092049,82 L3.99079514,82 C2.89130934,82 2,81.1015625 2,80.0025017 L2,76.0025017 C2,77.1015625 2.89130934,78 3.99079514,78 L20.0092049,78 C21.1017876,78 22,77.1056896 22,76.0025017 Z"
            className="pressedOverlay"
          ></path>
        </g>
      );

    case "D4":
      return (
        <g
          {...getInteractionHandlers("D4", isMouseDown)}
          className={whiteKeyClasses}
          transform="translate(176.000000, 2.000000)"
        >
          <Crack />
          <path
            d="M7,0 L17,0 L17,44 L22,44 L22,78.0002927 C22,79.1047006 21.1017876,80 20.0092049,80 L3.99079514,80 C2.89130934,80 2,79.1101074 2,78.0002927 L2,44 L7,44 L7,0 Z"
            className="base"
          ></path>
          <polygon
            points="16.12 73 8.728 73 8.728 61.608 10.952 61.608 10.952 71.016 16.12 71.016"
            className={keyLetterClasses}
            style={{ transitionDelay: "0.45s" }}
          ></polygon>
          <path
            d="M22,76.0025017 L22,80.0025017 C22,81.1056896 21.1017876,82 20.0092049,82 L3.99079514,82 C2.89130934,82 2,81.1015625 2,80.0025017 L2,76.0025017 C2,77.1015625 2.89130934,78 3.99079514,78 L20.0092049,78 C21.1017876,78 22,77.1056896 22,76.0025017 Z"
            className="pressedOverlay"
          ></path>
        </g>
      );

    case "E4":
      return (
        <g
          {...getInteractionHandlers("E4", isMouseDown)}
          className={whiteKeyClasses}
          transform="translate(198.000000, 2.000000)"
        >
          <Crack />
          <path
            d="M7,0 L20.0081158,0 C21.1082031,0 22,0.8984375 22,1.99749826 L22,78.0025017 C22,79.1056896 21.1017876,80 20.0092049,80 L3.99079514,80 C2.89130934,80 2,79.1101693 2,78.0004317 L2,44.0025017 L7,44 L7,0 Z"
            className="base"
          ></path>
          <path
            d="M13.336,73.88 L11.064,75.64 L11.064,70.728 L13.336,70.728 L13.336,73.88 Z M13.384,68.664 L11.016,68.664 L11.016,66.296 L13.384,66.296 L13.384,68.664 Z"
            className={keyLetterClasses}
            style={{ transitionDelay: "0.5s" }}
          ></path>
          <path
            d="M22,76.0025017 L22,80.0025017 C22,81.1056896 21.1017876,82 20.0092049,82 L3.99079514,82 C2.89130934,82 2,81.1015625 2,80.0025017 L2,76.0025017 C2,77.1015625 2.89130934,78 3.99079514,78 L20.0092049,78 C21.1017876,78 22,77.1056896 22,76.0025017 Z"
            className="pressedOverlay"
          ></path>
        </g>
      );

    case "Csharp3":
      return (
        <g
          {...getInteractionHandlers("Csharp3", isMouseDown)}
          className={blackKeyClasses}
          transform="translate(17.000000, 2.000000)"
        >
          <path
            d="M0,44.5 L0,0 L12,0 L12,44.5 C11.7047411,46.4731558 9.64777059,48 7.2,48 L4.8,48 C2.35222941,48 0.295258853,46.4731558 0,44.5 Z"
            className="base"
          ></path>
          <path
            d="M10,39 L10,44 C10,45.1045695 8.80609267,46 7.33333333,46 L4.66666667,46 C3.19390733,46 2,45.1045695 2,44 L2,39 C2,38.4477153 2.59695367,38 3.33333333,38 L8.66666667,38 C9.40304633,38 10,38.4477153 10,39 Z"
            className="highlight"
          ></path>
        </g>
      );

    case "Dsharp3":
      return (
        <g
          {...getInteractionHandlers("Dsharp3", isMouseDown)}
          className={blackKeyClasses}
          transform="translate(39.000000, 2.000000)"
        >
          <path
            d="M0,44.5 L0,0 L12,0 L12,44.5 C11.7047411,46.4731558 9.64777059,48 7.2,48 L4.8,48 C2.35222941,48 0.295258853,46.4731558 0,44.5 Z"
            className="base"
          ></path>
          <path
            d="M10,39 L10,44 C10,45.1045695 8.80609267,46 7.33333333,46 L4.66666667,46 C3.19390733,46 2,45.1045695 2,44 L2,39 C2,38.4477153 2.59695367,38 3.33333333,38 L8.66666667,38 C9.40304633,38 10,38.4477153 10,39 Z"
            className="highlight"
          ></path>
        </g>
      );

    case "Fsharp3":
      return (
        <g
          {...getInteractionHandlers("Fsharp3", isMouseDown)}
          className={blackKeyClasses}
          transform="translate(83.000000, 2.000000)"
        >
          <path
            d="M0,44.5 L0,0 L12,0 L12,44.5 C11.7047411,46.4731558 9.64777059,48 7.2,48 L4.8,48 C2.35222941,48 0.295258853,46.4731558 0,44.5 Z"
            className="base"
          ></path>
          <path
            d="M10,39 L10,44 C10,45.1045695 8.80609267,46 7.33333333,46 L4.66666667,46 C3.19390733,46 2,45.1045695 2,44 L2,39 C2,38.4477153 2.59695367,38 3.33333333,38 L8.66666667,38 C9.40304633,38 10,38.4477153 10,39 Z"
            className="highlight"
          ></path>
        </g>
      );

    case "Gsharp3":
      return (
        <g
          {...getInteractionHandlers("Gsharp3", isMouseDown)}
          className={blackKeyClasses}
          transform="translate(105.000000, 2.000000)"
        >
          <path
            d="M0,44.5 L0,0 L12,0 L12,44.5 C11.7047411,46.4731558 9.64777059,48 7.2,48 L4.8,48 C2.35222941,48 0.295258853,46.4731558 0,44.5 Z"
            className="base"
          ></path>
          <path
            d="M10,39 L10,44 C10,45.1045695 8.80609267,46 7.33333333,46 L4.66666667,46 C3.19390733,46 2,45.1045695 2,44 L2,39 C2,38.4477153 2.59695367,38 3.33333333,38 L8.66666667,38 C9.40304633,38 10,38.4477153 10,39 Z"
            className="highlight"
          ></path>
        </g>
      );

    case "Asharp3":
      return (
        <g
          {...getInteractionHandlers("Asharp3", isMouseDown)}
          className={blackKeyClasses}
          transform="translate(127.000000, 2.000000)"
        >
          <path
            d="M0,44.5 L0,0 L12,0 L12,44.5 C11.7047411,46.4731558 9.64777059,48 7.2,48 L4.8,48 C2.35222941,48 0.295258853,46.4731558 0,44.5 Z"
            className="base"
          ></path>
          <path
            d="M10,39 L10,44 C10,45.1045695 8.80609267,46 7.33333333,46 L4.66666667,46 C3.19390733,46 2,45.1045695 2,44 L2,39 C2,38.4477153 2.59695367,38 3.33333333,38 L8.66666667,38 C9.40304633,38 10,38.4477153 10,39 Z"
            className="highlight"
          ></path>
        </g>
      );

    case "Csharp4":
      return (
        <g
          {...getInteractionHandlers("Csharp4", isMouseDown)}
          className={blackKeyClasses}
          transform="translate(171.000000, 2.000000)"
        >
          <path
            d="M0,44.5 L0,0 L12,0 L12,44.5 C11.7047411,46.4731558 9.64777059,48 7.2,48 L4.8,48 C2.35222941,48 0.295258853,46.4731558 0,44.5 Z"
            className="base"
          ></path>
          <path
            d="M10,39 L10,44 C10,45.1045695 8.80609267,46 7.33333333,46 L4.66666667,46 C3.19390733,46 2,45.1045695 2,44 L2,39 C2,38.4477153 2.59695367,38 3.33333333,38 L8.66666667,38 C9.40304633,38 10,38.4477153 10,39 Z"
            className="highlight"
          ></path>
        </g>
      );

    case "Dsharp4":
      return (
        <g
          {...getInteractionHandlers("Dsharp4", isMouseDown)}
          className={blackKeyClasses}
          transform="translate(193.000000, 2.000000)"
        >
          <path
            d="M0,44.5 L0,0 L12,0 L12,44.5 C11.7047411,46.4731558 9.64777059,48 7.2,48 L4.8,48 C2.35222941,48 0.295258853,46.4731558 0,44.5 Z"
            className="base"
          ></path>
          <path
            d="M10,39 L10,44 C10,45.1045695 8.80609267,46 7.33333333,46 L4.66666667,46 C3.19390733,46 2,45.1045695 2,44 L2,39 C2,38.4477153 2.59695367,38 3.33333333,38 L8.66666667,38 C9.40304633,38 10,38.4477153 10,39 Z"
            className="highlight"
          ></path>
        </g>
      );
  }
};
