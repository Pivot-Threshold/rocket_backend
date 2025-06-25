import { ActivityContract } from "../contracts/activity";
import { SkillContract } from "../contracts/skill";

export class Skill implements SkillContract {

    activities?: ActivityContract[];
    id: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date | null;
    state: boolean;
    name: string;
    description: string;

    addActivity(activity: ActivityContract): void {
        throw new Error("Method not implemented.");
    }
    removeActivity(activity: ActivityContract): void {
        throw new Error("Method not implemented.");
    }
    setState(state: boolean): void {
        throw new Error("Method not implemented.");
    }
    updateSkillDetails(name: string, description: string): void {
        throw new Error("Method not implemented.");
    }
}