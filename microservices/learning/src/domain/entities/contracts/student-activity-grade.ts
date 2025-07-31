import { UserId } from "@domain/value-objects/user-id";
import { ActivityContract } from "./activity";

export interface StudentActivityGradeContract {
    gradeId: number;
    studentId: UserId;
    activity: ActivityContract;
    gradeTypeId: number;
    grade: string;
    feedback: string;
}