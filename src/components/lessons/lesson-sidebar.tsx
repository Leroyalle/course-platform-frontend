'use client';
import { Card } from '@/components/ui/card';
import { Button } from '../ui/button';
import { observer } from 'mobx-react-lite';
import { progressService } from '@/services';
import { FC } from 'react';
import { lessonStore, profileStore } from '@/store';

interface Props {
  courseId: string;
  lessonId: string;
  isCompleted: boolean;
}

export const LessonSidebar: FC<Props> = observer(({ courseId, lessonId, isCompleted }) => {
  const sections = [
    'Объявление переменных',
    'Примитивные типы данных',
    'Сложные типы данных',
    'Преобразование типов',
  ];

  const handleToggleLessonCompleted = async () => {
    await progressService.toggleLessonCompleted(courseId, lessonId);
    lessonStore.toggleLessonCompleted();
  };

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

      <Button
        disabled={profileStore.me?.state === 'fulfilled' ? !profileStore.me?.value.email : true}
        className={'mt-4'}
        size={'lg'}
        variant={isCompleted ? 'outline' : 'default'}
        onClick={handleToggleLessonCompleted}>
        {isCompleted ? 'Урок пройден' : 'Пометить урок как пройденный'}
      </Button>
    </>
  );
});
