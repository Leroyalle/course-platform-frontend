'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { LessonContent, LessonNavigation, LessonSidebar } from '@/components';
import { getAdjacentLessons } from '@/lib/data/lessons';
import { useEffect, useState } from 'react';

import { observer } from 'mobx-react-lite';
import { lessonStore } from '@/store';

interface Props {
  courseId: string;
  lessonId: string;
}

export const LessonWrapper: React.FC<Props> = observer(({ courseId, lessonId }) => {
  const [, forceUpdate] = useState({});

  useEffect(() => {
    lessonStore.getById(lessonId).then(() => {
      forceUpdate({});
    });
  }, [lessonId]);

  if (!lessonStore.lesson || lessonStore.lesson.state === 'pending') {
    return <div>Loading...</div>;
  }

  if (lessonStore.lesson.state === 'rejected') {
    return <div>Error loading lesson</div>;
  }

  const lesson = lessonStore.lesson.value;
  if (!lesson) return null;

  const { previousLesson, nextLesson } = getAdjacentLessons(courseId, lessonId);

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <Link href={`/courses/${courseId}`}>
          <Button variant="outline" className="flex items-center gap-1">
            <ChevronLeft className="h-4 w-4" />
            Вернуться к курсу
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">{lesson.course.title}</h1>
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
          <LessonSidebar courseId={courseId} lessonId={lessonId} isCompleted={lesson.completed} />
        </div>
      </div>
    </div>
  );
});
