import { FaSackDollar, FaHandHoldingDollar } from "react-icons/fa6";
import { MdSavings, MdArrowOutward } from "react-icons/md";
import { GiExpense } from "react-icons/gi";
import { LuArrowDownLeft } from "react-icons/lu";
import moment from "moment/moment";

import * as echarts from "echarts";

export const Decimal = (data) => {
  return data.toLocaleString("en", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: true,
  });
};

export const cardsData = [
  {
    id: 1,
    title: "Total Balance",
    image: <FaSackDollar size={30} />,
    change: +24,
    amount: 2324.998754,
    arrow: <MdArrowOutward />,
  },
  {
    id: 2,
    title: "Total Income",
    image: <FaHandHoldingDollar size={30} />,
    change: +30,
    amount: 4778.4386,
    arrow: <MdArrowOutward />,
  },
  {
    id: 3,
    title: "Total Expense",
    image: <GiExpense size={30} />,
    change: -11,
    amount: 2103.09654,
    arrow: <LuArrowDownLeft />,
  },
  {
    id: 4,
    title: "Total Savings",
    image: <MdSavings size={30} />,
    change: +15,
    amount: 9500.345432,
    arrow: <MdArrowOutward />,
  },
];

const cons = 500;

export function chartdata() {
  const randomom = Math.floor(Math.random() * 1000) + 1;
  const result = (randomom * cons) / 100;
  return result;
}

export function changemonth(months) {
  const lastmont = moment().subtract(months, "months");

  return lastmont.format("MMMM");
}

export const use = [
  { text: "Maintenance", cost: 32 },
  { text: "Staff Food", cost: 25 },
  { text: "Investment", cost: 17 },
  { text: "Transportation", cost: 16 },
  { text: "Taxes", cost: 10 },
];

const piechar = 10;

export function piechartdata() {
  const randomom = Math.floor(Math.random() * 10) + 1;
  const result = (randomom * piechar) / 100;
  return result;
}

export const piechart = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    top: "5%",
    left: "center",
  },
  series: [
    {
      name: "Sales From",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverLap: false,
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          fontSize: 40,
          fontWeight: "bold",
          show: true,
        },
      },
      data: [
        { name: "Credit Notes", value: piechartdata() },
        { name: "Credit Card", value: piechartdata() },
        { name: "Credit", value: piechartdata() },
        { name: "Cash", value: piechartdata() },
      ],
    },
  ],
};

const histogramchar = 100000;

export function histogramchartdata() {
  const randomom = Math.floor(Math.random() * 100) + 1;
  const result = (randomom * histogramchar) / 100;
  return result;
}

export const histogramchart = {
  color: "#2a9a95",
  grid: {
    bottom: "20",
    top: "20",
    right: "15",
    left: "65",
  },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [
        histogramchartdata(),
        histogramchartdata(),
        histogramchartdata(),
        histogramchartdata(),
        histogramchartdata(),
        histogramchartdata(),
        histogramchartdata(),
      ],
      type: "bar",
      showBackground: true,
      backgroundStyle: {
        color: "rgba(180, 180, 180, 0.2)",
      },
    },
  ],
};

const multiplelinechar = 200;

export function multiplelinechartdata() {
  const randomom = Math.floor(Math.random() * 100) + 1;
  const result = (randomom * multiplelinechar) / 100;
  return result;
}

export const multiplelinechart = {
  tooltip: {
    trigger: "axis",
  },
  legend: {
    data: ["Mobiles", "Tablets", "Others"],
  },
  grid: {
    left: "10",
    right: "10",
    bottom: "120",
    top: "20",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: "Mobiles",
      type: "line",
      stack: "Total",
      data: [
        multiplelinechartdata(),
        multiplelinechartdata(),
        multiplelinechartdata(),
        multiplelinechartdata(),
        multiplelinechartdata(),
        multiplelinechartdata(),
        multiplelinechartdata(),
      ],
    },
    {
      name: "Tablets",
      type: "line",
      stack: "Total",
      data: [
        multiplelinechartdata(),
        multiplelinechartdata(),
        multiplelinechartdata(),
        multiplelinechartdata(),
        multiplelinechartdata(),
        multiplelinechartdata(),
        multiplelinechartdata(),
      ],
    },
    {
      name: "Others",
      type: "line",
      stack: "Total",
      data: [
        multiplelinechartdata(),
        multiplelinechartdata(),
        multiplelinechartdata(),
        multiplelinechartdata(),
        multiplelinechartdata(),
        multiplelinechartdata(),
        multiplelinechartdata(),
      ],
    },
  ],
};

