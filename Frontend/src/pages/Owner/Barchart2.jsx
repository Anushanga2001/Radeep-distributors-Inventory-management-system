import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

function BarChart2() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/get_reports5')
      .then(response => response.json())
      .then(data => {
        setData(data);

        const labels = data.map(item => item.itemName);
        const quantities = data.map(item => item.totalQuantity);

        const chart = new Chart(document.getElementById('chart'), {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: 'Available Quantity',
              data: quantities,
              backgroundColor: 'rgba(0, 123, 255, 0.5)',
              borderColor: 'rgba(0, 123, 255, 1)',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div id="chart-container" style={{backgroundColor: "rgba(51, 51, 51, 0.1)", borderRadius: "10px", color: "white", height: "420px", width: "700px", padding: "10px", paddingTop: "40px"}}>
      <center><h2>Each Item Available Quantity in the Stock</h2></center>
      <div style={{height: "fit-content"}}>
      <canvas id="chart"></canvas>
      </div>
    </div>
  );
}

export default BarChart2;
