import { EntitySchemaColumnOptions } from "typeorm";

/**
 * NameAndDescriptionOptions defines common columns for entities that require a name and description.
 */
export const NameAndDescriptionOptions = {
    name: {
        type: String,
        nullable: false,
        length: 300
    } as EntitySchemaColumnOptions,
    description: {
        type: String,
        nullable: false,
        length: 800
    } as EntitySchemaColumnOptions
};

/**
 * BaseEntityOptions defines common columns for all entities.
 * It includes an auto-generated ID, timestamps for creation and updates, and a soft delete timestamp.
 */
export const BaseEntityOptions = {
    id: {
        type: Number,
        primary: true,
        generated: true
    } as EntitySchemaColumnOptions,
    updatedAt: {
        type: Date,
        nullable: true
    },
    createdAt: {
        type: Date,
        nullable: false
    },
    deletedAt: {
        type: Date,
        nullable: true
    } as EntitySchemaColumnOptions,
    state: {
        type: Boolean,
        nullable: false,
        default: true
    } as EntitySchemaColumnOptions
}