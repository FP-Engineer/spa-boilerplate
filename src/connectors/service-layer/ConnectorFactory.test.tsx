import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { connectRemoteData } from '.';

describe('Api Client Service Layer Test Suite', () => {

	it('should indicate fetching data.', async () => {

		const queryClient = new QueryClient();
		const wrapper = ({ children }: any) => (
			<QueryClientProvider client={ queryClient }>
				{ children }
			</QueryClientProvider>
		);
		const useAPI = connectRemoteData({
			url: 'https://api.example.com',
			name: 'placeholder',
		});
		const { result } = renderHook(
			() => useAPI({ path: '/happy/path' }),
			{ wrapper },
		);

		expect(result.current.isLoading).toBeTruthy();

		await waitFor(() => {

			expect(result.current.isLoading).toBeFalsy();

		});

	});

	it('should fetch data.', async () => {

		const queryClient = new QueryClient();
		const wrapper = ({ children }: any) => (
			<QueryClientProvider client={ queryClient }>
				{ children }
			</QueryClientProvider>
		);
		const useAPI = connectRemoteData({
			url: 'https://api.example.com',
			name: 'placeholder',
		});
		const { result } = renderHook(
			() => useAPI({ path: '/happy/path' }),
			{ wrapper },
		);

		expect(result.current.data).toBeUndefined();
		expect(result.current.error).toBeUndefined();

		await waitFor(() => {

			expect(result.current.data).toBeDefined();

		});

		expect(result.current.error).toBeUndefined();

	});

	it('should communicate errors.', async () => {

		const queryClient = new QueryClient({
			defaultOptions: {
				queries: {
					retryDelay: 1,
					retry: 0,
				},
			},
		});
		const wrapper = ({ children }: any) => (
			<QueryClientProvider client={ queryClient }>
				{ children }
			</QueryClientProvider>
		);
		const useAPI = connectRemoteData({
			url: 'https://api.example.com',
			name: 'placeholder',
		});
		const { result } = renderHook(
			() => useAPI({ path: '/server/error' }),
			{ wrapper },
		);

		expect(result.current.data).toBeUndefined();
		expect(result.current.error).toBeUndefined();

		await waitFor(() => {

			expect(result.current.error).toBeDefined();

		});

		expect(result.current.data).toBeUndefined();

	});

});
