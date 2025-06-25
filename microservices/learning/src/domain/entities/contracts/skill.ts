import { ActivityContract } from "./activity";
import { BaseContract, NameAndDescriptionContract } from "./base";

export interface SkillContract extends BaseContract, NameAndDescriptionContract {
    activities?: ActivityContract[];

    addActivity(activity: ActivityContract): void;
    removeActivity(activity: ActivityContract): void;
    setState(state: boolean): void;
    updateSkillDetails(name: string, description: string): void;
}