import type { Lesson } from '@/types/lesson';

const lessonsByCourse: Record<string, Lesson[]> = {
  '1': [
    {
      id: '1',
      title: 'Введение в JavaScript',
      duration: '45 мин',
      completed: true,
      content: '',
    },
    {
      id: '2',
      title: 'Переменные и типы данных',
      duration: '55 мин',
      completed: true,
      content: `
        <h2>Переменные и типы данных в JavaScript</h2>
        
        <p>В этом уроке мы изучим как объявлять переменные и работать с различными типами данных в JavaScript.</p>
        
        <h3>Объявление переменных</h3>
        
        <p>JavaScript предоставляет три способа объявления переменных:</p>
        
        <ul>
          <li><code>var</code> - Традиционный способ объявления переменных (функциональная область видимости)</li>
          <li><code>let</code> - Современный способ объявления переменных, которые можно переопределять (блочная область видимости)</li>
          <li><code>const</code> - Для переменных, которые не должны переопределяться (блочная область видимости)</li>
        </ul>
        
        <p>Пример:</p>
        
        <pre><code>
        // Использование let
        let возраст = 25;
        возраст = 26; // Это допустимо
        
        // Использование const
        const PI = 3.14159;
        // PI = 3.14; // Это вызовет ошибку
        </code></pre>
        
        <h3>Примитивные типы данных</h3>
        
        <p>JavaScript имеет несколько примитивных типов данных:</p>
        
        <ul>
          <li><strong>String</strong>: Текстовые значения, например "Привет, мир"</li>
          <li><strong>Number</strong>: Числовые значения, например 42 или 3.14</li>
          <li><strong>Boolean</strong>: true или false</li>
          <li><strong>Undefined</strong>: Переменная, которая объявлена, но не имеет значения</li>
          <li><strong>Null</strong>: Представляет намеренное отсутствие какого-либо значения объекта</li>
          <li><strong>Symbol</strong>: Уникальные и неизменяемые примитивные значения</li>
          <li><strong>BigInt</strong>: Для целых чисел, превышающих возможности типа Number</li>
        </ul>
        
        <h3>Сложные типы данных</h3>
        
        <p>JavaScript также имеет сложные типы данных:</p>
        
        <ul>
          <li><strong>Object</strong>: Коллекции связанных данных</li>
          <li><strong>Array</strong>: Упорядоченные коллекции значений</li>
          <li><strong>Function</strong>: Многократно используемые блоки кода</li>
        </ul>
        
        <p>Пример:</p>
        
        <pre><code>
        // Объект
        const человек = {
          имя: "Иван",
          возраст: 30,
          студент: false
        };
        
        // Массив
        const цвета = ["красный", "зеленый", "синий"];
        
        // Функция
        function приветствие(имя) {
          return "Привет, " + имя + "!";
        }
        </code></pre>
        
        <h3>Преобразование типов</h3>
        
        <p>JavaScript - это язык с динамической типизацией, что означает, что переменные могут менять типы:</p>
        
        <pre><code>
        let значение = 42;      // число
        значение = "42";        // теперь строка
        
        // Преобразование типов
        let число = Number("42");  // Преобразует строку в число
        let строка = String(42);    // Преобразует число в строку
        let булево = Boolean(1);   // Преобразует в логическое значение (true)
        </code></pre>
      `,
    },
    {
      id: '3',
      title: 'Операторы и выражения',
      duration: '50 мин',
      completed: false,
      content: '',
    },
    {
      id: '4',
      title: 'Управление потоком: Условные конструкции',
      duration: '60 мин',
      completed: false,
      content: '',
    },
    {
      id: '5',
      title: 'Управление потоком: Циклы',
      duration: '45 мин',
      completed: false,
      content: '',
    },
    {
      id: '6',
      title: 'Функции',
      duration: '65 мин',
      completed: false,
      content: '',
    },
    {
      id: '7',
      title: 'Объекты и массивы',
      duration: '70 мин',
      completed: false,
      content: '',
    },
    {
      id: '8',
      title: 'Манипуляция с DOM',
      duration: '60 мин',
      completed: false,
      content: '',
    },
    {
      id: '9',
      title: 'События',
      duration: '50 мин',
      completed: false,
      content: '',
    },
    {
      id: '10',
      title: 'Асинхронный JavaScript',
      duration: '75 мин',
      completed: false,
      content: '',
    },
    {
      id: '11',
      title: 'Обработка ошибок',
      duration: '45 мин',
      completed: false,
      content: '',
    },
    {
      id: '12',
      title: 'Финальный проект',
      duration: '90 мин',
      completed: false,
      content: '',
    },
  ],
};

export function getLessonsByCourseId(courseId: string): Lesson[] {
  return lessonsByCourse[courseId] || [];
}

export function getLessonById(lessonId: string): Lesson | undefined {
  for (const courseId in lessonsByCourse) {
    const lesson = lessonsByCourse[courseId].find((lesson) => lesson.id === lessonId);
    if (lesson) return lesson;
  }
  return undefined;
}

export function getAdjacentLessons(
  courseId: string,
  lessonId: string,
): {
  previousLesson: Lesson | null;
  nextLesson: Lesson | null;
} {
  const lessons = lessonsByCourse[courseId] || [];
  const currentIndex = lessons.findIndex((lesson) => lesson.id === lessonId);

  if (currentIndex === -1) {
    return { previousLesson: null, nextLesson: null };
  }

  const previousLesson = currentIndex > 0 ? lessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null;

  return { previousLesson, nextLesson };
}
