import { ActivityContract } from "@domain/entities/contracts/activity";
import { EntitySchema } from "typeorm";
import { BaseEntityOptions, NameAndDescriptionOptions } from "../base-entity";

export const ActivityEntity = new EntitySchema<ActivityContract>({
    tableName: "activities",
    name: "Activity",
    columns: {
        startDate: {
            type: "datetime",
            nullable: false
        },
        endDate: {
            type: "datetime",
            nullable: false
        },
        ...BaseEntityOptions,
        ...NameAndDescriptionOptions
    },
    relations: {
        assets: {
            type: "one-to-many",
            target: "Asset",
            inverseSide: "activity",
            nullable: true
        }
    }
});