'use client';
import { CourseCard } from '@/components/courses/course-card';
import { courseStore } from '@/store';
import { observer } from 'mobx-react-lite';

export const CourseGrid = observer(() => {
  if (courseStore.courses?.state === 'pending') {
    return <div>Loading...</div>;
  }
  if (courseStore.courses?.state === 'rejected') {
    return <div>Error</div>;
  }

  const courses = courseStore.courses?.value;

  if (!courses) return;

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Featured Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
});
