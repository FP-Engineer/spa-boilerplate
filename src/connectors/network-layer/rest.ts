import axios from 'axios';

import { HTTPMethod } from './constants';
import { NetworkError } from './NetworkError';

export interface RestClient {
	request<T>(request: RestRequest): Promise<T>;
	get<T>(request: GetRequest): Promise<T>;
}

export interface RestRequest {
	path: string;
	method: HTTPMethod,
	headers?: object,
	params?: object,
	payload?: unknown,
}

export type GetRequest = Omit<RestRequest, 'method' | 'payload'>;

export function createRestClient(baseURL: string): RestClient {

	const client = axios.create({ baseURL });

	client.interceptors.response.use(
		(response) => response.data,
		(error) => Promise.reject(NetworkError.of(error)),
	);

	const request = <T>(req: RestRequest): Promise<T> => {

		const {
			path, method, payload, headers, params,
		} = req;

		return client.request({
			headers,
			method,
			params,
			url: path,
			data: payload,
		});

	};
	const get = <T>(req: GetRequest) => {

		return request<T>({ ...req, method: HTTPMethod.get });

	};

	return { request, get };

}
