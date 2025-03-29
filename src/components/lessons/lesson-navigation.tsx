import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Lesson } from '@/types/lesson';

interface Props {
  courseId: string;
  previousLesson: Lesson | null;
  nextLesson: Lesson | null;
}

export function LessonNavigation({ courseId, previousLesson, nextLesson }: Props) {
  return (
    <div className="flex justify-between mt-8">
      {previousLesson ? (
        <Link href={`/courses/${courseId}/lessons/${previousLesson.id}`}>
          <Button variant="outline" className="flex items-center gap-1">
            <ChevronLeft className="h-4 w-4" />
            {previousLesson.title}
          </Button>
        </Link>
      ) : (
        <div />
      )}

      {nextLesson && (
        <Link href={`/courses/${courseId}/lessons/${nextLesson.id}`}>
          <Button className="flex items-center gap-1">
            {nextLesson.title}
            <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      )}
    </div>
  );
}
