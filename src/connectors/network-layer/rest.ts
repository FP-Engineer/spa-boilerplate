import axios from 'axios';

import { HTTPMethod } from './constants';
import { NetworkError } from './NetworkError';

export interface APIClient {
	<T>(request: APIRequest): Promise<T>;
}

export interface APIRequest {
	path: string;
	method: HTTPMethod,
	payload?: unknown,
}

export function createAPIClient(baseURL: string): APIClient {

	const client = axios.create({ baseURL });

	client.interceptors.response.use(
		(response) => response.data,
		(error) => Promise.reject(NetworkError.of(error)),
	);

	const request = <T>({ path, method, payload }: APIRequest): Promise<T> => client.request({
		method,
		url: path,
		data: payload,
	});

	return request;

}
