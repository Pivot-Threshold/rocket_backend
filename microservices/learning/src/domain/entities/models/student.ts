import { UserId } from "@domain/value-objects/user-id";
import { UserContract } from "../contracts/user";

export class Student implements UserContract {
    userId: UserId;
    name: string;
    lastName: string;
    email: string;
    normalizedName: string;
}