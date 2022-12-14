import { Collapse, Flex, Icon, Link, Stack, Text, useDisclosure } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/system'
import { FaChevronDown } from 'react-icons/fa'
import { NavItem } from '../nav-items.type'

type Props = {
  navItem: NavItem
}

export const MobileNavItem = ({ navItem: { label, children, href } }: Props) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        to={children ? '#' : href}
        justify="space-between"
        align="center"
        _hover={{
          textDecoration: 'none'
        }}
      >
        <Text color={useColorModeValue('gray.800', 'gray.200')}>{label}</Text>
        {children && <Icon as={FaChevronDown} transition="all .25s ease-in-out" transform={isOpen ? 'rotate(180deg)' : ''} w={3} h={3} />}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0' }}>
        <Stack pl={4} borderLeft={1} borderStyle="solid" borderColor={useColorModeValue('gray.200', 'gray.800')} align="start">
          {children &&
            children.map((child) => (
              <Text key={child.label} py={2} as={Link} to={child.href}>
                {child.label}
              </Text>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}
