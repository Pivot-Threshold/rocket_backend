import { ActivityContract } from "@domain/entities/contracts/activity";
import { EntitySchema } from "typeorm";
import { BaseEntityOptions, NameAndDescriptionOptions } from "../base-entity";

export const ActivityEntity = new EntitySchema<ActivityContract>({
    name: "activities",
    columns: {
        startDate: {
            type: Date,
            nullable: false
        },
        endDate: {
            type: Date,
            nullable: false
        },
        ...BaseEntityOptions,
        ...NameAndDescriptionOptions
    },
    relations: {
        assets: {
            type: "one-to-many",
            target: "assets",
            inverseSide: "activity",
            nullable: true
        }
    }
});