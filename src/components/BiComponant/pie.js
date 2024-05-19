import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export const PieChart = () => {
  const pieRef = useRef(null);
  const [chartData, setChartData] = useState([0, 0]);

  useEffect(() => {
    // Fonction pour récupérer les données de l'API
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/bi/categorieDemander');
        const data = await response.json();

        // Mettre à jour les données du graphique
        setChartData([data.bien_avendre, data.bien_alouer]);
      } catch (error) {
        console.error('Erreur:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Initialiser le graphique avec les données mises à jour
    const ctx = pieRef.current.getContext("2d");
    const newChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['A louer', 'A Vendre'],
        datasets: [{
          label: 'Catégorie le plus demander',
          data: chartData,
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
  }, [chartData]);

  return (
    <div>
      <canvas ref={pieRef} width="250" height="250"></canvas>
    </div>
  );
};
