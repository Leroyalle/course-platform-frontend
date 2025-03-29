import { LessonWithCourse } from '@/types';
import { instance } from './instace';

class LessonService {
  async getById(id: string) {
    return (await instance.get<LessonWithCourse>(`/lesson/${id}`)).data;
  }
}

export const lessonService = new LessonService();
