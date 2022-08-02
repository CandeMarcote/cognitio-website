import React from 'react';
import BurgerMenu from '../UI/BurgerMenu';
import '../../style/Header.css';
import cognitio from '../../assets/cognitio.png';

const Header = () => {

  return (
    <header>
        <img className="logo" src={cognitio} alt="logo de Cognitio" />
        <BurgerMenu />
    </header>
  )
}

export default Header