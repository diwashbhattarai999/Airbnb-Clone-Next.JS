"use client";

import { DateRange } from "react-date-range";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const Calender = ({ value, onChange, disabledDates }) => {
  return (
    <div>
      <DateRange
        rangeColors={["#262626"]}
        ranges={[value]}
        date={new Date()}
        onChange={onChange}
        direction="vertical"
        showDateDisplay={false}
        minDate={new Date()}
        disabledDates={disabledDates}
      />
    </div>
  );
};

export default Calender;
