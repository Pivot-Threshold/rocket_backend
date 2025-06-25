import { CourseContract } from "@domain/entities/contracts/course";

/**
 * CourseQueryContract defines the interface for querying courses in the learning management system.
 */
export interface CourseQueryContract {
    /**
     * Finds all courses in the system.
     * @return A promise that resolves to an array of Course entities.
     */
    findAll(): Promise<CourseContract[]>;
    /**
     * Finds a course by its ID.
     * @param id - The ID of the course to find.
     * @return A promise that resolves to the Course entity if found, or null if not found.
     */
    findById(id: number): Promise<CourseContract | null>;
    /**
     * Finds courses by their type grade ID.
     * @param typeGradeId - The ID of the type grade to filter courses by.
     * @return A promise that resolves to an array of Course entities matching the type grade.
     */
    findByTypeGrade(typeGradeId: number): Promise<CourseContract[]>;
    /**
     * Finds courses by their name.
     * @param name - The name of the course to search for.
     * @return A promise that resolves to an array of Course entities matching the name.
     */
    findByName(name: string): Promise<CourseContract[]>;
}