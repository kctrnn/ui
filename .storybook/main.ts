import { withoutVitePlugins } from '@storybook/builder-vite'
import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  async viteFinal(config) {
    config.plugins = await withoutVitePlugins(config.plugins, ['vite:dts'])

    return config
  },
}
export default config
