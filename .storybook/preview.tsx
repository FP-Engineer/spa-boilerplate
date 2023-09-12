import '@radix-ui/themes/styles.css';
import 'open-props';
import 'open-props/normalize.min.css';
import { Theme } from '@radix-ui/themes';
import type { Preview } from '@storybook/react';
import React from 'react';

const preview: Preview = {
	decorators: [
		(Story) => (
			<Theme>
				<Story />
			</Theme>
		),
	],
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export default preview;
