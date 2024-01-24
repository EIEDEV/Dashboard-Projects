import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const SolarSystemSalesChart = ({ salesData }) => {
  const svgRef = useRef();

  useEffect(() => {
    const width = 300; // Width of the SVG container
    const height = 200; // Height of the SVG container

    // Create the main SVG container using D3.js
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    // Your D3.js logic for the solar system visualization goes here
    // ...
  }, [salesData]); // Include any dependencies that might trigger updates

  return (
    <svg ref={svgRef} style={{ background: "#000", color: "white" }}></svg>
  );
};

export default SolarSystemSalesChart;
