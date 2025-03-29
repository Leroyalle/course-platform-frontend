import type { FC } from 'react';
import { clsx } from 'clsx';
import Link from 'next/link';

interface Props {
  className?: string;
}

export const Header: FC<Props> = ({ className }) => {
  return (
    <div className={clsx('', className)}>
      <nav className="border-b">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <div className="font-bold text-xl">Leroyalle</div>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm hover:text-primary">
              Home
            </Link>
            <Link href="#" className="text-sm hover:text-primary">
              Courses
            </Link>
            <Link href="#" className="text-sm hover:text-primary">
              About
            </Link>
            <Link href="#" className="text-sm hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
