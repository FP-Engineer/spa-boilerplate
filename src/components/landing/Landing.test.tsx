import { render } from '@testing-library/react';

import { Landing } from './Landing';

describe('Landing Test Suite', () => {

	it('renders without crashing.', () => {

		render(<Landing />);

	});

});
