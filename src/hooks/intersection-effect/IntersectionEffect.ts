import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { Callback } from '@/types';

export function useIntersectionEffect(callback: Callback) {

	const { ref, entry } = useInView();

	useEffect(() => {

		if (entry?.isIntersecting) {

			callback();

		}

	}, [ callback, entry ]);

	return { ref };

}
