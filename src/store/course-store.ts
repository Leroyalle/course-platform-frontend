import { courseService } from '@/services';
import { makeAutoObservable } from 'mobx';

class CourseStore {
  constructor() {
    makeAutoObservable(this);
  }
  value = 0;
  courses = [];

  increment() {
    this.value++;
  }
  async getAll() {
    this.courses = await courseService.getAll();
  }
}

export const courseStore = new CourseStore();
