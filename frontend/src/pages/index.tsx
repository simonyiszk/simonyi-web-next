import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, CloseButton } from '@chakra-ui/react'
import { useState } from 'react'
import { SContainer } from '~components/_common/SContainer'
import { SEO } from '~components/_common/SEO'
import { SLayout } from '~components/_common/SLayout'

const IndexPage = () => {
  const [alertClosed, setAlertClosed] = useState(false)

  return (
    <>
      <SEO />
      <SLayout>
        <SContainer>
          {!alertClosed && (
            <Alert status="info" variant="left-accent" borderRadius="md" my={3}>
              <AlertIcon />
              <Box flex="1">
                <AlertTitle>{'TODO ALERT TITLE'}</AlertTitle>
                <AlertDescription display="block" dangerouslySetInnerHTML={{ __html: 'TODO ALERT HTML' }} />
              </Box>
              <CloseButton position="absolute" right="8px" top="8px" onClick={() => setAlertClosed(true)} />
            </Alert>
          )}
        </SContainer>
      </SLayout>
    </>
  )
}

export default IndexPage
