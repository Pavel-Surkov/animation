import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './m-menu.scss'

export const MobileMenu = ({ isSigned, menuOpened, setMenuOpened }) => {
  const user = useSelector((state) => state.user.user)

  return (
    <div className={`m-menu ${menuOpened ? 'm-menu_opened' : null}`}>
      <div className="container">
        <div className="m-menu__wrapper">
          <div className="m-menu__search">
            <input className="input" type="text" placeholder="Search" />
          </div>
          <ul
            className={`m-menu-links ${
              isSigned ? 'm-menu-links_signed' : null
            }`}
          >
            <li className="m-menu-links__link">
              <a
                className="link"
                href="/#categories"
                onClick={() => setMenuOpened(false)}
              >
                Categories
              </a>
            </li>
            <li className="m-menu-links__link">
              <a
                className="link"
                href="/#how-it-works"
                onClick={() => setMenuOpened(false)}
              >
                How it works
              </a>
            </li>
            <li className="m-menu-links__link">
              <a
                className="link"
                href="/#faq"
                onClick={() => setMenuOpened(false)}
              >
                FAQ
              </a>
            </li>
          </ul>
          {!isSigned && (
            <div className="m-menu__sign">
              <Link to="/signup" className="button">
                Sign up
              </Link>
              <Link to="/login" className="link link_fade">
                Sign in
              </Link>
            </div>
          )}
          {isSigned && (
            <div className="m-menu-signed">
              <h4 className="title title_item-s m-menu-signed__title">
                {user ? `Hi ${user.name}!` : `Hi John!`}
              </h4>
              <ul className="m-menu-signed__list">
                <li className="m-menu-signed__item">
                  <Link
                    className="title title_item-s m-menu-signed__link"
                    to="/coming-soon"
                  >
                    Orders
                  </Link>
                </li>
                <li className="m-menu-signed__item m-menu-signed__item_messages">
                  <Link
                    className="title title_item-s m-menu-signed__link"
                    to="/coming-soon"
                  >
                    Message Center
                  </Link>
                  <div className="m-menu__messages">
                    {user ? user.messages : '2'}
                  </div>
                </li>
                <li className="m-menu-signed__item">
                  <Link
                    className="title title_item-s m-menu-signed__link"
                    to="/dashboard/buyer/inquiries"
                  >
                    Quotes
                  </Link>
                </li>
                <li className="m-menu-signed__item">
                  <Link
                    className="title title_item-s m-menu-signed__link"
                    to="/coming-soon"
                  >
                    Bookmarks
                  </Link>
                </li>
                <li className="m-menu-signed__item">
                  <Link
                    className="title title_item-s m-menu-signed__link"
                    to="/dashboard/buyer/profile"
                  >
                    Account Settings
                  </Link>
                </li>
                <li className="m-menu-signed__item">
                  <Link
                    className="title title_item-s m-menu-signed__link"
                    to=""
                  >
                    Log Out
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
