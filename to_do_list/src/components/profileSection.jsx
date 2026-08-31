import { CircleUserRound, LogOut } from "lucide-react";
import { useState } from "react";

export default function ProfileSection() {
  const [IsOpen, setIsOpen] = useState(false);
  return (
    <div>
      {IsOpen && (
        <div>
          <div onClick={()=>setIsOpen(!IsOpen)} className="w-[100vw] h-full absolute inset-0  "></div>
          <div className="absolute flex flex-col gap-2 w-40 top-16 rounded-xl  shadow-2xl border border-gray-200 px-4 py-2">
            {/* Profile picture and user name section */}
          <div className="flex items-center gap-1 text-xs border-b border-gray-200  py-1">
             <img className="w-7 h-7 rounded-full object-cover" src="https://media.istockphoto.com/id/116192438/photo/one-indian-it-software-engineer-white-collar-worker-computer-people.webp?a=1&b=1&s=612x612&w=0&k=20&c=yCT6pKSUFtfymcCnUzx6SeSqS8yrWLDeVYZH8mOcJ3c=" alt="Image" />

            <p>User name</p>
          </div>
           <div className="space-y-2 text-xs font-semibold">
            <p>Your Progress</p>


            {/* Log out section */}
            <button className=" flex items-center gap-1 cursor-pointer  text-red-600 text-xs font-semibold">
              <LogOut size={16} />
              Log Out
            </button>
           </div>
          </div>
        </div>
      )}

      <div className="relative">
        <CircleUserRound strokeWidth={1}
          className="w-7 h-7 cursor-pointer"
          onClick={() => setIsOpen(!IsOpen)}
        />
      </div>
    </div>
  );
}
