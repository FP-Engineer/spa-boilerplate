import { render } from '@testing-library/react';

import { CardSkeleton } from './CardSkeleton';

describe('CardSkeleton Test Suite', () => {

	it('renders without crashing.', () => {

		render(<CardSkeleton />);

	});

});
