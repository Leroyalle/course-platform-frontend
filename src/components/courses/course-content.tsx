import type { Course } from "@/types/course"

interface CourseContentProps {
  course: Course
}

export function CourseContent({ course }: CourseContentProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2">About This Course</h2>
      <p className="text-muted-foreground">{course.description}</p>
    </div>
  )
}

