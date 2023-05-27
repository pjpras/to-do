import "./Upbar.css";
import { NavLink } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import { useState, useEffect } from "react";

const Upbar = () => {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(!showComponent);
  };

  useEffect(() => {
    if (showComponent) {
      // Set a transition delay when showing the component
      document.getElementById("myComponentWrapper").style.transition =
        "max-width 1s ease-in";
    } else {
      // Reset the transition delay when hiding the component
      document.getElementById("myComponentWrapper").style.transition =
        "max-width 1s ease-out";
    }
  }, [showComponent]);

  const currentDate = new Date();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" onClick={handleClick}>
              <svg
                id="list"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="#">
              Taskwise
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              <span>
                {monthNames[month]} {year}
              </span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link disabled" to="#">
              Disabled
            </NavLink>
          </li>
        </ul>
      </nav>
      <div
        id="myComponentWrapper"
        className={`sidebar-container ${showComponent ? "show" : " "}`}
      >
        <Sidebar />
      </div>
    </div>
  );
};

export default Upbar;
