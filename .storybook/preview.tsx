import '@radix-ui/themes/styles.css';
import 'https://unpkg.com/open-props';
import 'https://unpkg.com/open-props/normalize.min.css';
import { Theme } from '@radix-ui/themes';
import type { Preview } from '@storybook/react';

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
