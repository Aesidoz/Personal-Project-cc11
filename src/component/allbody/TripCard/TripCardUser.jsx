import axios from '../../../config/axios';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { PostContext } from '../../../contexts/postContext';

function TripCardUser({
  keyblogPic,
  keyTitle,
  keyBudget,
  keyProvince,
  keyCountry,
  keyId,
}) {
  const { fetchPosts } = useContext(PostContext);
  const deletePost = async (e, id) => {
    try {
      e.preventDefault();
      const delResult = await axios.delete(`/posts/${id}`);
      await fetchPosts();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='d-flex justify-content-center'>
      <div className='cardBox shadow-lg  my-3 col-4 '>
        <div className='setImg '>
          {/* <Link to={`/content/${keyId}`}> */}
          <img src={keyblogPic} className='card-img-top  ' alt='cardPic ' />
          {/* </Link> */}
        </div>
        <div className='innerBox'>
          <h5 className='card-title'>{keyTitle}</h5>

          <p className='fs-6  text-end px-2 '>{keyCountry}</p>
          <p className='fs-6  text-end px-2 '>{keyProvince}</p>

          <p className='fs-6  text-end px-2 d-flex justify-content-between'>
            <i
              className='fa-solid fa-trash-can '
              type='button'
              onClick={(e) => {
                deletePost(e, keyId);
              }}
            />
            <Link to={`/edit/${keyId}`}>
              <i className='fa-solid fa-pen-to-square ' type='button' />
            </Link>
            Budget: {`${keyBudget}`} Bath
          </p>
        </div>
      </div>
    </div>
  );
}

export default TripCardUser;
