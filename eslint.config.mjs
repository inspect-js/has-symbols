import ljharbConfig from '@ljharb/eslint-config/flat';

export default [
	...ljharbConfig,
	{
		rules: {
			'max-statements-per-line': ['error', { max: 2 }],
			'multiline-comment-style': 'off',
			'no-magic-numbers': 'off',
		},
	},
];
