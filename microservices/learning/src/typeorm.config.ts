import { TypeOrmModuleOptions } from '@nestjs/typeorm';
console.log('Loading TypeORM configuration...', process.env.DB_HOST, process.env.DB_PORT, process.env.DB_USER, process.env.DB_NAME);

const path = __dirname + '/persistance/typeorm/entities/*-entity.{js,ts}';
console.log('Entities path:', path);

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT ?? '3306'),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [
    path,
  ],
  synchronize: true,
  migrations: [
    __dirname + '/persistance/typeorm/migrations/*-migrations.ts',
  ],
  
};
