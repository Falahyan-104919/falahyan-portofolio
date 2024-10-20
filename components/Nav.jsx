'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/resume',
    name: 'Resume',
  },
  // {
  //   path: '/work',
  //   name: 'Work',
  // },
  // {
  //   path: '/contacts',
  //   name: 'Contacts',
  // },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname ? 'border-b-2 border-accent-default' : null
            } capitalize font-medium hover:text-accent-default transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
