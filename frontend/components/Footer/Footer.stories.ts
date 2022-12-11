import type { Meta, StoryObj } from '@storybook/react'

import { Footer } from './Footer'

const meta: Meta<typeof Footer> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Footer',
  component: Footer
}

export default meta

type Story = StoryObj<typeof Footer>

export const Desktop: Story = {}
