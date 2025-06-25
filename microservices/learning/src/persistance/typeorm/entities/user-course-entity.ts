import { UserCourseContract } from "@domain/entities/contracts/user-course";
import { EntitySchema } from "typeorm";

export const UserCourseEntity = new EntitySchema<UserCourseContract>({
    name: "userCourses",
    columns: {
        id: { type: Number, primary: true },
        userId: { type: Number },
        courseId: { type: Number },
        studentState: {
            type: "enum",
            enum: ['enrolled', 'inprogress', 'completed', 'dropped'],
            nullable: false,
        },
    },
});