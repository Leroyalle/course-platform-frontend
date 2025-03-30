import { LessonWrapper } from './lessons-wrapper';

export default async function LessonPage({
  params,
}: {
  params: Promise<{ courseId: string; lessonId: string }>;
}) {
  const paramsObject = await params;

  return <LessonWrapper courseId={paramsObject.courseId} lessonId={paramsObject.lessonId} />;
}
