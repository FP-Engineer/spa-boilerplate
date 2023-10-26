import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';

const meta = {
	title: 'Card',
	component: Card,
	argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardStory: Story = {
	args: {
	},
};
