## NextJS - Tailwind - Mongoose - Auth0 Test App

Features:
- Basic Login using Auth0
- Basic Ticket creation, deletion, and editing
- Basic Team viewing using mock data
- Basic authentication via email and password or via Google account

## How to run

Install packages using:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Create `.env.local` file with the appropriate information.

### Note

This will require you to create an account with MongoDB and Auth0.

Run app using:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
## Schema information

Each model is premade, you are free to modify any existing information.
Each ticket model contains the following Schema:
```javascript
const ticketSchema = Schema(
    {
        user_id: String,
        title: String,
        description: String,
        category: String,
        priority: Number,
        progress: Number,
        status: String,
        active: Boolean,
    },
    {
        timestamps: true,
    }
)
```