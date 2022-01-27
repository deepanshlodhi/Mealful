import React from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { INITIAL_OPTIONS } from './columnChartCostant';

const ColumnChart = (props) => {
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

ColumnChart.propTypes = {
  options: PropTypes.object,
};

ColumnChart.defaultProps = {
  options: {},
};

export default ColumnChart;
