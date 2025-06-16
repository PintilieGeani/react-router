import { createContext } from "react"
import { useState } from "react"
import axios from "axios"

const apiContext = createContext()

const contextValue = () => {

    const apiUrl = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts"
  const [blogList, setBlog] = useState([])

    useEffect(() => {
    axios
      .get(apiUrl)
      .then((resp) => {
        const postData = resp.data;
        setBlog(postData);
      });
  }, []);
 
  return (
    {   blogList,
    }
  )

} 

export {apiContext, contextValue}



