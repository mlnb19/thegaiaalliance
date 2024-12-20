import React, { useState, useEffect } from 'react';
import { Liquid } from '@ant-design/plots';

const LiquidChart = () => {
  const [seaLevelData, setSeaLevelData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Ladda JSON-data (kontrollera att filen är korrekt länkad)
    fetch('/data/SeaLevel.json')
      .then((response) => response.json())
      .then((data) => {
        // Filtrera data för var tionde år
        const filteredData = data.filter((item) => {
          const year = parseInt(item.Time.split('-')[0]);
          return year % 10 === 0;
        });
        setSeaLevelData(filteredData);
      });
  }, []);

  if (seaLevelData.length === 0) return <div style={{ color: 'white' }}>Loading...</div>;

  // Hämta aktuell datapunkt
  const currentData = seaLevelData[currentIndex];

  // Normalisering för Liquid-diagrammet
  const minGMSL = Math.min(...seaLevelData.map((d) => d.GMSL));
  const maxGMSL = Math.max(...seaLevelData.map((d) => d.GMSL));
  const normalizedPercent = (currentData?.GMSL - minGMSL) / (maxGMSL - minGMSL);

  // Konfiguration för Liquid-diagrammet
  const config = {
    percent: normalizedPercent, // Vätskans nivå baserat på data
    shape: 'circle',
    outline: {
      border: 4,
      distance: 8,
    },
    wave: {
      length: 128,
    },
    style: {
      backgroundImage: 'url(/images/logo.svg)', // Lägger till bakgrundsbild
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      borderRadius: '10px',
    },
    statistic: {
      title: {
        formatter: () => `År ${currentData?.Time.split('-')[0]}`,
        style: { color: 'white', fontSize: '20px' },
      },
      content: {
        formatter: () => `${currentData?.GMSL.toFixed(1)} mm`, // Visa i millimeter
        style: { color: 'white', fontSize: '16px' },
      },
    },
    theme: {
      color: '#3b82f6', // Grundfärg för vätskan
    },
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ color: 'white', textAlign: 'center' }}>Havsnivåförändringar</h2>
      <Liquid {...config} />
      <input
        type="range"
        min="0"
        max={seaLevelData.length - 1}
        value={currentIndex}
        onChange={(e) => setCurrentIndex(parseInt(e.target.value))}
        style={{ width: '100%', marginTop: '20px' }}
      />
    </div>
  );
};

export default LiquidChart;
