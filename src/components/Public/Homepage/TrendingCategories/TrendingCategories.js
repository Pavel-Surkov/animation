import React from 'react';
import './categories.scss';
import HomeCategoryItem from '../HomeCategoryItem/HomeCategoryItem';
import clothes from '../../../../assets/images/clothing-line-1.jpg';
import clothes2x from '../../../../assets/images/clothing-line-1@2x.jpg';

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
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingCategories;
