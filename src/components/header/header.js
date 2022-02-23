import React, { useState, useRef } from "react";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import Navigation from "./navigation/navigation";
import ActionLink from "../action-link/action-link";
import { Sticky } from "react-sticky";
import { useOnClickOutside } from "../../hooks/hooks";
import Burger from "./burger/burger";
import styled from "styled-components";

import "./header.scss";

const Header = ({ navigation }) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  const NavigationMobile = styled.div`
    // transform: ${({ open }) =>
      open ? "translateX(0)" : "translateX(100%)"};
  `;

  return (
    // @TODO: configure topOffset to avoid sticky header jump
    <Sticky topOffset={1}>
      {({ style, isSticky }) => (
        <header
          className={`header ${isSticky ? "header_sticky" : ""}`}
          style={style}
        >
          <div className="header__inner-wrap wrapper">
            <Logo className="header__logo" />
            <div
              className={`header__mobile-wrap ${
                open ? "header__mobile-wrap_active" : ""
              }`}
            >
              <Navigation open={open}/>
              <ActionLink children="Geef een hotelgiftcard" />
              <ActionLink children="Boek een hotel" modifier="book-hotel" />
            </div>
            <Burger open={open} setOpen={setOpen} />
          </div>
        </header>
      )}
    </Sticky>
  );
};

export default Header;
