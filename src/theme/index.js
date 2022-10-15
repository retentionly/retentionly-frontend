import { extendTheme, theme as defaultTheme } from '@chakra-ui/react'
import breakpoints from './Foundation/breakpoints'
import Container from './Components/container'
// Global style overrides
// import styles from './styles'

// Foundational style overrides


const customTheme = extendTheme(
  {
    colors:defaultTheme.colors,
    components: {
      Container,
    },
  },{
    config: defaultTheme.config,
    direction: defaultTheme.direction,
    transition: defaultTheme.transition,
    breakpoints,
    zIndices: defaultTheme.zIndices,
    components: {},
    styles: {},
    borders: {},
    radii: {},
    shadows: {},
    sizes: {},
    space: {},
    fonts: {},
    fontSizes: {},
    fontWeights: {},
    letterSpacings: {},
    lineHeights: {},
  }
)

export default customTheme