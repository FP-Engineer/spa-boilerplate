import { render } from '@testing-library/react';

import { Card } from './Card';

describe('Card Test Suite', () => {

	it('renders without crashing.', () => {

		render(<Card />);

	});

});
