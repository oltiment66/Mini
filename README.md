# AI FREE Mini App

Persian-first AI FREE command room for Railway. This build is a polished frontend prototype with responsive dashboard, model library, provider network, bot chat view, settings, pagination, search, folder filters, modal forms and live UI feedback.

## Railway
1. Deploy this folder from GitHub or upload the project.
2. Railway detects Node and runs `node server.js`.
3. No environment variable is required for the visual app.

## Bot connection
The interface is prepared as the control surface. To connect it to the Telegram bot's real data, expose authenticated JSON endpoints from the bot backend and replace the sample arrays in `src/App.jsx` with fetch calls. Never put Telegram or provider API keys in browser code.
