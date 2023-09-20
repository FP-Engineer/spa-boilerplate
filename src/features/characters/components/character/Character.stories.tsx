import type { Meta, StoryObj } from '@storybook/react';

import { Gender, Status } from '../../models';

import { Character } from './Character';

const meta = {
	title: 'Character',
	component: Character,
	argTypes: {},
} satisfies Meta<typeof Character>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CharacterStory: Story = {
	args: {
		model: {
			id: 361,
			name: 'Jhon Doe',
			status: Status.unknown,
			species: 'Humanoid',
			gender: Gender.male,
			avatarUrl: 'https://placehold.co/600x400/orange/white.png',
			episodeCount: 0,
		},
	},
};
