import clsx from 'clsx';
import { useCallback } from 'react';

import { ErrorMessage } from '@/components/error-message';
import { useIntersectionEffect } from '@/hooks/intersection-effect/IntersectionEffect';
import { loading } from '@/styles/animations';

import { useCharacters } from '../../connectors/characters/characters';
import { Character } from '../character';

import {
	container,
	character,
} from './Characters.css';

export function Characters() {

	const {
		data, error, isLoading, next,
	} = useCharacters();

	const fetchCharacters = useCallback(() => {

		requestAnimationFrame(next);

	}, [ next ]);

	const { ref } = useIntersectionEffect(fetchCharacters);

	if (error) {

		return <ErrorMessage>{ error }</ErrorMessage>;

	}

	return (
		<ul className={ clsx(container, { [loading]: isLoading }) }>
			{data?.map((model) => (
				<li key={ model.id }>
					<Character className={ character } model={ model } />
				</li>
			))}
			<div ref={ ref } />
		</ul>
	);

}
