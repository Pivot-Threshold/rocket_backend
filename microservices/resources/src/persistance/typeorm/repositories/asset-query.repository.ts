import { AssetContract } from '@domain/entities/contracts/asset';
import { AssetQueryContract } from '@domain/repositories/asset-query.contract';

export class AssetQueryRepository implements AssetQueryContract {
  findAll(): Promise<AssetContract[]> {
    throw new Error('Method not implemented.');
  }

  findById(id: string): Promise<AssetContract | null> {
    throw new Error('Method not implemented.');
  }

  findByName(name: string): Promise<AssetContract[]> {
    throw new Error('Method not implemented.');
  }
}
