import { useCallback } from 'react';
import { useInfiniteQuery } from 'react-query';

import { createCRUDClient } from '@/connectors';

import {
	Character,
	type CharacterData,
} from '../../models';

const baseUrl = import.meta.env.VITE_RICKNMORTYAPI_URL;
const endpoint = 'character';
const { read } = createCRUDClient(baseUrl);

export function useCharacters() {

	interface Info {
		count: number;
		pages: number;
		next?: string;
		prev?: string;
	}

	interface Page<T> {
		info: Info;
		results: Array<T>;
	}

	type CharactersPage = Page<CharacterData>;

	const path = `/${endpoint}`;
	const {
		isLoading,
		data: remoteData,
		error,
		fetchNextPage,
	} = useInfiniteQuery<CharactersPage, string>({
		queryKey: [ path ],
		queryFn: ({ pageParam = 1 }) => read<CharactersPage>({
			path,
			params: {
				page: pageParam,
			},
		}),
		getNextPageParam: (lastPage, allPages) => {

			const hasNextPage = !!lastPage.info.next;
			const nextPage = allPages.length + 1;

			return hasNextPage ? nextPage : undefined;

		},
	});
	const data = remoteData?.pages.flatMap((page) => page.results.map(Character.of));
	const count = remoteData?.pages.at(0)?.info.count;
	const next = useCallback(() => fetchNextPage(), [ fetchNextPage ]);

	return {
		// null is recovered with undefined to match the RemoteData interface
		// which declares error as optional parameter 'error?: string;'
		error: error ?? undefined,
		isLoading,
		data,
		next,
		count,
	};

}
