import { StudentActivityGradeContract } from "@domain/entities/contracts/student-activity-grade";
import { EntitySchema } from "typeorm";
import { BaseEntityOptions } from "../base-entity";

export const StudentActivityGradesEntity = new EntitySchema<StudentActivityGradeContract>({
    name: "studentActivityGrades",
    columns: {
        studentId: {
            type: Number,
            nullable: false,
            foreignKey: {
                name: "FK_StudentActivityGrades_Student",
                target: "students",
            },
        },
        gradeId: {
            type: Number,
            nullable: false,
            foreignKey: {
                name: "FK_StudentActivityGrades_TypeGrade",
                target: "typeGrades",
            },
        },
        ...BaseEntityOptions
    },
    relations:{
        studentId: {
            type: "many-to-one",
            target: "user",
            nullable: false
        },
        activity: {
            type: "many-to-one",
            target: "activities",
            inverseSide: "activityGrades",
            nullable: false
        },
        grade: {
            type: "many-to-one",
            target: "typeGrades",
            inverseSide: "activityGrades",
            nullable: false
        }
    }
})