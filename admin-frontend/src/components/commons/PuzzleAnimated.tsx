import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { PuzzleIcon1, PuzzleIcon2, PuzzleIcon3, PuzzleIcon4 } from '../../assets/svg-components/PuzzleIcons'

type Props = {
  text?: string
  size?: number
  stopAnimation?: boolean
}

export const PuzzleAnimated = ({ text, size = 8, stopAnimation }: Props) => {
  const transition = {
    ease: 'easeInOut',
    repeat: Infinity,
    repeatDelay: 1
  }
  const animation = {
    opacity: [1, 0, 1]
  }
  const heightAndWidth = `${size}rem`
  const iconOffset = `${-0.45 * size}rem`

  return (
    <Flex mt={8} alignItems="center" direction="column">
      <Box>
        <Flex>
          <motion.div animate={stopAnimation ? {} : animation} transition={{ ...transition, duration: 2 + Math.random() * 3 }}>
            <PuzzleIcon1 color="theme.400" w={heightAndWidth} h={heightAndWidth} />
          </motion.div>
          <motion.div
            animate={stopAnimation ? {} : animation}
            transition={{ ...transition, duration: 2 + Math.random() * 3, delay: Math.random() * 3 }}
          >
            <PuzzleIcon2 color="themeHelper.400" ml={iconOffset} w={heightAndWidth} h={heightAndWidth} />
          </motion.div>
        </Flex>
        <Flex>
          <motion.div
            animate={stopAnimation ? {} : animation}
            transition={{ ...transition, duration: 2 + Math.random() * 3, delay: Math.random() * 2 }}
          >
            <PuzzleIcon3 color="secondary.400" mt={iconOffset} w={heightAndWidth} h={heightAndWidth} />
          </motion.div>
          <motion.div
            animate={stopAnimation ? {} : animation}
            transition={{ ...transition, duration: 2 + Math.random() * 3, delay: Math.random() * 4 }}
          >
            <PuzzleIcon4 color="primary.300" ml={iconOffset} mt={iconOffset} w={heightAndWidth} h={heightAndWidth} />
          </motion.div>
        </Flex>
      </Box>
      {text && (
        <HStack flexDirection={{ base: 'column', sm: 'row' }} textAlign="center" mt={2} fontSize="2xl" fontWeight={600}>
          <Text>{text}</Text>
        </HStack>
      )}
    </Flex>
  )
}
