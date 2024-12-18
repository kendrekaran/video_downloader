import React from 'react';
import { Button } from './ui/button';
import { FaGithub, FaX } from 'react-icons/fa6';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="bg-transparent z-10 w-full p-8 shadow-md fixed top-0 flex  justify-between items-center">
      <div className="text-2xl sm:text-3xl font-bold text-slate-300 hover:text-blue-600">
        <Link href="/">
            <h1>CloudClipper</h1>
        </Link>
      </div>
      <div className="flex gap-4">
        <Link href="/">
            <Button className="bg-white text-black px-4 py-2 rounded-3xl  hover:bg-black hover:text-white hover:border">
            <FaGithub/>  
            <h2 className='hidden sm:inline-block'>Start me on GitHub</h2>
            </Button>
        </Link>
        <Link href="/">
            <Button className="bg-white text-black px-4 py-2 rounded-3xl hover:bg-black hover:text-white hover:border">
            <FaX />
            <h2 className='hidden sm:inline-block'>Follow me on Twitter</h2>
            </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;