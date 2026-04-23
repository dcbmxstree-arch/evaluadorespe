// charts.js
let radarChartInstance = null;
let gaugeChartInstance = null;

function dibujarRadar(canvasId, detalleUnidades) {
  const ctx = document.getElementById(canvasId)?.getContext('2d');
  if (!ctx) return;
  const labels = Object.keys(detalleUnidades);
  const data = labels.map(u => (detalleUnidades[u].aciertos / detalleUnidades[u].total) * 100);
  if (radarChartInstance) radarChartInstance.destroy();
  radarChartInstance = new Chart(ctx, {
    type: 'radar',
    data: {
      labels,
      datasets: [{ label: '% Aciertos', data, backgroundColor: 'rgba(0,51,102,0.2)', borderColor: '#003366', borderWidth: 2 }]
    },
    options: { scales: { r: { beginAtZero: true, max: 100 } } }
  });
}

function dibujarVelocimetro(canvasId, puntaje, minimo) {
  const ctx = document.getElementById(canvasId)?.getContext('2d');
  if (!ctx) return;
  const color = puntaje >= minimo ? '#10b981' : (puntaje >= minimo - 50 ? '#f59e0b' : '#ef4444');
  if (gaugeChartInstance) gaugeChartInstance.destroy();
  gaugeChartInstance = new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [puntaje, 1000 - puntaje],
        backgroundColor: [color, '#e5e7eb'],
        borderWidth: 0
      }]
    },
    options: {
      circumference: 180,
      rotation: 270,
      cutout: '70%',
      plugins: { tooltip: { enabled: false }, legend: { display: false } }
    }
  });
}
