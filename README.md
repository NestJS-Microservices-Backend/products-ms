# Products Microservice

This is a **NestJS** microservice for managing products within a larger microservices architecture. It uses **Prisma** as an ORM to connect to a database and communicates with other services via **NATS**.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running the Application](#running-the-application)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)
- [Database](#database)
- [Available Operations (Message Patterns)](#available-operations-message-patterns)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v22.x or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd products-ms
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```
4.  Set up your environment variables by copying the template:
    ```bash
    cp .env.template .env
    ```
    Then, fill in the required values in the `.env` file. See [Environment Variables](#environment-variables) for more details.

## Running the Application

To run the application in development mode with hot-reloading, use:

```bash
npm run start:dev
```

This command will first run `prisma migrate dev` to apply any pending database migrations and generate the Prisma client, then it will start the NestJS application with file watching enabled.

For production mode:

1.  Build the application:
    ```bash
    npm run build
    ```
2.  Start the server:
    ```bash
    npm run start:prod
    ```

## Available Scripts

- `npm run build`: Compiles the TypeScript source code into JavaScript for production.
- `npm run format`: Formats all source files using Prettier.
- `npm run start`: Starts the application from compiled code (for production).
- `npm run start:dev`: Starts the application in development mode with hot-reloading. Automatically runs database migrations.
- `npm run start:debug`: Starts the application in debug mode.
- `npm run start:prod`: Starts the application in production mode.
- `npm run lint`: Lints the source code using ESLint.
- `npm run test`: Runs unit tests.
- `npm run test:watch`: Runs tests in watch mode.
- `npm run test:cov`: Generates a test coverage report.
- `npm run test:e2e`: Runs end-to-end tests.

## Environment Variables

This project requires the following environment variables, which can be set in a `.env` file:

-   `PORT`: The port the microservice will listen on.
-   `DATABASE_URL`: The connection string for the database.
    -   Example for local SQLite: `file:./dev.db`
-   `NATS_SERVERS`: A comma-separated list of NATS server URLs.
    -   Example: `nats://localhost:4222`

Example `.env` file:
```
PORT=3001
DATABASE_URL="file:./dev.db"
NATS_SERVERS=nats://localhost:4222
```

## Database

This project uses **Prisma** to manage the database schema and queries.

-   **Schema:** The database schema is defined in `prisma/schema.prisma`.
-   **Migrations:** While `npm run start:dev` handles migrations automatically, you can also run them manually:
    ```bash
    npx prisma migrate dev
    ```
-   **Prisma Studio:** To view and manage data in the database, you can use Prisma Studio:
    ```bash
    npx prisma studio
    ```

## Available Operations (Message Patterns)

This microservice communicates via NATS using message patterns. The following commands are available:

-   `{ cmd: 'create_product' }`
    -   **Payload:** `CreateProductDto`
    -   **Description:** Creates a new product.
-   `{ cmd: 'find_all_products' }`
    -   **Payload:** `PaginationDto` (`{ page, limit }`)
    -   **Description:** Retrieves a paginated list of products.
-   `{ cmd: 'find_one_product' }`
    -   **Payload:** `{ id: number }`
    -   **Description:** Finds a single product by its ID.
-   `{ cmd: 'update_product' }`
    -   **Payload:** `UpdateProductDto`
    -   **Description:** Updates a product's details.
-   `{ cmd: 'delete_product' }`
    -   **Payload:** `{ id: number }`
    -   **Description:** Deletes a product by its ID.
-   `{ cmd: 'validate_products' }`
    -   **Payload:** `number[]` (Array of product IDs)
    -   **Description:** Validates if a list of products exists, returning the validated products.

## Technologies Used

- [NestJS](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)
- [NATS](https://nats.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)

## Project Structure

The project follows a standard NestJS application structure:

-   `src/`: Contains the main source code.
    -   `main.ts`: The application entry point.
    -   `app.module.ts`: The root module of the application.
    -   `common/`: Shared modules, DTOs, and utilities.
    -   `config/`: Environment variable configuration.
    -   `products/`: The main business logic module for products, including controllers, services, DTOs, and entities.
-   `prisma/`: Contains the database schema (`schema.prisma`) and migrations.
-   `dist/`: The output directory for the compiled JavaScript code.

---

## Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m '''feat: Add some feature'''`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Create a new Pull Request.

Please make sure to update tests as appropriate.