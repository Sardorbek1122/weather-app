import React, {useState} from "react";

 const Clock = () => {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  }

  setInterval(updateTime, 1000);

  return (
    <div>{currentTime}</div>
  )
}

export default Clock;
