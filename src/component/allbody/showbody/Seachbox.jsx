function SeachBox({ setInput }) {
  return (
    <div className=' Sbox   '>
      <div className=' d-flex'>
        <input onChange={(e) => setInput(e.target.value)}></input>
        <button className='buttonX brown '>GO!</button>
      </div>
    </div>
  );
}

export default SeachBox;
