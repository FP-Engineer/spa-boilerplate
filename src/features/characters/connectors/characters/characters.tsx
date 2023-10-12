import { useCallback } from 'react';

import { createCRUDClient } from '@/connectors';

import {
	Character,
	type CharacterData,
} from '../../models';
import { useInfiniteQuery } from 'react-query';

const baseUrl = import.meta.env.VITE_RICKNMORTYAPI_URL;
const endpoint = 'character';
const { read } = createCRUDClient(baseUrl);

export function useCharacters() {

	type CharactersPage = {
		results: Array<CharacterData>,
		info: { next: string },
	};

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
				page: pageParam
			},
		}),
		getNextPageParam: (lastPage, allPages) => {
			
			const hasNextPage = !!lastPage.info.next;
			const nextPage = allPages.length + 1;

			return hasNextPage ? nextPage : undefined;
		},
	});
	const data = remoteData?.pages.flatMap((page) => page.results.map(Character.of));
	const next = useCallback(() => fetchNextPage(), [ fetchNextPage ]);

	return {
		// null is recovered with undefined to match the RemoteData interface
		// which declares error as optional parameter 'error?: string;'
		error: error ?? undefined,
		isLoading,
		data,
		next,
	};

}
