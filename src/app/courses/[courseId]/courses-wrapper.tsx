'use client';
import { useEffect, type FC } from 'react';
import { clsx } from 'clsx';
import { CourseContent, CourseHeader, CourseInstructor, CourseSidebar } from '@/components';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { courseStore } from '@/store';
import { observer } from 'mobx-react-lite';

interface Props {
  courseId: string;
  className?: string;
}

export const CoursesWrapper: FC<Props> = observer(({ courseId, className }) => {
  useEffect(() => {
    courseStore.getById(courseId);
  }, [courseId]);

  if (courseStore.currentCourse?.state === 'pending') {
    return <div>Loading...</div>;
  }

  if (courseStore.currentCourse?.state === 'rejected') {
    return <div>Error</div>;
  }

  const course = courseStore.currentCourse?.value;
  if (!course) return null;

  const completedLessons = course.lessons.filter((lesson) => lesson.completed).length;
  const progressPercentage = (completedLessons / course.lessons.length) * 100;

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
            lessons={course.lessons}
            progress={progressPercentage}
            completedCount={completedLessons}
          />
        </div>
      </div>
    </div>
  );
});
