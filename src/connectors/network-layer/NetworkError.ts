import { AxiosError } from 'axios';

export class NetworkError extends Error {
	static of(error: AxiosError): NetworkError {

		let msg = '';

		if (error.response) {

			msg = `
				Received Status Code: ${error.response?.status}
				--> ${error.response?.statusText}
				with data: ${error.response?.data}
			`;

		} else if (error.request) {

			msg = `
				The request was made but no response was received:
				${error.message}
			`;

		} else {

			msg = `
				Something happened in setting up the request:
				${error.message}
			`;

		}

		return new NetworkError(msg, { cause: error });

	}

	constructor(msg: string, options: ErrorOptions) {

		super(msg, options);
		this.name = 'NetworkError';

	}
}
