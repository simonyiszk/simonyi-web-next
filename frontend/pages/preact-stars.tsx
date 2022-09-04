import { Box } from '@chakra-ui/react'
import type { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import { SContainer } from '../components/_basics/SContainer'
import { SLayout } from '../components/_basics/SLayout'
import type { Repository } from '../types/github'

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/repos/preactjs/preact')
  const json: Repository = await res.json()
  return {
    props: {
      stars: json.stargazers_count
    }
  }
}

export default function PreactStarsPage({ stars }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <SLayout>
      <SContainer>
        <Box>Preact has {stars} ⭐</Box>
        <Link href="/">I bet Next.js has more stars (?)</Link>
      </SContainer>
    </SLayout>
  )
}
