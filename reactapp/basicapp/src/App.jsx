import LoginPage from "./components/loginpage";
import Navbar_section from "./components/navbar_section";
import Skills_add from "./components/skills_add";
import Skills_list from "./components/skills_list";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <LoginPage />
      <Skills_add />
      <Skills_list  /> */}
      <header className="bg-amber-400 px-4 py-2 text-xs font-light">Best ecommerce to shop @+1234567890. once time you can visit this website ❤️.</header>
      <nav className="bg-purple-400 px-4 py-2">
        <Navbar_section/>
      </nav>
      <div className=" bg-cyan-700 flex flex-1">
       <aside className="bg-green-400 w-[24vw] px-4 py-2">side section</aside>
       <main className="bg-blue-400 flex-1 px-4 py-2">Main section</main>
      </div>
      <footer className="bg-violet-400 px-4 py-2">This is footer section</footer>
    </div>
  );
}
