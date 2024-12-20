
import React, { useState, useEffect } from 'react';
import { Liquid } from '@ant-design/plots';

const LiquidChart = () => {
  const [seaLevelData, setSeaLevelData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('/data/SeaLevel%20.json')
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data.filter((item) => {
          const year = parseInt(item.Time.split('-')[0]);
          return year % 10 === 0;
        });
        setSeaLevelData(filteredData);
      });
  }, []);

  if (seaLevelData.length === 0) return <div style={{ color: 'white' }}>Loading...</div>;

  const currentData = seaLevelData[currentIndex];
  const minGMSL = Math.min(...seaLevelData.map(d => d.GMSL));
  const maxGMSL = Math.max(...seaLevelData.map(d => d.GMSL));
  const normalizedPercent = (currentData?.GMSL - minGMSL) / (maxGMSL - minGMSL);

  const config = {
    percent: normalizedPercent,
    style: {
      backgroundFill: 'pink',
    },
    statistic: {
      title: {
        formatter: () => currentData?.Time.split('-')[0],
        style: {
          color: '#fff',
          fontSize: '20px',
        },
      },
      content: {
        formatter: () => `${currentData?.GMSL.toFixed(1)} mm`,
        style: {
          color: '#fff',
          fontSize: '16px',
        },
      },
    },
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ color: 'white', textAlign: 'center' }}>Havsnivåförändringar</h2>
      <div style={{ color: 'white', textAlign: 'center', marginBottom: '20px' }}>
        <p>År: {currentData?.Time.split('-')[0]}</p>
        <p>Global havsnivå (GMSL): {currentData?.GMSL.toFixed(1)} mm</p>
        <p>Osäkerhetsmarginal: ±{currentData?.['GMSL uncertainty'].toFixed(1)} mm</p>
        <p>Totalt förändring sedan 1880: {(currentData?.GMSL - seaLevelData[0]?.GMSL).toFixed(1)} mm</p>
      </div>
      <Liquid {...config} />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <input
          type="range"
          min="0"
          max={seaLevelData.length - 1}
          value={currentIndex}
          onChange={(e) => setCurrentIndex(parseInt(e.target.value))}
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
};

export default LiquidChart;
