import { AssetContract } from "@domain/entities/contracts/asset";
import { EntitySchema } from "typeorm";

export const AssetEntity = new EntitySchema<AssetContract>({
    name: "assets",
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true
        },
        name: {
            type: String,
            nullable: false
        },
        url: {
            type: String,
            nullable: false
        },
        createdAt: {
            type: Date,
            default: () => "CURRENT_TIMESTAMP"
        },
    },
    relations: {
        activity: {
            type: "one-to-many",
            target: "activities",
            joinColumn: {
                name: "activityId",
                referencedColumnName: "id"
            },
            nullable: true
        },
        modules: {
            type: "many-to-many",
            target: "modules",
            joinTable: {
                name: "asset_modules",
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