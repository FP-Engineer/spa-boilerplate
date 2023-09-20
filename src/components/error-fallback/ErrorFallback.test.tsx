import { render } from '@testing-library/react';

import { ErrorFallback } from './ErrorFallback';

describe('ErrorFallback Test Suite', () => {

	it('renders without crashing.', () => {

		render(
			<ErrorFallback
				error={ { message: 'fail' } }
				resetErrorBoundary={ () => null }
			/>,
		);

	});

});
