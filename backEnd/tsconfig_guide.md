# Backend TypeScript Setup Notes

This document explains the exact changes made to fix the TypeScript + module errors and how to run the backend.

## Problem We Fixed

You got this TypeScript error in `src/server.ts`:

- `ECMAScript imports and exports cannot be written in a CommonJS file under 'verbatimModuleSyntax'` (TS1295)

Root cause:

- `tsconfig.json` uses NodeNext + `verbatimModuleSyntax`, which expects ESM behavior.
- `package.json` did not originally declare ESM with `"type": "module"`.
- Scripts were trying to run `server.js` from project root, but your source file is `src/server.ts`.

## Changes Made (What + Why)

### 1) `package.json`: set ESM mode

Change:

- Added `"type": "module"`

Why:

- With `module: "nodenext"` in tsconfig.json , TypeScript decides module behavior using nearest `package.json`.
- Adding `"type": "module"` tells Node/TS to treat files as ESM, so `import` syntax is valid.

### 2) `package.json`: fix runtime scripts for TypeScript project

Changes:

- `"main": "dist/server.js"`
- Added `"build": "tsc"`
- `"dev": "nodemon --config nodemon.json"`
- `"start": "node dist/server.js"`

Why:

- Old scripts used `node server.js` / `nodemon server.js`, but that file did not exist in project root.
- New flow:
  - dev runs `.ts` with `nodemon` + `tsx` (auto restart on `.ts` changes)
  - build compiles to `dist`
  - start runs compiled JS

### 3) `tsconfig.json`: set explicit root directory

Change:

- `"rootDir": "./src"`

Why:

- TypeScript 6 requires explicit root dir in this setup to generate output layout correctly.
- This resolved the `TS5011` build error.

### 4) Tooling update

Changes:

- Installed `tsx` as dev dependency
- Reinstalled `nodemon` as dev dependency
- Added/updated `nodemon.json` to run `tsx src/server.ts`

Why:

- You wanted to keep `nodemon` to avoid manual restarts.
- `nodemon` now uses `nodemon.json` to watch `src` files and execute through `tsx`.

## Commands Used During Fix

```bash
# Install TS runner for dev
npm install -D tsx

# Build to verify TypeScript config
npm run build

# Keep nodemon for auto restart
npm install -D nodemon
```

## Commands To Run Project Now

From `link_shortener_platform/backEnd`:

```bash
# Development (auto-reload on file changes)
npm run dev

# Compile TypeScript -> dist/
npm run build

# Run compiled server
npm start
```

## Current Working Setup Summary

- Source entry: `src/server.ts`
- Build output: `dist/server.js`
- Module system: ESM (`"type": "module"`)
- TypeScript module config: `module: "nodenext"`, `moduleResolution: "nodenext"`
- Dev runner: `nodemon` with `tsx` execution from `package.json`
- Nodemon config file: `nodemon.json`
