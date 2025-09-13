import { useStore } from "@nanostores/react";
import classNames from "classnames";
import { AnimatePresence, domMax, LazyMotion } from "motion/react";
import * as m from "motion/react-m";
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
      <LazyMotion features={domMax} strict>
        <AnimatePresence>
          {stickers.map(({ id, variant }) => (
            <Sticker key={id} id={id} variant={variant} />
          ))}
          {showShoo && (
            <m.div
              key="shoo-button"
              className="shoo-wrapper"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                scale: 0,
                transition: { duration: 0.2, delay: 0.45 },
              }}
            >
              <m.button
                data-sam-shoo
                onClick={handleShoo}
                className={classNames({
                  exiting,
                })}
                type="button"
              >
                Shoo Sam
              </m.button>
            </m.div>
          )}
        </AnimatePresence>
      </LazyMotion>
    </div>
  );
};
