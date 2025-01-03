'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaCartArrowDown, FaShopify, FaBars, FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import ThemeToggle from './ToggleTheme';

function Header() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartItemCount = cartItems.length;
  const [menuOpen, setMenuOpen] = useState(false);

  const navBar = [
    { name: 'Home', link: '/' },
    { name: 'Contact', link: '/Contact' },
    { name: 'Cart', link: '/Cart' },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-zinc-900 shadow-lg font-semibold">
      <div className="flex justify-between items-center  h-16 px-4 md:px-12">
        <div className="flex items-center gap-2 font-bold text-lg">
          <FaShopify className="text-[30px]" />
          <h3>ShopNova</h3>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-16">
          {navBar.map((navData, index) => (
            <li key={index}>
              <Link
                href={navData.link}
                className="flex items-center gap-1 transform transition-all hover:scale-105"
              >
                {navData.name}
                {navData.name === 'Cart' && cartItemCount > 0 ? (
                  <div className="relative">
                    <FaCartArrowDown className="text-[20px] text-blue-600" />
                    <div className="absolute -top-[12px] left-[13px] w-[15px] h-[15px] text-[9px] rounded-full bg-red-600 flex justify-center items-center text-white">
                      {cartItemCount}
                    </div>
                  </div>
                ) : navData.name === 'Cart' ? (
                  <FaCartArrowDown className="text-[20px] text-blue-600" />
                ) : null}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5 md:hidden">
          <ThemeToggle />
          <button onClick={toggleMenu} className="text-[24px]">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white dark:bg-zinc-900 shadow-md md:hidden">
            <ul className="flex flex-col items-center gap-6 py-8">
              {navBar.map((navData, index) => (
                <li key={index}>
                   <Link
                href={navData.link}
                className="flex items-center gap-1 transform transition-all hover:scale-105"
              >
                {navData.name}
                {navData.name === 'Cart' && cartItemCount > 0 ? (
                  <div className="relative">
                    <FaCartArrowDown className="text-[20px] text-blue-600" />
                    <div className="absolute -top-[12px] left-[13px] w-[15px] h-[15px] text-[9px] rounded-full bg-red-600 flex justify-center items-center text-white">
                      {cartItemCount}
                    </div>
                  </div>
                ) : navData.name === 'Cart' ? (
                  <FaCartArrowDown className="text-[20px] text-blue-600" />
                ) : null}
              </Link>
                </li>
              ))}
                          <button className="bg-blue-600 rounded-[2px] py-2 w-full  text-white">
              <Link  href={'/SignUp'}>
              SignIn
              </Link>
            </button>
            </ul>
          </div>
        )}

        <div className="hidden md:flex gap-5">
          <Link href={'/SignUp'}>
            <button className="bg-blue-600 rounded-[4px] py-2 px-6 text-white">
              SignIn
            </button>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default Header;
