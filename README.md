# ![RealWorld Example App](logo.png)

> **React / Vite + SWC / Express.js / Sequelize / SQLite codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the [RealWorld](https://realworld.io/) spec and API.**

This codebase was created to demonstrate a fully fledged fullstack application built with **React / Vite + SWC / Express.js / Sequelize / SQLite** including CRUD operations, authentication, routing, pagination, and more. Development uses a local SQLite database by default, so no external database setup is required.

**[Demo app](https://conduit-realworld-example-app.fly.dev/)&nbsp;&nbsp;|&nbsp;&nbsp;[With Create React App](https://github.com/TonyMckes/conduit-realworld-example-app/tree/create-react-app)&nbsp;&nbsp;|&nbsp;&nbsp;[Other RealWorld Example Apps](https://codebase.show/projects/realworld?category=fullstack)**

> For more information on how to this works with other frontends/backends, head over to the [RealWorld](https://github.com/gothinkster/realworld) repo.

---

## Getting Started

These instructions will help you install and run the project on your local machine for development and testing.

### Prerequisites

Before you run the project, make sure that you have the following tools and software installed on your computer:

- Text editor/IDE (e.g., VS Code, Sublime Text, Atom)
- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download/) `v18.11.0+`
- [pnpm](https://pnpm.io/installation) `v11+`

### Installation

To install the project on your computer, follow these steps:

1. Clone the repository to your local machine.

   ```bash
   git clone https://github.com/TonyMckes/conduit-realworld-example-app.git
   ```

2. Navigate to the project directory.

   ```bash
   cd conduit-realworld-example-app
   ```

3. Install project dependencies by running the command:

   ```bash
   pnpm install
   ```

### Configuration

No configuration is required for local development. By default, the backend uses `backend/database.sqlite` and creates the schema automatically when the server starts.

Optional configuration:

1. Create a `backend/.env` file if you want to override the defaults.
2. Add environment variables as shown in [`backend/.env.example`](backend/.env.example).
3. Update Sequelize configuration in [`backend/config/config.js`](backend/config/config.js) if you want a different database setup.
4. If you switch away from SQLite, install the driver for your database:

   <details>
   <summary>Use one of the following commands to install:</summary><br/>

   ```bash
   pnpm add --filter backend pg pg-hstore  # PostgreSQL
   pnpm add --filter backend mysql2
   pnpm add --filter backend mariadb
   pnpm add --filter backend sqlite3       # SQLite (already installed)
   pnpm add --filter backend tedious       # Microsoft SQL Server
   pnpm add --filter backend oracledb      # Oracle Database
   ```

   Visit [Sequelize - Installing](https://sequelize.org/docs/v6/getting-started/#installing) for more information.

   ***

   </details>

Optionally, after the backend has started once and created the tables, populate the local database with dummy data:

   ```bash
   pnpm sqlz db:seed:all
   ```

If you seeded before the backend created the current SQLite schema and articles show up without authors, reset the local development database:

   ```bash
   rm -f backend/database.sqlite
   pnpm dev # wait for "Connection with development database has been established.", then stop it
   pnpm sqlz db:seed:all
   ```

### Usage

#### Development Server

To run the project, follow these steps:

1. Start the development server by executing the command:

   ```bash
   pnpm dev
   ```

2. Open a web browser and navigate to:
   - Home page should be available at [`http://localhost:3000/`](http://localhost:3000).
   - API endpoints should be available at [`http://localhost:3001/api`](http://localhost:3001/api).

#### Running Tests

To run tests, simply run the following command:

```bash
pnpm test
```

#### Production

The following command will build the production version of the app:

```bash
pnpm start
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [RealWorld](https://realworld.io/)
- [RealWorld (GitHub)](https://github.com/gothinkster/realworld)
- [CodebaseShow](https://codebase.show/)
- [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
