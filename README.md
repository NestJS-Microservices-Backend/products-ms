# Products Microservice

This is a **NestJS** microservice for managing products within a larger microservices architecture. It uses **Prisma** as an ORM and communicates with other services via **NATS**.

## Technologies Used

- [NestJS](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)
- [NATS](https://nats.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v21.x or higher recommended)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/) (Optional)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd products-ms
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Set up environment variables:**
    Copy the template file and fill in your configuration.
    ```bash
    cp .env.template .env
    ```

## Environment Variables

The application requires the following variables in a `.env` file:

- `PORT`: The port for the microservice to listen on (e.g., `3001`).
- `DATABASE_URL`: The connection string for the database (e.g., for SQLite: `file:./dev.db`).
- `NATS_SERVERS`: Comma-separated list of NATS server URLs (e.g., `nats://localhost:4222`).

## Running the Application

### Development

Run the application in development mode with hot-reloading. This command also applies database migrations and generates the Prisma client before starting.

```bash
npm run start:dev
```

### Production

To run in a production environment:

1.  **Build the application:**
    ```bash
    npm run build
    ```
2.  **Start the server:**
    ```bash
    npm run start:prod
    ```

### Available Scripts

- `npm run build`: Compiles the project for production.
- `npm run format`: Formats code with Prettier.
- `npm run start:dev`: Runs the app in watch mode.
- `npm run lint`: Lints the codebase.
- `npm run test`: Runs unit tests.

## Database

This project uses **Prisma** for database management.

- **Schema:** The database schema is defined in `prisma/schema.prisma`.
- **Migrations:** Migrations are handled automatically by `npm run start:dev`. To run them manually:
  ```bash
  npx prisma migrate dev
  ```
- **Prisma Studio:** To open a GUI for your database:
  ```bash
  npx prisma studio
  ```

## Microservice API (NATS)

The microservice listens for the following message patterns via NATS:

| Command                   | Payload                               | Description                                  |
| ------------------------- | ------------------------------------- | -------------------------------------------- |
| `create_product`          | `CreateProductDto`                    | Creates a new product.                       |
| `find_all_products`       | `PaginationDto` (`{ page, limit }`)   | Retrieves a paginated list of products.      |
| `find_one_product`        | `{ id: number }`                      | Finds a single product by its ID.            |
| `update_product`          | `UpdateProductDto`                    | Updates a product's details.                 |
| `delete_product`          | `{ id: number }`                      | Soft deletes a product by its ID.            |
| `validate_products`       | `number[]` (Array of product IDs)     | Validates if a list of products exists.      |


## Docker

A `Dockerfile` is included for containerization.

1.  **Build the image:**
    ```bash
    docker build -t products-ms .
    ```
2.  **Run the container:**
    Ensure you have a `.env` file in your project root.
    ```bash
    docker run --env-file .env -p 3001:3001 products-ms
    ```

## Contributing

Contributions are welcome. Please create a pull request with a clear description of your changes.