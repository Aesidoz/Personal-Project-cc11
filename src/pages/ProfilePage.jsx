import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Pic1 from '../../src/assets/profileImg/Img01.jpg';
import MyBlogForm from '../component/ProfileItems/MyBlogForm';
import CradTip from '../component/allbody/TripCard/CradTip';
import { AuthContext } from '../contexts/authcontext';
import { PostContext } from '../contexts/postContext';

function ProfilePage() {
  const { posts } = useContext(PostContext);
  const { user } = useContext(AuthContext);
  const userPosts = posts.filter((el) => el.User.id == user.id);

  return (
    <div className='container-fluid   py-5 '>
      <div className=' brown d-flex justify-content-center'>
        <h1 className='' style={{ fontSize: '80px' }}>
          My Profile
        </h1>
      </div>

      <div className='w-100 d-flex gap-3 my-3'>
        <div className='leftBoxPro'>
          <div>
            <Link to='/profile/info'>
              <div className='brown btn btn-outline-success w-100 d-flex justify-content-center pt-3'>
                <i className='fa-solid fa-circle-user px-2 fa-2x ' />
                <h2>USER INFORMATION</h2>
              </div>
            </Link>
            <Link to='/profile/myblog/'>
              <div className=' brown btn btn-outline-success w-100 d-flex justify-content-center pt-3'>
                <i className='fa-solid fa-notes-medical px-2 fa-2x' />
                <h2>MY BLOG</h2>
              </div>
            </Link>
          </div>
          <div className=' profilePic  setImgProfile mt-5 '>
            <img className='  rounded-circle' src={Pic1} />
            <h1 className=' brown d-flex justify-content-center py-3'>
              Test Master
            </h1>
          </div>
        </div>
        <div className=' RightBoxPro border border bg-success'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
