import remarkGfm from 'remark-gfm';
import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@storybook/addon-interactions',
		{
			name: '@storybook/addon-docs',
			options: {
				mdxPluginOptions: {
					mdxCompileOptions: {
						remarkPlugins: [ remarkGfm ],
					},
				},
			},
		},
	],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	async viteFinal(config) {
		return mergeConfig(config, {
			resolve: {
				alias: {
					'@': path.resolve(__dirname, '../src'),
				}
			}
		});
	},
};
export default config;
