import { instance } from './instace';

class ProgressService {
  async toggleLessonCompleted(courseId: string, lessonId: string, completed: boolean) {
    return instance.post(`/user-progress/${courseId}/lessons/${lessonId}`, { completed });
  }
}

export const progressService = new ProgressService();
