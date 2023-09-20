export enum Status {

	alive = 'Alive',
	dead = 'Dead',
	unknown = 'unknown',

}

export enum Gender {

	female = 'Female',
	male = 'Male',
	genderless = 'Genderless',
	unknown = 'unknown',

}

export interface Location {

	name: string;
	url: string;

}

export interface CharacterData {

	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	origin: Location;
	location: Location;
	image: string;
	episode: Array<string>;
	url: string;
	created: string;

}

export interface CharacterModel {

	id: number;
	name: string;
	avatarUrl: string;
	status: Status;
	species: string;
	gender: Gender;
	episodeCount: number;

}

export class Character implements CharacterModel {

	static of(data: CharacterData): CharacterModel {

		return new Character(data);

	}

	get id() {

		return this.#data.id;

	}

	get name() {

		return this.#data.name;

	}

	get avatarUrl() {

		return this.#data.image;

	}

	get status() {

		const entries = Object.entries(Status);
		const maped = new Map(entries).get(this.#data.status.toLowerCase());

		return maped ?? Status.unknown;

	}

	get species() {

		return this.#data.species;

	}

	get gender() {

		const entries = Object.entries(Gender);
		const maped = new Map(entries).get(this.#data.gender.toLowerCase());

		return maped ?? Gender.unknown;

	}

	get episodeCount() {

		return this.#data.episode.length;

	}

	#data: CharacterData;

	constructor(data: CharacterData) {

		this.#data = data;

	}

}
