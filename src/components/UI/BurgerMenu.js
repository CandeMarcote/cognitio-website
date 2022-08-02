import React, { useState } from 'react';
import './BurgerMenu.css';

const BurgerMenu = () => {
    const [showMenu, setShowMenu] = useState(false);

    function showMenuHandler() {
        setShowMenu(!showMenu);

    }

  return (
    <div className={showMenu ? "burger_menu_container blue_bg" : "burger_menu_container"}>
        <div className='burger_menu' onClick={showMenuHandler}>
            <div className='central_line'></div>
        </div>

        {showMenu && <nav className='burger_menu_nav'>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Nosotros</a></li>
                <li><a href='#'>Fueros</a></li>
                <li><a href='#'>Contacto</a></li>
            </ul>
        </nav>}
    </div>
  )
}

export default BurgerMenu