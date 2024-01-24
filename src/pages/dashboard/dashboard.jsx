import css from "./dashboard.module.css";
import React from "react";
import { cardsData } from "../../data/data";
import { Decimal } from "./../../data/data";
import Dashboardchart from "../../components/dasboardchart/dashboardchart";

const DashBoard = () => {
  return (
    <div className={css.container}>
      <div className={css.top}>
        <div className={css.cards}>
          {cardsData.map((item) => (
            <div className={css.card} key={item.id}>
              <span>{item.image}</span>

              <span>{item.title}</span>

              <span>$ {Decimal(item.amount)}</span>

              <span>
                <span>
                  {item.change}% {item.arrow}
                </span>
                than Last month
              </span>
            </div>
          ))}
        </div>
      </div>

      <Dashboardchart />
    </div>
  );
};

export default DashBoard;
