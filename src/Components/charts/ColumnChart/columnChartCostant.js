
export const INITIAL_OPTIONS = {
  chart: {
    type: 'column',
  },
  // subtitle: {
  //   text: 'Source: WorldClimate.com'
  // },
  xAxis: {
    categories: [],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: ''
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} kw</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    },
    series: {
      pointWidth: 35
  }
  },
  series: [{
    name: 'Series 1',
    data: [],
    borderRadius: 3,
  }]
};

