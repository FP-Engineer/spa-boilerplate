import type { Meta, StoryObj } from '@storybook/react';

import { CardSkeleton } from './CardSkeleton';

const meta = {
	title: 'CardSkeleton',
	component: CardSkeleton,
	argTypes: {},
} satisfies Meta<typeof CardSkeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardSkeletonStory: Story = {
	args: {},
};
