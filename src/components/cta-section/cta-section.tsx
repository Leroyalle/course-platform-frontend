import { Button } from '@/components/ui/button';

export function CtaSection() {
  return (
    <section className="mt-16 bg-muted p-8 rounded-lg">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">
            Начните свое путешествие в программировании сегодня
          </h2>
          <p className="mb-6">
            Присоединяйтесь к тысячам студентов, которые преобразовали свою карьеру с курсами
            Leroyalle.
          </p>
          <Button size="lg">Посмотреть все курсы</Button>
        </div>
        <div className="flex-1">
          <img
            src="/placeholder.svg?height=300&width=500"
            alt="Coding students"
            className="rounded-lg w-full"
          />
        </div>
      </div>
    </section>
  );
}
