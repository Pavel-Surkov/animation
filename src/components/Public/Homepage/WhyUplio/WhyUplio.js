import React from 'react';
import './why.scss';
import { useHistory } from 'react-router-dom';
import ButtonWithRightArrow from '../../../../constant/public/ButtonWithRightArrow/ButtonWithRightArrow';
import nathan from '../../../../assets/images/HomePage/Quotation/nathan-oakley.jpg';
import nathan2x from '../../../../assets/images/HomePage/Quotation/nathan-oakley@2x.jpg';
import irene from '../../../../assets/images/HomePage/Quotation/irene-kredenets.jpg';
import irene2x from '../../../../assets/images/HomePage/Quotation/irene-kredenets@2x.jpg';

const WhyUplio = () => {
  const history = useHistory();

  return (
    <section className="section why">
      <div className="why-wrapper">
        <div className="container">
          <h2 className="title title_size-m why__title">Why Uplio?</h2>
          <div className="why-content">
            <div className="why-answer">
              <div className="why-answer__answer">
                <ul className="list list-arrow why-answer__list">
                  <li className="why-answer__item">Fast response</li>
                  <li className="why-answer__item">Transparent Pricing</li>
                  <li className="why-answer__item">Trusted Experience</li>
                </ul>
              </div>
              <div className="why-answer__image">
                <img width="325" src={nathan} srcSet={nathan2x} alt="" />
              </div>
              <div className="why-answer__image why-answer__image_m_hidden">
                <img width="325" src={irene} srcSet={irene2x} alt="" />
              </div>
              <div className="why-answer__sign">
                <div className="category-item category-item_text">
                  <h3 className="title title_item category-item_text__title">
                    Want to achieve sucsess?
                  </h3>
                  <div className="category-item__subtitle">
                    <p>
                      Join us and find the best suppliers in&nbsp;your category.
                    </p>
                  </div>
                  <div className="category-item__see">
                    <ButtonWithRightArrow
                      function={() => history.push({ pathname: '/signup' })}
                      content={'Sign up'}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="why-content__text">
              <p>
                Whether you are starting your business, launching a new product
                line, or looking for sustainable and ethical sourcing, Uplio
                helps you&nbsp;connect with and source products from vetted and
                hand-picked&nbsp;suppliers who can bring your vision to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUplio;
