import clsx from 'clsx';

import { ErrorMessage } from '@/components/error-message';
import { useOnShowUp } from '@/hooks/on-show-up/OnShowUp';
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

	const { ref } = useOnShowUp(next);

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
