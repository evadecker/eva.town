import { motion } from "framer-motion";
import React, { useState } from "react";
import styles from "./header.module.css";
import { nanoid } from "nanoid";

interface SamSticker {
  id: string;
  src: string;
  alt: string;
  isVisible: boolean;
  x: number;
  y: number;
}

const Samwise = () => {
  const [sams, setSams] = useState<SamSticker[]>([]);

  const handleClick = () => {
    const getNewSamSticker = (): SamSticker => {
      const x = Math.floor(Math.random() * document.body.clientWidth - 200);
      const y = Math.floor(Math.random() * document.body.clientHeight - 400);
      return {
        id: nanoid(),
        src: `sam-${Math.floor(Math.random() * 16 + 1)}.png`,
        alt: "Samwise",
        isVisible: true,
        x: x,
        y: y,
      };
    };

    setSams((prev) => [...prev, getNewSamSticker()]);
  };

  return (
    <>
      {sams.map(({ id, src, alt, x, y }) => (
        <motion.img
          key={id}
          className={styles.samSticker}
          src={`/images/samwise/${src}`}
          alt={alt}
          initial={{ opacity: 0, x: x, y: y, scale: 2 }}
          animate={{ opacity: 1, scale: 1 }}
          drag
          dragMomentum={false}
        />
      ))}
      <button className={styles.samButton} onClick={handleClick}>
        Samwise
      </button>
    </>
  );
};

export default Samwise;
