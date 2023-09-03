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
		<App />
	</React.StrictMode>,
);
