import React, { useState } from 'react';
import './footer.scss';

import { Link } from 'react-router-dom';
import logo from '../../../assets/svg/logo_rectangle_black.svg';
import { Row, Col, Space } from 'antd';
import SubscribePopup from '../SubscribePopup/SubscribePopup';
import InputElement from '../Input/InputElement';
import top from '../../../assets/svg/back_to_top.svg';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [popupOpened, setPopupOpened] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();

    document.documentElement.classList.add('is-locked');

    setPopupOpened(true);
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-wrapper">
          <div className="container">
            <div className="footer-top">
              <div className="footer-top-arrow">
                <Link to="/#header" className="footer-top-arrow__link">
                  <img src={top} alt="arrow top" />
                </Link>
              </div>
              <div className="footer-logo">
                <Link to="/#header" className="footer-logo__logo">
                  <img height="48" src={logo} alt="" />
                </Link>
                <ul className="footer-socials">
                  <li className="footer-socials__item">
                    <a
                      className="link footer-socials__link"
                      target="_blank"
                      href="https://www.instagram.com/uplio_marketplace/"
                      rel="noreferrer"
                    >
                      Instagram
                    </a>
                  </li>
                  <li className="footer-socials__item">
                    <a
                      className="link footer-socials__link"
                      target="_blank"
                      href="https://twitter.com/Uplio11"
                      rel="noreferrer"
                    >
                      Twitter
                    </a>
                  </li>
                  <li className="footer-socials__item">
                    <a
                      className="link footer-socials__link"
                      target="_blank"
                      href="https://www.facebook.com/Uplio-103062572308513"
                      rel="noreferrer"
                    >
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
              <ul className="footer-socials footer-socials_m">
                <li className="footer-socials__item">
                  <a
                    className="link footer-socials__link"
                    target="_blank"
                    href="https://www.instagram.com/uplio_marketplace/"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li className="footer-socials__item">
                  <a
                    className="link footer-socials__link"
                    target="_blank"
                    href="https://twitter.com/Uplio11"
                    rel="noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li className="footer-socials__item">
                  <a
                    className="link footer-socials__link"
                    target="_blank"
                    href="https://www.facebook.com/Uplio-103062572308513"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
              <div className="footer-categories">
                <p className="footer-categories__title">Categories</p>
                <ul className="footer-categories__list">
                  <li className="footer-categories__item">
                    <Link
                      to="/products/Fashion"
                      className="title_item-s footer-categories__link"
                    >
                      [FASHION]
                    </Link>
                  </li>
                  <li className="footer-categories__item">
                    <Link
                      to="/products/Jewelry"
                      className="title_item-s footer-categories__link"
                    >
                      [JEWELRY]
                    </Link>
                  </li>
                  <li className="footer-categories__item">
                    <Link
                      to="/products/Cosmetics"
                      className="title_item-s footer-categories__link"
                    >
                      [COSMETICS]
                    </Link>
                  </li>
                </ul>
              </div>
              <ul className="footer-navigation">
                <li className="footer-navigation__item">
                  <Link to="/about" className="link footer-navigation__link">
                    About us
                  </Link>
                </li>
                <li className="footer-navigation__item">
                  <Link
                    to="/#how-it-works"
                    className="link footer-navigation__link"
                  >
                    How it works
                  </Link>
                </li>
                <li className="footer-navigation__item">
                  <Link to="/faq" className="link footer-navigation__link">
                    FAQ
                  </Link>
                </li>
                <li className="footer-navigation__item">
                  <Link to="" className="link footer-navigation__link">
                    Categories
                  </Link>
                </li>
              </ul>
              <div className="footer-contact">
                <p className="footer-contact__title">Contact:</p>
                <div className="footer-contact__contact">
                  <a href="mailto:hello@uplio.com">hello@uplio.com</a>
                </div>
                <div className="footer-contact__contact">
                  <a href="tel:+17146046709">+1 714 604 6709</a>
                </div>
              </div>
              <div className="footer-subscribtion">
                <p className="footer-subscribtion__title">
                  SUBSCRIBE TO OUR NEWSLETTER:
                </p>
                <form className="footer-subscribtion__form">
                  <div className="footer-subscribtion__input-wrapper">
                    <InputElement
                      className="footer-subscribtion__input"
                      type="email"
                      width="100%"
                      placeholder="Email"
                      required="true"
                      value={email}
                      onChange={setEmail}
                    />
                  </div>
                  <div className="footer-subscribtion__submit-wrapper">
                    <button
                      type="submit"
                      className="button footer-subscribtion__submit"
                      onClick={(e) => handleSubscribe(e)}
                    >
                      Subscribe
                      <svg
                        width="56"
                        height="16"
                        viewBox="0 0 56 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M55.7071 8.70711C56.0976 8.31658 56.0976 7.68342 55.7071 7.29289L49.3431 0.928932C48.9526 0.538408 48.3195 0.538408 47.9289 0.928932C47.5384 1.31946 47.5384 1.95262 47.9289 2.34315L53.5858 8L47.9289 13.6569C47.5384 14.0474 47.5384 14.6805 47.9289 15.0711C48.3195 15.4616 48.9526 15.4616 49.3431 15.0711L55.7071 8.70711ZM0 9H55V7H0V9Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-bottom__rights">
                <p>@2022 Uplio, Inc. All rights reserved</p>
              </div>
              <div className="footer-bottom__terms">
                <p>TERMS & CONDITIONS</p>
              </div>
              <div className="footer-bottom__policy">
                <p>PRIVACY POLICY</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className={`blocker ${popupOpened ? 'blocker_opened' : null}`}></div>
      <SubscribePopup isOpened={popupOpened} setOpened={setPopupOpened} />
    </>
  );
};
export default Footer;
