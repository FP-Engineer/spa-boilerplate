/// <reference types='vitest' />
/// <reference types='vite/client' />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import path from 'path';

export default async ({ mode }) => {

	const plugins = [
		react(),
		vanillaExtractPlugin(),
	];
	const options = {};

	if (mode === 'dev') {

		const { nodePolyfills } = await import('vite-plugin-node-polyfills');

		plugins.push(
			nodePolyfills({
				exclude: [
					'fs',
				],
				globals: {
					Buffer: true,
					global: true,
					process: true,
				},
				protocolImports: true,
			})
		);

		Object.assign(options, {
			define: {
				'__dirname': JSON.stringify(__dirname)
			}
		});
	}

	return defineConfig({
		plugins,
		envDir: './environments',
		server: {
			host: true,
			port: 8001,
		},
		test: {
			globals: true,
			environment: 'jsdom',
			setupFiles: ['vitest.setup.ts'],
			coverage: {
				provider: 'v8',
				exclude: ['src/__mocks/**'],
			},
		},
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src'),
			}
		},
		...options,
	});
}