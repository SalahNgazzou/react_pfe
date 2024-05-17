import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export const GraphComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Fonction pour récupérer les données de l'API
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/bi/typesBiensLesPlusVendus');
        const data = await response.json();

        // Données récupérées de l'API
        const chartData = [
          data.nombre_villas_vendues,
          data.nombre_appartements_vendues,
          data.nombre_duplex_vendues,
          data.nombre_terrain_vendues,
          data.nombre_LocalCommercial_vendues,
          data.nombre_parking_vendues,
          data.nombre_usine_vendues,
          data.nombre_entrepot_vendues,
          data.nombre_immeuble_vendues
        ];

        // Initialiser le graphique avec les données récupérées
        const ctx = chartRef.current.getContext('2d');
        const newChart = new Chart(ctx, {
          type: 'radar',
          data: {
            labels: ['Villa', 'Appartement', 'Duplex', 'Terrain', 'Local commercial', 'Parking/Garage', 'Usine', 'Entrepot', 'Immeuble'],
            datasets: [{
              label: 'Type de bien le plus vendu',
              data: chartData,
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
      } catch (error) {
        console.error('Erreur:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <canvas ref={chartRef} width="400" height="100"></canvas>
    </div>
  );
};


