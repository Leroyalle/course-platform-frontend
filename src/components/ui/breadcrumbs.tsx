import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
  active?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={index} className="flex items-center">
            {item.active ? (
              <span className="text-foreground">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-primary">
                {item.label}
              </Link>
            )}

            {!isLast && <ChevronRight className="h-4 w-4 mx-1" />}
          </div>
        );
      })}
    </div>
  );
}
