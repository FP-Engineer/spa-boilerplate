module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	settings: {
		'import/resolver': {
			typescript: {
				project: './tsconfig.json'
			}
		},
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
		tsconfigRootDir: './',
	},
	ignorePatterns: [
		'dist',
		'node_modules/*',
		'.eslintrc.cjs',
		'vite.config.ts',
	],
	extends: [
		'airbnb',
		'airbnb-typescript',
		'eslint:recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:testing-library/react',
	],
	overrides: [
		{
			files: ['src/**/*.ts', 'src/**/*.tsx'],
			plugins: ['react-refresh'],
			rules: {
				'no-tabs': 'off',
				'indent': 'off',
				'arrow-body-style': 'off',
				'object-curly-spacing': ['error', 'always'],
				'array-bracket-spacing': ['error', 'always'],
				'jsx-quotes': ['error', 'prefer-single'],
				'linebreak-style': ['error', 'unix'],
				'padded-blocks': ['error', { 'blocks': 'always' }],
				'react/prop-types': 'off',
				'react/require-default-props': 'off',
				'react/react-in-jsx-scope': 'off',
				'react/jsx-indent': ['error', 'tab'],
				'react/jsx-indent-props': [1, 'tab'],
				'react/jsx-curly-spacing': ['error', 'always'],
				'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
				'testing-library/prefer-screen-queries': 'off',
				'import/default': 'off',
				'import/prefer-default-export': 'off',
				'import/no-default-export': 2,
				'import/order': [ 'error', {
						groups: [
							'builtin',
							'external',
							'internal',
							'parent',
							'sibling',
							'index',
							'object',
						],
						'newlines-between': 'always',
						alphabetize: { order: 'asc', caseInsensitive: true },
					},
				],
				'jsx-a11y/anchor-is-valid': 'off',
				'@typescript-eslint/indent': ['error', 'tab'],
				'@typescript-eslint/no-unused-vars': ['error'],
				'@typescript-eslint/explicit-function-return-type': ['off'],
				'@typescript-eslint/explicit-module-boundary-types': ['off'],
				'@typescript-eslint/no-empty-function': ['off'],
				'@typescript-eslint/no-explicit-any': ['off'],
				'@typescript-eslint/no-shadow': ['off'],
				'@typescript-eslint/padding-line-between-statements': [ 'error',
					{ blankLine: 'never', prev: 'return', next: 'block-like' },
				]
			},
		},
		{
			// or whatever matches stories specified in .storybook/main.js
			'files': ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
			'rules': {
				'import/no-default-export': 0,
			}
		}
	],
};
