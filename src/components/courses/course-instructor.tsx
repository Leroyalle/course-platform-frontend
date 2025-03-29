interface CourseInstructorProps {
  instructor: string
}

export function CourseInstructor({ instructor }: CourseInstructorProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Instructor</h2>
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
          <span className="font-semibold">{instructor.charAt(0)}</span>
        </div>
        <div>
          <h3 className="font-medium">{instructor}</h3>
          <p className="text-sm text-muted-foreground">Programming Instructor</p>
        </div>
      </div>
    </div>
  )
}

