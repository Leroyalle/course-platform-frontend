'use client';
import { CourseGrid, CtaSection, HeroSection } from '@/components';
import { courseStore } from '@/store';
import clsx from 'clsx';
import React, { useEffect } from 'react';

interface Props {
  className?: string;
}

export const HomeWrapper: React.FC<Props> = ({ className }) => {
  useEffect(() => {
    courseStore.getAll();
  }, []);

  return (
    <div className={clsx('container mx-auto py-10', className)}>
      <HeroSection />
      <CourseGrid />
      <CtaSection />
    </div>
  );
};
