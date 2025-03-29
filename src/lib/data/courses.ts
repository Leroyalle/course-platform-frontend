import type { Course } from '@/types/course';

const courses: Course[] = [
  {
    id: '1',
    title: 'JavaScript Fundamentals',
    description:
      'Learn the basics of JavaScript programming language from the ground up. This course covers everything from variables and data types to advanced concepts like closures and promises.',
    instructor: 'Leroyalle',
    level: 'Beginner',
    totalLessons: 12,
    lessons: 12,
    duration: '10 hours',
    image:
      'https://repository-images.githubusercontent.com/155480718/1724f880-0491-11eb-97cd-120fe56ddffe',
  },
  {
    id: '2',
    title: 'React for Beginners',
    description: 'Start building modern web applications with React',
    instructor: 'Leroyalle',
    level: 'Intermediate',
    totalLessons: 15,
    lessons: 15,
    duration: '12 hours',
    image:
      'https://avatars.mds.yandex.net/i?id=da46aa0fb877d73fc13b247d071f7abe_l-4760093-images-thumbs&n=13',
  },
  {
    id: '3',
    title: 'Advanced TypeScript',
    description: 'Master TypeScript for large-scale applications',
    instructor: 'Leroyalle',
    level: 'Advanced',
    totalLessons: 10,
    lessons: 10,
    duration: '8 hours',
    image: 'https://smolensk-i.ru/wp-content/uploads/2023/10/typescript-va-javascript.jpg',
  },
  {
    id: '4',
    title: 'Next.js Masterclass',
    description: 'Build production-ready applications with Next.js',
    instructor: 'Leroyalle',
    level: 'Intermediate',
    totalLessons: 18,
    lessons: 18,
    duration: '15 hours',
    image:
      'https://repository-images.githubusercontent.com/675717370/5c3a84d4-7fe2-4bde-b29b-3efc611bf6d0',
  },
];

export function getAllCourses(): Course[] {
  return courses;
}

export function getCourseById(id: string): Course | undefined {
  return courses.find((course) => course.id === id);
}
