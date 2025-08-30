import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const RadialBarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      chart: {
        height: 200,
        type: "radialBar"
      },
      series: [67],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 15,
            size: "70%"
          },
          dataLabels: {
            showOn: "always",
            name: {
              offsetY: -10,
              show: true,
              color: "#888",
              fontSize: "13px"
            },
            value: {
              color: "#111",
              fontSize: "30px",
              show: true
            }
          }
        }
      },
      stroke: {
        lineCap: "round"
      },
      labels: ["Progress"]
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => {
      chart.destroy(); // cleanup when component unmounts
    };
  }, []);

  return <div id="chart" ref={chartRef}></div>;
};

export default RadialBarChart;
