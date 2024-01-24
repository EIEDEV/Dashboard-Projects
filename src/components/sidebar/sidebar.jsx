import css from "./sidebar.module.css";
import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { FcCalendar, FcPrivacy, FcSalesPerformance } from "react-icons/fc";

const SideBar = () => {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src="./IMG-20230622-WA0011-removebg-preview.png" alt="" />
      </div>

      <div className={css.navlink}>
        <NavLink to="/dashboard" title="Dashboard">
          <MdSpaceDashboard size={30} />
          <h4 className={css.title}>Dashboard</h4>
        </NavLink>

        <NavLink to="/calender" title="Calendar">
          <FcCalendar size={30} style={{ color: "white" }} />
          <h4 className={css.title}>Calendar</h4>
        </NavLink>

        <NavLink to="sales" title="Sales Analysis">
          <FcSalesPerformance size={30} style={{ color: "white" }} />
          <h4 className={css.title}>Sales Analysis</h4>
        </NavLink>

        <NavLink to="example" title="Users">
          <FaRegUser size={30} style={{ color: "white" }} />
          <h4 className={css.title}>Users</h4>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
