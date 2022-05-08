import React from 'react';
import './subscribe-popup.scss';

const SubscribePopup = ({ isOpened, setOpened }) => {
  const handlePopupClose = () => {
    document.documentElement.classList.remove('is-locked');

    setOpened(false);
  };

  return (
    <div
      className={`subscribe-popup ${
        isOpened ? 'subscribe-popup_opened' : null
      }`}
    >
      <div className="subscribe-popup__text">
        <p>You have successfully subscribed to our newsletter</p>
      </div>
      <div className="subscribe-popup__btn-wrapper">
        <button
          type="button"
          className="button subscribe-popup__btn"
          onClick={handlePopupClose}
        >
          Great!
        </button>
      </div>
    </div>
  );
};

export default SubscribePopup;
