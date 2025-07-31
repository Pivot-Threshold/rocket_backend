import { ActivityContract } from "./activity";
import { BaseContract } from "./base";
import { ModuleContract } from "./module";

export interface AssetContract extends Omit<BaseContract, 'updatedAt'> {
    id: number;
    name: string;
    url: string;
    activity?: ActivityContract;
    modules?: ModuleContract[];
}