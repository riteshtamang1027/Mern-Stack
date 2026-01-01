import React from "react";

export default function LoginPage() {
  return (
    <div>
      <div>
        <form
          action=""
          className="border  px-4 py-4 rounded-xl  shadow-2xl space-y-4"
        >
          {/*Input your username */}
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-md font-semibold ">
              username<span className="text-red-500">*</span>
            </label>
            <input
              required="true"
              type="text"
              className="border  px-2 py-1 rounded-lg outline-none text-sm"
              placeholder="Enter your username"
            />
          </div>

          {/* your password */}
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-md font-semibold ">
              password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              required="true"
              className="border  px-2 py-1 rounded-lg outline-none text-sm"
              placeholder="password"
            />
          </div>

          <button className="px-2 py-1 rounded-md border border-gray-400 cursor-pointer bg-sky-500 text-white justify-items-end">Login</button>
        </form>
      </div>
    </div>
  );
}
