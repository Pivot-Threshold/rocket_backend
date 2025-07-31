import { EntitySchema } from "typeorm"
import { BaseEntityOptions, NameAndDescriptionOptions } from "@persistance/typeorm/base-entity";
import { CourseContract } from "@domain/entities/contracts/course";

/**
 * CourseEntity is a TypeORM entity schema for the Course domain entity.
 * It defines the structure of the Course table in the database.
 */
export const CourseEntity = new EntitySchema<CourseContract>({
    name: "Course",
    tableName: "courses",
    columns: {
        typeGrade: {
            type: "int",
            nullable: false,
            foreignKey: {
                name: "FK_Course_TypeGrade",
                target: "TypeGrade",
            },
        },
        startDate: {
            type: "datetime",
            nullable: true
        },
        endDate: {
            type: "datetime",
            nullable: true
        },
        createdBy: {
            type: "int",
            nullable: false,
            foreignKey: {
                name: "FK_Course_CreatedBy",
                target: "User",
            },
        },
        ...BaseEntityOptions,
        ...NameAndDescriptionOptions
    },
    relations: {
        modules: {
            type: "many-to-many",
            target: "Module",
            joinTable: {
                name: "courseModules",
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
            target: "TypeGrade",
            joinColumn: {
                name: "typeGradeId",
                referencedColumnName: "id"
            },
            nullable: false
        },
        createdBy: {
            type: "many-to-one",
            target: "User",
            joinColumn: {
                name: "createdById",
                referencedColumnName: "userId",
            },
            nullable: false,
        }
    }
});