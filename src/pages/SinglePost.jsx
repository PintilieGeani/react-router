import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const SinglePost = () => {

    const {id} = useParams()
    const [post, setPost] = useState({title: '', author: '', body: ''})

    useEffect(() => {
        axios.get(`https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts/${ id }`).then((resp) => {
            setPost(resp.data)
            console.log(resp.data)
        });
    }, [id])

    return(
        <>
        <div className="container">
            <h1>{`Questo è il post con id : ${ id }`}</h1>
            {/* { post === null ? 'nessun post' : (
            <div className="card">
                <h2>{post.title}</h2>
                <h3>{post.author}</h3>
                <p>{post.body}</p>
            </div>
            )} */}


             <div className="card">
                <h2>{post.title}</h2>
                <h3>{post.author}</h3>
                <p>{post.body}</p>
            </div>
        </div>
        </>
    )
}

export default SinglePost