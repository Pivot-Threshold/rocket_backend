import { BaseContract, NameAndDescriptionContract } from "@domain/entities/contracts/base";
import { TypeGradeContract } from "./type-grade";
import { ModuleContract } from "./module";
import { UserId } from "@domain/value-objects/user-id";

/**
 * Course is a domain entity representing a course in the learning management system.
 */
export interface CourseContract extends NameAndDescriptionContract, BaseContract {
    typeGrade: TypeGradeContract;
    startDate?: Date;
    endDate?: Date;
    modules?: ModuleContract[];
    createdBy: UserId[];

    updateCourseDetails(name: string, description: string, endDate?: Date): void;
    addModule(module: ModuleContract): void;
    removeModule(moduleId: number): void;
    setStartDate(startDate: Date): void;
    setEndDate(endDate: Date): void;
    setTypeGrade(typeGrade: TypeGradeContract): void;
    setState(state: boolean): void;
}