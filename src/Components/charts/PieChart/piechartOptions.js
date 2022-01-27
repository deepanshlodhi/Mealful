export const PieChartOptions = (options, date) => {
  const slots = [];
  for (let [key, value] of Object.entries(options)) {
    slots.push({ name: key, y: value[1] });
  }
  const pieOptions = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    title: {
      text: `Timing-wise Count for ${date}`,
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f}% ",
        },
      },
    },
    series: [
      {
        name: "Time",
        colorByPoint: true,
        data: slots,
      },
    ],
  };
  return pieOptions;
};
