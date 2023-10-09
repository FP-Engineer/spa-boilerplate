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

export interface RemoteDataQuery {
	path: string;
	page: number;
}

export interface RemoteDataConnector {
	<T>(options: Partial<RemoteDataQuery>): RemoteData<T>;
}

export interface RemoteDataConnectorFactoryConfig {
	name: string;
	url: string;
}

export function connectRemoteData({ url, name }: RemoteDataConnectorFactoryConfig): RemoteDataConnector {

	const request = createAPIClient(url);

	return function useRemoteData<T>({ path = '', page }: Partial<RemoteDataQuery>) {

		const key = `${name}|${path}|${HTTPMethod.get}`;
		const { isLoading, data, error } = useQuery<T, string>({
			queryKey: [ key, page ],
			queryFn: () => request<T>({ path, method: HTTPMethod.get }),
			keepPreviousData: Number.isNaN(page),
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
