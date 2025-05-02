'use client'; 

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // this works with app router

  

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-25">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-5xl font-bold">GuardianChain</span>
            </Link>
          </div>

          {/* Desktop  */}
          <div className="hidden md:flex items-center space-x-10 ">
            <Link href="/" className={`px-3 py-2 rounded-md text-2xl font-medium ${pathname === '/' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
                Home
            </Link>
            <Link href="/Download" className={`px-3 py-2 rounded-md text-2xl font-medium ${pathname === '/Download' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
              Download
            </Link>
            <Link href="/browserwallet" className={`px-3 py-2 rounded-md text-2xl font-medium ${pathname === '/browserwallet' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
            Browser Wallet
            </Link>
            <Link href="/About" className={`px-3 py-2 rounded-md text-2xl font-medium ${pathname === '/About' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
              About
            </Link>
            
            
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center">
            <button 
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close icon */}
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
            Home
          </Link>
          <Link href="/Download" className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/Download' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
            Download
          </Link>
          <Link href="/browserwallet" className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/browserwallet' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
            Browser Wallet
          </Link>
          <Link href="/About" className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/About' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
            About
          </Link>
          
         
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;