import { EntitySchema } from "typeorm";
import { BaseEntityOptions, NameAndDescriptionOptions } from "../base-entity";
import { SkillContract } from "@domain/entities/contracts/skill";

export const SkillEntity = new EntitySchema<SkillContract>({
    name: "Skill",
    tableName: "skills",
    columns: {
        ...BaseEntityOptions,
        ...NameAndDescriptionOptions
    },
    relations: {
        activities: {
            type: "many-to-many",
            target: "Activity",
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