import { useStore } from "@nanostores/react";
import classNames from "classnames";
import { AnimatePresence } from "motion/react";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { clearSams, numSams } from "../../stores/sam";
import { STICKER_VARIANTS, Sticker, type StickerProps } from "./Sticker";

export const Stickers = () => {
  const [stickers, setStickers] = useState<StickerProps[]>([]);
  const [showShoo, setShowShoo] = useState(false);
  const [exiting, setExiting] = useState(false);
  const $numSams = useStore(numSams);

  useEffect(() => {
    // Preload first sticker
    new Image().src = STICKER_VARIANTS[0].srcSet;
  }, []);

  useEffect(() => {
    if ($numSams === 0) {
      setStickers([]);
      setShowShoo(false);
      return;
    }

    setShowShoo($numSams > 2);

    if ($numSams > stickers.length) {
      setStickers((prev) => [
        ...prev,
        {
          id: nanoid(),
          variant: $numSams,
        },
      ]);
    }
  }, [$numSams, stickers.length]);

  const handleShoo = () => {
    setExiting(true);
    clearSams();
    setTimeout(() => {
      setExiting(false);
    }, 300);
  };

  return (
    <div className="stickers" style={{ viewTransitionName: "stickers" }}>
      <AnimatePresence>
        {stickers.map(({ id, variant }) => (
          <Sticker key={id} id={id} variant={variant} />
        ))}
        {showShoo && (
          <div className="shoo-wrapper">
            <button
              data-sam-shoo
              onClick={handleShoo}
              className={classNames({
                exiting,
              })}
              type="button"
            >
              Shoo Sam
            </button>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
