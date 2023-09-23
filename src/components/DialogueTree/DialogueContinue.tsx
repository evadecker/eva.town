import styles from "./dialogue.module.scss";

interface DialogueContinueProps {
  advance: (optionIndex: number | undefined) => void;
}

export const DialogueContinue = ({ advance }: DialogueContinueProps) => {
  return (
    <button
      className={styles.continue}
      aria-label="Continue"
      onClick={() => {
        advance(undefined);
      }}
    />
  );
};
