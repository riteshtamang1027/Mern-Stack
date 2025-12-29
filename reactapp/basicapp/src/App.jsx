import React, { useState } from "react";

export default function App() {
  const [isAdding, setisAdding] = useState(false);
  const [skills, setSkills] = useState(["Frontend developer"]);
  const [newSkill, setNewSkill] = useState("");
  return (
    <div
      className="w-full
    flex items-center justify-center"
    >
      <div className="  border w-max mt-12 p-4 rounded-xl bg-gray-200 shadow-2xl space-y-4">
        {/* skills list section */}
        <div>
          <p className="text-xl font-bold">Skills List :</p>
          <ol>
            {skills.map((skill, index) => (
              <li
                key={index}
                className="text-base font-semibold opacity-80 ml-2"
              >
                {skill}
              </li>
            ))}
          </ol>
        </div>
        {isAdding ? (
          <div className="space-y-2">
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              className="outline-none border border-gray-300 rounded-xl px-2 py-1"
            />
            <div className="flex items-center justify-end gap-4">
              <button
                onClick={() => {
                  if (newSkill.trim()) {
                    setSkills([...skills, newSkill]);
                    setNewSkill("");
                    setisAdding(!isAdding);
                  }
                }}
                className="px-2 py-1 bg-green-500 rounded-lg text-white cursor-pointer"
              >
                Save
              </button>
              <button
                onClick={() => {
                  setisAdding(!isAdding);
                  setNewSkill("");
                }}
                className="px-2 py-1 bg-red-500 rounded-lg text-white cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          /* btn section */
          <div>
            <button
              onClick={() => setisAdding(!isAdding)}
              className="px-4 py-1 rounded-md bg-sky-500 text-white cursor-pointer"
            >
              Add
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
