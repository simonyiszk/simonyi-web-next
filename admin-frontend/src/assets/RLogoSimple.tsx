import { useColorModeValue } from '@chakra-ui/react'
import { ReactComponent as LogoComponent } from './svg/remark-logo-sm.svg'

export const RLogoSimple = (props: any) => <LogoComponent {...props} fill={useColorModeValue('black', 'white')} />
