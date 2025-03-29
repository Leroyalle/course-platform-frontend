import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <header className="mb-10">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">Leroyalle Programming Courses</h1>
          <p className="text-muted-foreground mt-2">
            Master programming with our expert-led courses
          </p>
        </div>
        <Button>Sign In</Button>
      </div>
    </header>
  );
}
