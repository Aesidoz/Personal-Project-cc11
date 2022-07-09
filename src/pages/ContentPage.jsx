import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import BodyContentBox from '../component/contentboxs/BodyContentBox';

import HeadContentBox from '../component/contentboxs/HeadContentBox';
import { PostContext } from '../contexts/postContext';

function ContentPage() {
  const { posts } = useContext(PostContext);
  const { id } = useParams();
  const post = posts.filter((el) => el.id == id)[0];

  console.log(post);
  return (
    <div className='row container-fluid  py-5'>
      <HeadContentBox
        title={post.title}
        country={post.country}
        province={post.proVince}
        UserName={post.User.userName}
        UserId={post.User.id}
        picBlog={post.blogPic}
        discription={post.discription}
        Like={post.like}
        budget={post.budGet}
      />
      <BodyContentBox content={post.mainContent} />
    </div>
  );
}

export default ContentPage;
