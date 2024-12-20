
import { Rose } from '@ant-design/plots';
import React, { useState, useEffect } from 'react';

const SeaLevelChart = () => {
  const [seaLevelData, setSeaLevelData] = useState([]);

  useEffect(() => {
    fetch('/data/SeaLevel.json')
      .then(response => response.json())
      .then(data => {
        const formattedData = data
          .filter(item => parseInt(item.Time.split('-')[0]) % 10 === 0)
          .map(item => ({
            year: item.Time.split('-')[0],
            value: Math.abs(item.GMSL),
            category: 'Sea Level'
          }));
        setSeaLevelData(formattedData);
      });
  }, []);

  const config = {
    data: seaLevelData,
    xField: 'year',
    yField: 'value',
    colorField: 'year',
    radius: 0.9,
    theme: {
      defaultColor: '#73A5C6',
    },
    color: ['#73A5C6', '#1E3F66'],
    tooltip: {
      formatter: (datum) => {
        return { name: 'Sea Level Change', value: `${datum.value.toFixed(1)} mm` };
      },
    },
    legend: false,
    interactions: [{ type: 'element-active' }],
  };

  return <Rose {...config} />;
};

export default SeaLevelChart;
