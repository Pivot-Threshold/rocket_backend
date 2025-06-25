import { BaseContract, NameAndDescriptionContract } from "@domain/entities/contracts/base";
import { AssetContract } from "./asset";
import { SkillContract } from "./skill";

export interface ModuleContract extends NameAndDescriptionContract, BaseContract {
    courseId: number;
    startDate: Date;
    endDate: Date;
    files?: AssetContract[];
    skills?: SkillContract[];
}