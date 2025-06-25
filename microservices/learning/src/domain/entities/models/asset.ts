import { ActivityContract } from "../contracts/activity";
import { AssetContract } from "../contracts/asset";
import { ModuleContract } from "../contracts/module";

export class Asset implements AssetContract {
    url: string;
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date | null;
    state: boolean;
    activity?: ActivityContract;
    modules?: ModuleContract[];
}