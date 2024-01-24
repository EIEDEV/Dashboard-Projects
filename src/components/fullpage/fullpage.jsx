import css from "./fullpage.module.css";
import { React, useState } from "react";
import { PiHandsClapping } from "react-icons/pi";
import { BiSearch } from "react-icons/bi";
import { CiBellOn } from "react-icons/ci";
import { TbMessageDots } from "react-icons/tb";
import moment from "moment/moment";
import { Routes, Outlet, useLocation, Navigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const FullPage = ({ toggleSidebar, sidebarVisible }) => {
  const { pathname } = useLocation();
  return (
    <div className={css.container}>
      {pathname === "/" && <Navigate to="/dashboard" />}
      <div className={css.allnavbar}>
        <div className={css.navbar}>
          <h3>
            Welcome Back, Emmanuel <PiHandsClapping />
          </h3>

          <div className={css.allsearchbar}>
            <div className={css.searchbar}>
              <BiSearch size={20} />
              <input type="text" placeholder="Search Anything" />
            </div>

            <div className={css.message}>
              <TbMessageDots size={25} />
              <CiBellOn size={25} />

              <div className={css.profile}>
                <img src="./limpo5.jpg" alt="" />
                <select name="num" id="num">
                  <option value="num">Emmanuel Ezeagu</option>

                  <option value="numb">Samuel Chukwueze</option>

                  <option value="num">Victor Osihmen</option>
                </select>

                <h6 className={css.nav} onClick={toggleSidebar}>
                  {sidebarVisible ? <FaTimes /> : <FaBars />}
                </h6>
              </div>
            </div>
          </div>
        </div>

        <Outlet />

        <div className={css.footer}>
          Your Dashboard as at {moment().format("MMMM Do YYYY, h:mm:ss a")}
        </div>
      </div>

      <div className={css.backgroundcolors}>
        <div className={css.green}></div>
        <div className={css.gree}></div>
      </div>
    </div>
  );
};

export default FullPage;
