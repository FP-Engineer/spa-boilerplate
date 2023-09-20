import type { Meta, StoryObj } from '@storybook/react';

import { Landing } from './Landing';

const meta = {
	title: 'Landing',
	component: Landing,
	argTypes: {},
} satisfies Meta<typeof Landing>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LandingStory: Story = {
	args: {},
};
