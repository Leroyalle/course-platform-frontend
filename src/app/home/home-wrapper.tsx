'use client';
import { CourseGrid, CtaSection, HeroSection } from '@/components';
import clsx from 'clsx';
import { observer } from 'mobx-react-lite';

interface Props {
  className?: string;
}

export const HomeWrapper: React.FC<Props> = observer(({ className }) => {
  return (
    <div className={clsx('container mx-auto py-10', className)}>
      <HeroSection />
      <CourseGrid />
      <CtaSection />
    </div>
  );
});
