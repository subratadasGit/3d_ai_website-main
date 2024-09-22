import { NavigationMenu } from '@/components/ui/navigation-menu';
import React from 'react';
import { SidebarDemo } from './sidebardemo';


const Page = () => {
  return (
    <> 
    <NavigationMenu/>
      <div>DashBoard Page</div>
      <SidebarDemo/>
    </>
  );
};

export default Page;
