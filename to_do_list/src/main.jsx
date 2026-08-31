import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import RegisterSection from './components/registerSection.jsx';
import SignUp from './components/singUp.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
   <Routes>
      <Route path="/" element={<App />} />
      <Route path="/register" element={<RegisterSection/>} />
      <Route path="/sign_up" element={<SignUp/>} />


    </Routes>
  </BrowserRouter>,
  </StrictMode>,
)
