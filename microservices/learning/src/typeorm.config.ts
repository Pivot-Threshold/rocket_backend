import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT ?? '3306'),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + '/persistance/typeorm/entities/*-entity.{js,ts}'],
  synchronize: true,
  migrations: [__dirname + '/persistance/typeorm/migrations/*-migrations.ts'],
};
