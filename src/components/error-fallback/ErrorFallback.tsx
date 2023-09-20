import { FallbackProps } from 'react-error-boundary';

import { ErrorMessage } from '@/components/error-message';

export function ErrorFallback({ error }: FallbackProps) {

	return <ErrorMessage>{ error.message }</ErrorMessage>;

}
