import { useTrail, animated } from '@react-spring/web'
import type { ReactNode } from 'react'
import React from 'react'

interface AnimatedText {
  /**
   * The text to be animated letter-by-letter.
   */
  text: string

  /**
   * Speed of text entry.
   * @default "medium"
   */
  speed?: 'instant' | 'slow' | 'medium' | 'fast'

  /**
   * Additional effects to apply.
   * @default "none"
   */
  effect?: 'none' | 'wave' | 'shake'
}

interface TypeInProps {
  content: AnimatedText
}

const TypeIn = ({ content }: TypeInProps): ReactNode => {
  const textArray = content.text.split('')

  const charTrail = useTrail(textArray.length, {
    from: { opacity: 0 },
    to: { opacity: 1 }
  })

  return (
    <>
      {charTrail.map(({ ...style }, index) =>
        <animated.span
          key={index}
          className="letter"
          style={style}
        >
          {textArray[index]}
        </animated.span>
      )}
    </>
  )
}

interface TypeMotionProps {
  content: AnimatedText[]
}

const TypeMotion = ({ content }: TypeMotionProps) => {
  const nodeTrail = useTrail(content.length, {
    from: { opacity: 0 },
    to: { opacity: 1 }
  })

  return (
    <div>
      {nodeTrail.map(({ ...style }, index) => (
        <animated.span
          key={index}
          className="node"
          style={style}
        >
          <TypeIn content={content[index]} />
        </animated.span>
      ))}
    </div>
  )
}

export default TypeMotion
