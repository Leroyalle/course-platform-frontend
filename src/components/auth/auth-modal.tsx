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
import { observer } from 'mobx-react-lite';

type AuthView = 'login' | 'register' | 'verify';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal = observer(({ isOpen, onClose }: Props) => {
  const [view, setView] = useState<AuthView>('login');
  const [verifyData, setVerifyData] = useState({
    email: '',
    userId: '',
  });

  console.log(profileStore.me?.value);

  const handleRegister = async (data: { name: string; email: string; password: string }) => {
    const { userId } = await authService.register(data);
    setVerifyData({
      email: data.email,
      userId,
    });
    setView('verify');
  };

  const handleLogin = async (data: Login) => {
    const { token } = await authService.login(data);
    await createCookie('token', token);
    await profileStore.current();
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

        {view === 'verify' && <VerifyForm verifyData={verifyData} onSuccess={onClose} />}

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
});
