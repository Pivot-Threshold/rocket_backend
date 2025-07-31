# rocket
This is a rocket project, about teaching platform

## Domain and TypeORM Mapping
The domain layer of the project is structured to follow Domain-Driven Design (DDD) principles. It is divided into several subfolders:

- **Aggregates**: Represents the root entities that encapsulate related entities and value objects.
- **Entities**: Defines the core business objects with their attributes and behaviors.
- **Value Objects**: Immutable objects that represent a descriptive aspect of the domain.
- **Repositories**: Interfaces for data access, implemented using TypeORM.

TypeORM is used as the ORM to map the domain entities to the database. Instead of using decorators, we define the mappings explicitly in separate configuration files. For example:

```typescript
// user.entity.ts
export class User {
  id: number;
  name: string;
  email: string;
}

// user.mapping.ts
import { EntitySchema } from 'typeorm';
import { User } from './user.entity';

export const UserSchema = new EntitySchema<User>({
  name: 'User',
  target: User,
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true,
    },
    name: {
      type: 'varchar',
    },
    email: {
      type: 'varchar',
    },
  },
});
```

The `typeorm.config.ts` file in each microservice contains the configuration for connecting to the database, including entities, migrations, and subscribers.

## Infrastructure Layer and MariaDB Image
The infrastructure layer includes the database setup and configuration. For MariaDB, we use Docker to build and manage the database image. The `learning-resources-db.yml` file contains the Docker Compose configuration for the MariaDB instance. To build and run the database:

1. Navigate to the `infrastructure/databases` directory.
2. Run the following command:
   ```bash
   docker-compose -f learning-resources-db.yml up --build
   ```
3. This will create and start a MariaDB container with the necessary schema and data.

The `data/learning-resources-db` folder contains the database files and initial data for the MariaDB instance.

## Project Configuration, Naming Conventions, and Practices

### Configuration
Each microservice has its own `tsconfig.json` and `tsconfig.build.json` for TypeScript configuration. The `package.json` files define the dependencies and scripts for building and running the services. Environment variables are managed using `.env` files.

### Naming Conventions
- **Files and Folders**: Use `kebab-case` for file and folder names.
- **Classes and Interfaces**: Use `PascalCase`.
- **Variables and Functions**: Use `camelCase`.

### Best Practices
- Follow the SOLID principles for code design.
- Write unit and integration tests for all critical functionalities.
- Use ESLint and Prettier for code formatting and linting.
- Document APIs using Swagger or similar tools.

By adhering to these conventions and practices, the project ensures maintainability, scalability, and consistency across all microservices.
