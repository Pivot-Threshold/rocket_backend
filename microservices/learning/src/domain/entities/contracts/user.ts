import { UserId } from "@domain/value-objects/user-id";
import { BaseContract } from "./base";

export interface UserContract extends Omit<BaseContract, 'updatedAt' | 'deletedAt'> {
    userId: UserId;
    name: string;
    lastName: string;
    email: string;
    normalizedName: string;
} 