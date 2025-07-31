import { UserId } from '@domain/value-objects/user-id';
import { ActivityContract } from '../contracts/activity';
import { AssetContract } from '../contracts/asset';
import { StudentActivitySubmissionContract } from '../contracts/student-activity-submission';

export class StudentActivitySubmission implements StudentActivitySubmissionContract {
    textSubmission: string;
    assets: AssetContract[];
    activity: ActivityContract;
    student: UserId;
    id: number;
    createdAt: Date;
}