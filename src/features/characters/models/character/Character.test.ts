import {
	Character,
	CharacterData,
	Gender,
	Status,
} from '.';

describe('Character', () => {

	it('should map the character data correctly when called', () => {

		const characterData: CharacterData = {
			id: 1,
			name: 'Rick Sanchez',
			status: 'Alive',
			species: 'Human',
			type: '',
			gender: 'Male',
			origin: { name: 'Earth', url: 'https://rickandmortyapi.com/api/location/1' },
			location: { name: 'Earth', url: 'https://rickandmortyapi.com/api/location/20' },
			image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
			episode: [ 'https://rickandmortyapi.com/api/episode/1' ],
			url: 'https://rickandmortyapi.com/api/character/1',
			created: '2017-11-04T18:48:46.250Z',
		};

		const character = Character.of(characterData);

		expect(character.id).toBe(1);
		expect(character.name).toBe('Rick Sanchez');
		expect(character.status).toBe(Status.alive);
		expect(character.gender).toBe(Gender.male);
		expect(character.episodeCount).toBe(1);
		expect(character.species).toBe('Human');
		expect(character.avatarUrl).toBe('https://rickandmortyapi.com/api/character/avatar/1.jpeg');

	});

	it('should return unknown status when status is not valid', () => {

		const characterData: CharacterData = {
			id: 1,
			name: 'Rick Sanchez',
			status: 'InvalidStatus',
			species: 'Human',
			type: '',
			gender: 'Male',
			origin: { name: 'Earth', url: 'https://rickandmortyapi.com/api/location/1' },
			location: { name: 'Earth', url: 'https://rickandmortyapi.com/api/location/20' },
			image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
			episode: [ 'https://rickandmortyapi.com/api/episode/1' ],
			url: 'https://rickandmortyapi.com/api/character/1',
			created: '2017-11-04T18:48:46.250Z',
		};

		const character = Character.of(characterData);

		expect(character.status).toBe(Status.unknown);

	});

	it('should return unknown gender when gender is not valid', () => {

		const characterData: CharacterData = {
			id: 1,
			name: 'Rick Sanchez',
			status: 'Alive',
			species: 'Human',
			type: '',
			gender: 'InvalidGender',
			origin: { name: 'Earth', url: 'https://rickandmortyapi.com/api/location/1' },
			location: { name: 'Earth', url: 'https://rickandmortyapi.com/api/location/20' },
			image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
			episode: [ 'https://rickandmortyapi.com/api/episode/1' ],
			url: 'https://rickandmortyapi.com/api/character/1',
			created: '2017-11-04T18:48:46.250Z',
		};

		const character = Character.of(characterData);

		expect(character.gender).toBe(Gender.unknown);

	});

});
