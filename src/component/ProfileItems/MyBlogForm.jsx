import axios from 'axios';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/authcontext';
import { PostContext } from '../../contexts/postContext';
import CradTip from '../allbody/TripCard/CradTip';
import TripCardUser from '../allbody/TripCard/TripCardUser';

function MyBlogForm() {
  const { posts } = useContext(PostContext);
  const { user } = useContext(AuthContext);
  const userPosts = posts.filter((el) => el.User.id == user.id);
  const userId = useParams();

  console.log(userId);
  // console.log(userPosts);

  return (
    <div className='  d-flex flex-wrap  justify-content-between m-0 px-5 gap-5  '>
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

export default MyBlogForm;
