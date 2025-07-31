import { StudentActivityGradeContract } from "@domain/entities/contracts/student-activity-grade";
import { EntitySchema } from "typeorm";
import { BaseEntityOptions } from "../base-entity";

export const StudentActivityGradesEntity = new EntitySchema<StudentActivityGradeContract>({
    tableName: "studentActivityGrades",
    name: "StudentActivityGrades",
    columns: {
        studentId: {
            type: "int",
            nullable: false,
            foreignKey: {
                name: "FK_StudentActivityGrades_Student",
                target: "User",
            },
        },
        gradeId: {
            type: "int",
            nullable: false,
            foreignKey: {
                name: "FK_StudentActivityGrades_TypeGrade",
                target: "TypeGrade",
            },
        },
        feedback: {
            type: "text",
            nullable: true
        },
        ...BaseEntityOptions
    },
    relations: {
        studentId: {
            type: "many-to-one",
            target: "User",
            nullable: false
        },
        activity: {
            type: "many-to-one",
            target: "Activity",
            inverseSide: "activityGrades",
            nullable: false
        },
        grade: {
            type: "many-to-one",
            target: "TypeGrade",
            inverseSide: "activityGrades",
            nullable: false
        }
    }
})