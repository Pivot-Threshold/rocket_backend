import { EntitySchema } from "typeorm"
import { BaseEntityOptions, NameAndDescriptionOptions } from "@persistance/typeorm/base-entity";
import { CourseContract } from "@domain/entities/contracts/course";

/**
 * CourseEntity is a TypeORM entity schema for the Course domain entity.
 * It defines the structure of the Course table in the database.
 */
export const CourseEntity = new EntitySchema<CourseContract>({
    name: "courses",
    columns: {
        typeGrade: {
            type: Number,
            nullable: false,
            foreignKey: {
                name: "FK_Course_TypeGrade",
                target: "typeGrades",
            },
        },
        startDate: {
            type: Date,
            nullable: true
        },
        endDate: {
            type: Date,
            nullable: true
        },
        createdBy: {
            type: Number,
            nullable: false,
            foreignKey: {
                name: "FK_Course_CreatedBy",
                target: "users",
            },
        },
        ...BaseEntityOptions,
        ...NameAndDescriptionOptions
    },
    relations: {
        modules: {
            type: "many-to-many",
            target: "modules",
            joinTable: {
                name: "course_modules",
                joinColumn: {
                    name: "courseId",
                    referencedColumnName: "id"
                },
                inverseJoinColumn: {
                    name: "moduleId",
                    referencedColumnName: "id"
                }
            },
            nullable: true
        },
        typeGrade: {
            type: "one-to-one",
            target: "typeGrades",
            joinColumn: {
                name: "typeGradeId",
                referencedColumnName: "id"
            },
            nullable: false
        },
        createdBy: {
            type: "many-to-one",
            target: "users",
            joinColumn: {
                name: "createdById",
                referencedColumnName: "id",
            },
            nullable: false,
        }
    }
});