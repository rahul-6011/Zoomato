import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='max-width header'>
      <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'
      alt="Zomato-logo"
      className='header-logo'
      />
      <div className="header-right">
        <div className='header-search'>
          <div className='location'>
            <div className='location-icon-name'>
            <i className="fi fi-rr-marker absolute-center location-icon"></i>
            <div>Bangalore</div>
            </div>
            <i className='fi fi-rr-caret-down absolute-center'></i>
          </div>
          <div className='location-seperator'></div>
          <div className='header-search-bar'></div>
          <i className='fi fi-rr-search absolute-center search-icon'></i>
          <input placeholder='Search for restaurant, cuisine or a dish' className='search-input'></input>
        <div className='profile-wrapper'>
          <img src='https://b.zmtcdn.com/images/user_avatars/wine_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A'
          alt="profile"
          className='header-profile-image'
        />
        <span className='header-username'>Rahul</span>
        <i className='fi fi-rr-angle-small-down absolute-center profile-icon'/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Header