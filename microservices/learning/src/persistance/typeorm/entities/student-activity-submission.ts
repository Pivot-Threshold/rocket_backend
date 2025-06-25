import { StudentActivitySubmission } from "@domain/entities/models/student-activity-submission";
import { EntitySchema } from "typeorm";

export const studentActivitySubmission = new EntitySchema<StudentActivitySubmission>({
    name: "student_activity_submissions",
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true
        },
        student: {
            type: Number,
            nullable: false
        },
        activity: {
            type: Number,
            nullable: false
        },
        createdAt: {
            type: Date,
            default: () => "CURRENT_TIMESTAMP"
        },
        textSubmission: {
            type: String,
            nullable: true
        }
    },
    relations: {
        student: {
            type: "one-to-one",
            target: "users",
            joinColumn: {
                name: "studentId",
                referencedColumnName: "userId"
            }
        },
        activity: {
            type: "one-to-one",
            target: "activities",
            joinColumn: {
                name: "activityId",
                referencedColumnName: "id"
            }
        },
        assets: {
            type: "many-to-many",
            target: "assets",
            joinTable: {
                name: "student_activity_submission_assets",
                joinColumn: {
                    name: "submissionId",
                    referencedColumnName: "id"
                },
                inverseJoinColumn: {
                    name: "assetId",
                    referencedColumnName: "id"
                }
            },
            nullable: true
        }
    }
})