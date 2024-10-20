'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';

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

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger>
        <CiMenuFries className="text-[32px] text-accent-default" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-16 mb-40 text-2xl">
          <Link href="/">
            <h1 className="text-3xl fomt-semibold">
              trippiecode
              <span className="text-accent-default font-bold">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname
                    ? 'text-xl font-semibold border-b-2 text-accent-default border-accent-default'
                    : null
                } hover:text-accent-default`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
