import React, { useCallback, useEffect, useRef, useState } from 'react'
import YarnBound, { OptionsResult, TextResult } from 'yarn-bound'
import { DialogueNode } from './DialogueNode'
import useForceUpdate from 'use-force-update'

// Not working
// enum Speed {
//   'instant' = 0,
//   'slow' = 1,
//   'medium' = 0.06,
//   'fast' = 0.01
// }

interface DialogueTreeProps {
  /**
   * String of dialogue following the YarnSpinner 2.0 spec
   * https://docs.yarnspinner.dev
   */
  dialogue: string
}

const DialogueTree = ({ dialogue }: DialogueTreeProps) => {
  const [runner, setRunner] = useState<YarnBound | null>(null)

  const runnerRef = useRef(new YarnBound({
    dialogue
  }))

  useEffect(() => {
    if (dialogue === '') return

    try {
      setRunner(new YarnBound({
        dialogue,
        combineTextAndOptionsResults: true
      }))
    } catch (err) {
      console.error(err)
    }
  }, [dialogue])

  const forceUpdate = useForceUpdate()

  const advance = useCallback((optionIndex: number | undefined) => {
    if (runnerRef?.current?.currentResult?.isDialogueEnd) {
      // Do things
      // setHasDialogueEnded(true)
      // onDialogueEnd()
    }
    runnerRef.current.advance(optionIndex)
    forceUpdate()
  }, [runnerRef.current])

  return (
    <div>
      {(runner?.currentResult instanceof TextResult || runner?.currentResult instanceof OptionsResult) && <DialogueNode node={runnerRef?.current?.currentResult} advance={advance} />}
    </div>
  )
}

export default DialogueTree
