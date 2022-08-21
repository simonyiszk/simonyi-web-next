import { Box, Grid, Heading, useBreakpointValue } from '@chakra-ui/react'
import CourseCard from '~components/course/CourseCard'
import { SContainer } from '~components/_common/SContainer'
import { SEO } from '~components/_common/SEO'
import { SLayout } from '~components/_common/SLayout'

const CoursesPage = () => {
  const courses: any[] = []

  return (
    <>
      <SEO title="Tanfolyamok" />
      <SLayout>
        <SContainer>
          <Heading as="h2">{'TODO SEMESTER HERE'}</Heading>
          <Box mt={6}>
            <Grid templateColumns={`repeat(${useBreakpointValue({ base: 1, sm: 2 })}, 1fr)`} gap={6}>
              {courses
                .sort((a, b) => a.order - b.order)
                .map((course) => course.active && <CourseCard key={course.title} course={course} />)}
            </Grid>
          </Box>
        </SContainer>
      </SLayout>
    </>
  )
}

export default CoursesPage
