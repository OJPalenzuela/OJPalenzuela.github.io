module.exports = {
	env: {
		browser: true,
		jest: true,
		es2021: true,
	},
	extends: ["plugin:react/recommended", "standard", "prettier"],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: "module",
	},
	plugins: ["react", "better-styled-components"],
	rules: {
		// indent: ['error', 2],
		strict: 0,
		"react/jsx-wrap-multilines": [
			"error",
			{
				declaration: "parens",
				assignment: "parens",
				return: "parens",
				arrow: "parens",
				condition: "ignore",
				logical: "ignore",
				prop: "ignore",
			},
		],
		"react/self-closing-comp": [
			"error",
			{
				component: true,
				html: true,
			},
		],
		"no-multi-spaces": "error",
		"react/jsx-closing-bracket-location": [1, "tag-aligned"],
		"no-unused-vars": [
			"error",
			{ vars: "all", args: "after-used", ignoreRestSiblings: false },
		],
		"no-use-before-define": "off",
		"react/react-in-jsx-scope": "off",
		"react/prop-types": "off",
		camelcase: "off",
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
