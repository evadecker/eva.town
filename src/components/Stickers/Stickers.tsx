import { useStore } from "@nanostores/react";
import { AnimatePresence, motion } from "framer-motion";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

import { clearSams, numSams } from "../../stores/sam";
import { Sticker, type StickerProps } from "./Sticker";

export const Stickers = () => {
  const [stickers, setStickers] = useState<StickerProps[]>([]);
  const [showShoo, setShowShoo] = useState(false);
  const $numSams = useStore(numSams);

  const addSticker = () => {
    const getNewSticker = () => {
      return {
        id: nanoid(),
        variant: $numSams,
      };
    };
    setStickers((prev) => [...prev, getNewSticker()]);
  };

  useEffect(() => {
    if ($numSams > stickers.length) {
      addSticker();
    }

    if ($numSams === 0) {
      setStickers([]);
    }
  }, [$numSams]);

  useEffect(() => {
    if ($numSams > 2) {
      setShowShoo(true);
    } else {
      setShowShoo(false);
    }
  }, [$numSams]);

  return (
    <div className="stickers" style={{ viewTransitionName: "stickers" }}>
      <AnimatePresence>
        {stickers.map(({ id, variant }) => (
          <Sticker key={id} id={id} variant={variant} />
        ))}
        {showShoo && (
          <div className="shoo-wrapper">
            <motion.button
              data-sam-shoo
              type="button"
              onClick={clearSams}
              initial={{ bottom: -50 }}
              animate={{
                bottom: 16,
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              exit={{
                rotate: [-2, 2, -3, 3, -6, 6, -8, 8],
                // bottom: -50,
              }}
            >
              Tell Sam to shoo?
            </motion.button>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
