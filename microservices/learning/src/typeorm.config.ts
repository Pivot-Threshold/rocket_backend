import { TypeOrmModuleOptions } from '@nestjs/typeorm';
console.log('Loading TypeORM configuration...', process.env.DB_HOST, process.env.DB_PORT, process.env.DB_USERNAME, process.env.DB_NAME);

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT ?? '3306'),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [],
  synchronize: true,
};
