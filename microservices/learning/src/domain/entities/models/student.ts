import { UserContract } from "../contracts/user";

export class Student implements UserContract {
    firstName: string;
    userId: number;
    createdAt: Date;
    state: boolean;
    lastName: string;
    email: string;
    normalizedName: string;
}