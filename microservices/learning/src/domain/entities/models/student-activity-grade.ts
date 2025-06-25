import { UserId } from "@domain/value-objects/user-id";
import { ActivityContract } from "../contracts/activity";
import { StudentActivityGradeContract } from "../contracts/student-activity-grade";

export class StudentActivityGrade implements StudentActivityGradeContract {
    gradeId: number;
    studentId: UserId;
    activity: ActivityContract;
    gradeTypeId: number;
    grade: string;
    feedback: string;
}