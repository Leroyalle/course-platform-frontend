import { CourseGrid, CtaSection, HeroSection } from '@/components';
import clsx from 'clsx';
import React from 'react';

interface Props {
  className?: string;
}

export const HomeWrapper: React.FC<Props> = ({ className }) => {
  return (
    <div className={clsx('container mx-auto py-10', className)}>
      <HeroSection />
      <CourseGrid />
      <CtaSection />
    </div>
  );
};
