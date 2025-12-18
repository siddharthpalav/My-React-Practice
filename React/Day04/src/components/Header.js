function Header() {
  return (
    <div className='heading'>
      <img
        className='images'
        src='https://www.freepnglogos.com/uploads/logo-myntra-png/myntra-logo-m-png-3.png'
        height='80px'
        width='80px'
      />
      <div className='option'>
        <button className='but'>Men</button>
        <button className='but'>Women</button>
        <button className='but'>Kids</button>
        <button className='but'>Home and Living</button>
        <button className='but'>Studio</button>
      </div>
      <input
        className='searchbar'
        placeholder='Search for products brands and more'
      ></input>
      <div className='profile'>
        <button className='pro'>Profiles</button>
        <button className='pro'>Wishlist</button>
        <button className='pro'>Bag</button>
      </div>
    </div>
  );
}

export default Header;
