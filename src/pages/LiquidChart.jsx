
import React from 'react';
import { Liquid } from '@ant-design/plots';

const LiquidChart = () => {
  const config = {
    percent: 0.3,
    style: {
      backgroundFill: 'pink',
    },
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ color: 'white', textAlign: 'center' }}>Havsnivåförändringar</h2>
      <Liquid {...config} />
    </div>
  );
};

export default LiquidChart;
