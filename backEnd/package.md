# Link Shortener Backend

This README summarizes the packages currently installed in this backend, how to install them, and why each one is used.

## Prerequisites

- Node.js and npm installed
- Open terminal in `link_shortener_platform/backEnd`

## Install Commands

### 1) Install runtime packages

```bash
npm install express cors dotenv mongoose nanoid
```

### 2) Install TypeScript and development packages

```bash
npm install -D typescript tsx nodemon @types/node @types/express @types/cors @types/mongoose
```

## Package Purpose

### Runtime dependencies (`dependencies`)

- `express`: Creates the HTTP server and API routes.
- `cors`: Enables Cross-Origin Resource Sharing so frontend apps can call your backend.
- `dotenv`: Loads environment variables from `.env` into `process.env`.
- `mongoose`: Connects to MongoDB and defines database models/schemas.
- `nanoid`: Generates short unique IDs (useful for short-link tokens).

### Development dependencies (`devDependencies`)

- `typescript`: Compiles `.ts` files and provides type-checking.
- `tsx`: Runs TypeScript files directly in development (`tsx src/server.ts`).
- `nodemon`: Watches files and auto-restarts the server when code changes.
- `@types/node`: Type definitions for Node.js APIs.
- `@types/express`: Type definitions for Express.
- `@types/cors`: Type definitions for CORS middleware.
- `@types/mongoose`: Type definitions for Mongoose.

## Current Run Commands

From `link_shortener_platform/backEnd`:

```bash
# Development: auto-restart on changes
npm run dev

# Compile TypeScript to dist/
npm run build

# Run compiled app
npm start
```

## Scripts Explanation

- `npm run dev` -> `nodemon --config nodemon.json`
  - Uses `nodemon.json` to watch `src` and run `tsx src/server.ts`.
- `npm run build` -> `tsc`
  - Compiles TypeScript from `src` to `dist`.
- `npm start` -> `node dist/server.js`
  - Runs compiled JavaScript output.

## Why `"type": "module"` Is Set

`package.json` includes `"type": "module"` so Node treats this project as ESM.  
This is required by your TypeScript setup (`module: "nodenext"` and `verbatimModuleSyntax`) so `import`/`export` works correctly.
