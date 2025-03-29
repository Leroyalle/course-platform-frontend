import { instance } from './instace';

class CourseService {
  async getAll() {
    return (await instance.get('/courses')).data;
  }
}

export const courseService = new CourseService();
