import { TypeGradeContract } from "@domain/entities/contracts/type-grade";
import { EntitySchema } from "typeorm";
import { BaseEntityOptions, NameAndDescriptionOptions } from "../base-entity";

export const TypeGradeEntity = new EntitySchema<TypeGradeContract>({
    name: "TypeGrade",
    tableName: "typeGrades",
    columns: {
        ...NameAndDescriptionOptions,
        ...BaseEntityOptions
    }
})