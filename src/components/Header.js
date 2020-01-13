import React from 'react';
import RickMorty from '../images/Rick_and_Morty.png';

const Header = () => {
  return <div className="header">
    <img src={RickMorty} alt="Rick and Morty logo"/>
  </div>
}

export default Header;