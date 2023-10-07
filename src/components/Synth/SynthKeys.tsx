import { useEffect, useState } from "react";

import { type NoteName, SynthKey } from "./SynthKey";

interface SynthKeysProps {
  pressedKeys?: NoteName[];
}

const notes: NoteName[] = [
  "C3",
  "D3",
  "E3",
  "F3",
  "G3",
  "A3",
  "B3",
  "C4",
  "D4",
  "E4",
  "Csharp3",
  "Dsharp3",
  "Fsharp3",
  "Gsharp3",
  "Asharp3",
  "Csharp4",
  "Dsharp4",
];

export const SynthKeys = ({ pressedKeys }: SynthKeysProps) => {
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    document.addEventListener("mousedown", () => {
      setIsMouseDown(true);
    });
    document.addEventListener("mouseup", () => {
      setIsMouseDown(false);
    });
  }, []);

  return (
    <g id="synth-keys" transform="translate(24.000000, 60.000000)">
      <path
        className="synthKeysOutline"
        d="M0,4.00984669 C0,1.79526951 1.78697643,0 3.99495639,0 L218.005044,0 C220.211397,0 222,1.79771022 222,4.00984669 L222,88 L0,88 L0,4.00984669 Z"
      ></path>
      <polygon
        className="synthBetweenKeys"
        points="218 2.2 218 80 4 80 4 2.2"
      ></polygon>
      {notes.map((note) => (
        <SynthKey
          key={note}
          note={note}
          isPressed={pressedKeys ? pressedKeys.includes(note) : false}
          isMouseDown={isMouseDown}
        />
      ))}
      <path
        d="M2,3.0093689 C2,2.45190985 2.44668708,2 2.99605446,2 L219.003946,2 C219.554051,2 220,2.44335318 220,3.0093689 L220,6 L2,6 L2,3.0093689 Z"
        className="synthKeysShadow"
      ></path>
    </g>
  );
};
