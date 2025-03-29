import { Course } from './course';

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  content: string;
}

export type LessonWithCourse = Lesson & { course: Course };
