import "./Sidebar.css";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <nav>
        <ul>
          <li id="cal-list">
            <NavLink to="/" activeClassName="active-link">
              <Calendar onChange={onChange} value={value} />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
