import { BaseContract, NameAndDescriptionContract } from "./base";
import { AssetContract } from "./asset";

export interface ActivityContract extends BaseContract, NameAndDescriptionContract {
    assets?: AssetContract[];
    startDate: Date;
    endDate: Date;
}