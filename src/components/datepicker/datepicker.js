import React, { useState } from "react";
import { DateRangePicker } from "react-dates";
import moment from "moment";
import "moment/locale/nl";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./datepicker-overrides.scss";

import { ReactComponent as DatePickerIcon } from "../../assets/images/icon-datepicker.svg";

const DatePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const handleFocusChange = ({ focusedInput }) => {
    setFocusedInput(focusedInput);
  };

  const DatePickerSeparatorIcon = "-";

  return (
    <DateRangePicker
      startDate={startDate}
      startDateId="startDateId"
      endDate={endDate}
      endDateId="endDateId"
      onDatesChange={({ startDate, endDate }) =>
        handleDatesChange({ startDate, endDate })
      }
      focusedInput={focusedInput}
      onFocusChange={(focusedInput) => handleFocusChange({ focusedInput })}
      verticalHeight={370}
      orientation="vertical"
      numberOfMonths={1}
      startDatePlaceholderText="Startdatum"
      endDatePlaceholderText="Einddatum"
      displayFormat="DD MMM"
      renderDayContents={(day) => {
        day.local("nl");
        return moment(day).format("DD");
      }}
      customInputIcon={<DatePickerIcon />}
      customArrowIcon={DatePickerSeparatorIcon}
    />
  );
};

export default DatePicker;
