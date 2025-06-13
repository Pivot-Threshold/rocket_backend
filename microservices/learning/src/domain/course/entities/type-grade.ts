import { NameAndDescription } from "@domain/base-entity";

export interface TypeGrade extends NameAndDescription {
    typeGradeId: number;
    dataType: string;
}