import React from "react";

import CategoryStarRating from "../category-star-rating/category-star-rating";

import "./category-list.scss";

const CategoryList = (props) => {
  const { category, items } = props;
  
  return (
    <section className="category-list">
      <div className="category-list__inner-wrap wrapper">
        {items.map((props) => (
          <CategoryListItem key={props.id} props={props} category={category} />
        ))}
      </div>
    </section>
  );
};
const CategoryListItem = ({ props, category }) => {
  const { image, title, rating, description, startPrice } = props;

  return (
    <a href="/" className="list-item">
      <div className="list-item__image-wrap">
        <img
          src={process.env.PUBLIC_URL + `images/${image}`}
          alt=""
          className="list-item__image"
        />
      </div>
      <div className="list-item__category">{category}</div>
      <h4 className="list-item__heading">{title}</h4>
      <CategoryStarRating rating={rating} />
      <p className="list-item__description">{description}</p>
      <h5 className="list-item__price">vanaf € {startPrice} per nacht</h5>
    </a>
  );
};

export default CategoryList;
