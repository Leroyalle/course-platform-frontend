'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import { LoginForm } from './login-form';
import { RegisterForm } from './register-form';
import { VerifyForm } from './verify-form';
import { profileStore } from '@/store';
import { authService } from '@/services';
import { Login } from '@/types';
import { createCookie } from '@/app/actions';

type AuthView = 'login' | 'register' | 'verify';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: Props) {
  const [view, setView] = useState<AuthView>('login');
  const [email, setEmail] = useState('');

  const handleRegister = async (data: { name: string; email: string; password: string }) => {
    setEmail(data.email);
    await authService.register(data);
    setView('verify');
  };

  const handleLogin = async (data: Login) => {
    const { token } = await authService.login(data);
    await createCookie('token', token);
    await authService.current();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>
            {view === 'login' && 'Войти'}
            {view === 'register' && 'Регистрация'}
            {view === 'verify' && 'Подтверждение'}
          </DialogTitle>
        </DialogHeader>

        {view === 'login' && <LoginForm onSubmit={handleLogin} />}

        {view === 'register' && <RegisterForm onSubmit={handleRegister} />}

        {view === 'verify' && <VerifyForm email={email} onSuccess={onClose} />}

        {view !== 'verify' && (
          <div className="mt-4 text-center text-sm">
            {view === 'login' ? (
              <p>
                Нет аккаунта?{' '}
                <Button variant="link" className="px-0" onClick={() => setView('register')}>
                  Зарегистрироваться
                </Button>
              </p>
            ) : (
              <p>
                Уже есть аккаунт?{' '}
                <Button
                  disabled={profileStore.me?.state === 'pending'}
                  variant="link"
                  className="px-0"
                  onClick={() => setView('login')}>
                  Войти
                </Button>
              </p>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
