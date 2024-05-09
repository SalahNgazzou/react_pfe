import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';

export const TypeDemander = () => {
  const [chart, setChart] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Récupérer les données depuis l'API RESTful
        const response = await fetch('http://localhost:8000/api/bi/type_demander');
        const data = await response.json();
        const customColors = [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(100, 200, 50, 0.2)',
            'rgba(200, 50, 150, 0.2)',
            'rgba(50, 100, 200, 0.2)'
          ];

        // Création du graphique
        const ctx = document.getElementById('type_demander').getContext('2d');
        const newChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Villa', 'Appartement','Terrain','Immeuble','Duplex','Local_Commercial','Usine','Parking/Garage','Entropot'],
            datasets: [{
              label: 'les types des biens le plus demander',
              data: [data.villa, data.appartement,data.terrain,data.immeuble,data.duplex,data.local_commercial,data.usine,data.parking_garage,data.entropot],
              backgroundColor:  customColors,
              borderColor: customColors,
              borderWidth: 1
            }]
          },
          options: {
            indexAxis: 'y',
            scales: {
              y: {
                ticks: {
                  crossAlign: 'far',
                }
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
      <canvas id="type_demander" width="450" height="300"></canvas>
    </div>
  );
}


