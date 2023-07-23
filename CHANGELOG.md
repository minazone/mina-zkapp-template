# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0-alpha.19] - 2023-07-23

### <!-- 08 -->Miscellaneous Tasks

- Add node version constraint to package.json

## [1.0.0-alpha.18] - 2023-07-23

### <!-- 07 -->Continuous Integrations

- Update GitHub Actions release workflow

### <!-- 08 -->Miscellaneous Tasks

- Bump turbo from 1.10.8 to 1.10.9 
- Bump @cloudflare/workers-types 
- Remove redundant 'turbo-cache' id from pnpm, Add to turbo

## [1.0.0-alpha.17] - 2023-07-19

### <!-- 07 -->Continuous Integrations

- Remove `develop` branch from build workflow

### <!-- 08 -->Miscellaneous Tasks

- Bump @typescript-eslint/eslint-plugin 
- Bump pnpm from 8.6.8 to 8.6.9 
- Bump wrangler from 3.2.0 to 3.3.0 

## [1.0.0-alpha.16] - 2023-07-18

### <!-- 06 -->Build Environment

- Refactor build pipeline outputs in `turbo.json`
- Remove unnecessary test dependencies in `turbo.json`

### <!-- 08 -->Miscellaneous Tasks

- Bump @babel/preset-env from 7.22.7 to 7.22.9 
- Bump eslint from 8.44.0 to 8.45.0 
- Bump @cloudflare/workers-types 
- Bump eslint-config-next from 13.4.9 to 13.4.10 
- Bump @types/node from 20.4.1 to 20.4.2 
- Bump @next/bundle-analyzer from 13.4.9 to 13.4.10 
- Bump snarkyjs from 0.11.4 to 0.12.1 
- Bump @typescript-eslint/parser from 6.0.0 to 6.1.0 
- Bump next from 13.4.9 to 13.4.10 
- Bump @types/react-dom from 18.2.6 to 18.2.7 
- Bump tailwindcss from 3.3.2 to 3.3.3 
- Bump @types/react from 18.2.14 to 18.2.15 

## [1.0.0-alpha.15] - 2023-07-18

### <!-- 08 -->Miscellaneous Tasks

- Bump @types/node from 20.4.0 to 20.4.1 
- Bump pnpm from 8.6.6 to 8.6.7 
- Bump @typescript-eslint/parser from 5.61.0 to 6.0.0 
- Bump prettier-plugin-tailwindcss from 0.3.0 to 0.4.0 
- Bump postcss from 8.4.25 to 8.4.26 
- Bump prettier-plugin-tailwindcss from 0.4.0 to 0.4.1 
- Bump pnpm from 8.6.7 to 8.6.8 
- Bump @types/jest from 29.5.2 to 29.5.3 
- Bump wrangler from 3.1.2 to 3.2.0 
- Bump prettier-plugin-organize-imports 
- Bump turbo from 1.10.7 to 1.10.8 

## [1.0.0-alpha.14] - 2023-07-08

### <!-- 07 -->Continuous Integrations

- Add turbo cache setup step on `build` workflow
- Update build workflow to limit parallel execution to 1

### <!-- 08 -->Miscellaneous Tasks

- Bump eslint-config-next from 13.4.8 to 13.4.9 
- Bump jest from 29.6.0 to 29.6.1 
- Bump @next/bundle-analyzer from 13.4.8 to 13.4.9 
- Bump postcss from 8.4.24 to 8.4.25 
- Add turbo.json configuration file for turbo.build
- Update package.json with `turbo` dependency
- Add `.turbo` to .gitignore
- Update package.json scripts

## [1.0.0-alpha.13] - 2023-07-07

### <!-- 07 -->Continuous Integrations

- Bump actions/setup-node from 3.6.0 to 3.7.0 

### <!-- 08 -->Miscellaneous Tasks

- Bump @types/node from 20.3.3 to 20.4.0 
- Bump prettier from 2.8.8 to 3.0.0 
- Bump next from 13.4.8 to 13.4.9 
- Bump snarkyjs from 0.11.3 to 0.11.4 
- Bump @cloudflare/workers-types 
- Bump wrangler from 3.1.1 to 3.1.2 
- Bump @babel/preset-env from 7.22.6 to 7.22.7 

## [1.0.0-alpha.12] - 2023-07-05

### <!-- 03 -->Testing

- Update module path ignore patterns in jest.config.js

### <!-- 08 -->Miscellaneous Tasks

- Bump jest from 29.5.0 to 29.6.0 
- Bump @babel/preset-env from 7.22.5 to 7.22.6 
- Remove globals and modify Jest configuration for ESM support

## [1.0.0-alpha.11] - 2023-07-04

### <!-- 04 -->Refactor

- Update and improve source codes

### <!-- 08 -->Miscellaneous Tasks

- Update tsconfig.json for contracts and frontend
- Update Prettier formatting options
- Relocate `prettier-plugin-organize-imports` as a dev-dependency in workspace root
- Update package.json with new lint-staged script
- Refactor hooks configuration for pre-commit and pre-push
- Update build output directory and package paths

## [1.0.0-alpha.10] - 2023-07-04

### <!-- 04 -->Refactor

- Remove unnecessary file extensions and imports

### <!-- 05 -->Documentation

- Update dev command in frontend README
- Update project description

## [1.0.0-alpha.9] - 2023-07-04

### <!-- 04 -->Refactor

- Add new component export and import shorthand for GradientBG

### <!-- 05 -->Documentation

- Update README.md file with badges

