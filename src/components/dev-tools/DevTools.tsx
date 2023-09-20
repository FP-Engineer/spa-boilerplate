import { ReactQueryDevtools } from 'react-query/devtools';

export function DevTools() {

	return import.meta.env.MODE === 'dev' ? <ReactQueryDevtools /> : null;

}
