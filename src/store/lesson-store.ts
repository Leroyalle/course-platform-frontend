import { lessonService } from '@/services';
import { LessonWithCourse } from '@/types';
import { makeAutoObservable } from 'mobx';
import { IPromiseBasedObservable, fromPromise } from 'mobx-utils';
class LessonStore {
  constructor() {
    makeAutoObservable(this);
  }

  lesson?: IPromiseBasedObservable<LessonWithCourse>;

  async getById(id: string) {
    this.lesson = fromPromise(lessonService.getById(id));
  }
}

export const lessonStore = new LessonStore();
