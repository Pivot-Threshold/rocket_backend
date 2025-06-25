import { ModuleContract } from "@domain/entities/contracts/module";
import { BaseEntityOptions, NameAndDescriptionOptions } from "@infrastructure/typeorm/base-entity";
import { EntitySchema } from "typeorm";

export const ModuleEntity = new EntitySchema<ModuleContract>({
    name: "modules",
    columns: {
        courseId: {
            type: Number,
            nullable: false,
            foreignKey: {
                name: "FK_Module_Course",
                target: "courses",
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
    },
    relations: {
        skills: {
            type: "many-to-many",
            target: "skills",
            joinTable: {
                name: "module_skills",
                joinColumn: {
                    name: "moduleId",
                    referencedColumnName: "id"
                },
                inverseJoinColumn: {
                    name: "skillId",
                    referencedColumnName: "id"
                }
            },
            nullable: true
        }
    }
})
