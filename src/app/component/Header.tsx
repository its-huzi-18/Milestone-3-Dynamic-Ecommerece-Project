'use client'
import Link from 'next/link';
import React from 'react';
import { FaCartArrowDown, FaShopify } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store'; // Make sure RootState is correctly imported
import ThemeToggle from './ToggleTheme';

function Header() {
  const cartItems = useSelector((state: RootState) => state.cart.items); // Get the items in the cart
  const cartItemCount = cartItems.length; // Get the number of items in the cart

  const navBar = [
    { name: 'Home', link: '/' },
    { name: 'Contact', link: '/Contact' },
    { name: 'Cart', link: '/Cart' },
  ];

  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-zinc-900 shadow-lg shadow-slate-800 font-semibold">
      <div className="flex justify-between gap-4 px-6 items-center h-16">
        <div className="flex gap-2 items-center font-bold text-lg">
          <FaShopify className="text-[30px]" />
          <h3>ShopNova</h3>
        </div>
        <ul className="flex gap-16">
          {navBar.map((navData, index) => (
            <li key={index}>
              <Link className="flex items-center gap-1 transform transition-all hover:scale-105" href={navData.link}>
              {navData.name}
{navData.name === 'Cart' && cartItemCount > 0 ? (
  <div className="relative">
    <FaCartArrowDown className="text-[20px] text-blue-600" />
    <div className="absolute -top-[12px] left-[13px] w-[14.8px] h-[14.8px] text-[9px] rounded-full bg-red-600 flex justify-center items-center text-white">
      <div>{cartItemCount}</div>
    </div>
  </div>
) : navData.name === 'Cart' ? (
  <FaCartArrowDown className="text-[20px] text-blue-600" />
) : null}

              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-4 mr-4">
          <Link href={'/SignUp'}>
          <button className="bg-blue-600 rounded-[4px] py-2 px-5 text-white">
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
