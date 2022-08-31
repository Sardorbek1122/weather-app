import React from "react";

const DateFormat = () => {
  const d = new Date();
  const weekDay = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  const day = weekDay[d.getDay()];
  const month = months[d.getMonth()];
  const date = d.getDate();
  const year = d.getFullYear();

  return (
    <>
      <div className="date">
        <h3 className="date__Format">{`${date}/${month}/${year} ${day}`}</h3>
      </div>
    </>
  );
}

export default DateFormat;
