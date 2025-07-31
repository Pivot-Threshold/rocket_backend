import { UserId } from "@domain/value-objects/user-id";
import { ActivityContract } from "./activity";
import { AssetContract } from "./asset";
import { BaseContract } from "./base";

export interface StudentActivitySubmissionContract extends Omit<BaseContract, 'updatedAt' | 'deletedAt' | 'state'> {
    textSubmission: string;
    assets: AssetContract[];
    activity: ActivityContract;
    student: UserId;
}