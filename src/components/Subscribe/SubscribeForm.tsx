import { type KeyboardEvent, useEffect, useState } from "react";

import { Dialogue } from "../Dialogue/Dialogue";
import type { EmoteType } from "../Dialogue/Emote";
import * as styles from "./subscribe.css";

export const SubscribeForm = () => {
  const [hasFocusedInput, setHasFocusedInput] = useState(false);
  const [currentText, setCurrentText] = useState<string>("hey bestie");
  const [currentEmote, setCurrentEmote] = useState<EmoteType>("neutral");

  const handleFocus = () => {
    setHasFocusedInput(true);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "@") {
      setCurrentText("nice email");
      setCurrentEmote("playful");
    }

    if (event.key === "Backspace") {
      setCurrentText("uh oh");
      setCurrentEmote("flushed");
    }
  };

  useEffect(() => {
    if (hasFocusedInput) {
      setCurrentText("omg hey for real");
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
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
        />
        <button type="submit" className={styles.button}>
          Subscribe
        </button>
      </div>
    </form>
  );
};
