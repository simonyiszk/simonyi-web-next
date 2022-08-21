import { Box, Grid, Heading, Text, useBreakpointValue } from '@chakra-ui/react'

import { Container } from '~components/Container'
import { Header } from '~components/Header'
import { ProjectPreview } from '~components/project-components/ProjectPreview'
import { SEO } from '~components/SEO'
import { ProjectsProps } from '~types/page-props/projects.props'
import { IndexLayout } from '../layouts'

const Projects = ({ data }: ProjectsProps) => (
  <>
    <SEO title="Projektjeink" />
    <IndexLayout
      background={`${useBreakpointValue({
        base: '',
        sm: 'url(/background/bottom-left2.svg) left top no-repeat,url(/background/bottom-left.svg) left bottom no-repeat,'
      })}url(/background/top-right3.svg) right top no-repeat`}
    >
      <Box>
        <Header>
          <Container>
            <Heading as="h1">Projektjeink</Heading>
            <Text fontFamily="mono" pt={4} fontSize="xl">
              A kör által készített minden alkalmazás nyílt forráskódú, ez a fejlesztőeszközeink kiválasztásánál is fő szempont.
            </Text>
          </Container>
        </Header>
        <Container>
          <Grid templateColumns={`repeat(${useBreakpointValue({ base: 1, sm: 2 })}, 1fr)`} gap={8}>
            {data.activeProjects.nodes.map((project) => (
              <ProjectPreview key={project.fields.slug} project={project} />
            ))}
            {data.oldProjects.nodes.map((project) => (
              <ProjectPreview key={project.fields.slug} project={project} />
            ))}
          </Grid>
        </Container>
      </Box>
    </IndexLayout>
  </>
)

export default Projects
