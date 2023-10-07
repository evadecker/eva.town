import { useStore } from "@nanostores/react";
import { AnimatePresence, motion } from "framer-motion";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

import { clearSams, numSams } from "../../stores/sam";
import { SamSticker, type SamStickerProps } from "./SamSticker";
import * as styles from "./stickers.css";

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
  }, [$numSams]);

  const handleClear = () => {
    setSamArray([]);
    clearSams();
  };

  return (
    <div className="stickers">
      <AnimatePresence>
        {samArray.map(({ id, variant }) => (
          <SamSticker key={id} id={id} variant={variant} />
        ))}
        {$numSams >= 3 && (
          <motion.button
            className="shoo"
            onClick={handleClear}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { type: "spring", bounce: 0.5 },
            }}
            exit={{ opacity: 0, y: 100 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            shoo!
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};
