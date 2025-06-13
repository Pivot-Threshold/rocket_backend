import { BaseEntity, NameAndDescription } from "@domain/base-entity";
import { TypeGrade } from "./type-grade";

/**
 * Course is a domain entity representing a course in the learning management system.
 */
export interface Course extends NameAndDescription, BaseEntity {
    typeGrade: TypeGrade;
    startDate: Date;
    endDate: Date;
}