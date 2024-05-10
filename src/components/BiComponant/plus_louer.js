import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export const PlusLouer = () => {
  const chartRef = useRef(null); // Ref to the canvas element

  useEffect(() => {
    // Initialize the chart inside useEffect
    const ctx = chartRef.current.getContext("2d");
    const newChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Villa', 'Appartement', 'Duplex', 'Terrain', 'Local commercial', 'Parking/Garage', 'usine', 'Entropot','Immeuble'],
        datasets: [{
          label: 'Type de bien le plus Louer',
          data: [30, 80, 14, 95, 3, 27, 80, 60,50],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)', // Nouvelle couleur pour la zone de remplissage
          borderColor: 'rgb(255, 99, 132)', // Nouvelle couleur de la bordure
          pointBackgroundColor: 'rgb(255, 99, 132)', // Nouvelle couleur des points
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
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
