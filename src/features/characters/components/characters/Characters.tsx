import clsx from 'clsx';

import {
	useEffect,
	useRef,
} from 'react';

import { ErrorMessage } from '@/components/error-message';
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

	const observerTarget = useRef(null);

	useEffect(() => {

		const observer = new IntersectionObserver(
			(entries) => {

				if (entries[0].isIntersecting) {

					next();

				}

			},
			{ threshold: 1 },
		);

		if (observerTarget.current) {

			observer.observe(observerTarget.current);

		}

		return () => {

			if (observerTarget.current) {

				observer.unobserve(observerTarget.current);

			}

		};

	}, [ observerTarget, next ]);

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
			<div ref={observerTarget}></div>
		</ul>
	);

}
