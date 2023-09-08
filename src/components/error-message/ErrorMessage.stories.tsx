import type { Meta, StoryObj } from '@storybook/react';

import { ErrorMessage } from './ErrorMessage';

const meta = {
	title: 'ErrorMessage',
	component: ErrorMessage,
	argTypes: {
		children: {
			type: {name: 'string', required: true},
			table: {
				type: {summary: 'string'},
			},
		},
	},
} satisfies Meta<typeof ErrorMessage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ErrorMessageStory: Story = {
	args: {
		children: 'Lorem Ipsum!',
	},
};
