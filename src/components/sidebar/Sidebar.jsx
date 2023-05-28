import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="list-container">
        <span className="list-icon">
          <svg
            id="list-icon-svg"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </span>
      </div>
      <div className="nav-container">
        <nav className="sidebar-nav">
          <ul className="sidebar-list">
            <NavLink exact to="/">
              <li className="sidebar-list-item">Calendar</li>
            </NavLink>
            <NavLink>
              <li className="sidebar-list-item">Task</li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
