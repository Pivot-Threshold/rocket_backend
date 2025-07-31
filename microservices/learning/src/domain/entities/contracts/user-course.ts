import { UserId } from "@domain/value-objects/user-id";
import { BaseContract } from "./base";

export interface UserCourseContract extends Omit<BaseContract, 'updatedAt' | 'deletedAt'> {
    userCourseId: number;
    userId: UserId;
    courseId: number
    studentState: 'enrolled' | 'inprogress' | 'completed' | 'dropped';
}