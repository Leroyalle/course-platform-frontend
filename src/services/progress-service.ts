import { instance } from './instace';

class ProgressService {
  async toggleLessonCompleted(courseId: string, lessonId: string) {
    return instance.patch(`/user-progress/${courseId}/lessons/${lessonId}`);
  }
}

export const progressService = new ProgressService();
