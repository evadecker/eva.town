import { addSam } from "../../stores/sam";
import styles from "./samstickers.module.css";
import React from "react";

const SamButton = () => (
  <button className={styles.samButton} onClick={addSam}>
    Samwise
  </button>
);

export default SamButton;
