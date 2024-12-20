
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
      backgroundFill: "url('/images/ocean.svg')",
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
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', background: 'black'}}>
      <h2 style={{ color: 'white', textAlign: 'center' }}>Havsnivåförändringar</h2>
      <Liquid {...config} />
      <div style={{ textAlign: 'center', marginTop: '20px', color: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          {seaLevelData.map((data, index) => (
            <span key={index} style={{ fontSize: '12px' }}>
              {data.Time.split('-')[0]}
            </span>
          ))}
        </div>
        <input
          type="range"
          min="0"
          max={seaLevelData.length - 1}
          value={currentIndex}
          onChange={(e) => setCurrentIndex(parseInt(e.target.value))}
          style={{ width: '100%' }}
        />
        <div style={{ marginTop: '20px', textAlign: 'left', padding: '20px', background: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: '10px' }}>Current Data:</h3>
          <p>Year: {currentData.Time.split('-')[0]}</p>
          <p>GMSL: {currentData.GMSL.toFixed(1)} mm</p>
          <p>Uncertainty: ±{currentData['GMSL uncertainty'].toFixed(1)} mm</p>
        </div>
      </div>
    </div>
  );
};

export default LiquidChart;
