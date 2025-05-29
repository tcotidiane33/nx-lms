// eslint.config.mjsimport eslint from '@eslint/js';
import eslint from '@eslint/js';
import nxPlugin from '@nx/eslint-plugin';
import eslintPluginImport from 'eslint-plugin-import';

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
          allowImportingTsExtensions: true,
        },
      ],
    },
    /*
    *  "rules": {
      "@nx/enforce-module-boundaries": [
        "error",
        {
          "allow": ["@assets/*"],

          "enforceBuildableLibDependency": true,
          "depConstraints": [
            {
              "sourceTag": "*",
              "onlyDependOnLibsWithTags": ["*"]
            }
          ],
          allowImportingTsExtensions: true,

        }
      ]
    },*/

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
