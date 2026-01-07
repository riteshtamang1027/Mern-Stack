import React from "react";
import { useState } from "react";

export default function Skills_add() {
  const [skills, setskills] = useState([""]);
  const [AddnewSkills, setAddNewSkills] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  return (
    <div className="border border-gray-400 rounded-xl px-4 py-1">
      <h1 className=" px-4 py-2 text-xl font-semibold">Add Skills :</h1>
      {isAdding ? (
        /* skill adding section */
        <div className="space-x-4">
          <input
            className="px-2 py-1 border border-gray-400 rounded-md outline-none"
            type="text"
            name=""
            id=""
          />
          <button
            onClick={() => {
              if (AddnewSkills.trim()) {
                setskills([...skills, AddnewSkills]);
                setAddNewSkills(" ");
                setIsAdding(!isAdding);
              }
            }}
            className="border border-gray-400 rounded-md px-2 py-1 font-semibold text-base bg-green-500 text-white"
          >
            save
          </button>
          <button
            onClick={() => {
              setIsAdding(!isAdding), setAddNewSkills("");
            }}
            className="border border-gray-400 rounded-md px-2 py-1 font-semibold text-base bg-red-500 text-white"
          >
            cancle
          </button>
        </div>
      ) : (
        /* skill add button  */
        <button
          onClick={() => setIsAdding(!isAdding)}
          className="border border-gray-300 rounded-md px-2 py-1 text-lg font-semibold cursor-pointer bg-blue-500 text-white"
        >
          Add
        </button>
      )}
    </div>
  );
}
