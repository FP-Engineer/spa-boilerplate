import '@radix-ui/themes/styles.css';
import 'https://unpkg.com/open-props';
import 'https://unpkg.com/open-props/normalize.min.css';
import { Theme } from '@radix-ui/themes';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './app';

const root = ReactDOM.createRoot(document.getElementById('root')!);

if (import.meta.env.MODE === 'dev') {

	const { browser: worker } = await import('./__mocks/browser');
	worker.start();

}

root.render(
	<React.StrictMode>
		<Theme>
			<App />
		</Theme>
	</React.StrictMode>,
);
