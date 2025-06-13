/**
 * NameAndDescription is a common interface for entities that have a name and description.
 */
export interface NameAndDescription {
    name: string;
    description: string;
}

/**
 * BaseEntity is a common interface for all domain entities in the system.
 * It includes common fields such as id, createdAt, updatedAt, deletedAt, and state.
 */
export interface BaseEntity {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date | null;
    state: boolean;
}