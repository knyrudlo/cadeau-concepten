import React from "react";
import styled from "styled-components";
import heroImageDesktop from "../../assets/images/img_listpage_hero_banner_desktop.jpg";
import heroImageMobile from "../../assets/images/img_listpage_hero_banner_mobile.jpg";

import "./hero-banner.scss";

const HeroBanner = (props) => {
  const { subheading, heading, description } = props;

  const HeroBannerBackground = styled.section`
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url(${heroImageDesktop});

    @media only screen and (max-width: 992px) {
      background-image: url(${heroImageMobile});
    }
  `;

  return (
    <HeroBannerBackground className="hero-banner">
      <div className="hero-banner__text">
        <h5 className="hero-banner__sub-heading">{subheading}</h5>
        <h1 className="hero-banner__heading">{heading}</h1>
        <p className="hero-banner__description">{description}</p>
      </div>
    </HeroBannerBackground>
  );
};

export default HeroBanner;
