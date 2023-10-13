import { render } from '@testing-library/react';

import { Characters } from './Characters';

describe('Characters Test Suite', () => {

	// TODO: inject data source to make characters component testable
	it.skip('renders without crashing.', () => {

		render(
			<Characters />,
		);

	});

});
