import React from 'react';

const HomeCategoryItem = ({ title, image }) => {
  return (
    <article className="category-item">
      <h3 className="title title_item category-item__title">{title}</h3>
    </article>
  );
};

export default HomeCategoryItem;
