import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface Props {
  email: string;
  onSuccess: () => void;
}

export function VerifyForm({ email, onSuccess }: Props) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном приложении здесь была бы проверка кода
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-sm text-muted-foreground">Мы отправили код подтверждения на {email}</p>
      <div className="space-y-2">
        <Input
          id="code"
          name="code"
          type="text"
          placeholder="Введите 6-значный код"
          required
          maxLength={6}
          pattern="\d{6}"
        />
      </div>
      <Button type="submit" className="w-full">
        Подтвердить
      </Button>
    </form>
  );
}
