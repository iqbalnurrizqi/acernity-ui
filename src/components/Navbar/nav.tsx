import { IconHome, IconMessage, IconUser } from '@tabler/icons-react';
import React from 'react'
import { FloatingNav } from '../ui/floating-navbar';

export default function Nav() {
      const navItems = [
        {
          name: "Home",
          link: "/",
          icon: (
            <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />
          ),
        },
        {
          name: "About",
          link: "/about",
          icon: (
            <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />
          ),
        },
        {
          name: "Profile",
          link: "/profile",
          icon: (
            <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
          ),
        },
        {
          name: "Product",
          link: "/product",
          icon: (
            <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
          ),
        },
      ];
  return <FloatingNav navItems={navItems} />;
}
