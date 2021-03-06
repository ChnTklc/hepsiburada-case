module.exports = {
	extends: [
		'airbnb-typescript',
		'airbnb/hooks',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended'
	],
	plugins: ['react', '@typescript-eslint', 'eslint-plugin-react', 'eslint-plugin-react-hooks', 'import', 'prettier'],
	env: {
		browser: true,
		node: true,
		es6: true
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		project: './tsconfig.json',
		ecmaVersion: 2018,
		ecmaFeatures: {
			jsx: true
		}
	},
	rules: {
		'prettier/prettier': 'error',
		'linebreak-style': 'off',
		quotes: ['error', 'single'],
		'@typescript-eslint/member-delimiter-style': [
			'error',
			{
				multiline: {
					delimiter: 'semi',
					requireLast: true
				},
				singleline: {
					delimiter: 'semi',
					requireLast: false
				}
			}
		],
		'@typescript-eslint/no-this-alias': [
			'error',
			{
				allowDestructuring: true
			}
		],
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
		'@typescript-eslint/no-unused-expressions': [
			'error',
			{
				allowShortCircuit: true,
				allowTernary: true,
				enforceForJSX: true
			}
		],
		'no-nested-ternary': 'off',
		'@typescript-eslint/semi': ['error', 'always'],
		'arrow-parens': ['off', 'always'],
		curly: ['error', 'multi-line'],
		'eol-last': 'error',
		eqeqeq: ['error', 'smart'],
		'id-blacklist': 'error',
		'id-match': 'error',
		'no-duplicate-imports': 'error',
		'no-eval': 'error',
		'no-multiple-empty-lines': 'error',
		'no-new-wrappers': 'error',
		'no-trailing-spaces': 'error',
		'no-underscore-dangle': 'error',
		'no-var': 'error',
		'object-shorthand': 'error',
		'one-var': ['error', 'never'],
		'prefer-const': 'error',
		'prefer-template': 'error',
		'quote-props': ['error', 'as-needed'],
		radix: 'error',
		'react/jsx-boolean-value': ['error', 'never'],
		'react/jsx-key': 'error',
		'react/jsx-no-bind': ['error', { allowArrowFunctions: true }],
		'react/self-closing-comp': 'error',
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'always',
				named: 'never'
			}
		],
		'spaced-comment': [
			'error',
			'always',
			{
				markers: ['/']
			}
		],
		'react/react-in-jsx-scope': 'off',
		'react/destructuring-assignment': 'warn',
		'react/button-has-type': 'warn',
		'react/prefer-stateless-function': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'jsx-a11y/no-noninteractive-element-to-interactive-role': 'off',
		'max-len': 'off'
	}
};
