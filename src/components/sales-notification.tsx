'use client';

import { CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';

type SalesNotificationProps = {
  name: string;
  location: string;
};

export function SalesNotification({ name, location }: SalesNotificationProps) {
  return (
    <Card className="fixed bottom-4 left-4 z-50 w-auto max-w-sm p-4 shadow-lg animate-in fade-in-0 slide-in-from-bottom-5">
      <div className="flex items-center gap-4">
        <div className="p-2 rounded-full bg-green-100 dark:bg-green-900">
          <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
        </div>
        <div className="flex-grow">
          <p className="font-semibold text-sm text-foreground">
            {name} acabou de comprar!
          </p>
          <p className="text-xs text-muted-foreground">
            {location} • Compra verificada
          </p>
        </div>
      </div>
    </Card>
  );
}
