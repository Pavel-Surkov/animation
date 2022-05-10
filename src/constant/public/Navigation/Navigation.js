import React, { useLayoutEffect, useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, NavLink, useHistory } from 'react-router-dom'
import axios from 'axios'
import { MobileMenu } from '../MobileMenu/MobileMenu'
import './header.scss'
import classes from './Navigation.module.scss'
import ButtonElement from '../Button/ButtonElement'
import logo from '../../../assets/svg/logo_rectangle_black.svg'
import Search from '../Search/Search'
import userIcon from '../../../assets/images/user_sample_icon_1.png'
import bell from '../../../assets/svg/clarity_notification-line.svg'
import {
  RotateRightOutlined,
  UserOutlined,
  MenuOutlined,
} from '@ant-design/icons'
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
} from 'antd'
import { connect } from 'react-redux'
import {
  userLoggedOut,
  userDataStatus,
  userLoggedIn,
} from '../../../redux/actions/user.action'

const Navigation = () => {
  const [menuOpened, setMenuOpened] = useState(false)
  const [search, setSearch] = useState('')

  const history = useHistory()

  const dispatch = useDispatch()

  // const userLoggedInState = true;

  const userLoggedInState = useSelector((state) => state.user.userLoggedIn)
  const user = useSelector((state) => state.user.user)

  // const handleSignOut = () => {
  //   axios
  //     .post(`${process.env.REACT_APP_API_URL}/auth/logout`, {
  //       refreshToken: refreshToken,
  //     })
  //     .then((res) => {
  //       dispatch(userLoggedOut());
  //       dispatch(userDataStatus(''));
  //       sessionStorage.clear();
  //       history.push('/');
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <header id={'header'} className="header">
      <div className="header-wrapper">
        <div className="container">
          <div className="header-content">
            <div className="header-content__logo">
              <Link
                className="link"
                to="/"
                onClick={() => setMenuOpened(false)}
              >
                <img height="48" src={logo} alt="" />
              </Link>
            </div>
            <Search
              containerClass="header-content__search"
              placeholder="Search"
            />
            <ul className="header-links">
              <li className="header-links__link">
                <a className="link" href="/#categories">
                  Categories
                </a>
              </li>
              <li className="header-links__link">
                <a className="link" href="/#how-it-works">
                  How it works
                </a>
              </li>
              <li className="header-links__link">
                <a className="link" href="/#faq">
                  FAQ
                </a>
              </li>
            </ul>
            {!userLoggedInState && (
              <div className="header__sign">
                <Link to="/signup" className="button">
                  Sign up
                </Link>
                <Link to="/login" className="link">
                  Sign in
                </Link>
              </div>
            )}
            {userLoggedInState && (
              <div className="header-account">
                <button className="header-account__notifications">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.6734 18.5536C21.0306 17.9805 20.4677 17.3235 20.0001 16.6003C19.4896 15.602 19.1836 14.5117 19.1001 13.3936V10.1003C19.1045 8.344 18.4675 6.64658 17.3086 5.32691C16.1498 4.00724 14.5489 3.15617 12.8068 2.93359V2.07359C12.8068 1.83755 12.713 1.61118 12.5461 1.44427C12.3792 1.27736 12.1528 1.18359 11.9168 1.18359C11.6807 1.18359 11.4544 1.27736 11.2875 1.44427C11.1205 1.61118 11.0268 1.83755 11.0268 2.07359V2.94693C9.30029 3.18555 7.71876 4.04176 6.57513 5.357C5.4315 6.67223 4.80327 8.35736 4.80678 10.1003V13.3936C4.72328 14.5117 4.4173 15.602 3.90678 16.6003C3.44737 17.3218 2.89358 17.9788 2.26011 18.5536C2.189 18.6161 2.13201 18.693 2.09293 18.7792C2.05384 18.8654 2.03357 18.9589 2.03345 19.0536V19.9603C2.03345 20.1371 2.10369 20.3066 2.22871 20.4317C2.35373 20.5567 2.5233 20.6269 2.70011 20.6269H21.2334C21.4103 20.6269 21.5798 20.5567 21.7049 20.4317C21.8299 20.3066 21.9001 20.1371 21.9001 19.9603V19.0536C21.9 18.9589 21.8797 18.8654 21.8406 18.7792C21.8016 18.693 21.7446 18.6161 21.6734 18.5536ZM3.42011 19.2936C4.04039 18.6944 4.58651 18.0229 5.04678 17.2936C5.68986 16.0879 6.06507 14.7576 6.14678 13.3936V10.1003C6.12034 9.31895 6.2514 8.54031 6.53214 7.8107C6.81289 7.0811 7.23759 6.41545 7.78095 5.85339C8.3243 5.29134 8.97521 4.84437 9.6949 4.53911C10.4146 4.23385 11.1884 4.07653 11.9701 4.07653C12.7519 4.07653 13.5256 4.23385 14.2453 4.53911C14.965 4.84437 15.6159 5.29134 16.1593 5.85339C16.7026 6.41545 17.1273 7.0811 17.4081 7.8107C17.6888 8.54031 17.8199 9.31895 17.7934 10.1003V13.3936C17.8752 14.7576 18.2504 16.0879 18.8934 17.2936C19.3537 18.0229 19.8998 18.6944 20.5201 19.2936H3.42011Z"
                      fill="#303030"
                    />
                    <path
                      d="M12 22.853C12.42 22.8433 12.823 22.6855 13.1378 22.4073C13.4525 22.1291 13.6588 21.7486 13.72 21.333H10.2134C10.2764 21.7599 10.4923 22.1493 10.8209 22.4289C11.1496 22.7085 11.5686 22.8592 12 22.853Z"
                      fill="#303030"
                    />
                  </svg>
                </button>
                <Link
                  className="header-account__profile"
                  to="/dashboard/buyer/profile"
                >
                  <img width="32" height="32" src={user.profileImage} alt="" />
                </Link>
              </div>
            )}
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
            <MobileMenu
              isSigned={userLoggedInState}
              menuOpened={menuOpened}
              setMenuOpened={setMenuOpened}
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navigation
