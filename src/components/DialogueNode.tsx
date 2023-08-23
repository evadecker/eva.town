import { AnimatePresence, motion, type Variants } from 'framer-motion'
import { OptionsResult, type TextResult } from 'yarn-bound'
import React, { type PropsWithChildren } from 'react'

const Character = ({ children }: PropsWithChildren<unknown>) => {
  const characterVariants = {
    hidden: { opacity: 0, scale: 0, y: '0.5em' },
    show: { opacity: 1, scale: 1, y: 0 }
  }

  return (
    <motion.span
      style={{ display: 'inline-block', whiteSpace: 'pre-wrap' }}
      className="char"
      variants={characterVariants}
      transition={{ type: 'spring', mass: 0.5, damping: 10 }}
    >
      {children}
    </motion.span>
  )
}

// interface WaveProps {
//   text: string
// }

// const Wave = ({ text }: WaveProps) => {
//   const chars = text.split('')

//   return (
//     <strong style={{ color: 'violet' }}>
//       {chars.map((char, index) =>
//         <Character key={index}>
//           <motion.span
//             initial={{ y: '-0.1em' }}
//             animate={{ y: '0.1em' }}
//             style={{ display: 'inline-block' }}
//             transition={{ type: 'tween', repeat: Infinity, ease: 'easeInOut', repeatType: 'reverse', delay: index * 0.05, duration: 0.8 }}
//           >
//             {char}
//           </motion.span>
//         </Character>
//       )}
//     </strong>
//   )
// }

// interface ShakeProps {
//   text: string
// }

// const Shake = ({ text }: ShakeProps) => {
//   const chars = text.split('')

//   const generateRandomValuesArray = (num: number, min: number, max: number): number[] => {
//     const randomNumberBetweenValues = (): number => {
//       return Math.random() * (max - min) + min
//     }

//     return [...Array(num)].map(randomNumberBetweenValues)
//   }

//   const generateRandomEmsArray = (num: number, min: number, max: number): string[] => {
//     return generateRandomValuesArray(num, min, max).map(i => i + 'em')
//   }

//   const alternateHeights = (index: number): string => {
//     return index % 2 === 0 ? '0.03em' : '-0.03em'
//   }

//   const alternateRotation = (index: number): number => {
//     return index % 2 === 0 ? 5 : -5
//   }

//   return (
//     <strong style={{ color: 'goldenrod' }}>
//       {chars.map((char, index) =>
//         <Character key={index}>
//           <motion.span
//             initial={{ x: 0, top: alternateHeights(index), rotate: alternateRotation(index) }}
//             animate={{ x: generateRandomEmsArray(10, -0.05, 0.05), y: generateRandomEmsArray(10, -0.1, 0.1), rotate: generateRandomValuesArray(10, 10, -10) }}
//             style={{ position: 'relative', display: 'inline-block', whiteSpace: 'pre-wrap' }}
//             transition={{ type: 'tween', repeat: Infinity, repeatType: 'mirror', ease: 'anticipate', duration: 1 }}
//           >
//             {char}
//           </motion.span>
//         </Character>
//       )}
//     </strong>
//   )
// }

interface DialogueNodeProps {
  node: TextResult | OptionsResult
  advance: (step?: number) => void
}

export const DialogueNode = ({ node, advance }: DialogueNodeProps) => {
  const { text } = node

  if (text === undefined || text.length === 0) return null

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03
      }
    }
  }

  const chars = text.split('')

  const handleAdvance = (index?: number) => {

  }

  return (
    <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, scale: 0, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: 'spring', mass: 1, damping: 20, stiffness: 200 }}
      style={{ backgroundColor: 'white', color: 'black', borderRadius: '8px', padding: '20px' }}
    >
      <motion.div variants={containerVariants} initial="hidden" animate="show">
        {/* Iterate through chunks of the string depending on presence of markup */}
        {/* Else wave markup */}
        {/* <Wave text={text} /> */}
        {/* Else if shake markup */}
        {/* <Shake text={text} /> */}
        {/* Else */}
        {chars.map((char, index) =>
          <Character key={index}>
            {char}
          </Character>
        )}
      </motion.div>
      {node instanceof OptionsResult
        ? node.options.map((option, index) =>
          <button key={index} onClick={() => { advance(index) }}>{option.text}</button>
        )
        : <button onClick={() => { advance() }}>Next</button>
      }
    </motion.div>
    </AnimatePresence>
  )
}
