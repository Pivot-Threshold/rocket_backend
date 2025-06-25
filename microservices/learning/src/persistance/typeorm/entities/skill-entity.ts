import { EntitySchema } from "typeorm";
import { BaseEntityOptions, NameAndDescriptionOptions } from "../base-entity";
import { SkillContract } from "@domain/entities/contracts/skill";

export const skillEntity = new EntitySchema<SkillContract>({
    name: "skills",
    columns: {
        ...BaseEntityOptions,
        ...NameAndDescriptionOptions
    },
    relations: {
        activities: {
            type: "many-to-many",
            target: "activities",
            nullable: true,
            joinTable: {
                name: "activity_skills",
                joinColumn: {
                    name: "activityId",
                    referencedColumnName: "id"
                },
                inverseJoinColumn: {
                    name: "skillId",
                    referencedColumnName: "id"
                }
            },
        }
    }
});