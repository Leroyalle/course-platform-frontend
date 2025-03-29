import type { FC } from 'react';
import { clsx } from 'clsx';
import { CourseContent, CourseHeader, CourseInstructor, CourseSidebar } from '@/components';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { getCourseById } from '@/lib/data/courses';
import { getLessonsByCourseId } from '@/lib/data/lessons';

interface Props {
  courseId: string;
  className?: string;
}

export const CoursesWrapper: FC<Props> = ({ courseId, className }) => {
  const course = getCourseById(courseId);
  if (!course) return null;
  const lessons = getLessonsByCourseId('1');
  const completedLessons = lessons.filter((lesson) => lesson.completed).length;
  const progressPercentage = (completedLessons / lessons.length) * 100;

  return (
    <div className={clsx('container mx-auto py-10', className)}>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Courses', href: '#' },
          { label: course.title, href: '#', active: true },
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CourseHeader course={course} />
          <CourseContent course={course} />
          <CourseInstructor instructor={course.instructor} />
        </div>
        <div>
          <CourseSidebar
            courseId={courseId}
            lessons={lessons}
            progress={progressPercentage}
            completedCount={completedLessons}
          />
        </div>
      </div>
    </div>
  );
};
