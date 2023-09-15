import { Theme } from '@radix-ui/themes';
import { ErrorBoundary } from 'react-error-boundary';
import {
	QueryClient,
	QueryClientProvider,
} from 'react-query';

import { ErrorFallback } from './ErrorFallback';

export function App() {

	const client = new QueryClient({
		defaultOptions: {
			queries: {
				useErrorBoundary: true,
				refetchOnWindowFocus: false,
				retry: false,
			},
		},
	});

	return (
		<Theme accentColor='sky'>
			<ErrorBoundary FallbackComponent={ ErrorFallback }>
				<QueryClientProvider client={ client } />
			</ErrorBoundary>
		</Theme>
	);

}
