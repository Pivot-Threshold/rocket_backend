import { NameAndDescriptionContract } from "@domain/entities/contracts/base";

export interface TypeGradeContract extends NameAndDescriptionContract {
    typeGradeId: number;
    dataType: string;
}