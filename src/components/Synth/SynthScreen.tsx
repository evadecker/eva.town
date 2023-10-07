import classNames from "classnames";

import { type NoteName } from "./SynthKey";
import { SynthStaff, type SynthStaffProps } from "./SynthStaff";

interface SynthScreenProps {
  isSynthActive: boolean;
  isSynthLoading: boolean;
  activeInstrument: number;
  activeNotehead: NoteName | null;
  onClickPrev: (e: React.MouseEvent<SVGGElement>) => void;
  onClickNext: (e: React.MouseEvent<SVGGElement>) => void;
  onClickInstrument: (e: React.MouseEvent<SVGGElement>) => void;
}

export const SynthScreen = ({
  isSynthActive,
  isSynthLoading,
  activeInstrument,
  activeNotehead,
  onClickPrev,
  onClickNext,
  onClickInstrument,
}: SynthScreenProps) => {
  const getStaffVariant: () => SynthStaffProps["variant"] = () => {
    if (activeInstrument === 5) return "drag";
    if (activeInstrument === 6) return "butts";
    if (activeInstrument === 7) return "mario";
    return "normal";
  };

  return (
    <g
      id="synth-screen"
      className={classNames({ loading: isSynthLoading })}
      transform="translate(24.000000, 4.000000)"
    >
      <rect
        className="lcdOutline"
        x="0"
        y="0"
        width="222"
        height="52"
        rx="4"
      ></rect>
      <rect className="lcdBg" x="2" y="2" width="218" height="48" rx="2"></rect>
      {isSynthActive && (
        <g transform="translate(108.000000, 6.000000)">
          <g
            className="instrumentArrow"
            fillRule="nonzero"
            onClick={onClickPrev}
          >
            <rect fillOpacity="0" x="0" y="0" width="30" height="40"></rect>
            <polygon
              className="lcdBase"
              points="16 16 16 18 24 18 24 20 16 20 16 22 18 22 18 24 14 24 14 22 10 22 10 20 6 20 6 18 10 18 10 16 14 16 14 14 18 14 18 16"
            ></polygon>
          </g>
          <g
            className="instrumentArrow"
            transform="translate(74.000000, 0.000000)"
            fillRule="nonzero"
            onClick={onClickNext}
          >
            <rect fillOpacity="0" x="0" y="0" width="30" height="40"></rect>
            <polygon
              className="lcdBase"
              points="14 16 12 16 12 14 16 14 16 16 20 16 20 18 24 18 24 20 20 20 20 22 16 22 16 24 12 24 12 22 14 22 14 20 6 20 6 18 14 18"
            ></polygon>
          </g>
          <g
            className="synthInstrument"
            transform="translate(30.000000, 0.000000)"
            onClick={!isSynthLoading ? onClickInstrument : undefined}
            style={{ cursor: isSynthLoading ? "default" : "pointer" }}
          >
            <rect
              fillOpacity="0"
              fillRule="nonzero"
              x="0"
              y="0"
              width="44"
              height="40"
            ></rect>
            <g
              id="piano"
              className={classNames("instrument", {
                visible: activeInstrument === 0,
              })}
              transform="translate(6.000000, 2.000000)"
            >
              <path
                d="M30,26 L30,24 L32,24 L32,28 L2,28 L2,24 L4,24 L4,26 L8,26 L8,24 L10,24 L10,26 L16,26 L16,24 L18,24 L18,26 L22,26 L22,24 L24,24 L24,26 L30,26 Z M10,6 L10,8 L6,8 L6,10 L2,10 L2,2 L14,2 L14,6 L10,6 Z M2,12 L6,12 L6,14 L2,14 L2,12 Z M6,10 L10,10 L10,12 L6,12 L6,10 Z M10,8 L14,8 L14,10 L10,10 L10,8 Z M14,6 L18,6 L18,8 L14,8 L14,6 Z"
                className="lcdHighlight"
              ></path>
              <path
                d="M14,34 L14,32 L6,32 L6,34 L4,34 L4,36 L2,36 L2,30 L0,30 L0,28 L32,28 L32,24 L30,24 L30,26 L24,26 L24,24 L22,24 L22,26 L18,26 L18,24 L16,24 L16,26 L10,26 L10,24 L8,24 L8,26 L4,26 L4,24 L2,24 L2,22 L4,22 L4,20 L8,20 L8,18 L12,18 L12,16 L16,16 L16,14 L20,14 L20,12 L24,12 L24,10 L28,10 L28,8 L30,8 L30,12 L26,12 L26,14 L24,14 L24,16 L28,16 L28,18 L32,18 L32,20 L34,20 L34,30 L32,30 L32,36 L30,36 L30,34 L28,34 L28,32 L16,32 L16,34 L18,34 L18,32 L20,32 L20,34 L22,34 L22,36 L12,36 L12,34 L14,34 Z M4,0 L12,0 L12,2 L4,2 L4,0 Z M2,2 L4,2 L4,4 L2,4 L2,2 Z M12,2 L14,2 L14,4 L12,4 L12,2 Z M16,6 L28,6 L28,8 L16,8 L16,6 Z M14,4 L16,4 L16,6 L14,6 L14,4 Z M0,4 L2,4 L2,28 L0,28 L0,4 Z"
                className="lcdBase"
                fillRule="nonzero"
              ></path>
            </g>
            <g
              id="harp"
              className={classNames("instrument", {
                visible: activeInstrument === 1,
              })}
              transform="translate(8.000000, 0.000000)"
            >
              <path
                d="M20,14 L22,14 L22,24 L20,24 L20,14 Z M24,14 L26,14 L26,20 L24,20 L24,14 Z M16,12 L18,12 L18,28 L16,28 L16,12 Z M12,8 L14,8 L14,32 L12,32 L12,8 Z M8,6 L10,6 L10,36 L8,36 L8,6 Z M4,4 L6,4 L6,36 L4,36 L4,4 Z"
                className="lcdHighlight"
              ></path>
              <path
                d="M4,36 L4,38 L6,38 L6,36 L8,36 L8,38 L10,38 L10,36 L12,36 L12,34 L10,34 L10,32 L12,32 L12,34 L14,34 L14,32 L16,32 L16,30 L14,30 L14,28 L16,28 L16,30 L18,30 L18,28 L20,28 L20,26 L18,26 L18,24 L20,24 L20,26 L22,26 L22,24 L24,24 L24,22 L22,22 L22,20 L24,20 L24,22 L26,22 L26,20 L26,18 L26,14 L20,14 L20,12 L24,12 L24,10 L28,10 L28,22 L26,22 L26,24 L24,24 L24,26 L22,26 L22,28 L20,28 L20,30 L18,30 L18,32 L16,32 L16,34 L14,34 L14,36 L12,36 L12,38 L10,38 L10,40 L4,40 L4,38 L2,38 L2,36 L4,36 Z M0,2 L2,2 L2,0 L8,0 L8,2 L12,2 L12,4 L14,4 L14,6 L16,6 L16,8 L18,8 L18,10 L20,10 L20,12 L16,12 L16,10 L14,10 L14,8 L10,8 L10,6 L0,6 L0,2 Z"
                className="lcdBase"
                fillRule="nonzero"
              ></path>
            </g>
            <g
              id="xylophone"
              className={classNames("instrument", {
                visible: activeInstrument === 2,
              })}
              transform="translate(3.000000, 4.000000)"
            >
              <path
                d="M6,2 L10,2 L10,4 L6,4 L6,28 L4,28 L4,2 L6,2 Z M30,8 L34,8 L34,10 L30,10 L30,22 L28,22 L28,8 L30,8 Z M22,6 L26,6 L26,8 L22,8 L22,24 L20,24 L20,6 L22,6 Z M14,4 L18,4 L18,6 L14,6 L14,26 L12,26 L12,4 L14,4 Z"
                className="lcdHighlight"
              ></path>
              <path
                d="M36,10 L38,10 L38,20 L36,20 L36,22 L34,22 L34,8 L36,8 L36,10 Z M2,26 L0,26 L0,4 L2,4 L2,2 L4,2 L4,28 L2,28 L2,26 Z M12,28 L10,28 L10,4 L10,2 L18,2 L18,4 L12,4 L12,26 L18,26 L18,28 L12,28 Z M28,8 L28,22 L34,22 L34,24 L28,24 L26,24 L26,6 L28,6 L34,6 L34,8 L28,8 Z M20,6 L20,24 L26,24 L26,26 L20,26 L18,26 L18,4 L20,4 L26,4 L26,6 L20,6 Z M4,0 L10,0 L10,2 L4,2 L4,0 Z M6,4 L8,4 L8,6 L6,6 L6,4 Z M6,24 L8,24 L8,26 L6,26 L6,24 Z M14,22 L16,22 L16,24 L14,24 L14,22 Z M22,20 L24,20 L24,22 L22,22 L22,20 Z M14,6 L16,6 L16,8 L14,8 L14,6 Z M22,8 L24,8 L24,10 L22,10 L22,8 Z M30,18 L32,18 L32,20 L30,20 L30,18 Z M30,10 L32,10 L32,12 L30,12 L30,10 Z M4,28 L10,28 L10,30 L4,30 L4,28 Z"
                className="lcdBase"
                fillRule="nonzero"
              ></path>
            </g>
            <g
              id="banjo"
              className={classNames("instrument", {
                visible: activeInstrument === 3,
              })}
              transform="translate(4.000000, 0.000000)"
            >
              <path
                d="M18,20 L18,24 L20,24 L20,30 L18,30 L18,32 L16,32 L16,34 L8,34 L8,32 L6,32 L6,30 L4,30 L4,22 L6,22 L6,20 L8,20 L8,18 L14,18 L14,20 L18,20 Z M32,8 L32,10 L28,10 L28,6 L30,6 L30,4 L34,4 L34,8 L32,8 Z"
                className="lcdHighlight"
              ></path>
              <path
                d="M20,22 L18,22 L18,24 L16,24 L16,22 L14,22 L14,20 L16,20 L16,18 L14,18 L14,16 L20,16 L20,18 L18,18 L18,20 L20,20 L20,18 L22,18 L22,24 L20,24 L20,22 Z M14,32 L10,32 L10,30 L8,30 L8,28 L6,28 L6,24 L8,24 L8,26 L10,26 L10,24 L12,24 L12,26 L14,26 L14,28 L12,28 L12,30 L14,30 L14,32 Z M36,2 L36,6 L38,6 L38,10 L36,10 L36,8 L34,8 L34,4 L30,4 L30,2 L28,2 L28,0 L32,0 L32,2 L36,2 Z M34,8 L34,14 L32,14 L32,12 L28,12 L28,10 L32,10 L32,8 L34,8 Z M26,12 L28,12 L28,14 L26,14 L26,16 L24,16 L24,14 L22,14 L22,12 L24,12 L24,10 L26,10 L26,12 Z M24,4 L30,4 L30,6 L28,6 L28,10 L26,10 L26,6 L24,6 L24,4 Z M10,14 L14,14 L14,16 L10,16 L10,14 Z M6,16 L10,16 L10,18 L6,18 L6,16 Z M10,36 L14,36 L14,38 L10,38 L10,36 Z M6,34 L10,34 L10,36 L6,36 L6,34 Z M14,34 L18,34 L18,36 L14,36 L14,34 Z M4,18 L6,18 L6,20 L4,20 L4,18 Z M20,14 L22,14 L22,16 L20,16 L20,14 Z M22,16 L24,16 L24,18 L22,18 L22,16 Z M12,22 L14,22 L14,24 L12,24 L12,22 Z M14,24 L16,24 L16,26 L14,26 L14,24 Z M4,32 L6,32 L6,34 L4,34 L4,32 Z M18,32 L20,32 L20,34 L18,34 L18,32 Z M2,20 L4,20 L4,24 L2,24 L2,20 Z M2,28 L4,28 L4,32 L2,32 L2,28 Z M20,28 L22,28 L22,32 L20,32 L20,28 Z M0,24 L2,24 L2,28 L0,28 L0,24 Z M22,24 L24,24 L24,28 L22,28 L22,24 Z"
                className="lcdBase"
                fillRule="nonzero"
              ></path>
            </g>
            <g
              id="ocarina"
              className={classNames("instrument", {
                visible: activeInstrument === 4,
              })}
              transform="translate(7.000000, 4.000000)"
            >
              <path
                d="M18,2 L18,0 L26,0 L26,2 L26,4 L22,4 L22,6 L18,6 L18,8 L16,8 L16,10 L14,10 L14,12 L12,12 L12,14 L10,14 L10,16 L6,16 L6,18 L4,18 L4,22 L2,22 L2,18 L2,16 L4,16 L4,14 L4,12 L6,12 L6,10 L8,10 L8,8 L10,8 L10,6 L14,6 L14,4 L18,4 L18,2 Z M18,24 L20,24 L20,28 L18,28 L18,24 Z"
                className="lcdHighlight"
              ></path>
              <path
                d="M18,24 L18,26 L16,26 L16,28 L12,28 L4,28 L4,26 L12,26 L12,24 L16,24 L16,22 L18,22 L18,20 L20,20 L20,18 L22,18 L22,20 L22,26 L22,30 L20,30 L20,26 L20,24 L18,24 Z M0,16 L2,16 L2,24 L0,24 L0,16 Z M22,16 L24,16 L24,18 L22,18 L22,16 Z M24,14 L26,14 L26,16 L24,16 L24,14 Z M26,10 L28,10 L28,14 L26,14 L26,10 Z M28,2 L30,2 L30,10 L28,10 L28,2 Z M18,0 L28,0 L28,2 L18,2 L18,0 Z M14,2 L18,2 L18,4 L14,4 L14,2 Z M10,4 L14,4 L14,6 L10,6 L10,4 Z M8,6 L10,6 L10,8 L8,8 L8,6 Z M6,8 L8,8 L8,10 L6,10 L6,8 Z M4,10 L6,10 L6,12 L4,12 L4,10 Z M8,12 L12,12 L12,16 L8,16 L8,12 Z M10,20 L12,20 L12,22 L10,22 L10,20 Z M4,18 L8,18 L8,22 L4,22 L4,18 Z M14,16 L16,16 L16,18 L14,18 L14,16 Z M16,10 L20,10 L20,14 L16,14 L16,10 Z M20,4 L24,4 L24,8 L20,8 L20,4 Z M22,10 L24,10 L24,12 L22,12 L22,10 Z M2,12 L4,12 L4,16 L2,16 L2,12 Z M16,28 L18,28 L18,30 L16,30 L16,28 Z M18,30 L20,30 L20,32 L18,32 L18,30 Z M2,24 L4,24 L4,26 L2,26 L2,24 Z"
                className="lcdBase"
                fillRule="nonzero"
              ></path>
            </g>
            <g
              id="mouth"
              className={classNames("instrument", {
                visible: activeInstrument === 5,
              })}
              transform="translate(4.000000, 4.000000)"
            >
              <path
                d="M28,8 L26,8 L26,6 L24,6 L24,4 L10,4 L10,6 L8,6 L8,8 L6,8 L6,10 L4,10 L4,8 L4,6 L6,6 L6,4 L8,4 L8,2 L26,2 L26,4 L28,4 L28,6 L30,6 L30,8 L30,10 L28,10 L28,8 Z M22,24 L22,26 L12,26 L12,24 L10,24 L10,22 L24,22 L24,24 L22,24 Z M12,8 L22,8 L22,10 L12,10 L12,8 Z M8,20 L10,20 L10,22 L8,22 L8,20 Z M6,18 L8,18 L8,20 L6,20 L6,18 Z M24,20 L26,20 L26,22 L24,22 L24,20 Z M26,18 L28,18 L28,20 L26,20 L26,18 Z"
                className="lcdHighlight"
              ></path>
              <path
                d="M18,16 L18,18 L16,18 L16,16 L12,16 L12,18 L10,18 L10,20 L8,20 L8,18 L6,18 L6,16 L4,16 L4,12 L6,12 L6,10 L8,10 L8,8 L12,8 L12,10 L22,10 L22,8 L26,8 L26,10 L28,10 L28,12 L30,12 L30,16 L28,16 L28,18 L26,18 L26,20 L24,20 L24,18 L22,18 L22,16 L18,16 Z M2,18 L4,18 L4,22 L2,22 L2,18 Z M0,10 L2,10 L2,18 L0,18 L0,10 Z M32,10 L34,10 L34,18 L32,18 L32,10 Z M4,22 L6,22 L6,26 L4,26 L4,22 Z M28,22 L30,22 L30,26 L28,26 L28,22 Z M30,18 L32,18 L32,22 L30,22 L30,18 Z M2,6 L4,6 L4,10 L2,10 L2,6 Z M12,6 L22,6 L22,8 L12,8 L12,6 Z M14,2 L20,2 L20,4 L14,4 L14,2 Z M8,0 L14,0 L14,2 L8,2 L8,0 Z M6,2 L8,2 L8,4 L6,4 L6,2 Z M4,4 L6,4 L6,6 L4,6 L4,4 Z M20,0 L26,0 L26,2 L20,2 L20,0 Z M26,2 L28,2 L28,4 L26,4 L26,2 Z M28,4 L30,4 L30,6 L28,6 L28,4 Z M30,6 L32,6 L32,10 L30,10 L30,6 Z M2,14 L4,14 L4,16 L2,16 L2,14 Z M30,14 L32,14 L32,16 L30,16 L30,14 Z M10,20 L24,20 L24,22 L10,22 L10,20 Z M6,26 L10,26 L10,28 L6,28 L6,26 Z M10,28 L24,28 L24,30 L10,30 L10,28 Z M24,26 L28,26 L28,28 L24,28 L24,26 Z"
                className="lcdBase"
                fillRule="nonzero"
              ></path>
            </g>
            <g
              id="butt"
              className={classNames("instrument", {
                visible: activeInstrument === 6,
              })}
              transform="translate(3.000000, 4.000000)"
            >
              <path
                d="M24,10 L24,12 L22,12 L22,14 L20,14 L20,18 L16,18 L16,12 L18,12 L18,8 L20,8 L20,6 L26,6 L26,10 L24,10 Z M12,8 L12,10 L10,10 L10,12 L8,12 L8,16 L4,16 L4,10 L6,10 L6,6 L8,6 L8,4 L14,4 L14,8 L12,8 Z"
                className="lcdHighlight"
              ></path>
              <path
                d="M14,12 L14,4 L16,4 L16,6 L18,6 L18,8 L16,8 L16,12 L14,12 Z M18,24 L22,24 L22,26 L20,26 L20,30 L18,30 L18,24 Z M6,22 L10,22 L10,24 L6,24 L6,30 L4,30 L4,20 L6,20 L6,22 Z M32,4 L32,14 L30,14 L30,4 L32,4 Z M34,14 L34,16 L32,16 L32,14 L34,14 Z M36,16 L36,18 L34,18 L34,16 L36,16 Z M38,18 L38,20 L36,20 L36,18 L38,18 Z M4,6 L4,10 L2,10 L2,6 L4,6 Z M6,4 L6,6 L4,6 L4,4 L6,4 Z M8,0 L8,4 L6,4 L6,0 L8,0 Z M24,26 L24,28 L22,28 L22,26 L24,26 Z M26,28 L26,30 L24,30 L24,28 L26,28 Z M4,16 L4,20 L2,20 L2,16 L4,16 Z M2,10 L2,16 L0,16 L0,10 L2,10 Z M16,18 L16,22 L14,22 L14,18 L16,18 Z M18,22 L18,24 L16,24 L16,22 L18,22 Z M14,12 L14,18 L12,18 L12,12 L14,12 Z"
                className="lcdBase"
                fillRule="nonzero"
              ></path>
            </g>
            <g
              id="block"
              className={classNames("instrument", {
                visible: activeInstrument === 7,
              })}
              transform="translate(6.000000, 4.000000)"
              fillRule="nonzero"
            >
              <path
                d="M22,12 L24,12 L24,18 L20,18 L20,20 L16,20 L16,18 L18,18 L18,16 L20,16 L20,12 L16,12 L16,16 L12,16 L12,12 L14,12 L14,10 L22,10 L22,12 Z M2,2 L30,2 L30,4 L28,4 L28,6 L6,6 L6,28 L4,28 L4,30 L2,30 L2,2 Z M16,22 L20,22 L20,26 L16,26 L16,22 Z"
                className="lcdHighlight"
              ></path>
              <path
                d="M20,10 L22,10 L22,16 L18,16 L18,18 L14,18 L14,16 L16,16 L16,14 L18,14 L18,10 L14,10 L14,14 L10,14 L10,10 L12,10 L12,8 L20,8 L20,10 Z M2,32 L2,30 L0,30 L0,2 L2,2 L2,0 L30,0 L30,2 L32,2 L32,30 L30,30 L30,32 L2,32 Z M2,2 L2,30 L30,30 L30,2 L2,2 Z M14,20 L18,20 L18,24 L14,24 L14,20 Z M4,4 L8,4 L8,8 L4,8 L4,4 Z M24,4 L28,4 L28,8 L24,8 L24,4 Z M24,24 L28,24 L28,28 L24,28 L24,24 Z M4,24 L8,24 L8,28 L4,28 L4,24 Z"
                className="lcdBase"
              ></path>
            </g>
            {!isSynthLoading && (
              <g
                id="die"
                className="synthRandomize"
                transform="translate(4.000000, 0.000000)"
              >
                <path
                  d="M32,12 L32,10 L34,10 L34,12 L34,14 L30,14 L30,16 L26,16 L26,18 L22,18 L22,20 L20,20 L20,38 L16,38 L16,20 L14,20 L14,18 L10,18 L10,16 L6,16 L6,14 L2,14 L2,12 L2,10 L4,10 L4,12 L8,12 L8,14 L12,14 L12,16 L16,16 L16,18 L20,18 L20,16 L24,16 L24,14 L28,14 L28,12 L32,12 Z M4,20 L8,20 L8,22 L4,22 L4,20 Z M10,32 L14,32 L14,34 L10,34 L10,32 Z M16,12 L20,12 L20,14 L16,14 L16,12 Z M28,20 L32,20 L32,22 L28,22 L28,20 Z M25,26 L29,26 L29,28 L25,28 L25,26 Z M22,32 L26,32 L26,34 L22,34 L22,32 Z"
                  className="lcdHighlight"
                ></path>
                <path
                  d="M4,6 L8,6 L8,8 L4,8 L4,6 Z M2,8 L4,8 L4,10 L2,10 L2,8 Z M32,8 L34,8 L34,10 L32,10 L32,8 Z M32,30 L34,30 L34,32 L32,32 L32,30 Z M2,30 L4,30 L4,32 L2,32 L2,30 Z M8,4 L12,4 L12,6 L8,6 L8,4 Z M12,2 L16,2 L16,4 L12,4 L12,2 Z M16,0 L20,0 L20,2 L16,2 L16,0 Z M20,2 L24,2 L24,4 L20,4 L20,2 Z M24,4 L28,4 L28,6 L24,6 L24,4 Z M28,6 L32,6 L32,8 L28,8 L28,6 Z M0,10 L2,10 L2,30 L0,30 L0,10 Z M34,10 L36,10 L36,30 L34,30 L34,10 Z M4,32 L8,32 L8,34 L4,34 L4,32 Z M12,36 L16,36 L16,38 L12,38 L12,36 Z M20,36 L24,36 L24,38 L20,38 L20,36 Z M16,38 L20,38 L20,40 L16,40 L16,38 Z M28,32 L32,32 L32,34 L28,34 L28,32 Z M24,34 L28,34 L28,36 L24,36 L24,34 Z M8,34 L12,34 L12,36 L8,36 L8,34 Z M4,16 L8,16 L8,20 L4,20 L4,16 Z M28,16 L32,16 L32,20 L28,20 L28,16 Z M25,22 L29,22 L29,26 L25,26 L25,22 Z M10,28 L14,28 L14,32 L10,32 L10,28 Z M22,28 L26,28 L26,32 L22,32 L22,28 Z M16,8 L20,8 L20,12 L16,12 L16,8 Z"
                  className="lcdBase"
                  fillRule="nonzero"
                ></path>
              </g>
            )}
          </g>
        </g>
      )}
      {isSynthActive && (
        <g transform="translate(10.000000, 2.000000)">
          <path
            d="M4,22 L86,22 L86,18 L4,18 L4,22 Z M4,24 L4,28 L86,28 L86,24 L4,24 Z M4,30 L4,34 L86,34 L86,30 L4,30 Z M-1.42108547e-14,34 L-1.42108547e-14,12 L-1.43669798e-14,10 L90,10 L90,12 L90,34 L90,36 L-1.43669798e-14,36 L-1.43669798e-14,34 Z M4,12 L4,16 L86,16 L86,12 L4,12 Z"
            className="lcdHighlight"
          ></path>
          <SynthStaff
            variant={getStaffVariant()}
            activeNotehead={activeNotehead}
          />
          <path
            d="M14,32 L18,32 L18,24 L16,24 L16,22 L16,18 L14,18 L14,20 L12,20 L12,30 L14,30 L14,32 Z M14,34 L12,34 L12,32 L10,32 L10,30 L8,30 L8,20 L10,20 L10,18 L12,18 L12,16 L14,16 L14,16 L14,6 L14,4 L18,4 L18,6 L16,6 L16,14 L18,14 L18,6 L20,6 L20,8 L22,8 L22,14 L20,14 L20,16 L18,16 L18,20 L20,20 L20,22 L24,22 L24,24 L26,24 L26,30 L24,30 L24,32 L22,32 L22,30 L22,24 L20,24 L20,32 L22,32 L22,34 L20,34 L20,38 L18,38 L18,34 L14,34 Z M12,40 L12,42 L10,42 L10,40 L10,36 L14,36 L14,40 L12,40 Z M12,42 L16,42 L16,44 L12,44 L12,42 Z M16,38 L18,38 L18,42 L16,42 L16,38 Z M14,24 L16,24 L16,28 L14,28 L14,24 Z"
            className="lcdBase"
          ></path>
        </g>
      )}
    </g>
  );
};
