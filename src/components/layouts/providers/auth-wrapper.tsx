'use client';
import { profileStore } from '@/store';
import { observer } from 'mobx-react-lite';
import React, { ReactNode, useEffect, useState } from 'react';

interface Props {
  children: ReactNode;
}

export const AuthWrapper: React.FC<Props> = observer(({ children }) => {
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    profileStore.current().finally(() => {
      setIsInitializing(false);
      console.log('finally resolved');
    });
  }, []);

  if (isInitializing || (profileStore.me?.state === 'pending' && isInitializing)) {
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }

  return children;
});
