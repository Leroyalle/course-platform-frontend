import { authService } from '@/services';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface Props {
  verifyData: {
    email: string;
    userId: string;
  };
  onSuccess: () => void;
}

export function VerifyForm({ verifyData, onSuccess }: Props) {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const code = formData.get('code') as string;
    await authService.verify({ userId: verifyData.userId, code });
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Мы отправили код подтверждения на {verifyData.email}
      </p>
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
