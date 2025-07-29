import { AssetContract } from '../contracts/asset';

export class Asset implements AssetContract {
  id: string;
  name: string;
  url: string;
  createdAt: Date;
}
