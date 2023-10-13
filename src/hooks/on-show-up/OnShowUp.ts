import { useEffect, useRef, useCallback } from 'react';

import { Callback } from '@/types';

export function useOnShowUp(callback: Callback) {

	const observerTarget = useRef(null);
	const run = useCallback(() => callback(), [ callback ]);

	useEffect(() => {

		let observerRefValue: Element | null = null;
		const observer = new IntersectionObserver(
			([ entry ]) => {

				if (entry.isIntersecting) {

					run();

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

	}, [ observerTarget, run ]);

	return { ref: observerTarget };

}
