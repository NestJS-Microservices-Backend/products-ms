# Products Microservice

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

This is the **Products Microservice**, a key component of the Backend-MS project. It is a robust and scalable application built with [NestJS](https://nestjs.com/), designed to handle all operations related to product management, including creation, retrieval, updating, and deletion of products.

## Key Features

- **CRUD Operations:** Full support for managing product data.
- **Validation:** Implements `class-validator` and `class-transformer` for robust request data validation.
- **Database Integration:** Uses [Prisma ORM](https://www.prisma.io/) for efficient and type-safe database access.
- **Configuration:** Environment-based configuration for easy setup across different environments (development, production, etc.).

---

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v22.x or higher recommended)
- [NPM](https://www.npmjs.com/)
- A running instance of a compatible database (e.g., PostgreSQL, MySQL). This project is pre-configured to use a local SQLite database for ease of setup.

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd products-ms
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Configuration:**
    Copy the environment template file and update it with your local configuration.
    ```bash
    cp .env.template .env
    ```
    Open the `.env` file and set the `PORT` and `DATABASE_URL`. For the default SQLite setup, the `DATABASE_URL` should look like this:
    ```
    DATABASE_URL="file:./dev.db"
    ```

4.  **Database Migration:**
    Apply the database schema and migrations using Prisma.
    ```bash
    npx prisma migrate dev
    ```
    This command will create the database file (if it doesn't exist) and apply all pending migrations.

---

## Running the Application

```bash
# Development mode with watch
$ npm run start:dev

# Production mode
$ npm run build
$ npm run start:prod
```

The application will be running on the port specified in your `.env` file (default is `3000`).

---

## Running Tests

This project uses [Jest](https://jestjs.io/) for unit and end-to-end testing.

```bash
# Run all unit tests
$ npm run test

# Run end-to-end tests
$ npm run test:e2e

# Get test coverage report
$ npm run test:cov
```

---

## API Reference

Once the application is running, the API is exposed. By default, NestJS applications provide an OpenAPI (Swagger) specification. While not explicitly configured in the base project, you can add it to explore the available endpoints.

The main endpoint for this microservice is:

- `/api/products`

---

## License

This project is [MIT licensed](LICENSE).
