import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ['**/*.{js,mjs,cjs,jsx}'] },
    { languageOptions: { globals: globals.browser } },
    {
        rules: {
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'no-unused-vars': 'warn',
        },
    },
    pluginJs.configs.recommended,
    pluginReact.configs.flat.recommended,
    reactRefresh.configs.recommended,
    eslintConfigPrettier,
    {
        plugins: {
            'react-hooks': pluginReactHooks,
        },
        rules: { ...pluginReactHooks.configs.recommended.rules },
    },
];
