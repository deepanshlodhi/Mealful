import React from "react";
import PropTypes from "prop-types";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { INITIAL_OPTIONS } from "./pieChartConstant";

const PieChart = (props) => {
  const options = { ...INITIAL_OPTIONS, ...props.options };
  const { width } = props;
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      containerProps={{ style: { width } }}
    />
  );
};

PieChart.propTypes = {
  options: PropTypes.object,
};

PieChart.defaultProps = {
  options: {},
};

export default PieChart;
