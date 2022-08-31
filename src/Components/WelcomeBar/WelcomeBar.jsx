import React from "react";
import Clock from "../Clock/Clock";
import DateFormat from "../DateFormat/DateFormat";
import "./WelcomeBar.scss";

export default function WeatherNews() {
  return (
    <div className="welcome">
      <div className="welcome__pic">
        <h1 className="welcome__header">Welcome to WeatherApp</h1>
        <div className="welcome__location-clock"><Clock/></div>
        <div className="welcome__location-date"><DateFormat/></div>
      </div>
    </div>
  )
}
