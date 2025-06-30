import { UserContract } from "@domain/entities/contracts/user";
import { EntitySchema } from "typeorm";

export const UserEntity = new EntitySchema<UserContract>({
    name: "User",
    tableName: "users",
    columns: {
        userId: { type: "int", primary: true, generated: true },
        firstName: { type: "varchar", nullable: false },
        lastName: { type: "varchar", nullable: false },
        email: { type: "varchar", nullable: false, unique: true },
        normalizedName: { type: "varchar", nullable: false },
        createdAt: { type: "datetime", default: () => "CURRENT_TIMESTAMP" },
        state: {
            type: "enum",
            enum: ['active', 'inactive'],
            default: 'active',
            nullable: false
        }
    }
});