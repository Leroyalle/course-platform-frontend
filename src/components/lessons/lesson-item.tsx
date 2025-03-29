import Link from "next/link"
import { ChevronRight, Clock } from "lucide-react"
import type { Lesson } from "@/types/lesson"

interface LessonItemProps {
  lesson: Lesson
  courseId: string
}

export function LessonItem({ lesson, courseId }: LessonItemProps) {
  return (
    <Link href={`/courses/${courseId}/lessons/${lesson.id}`} className="block">
      <div
        className={`p-3 rounded-md border ${lesson.completed ? "bg-primary/5 border-primary/20" : "hover:bg-muted"}`}
      >
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium">{lesson.title}</h3>
            <div className="flex items-center gap-1 mt-1">
              <Clock className="h-3 w-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">{lesson.duration}</span>
            </div>
          </div>
          {lesson.completed ? (
            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Completed</span>
          ) : (
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          )}
        </div>
      </div>
    </Link>
  )
}

