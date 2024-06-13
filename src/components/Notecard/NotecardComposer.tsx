import * as Fathom from "fathom-client";
import { type ChangeEvent, useEffect, useState } from "react";

import styles from "./notecard.module.scss";

export const TOTAL_THEMES = 31;

export const NotecardComposer = () => {
  const [selectedTheme, setSelectedTheme] = useState(1);
  const [contentValue, setContentValue] = useState("");
  const [showWarning, setShowWarning] = useState(false);

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const content = e.target;
    const parent = content.parentElement;
    if (!parent) return;

    if (
      content.scrollHeight > parent.clientHeight ||
      e.target.value.length > 140
    ) {
      setContentValue(contentValue);
      setShowWarning(true);
      Fathom.trackEvent("guestbook: show textarea warning");
    } else {
      setContentValue(e.target.value);
      if (showWarning) setShowWarning(false);
    }
  };

  useEffect(() => {}, [contentValue]);

  const handleNextTheme = () => {
    setSelectedTheme((selectedTheme) =>
      selectedTheme === TOTAL_THEMES ? 1 : selectedTheme + 1
    );
    Fathom.trackEvent("guestbook: next theme");
  };

  const handlePrevTheme = () => {
    setSelectedTheme((selectedTheme) =>
      selectedTheme === 1 ? TOTAL_THEMES : selectedTheme - 1
    );
    Fathom.trackEvent("guestbook: prev theme");
  };

  const handleSubmit = () => {
    Fathom.trackEvent("guestbook: submit");
  };

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <div
        className={styles.composer}
        style={{
          backgroundImage: `url(/images/notecards/notecard${selectedTheme}.webp)`,
        }}
      >
        <div className={styles.top}>
          <label htmlFor="content" hidden>
            Message
          </label>
          <textarea
            className={styles.content}
            name="content"
            placeholder="Leave a message, write a poem, draw some ASCII art..."
            required
            rows={5}
            cols={28}
            wrap="hard"
            onChange={handleContentChange}
            value={contentValue}
          ></textarea>
          {showWarning && (
            <div className={styles.warning}>
              There’s not enough room for that.
            </div>
          )}
        </div>
        <div className={styles.bottom}>
          <label htmlFor="author" hidden>
            Your name
          </label>
          <input
            className={styles.name}
            type="text"
            name="author"
            placeholder="Your name"
            required
            maxLength={28}
            autoComplete="off"
            data-1p-ignore
          />
          <label htmlFor="url" hidden>
            Your URL
          </label>
          <input
            className={styles.url}
            type="url"
            name="url"
            placeholder="URL (optional)"
            autoComplete="off"
            data-1p-ignore
          />
          <label htmlFor="special" hidden>
            <input name="special" />
          </label>
        </div>
        <div className={styles.controls}>
          <div className={styles.styleWrapper}>
            <div className={styles.style}>
              <button type="button" onClick={handlePrevTheme}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  fill="currentColor"
                >
                  <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
                </svg>
              </button>
              <label htmlFor="theme">Style</label>
              <input type="hidden" name="theme" value={selectedTheme} />
              <button type="button" onClick={handleNextTheme}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                </svg>
              </button>
            </div>
          </div>
          <button type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16px"
              fill="currentColor"
            >
              <path d="M3 12.9999H9V10.9999H3V1.84558C3 1.56944 3.22386 1.34558 3.5 1.34558C3.58425 1.34558 3.66714 1.36687 3.74096 1.40747L22.2034 11.5618C22.4454 11.6949 22.5337 11.9989 22.4006 12.2409C22.3549 12.324 22.2865 12.3924 22.2034 12.4381L3.74096 22.5924C3.499 22.7255 3.19497 22.6372 3.06189 22.3953C3.02129 22.3214 3 22.2386 3 22.1543V12.9999Z"></path>
            </svg>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};
