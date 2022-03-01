import React from "react";
import styled from "styled-components";
import { ReactComponent as RatingStar } from "../../assets/images/rating-star.svg";

const CategoryStarRating = ({ rating }) => {
  const StarRating = styled.div`
    margin-bottom: 0.7em;
    color: #ffc36d;

    svg {
      display: none;
      margin-right: 0.3em;
    }

    svg:nth-child(-n + ${rating}) {
      display: inline-block;
    }
  `;
  return (
    <StarRating className="start-rating">
      <RatingStar />
      <RatingStar />
      <RatingStar />
      <RatingStar />
      <RatingStar />
    </StarRating>
  );
};

export default CategoryStarRating;
