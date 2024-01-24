import css from "./salesanalysis.module.css";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";
import {
  bentlinechart,
  histogramchart,
  multiplelinechart,
  piechart,
} from "../../data/data";
import { linechart } from "./../../data/data";

const SalesAnalysis = () => {
  return (
    <div className={css.container}>
      <div className={css.up}>
        <div className={css.top_one}>
          <div className={css.alltop}>
            <div>
              <h3>Sales by Value</h3>
              <select name="sales" id="sales">
                <option value="sales">Today</option>
                <option value="sales"> 1 Week</option>
                <option value="sales">1 Month</option>
                <option value="sales">1 Year</option>
              </select>
            </div>
            <section>
              <ReactECharts option={linechart}></ReactECharts>
            </section>
          </div>
        </div>

        <div className={css.top_two}>
          <div className={css.alltop}>
            <div>
              <h3>Sales by Quantity</h3>
              <select name="sales" id="sales">
                <option value="sales"> Week</option>
                <option value="sales"> Month</option>
                <option value="sales"> Year</option>
              </select>
            </div>

            <section>
              <ReactECharts option={histogramchart} />
            </section>
          </div>
        </div>

        <div className={css.top_three}>
          <div className={css.alltop}>
            <div>
              <h3>Cash / Credit / Credit Card Sales </h3>
              <select name="sales" id="sales">
                <option value="sales"> Month</option>
                <option value="sales"> Year</option>
              </select>
            </div>

            <section>
              <ReactECharts option={piechart} />
            </section>
          </div>
        </div>
      </div>

      <div className={css.down}>
        <div className={css.down_one}>
          <div className={css.alldown}>
            <div>
              <h3>Discount Sales</h3>
              <select name="sales" id="sales">
                <option value="sales"> 1 Week</option>
                <option value="sales">1 Month</option>
                <option value="sales">1 Year</option>
              </select>
            </div>
            <section>
              <ReactECharts option={multiplelinechart}></ReactECharts>
            </section>
          </div>
        </div>

        <div className={css.down_two}>
          <div className={css.alldown}>
            <div>
              <h3>Customer Count</h3>
              <select name="sales" id="sales">
                <option value="sales">1 Year</option>
                <option value="sales"> 1 Week</option>
              </select>
            </div>
            <section>
              <ReactECharts option={bentlinechart}></ReactECharts>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesAnalysis;
