import * as React from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';

export function DashboardHeader({ children }: { children?: React.ReactNode }) {
  return (
    <header className="sticky top-0 z-30 flex items-center h-14 gap-4 border-b bg-background px-4 sm:h-16 sm:px-6">
      <SidebarTrigger className="md:hidden" />
      <div className="flex-1" />
      {children}
    </header>
  );
}
