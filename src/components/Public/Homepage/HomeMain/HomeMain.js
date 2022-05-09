import React from 'react';
import './home-main.scss';
import { useHistory } from 'react-router-dom';
import ButtonWithRightArrow from '../../../../constant/public/ButtonWithRightArrow/ButtonWithRightArrow';
import fashion from '../../../../assets/png/fashion.png';
import fashion2x from '../../../../assets/png/fashion@2x.png';

const HomeMain = () => {
  const history = useHistory();

  return (
    <section className="home-main">
      <div className="home-main-wrapper">
        <div className="container">
          <div className="home-main__content">
            <div className="home-main__content-text">
              <h1 className="title title_size-l home-main__title">
                Convert your&nbsp;dream into a&nbsp;product
              </h1>
              <div className="title title_item home-main__subtitle">
                Find a trusted supplier
              </div>
              <div className="home-main__btn">
                <ButtonWithRightArrow
                  content={'Get a quote'}
                  function={() => history.push({ pathname: '/quote' })}
                />
              </div>
            </div>
            <div className="home-main__content-img">
              <img
                width="602"
                height="650"
                src={fashion}
                srcSet={`${fashion} 1x, ${fashion2x} 2x`}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMain;
