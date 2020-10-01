import React from 'react';
import {MENU} from '../App';
import {NavLink} from 'react-router-dom';
import './Header.css';

const Header = () =>{
  return(
    <header className="header">
      <nav className="main-menu">
        <ul className="main-menu__list">
          {MENU.map((menuItem, index) => (
            <li className="main-menu__item" key={index}>
              <NavLink to={menuItem.path}
                className="main-menu__link">
                  {menuItem.title}
              </NavLink> 
            </li>
            ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;