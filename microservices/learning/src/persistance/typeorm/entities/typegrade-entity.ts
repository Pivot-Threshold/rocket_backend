import { TypeGradeContract } from "@domain/entities/contracts/type-grade";
import { EntitySchema } from "typeorm";
import { BaseEntityOptions, NameAndDescriptionOptions } from "../base-entity";

export const typeGradeEntity = new EntitySchema<TypeGradeContract>({
    name: "typeGrades",
    columns: {
        ...NameAndDescriptionOptions,
        ...BaseEntityOptions
    }
})  