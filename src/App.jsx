//Imports
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Guestlayout from "./layouts/GuestLayout.jsx"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Blog from "./pages/Blog.jsx"
import CreatePost from "./pages/AppCreatePost.jsx"
import SinglePost from "./pages/SinglePost.jsx"
import { contextValue, apiContext } from "./context/apiContext.js"



function App() {

    const {apiContext} = contextValue()

  return (
    <>
      <apiContext.Provider value = {apiContext}>
        <BrowserRouter>
          <Routes>
            <Route element={<Guestlayout />} >
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />

              <Route path="/blog">
                <Route path="" element={<Blog />} />
                <Route path=":id" element={<SinglePost />} />
                <Route path="createblog" element={<CreatePost />} />
              </Route>

            </Route>
          </Routes>
        </BrowserRouter>
      </apiContext.Provider>
    </>
  );
}

export default App
