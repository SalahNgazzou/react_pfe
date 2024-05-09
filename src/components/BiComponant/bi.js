import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';

const GraphComponent = () => {
  const [chart, setChart] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Récupérer les données depuis l'API RESTful
        const response = await fetch('http://localhost:8000/api/bi');
        const data = await response.json();

        // Création du graphique
        const ctx = document.getElementById('myChart').getContext('2d');
        const newChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['À vendre', 'À louer'],
            datasets: [{
              label: 'Nombre de biens',
              data: [data.nombre_de_biens_a_vendre, data.nombre_de_biens_a_louer],
              backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
              borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
        setChart(newChart);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // Nettoyer le graphique lors du démontage du composant
    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, []);

  return (
    <div>
      <canvas id="myChart" width="400" height="200"></canvas>
    </div>
  );
}

export default GraphComponent;
