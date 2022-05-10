import React, { useState, useEffect, useRef } from 'react';
import './how-works.scss';
import './creators.scss';
import './suppliers.scss';
import { useHistory } from 'react-router-dom';
import ButtonWithRightArrow from '../../../../constant/public/ButtonWithRightArrow/ButtonWithRightArrow';
import save50 from '../../../../assets/svg/save50.svg';
import time from '../../../../assets/svg/TIME.svg';

const HowItWorks = () => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth >= 768 ? false : true
  );
  const [activeTab, setActiveTab] = useState('suppliers');

  const history = useHistory();

  // Checking for mobile screen
  useEffect(() => {
    function checkMobile() {
      if (window.innerWidth >= 768) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    }

    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleActiveTabSet = (value) => {
    if (isMobile) {
      setActiveTab(value);
    }
  };

  return (
    <section id="how-it-works" className="section how-works">
      <div className="how-works__wrapper">
        <h2 className="title title_size-m how-works__title">How it works?</h2>
        <div className="how-works__content-wrapper">
          <div className="how-works__bg">
            <div className="how-works__bg-save">
              <img width="554" height="266" src={save50} alt="" />
            </div>
            <div className="how-works__bg-time">
              <img width="601" height="256" src={time} alt="" />
            </div>
          </div>
          <div className="container">
            <div className="how-works-content">
              <div className="how-works__tabs">
                <button
                  className={`title title_item suppliers-tab ${
                    activeTab === 'suppliers' ? 'suppliers-tab_active' : null
                  }`}
                  onClick={() => handleActiveTabSet('suppliers')}
                >
                  [For suppliers]
                </button>
                <button
                  className={`title title_item creators-tab ${
                    activeTab === 'creators' ? 'creators-tab_active' : null
                  }`}
                  onClick={() => handleActiveTabSet('creators')}
                >
                  [For {isMobile ? 'sellers' : 'creators'}]
                </button>
              </div>
              <div
                className="suppliers"
                style={
                  !isMobile
                    ? { display: 'block' }
                    : isMobile && activeTab === 'suppliers'
                    ? { display: 'block' }
                    : { display: 'none' }
                }
              >
                <ol className="suppliers-list">
                  <li className="suppliers-item">
                    <div className="arrow">
                      <svg
                        width="16"
                        height="38"
                        viewBox="0 0 16 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.29289 37.7071C7.68342 38.0976 8.31658 38.0976 8.70711 37.7071L15.0711 31.3431C15.4616 30.9526 15.4616 30.3195 15.0711 29.9289C14.6805 29.5384 14.0474 29.5384 13.6569 29.9289L8 35.5858L2.34315 29.9289C1.95262 29.5384 1.31946 29.5384 0.928933 29.9289C0.538409 30.3195 0.538409 30.9526 0.928934 31.3431L7.29289 37.7071ZM7 4.37114e-08L7 37L9 37L9 -4.37114e-08L7 4.37114e-08Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div data-number="1." className="suppliers-item__num"></div>
                    <h3 className="title title_item suppliers-item__title">
                      Access Qualified Leads
                    </h3>
                    <p className="suppliers-item__text">
                      Join us to access a network of qualified leads that fit
                      your capabilities
                    </p>
                  </li>
                  <li className="suppliers-item">
                    <div className="arrow">
                      <svg
                        width="16"
                        height="38"
                        viewBox="0 0 16 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.29289 37.7071C7.68342 38.0976 8.31658 38.0976 8.70711 37.7071L15.0711 31.3431C15.4616 30.9526 15.4616 30.3195 15.0711 29.9289C14.6805 29.5384 14.0474 29.5384 13.6569 29.9289L8 35.5858L2.34315 29.9289C1.95262 29.5384 1.31946 29.5384 0.928933 29.9289C0.538409 30.3195 0.538409 30.9526 0.928934 31.3431L7.29289 37.7071ZM7 4.37114e-08L7 37L9 37L9 -4.37114e-08L7 4.37114e-08Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div data-number="2." className="suppliers-item__num"></div>
                    <h3 className="title title_item suppliers-item__title">
                      Provide Quotes
                    </h3>
                    <p className="suppliers-item__text">
                      Quote to more opportunities faster and message with
                      customers
                    </p>
                  </li>
                  <li className="suppliers-item">
                    <div className="arrow">
                      <svg
                        width="16"
                        height="38"
                        viewBox="0 0 16 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.29289 37.7071C7.68342 38.0976 8.31658 38.0976 8.70711 37.7071L15.0711 31.3431C15.4616 30.9526 15.4616 30.3195 15.0711 29.9289C14.6805 29.5384 14.0474 29.5384 13.6569 29.9289L8 35.5858L2.34315 29.9289C1.95262 29.5384 1.31946 29.5384 0.928933 29.9289C0.538409 30.3195 0.538409 30.9526 0.928934 31.3431L7.29289 37.7071ZM7 4.37114e-08L7 37L9 37L9 -4.37114e-08L7 4.37114e-08Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div data-number="3." className="suppliers-item__num"></div>
                    <h3 className="title title_item suppliers-item__title">
                      Accept Orders
                    </h3>
                    <p className="suppliers-item__text">
                      Receive orders and get paid on time
                    </p>
                  </li>
                </ol>
              </div>
              <div
                className="creators"
                style={
                  !isMobile
                    ? { display: 'block' }
                    : isMobile && activeTab === 'creators'
                    ? { display: 'block' }
                    : { display: 'none' }
                }
              >
                <ol className="creators-list">
                  <li className="creators-item">
                    <div className="arrow">
                      <svg
                        width="16"
                        height="38"
                        viewBox="0 0 16 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.29289 37.7071C7.68342 38.0976 8.31658 38.0976 8.70711 37.7071L15.0711 31.3431C15.4616 30.9526 15.4616 30.3195 15.0711 29.9289C14.6805 29.5384 14.0474 29.5384 13.6569 29.9289L8 35.5858L2.34315 29.9289C1.95262 29.5384 1.31946 29.5384 0.928933 29.9289C0.538409 30.3195 0.538409 30.9526 0.928934 31.3431L7.29289 37.7071ZM7 4.37114e-08L7 37L9 37L9 -4.37114e-08L7 4.37114e-08Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div data-number="1." className="creators-item__num"></div>
                    <h3 className="title title_item creators-item__title">
                      Submit Requirements
                    </h3>
                    <p className="creators-item__text">
                      Send your request to all relevant suppliers in one click
                    </p>
                  </li>
                  <li className="creators-item">
                    <div className="arrow">
                      <svg
                        width="16"
                        height="38"
                        viewBox="0 0 16 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.29289 37.7071C7.68342 38.0976 8.31658 38.0976 8.70711 37.7071L15.0711 31.3431C15.4616 30.9526 15.4616 30.3195 15.0711 29.9289C14.6805 29.5384 14.0474 29.5384 13.6569 29.9289L8 35.5858L2.34315 29.9289C1.95262 29.5384 1.31946 29.5384 0.928933 29.9289C0.538409 30.3195 0.538409 30.9526 0.928934 31.3431L7.29289 37.7071ZM7 4.37114e-08L7 37L9 37L9 -4.37114e-08L7 4.37114e-08Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div data-number="2." className="creators-item__num"></div>
                    <h3 className="title title_item creators-item__title">
                      Get Multiple Quotes
                    </h3>
                    <p className="creators-item__text">
                      Compare quotes and choose the best supplier that fit your
                      requirements
                    </p>
                  </li>
                  <li className="creators-item">
                    <div className="arrow">
                      <svg
                        width="16"
                        height="38"
                        viewBox="0 0 16 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.29289 37.7071C7.68342 38.0976 8.31658 38.0976 8.70711 37.7071L15.0711 31.3431C15.4616 30.9526 15.4616 30.3195 15.0711 29.9289C14.6805 29.5384 14.0474 29.5384 13.6569 29.9289L8 35.5858L2.34315 29.9289C1.95262 29.5384 1.31946 29.5384 0.928933 29.9289C0.538409 30.3195 0.538409 30.9526 0.928934 31.3431L7.29289 37.7071ZM7 4.37114e-08L7 37L9 37L9 -4.37114e-08L7 4.37114e-08Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div data-number="3." className="creators-item__num"></div>
                    <h3 className="title title_item creators-item__title">
                      Order Samples
                    </h3>
                    <p className="creators-item__text">
                      Place a sample, track your order and your supplier
                      communications in one place
                    </p>
                  </li>
                </ol>
              </div>
              <div className="how-works__general-step">
                <div className="suppliers-item creators-item">
                  <div className="arrow">
                    <svg
                      width="16"
                      height="38"
                      viewBox="0 0 16 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.29289 37.7071C7.68342 38.0976 8.31658 38.0976 8.70711 37.7071L15.0711 31.3431C15.4616 30.9526 15.4616 30.3195 15.0711 29.9289C14.6805 29.5384 14.0474 29.5384 13.6569 29.9289L8 35.5858L2.34315 29.9289C1.95262 29.5384 1.31946 29.5384 0.928933 29.9289C0.538409 30.3195 0.538409 30.9526 0.928934 31.3431L7.29289 37.7071ZM7 4.37114e-08L7 37L9 37L9 -4.37114e-08L7 4.37114e-08Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div data-number="4." className="suppliers-item__num"></div>
                  <h3 className="title title_item suppliers-item__title">
                    DONE!
                  </h3>
                  <p className="suppliers-item__text">It’s that simple!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="how-works__quote">
          <h3 className="title title_item how-works__quote-text">
            Tired of comlplicated processes?
          </h3>
          <ButtonWithRightArrow
            content={'Make it easy'}
            function={() => history.push({ pathname: '/quote/generic_quote' })}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
