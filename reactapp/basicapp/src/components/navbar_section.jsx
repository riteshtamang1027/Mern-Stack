import React from 'react'
import { LogIn } from 'lucide-react';
export default function Navbar_section() {
  return (
    <>
      <nav className='flex  items-center justify-between'>
        <p>Logo</p>
        <ol className='flex gap-4 '>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>FAQ's</li>
        </ol>

        <div>

        <input className='border border-gray-200 rounded-lg outline-none px-2 py-1 text-sm' type="text" name="" id="" placeholder='Search bar' />
        </div>

        <LogIn size={20} />

      </nav>
    </>
  )
}
