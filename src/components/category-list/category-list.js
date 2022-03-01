import React from "react";

import CategoryStarRating from "../category-star-rating/category-star-rating";

import "./category-list.scss";

const CategoryList = (props) => {
  const { category, items } = props;

  return (
    <section className="category-list">
      <div className="category-list__inner-wrap wrapper row">
        {items.map((props) => (
          <CategoryListItem key={props.id} category={category} {...props} />
        ))}
      </div>
    </section>
  );
};
const CategoryListItem = ({
  image,
  title,
  rating,
  description,
  startPrice,
  category,
}) => {
  return (
    <a href="/" className="list-item">
      <div className="list-item__image-wrap">
        <img
          src={process.env.PUBLIC_URL + `images/${image}`}
          alt=""
          className="list-item__image"
        />
        <div className="list-item__image-hover"></div>
        <div className="list-item__image-hover"></div>
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
