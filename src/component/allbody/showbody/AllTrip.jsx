import { useEffect, useState } from 'react';
import axios from '../../../config/axios';
import CradTip from '../TripCard/CradTip';
import { useContext } from 'react';
import { PostContext } from '../../../contexts/postContext';

function AllTrip({ filter }) {
  const { posts } = useContext(PostContext);

  return (
    <div className=' container mt-2'>
      <h2>All Trip Blogs</h2>
      <div className='row'>
        <>
          {filter.map((el) => (
            <CradTip
              keyblogPic={el.blogPic}
              keyTitle={el.title}
              keyBudget={el.budGet}
              keyProvince={el.proVince}
              keyCountry={el.country}
              keyId={el.id}
            />
          ))}
        </>
      </div>
    </div>
  );
}

export default AllTrip;
