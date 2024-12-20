
import React, { useState, useEffect } from "react";
import { Liquid } from "@ant-design/charts";
import Slider from "@mui/material/Slider";

const LiquidChart = () => {
  const [seaLevelData, setSeaLevelData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('./data/SeaLevel .json')
      .then(response => response.json())
      .then(data => {
        // Filter data for every 10 years
        const filteredData = data.filter((item, index) => {
          const year = parseInt(item.Time.split('-')[0]);
          return year % 10 === 0;
        });
        setSeaLevelData(filteredData);
      });
  }, []);

  if (seaLevelData.length === 0) return <div>Loading...</div>;

  const currentData = seaLevelData[currentIndex];

  const config = {
    percent: 0.55,
    shape: "circle",
    outline: { border: 4, distance: 8 },
    wave: { length: 128 },
    theme: { color: currentData?.GMSL >= 0 ? "#3b82f6" : "#ef4444" },
    statistic: {
      title: {
        formatter: () => `År ${currentData?.Time.split("-")[0]}`,
        style: { color: "white", fontSize: "20px" },
      },
      content: {
        formatter: () => `${currentData?.GMSL.toFixed(1)} mm`,
        style: { color: "white", fontSize: "16px" },
      },
    },
  };

  const handleSliderChange = (event, newValue) => {
    setCurrentIndex(newValue);
  };

  const sliderMarks = seaLevelData.map((data, index) => ({
    value: index,
    label: data.Time.split("-")[0],
  }));

  return (
    <div style={{ background: "#111", padding: "20px", borderRadius: "10px" }}>
      <h2 style={{ color: "white", textAlign: "center" }}>Sea Level Changes</h2>
      <Liquid {...config} />
      <div style={{ marginTop: "20px" }}>
        <Slider
          value={currentIndex}
          min={0}
          max={seaLevelData.length - 1}
          step={1}
          marks={sliderMarks}
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
          sx={{
            color: "#3b82f6",
            "& .MuiSlider-markLabel": { 
              color: "white",
              fontSize: "12px",
              transform: "rotate(-45deg)",
              transformOrigin: "top left"
            },
          }}
        />
      </div>
    </div>
  );
};

export default LiquidChart;
