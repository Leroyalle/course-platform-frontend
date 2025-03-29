import { Card } from '@/components/ui/card';

export function LessonSidebar() {
  const sections = [
    'Declaring Variables',
    'Primitive Data Types',
    'Complex Data Types',
    'Type Conversion',
  ];

  return (
    <>
      <Card className="p-4">
        <h3 className="font-semibold mb-4">In This Lesson</h3>
        <ul className="space-y-2 text-sm">
          {sections.map((section, index) => (
            <li
              key={index}
              className={
                index === 0
                  ? 'text-primary font-medium'
                  : 'text-muted-foreground hover:text-primary'
              }>
              {section}
            </li>
          ))}
        </ul>
      </Card>

      <Card className="p-4 mt-4">
        <h3 className="font-semibold mb-4">Resources</h3>
        <ul className="space-y-2 text-sm">
          <li className="text-primary underline">Lesson Slides</li>
          <li className="text-primary underline">Exercise Files</li>
          <li className="text-primary underline">Additional Reading</li>
        </ul>
      </Card>
    </>
  );
}
