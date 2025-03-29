import { CoursesWrapper } from './courses-wrapper';

export default async function CoursePage({ params }: { params: { courseId: string } }) {
  const courseId = (await params).courseId;

  return <CoursesWrapper courseId={courseId} />;
}
