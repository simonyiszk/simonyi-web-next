import { Box } from '@chakra-ui/react'
import type { InferGetStaticPropsType } from 'next'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { RootContainer } from '../components/layouts'
import type { Repository } from '../types/github'

export default function IndexPage({ stars }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <NextSeo canonical="https://simonyi.bme.hu" />
      <RootContainer>
        <Box>Next.js has {stars} ⭐️</Box>
        <Link href="/preact-stars">How about preact?</Link>
      </RootContainer>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const data: Repository = await res.json()
  return {
    props: {
      stars: data.stargazers_count
    }
  }
}
