import { ActivityContract } from "../contracts/activity";
import { AssetContract } from "../contracts/asset";

export class Activity implements ActivityContract {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date | null;
    state: boolean;
    assets?: AssetContract[];
    startDate: Date;
    endDate: Date;
    name: string;
    description: string;
}