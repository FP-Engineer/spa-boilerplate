import {
	useQuery,
} from 'react-query';

import { createAPIClient } from '../network-layer';
import { HTTPMethod } from '../network-layer/constants';

export interface RemoteData<T> {
	isLoading: boolean;
	data?: T;
	error?: string;
}

export interface RemoteDataConnector {
	<T>(path?: string): RemoteData<T>;
}

export function connectRemoteData(serviceUrl: string): RemoteDataConnector {

	const request = createAPIClient(serviceUrl);

	return function useRemoteData<T>(path = '') {

		const key = `${serviceUrl}|${path}|${HTTPMethod.get}`;
		const { isLoading, data, error } = useQuery<T, string>(key, () => {

			return request<T>({ path, method: HTTPMethod.get });

		});

		return {
			// null is recovered with undefined to match the RemoteData interface
			// which declares error as optional parameter 'error?: string;'
			error: error ?? undefined,
			isLoading,
			data,
		};

	};

}
