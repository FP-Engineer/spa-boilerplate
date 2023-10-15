import {
	Routes,
	Route,
} from 'react-router-dom';

import { Characters } from '../components';

export function CharactersRoutes() {

	return (
		<Routes>
			<Route path='spa-boilerplate/' element={ <Characters /> } />
		</Routes>
	);

}
