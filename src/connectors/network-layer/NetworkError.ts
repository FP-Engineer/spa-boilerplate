import { AxiosError } from 'axios';

export class NetworkError extends Error {
	static of(error: AxiosError): NetworkError {

		const msg = error.response
			? `Received Status Code: ${error.response?.status} with Data: ${JSON.stringify(error.response?.data)}`
			: error.request
				? `The request was made but no response was received: ${error.message}`
				: `Something happened in setting up the request: ${error.message}`;

		return new NetworkError(msg, { cause: error });

	}

	constructor(msg: string, options: ErrorOptions) {

		super(msg, options);
		this.name = 'NetworkError';

	}
}
