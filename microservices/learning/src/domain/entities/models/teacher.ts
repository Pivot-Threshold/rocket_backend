import { UserContract } from "../contracts/user";

export class Teacher implements UserContract {
    userId: number;
    createdAt: Date;
    state: boolean;
    firstName: string;
    lastName: string;
    email: string;
    normalizedName: string;
}