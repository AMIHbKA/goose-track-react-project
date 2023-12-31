import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useWindowSize, useRect } from 'hooks';
import BarWithGradient from '../BarWithGradient/BarWithGradient';
import {
  StatisticsChartContainer,
  StatisticsChartWarningMessage,
  StatisticsChartWrapperExternal,
  StatisticsChartWrapperInternal,
} from './StatisticsChartStyled';

import { useSelector } from 'react-redux';
import { getTasks } from 'redux/tasks/selectors';
import { tasksStatisticCalculator } from 'utilities/tasksStatisticCalculator';


const StatisticsChart = () => {

  const windowSize = useWindowSize();

  const [chartSizes, chartWrapperRef] = useRect('resize', 100, 100);

  const theme = useContext(ThemeContext);

  const tasks = useSelector(getTasks);


  const resultArray = tasksStatisticCalculator(tasks);


  const axisTextStyles = {
    fill: theme.statistics.chartTextColor,
    fontSize: '14',
    fontWeight: '400',
  };

  const barLabelStyles = {
    fill: theme.statistics.chartTextColor,
    fontSize: windowSize.width < 768 ? 12 : 16,
    fontWeight: '500',
  };

  const barWidth = windowSize.width < 768 ? 22 : 27;

  return (
    <StatisticsChartContainer>
      <h2>Tasks</h2>
      <StatisticsChartWrapperExternal ref={chartWrapperRef}>
        {chartSizes.height < 100 ? (
          <StatisticsChartWarningMessage>
            {chartSizes.height > 21 &&
              `Insufficient window height for chart display`}
          </StatisticsChartWarningMessage>
        ) : (
          <StatisticsChartWrapperInternal
            height={chartSizes.height}
            width={chartSizes.width}
          >
            <ResponsiveContainer>
              <BarChart
                data={resultArray}
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
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={axisTextStyles}
                />
                <Bar
                  dataKey="day"
                  // dataKey={t('statisticsChart.day')}
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
                  // dataKey={t('statisticsChart.month')}
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
          </StatisticsChartWrapperInternal>
        )}
      </StatisticsChartWrapperExternal>
    </StatisticsChartContainer>
  );
};

export default StatisticsChart;
