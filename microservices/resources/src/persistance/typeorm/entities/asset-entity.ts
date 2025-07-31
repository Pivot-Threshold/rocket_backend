import { AssetContract } from '@domain/entities/contracts/asset';
import { EntitySchema } from 'typeorm';

export const AssetEntity = new EntitySchema<AssetContract>({
  tableName: 'assets',
  name: 'Asset',
  columns: {
    id: {
      type: String,
      primary: true,
    },
    name: {
      type: String,
      nullable: false,
    },
    url: {
      type: String,
      nullable: false,
    },
    createdAt: {
      type: 'datetime',
      nullable: false,
    },
  },
});
