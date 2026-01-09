import React from 'react'
import { LogIn } from 'lucide-react';
export default function Navbar_section() {
  return (
    <>
      <nav className='flex  items-center justify-between'>
        <p>Logo</p>
        <ol className='flex gap-8 '>
          {
            navItem.map((item,  index)=>(
              <li key={index}>{item.itemName}</li>

            ))
          }
        </ol>

        <div className='flex  items-center  gap-4 text-white'>
        <input className='border border-gray-200 rounded-lg outline-none px-2 py-1 text-sm' type="text" name="" id="" placeholder='Search bar' />

        <LogIn size={20} className='cursor-pointer' />
        </div>


      </nav>
    </>
  )
}


const navItem = [
  {
    itemName: "Home",
    url:""
  },
    {
    itemName: "About",
    url:""
  }, 
   {
    itemName: "Contact",
    url:""
  }, 
   {
    itemName: "Category",
    url:""
  },  
  {
    itemName: "Dashboard",
    url:""
  }, 
   {
    itemName: "Blogs",
    url:""
  },
]