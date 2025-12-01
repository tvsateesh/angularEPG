# Getting Started
To start the application, navigate to the project directory and run:
```markdown
# angularEPG — Getting Started

This repository contains a simple Angular-based EPG (electronic program guide) application and a small Node/Express server (`server.js`) used to serve the app and API endpoints.

**What's included:**
- the Angular web app files under the project root (`index.html`, `js/`, `css/`, `partials/`)
- a Node server entrypoint: `server.js`

---

## Requirements
- Node.js v18 or newer (see `package.json` `engines.node`).
- npm (comes with Node.js) or an alternative package manager.

## Install
From the project root run:

```bash
npm install
```

This installs the server and dev dependencies.

## Run the server (production)
Starts the Node server that serves the static app and any API routes defined in `server.js`.

```bash
npm start
```

By default the server will use the `PORT` environment variable if present, otherwise it will use the port configured in `server.js` (commonly `3000` or `8080`). Example to run on port 8080:

```bash
PORT=8080 npm start
```

## Run in development (auto-reload)
Use the `dev` script to run the server with `nodemon` so it restarts when server files change:

```bash
npm run dev
```

## Serve the Angular app locally (static dev)
The app is plain static HTML/JS/CSS — if you want to host only the static files locally for quick testing, you can use a static server such as `npx serve`:

```bash
npx serve . -p 5000
# then open http://localhost:5000
```

## Environment & common options
- `PORT` — port number for the Node server (e.g. `PORT=8080`).
- `NODE_ENV=production|development` — standard Node environment flag.

## Notes, compatibility & troubleshooting
- `package.json` now targets Node >=18.0.0. Use a compatible Node version (nvm is handy: `nvm use 18`).
- `express` was upgraded to 5.x — Express 5 includes some breaking changes from 4.x. If you see runtime errors, pin `express` back to `^4.18.x` in `package.json` and run `npm install`.
- After upgrading dependencies you may see vulnerabilities reported by `npm audit`. To inspect and attempt safe fixes run:

```bash
npm audit
npm audit fix
```

Use `npm audit fix --force` only if you accept possible breaking changes.

If something goes wrong and you want to revert the dependency changes, the original `package.json` was backed up as `package.json.bak` in the project root. To revert:

```bash
mv package.json.bak package.json
rm -rf node_modules package-lock.json
npm install
```

## Quick commands
- Install: `npm install`
- Start (prod): `npm start`
- Dev (auto-reload): `npm run dev`
- Serve static files locally: `npx serve . -p 5000`
- Fix audits: `npm audit fix`

---

If you want, I can also:
- run `npm audit fix` and apply safe fixes now
- start the server here to smoke-test it
- commit the `package.json` and `package-lock.json` changes and open a PR

``` 


