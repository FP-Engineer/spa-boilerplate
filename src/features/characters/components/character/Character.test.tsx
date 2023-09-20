import { render } from '@testing-library/react';

import { CharacterModel, Gender, Status } from '../../models';

import { Character } from './Character';

describe('Character Test Suite', () => {

	it('renders without crashing.', () => {

		const model: CharacterModel = {
			id: 361,
			name: 'Toxic Rick',
			status: Status.dead,
			species: 'Humanoid',
			gender: Gender.male,
			avatarUrl: 'https://rickandmortyapi.com/api/character/avatar/361.jpeg',
			episodeCount: 0,
		};

		render(<Character model={ model } />);

	});

});
