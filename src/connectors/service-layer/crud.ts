import { createRestClient } from '../network-layer';

export interface CRUDClient {
	read<T>(request: ReadRequest): Promise<T>;
}

export interface ReadRequest {
	path: string;
	headers?: object,
	params?: object,
}

export function createCRUDClient(baseURL: string) {

	const { get } = createRestClient(baseURL);
	const read = <T>(req: ReadRequest) => get<T>({ ...req });

	return { read };

}
