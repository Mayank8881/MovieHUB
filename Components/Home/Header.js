"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import logo from '@/public/Img/logo.jpg';
import { MdCreateNewFolder } from 'react-icons/md';
import { FaHome } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc';
import Link from 'next/link';
import DarkMode from '../DarkMode';
import SignIn from './SignIn';
import SearchBox from '../SearchBox';
import { GiCrossMark } from "react-icons/gi";

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div className="flex justify-between p-2 h-20">
        {/* Logo and Navigation Links */}
        <div className="flex">
          <div className="flex justify-between items-center gap-4">
            <Image className="h-20 w-20 rounded-full" src={logo} alt="Logo" />
            <div className="flex gap-5 ms-4 items-center">
              <Link href="/">
                <span className="hidden sm:block hover:text-orange-600">HOME</span>
                <FaHome className="sm:hidden h-5 w-5" />
              </Link>
              <Link href="/About">
                <span className="hidden sm:block hover:text-orange-600">ABOUT</span>
                <FcAbout className="sm:hidden h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Search Box */}
        <SearchBox />

        {/* Full Screen Navigation */}
        <div className="hidden sm:flex items-center gap-8">
          <DarkMode />
          <SignIn />
          <Image className="h-10 w-10 rounded-full" src={logo} alt="Logo" />
        </div>

        {/* Drawer Toggle Button */}
        <button
          className="sm:hidden flex items-center p-2 text:black dark:text-white"
          onClick={toggleDrawer}
        >
          ☰
        </button>

        {/* Drawer */}
        {isDrawerOpen && (
          <div className="fixed top-0 right-0 w-64 h-full bg-slate-50 dark:bg-gray-900 shadow-lg z-50 p-4 overflow-y-auto">
            <div className="flex flex-col items-start gap-4">
              <div className="flex ml-2 items-center gap-8">
                <div><DarkMode /></div>
                <div>MODE</div>
              </div>
              <div className="flex items-center gap-5">
                <div><SignIn /></div>
                <div>Sign In</div>
                {/* <Image className="h-10 w-10 rounded-full" src={logo} alt="Logo" /> */}
              </div>
            </div>
            <GiCrossMark onClick={toggleDrawer} className="absolute top-4 right-4 text-black dark:text-white"/>
          </div>
        )}

        {/* Drawer Overlay */}
        {isDrawerOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={toggleDrawer}
          />
        )}
      </div>
    </>
  );
}

export default Header;
