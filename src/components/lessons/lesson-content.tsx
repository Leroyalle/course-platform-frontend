import { Card } from '@/components/ui/card';
import type { Lesson } from '@/types/lesson';

interface Props {
  lesson: Lesson;
}

export function LessonContent({ lesson }: Props) {
  return (
    <Card className="p-6 overflow-x-auto">
      <h2 className="text-2xl font-bold mb-6">{lesson.title}</h2>
      <div className="max-w-none" dangerouslySetInnerHTML={{ __html: lesson.content }} />
    </Card>
  );
}
