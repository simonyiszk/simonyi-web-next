// src/@chakra-ui/gatsby-plugin/theme.js
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  useSystemColorMode: true,
  initialColorMode: 'dark'
}

const theme = extendTheme({
  config,
  fonts: {
    // https://www.figma.com/file/JOHGaqs67K52ZSj32xF8Bd/Weboldal?node-id=12%3A1076
    heading: 'Archivo, sans-serif',
    body: 'Space Grotesk, sans-serif',
    mono: 'Menlo, monospace'
  },
  colors: {
    // https://www.figma.com/file/JOHGaqs67K52ZSj32xF8Bd/Weboldal?node-id=12%3A1075
    simonyi_zold: '#63BC47',
    dark: '#231F20',
    light: '#F8F8F8',
    white: '#FFFFFF',
    simonyi_zold_halvany: '#63BC47',
    simonyi_sarga: '#FFFF3C'
  },
  styles: {
    global: () => ({
      body: {
        bg: 'dark'
      }
    })
  }
})

export default theme
