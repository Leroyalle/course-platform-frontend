import { Card } from '@/components/ui/card';
import { Button } from '../ui/button';

export function LessonSidebar() {
  const sections = [
    'Объявление переменных',
    'Примитивные типы данных',
    'Сложные типы данных',
    'Преобразование типов',
  ];

  return (
    <>
      <Card className="p-4">
        <h3 className="font-semibold mb-4">В этом уроке</h3>
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
        <h3 className="font-semibold mb-4">Материалы</h3>
        <ul className="space-y-2 text-sm">
          <li className="text-primary underline">Слайды урока</li>
          <li className="text-primary underline">Файлы для упражнений</li>
          <li className="text-primary underline">Дополнительное чтение</li>
        </ul>
      </Card>

      <Button className="mt-4" size={'lg'}>
        Пометить урок как пройденный
      </Button>
    </>
  );
}
