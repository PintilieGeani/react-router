import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {

  const apiUrl = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts"
  const [blogList, setBlog] = useState([])

  useEffect(() => {
    axios.get(apiUrl).then ((resp) => {
      const BlogListApi = resp.data
      setBlog(BlogListApi)
    })
  },[])

  console.log(blogList)

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