'use client';
import React from 'react';
import { ThemeProvider } from './theme-provider';
import { AuthWrapper } from './auth-wrapper';
import NextTopLoader from 'nextjs-toploader';

interface Props {
  children: React.ReactNode;
}
export const Providers: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <AuthWrapper>{children}</AuthWrapper>
      <NextTopLoader />
    </ThemeProvider>
  );
};
