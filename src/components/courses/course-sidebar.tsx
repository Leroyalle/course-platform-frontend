import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import type { Lesson } from '@/types/lesson';
import { LessonItem } from '../lessons/lesson-item';

interface CourseSidebarProps {
  courseId: string;
  lessons: Lesson[];
  progress: number;
  completedCount: number;
}

export function CourseSidebar({ courseId, lessons, progress, completedCount }: CourseSidebarProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Content</CardTitle>
        <CardDescription>
          <div className="flex justify-between items-center">
            <span>
              {completedCount} of {lessons.length} lessons completed
            </span>
            <span>{(progress || 0).toFixed(0)}%</span>
          </div>
          <Progress value={progress} className="mt-2" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {lessons.map((lesson) => (
            <LessonItem key={lesson.id} lesson={lesson} courseId={courseId} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
