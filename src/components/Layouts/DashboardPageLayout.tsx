import React from 'react';
import { Sidebar } from './Nav/Sidebar';
import { PageHeader } from './PageHeader/PageHeader';

interface LayoutProps {
  children: React.ReactNode;
}

export const DashboardPageLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col flex-1 shrink-0">
      <PageHeader />
      <div className="flex flex-1 shrink-0">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};
