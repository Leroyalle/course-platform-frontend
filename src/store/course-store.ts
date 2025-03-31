import { courseService } from '@/services';
import { CourseWithLessons } from '@/types';
import { makeAutoObservable } from 'mobx';
import { IPromiseBasedObservable, fromPromise } from 'mobx-utils';

export class CourseStore {
  constructor() {
    makeAutoObservable(this);
  }

  courses?: IPromiseBasedObservable<CourseWithLessons[]>;
  currentCourse?: IPromiseBasedObservable<CourseWithLessons>;

  async getAll() {
    this.courses = fromPromise(courseService.getAll());
  }

  async getById(id: string) {
    this.currentCourse = fromPromise(courseService.getById(id));
  }
}

export const courseStore = new CourseStore();
