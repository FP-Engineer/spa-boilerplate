import { loading } from '@/styles/animations';

import { Card } from '../card';

export function CardSkeleton() {

	return (
		<Card className={ loading } />
	);

}
