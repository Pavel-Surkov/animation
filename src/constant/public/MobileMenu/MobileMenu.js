import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './m-menu.scss';

export const MobileMenu = ({ isSigned, menuOpened }) => {
  return (
    <div className={`m-menu ${menuOpened ? 'm-menu_opened' : null}`}>
      <div className="container">
        <div className="m-menu__wrapper">
          <div className="m-menu__search">
            <input className="input" type="text" placeholder="Search" />
          </div>
          <ul className="m-menu-links">
            <li className="m-menu-links__link">
              <NavLink className="link" to="/#categories">
                Categories
              </NavLink>
            </li>
            <li className="m-menu-links__link">
              <NavLink className="link" to="/#how-it-works">
                How it works
              </NavLink>
            </li>
            <li className="m-menu-links__link">
              <NavLink className="link" to="/#faq">
                FAQ
              </NavLink>
            </li>
          </ul>
          {!isSigned && (
            <div className="m-menu__sign">
              <Link to="/" className="button">
                Sign up
              </Link>
              <Link to="/" className="link link_fade">
                Sign in
              </Link>
            </div>
          )}
          {isSigned && <div className="header__account"></div>}
        </div>
      </div>
    </div>
  );
};
