import type { Lesson } from '@/types/lesson';

const lessonsByCourse: Record<string, Lesson[]> = {
  '1': [
    {
      id: '1',
      title: 'Introduction to JavaScript',
      duration: '45 min',
      completed: true,
      content: '',
    },
    {
      id: '2',
      title: 'Variables and Data Types',
      duration: '55 min',
      completed: true,
      content: `
        <h2>Variables and Data Types in JavaScript</h2>
        
        <p>In this lesson, we'll explore how to declare variables and work with different data types in JavaScript.</p>
        
        <h3>Declaring Variables</h3>
        
        <p>JavaScript provides three ways to declare variables:</p>
        
        <ul>
          <li><code>var</code> - The traditional way to declare variables (function scoped)</li>
          <li><code>let</code> - The modern way to declare variables that can be reassigned (block scoped)</li>
          <li><code>const</code> - For variables that should not be reassigned (block scoped)</li>
        </ul>
        
        <p>Example:</p>
        
        <pre><code>
        // Using let
        let age = 25;
        age = 26; // This is allowed
        
        // Using const
        const PI = 3.14159;
        // PI = 3.14; // This would cause an error
        </code></pre>
        
        <h3>Primitive Data Types</h3>
        
        <p>JavaScript has several primitive data types:</p>
        
        <ul>
          <li><strong>String</strong>: Text values like "Hello World"</li>
          <li><strong>Number</strong>: Numeric values like 42 or 3.14</li>
          <li><strong>Boolean</strong>: true or false</li>
          <li><strong>Undefined</strong>: A variable that has been declared but not assigned a value</li>
          <li><strong>Null</strong>: Represents the intentional absence of any object value</li>
          <li><strong>Symbol</strong>: Unique and immutable primitive values</li>
          <li><strong>BigInt</strong>: For integers larger than the Number type can handle</li>
        </ul>
        
        <h3>Complex Data Types</h3>
        
        <p>JavaScript also has complex data types:</p>
        
        <ul>
          <li><strong>Object</strong>: Collections of related data</li>
          <li><strong>Array</strong>: Ordered collections of values</li>
          <li><strong>Function</strong>: Reusable blocks of code</li>
        </ul>
        
        <p>Example:</p>
        
        <pre><code>
        // Object
        const person = {
          name: "John",
          age: 30,
          isStudent: false
        };
        
        // Array
        const colors = ["red", "green", "blue"];
        
        // Function
        function greet(name) {
          return "Hello, " + name + "!";
        }
        </code></pre>
        
        <h3>Type Conversion</h3>
        
        <p>JavaScript is a dynamically typed language, which means variables can change types:</p>
        
        <pre><code>
        let value = 42;      // number
        value = "42";        // now a string
        
        // Type conversion
        let num = Number("42");  // Converts string to number
        let str = String(42);    // Converts number to string
        let bool = Boolean(1);   // Converts to boolean (true)
        </code></pre>
      `,
    },
    {
      id: '3',
      title: 'Operators and Expressions',
      duration: '50 min',
      completed: false,
      content: '',
    },
    {
      id: '4',
      title: 'Control Flow: Conditionals',
      duration: '60 min',
      completed: false,
      content: '',
    },
    { id: '5', title: 'Control Flow: Loops', duration: '45 min', completed: false, content: '' },
    { id: '6', title: 'Functions', duration: '65 min', completed: false, content: '' },
    { id: '7', title: 'Objects and Arrays', duration: '70 min', completed: false, content: '' },
    { id: '8', title: 'DOM Manipulation', duration: '60 min', completed: false, content: '' },
    { id: '9', title: 'Events', duration: '50 min', completed: false, content: '' },
    {
      id: '10',
      title: 'Asynchronous JavaScript',
      duration: '75 min',
      completed: false,
      content: '',
    },
    { id: '11', title: 'Error Handling', duration: '45 min', completed: false, content: '' },
    { id: '12', title: 'Final Project', duration: '90 min', completed: false, content: '' },
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
