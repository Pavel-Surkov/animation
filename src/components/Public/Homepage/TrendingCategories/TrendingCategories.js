import React from 'react';
import './categories.scss';
import HomeCategoryItem from '../HomeCategoryItem/HomeCategoryItem';
import ButtonWithRightArrow from '../../../../constant/public/ButtonWithRightArrow/ButtonWithRightArrow';
import clothes from '../../../../assets/images/clothing-line-1.jpg';
import clothes2x from '../../../../assets/images/clothing-line-1@2x.jpg';
import cosmetics from '../../../../assets/images/cosmetics-1.jpg';
import cosmetics2x from '../../../../assets/images/cosmetics-1@2x.jpg';
import jewelry from '../../../../assets/images/jewelry-1.jpg';
import jewelry2x from '../../../../assets/images/jewelry-1@2x.jpg';
import furniture from '../../../../assets/images/furniture-1.jpg';
import furniture2x from '../../../../assets/images/furniture-1@2x.jpg';
import textile from '../../../../assets/images/textile-1.jpg';
import textile2x from '../../../../assets/images/textile-1@2x.jpg';

const TrendingCategories = () => {
  return (
    <section id="category" className="section categories">
      <div className="categories-wrapper">
        <div className="container">
          <h2 className="title title_size-m categories__title">
            Explore top trending categories on UPLIO
          </h2>
          <div className="categories-content">
            <HomeCategoryItem
              title={'[APPAREL]'}
              image={{ quality1x: clothes, quality2x: clothes2x }}
            />
            <HomeCategoryItem
              title={'[COSMETICS]'}
              image={{ quality1x: cosmetics, quality2x: cosmetics2x }}
            />
            <HomeCategoryItem
              title={'[JEWELRY]'}
              image={{ quality1x: jewelry, quality2x: jewelry2x }}
            />
            <div className="category-item category-item_text">
              <h3 className="title title_item category-item_text__title">
                Can’t find the category you are looking for?
              </h3>
              <div className="category-item__subtitle">
                <p>
                  Contact us and we will find you suppliers within our network.
                </p>
              </div>
              <div className="category-item__see">
                <ButtonWithRightArrow content={'See more'} />
              </div>
            </div>
            <HomeCategoryItem
              title={'[FURNITURE]'}
              image={{ quality1x: furniture, quality2x: furniture2x }}
            />
            <HomeCategoryItem
              title={'[TEXTILE]'}
              image={{ quality1x: textile, quality2x: textile2x }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingCategories;
