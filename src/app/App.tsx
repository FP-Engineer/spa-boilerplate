import './App.css';
import '@radix-ui/themes/styles.css';

import { Theme } from '@radix-ui/themes';
import { ErrorBoundary } from 'react-error-boundary';
import { lazily } from 'react-lazily';
import {
	QueryClient,
	QueryClientProvider,
} from 'react-query';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import { useDarkMode } from 'usehooks-ts';

import { DevTools } from '@/components/dev-tools';
import { ErrorFallback } from '@/components/error-fallback';

const { CharactersRoutes } = lazily(() => import('@/features/characters'));

const client = new QueryClient({
	defaultOptions: {
		queries: {
			useErrorBoundary: true,
			refetchOnWindowFocus: false,
			retry: false,
		},
	},
});

const router = createBrowserRouter([ {
	path: '*',
	element: <CharactersRoutes />,
} ]);

export function App() {

	const { isDarkMode } = useDarkMode();
	const appearance = isDarkMode ? 'dark' : 'light';

	// FIXME: https://github.com/radix-ui/themes/issues/26
	document.body.classList.toggle('dark', isDarkMode);
	document.body.classList.toggle('light', !isDarkMode);

	return (
		<Theme appearance={ appearance } accentColor='blue'>
			<ErrorBoundary FallbackComponent={ ErrorFallback }>
				<QueryClientProvider client={ client }>
					<DevTools />
					<RouterProvider router={ router } />
				</QueryClientProvider>
			</ErrorBoundary>
		</Theme>
	);

}
