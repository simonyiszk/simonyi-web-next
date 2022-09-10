import { Box } from '@chakra-ui/react'
import { BMEIcon, SchonherzIcon, VIKIcon } from '../icons'

function Footer() {
  return (
    <Box bg="dark" display="flex" justifyContent="center">
      <Box p={16} display="flex" gap={16}>
        <BMEIcon w={56} h={20} fill="light" />
        <VIKIcon w={20} h={20} fill="light" />
        <SchonherzIcon w={56} h={20} fill="light" />
      </Box>
    </Box>
  )
}

export { Footer }
