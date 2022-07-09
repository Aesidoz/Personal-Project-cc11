import { useContext } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import Pic1 from '../../assets/profileImg/Img01.jpg';
import { AuthContext } from '../../contexts/authcontext';
import { PostContext } from '../../contexts/postContext';

function ProfilePageById() {
  const { posts } = useContext(PostContext);
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const userPosts = posts.filter((el) => el.User.id == id);

  const UserInfo = userPosts[0].User;
  console.log(UserInfo);

//   toUppercase = (str) => {



  return (
    <div className='container-fluid   py-5 '>
      <div className=' brown d-flex justify-content-center'>
        <h1 className='' style={{ fontSize: '80px' }}>
          {UserInfo.userName} Profile
        </h1>
      </div>

      <div className='w-100 d-flex gap-3 my-3'>
        <div className='leftBoxPro'>
          <div>
            <Link to={`/profile/${UserInfo.id}/info`}>
              <div className='brown btn btn-outline-success w-100 d-flex justify-content-center pt-3'>
                <i className='fa-solid fa-circle-user px-2 fa-2x ' />
                <h2>USER INFORMATION</h2>
              </div>
            </Link>
            <Link to={`/profile/${UserInfo.id}/blogs`}>
              <div className=' brown btn btn-outline-success w-100 d-flex justify-content-center pt-3'>
                <i className='fa-solid fa-notes-medical px-2 fa-2x' />
                <h2>{UserInfo.userName} BLOG</h2>
              </div>
            </Link>
          </div>
          <div className=' profilePic  setImgProfile mt-5 '>
            <img className='  rounded-circle' src={UserInfo.blogPic} />
            <h1 className=' brown d-flex justify-content-center py-3'>
              {UserInfo.firstName} {UserInfo.lastName}
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

export default ProfilePageById;
