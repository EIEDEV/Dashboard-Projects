import FullPage from "../fullpage/fullpage";
import SideBar from "../sidebar/sidebar";
import css from "./layout.module.css";

import React from "react";

const RealContainer = ({ toggleSidebar, sidebarVisible }) => {
  return (
    <div className={css.container}>
      <div
        className={css.sidebar}
        style={{ display: sidebarVisible ? "block" : "none" }}
      >
        <SideBar />
      </div>
      <div className={css.fullpage}>
        <FullPage
          toggleSidebar={toggleSidebar}
          sidebarVisible={sidebarVisible}
        />
      </div>
    </div>
  );
};

export default RealContainer;
