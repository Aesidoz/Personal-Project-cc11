import { Link } from 'react-router-dom';
import Pictest from '../../assets/card_img/testcard.jpg';

function HeadContentBox({
  title,
  country,
  province,
  UserName,
  picBlog,
  discription,
  Like,
  budget,
  UserId,
}) {
  return (
    <div className='HeadBigCon bg-success '>
      <div className='imgHeadBox py-4 px-3 d-flex '>
        <img src={picBlog} className='mx-5' width='250' height='250' />
        <div className='w-100'>
          <h2 className='title'>{title}</h2>
          <h5 className='country'>{country}</h5>
          <h5 className='province'>{province}</h5>
          <h5 className='province'>
            By: <Link to={`/profile/${UserId}/info`}> {UserName}</Link>
          </h5>

          <div className='discription'>
            <h5>Discription: </h5> {`${discription}`}
          </div>
          <div>
            <h3 className='d-flex justify-content-end px-5 fs-1'>
              budget: {`${budget}`} Bath
            </h3>
          </div>

          <div className='HeadIcon d-flex justify-content-end px-5'>
            <div className='d-flex gap-2'>
              <i class='fa-solid fa-heart pt-2 fs-3' />
              <p className='fs-2'>{Like}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeadContentBox;
