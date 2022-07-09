import { Link } from 'react-router-dom';

function CradTip({
  keyblogPic,
  keyTitle,
  keyBudget,
  keyProvince,
  keyCountry,
  keyId,
}) {
  return (
    <Link to={`/content/${keyId}`} className='col-sm-4 justify-content-center '>
      <div className='setImg '>
        <img src={keyblogPic} className='card-img-top  ' alt='cardPic ' />
      </div>
      <div className='innerBox'>
        <h5 className='card-title'>{keyTitle}</h5>

        <p className='fs-6  text-end px-2 '>{keyCountry}</p>
        <p className='fs-6  text-end px-2 '>{keyProvince}</p>

        <p className='fs-6  text-end px-2 '>Budget: {`${keyBudget}`} Bath</p>
      </div>
    </Link>
  );
}

export default CradTip;
