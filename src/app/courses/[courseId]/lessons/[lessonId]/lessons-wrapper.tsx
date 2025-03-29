import { Button } from '@/components/ui/button';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { LessonContent, LessonNavigation, LessonSidebar } from '@/components';
import { getAdjacentLessons, getLessonById } from '@/lib/data/lessons';
import { getCourseById } from '@/lib/data/courses';

interface Props {
  courseId: string;
  lessonId: string;
}

export const LessonWrapper: React.FC<Props> = ({ courseId, lessonId }) => {
  const course = getCourseById(courseId);
  const lesson = getLessonById(lessonId);

  if (!course || !lesson) {
    notFound();
  }

  const { previousLesson, nextLesson } = getAdjacentLessons(courseId, lessonId);

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <Link href={`/courses/${courseId}`}>
          <Button variant="outline" className="flex items-center gap-1">
            <ChevronLeft className="h-4 w-4" />
            Back to Course
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">{course.title}</h1>
        <div className="w-[100px]"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <LessonContent lesson={lesson} />
          <LessonNavigation
            courseId={courseId}
            previousLesson={previousLesson}
            nextLesson={nextLesson}
          />
        </div>
        <div className="lg:col-span-1">
          <LessonSidebar />
        </div>
      </div>
    </div>
  );
};
