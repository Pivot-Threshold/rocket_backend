import { CourseContract } from '@domain/entities/contracts/course';
import { CourseQueryContract } from '@domain/repositories/course-query.contract';

export class CourseQueryRepository implements CourseQueryContract {
    findAll(): Promise<CourseContract[]> {
        throw new Error('Method not implemented.');
    }
    findById(id: number): Promise<CourseContract | null> {
        throw new Error('Method not implemented.');
    }
    findByTypeGrade(typeGradeId: number): Promise<CourseContract[]> {
        throw new Error('Method not implemented.');
    }
    findByName(name: string): Promise<CourseContract[]> {
        throw new Error('Method not implemented.');
    }
}