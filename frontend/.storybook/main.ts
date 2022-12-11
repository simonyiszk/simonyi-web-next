// Imports Storybook's configuration API
import type { StorybookConfig } from '@storybook/types'

const config: StorybookConfig = {
  stories: ['../components/**/*.stories.mdx', '../components/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  core: {
    disableTelemetry: true
  },
  docs: {
    docsPage: true
  }
}

module.exports = config
