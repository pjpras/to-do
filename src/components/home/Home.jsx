import "./Home.css";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Home = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="calendar-container">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default Home;
