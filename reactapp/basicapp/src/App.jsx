import React, { useState } from "react";
import LoginPage from "./components/loginpage";
import Skills_add from "./components/skills_add";

export default function App() {
  const [isAdding, setisAdding] = useState(false);
  const [skills, setSkills] = useState(["Frontend developer"]);
  const [newSkill, setNewSkill] = useState("");
  return (
    <div>
      
      <LoginPage />
      <Skills_add />
    </div>
  );
}
