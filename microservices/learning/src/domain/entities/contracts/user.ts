import { BaseContract } from "./base";

export interface UserContract extends Omit<BaseContract, 'updatedAt' | 'deletedAt' | 'id'> {
    userId: number;
    firstName: string;
    lastName: string;
    email: string;
    normalizedName: string;
} 