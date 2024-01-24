import css from "./dashboardchart.module.css";
import React from "react";
import ReactECharts from "echarts-for-react";
import { changemonth, chartdata, use } from "./../../data/data";
import moment from "moment/moment";
import * as echarts from "echarts";

const Dashboardchart = () => {
  const today = moment().format("MMMM");

  const option = {
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
      backgroundColor: "rgb(0, 0, 0, 0.59)",
      borderWidth: 0,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: [
          changemonth(12),
          changemonth(11),
          changemonth(10),
          changemonth(9),
          changemonth(8),
          changemonth(7),
          changemonth(6),
          changemonth(5),
          changemonth(4),
          changemonth(3),
          changemonth(2),
          changemonth(1),
          today,
        ],
      },
    ],
    yAxis: [
      {
        type: "value",
        splitLine: {
          show: false,
        },
      },
    ],
    grid: {
      top: "9",
      bottom: "20",
      left: "40",
      right: "30",
    },
    series: [
      {
        type: "line",
        smooth: true,
        showSymbol: false,
        data: [
          chartdata(),
          chartdata(),
          chartdata(),
          chartdata(),
          chartdata(),
          chartdata(),
          chartdata(),
          chartdata(),
          chartdata(),
          chartdata(),
          3344.908,
          4778.44,
        ],
        lineStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(255, 191, 0)",
            },
            {
              offset: 1,
              color: "#f45003",
            },
          ]),
          width: 2,
        },

        areaStyle: {
          opacity: 0.5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 0.8, [
            {
              offset: 0,
              color: "#fe4c00",
            },
            {
              offset: 1,
              color: "rgb(254, 144, 70, 0.1)",
            },
          ]),
        },
      },
    ],
  };

  const option_one = {
    color: [
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: "#cbb9f3",
        },
      ]),

      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: "#ec96bb",
        },
      ]),

      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: "#2ac0cf",
        },
      ]),

      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: "#84b6f5",
        },
      ]),

      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: "#000",
        },
      ]),
    ],
    series: [
      {
        name: "item",
        type: "pie",
        radius: ["60%", "80%"],
        data: [
          { name: "Maintenance", value: 672.9908928 },
          { name: "Staff Food", value: 525.774135 },
          { name: "Investment", value: 357.5264118 },
          { name: "Transportation", value: 336.4954464 },
          { name: "Taxes", value: 210.309654 },
        ],
        avoidLabelOverlap: false,
        itemStyle: {
          //   borderRadius: 50,
          borderColor: "black",
          borderWidth: 1,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: "bold",
          },
        },
      },
    ],
  };
  return (
    <div className={css.container}>
      <div className={css.left}>
        <div className={css.left_top}>
          <h3>Total Income</h3>
          <select name="months" id="months">
            <option value="months">Last 1 month</option>
            <option value="months">Last 6 months</option>
            <option value="months">Last 1 year</option>
          </select>
        </div>

        <div className={css.bottom_top}>
          <ReactECharts option={option} />
        </div>
      </div>

      <div className={css.right}>
        <div className={css.left_top}>
          <h3>Activity </h3>
          <select name="mont" id="mont">
            <option value="mont">This month</option>
            <option value="mont">Last 1 month</option>
            <option value="mont">Last 6 months</option>
          </select>
        </div>

        <div className={css.right_bottom}>
          <div className={css.pie}>
            <ReactECharts option={option_one} />
          </div>

          <div className={css.uses}>
            {use.map((item) => (
              <div className={css.words}>
                <div className={css.word}>
                  <span></span>
                  <span>{item.text}</span>
                </div>

                <div className={css.cost}>
                  <h3>{item.cost}%</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardchart;
