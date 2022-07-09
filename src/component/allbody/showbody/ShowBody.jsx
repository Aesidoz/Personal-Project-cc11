import { useContext, useState } from 'react';
import { PostContext } from '../../../contexts/postContext';
import AllTrip from './AllTrip';
import LocatePage from './LocatePage';
import SeachBox from './Seachbox';

function ShowBody() {
  const { posts } = useContext(PostContext);
  const [input, setInput] = useState('');
  console.log(input);

  console.log(posts);

  const filterSearch = posts.filter((el) =>
    !input ? true : el.title.toUpperCase().includes(input.toUpperCase())
  );

  // const filterSearch = posts.filter((el) =>
  //   !input ? true : el.title.toLowerCase() === input.toLowerCase()
  // );

  return (
    <div className='px-5 pb-5'>
      <SeachBox setInput={setInput} />
      <AllTrip filter={filterSearch} />
    </div>
  );
}

export default ShowBody;
