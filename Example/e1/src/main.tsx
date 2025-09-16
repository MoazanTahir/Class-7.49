import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Contact from './Components/Contact/Contact.tsx';
import About from './Components/About/About.tsx';
import Home from './Components/Home/Home.tsx';
import App from './App.tsx'
import "./index.css"
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
  <Route path="/" element={<App/>}>1
    <Route index element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/about" element={<About/>}/>
  </Route>
</Routes>

    </BrowserRouter>
  </StrictMode>,
)
