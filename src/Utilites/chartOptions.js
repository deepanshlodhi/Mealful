export const chartOptions = (options, date) => {
  const chartOptions = {
    xAxis: {
      categories: options[0],
      crosshair: true,
    },
    title: {
      text: "Item_Date",
    },
    yAxis: {
      min: 0,
      title: {
        text: "Item_Schedule_Count",
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    series: [
      {
        name: date,
        data: options[1],
        borderRadius: 3,
      },
    ],
  };
  return chartOptions;
};
