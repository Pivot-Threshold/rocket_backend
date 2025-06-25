import { UserId } from "@domain/value-objects/user-id";
import { CourseContract } from "../contracts/course";
import { ModuleContract } from "../contracts/module";
import { TypeGradeContract } from "../contracts/type-grade";

export class Course implements CourseContract {

    constructor(
        typeGrade: TypeGradeContract,
        name: string,
        description: string,
        endDate?: Date,
        modules?: ModuleContract[]  
    ) {
        this.state = true;
        this.createdAt = new Date();
        this.modules = modules;
        this.name = name.trim();
        this.description = description.trim();
        this.typeGrade = typeGrade;
        this.startDate = new Date();
        this.endDate = endDate;
    }

    readonly typeGrade: TypeGradeContract;
    readonly id: number;

    createdBy: UserId[];
    startDate?: Date;
    endDate?: Date;
    modules?: ModuleContract[];
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date | null;
    state: boolean;

    updateCourseDetails(name: string, description: string, endDate?: Date): void {
        throw new Error("Method not implemented.");
    }
    addModule(module: ModuleContract): void {
        throw new Error("Method not implemented.");
    }
    removeModule(moduleId: number): void {
        throw new Error("Method not implemented.");
    }
    setStartDate(startDate: Date): void {
        throw new Error("Method not implemented.");
    }
    setEndDate(endDate: Date): void {
        throw new Error("Method not implemented.");
    }
    setTypeGrade(typeGrade: TypeGradeContract): void {
        throw new Error("Method not implemented.");
    }
    setState(state: boolean): void {
        throw new Error("Method not implemented.");
    }
}