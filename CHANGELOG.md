# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0-alpha.32] - 2025-01-01

### Bug Fixes

- Solve some minor issues and update dependencies

## [1.0.0-alpha.31] - 2024-01-28

### Bug Fixes

- Solve some minor issues and update dependencies

## [1.0.0-alpha.30] - 2024-01-27

### Bug Fixes

- Solve some minor issues and update dependencies

## [1.0.0-alpha.29] - 2024-01-05

### Bug Fixes

- Solve some minor issues and update dependencies

## [1.0.0-alpha.28] - 2023-10-29

### Bug Fixes

- Solve some minor issues and update dependencies

## [1.0.0-alpha.26] - 2023-09-05

### Miscellaneous Tasks

- Update `cliff.toml` configuration for better changelog generation

## [1.0.0-alpha.23] - 2023-07-27

### Miscellaneous Tasks

- Update Github Actions workflow with usage guard

## [1.0.0-alpha.21] - 2023-07-23

### Miscellaneous Tasks

- Refine Github Release workflow

## [1.0.0-alpha.20] - 2023-07-23

### Miscellaneous Tasks

- Improve prerelease condition in Github workflow

## [1.0.0-alpha.19] - 2023-07-23

### Miscellaneous Tasks

- Add node version constraint to package.json

## [1.0.0-alpha.18] - 2023-07-23

### Miscellaneous Tasks

- Remove redundant `turbo-cache` id from pnpm, Add to turbo
- Update GitHub Actions release workflow

## [1.0.0-alpha.17] - 2023-07-19

### Miscellaneous Tasks

- Remove `develop` branch from build workflow

## [1.0.0-alpha.16] - 2023-07-18

### Miscellaneous Tasks

- Refactor build pipeline outputs in `turbo.json`
- Remove unnecessary test dependencies in `turbo.json`

## [1.0.0-alpha.14] - 2023-07-08

### Miscellaneous Tasks

- Add turbo.json configuration file for turbo.build
- Add `.turbo` to .gitignore
- Update package.json scripts
- Add turbo cache setup step on `build` workflow
- Update build workflow to limit parallel execution to 1

## [1.0.0-alpha.12] - 2023-07-05

### Testing

- Update module path ignore patterns in jest.config.js

### Miscellaneous Tasks

- Remove globals and modify Jest configuration for ESM support

## [1.0.0-alpha.11] - 2023-07-04

### Refactor

- Update and improve source codes

### Miscellaneous Tasks

- Update tsconfig.json for contracts and frontend
- Update Prettier formatting options
- Update package.json with new lint-staged script
- Refactor hooks configuration for pre-commit and pre-push
- Update build output directory and package paths

## [1.0.0-alpha.10] - 2023-07-04

### Refactor

- Remove unnecessary file extensions and imports

### Documentation

- Update dev command in frontend README
- Update project description

## [1.0.0-alpha.9] - 2023-07-04

### Refactor

- Add new component export and import shorthand for GradientBG

### Documentation

- Update README.md file with badges

### Miscellaneous Tasks

- Update package names and imports for zkapp-template

## [1.0.0-alpha.8] - 2023-07-04

### Refactor

- Update GradientBG component
- Update import order in `_document.tsx`, `hello.ts`, `index.tsx`
- Rename `GradientBG.js` to `GradientBG.tsx`

### Documentation

- Update project name and description

### Miscellaneous Tasks

- Add `lint` script in package.json
- Update `.eslintrc.json` to extend from `prettier`
- Ignore irrelevant files from .prettierignore
- Update prettier.config.js with new configuration
- Add `format` script to package.json
- Add `lint-staged` configuration for `frontend` package
- Update package.json scripts
- Removed API route from frontend package.

## [1.0.0-alpha.7] - 2023-07-03

### Miscellaneous Tasks

- Updated author information in package
- Update dev command in package

## [1.0.0-alpha.6] - 2023-07-02

### Documentation

- Update project template instructions

### Miscellaneous Tasks

- Update the import of the package `webapp` to `frontend`

## [1.0.0-alpha.5] - 2023-07-02

### Refactor

- Rename `webapp` package to the `frontend`

### Documentation

- Update README.md for Mina zkApp Template
- Create a new license file for the project (#13)

## [1.0.0-alpha.4] - 2023-07-02

### Documentation

- Update readme in contracts and webapp packages

## [1.0.0-alpha.3] - 2023-07-02

### Refactor

- Enable SnarkyJS by setting COOP and COEP headers

### Miscellaneous Tasks

- Restructure export and disable image optimization
- Update package.json with package manager version
- Add analyze script to package.json and devDependencies
- Bundle analyzer configuration added to next.config.js
- Update package name in package.json

## [1.0.0-alpha.2] - 2023-07-02

### Miscellaneous Tasks

- Update .npmrc configuration file
- Remove unnecessary pnpm lock files

## [1.0.0-alpha.1] - 2023-07-02

### Documentation

- Add supported funding model platforms
- Create a readme file with dummy info

### Miscellaneous Tasks

- Relocate CI workflow file out of contracts package
- Relocate `.husky` from contracts to the workspace
- Update dependabot configuration
- Add build workflow configuration for GitHub Actions
- Update `.npmrc` and enable pre-post scripts.
- Refactor project package names
- Delete CI workflow file
- Remove Node.js version 20.x from the build workflow matrix
- Add configuration file for git-cliff
- Create release workflow for generating changelog and publishing on GitHub

## [1.0.0-alpha.0] - 2023-07-02

### Miscellaneous Tasks

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
