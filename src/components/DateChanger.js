import React from "react";
const DateChanger = (props) => {
  const year = props.year;
  const setYear = props.setYear;
  const day2 = props.day2;
  const setDay2 = props.setDay2;

  return (
    <div className="buttons">
      <div>
        <button onClick={() => setYear(year + 1)} className="year">
          Year
        </button>
      </div>
      <div>
        <button onClick={() => setDay2(day2 + 1)} className="year">
          Day 2
        </button>
      </div>
    </div>
  );
};
export default DateChanger;
