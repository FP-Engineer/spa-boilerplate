import clsx from 'clsx';
import { useCallback } from 'react';

import { CardSkeleton } from '@/components/card-skeleton';
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
		data,
		error,
		isLoading,
		next,
		count,
	} = useCharacters();

	const fetchCharacters = useCallback(() => {

		requestAnimationFrame(next);

	}, [ next ]);

	const { ref } = useIntersectionEffect(fetchCharacters);

	const range = Array.from(
		{ length: count ?? 0 },
		(_, idx) => idx,
	);

	if (error) {

		return <ErrorMessage>{ error }</ErrorMessage>;

	}

	return (
		<ul className={ clsx(container, { [loading]: isLoading }) }>
			{range?.map((idx) => {

				const model = data?.at(idx);

				return (
					<li key={ model?.id ?? idx } ref={ data?.length === idx ? ref : null }>
						{ model ? <Character className={ character } model={ model } /> : <CardSkeleton /> }
					</li>
				);

			})}
		</ul>
	);

}
