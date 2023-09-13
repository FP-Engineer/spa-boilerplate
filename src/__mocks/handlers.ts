// eslint-disable-next-line import/no-extraneous-dependencies
import {
	DefaultBodyType, MockedRequest, RestHandler, rest,
} from 'msw';

export const handlers = [
	rest.get('https://api.example.com/happy/path', (_, res, ctx) => res(
		ctx.status(200),
		ctx.json({
			payload: 'success',
		}),
	)),
	rest.get('https://api.example.com/server/error', (_, res, ctx) => res(
		ctx.status(501),
		ctx.json({ message: 'server error' }),
	)),
] as RestHandler<MockedRequest<DefaultBodyType>>[];
