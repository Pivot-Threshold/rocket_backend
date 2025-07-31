import { AssetContract } from "@domain/entities/contracts/asset";
import { EntitySchema } from "typeorm";

export const AssetEntity = new EntitySchema<AssetContract>({
    name: "Asset",
    tableName: "assets",
    columns: {
        id: {
            type: "int",
            primary: true,
            generated: true
        },
        name: {
            type: "varchar",
            nullable: false
        },
        url: {
            type: "varchar",
            nullable: false
        },
        createdAt: {
            type: "datetime",
            default: () => "CURRENT_TIMESTAMP"
        },
    },
    relations: {
        activity: {
            type: "one-to-many",
            target: "Activity",
            joinColumn: {
                name: "activityId",
                referencedColumnName: "id"
            },
            nullable: true
        },
        modules: {
            type: "many-to-many",
            target: "Module",
            joinTable: {
                name: "assetModules",
                joinColumn: {
                    name: "assetId",
                    referencedColumnName: "id"
                },
                inverseJoinColumn: {
                    name: "moduleId",
                    referencedColumnName: "id"
                }
            },
            nullable: true
        }
    }
});