import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export const PlusLouer = () => {
  const chartRef = useRef(null); // Ref to the canvas element

  useEffect(() => {
    // Fonction pour récupérer les données de l'API
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/bi/typesBiensLesPluslouer');
        const data = await response.json();

        // Données récupérées de l'API
        const chartData = [
          data.nombre_villas_Louée,
          data.nombre_appartements_Louée,
          data.nombre_duplex_Louée,
          data.nombre_terrain_Louée,
          data.nombre_LocalCommercial_Louée,
          data.nombre_parking_Louée,
          data.nombre_usine_Louée,
          data.nombre_entrepot_Louée,
          data.nombre_immeuble_Louée
        ];

        // Initialiser le graphique avec les données récupérées
        const ctx = chartRef.current.getContext('2d');
        const newChart = new Chart(ctx, {
          type: 'radar',
          data: {
            labels: ['Villa', 'Appartement', 'Duplex', 'Terrain', 'Local commercial', 'Parking/Garage', 'Usine', 'Entrepot', 'Immeuble'],
            datasets: [{
              label: 'Type de bien le plus louée',
              data: chartData,
              fill: true,
              backgroundColor: 'rgba(255, 99, 132, 0.2)', // Changer la couleur de fond
              borderColor: 'rgb(255, 99, 132)', // Changer la couleur de bordure
              pointBackgroundColor: 'rgb(255, 99, 132)', // Changer la couleur des points
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
