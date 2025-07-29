import { AssetContract } from '@domain/entities/contracts/asset';

export interface AssetQueryContract {
  /**
   * Finds all assets in the system.
   * @return A promise that resolves to an array of Asset entities.
   */
  findAll(): Promise<AssetContract[]>;

  /**
   * Finds an asset by its ID.
   * @param id - The ID of the asset to find.
   * @return A promise that resolves to the Asset entity if found, or null if not found.
   */
  findById(id: string): Promise<AssetContract | null>;

  /**
   * Finds assets by their name.
   * @param name - The name of the asset to search for.
   * @return A promise that resolves to an array of Asset entities matching the name.
   */
  findByName(name: string): Promise<AssetContract[]>;
}
