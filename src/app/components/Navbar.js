'use client'; 

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 

const Navbar = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // this works with app router

  // Mock function to connect wallet - replace with your actual wallet connection logic
  const connectWallet = async () => {
    try {
      // This is where you'd add your actual wallet connection code
      // For example, using ethers.js or web3.js to connect to MetaMask
      console.log("Connecting to wallet...");
      
      // Simulate successful connection with mock data
      setIsConnected(true);
      setWalletAddress('0x1234...5678');
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setWalletAddress('');
  };

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and brand */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold">CryptoWallet</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === '/' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
              Dashboard
            </Link>
            <Link href="/assets" className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === '/assets' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
              Assets
            </Link>
            <Link href="/transactions" className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === '/transactions' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
              Transactions
            </Link>
            <Link href="/swap" className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === '/swap' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
              Swap
            </Link>
            
            {isConnected ? (
              <div className="flex items-center ml-4">
                <span className="px-3 py-2 rounded-md text-sm font-medium bg-gray-800">
                  {walletAddress.substring(0, 6)}...{walletAddress.substring(walletAddress.length - 4)}
                </span>
                <button 
                  onClick={disconnectWallet}
                  className="ml-2 px-3 py-2 rounded-md text-sm font-medium bg-red-700 hover:bg-red-600"
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <button 
                onClick={connectWallet}
                className="ml-4 px-4 py-2 rounded-md text-sm font-medium bg-blue-600 hover:bg-blue-500"
              >
                Connect Wallet
              </button>
            )}
          </div>

          {/* Mobile menu button */}
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
            Dashboard
          </Link>
          <Link href="/assets" className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/assets' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
            Assets
          </Link>
          <Link href="/transactions" className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/transactions' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
            Transactions
          </Link>
          <Link href="/swap" className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/swap' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
            Swap
          </Link>
          
          {isConnected ? (
            <div className="pt-4">
              <div className="px-3 py-2 rounded-md text-base font-medium bg-gray-800">
                {walletAddress.substring(0, 6)}...{walletAddress.substring(walletAddress.length - 4)}
              </div>
              <button 
                onClick={disconnectWallet}
                className="mt-2 w-full px-3 py-2 rounded-md text-base font-medium bg-red-700 hover:bg-red-600"
              >
                Disconnect
              </button>
            </div>
          ) : (
            <button 
              onClick={connectWallet}
              className="mt-4 w-full px-3 py-2 rounded-md text-base font-medium bg-blue-600 hover:bg-blue-500"
            >
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;