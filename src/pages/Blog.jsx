import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { contextValue, apiContext } from "./context/apiContext.js"

const Blog = () => {

const {blogList, setBlog} = useContext(apiContext)

return (
    <>
      <main>
        <div className="row">
          {blogList.map((curBlog) => 
          <div className="card">
            <h3>Titolo: {curBlog.title}</h3>
            <h4>Autore: {curBlog.author}</h4>
            <p>Evito di fare il map perchè la pagina diventerebbe veramente enorme</p>
            <Link to = {`${curBlog.id}`}>Vedi dettagli</Link>
          </div>
          
          )}
        </div>
      </main>
    </>
  );
}

export default Blog