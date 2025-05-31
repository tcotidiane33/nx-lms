// eslint.config.mjs;
import eslint from '@eslint/js';
import nxPlugin from '@nx/eslint-plugin';
import eslintPluginImport from 'eslint-plugin-import';
import tailwindPlugin from 'eslint-plugin-tailwindcss';

export default [
  eslint.configs.recommended,
  ...(nxPlugin.configs['flat/base'] || []),
  ...(nxPlugin.configs['flat/typescript'] || []),
  ...(nxPlugin.configs['flat/javascript'] || []),
  ...(nxPlugin.configs['flat/react'] || []),
  ...(Array.isArray(nxPlugin.configs['flat/jsx-runtime']) ? nxPlugin.configs['flat/jsx-runtime'] : []),
  ...(nxPlugin.configs['flat/recommended'] || []),
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      parserOptions: {
        projectService: false,
      },
    },
  },
  {
    plugins: {
      import: eslintPluginImport,
      tailwindcss: tailwindPlugin,
    },
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
          // allowImportingTsExtensions: true,
        },
      ],
      // Optional Tailwind CSS rules
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/enforces-negative-arbitrary-values': 'warn',
      'tailwindcss/enforces-shorthand': 'warn',
      'tailwindcss/migration-from-tailwind-2': 'warn',
      'tailwindcss/no-arbitrary-value': 'off',
      'tailwindcss/no-custom-classname': 'warn',
      'tailwindcss/no-contradicting-classname': 'error',
    },
    

    files: ['**/*.{ts,tsx,js,jsx,mjs,json}'],
    ignores: [
      '**/dist',
      '**/vite.config.*.timestamp*',
      '**/vitest.config.*.timestamp*',
    ],
  },

];


// This ESLint configuration is designed to work with Nx and TypeScript projects.
// It includes recommended rules, Nx plugin configurations, and import plugin settings.
// The configuration enforces module boundaries and allows specific exceptions for ESLint config files.
// It also ignores certain directories and files related to build outputs and timestamps.
// Ensure that you have the necessary dependencies installed:
// - @eslint/js
// - eslint-plugin-import
// - @nx/eslint-plugin
// This setup is suitable for maintaining code quality and consistency across your Nx workspace.
