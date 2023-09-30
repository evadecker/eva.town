import classNames from "classnames";
import {
  type ChangeEvent,
  type FormEvent,
  type FormEventHandler,
  type KeyboardEvent,
  useEffect,
  useState,
} from "react";
import { isValidEmail } from "src/helpers/helpers";

import { Dialogue } from "../Dialogue/Dialogue";
import type { EmoteType } from "../Dialogue/Emote";
import { Icon } from "../Icon/Icon";
import * as styles from "./subscribe.css";

interface SniperResponse {
  url: string;
  image: string;
  provider_pretty: string;
}

type RemarkType =
  | "intro"
  | "firstCharacter"
  | "deleting"
  | "validEmail"
  | "submitting"
  | "success"
  | "error";

interface Remark {
  text: string[];
  emote: EmoteType;
}

const REMARK_TIMEOUT = 1500;

const remarks: Record<RemarkType, Remark> = {
  intro: {
    text: [
      "hey bestie",
      "what’s up :)",
      "EVA HERE",
      "hey nerd",
      "you found me!",
      "welcome 2 my garden",
    ],
    emote: "neutral",
  },
  firstCharacter: {
    text: [
      "typing! love that for you",
      "we love to type",
      "tap tap tap",
      "typing is fun",
      "typing is sexy",
      "you type so good",
    ],
    emote: "happy",
  },
  deleting: {
    text: [
      "deletinggg",
      "goodbye",
      "clear that box",
      "sometimes people make mistakes",
      "it’s ok to go back",
      "i love to delete",
      "the feminnine urge to destroy",
      "ᕙ(`▿´)ᕗ",
    ],
    emote: "flushed",
  },
  validEmail: {
    text: [
      "nice email",
      "that’s a good email",
      "yup. that’s an email",
      "get @ me, babyy",
      "i love emails",
      "mmm… electronic mail",
    ],
    emote: "playful",
  },
  submitting: {
    text: [
      "…",
      "taking off…",
      "subscribing…",
      "connecting wires…",
      "reticulating splines…",
      "plugging in…",
      "counting down…",
    ],
    emote: "thinking",
  },
  success: {
    text: [
      "yay! almost there",
      "nice! one more step",
      "it worked! check ur inbox",
    ],
    emote: "starstruck",
  },
  error: {
    text: [
      "computer says no",
      "that didn’t work",
      "it broke, idk",
      "everything fell apart",
      "try again?",
      "ugh. computers",
    ],
    emote: "sob",
  },
};

const getRandomRemark = (remarks: string[]): string => {
  return remarks[Math.floor(Math.random() * remarks.length)];
};

export const SubscribeForm = () => {
  const [currentRemarkType, setCurrentRemarkType] =
    useState<RemarkType>("intro");
  const [justDisplayedRemarks, setJustDisplayedRemarks] = useState(false);
  const [recipientEmail, setRecipientEmail] = useState<string>("");

  const [currentText, setCurrentText] = useState<string | null>("");
  const [currentEmote, setCurrentEmote] = useState<EmoteType>("neutral");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [sniperData, setSniperData] = useState<SniperResponse | null>(null);

  const displayNewRemark = (
    remarkType: RemarkType,
    options?: { force?: boolean }
  ) => {
    // If a remark just appeared, don't display a new one, UNLESS force is set to true
    if (options?.force === true || !justDisplayedRemarks) {
      setCurrentRemarkType(remarkType);
      setCurrentText(getRandomRemark(remarks[remarkType].text));
      setCurrentEmote(remarks[remarkType].emote);
    }
  };

  // Set a random intro remark on first render
  // We can't set this directly in useState initialization because
  // the server and the client won't match and React gets mad
  useEffect(() => {
    displayNewRemark("intro");
  }, []);

  useEffect(() => {
    setJustDisplayedRemarks(true);
    setTimeout(() => {
      setJustDisplayedRemarks(false);
    }, REMARK_TIMEOUT);
  }, [currentRemarkType]);

  const handleFocus = () => {
    setCurrentEmote("happy");
  };

  const handleBlur = () => {
    setCurrentEmote("neutral");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (/^[a-z0-9]$/i.test(e.key) && currentRemarkType !== "firstCharacter") {
      displayNewRemark("firstCharacter");
    }

    if (e.key === "Backspace" && currentRemarkType !== "deleting") {
      displayNewRemark("deleting");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRecipientEmail(e.target.value);

    if (isValidEmail(e.target.value)) {
      displayNewRemark("validEmail", { force: true });
    }
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e: FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    displayNewRemark("submitting", { force: true });

    const url = `https://buttondown.email/api/emails/embed-subscribe/notesfromeva`;
    const data = new FormData(e.target as HTMLFormElement);

    fetch(url, { method: "POST", body: data })
      .then((response) => {
        if (response.ok) {
          setTimeout(() => {
            displayNewRemark("success", { force: true });
            setHasSubmitted(true);
            setIsSubmitting(false);
          }, 1500);
        } else {
          console.error(response);
          displayNewRemark("error", { force: true });
          setIsSubmitting(false);
        }
      })
      .catch((error) => {
        console.error(error);
      });

    const sender = "hey@evadecker.com";
    const sniperUrl = `https://sniperl.ink/v1/render?recipient=${recipientEmail}&sender=${sender}`;

    fetch(sniperUrl)
      .then(async (response) => {
        if (response.ok) {
          await response.json().then((data) => {
            setSniperData(data);
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className={styles.form}>
      <Dialogue text={currentText} emote={currentEmote} />
      <form onSubmit={handleSubmit}>
        {!hasSubmitted && (
          <div
            className={styles.inputWrapper}
            aria-disabled={isSubmitting || hasSubmitted}
          >
            <Icon
              icon={isSubmitting ? "loader" : "mail"}
              className={classNames(styles.inputIcon, {
                [styles.loading]: isSubmitting,
              })}
              variant="filled"
            />
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Email"
              onFocus={handleFocus}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              onChange={handleChange}
              value={recipientEmail}
              disabled={isSubmitting || hasSubmitted}
            />
          </div>
        )}
        {hasSubmitted && sniperData ? (
          <a href={sniperData.url} className={styles.button} target="_blank">
            Confirm email in {sniperData.provider_pretty}
            <Icon icon="arrowRight" className={styles.buttonIcon} />
          </a>
        ) : (
          <button
            type="submit"
            className={styles.button}
            disabled={isSubmitting || hasSubmitted}
            key="subscribeButton"
          >
            {isSubmitting
              ? "Subscribing…"
              : hasSubmitted
              ? "Confirm in email app"
              : "Subscribe"}
          </button>
        )}
      </form>
    </div>
  );
};
