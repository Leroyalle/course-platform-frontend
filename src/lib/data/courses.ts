import type { Course } from '@/types/course';

const courses: Course[] = [
  {
    id: '1',
    title: 'Основы JavaScript',
    description:
      'Изучите основы языка программирования JavaScript с нуля. Этот курс охватывает все: от переменных и типов данных до продвинутых концепций, таких как замыкания и промисы.',
    instructor: 'Leroyalle',
    level: 'Начальный',

    duration: '10 часов',
    image:
      'https://repository-images.githubusercontent.com/155480718/1724f880-0491-11eb-97cd-120fe56ddffe',
  },
  {
    id: '2',
    title: 'React для начинающих',
    description: 'Начните создавать современные веб-приложения с помощью React',
    instructor: 'Leroyalle',
    level: 'Средний',

    duration: '12 часов',
    image:
      'https://avatars.mds.yandex.net/i?id=da46aa0fb877d73fc13b247d071f7abe_l-4760093-images-thumbs&n=13',
  },
  {
    id: '3',
    title: 'Продвинутый TypeScript',
    description: 'Освойте TypeScript для создания крупномасштабных приложений',
    instructor: 'Leroyalle',
    level: 'Продвинутый',

    duration: '8 часов',
    image: 'https://smolensk-i.ru/wp-content/uploads/2023/10/typescript-va-javascript.jpg',
  },
  {
    id: '4',
    title: 'Мастер-класс по Next.js',
    description: 'Создавайте production-ready приложения с помощью Next.js',
    instructor: 'Leroyalle',
    level: 'Средний',

    duration: '15 часов',
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
