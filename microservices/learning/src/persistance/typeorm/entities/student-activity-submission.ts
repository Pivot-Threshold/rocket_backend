import { StudentActivitySubmission } from "@domain/entities/models/student-activity-submission";
import { EntitySchema } from "typeorm";

export const studentActivitySubmission = new EntitySchema<StudentActivitySubmission>({
    name: "StudentActivitySubmissions",
    tableName: "studentActivitySubmissions",
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
            target: "User",
            joinColumn: {
                name: "studentId",
                referencedColumnName: "userId"
            }
        },
        activity: {
            type: "one-to-one",
            target: "Activiy",
            joinColumn: {
                name: "activityId",
                referencedColumnName: "id"
            }
        },
        assets: {
            type: "many-to-many",
            target: "Asset",
            joinTable: {
                name: "studentActivitySubmissionAssets",
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