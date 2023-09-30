import { useEffect, useState } from "react";

import { Dialogue } from "../Dialogue/Dialogue";
import type { EmoteType } from "../Dialogue/Emote";
import * as styles from "./subscribe.css";

export const SubscribeForm = () => {
  const [hasFocusedInput, setHasFocusedInput] = useState(false);
  const [currentText, setCurrentText] = useState<string>("hey bestie");
  const [currentEmote, setCurrentEmote] = useState<EmoteType>("neutral");

  const handleInputFocus = () => {
    setHasFocusedInput(true);
  };

  useEffect(() => {
    if (hasFocusedInput) {
      setCurrentText("omg!");
      setCurrentEmote("starstruck");
    }
  }, [hasFocusedInput]);

  return (
    <form
      action="https://buttondown.email/api/emails/embed-subscribe/notesfromeva"
      method="post"
      className={styles.form}
    >
      <Dialogue text={currentText} emote={currentEmote} />
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          type="email"
          name="email"
          id="bd-email"
          placeholder="Email"
          onFocus={handleInputFocus}
        />
        <button type="submit" className={styles.button}>
          Subscribe
        </button>
      </div>
    </form>
  );
};
