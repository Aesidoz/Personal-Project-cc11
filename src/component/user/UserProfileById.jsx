import axios from 'axios';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/authcontext';
import { PostContext } from '../../contexts/postContext';
import CradTip from '../allbody/TripCard/CradTip';
import TripCardUser from '../allbody/TripCard/TripCardUser';

function UserProfileById() {
  const { posts } = useContext(PostContext);
  const { user } = useContext(AuthContext);
  const userId = useParams();
  const userPosts = posts.filter((el) => el.User.id == userId.id);

  //   console.log(userPosts);
  //   console.log(posts);

  console.log(userId);
  // console.log(userPosts);

  return (
    <div className='  grid grid-cols-4  justify-content-between m-0 px-5 gap-5  '>
      {userPosts.map((el) => (
        <TripCardUser
          keyblogPic={el.blogPic}
          keyTitle={el.title}
          keyBudget={el.budGet}
          keyProvince={el.proVince}
          keyCountry={el.country}
          keyId={el.id}
        />
      ))}
    </div>
  );
}

export default UserProfileById;
