import { connectRemoteData } from '@/connectors';

import {
	Character,
	type CharacterData,
} from '../../models';

const baseUrl = import.meta.env.VITE_RICKNMORTYAPI_URL;
const endpoint = 'character';
const url = `${baseUrl}/${endpoint}`;
const useRemoteData = connectRemoteData(url);

export function useCharacters() {

	const { data: remoteData, error, isLoading } = useRemoteData<{ results: Array<CharacterData> }>();
	const data = remoteData?.results.map(Character.of);

	return { data, error, isLoading };

}