### <!-- 08 -->Miscellaneous Tasks

- Update package names and imports for zkapp-template

## [1.0.0-alpha.8] - 2023-07-04

### <!-- 04 -->Refactor

- Update GradientBG component
- Update import order in `_document.tsx`, `hello.ts`, `index.tsx`
- Rename `GradientBG.js` to `GradientBG.tsx`

### <!-- 05 -->Documentation

- Update project name and description

### <!-- 08 -->Miscellaneous Tasks

- Bump pnpm from 8.6.5 to 8.6.6 
- Bump @next/bundle-analyzer from 13.4.7 to 13.4.8 
- Bump @typescript-eslint/eslint-plugin 
- Bump eslint-config-next from 13.4.7 to 13.4.8 
- Bump wrangler from 3.1.0 to 3.1.1 
- Bump @typescript-eslint/parser from 5.60.1 to 5.61.0 
- Bump next from 13.4.7 to 13.4.8 
- Add `lint` script in package.json
- Add `eslint-config-prettier` to the dev-dependencies
- Add `prettier` to the workspace dependencies
- Update `.eslintrc.json` to extend from `prettier`
- Ignore irrelevant files from .prettierignore
- Add `prettier-plugin-organize-imports` to dev-dependencies
- Add `prettier-plugin-tailwindcss` to dev-dependencies
- Update prettier.config.js with new configuration
- Add `format` script to package.json
- Add `lint-staged` configuration for `frontend` package
- Relocate `lint-staged` to workspace dev-dependencies
- Update package.json scripts
- Removed API route from frontend package.

## [1.0.0-alpha.7] - 2023-07-03

### <!-- 08 -->Miscellaneous Tasks

- Updated author information in package
- Add new dev dependency and update existing ones
- Update dev command in package

## [1.0.0-alpha.6] - 2023-07-02

### <!-- 05 -->Documentation

- Update project template instructions

### <!-- 08 -->Miscellaneous Tasks

- Update the import of the package `webapp` to `frontend`

## [1.0.0-alpha.5] - 2023-07-02

### <!-- 04 -->Refactor

- Rename `webapp` package to the `frontend`

### <!-- 05 -->Documentation

- Update README.md for Mina zkApp Template
- Create a new license file for the project 

### <!-- 08 -->Miscellaneous Tasks

- Bump jest and @types/jest 
- Bump ts-jest from 27.0.7 to 29.1.1 
- Bump @typescript-eslint/parser from 5.5.0 to 5.60.1 
- Relocate `eslint` to workspace root package
- Relocate `typescript` to workspace root package

## [1.0.0-alpha.4] - 2023-07-02

### <!-- 05 -->Documentation

- Update readme in contracts and webapp packages

### <!-- 08 -->Miscellaneous Tasks

- Bump @babel/preset-typescript from 7.16.0 to 7.22.5 
- Bump eslint from 8.7.0 to 8.44.0 
- Bump typescript from 4.7.2 to 5.1.6 

## [1.0.0-alpha.3] - 2023-07-02

### <!-- 04 -->Refactor

- Enable SnarkyJS by setting COOP and COEP headers

### <!-- 08 -->Miscellaneous Tasks

- Restructure export and disable image optimization
- Install `pnpm` as a dev-dependency
- Update package.json with package manager version
- Add analyze script to package.json and devDependencies
- Bundle analyzer configuration added to next.config.js
- Update snarkyjs version to 0.11.3
- Update package name in package.json

## [1.0.0-alpha.2] - 2023-07-02

### <!-- 08 -->Miscellaneous Tasks

- Bump prettier from 2.3.2 to 2.8.8 
- Bump eslint-plugin-snarkyjs from 0.1.0 to 0.3.0 
- Bump husky from 7.0.1 to 8.0.3 
- Bump lint-staged from 11.0.1 to 13.2.3 
- Bump @babel/preset-env from 7.16.4 to 7.22.5 
- Bump @typescript-eslint/eslint-plugin 
- Update .npmrc configuration file
- Replace exact versions instead of carrot
- Remove unnecessary pnpm lock files

## [1.0.0-alpha.1] - 2023-07-02

### <!-- 05 -->Documentation

- Add supported funding model platforms
- Create a readme file with dummy info

### <!-- 07 -->Continuous Integrations

- Relocate CI workflow file out of contracts package
- Update dependabot configuration
- Add build workflow configuration for GitHub Actions
- Delete CI workflow file
- Remove Node.js version 20.x from the build workflow matrix
- Create release workflow for generating changelog and publishing on GitHub

### <!-- 08 -->Miscellaneous Tasks

- Relocate `.husky` from contracts to the workspace
- Update `.npmrc` and enable pre-post scripts.
- Refactor project package names
- Update dependencies and import statements of packages
- Add configuration file for git-cliff

## [1.0.0-alpha.0] - 2023-07-02

### <!-- 08 -->Miscellaneous Tasks

- Add `.nvmrc` with version 16
- Replace `npm` lock file by `pnpm` one
- Add `.npmrc` file to contracts directory
- Update `transformIgnorePatterns` on jest configs
- Remove unnecessary files and directories from version control
- Move contracts and ui directories to packages directory
- Add package.json to the repository root
- Create pnpm workspace configuration file
- Update package versions to 1.0.0-alpha.0
- Update `prepare` script in `package.json`
- Relocated `.npmrc` file in contracts package to workspace root
- Add `build` and `test` scripts to the workspace package
- Rename UI folder to WebApp in packages

<!-- generated by git-cliff -->
