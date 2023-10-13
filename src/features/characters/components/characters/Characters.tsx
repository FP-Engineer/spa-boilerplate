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

		let observerRefValue: Element | null = null;
		const observer = new IntersectionObserver(
			([ entry ]) => {

				if (entry.isIntersecting) {

					next();

				}

			},
			{ threshold: 1 },
		);

		if (observerTarget.current) {

			observerRefValue = observerTarget.current;
			observer.observe(observerRefValue);

		}

		return () => {

			if (observerRefValue) {

				observer.unobserve(observerRefValue);

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
			<div ref={ observerTarget } />
		</ul>
	);

}
