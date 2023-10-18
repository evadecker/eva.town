import { useStore } from "@nanostores/react";
import { AnimatePresence } from "framer-motion";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

import { numSams } from "../../stores/sam";
import { SamSticker, type SamStickerProps } from "./SamSticker";

export const SamStickers = () => {
  const [samArray, setSamArray] = useState<SamStickerProps[]>([]);
  const $numSams = useStore(numSams);

  const addSticker = () => {
    const getNewSticker = () => {
      return {
        id: nanoid(),
        variant: $numSams,
      };
    };
    setSamArray((prev) => [...prev, getNewSticker()]);
  };

  useEffect(() => {
    if ($numSams > samArray.length) {
      addSticker();
    }

    if ($numSams === 0) {
      setSamArray([]);
    }
  }, [$numSams]);

  return (
    <div className="stickers">
      <AnimatePresence>
        {samArray.map(({ id, variant }) => (
          <SamSticker key={id} id={id} variant={variant} />
        ))}
      </AnimatePresence>
    </div>
  );
};
