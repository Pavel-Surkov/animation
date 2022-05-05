import React, { useLayoutEffect, useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink, useHistory } from 'react-router-dom';
import axios from 'axios';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import './header.scss';
import classes from './Navigation.module.scss';
import ButtonElement from '../Button/ButtonElement';
import logo from '../../../assets/svg/logo_rectangle_black.svg';
import Search from '../Search/Search';
import bell from '../../../assets/svg/clarity_notification-line.svg';
import {
  RotateRightOutlined,
  UserOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import {
  Row,
  Col,
  Space,
  Button,
  Menu,
  Dropdown,
  Avatar,
  Divider,
  Drawer,
} from 'antd';
import { connect } from 'react-redux';
import {
  userLoggedOut,
  userDataStatus,
  userLoggedIn,
} from '../../../redux/actions/user.action';

const Navigation = () => {
  const [isSigned, setIsSigned] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="container">
          <div className="header-content">
            <div className="header-content__logo">
              <Link to="/">
                <img height="48" src={logo} alt="" />
              </Link>
            </div>
            <div className="header-content__search">
              <input className="input" type="text" placeholder="Search" />
            </div>
            <ul className="header-links">
              <li className="header-links__link">
                <NavLink className="link" to="/#categories">
                  Categories
                </NavLink>
              </li>
              <li className="header-links__link">
                <NavLink className="link" to="/#how-it-works">
                  How it works
                </NavLink>
              </li>
              <li className="header-links__link">
                <NavLink className="link" to="/#faq">
                  FAQ
                </NavLink>
              </li>
            </ul>
            {!isSigned && (
              <div className="header__sign">
                <Link to="/" className="button">
                  Sign up
                </Link>
                <Link to="/" className="link">
                  Sign in
                </Link>
              </div>
            )}
            {isSigned && <div className="header__account"></div>}
            <div className="header-burger">
              <button
                type="button"
                className={`burger header-burger ${
                  menuOpened ? 'burger_close' : null
                }`}
                onClick={() => setMenuOpened((prev) => !prev)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
            <MobileMenu isSigned={isSigned} menuOpened={menuOpened} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
