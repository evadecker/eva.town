import React, { useCallback, useRef } from "react";
import YarnBound, { OptionsResult, TextResult } from "yarn-bound";
import { DialogueNode } from "./";
import useForceUpdate from "use-force-update";

interface DialogueTreeProps {
  /**
   * String of dialogue following the YarnSpinner 2.0 spec
   * https://docs.yarnspinner.dev
   */
  dialogue: string;
}

export const DialogueTree = ({ dialogue }: DialogueTreeProps) => {
  const runnerRef = useRef(
    new YarnBound({
      dialogue,
      combineTextAndOptionsResults: true,
    })
  );

  const forceUpdate = useForceUpdate();

  const advance = useCallback(
    (optionIndex: number | undefined) => {
      if (runnerRef?.current?.currentResult?.isDialogueEnd) {
        // Do things
        // setHasDialogueEnded(true)
        // onDialogueEnd()
      }
      runnerRef.current.advance(optionIndex);
      forceUpdate();
    },
    [runnerRef.current]
  );

  const displayDialogue =
    runnerRef?.current?.currentResult !== undefined &&
    (runnerRef?.current?.currentResult instanceof TextResult ||
      runnerRef?.current?.currentResult instanceof OptionsResult);

  return (
    displayDialogue && (
      <DialogueNode
        node={runnerRef?.current?.currentResult}
        advance={advance}
      />
    )
  );
};
