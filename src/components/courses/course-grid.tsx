import { CourseCard } from '@/components/courses/course-card';
import { getAllCourses } from '@/lib/data/courses';

export function CourseGrid() {
  const courses = getAllCourses();
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
}
