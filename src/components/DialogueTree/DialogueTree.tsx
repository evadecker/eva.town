import { useCallback, useRef } from "react";
import useForceUpdate from "use-force-update";
import YarnBound, { OptionsResult, TextResult } from "yarn-bound";

import { DialogueNode } from "./DialogueNode";

let dialogue = "";

try {
  const res = await fetch("http://localhost:4321/dialogue/dialogue.yarn");
  dialogue = await res.text();
} catch (err) {
  console.error(err);
}

export const DialogueTree = () => {
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
