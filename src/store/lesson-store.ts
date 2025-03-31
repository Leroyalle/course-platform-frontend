import { lessonService } from '@/services';
import { LessonWithCourse } from '@/types';
import { makeAutoObservable } from 'mobx';
import { IPromiseBasedObservable, fromPromise } from 'mobx-utils';

export class LessonStore {
  constructor() {
    makeAutoObservable(this);
  }

  lesson?: IPromiseBasedObservable<LessonWithCourse>;

  async getById(id: string) {
    try {
      const data = await lessonService.getById(id);
      this.lesson = fromPromise(Promise.resolve(data));
      return data;
    } catch (error) {
      this.lesson = fromPromise(Promise.reject(error));
      throw error;
    }
  }

  async toggleLessonCompleted() {
    if (this.lesson?.state === 'fulfilled') {
      const updatedLesson = {
        ...this.lesson.value,
        completed: !this.lesson.value.completed,
      };

      // Обновляем весь observable
      this.lesson = fromPromise(Promise.resolve(updatedLesson));
    }
  }
}

export const lessonStore = new LessonStore();
