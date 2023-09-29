import { useStore } from "@nanostores/react";
import {
  $isActive,
  $isLoading,
  nextInstrument,
  pressKey,
  prevInstrument,
  releaseKey,
} from "@stores/synth";
import { useEffect } from "react";

interface KeyboardHandlerProps {
  onInstrumentChange: () => void;
}

export const KeyboardHandler = ({
  onInstrumentChange,
}: KeyboardHandlerProps) => {
  const isActive = useStore($isActive);
  const isLoading = useStore($isLoading);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (isLoading) return;

    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        prevInstrument();
        onInstrumentChange();
        break;
      case "ArrowRight":
        e.preventDefault();
        nextInstrument();
        onInstrumentChange();
        break;
      case "a":
      case "A":
        e.preventDefault();
        pressKey("C3");
        break;
      case "w":
      case "W":
        e.preventDefault();
        pressKey("Csharp3");
        break;
      case "s":
      case "S":
        e.preventDefault();
        pressKey("D3");
        break;
      case "e":
      case "E":
        e.preventDefault();
        pressKey("Dsharp3");
        break;
      case "d":
      case "D":
        e.preventDefault();
        pressKey("E3");
        break;
      case "f":
      case "F":
        e.preventDefault();
        pressKey("F3");
        break;
      case "t":
      case "T":
        e.preventDefault();
        pressKey("Fsharp3");
        break;
      case "g":
      case "G":
        e.preventDefault();
        pressKey("G3");
        break;
      case "y":
      case "Y":
        e.preventDefault();
        pressKey("Gsharp3");
        break;
      case "h":
      case "H":
        e.preventDefault();
        pressKey("A3");
        break;
      case "u":
      case "U":
        e.preventDefault();
        pressKey("Asharp3");
        break;
      case "j":
      case "J":
        e.preventDefault();
        pressKey("B3");
        break;
      case "k":
      case "K":
        e.preventDefault();
        pressKey("C4");
        break;
      case "o":
      case "O":
        e.preventDefault();
        pressKey("Csharp4");
        break;
      case "l":
      case "L":
        e.preventDefault();
        pressKey("D4");
        break;
      case "p":
      case "P":
        e.preventDefault();
        pressKey("Dsharp4");
        break;
      case ";":
      case ":":
        e.preventDefault();
        pressKey("E4");
        break;
      default:
        break;
    }
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    if (isLoading) return;

    switch (e.key) {
      case "a":
      case "A":
        releaseKey("C3");
        break;
      case "w":
      case "W":
        releaseKey("Csharp3");
        break;
      case "s":
      case "S":
        releaseKey("D3");
        break;
      case "e":
      case "E":
        releaseKey("Dsharp3");
        break;
      case "d":
      case "D":
        releaseKey("E3");
        break;
      case "f":
      case "F":
        releaseKey("F3");
        break;
      case "t":
      case "T":
        releaseKey("Fsharp3");
        break;
      case "g":
      case "G":
        releaseKey("G3");
        break;
      case "y":
      case "Y":
        releaseKey("Gsharp3");
        break;
      case "h":
      case "H":
        releaseKey("A3");
        break;
      case "u":
      case "U":
        releaseKey("Asharp3");
        break;
      case "j":
      case "J":
        releaseKey("B3");
        break;
      case "k":
      case "K":
        releaseKey("C4");
        break;
      case "o":
      case "O":
        releaseKey("Csharp4");
        break;
      case "l":
      case "L":
        releaseKey("D4");
        break;
      case "p":
      case "P":
        releaseKey("Dsharp4");
        break;
      case ";":
      case ":":
        releaseKey("E4");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (isActive) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("keyup", handleKeyUp);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    }
  }, [isActive]);

  return <></>;
};
