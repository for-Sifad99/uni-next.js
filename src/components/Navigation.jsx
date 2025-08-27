'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Courses', href: '/courses' },
  { label: 'Add Course', href: '/add-course' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
];

const Navigation = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav>
      <div className="flex justify-between items-center px-4 xs:px-8 md:px-10 lg:px-14 xl:px-18">
        <div className="w-full flex justify-between items-center h-22">
          {/* Logo */}
          <Link href="/" className="-ml-2 flex items-center">
            <div className="w-13 h-13">
              <Image
                src="/uni-logo.png"
                alt="Logo"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <span className="text-[44px] font-bold text-foreground">Uni</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="ml-auto lg:mx-auto text-base hidden md:flex items-baseline space-x-9">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative group py-1"
                >
                  <span
                    className={`${
                      isActive ? 'text-[#ff5c2a]' : 'text-foreground'
                    } transition-colors`}
                  >
                    {link.label}
                  </span>
                  <span
                    className={`absolute left-0 -bottom-1 h-[3px] w-full rounded-full bg-[#ff5c2a] transition-all duration-500 ease-out transform origin-left ${
                      isActive
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Get in Touch button (desktop) */}
          <Link href="/contact">
            <button className="lg:flex hidden bg-[#ff5c2a] hover:bg-[#ee4f1e] font-medium text-[15px] px-7.5 py-3 text-white transition-all duration-500 cursor-pointer">
              Get in Touch
            </button>
          </Link>
        </div>

        {/* Hamburger (mobile) */}
        <div className="md:hidden flex items-center">
          <button
            aria-label="Open menu"
            className="text-3xl focus:outline-none ml-4"
            onClick={() => setSidebarOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              viewBox="0 0 23.4 15.4"
            >
              <g transform="translate(-0.3 -0.3)">
                <path d="M23,1.7H1A.7.7,0,0,1,1,.3H23a.7.7,0,1,1,0,1.4Z"></path>
                <path d="M23,8.7H1A.7.7,0,1,1,1,7.3H23a.7.7,0,1,1,0,1.4Z"></path>
                <path d="M17,15.7H1a.7.7,0,1,1,0-1.4H17a.7.7,0,1,1,0,1.4Z"></path>
              </g>
            </svg>
          </button>
        </div>
      </div>

      {/* Sidebar (mobile) */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-80 md:hidden bg-gray-900 text-white z-50 transform transition-transform duration-500 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center px-6 py-5.5">
          <button
            aria-label="Close menu"
            className="text-2xl ml-auto text-white hover:text-[#ff5c2a] transition-colors focus:outline-none"
            onClick={() => setSidebarOpen(false)}
          >
            <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6l12 12M6 18L18 6"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col p-6 space-y-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setSidebarOpen(false)}
                className="relative group py-1 pr-2 w-fit"
              >
                <span
                  className={`${
                    isActive ? 'text-[#ff5c2a]' : 'text-foreground'
                  } transition-colors`}
                >
                  {link.label}
                </span>
                <span
                  className={`absolute left-0 -bottom-1 h-[3px] w-full rounded-full bg-[#ff5c2a] transition-all duration-300 ease-out transform origin-left ${
                    isActive
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            );
          })}
        </div>
      </div>

      {/* Overlay */}
        <div
          className={`fixed z-40 transition-opacity duration-500 ${
            sidebarOpen ? 'inset-0 bg-opacity-40' : ''
          }`}
          onClick={() => setSidebarOpen(false)}
        />
    </nav>
  );
};

export default Navigation;
