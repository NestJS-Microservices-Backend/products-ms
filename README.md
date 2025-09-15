# Products Microservice

This is a **NestJS** microservice for managing products within a larger microservices architecture. It uses **Prisma** as an ORM to connect to a database.

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
- [pnpm](https://pnpm.io/) (or npm/yarn)

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

## Running the Application

To run the application in development mode with hot-reloading, use:

```bash
npm run start:dev
```

For production mode:

```bash
npm run start:prod
```

## Available Scripts

- `build`: Compiles the TypeScript code.
- `format`: Formats the code using Prettier.
- `start`: Starts the application.
- `start:dev`: Starts the application in development mode with hot-reloading.
- `start:debug`: Starts the application in debug mode.
- `start:prod`: Starts the application in production mode.
- `lint`: Lints the code using ESLint.
- `test`: Runs the tests.
- `test:watch`: Runs the tests in watch mode.
- `test:cov`: Generates a test coverage report.
- `test:debug`: Runs the tests in debug mode.
- `test:e2e`: Runs the end-to-end tests.

## Environment Variables

This project uses a `.env` file for environment variables. Create a `.env` file in the root of the project by copying the template:

```bash
cp .env.template .env
```

The main variable to configure is the database connection string:

```
# .env
DATABASE_URL="file:./dev.db"
```

## Database

This project uses **Prisma** to manage the database schema and queries.

-   **Schema:** The database schema is defined in `prisma/schema.prisma`.
-   **Migrations:** To apply pending migrations, run:
    ```bash
    npx prisma migrate dev
    ```
-   **Prisma Studio:** To view and manage data in the database, you can use Prisma Studio:
    ```bash
    npx prisma studio
    ```

## Available Operations (Message Patterns)

This microservice communicates via message patterns. The following commands are available:

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

## Technologies Used

- [NestJS](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)
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
-   `node_modules/`: Directory where dependencies are installed.

## Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m '''feat: Add some feature'''`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Create a new Pull Request.

Please make sure to update tests as appropriate.
