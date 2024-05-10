import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export const GraphComponent = () => {
  const chartRef = useRef(null); // Ref to the canvas element

  useEffect(() => {
    // Initialize the chart inside useEffect
    const ctx = chartRef.current.getContext("2d");
    const newChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Villa', 'Appartement', 'Duplex', 'Terrain', 'Local commercial', 'Parking/Garage', 'usine', 'Entropot','Immeuble'],
        datasets: [{
          label: 'Type de bien le plus vendu',
          data: [28, 48, 40, 19, 96, 27, 100, 70,90],
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)'
        }]
      },
      options: {
        elements: {
          line: {
            borderWidth: 3
          }
        }
      }
    });

    // Cleanup function to destroy the chart when component unmounts
    return () => {
      newChart.destroy();
    };
  }, []);

  return (
    <div>
      <canvas ref={chartRef} width="400" height="100"></canvas>
    </div>
  );
};
