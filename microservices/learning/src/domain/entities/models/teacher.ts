import { UserId } from "@domain/value-objects/user-id";
import { UserContract } from "../contracts/user";

export class Teacher implements UserContract {
    id: number;
    createdAt: Date;
    state: boolean;
    userId: UserId;
    name: string;
    lastName: string;
    email: string;
    normalizedName: string;
}