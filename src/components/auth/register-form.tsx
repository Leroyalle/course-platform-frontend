import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface Props {
  onSubmit: (data: { name: string; email: string; password: string }) => void;
}

export function RegisterForm({ onSubmit }: Props) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    if (password !== confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }

    onSubmit({
      name: formData.get('fullname') as string,
      email: formData.get('email') as string,
      password: password,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Input
          id="name"
          name="fullname"
          type="text"
          placeholder="Имя"
          required
          autoComplete="name"
        />
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          required
          autoComplete="email"
        />
      </div>
      <div className="space-y-2">
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Пароль"
          required
          autoComplete="new-password"
        />
      </div>
      <div className="space-y-2">
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Подтвердите пароль"
          required
          autoComplete="new-password"
        />
      </div>
      <Button type="submit" className="w-full">
        Зарегистрироваться
      </Button>
    </form>
  );
}
