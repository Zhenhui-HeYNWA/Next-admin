'use client';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import styles from './chart.module.css';

const Chart = () => {
  const data = [
    { name: 'Mon', visit: 3000, click: 1398 },
    { name: 'Tue', visit: 2500, click: 1200 },
    { name: 'Wed', visit: 3200, click: 1500 },
    { name: 'Thu', visit: 2800, click: 1300 },
    { name: 'Fri', visit: 3400, click: 1600 },
    { name: 'Sat', visit: 2900, click: 1400 },
    { name: 'Sun', visit: 3100, click: 1450 },
  ];
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Recap</h2>
      <ResponsiveContainer width='100%' height='90%'>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip contentStyle={{ background: '#151c2c', border: 'none' }} />
          <Legend />
          <Line
            type='monotone'
            dataKey='visit'
            stroke='#8884d8'
            strokeDasharray='5 5'
          />
          <Line
            type='monotone'
            dataKey='click'
            stroke='#82ca9d'
            strokeDasharray='3 4 5 2'
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