const linechar = 500000;

export function changehours(hours) {
  const lastmont = moment().subtract(hours, "hours");

  return lastmont.format("h:mm");
}

export function linechartdata() {
  const randomom = Math.floor(Math.random() * 100) + 1;
  const result = (randomom * linechar) / 100;
  return result;
}

export const linechart = {
  grid: {
    left: "60",
    right: "10",
    top: "20",
    bottom: "30",
  },
  xAxis: {
    type: "category",
    data: [
      changehours(12),
      changehours(10),
      changehours(8),
      changehours(6),
      changehours(4),
      changehours(2),
      moment().format("h:mm"),
    ],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      type: "line",
      data: [
        linechartdata(),
        linechartdata(),
        linechartdata(),
        linechartdata(),
        linechartdata(),
        linechartdata(),
        linechartdata(),
      ],
      areaStyle: {
        opacity: 0.5,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 0.8, [
          {
            offset: 0,
            color: "#879da2",
          },
          {
            offset: 1,
            color: "#f3f3f3",
          },
        ]),
      },
    },
  ],
};

export function changeyears(years) {
  const lastmont = moment().subtract(years, "years");

  return lastmont.format("YYYY");
}

const bentlinechar = 11000;

export function multiplebentlinechartdata() {
  const randomom = Math.floor(Math.random() * 100) + 1;
  const result = (randomom * bentlinechar) / 100;
  return result;
}
export const bentlinechart = {
  tooltip: {
    trigger: "axis",
  },
  legend: {
    data: ["Others", "Social"],
  },
  grid: {
    left: "10",
    right: "10",
    bottom: "120",
    top: "20",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    data: [
      changeyears(6),
      changeyears(5),
      changeyears(4),
      changeyears(3),
      changeyears(2),
      changeyears(1),
      moment().format("YYYY"),
    ],
  },
  yAxis: {
    type: "value",
    gridIndex: 0,
  },
  series: [
    {
      name: "Others",
      type: "line",
      seriesLayoutBy: "row",
      emphasis: {
        focus: "series",
      },
      data: [
        multiplebentlinechartdata(),
        multiplebentlinechartdata(),
        multiplebentlinechartdata(),
        multiplebentlinechartdata(),
        multiplebentlinechartdata(),
        multiplebentlinechartdata(),
        multiplebentlinechartdata(),
      ],
    },
    {
      name: "Social",
      type: "line",
      seriesLayoutBy: "row",
      emphasis: {
        focus: "series",
      },
      data: [
        multiplebentlinechartdata(),
        multiplebentlinechartdata(),
        multiplebentlinechartdata(),
        multiplebentlinechartdata(),
        multiplebentlinechartdata(),
        multiplebentlinechartdata(),
        multiplebentlinechartdata(),
      ],
    },
  ],
};

let eventGuid = 0;
let todayStr = moment().format("YYYY-MM-DD"); // YYYY-MM-DD of today
export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: "Insert your Schedule",
    start: todayStr + "T09:00:00",
  },
  {
    id: createEventId(),
    title: "Insert your Schedule",
    start: moment(todayStr).add(1, "days").format("YYYY-MM-DD") + "T30:00:00",
  },
  {
    id: createEventId(),
    title: "Insert your Schedule",
    start: moment(todayStr).add(2, "days").format("YYYY-MM-DD") + "T40:00:00",
  },
  {
    id: createEventId(),
    title: "Insert your Schedule",
    start: moment(todayStr).add(3, "days").format("YYYY-MM-DD") + "T50:00:00",
  },
  {
    id: createEventId(),
    title: "Insert your Schedule",
    start: moment(todayStr).add(5, "days").format("YYYY-MM-DD") + "T60:00:00",
  },
  {
    id: createEventId(),
    title: "Insert your Schedule",
    start: moment(todayStr).add(6, "days").format("YYYY-MM-DD") + "T70:00:00",
  },
];

export function createEventId() {
  return String(eventGuid++);
}
