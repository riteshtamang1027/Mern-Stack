import { X } from "lucide-react";
import { useState } from "react";

export default function SignUp() {
  const [IsOpen, setIsOpen] = useState(false);
  return (
    <div>
      {/* Sign In information*/}
      {IsOpen && (
        // Main container section
        <div>
          {/* This is a div which help to closed open container. */}
          <div
            onClick={(e) => e.target(setIsOpen(!IsOpen))}
            className="absolute w-[100vw] inset-0  h-screen bg-black/50"
          ></div>

          {/* This container have many elements */}
          <div className="absolute p-4  bg-white left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2   rounded-xl shadow-2xl">
            {/* Heading section */}
            <div className="flex items-center justify-between gap-6 ">
              <p className="font-bold text-xl ">SIGN UP</p>
              {/* It can help to closed popover */}
              <X
                onClick={() => setIsOpen(!IsOpen)}
                className="cursor-pointer w-5 h-5"
              />
            </div>

            {/* form */}
            <form action="" className="space-y-4 mt-4">
              {/* Email or phone number section */}

              {formElements.map((items, index) => (
                <div key={index} className="flex flex-col gap-2 text-sm">
                  <label htmlFor="" className="font-semibold">
                    {items.field_name} : <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="border-b rounded-sm px-2 py-0.5 border-gray-300 w-64 outline-none"
                    placeholder={`${items.placeholder_section}`}
                  />
                </div>
              ))}

              <div className="flex flex-col gap-2 text-sm">
                <label htmlFor="" className="font-semibold">
                  Gender : <span className="text-red-600">*</span>
                </label>

                {/* Gender selection section */}

                <div className="flex  items-center justify-between px-2">
                  {genderSelection.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 font-semibold text-sm">
                    <input
                      type="radio"
                      name="radio"
                      value={item}
                      className=" appearance-none border checked:bg-blue-500 checked:border-blue-700 cursor-pointer rounded-full border-gray-400 w-4 h-4 outline-none"
                    />{" "}
                    <span>{item}</span>
                  </div>
                ))}
                </div>

              </div>

              <button className="text-sm font-semibold border border-gray-300 px-4 py-1 rounded-md cursor-pointer">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Sign In button */}
      <button
        onClick={() => setIsOpen(true)}
        className="border border-gray-200 px-2 py-0.5 rounded-md text-sm cursor-pointer font-medium"
      >
        Sign Up
      </button>
    </div>
  );
}

const formElements = [
  {
    field_name: "First Name",
    placeholder_section: "First name",
  },
  {
    field_name: "Middle Name",
    placeholder_section: "Middle name",
  },
  {
    field_name: "Last Name",
    placeholder_section: "Last name",
  },
  {
    field_name: "Phone Number",
    placeholder_section: "Phone number",
  },
];

const genderSelection = ["Male", "Female", "Other"];
