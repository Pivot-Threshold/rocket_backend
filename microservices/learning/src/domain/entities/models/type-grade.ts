import { TypeGradeContract } from "../contracts/type-grade";

export class TypeGrade implements TypeGradeContract {
    typeGradeId: number;
    dataType: string;
    name: string;
    description: string;
}