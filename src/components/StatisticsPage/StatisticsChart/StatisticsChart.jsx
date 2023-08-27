import { useState, useEffect, useContext } from 'react';
// import PropTypes from 'prop-types';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import { ThemeContext } from 'styled-components';
import StatisticsChartContainer from './StatisticsChartStyled';
import BarWithGradient from './BarWithGradient/BarWithGradient';
import { StatisticChartWrapper } from './StatisticChartWrapper/StatisticChartWrapper';

const data = [
  {
    name: 'To Do',
    day: 30,
    month: 35,
  },
  {
    name: 'In Progress',
    day: 20,
    month: 30,
  },
  {
    name: 'Done',
    day: 45,
    month: 40,
  },
];

const StatisticsChart = props => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const theme = useContext(ThemeContext);

  const axisTextStyles = {
    fill: theme.statistics.chartTextColor,
    fontSize: '14',
    fontWeight: '400',
  };

  const barLabelStyles = {
    fill: theme.statistics.chartTextColor,
    fontSize: windowWidth < 768 ? 12 : 16,
    fontWeight: '500',
  };

  const barWidth = windowWidth < 768 ? 22 : 27;

  return (
    <StatisticsChartContainer>
      <h2>Tasks</h2>
      <StatisticChartWrapper>
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 0,
              left: -32,
              bottom: 0,
            }}
            barGap={8}
          >
            <CartesianGrid
              vertical={false}
              stroke={theme.statistics.linesColor}
              strokeWidth={theme.statistics.linesWidth}
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={axisTextStyles}
            />
            <YAxis axisLine={false} tickLine={false} tick={axisTextStyles} />
            <Bar
              dataKey="day"
              fill="#FFD2DD"
              label={{
                ...barLabelStyles,
                position: 'top',
                formatter: value => `${value}%`,
              }}
              shape={<BarWithGradient radius={15} />}
              barSize={barWidth}
            />
            <Bar
              dataKey="month"
              fill="#3E85F3"
              label={{
                ...barLabelStyles,
                position: 'top',
                formatter: value => `${value}%`,
              }}
              shape={<BarWithGradient radius={15} />}
              barSize={barWidth}
            />
          </BarChart>
        </ResponsiveContainer>
      </StatisticChartWrapper>
    </StatisticsChartContainer>
  );
};

// StatisticsChart.propTypes = {};

export default StatisticsChart;
