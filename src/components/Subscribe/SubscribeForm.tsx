import "./subscribe.css";

import classNames from "classnames";
import { type ChangeEvent, useEffect, useState } from "react";
import { isValidEmail } from "../../helpers/helpers";
import { Icon } from "../Icon/Icon";
import { Dialogue } from "./Dialogue/Dialogue";
import { type EmoteType, emoteData } from "./Dialogue/Emote";

type RemarkType =
  | "intro"
  | "someCharacters"
  | "deleting"
  | "validEmail"
  | "submitting";

interface Remark {
  text: string[];
  emote: EmoteType;
}

const TRIGGER_SOME_CHARACTERS_DIALOGUE_AT_LENGTH = 4;
const REMARK_TIMEOUT = 1000;

const remarks: Record<RemarkType, Remark> = {
  intro: {
    text: [
      "hey bestie",
      "what’s up",
      "hey you",
      "you found me!",
      "welcome 2 my garden ✿",
    ],
    emote: "happy",
  },
  someCharacters: {
    text: [
      "typing! incredible",
      "clicky clack",
      "you type so good",
    ],
    emote: "happy",
  },
  deleting: {
    text: ["deletinggg", "goodbye", "DELETE", "lol bye"],
    emote: "flushed",
  },
  validEmail: {
    text: [
      "nice email",
      "that’s a good email",
      "yup. that’s an email",
    ],
    emote: "playful",
  },
  submitting: {
    text: [
      "taking off…",
      "subscribing…",
      "connecting wires…",
    ],
    emote: "thinking",
  },
};

const getRandomRemark = (texts: string[]) => {
  return texts[Math.floor(Math.random() * texts.length)];
};

export const SubscribeForm = () => {
  const [currentRemarkType, setCurrentRemarkType] = useState<RemarkType | null>(null);
  const [justDisplayedRemarks, setJustDisplayedRemarks] = useState(false);
  const [recipientEmail, setRecipientEmail] = useState("");
  const [currentText, setCurrentText] = useState<string | null>("");
  const [currentEmote, setCurrentEmote] = useState<EmoteType>("neutral");
  const [isHoveringOrFocusingSubscribe, setIsHoveringOrFocusingSubscribe] = useState(false);

  const displayNewRemark = (type: RemarkType, options?: { force?: boolean }) => {
    const shouldDisplay = options?.force || !justDisplayedRemarks;

    if (shouldDisplay && type !== currentRemarkType) {
      setCurrentRemarkType(type);
      setCurrentText(getRandomRemark(remarks[type].text));
      setCurrentEmote(remarks[type].emote);
    }
  };

  useEffect(() => {
    if (currentRemarkType) {
      setJustDisplayedRemarks(true);
      setTimeout(() => setJustDisplayedRemarks(false), REMARK_TIMEOUT);
    }
  }, [currentRemarkType]);

  const handleFocus = () => {
    if (!currentRemarkType) {
      displayNewRemark("intro");
    }
  };

  const handleBlur = () => setCurrentEmote("neutral");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setRecipientEmail(value);

    if (isValidEmail(value)) {
      displayNewRemark("validEmail", { force: true });
    }

    if (value.length === TRIGGER_SOME_CHARACTERS_DIALOGUE_AT_LENGTH && value.length > recipientEmail.length) {
      displayNewRemark("someCharacters");
    }

    if (value.length < recipientEmail.length) {
      displayNewRemark("deleting");
    }
  };

  const handleSubmit = () => {
    displayNewRemark("submitting", { force: true });
    // Let browser handle the form POST submission (no JS fetch)
  };

  return (
    <div className="subscribe">
      <div className="subscribe-content">
        <div className="subscribe-header">
          <h2>Subscribe</h2>
          <p>I send emails a few times a year about design and web dev. Written like notes to friends.</p>
        </div>
        <Dialogue text={currentText} emote={currentEmote} onEmoteClick={() => {}} />
      </div>

      <form
        action="https://buttondown.email/api/emails/embed-subscribe/notesfromeva"
        method="POST"
       
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="embed" value="1" />
        <div className="inputWrapper">
          <input
            aria-label="Your email"
            className="input"
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            value={recipientEmail}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className={classNames("iconButton")}
            aria-label="Subscribe"
            onFocus={() => setIsHoveringOrFocusingSubscribe(true)}
            onBlur={() => setIsHoveringOrFocusingSubscribe(false)}
            onMouseOver={() => setIsHoveringOrFocusingSubscribe(true)}
            onMouseLeave={() => setIsHoveringOrFocusingSubscribe(false)}
          >
            <Icon icon="mailAdd" variant={isHoveringOrFocusingSubscribe ? "filled" : "line"} />
          </button>
        </div>
      </form>
    </div>
  );
};
