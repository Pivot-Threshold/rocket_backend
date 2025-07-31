import { UserCourseContract } from "@domain/entities/contracts/user-course";
import { EntitySchema } from "typeorm";

export const UserCourseEntity = new EntitySchema<UserCourseContract>({
    name: "UserCourse",
    tableName: "userCourses",
    columns: {
        id: { type: "int", primary: true },
        userId: { type: "int" },
        courseId: { type: "int" },
        studentState: {
            type: "enum",
            enum: ['enrolled', 'inprogress', 'completed', 'dropped'],
            nullable: false,
        },
    },
    relations: {
        userId: {
            type: "many-to-one",
            target: "User",
            joinColumn: {
                name: "userId",
                referencedColumnName: "userId"
            },
            nullable: false
        },
        courseId: {
            type: "many-to-one",
            target: "Course",
            joinColumn: {
                name: "courseId",
                referencedColumnName: "id"
            },
            nullable: false
        }
    }
});