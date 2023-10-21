import { render, renderHook } from '@testing-library/react';
import {
	setupIntersectionMocking,
	resetIntersectionMocking,
	mockIsIntersecting,
} from 'react-intersection-observer/test-utils';

import { useIntersectionEffect } from './IntersectionEffect';

describe('useIntersectionEffect Test Suite', () => {

	beforeEach(() => {
		setupIntersectionMocking(vi.fn);
	});
	
	afterEach(() => {
		resetIntersectionMocking();
	});

	it('Should call the provided callback if the referenced element is visible', () => {

		const callback = vi.fn();
		const Placeholder = () => {
			const { ref } = useIntersectionEffect(callback);

			return <div ref={ref} data-testid='wrapper'></div>;
		};
		const { getByTestId } = render(<Placeholder />);
		const wrapper = getByTestId('wrapper');
		
		mockIsIntersecting(wrapper, false);
		expect(callback).not.toHaveBeenCalled();
		mockIsIntersecting(wrapper, true);
		expect(callback).toHaveBeenCalled();
		
	});

});