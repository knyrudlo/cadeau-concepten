import React from "react";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import Navigation from "./navigation/navigation";
import ActionLink from "../action-link/action-link";
import Burger from "./burger/burger";

import "./header-sticky.scss";

const Header = () => {
  const defaultHeaderClassName = "header";
  const [headerClassName, setHeaderClassName] = React.useState(
    defaultHeaderClassName
  );

  const [showHeader, setShowHeader] = React.useState(false);
  const [isOpened, setIsOpened] = React.useState(false);

  const didScrollPage = (e) => {
    const headerStickyOffset = 90;
    if (window.scrollY > headerStickyOffset) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", didScrollPage);

    return () => {
      window.removeEventListener("keydown", didScrollPage);
    };
  }, []);

  const onClickMobileMenu = (e) => {
    setIsOpened(!isOpened);
  };

  React.useEffect(() => {
    setHeaderClassName(
      `header ${showHeader ? "header_sticky" : ""} ${
        isOpened ? "header_open-nav" : ""
      }`
    );
  }, [isOpened, showHeader]);

  return (
    <header className={headerClassName}>
      <div className="header__inner-wrap wrapper">
        <Logo className="header__logo" />
        <div className="header__mobile-wrap">
          <Navigation />
          <ActionLink children="Geef een hotelgiftcard" />
          <ActionLink children="Boek een hotel" modifier="book-hotel" />
        </div>
        <Burger
          open={isOpened}
          setOpen={setIsOpened}
          onClick={onClickMobileMenu}
        />
      </div>
    </header>
  );
};

export default Header;
