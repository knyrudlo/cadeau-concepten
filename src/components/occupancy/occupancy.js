import React, { useState, useRef } from "react";
import { useOnClickOutside } from "../../hooks/hooks";
import styled from "styled-components";

import { ReactComponent as DateOcuupancy } from "../../assets/images/icon-occupancy.svg";
import "./occupancy.scss";

const Ocuupancy = () => {
  const [adultsQuantity, setAdultsQuantity] = useState(0);
  const [childrenQuantity, setChildrenQuantity] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const node = useRef();

  const increaseAdultsQuantity = () => {
    setAdultsQuantity(adultsQuantity + 1);
  };

  const decreaseAdultsQuantity = () => {
    if (adultsQuantity > 0) {
      setAdultsQuantity(adultsQuantity - 1);
    }
  };

  const increaseChildrenQuantity = () => {
    setChildrenQuantity(childrenQuantity + 1);
  };

  const decreaseChildrenQuantity = () => {
    if (childrenQuantity > 0) {
      setChildrenQuantity(childrenQuantity - 1);
    }
  };

  const handleShowDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useOnClickOutside(node, () => setShowDropdown(false));

  const DropdownToggle = styled.div`
    display: ${showDropdown ? "block" : "none"};
  `;

  return (
    <div className="ocuupancy" ref={node}>
      <div className="ocuupancy__inner-wrap" onClick={handleShowDropdown}>
        <DateOcuupancy className="ocuupancy__icon" />
        <span className="ocuupancy__adults">{adultsQuantity} volwassenen</span>
        <span className="ocuupancy__separator"> - </span>
        <span className="ocuupancy__children">{childrenQuantity} kinderen</span>
      </div>
      <DropdownToggle className="ocuupancy__dropdown">
        <div className="ocuupancy__field">
          Volwassenen
          <div className="ocuupancy__controll-wrap">
            <span
              className="ocuupancy__controll"
              onClick={decreaseAdultsQuantity}
            >
              -
            </span>
            <span
              className="ocuupancy__controll"
              onClick={increaseAdultsQuantity}
            >
              +
            </span>
          </div>
        </div>
        <div className="ocuupancy__field">
          Kinderen
          <div className="ocuupancy__controll-wrap">
            <span
              className="ocuupancy__controll"
              onClick={decreaseChildrenQuantity}
            >
              -
            </span>
            <span
              className="ocuupancy__controll"
              onClick={increaseChildrenQuantity}
            >
              +
            </span>
          </div>
        </div>
      </DropdownToggle>
    </div>
  );
};

export default Ocuupancy;
