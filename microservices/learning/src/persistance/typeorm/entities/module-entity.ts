import { ModuleContract } from "@domain/entities/contracts/module";
import { BaseEntityOptions, NameAndDescriptionOptions } from "@persistance/typeorm/base-entity";
import { EntitySchema } from "typeorm";

export const ModuleEntity = new EntitySchema<ModuleContract>({
    name: "Module",
    tableName: "modules",
    columns: {
        courseId: {
            type: "int",
            nullable: false,
            foreignKey: {
                name: "FK_Module_Course",
                target: "Course",
            },
        },
        startDate: {
            type: "datetime",
            nullable: true
        },
        endDate: {
            type: "datetime",
            nullable: true
        },
        ...BaseEntityOptions,
        ...NameAndDescriptionOptions
    },
    relations: {
        skills: {
            type: "many-to-many",
            target: "Skill",    
            joinTable: {
                name: "moduleSkills",
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
