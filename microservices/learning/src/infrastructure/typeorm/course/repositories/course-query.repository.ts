import { Course } from '@domain/course/entities/course';
import { CourseQueryContract } from '@domain/course/repositories/course-query.contract';

export class CourseQueryRepository implements CourseQueryContract {
    findAll(): Promise<Course[]> {
        throw new Error('Method not implemented.');
    }
    findById(id: number): Promise<Course | null> {
        throw new Error('Method not implemented.');
    }
    findByTypeGrade(typeGradeId: number): Promise<Course[]> {
        throw new Error('Method not implemented.');
    }
    findByName(name: string): Promise<Course[]> {
        throw new Error('Method not implemented.');
    }
}