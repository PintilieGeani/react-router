import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const CreatePost = () => {
 const apiUrl = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts"
 const navigate = useNavigate()

  const initialForm = {
    author: "",
    title: "",
    body: "",
    public: false
  };
  const [formData, setFormData] = useState(initialForm)
  const [showAlert, setShowAlert] = useState(false)

  const handleChange = (e) => {
    const { name, value, checked, type } = event.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  }

  const sendData = (event) => {
    event.preventDefault();
    console.log("invio i dati al server", formData)
    axios.post(apiUrl , formData).then ((resp) => {
    if(resp.data.id) {
      navigate(`/blog/${resp.data.id}`)
    }
    })
  }





  return (
    <>
    <div className='container'>
      <h1 className='mb-3'>Manda il tuo post</h1>
      <form onSubmit={sendData}>
        <div className="form-group">
          <label >Author</label>
          <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Author" onChange={(e) => handleChange(e)} value={formData.author} name='author'></input>
        </div>
        <div className="form-group">
          <label >Title</label>
          <input type="text" className="form-control" placeholder="Title" onChange={(e) => handleChange(e)} value={formData.title} name='title' ></input>
        </div>
        <div className="form-group">
          <label >Body</label>
          <textarea type="text" className="form-control" placeholder="Body" onChange={(e) => handleChange(e)} value={formData.body} name='body' />
        </div>
        <div className="form-check mt-3">
          <input className="form-check-input" type="checkbox"  id="public" name='public' checked = {formData.public} onChange={handleChange}/>
            <label className="form-check-label" htmlFor="public">
              Public
            </label>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </form>
      </div>
      {showAlert && <div className='alert alert-success'>I dati sono stati inviati</div>}

    </>
  )
}

export default CreatePost