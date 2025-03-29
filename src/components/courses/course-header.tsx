import { BookOpen, Clock } from 'lucide-react';
import type { Course } from '@/types/course';

interface CourseHeaderProps {
  course: Course;
}

export function CourseHeader({ course }: CourseHeaderProps) {
  console.log(course);
  return (
    <>
      <div className="rounded-lg overflow-hidden mb-6">
        <img
          src={course.image || '/placeholder.svg'}
          alt={course.title}
          className="w-full h-auto"
        />
      </div>

      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-1">
          <BookOpen className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{course.totalLessons} lessons</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{course.duration}</span>
        </div>
        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
          {course.level}
        </span>
      </div>
    </>
  );
}
