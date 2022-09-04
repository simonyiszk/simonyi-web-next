import { Box, Heading } from '@chakra-ui/react'

export const CourseCard = () => (
  <Box borderWidth="1px" rounded="lg" shadow="lg">
    <Box pt={4} pb={4} px={4}>
      <Heading fontWeight="400" fontSize="2xl">
        {'TODO'}
      </Heading>
      <Box mt={6}>
        {/*course.sessions.map((session, index) => (
          <Flex key={course.lecturer + index} mt={2} justifyContent="space-between" alignItems="center" flexWrap="wrap">
            <HStack pr={4}>
              <FaClock />
              <Text>{getSessionString(session)}</Text>
            </HStack>
            <HStack>
              <FaMapMarkerAlt />
              <Text>{session.place}</Text>
            </HStack>
            <Divider />
          </Flex>
        ))*/}
        {/*course.lecturer && (
          <HStack mt={6}>
            <FaChalkboardTeacher />
            <Text>{course.lecturer}</Text>
          </HStack>
        )*/}
      </Box>
      <Box mt={2} fontSize="md">
        {'TODO'}
      </Box>
    </Box>
  </Box>
)
