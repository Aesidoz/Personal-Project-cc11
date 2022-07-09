// import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from '../../config/axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MainAdd() {
  const [title, setTitle] = useState('');
  const [discription, setDiscription] = useState('');
  const [country, setCountry] = useState('');
  const [proVince, setProVince] = useState('');
  const [budGet, setBudGet] = useState('');
  const [blogPic, setBlogPic] = useState('');
  const [content, setContent] = useState('');

  const navigate = useNavigate();
  const postReview = async (e) => {
    e.preventDefault();
    try {
      const reviewData = new FormData();
      reviewData.append('title', title);
      reviewData.append('discription', discription);
      reviewData.append('country', country);
      reviewData.append('proVince', proVince);
      reviewData.append('budGet', budGet);
      reviewData.append('blogPic', blogPic);
      reviewData.append('mainContent', content);
      const result = await axios.post('/posts', reviewData);
    } catch (err) {
      console.log(err);
    } finally {
      navigate('/');
    }
  };
  console.log(blogPic);
  return (
    <div className='fs-1 bg-secondary'>
      <div className='text-center brown '>CREATE CONTENT</div>
      <div className='container bg-success'>
        <div className='container py-5 px-5'>
          <form className='d-flex row'>
            <label for='blogPic'>
              <input
                type='file'
                className='form-control'
                onChange={(e) => setBlogPic(e.target.files[0])}
              ></input>
            </label>
            <label for='Title'>
              <input
                type='text'
                placeholder='Enter Title'
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label for='discription '>
              <input
                type='text'
                placeholder='Enter Discription'
                onChange={(e) => setDiscription(e.target.value)}
              />
            </label>
            <label for='country'>
              <input
                type='text'
                placeholder='Enter Country'
                onChange={(e) => setCountry(e.target.value)}
              />
            </label>
            <label for='proVince'>
              <input
                type='text'
                placeholder='Enter Province'
                onChange={(e) => setProVince(e.target.value)}
              />
            </label>
            <label for='budGet'>
              <input
                type='number'
                placeholder='Enter Budget'
                onChange={(e) => setBudGet(e.target.value)}
              />
            </label>

            <div className='fs-2'>Content</div>
            <label for='content'>
              <div className='form-group ' style={{ width: '100%' }}>
                <textarea
                  className='form-control'
                  id='exampleFormControlTextarea1'
                  rows='10'
                  type='text'
                  style={{ width: '100%' }}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
            </label>
          </form>
          <button
            type='submit'
            className='btn btn-secondary m-1 col-3'
            onClick={postReview}
          >
            Create New Blog
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainAdd;
