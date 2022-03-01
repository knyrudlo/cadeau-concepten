import React from "react";
import DatePicker from "../datepicker/datepicker";
import Ocuupancy from "../occupancy/occupancy";

import "./filters.scss";

const Filters = () => {
  return (
    <section className="filters">
      <div className="filters__inner-wrap wrapper">
        <DatePicker />
        <Ocuupancy />
      </div>
    </section>
  );
};

export default Filters;
