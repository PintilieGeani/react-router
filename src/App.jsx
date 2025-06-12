//Imports
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Guestlayout from "./layouts/GuestLayout.jsx"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Blog from "./pages/Blog.jsx"



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Guestlayout />} > 
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
