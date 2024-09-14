import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const BasicChart: React.FC<any> = ({ title, data }) => {
  if (data === undefined || data === null || !Array.isArray(data)) {
    return <>No data to display</>;
  }
  const chartOptions: ApexOptions = {
    chart: {
      type: "candlestick",
      height: 350,
      width: 700,
    },
    title: {
      text: title,
      align: "left",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      decimalsInFloat: 0,
      tooltip: {
        enabled: true,
      },
    },
  };

  const chartSeries = [
    {
      data: data,
    },
  ];

  return (
    <Chart options={chartOptions} series={chartSeries} type="candlestick" />
  );
};

export default BasicChart;
