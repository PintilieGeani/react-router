//Imports
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Guestlayout from "./layouts/GuestLayout.jsx"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Blog from "./pages/Blog.jsx"
import CreatePost from "./pages/AppCreatePost.jsx"
import SinglePost from "./pages/SinglePost.jsx"



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Guestlayout />} >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog">
              <Route path="" element={<Blog />} />
              <Route path="createblog" element={<CreatePost />} />
              <Route path= ":id" element={<SinglePost />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
