import { AxiosError } from 'axios';

import { HTTPMethod } from './constants';
import { NetworkError } from './NetworkError';

import { createRestClient } from '.';

describe('createAPIClient Test Suite', () => {

	it('should resolve the Promise with the response data when called with valid parameters', async () => {

		const baseURL = 'https://api.example.com';
		const { request: client } = createRestClient(baseURL);
		const path = '/happy/path';
		const method = HTTPMethod.get;
		const expectedResponse = { payload: 'success' };
		const result = await client({ path, method });

		expect(result).toEqual(expectedResponse);

	});

	it('should handle server errors by rejecting the Promise with a NetworkError', async () => {

		const baseURL = 'https://api.example.com';
		const { request: client } = createRestClient(baseURL);
		const path = '/server/error';
		const method = HTTPMethod.get;
		const expectedCause = AxiosError.from({
			response: {
				status: 501,
				data: {
					message: 'server error',
				},
			},
		});
		const expectedError = NetworkError.of(expectedCause);

		await expect(client({ path, method })).rejects.toThrow(expectedError);

	});

});
