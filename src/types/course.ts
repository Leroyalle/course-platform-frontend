import { Lesson } from "./lesson";

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  level: string;
  duration: string;
  image: string;
}

export type CourseWithLessons = Course & {
  lessons: Lesson[];
};
