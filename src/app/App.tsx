import { ErrorBoundary } from 'react-error-boundary';
import {
	QueryClient,
	QueryClientProvider,
} from 'react-query';

import { Landing } from '@/features/characters/components/landing';

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
		<ErrorBoundary FallbackComponent={ ErrorFallback }>
			<QueryClientProvider client={ client }>
				<Landing />
			</QueryClientProvider>
		</ErrorBoundary>
	);

}
