import  { useState } from "react";
import SignIn from "./signIn";
import SignUp from "./singUp";
import ProfileSection from "./profileSection";
import MobileMenu from "./mobileMenu";

export default function NavbarSection() {
  return (
    <div className="border-b border-gray-200 py-0.5">
     
      <div className=" flex items-center justify-between 2xl:px-64 lg:px-32 md:px-16 px-8 ">
        {/* This is a logo */}
        <p className="lg:text-4xl md:text-2xl text-xl font-bold bg-gradient-to-br from-red-500 to-violet-500 text-transparent bg-clip-text">
          To Do List
        </p>
        {/* user profile section */}
       <MobileMenu/>
        <div className="hidden sm:flex items-center gap-4">
        < ProfileSection/>
          {/* Sign up section */}
         <SignUp/>
         {/* Sign In section */}
        < SignIn/>
        </div>

      </div>
    </div>
  );
}
