import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export const PieChart = () => {
  const pieRef = useRef(null); // Ref to the canvas element

  useEffect(() => {
    // Initialize the chart inside useEffect
    const ctx = pieRef.current.getContext("2d");
    const newChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['A vendre', 'ALouer'],
        datasets: [{
            label: 'Catégorie le plus demander',
            data: [ 50, 100],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              
            ],
            hoverOffset: 4
        }]
      }
    });

    // Cleanup function to destroy the chart when component unmounts
    return () => {
      newChart.destroy();
    };
  }, []);

  return (
    <div>
      <canvas ref={pieRef} width="250" height="250"></canvas>
    </div>
  );
};
