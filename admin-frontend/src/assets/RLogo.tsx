import { useColorModeValue } from '@chakra-ui/react'
import { ReactComponent as LogoComponent } from './svg/remark-logo-big.svg'

export const RLogo = (props: any) => <LogoComponent {...props} fill={useColorModeValue('black', 'white')} />
