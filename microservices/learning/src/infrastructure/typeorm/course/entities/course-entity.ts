import { EntitySchema } from "typeorm"
import { BaseEntityOptions, NameAndDescriptionOptions } from "@infrastructure/typeorm/base-entity";
import { Course } from "@domain/course/entities/course";

/**
 * CourseEntity is a TypeORM entity schema for the Course domain entity.
 * It defines the structure of the Course table in the database.
 */
export const CourseEntity = new EntitySchema<Course>({
    name: "courses",
    columns: {
        typeGrade:{
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
        ...BaseEntityOptions,
        ...NameAndDescriptionOptions
    }
});