'use client';

import { Button } from '@/components/ui/button';
import { AuthModal } from '@/components/auth/auth-modal';
import { useState } from 'react';
import { profileStore } from '@/store';
import { observer } from 'mobx-react-lite';
import { deleteCookie } from '@/app/actions';

export const HeroSection = observer(() => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const handleLogout = async () => {
    await profileStore.logout();
    await deleteCookie('token');
  };
  console.log(profileStore.me?.value);
  return (
    <header className="mb-10">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">IT курсы</h1>
          <p className="text-muted-foreground mt-2">
            Основное программирование с нашими курсами под руководством экспертов
          </p>
        </div>
        {profileStore.me?.state === 'fulfilled' && profileStore.me?.value.email ? (
          <Button onClick={handleLogout}>Выйти</Button>
        ) : (
          <Button onClick={() => setIsAuthOpen(true)}>Войти</Button>
        )}
      </div>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </header>
  );
});
