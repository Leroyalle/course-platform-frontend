import type { FC } from 'react';
import { clsx } from 'clsx';

interface Props {
  className?: string;
}

export const Footer: FC<Props> = ({ className }) => {
  return (
    <footer className={clsx('border-t py-8 bg-muted', className)}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Leroyalle</h3>
            <p className="text-sm text-muted-foreground">
              Expert-led programming courses to help you advance your career.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Courses</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground hover:text-primary">JavaScript</li>
              <li className="text-sm text-muted-foreground hover:text-primary">React</li>
              <li className="text-sm text-muted-foreground hover:text-primary">TypeScript</li>
              <li className="text-sm text-muted-foreground hover:text-primary">Next.js</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground hover:text-primary">Blog</li>
              <li className="text-sm text-muted-foreground hover:text-primary">Tutorials</li>
              <li className="text-sm text-muted-foreground hover:text-primary">Documentation</li>
              <li className="text-sm text-muted-foreground hover:text-primary">Community</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground hover:text-primary">Support</li>
              <li className="text-sm text-muted-foreground hover:text-primary">Sales</li>
              <li className="text-sm text-muted-foreground hover:text-primary">Careers</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Leroyalle. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
