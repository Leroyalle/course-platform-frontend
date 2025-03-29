import { CourseWithLessons } from '@/types';
import { instance } from './instace';

class CourseService {
  async getAll() {
    return (await instance.get<CourseWithLessons[]>('/course')).data;
  }

  async getById(id: string) {
    return (await instance.get<CourseWithLessons>(`/course/${id}`)).data;
  }
}

export const courseService = new CourseService();
