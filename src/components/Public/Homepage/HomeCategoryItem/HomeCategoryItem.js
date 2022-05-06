import React from 'react';
import './category-item.scss';

const HomeCategoryItem = ({ title, image }) => {
  return (
    <article className="category-item">
      <h3 className="title title_item category-item__title">{title}</h3>
      <img
        src={image.quality1x}
        srcSet={
          image.quality2x
            ? `${image.quality1x} 1x, ${image.quality2x} 2x`
            : null
        }
        alt="category"
      />
      <div className="category-item__explore">
        <p>Explore now</p>
        <svg
          width="57"
          height="16"
          viewBox="0 0 57 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M56.7071 8.70711C57.0976 8.31658 57.0976 7.68342 56.7071 7.29289L50.3431 0.928932C49.9526 0.538408 49.3195 0.538408 48.9289 0.928932C48.5384 1.31946 48.5384 1.95262 48.9289 2.34315L54.5858 8L48.9289 13.6569C48.5384 14.0474 48.5384 14.6805 48.9289 15.0711C49.3195 15.4616 49.9526 15.4616 50.3431 15.0711L56.7071 8.70711ZM0 9H56V7H0V9Z"
            fill="white"
          />
        </svg>
      </div>
    </article>
  );
};

export default HomeCategoryItem;
