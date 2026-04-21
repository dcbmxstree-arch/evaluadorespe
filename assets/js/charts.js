// charts.js

let radarChartInstance = null;
let gaugeChartInstance = null;

/**
 * Dibuja una gráfica de radar con el desempeño por unidad.
 * @param {string} canvasId - ID del elemento canvas
 * @param {Object} detalleUnidades - Objeto { "unidad": {aciertos, total} }
 */
function dibujarRadar(canvasId, detalleUnidades) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  const labels = Object.keys(detalleUnidades);
  const porcentajes = labels.map(unidad => {
    const { aciertos, total } = detalleUnidades[unidad];
    return total > 0 ? (aciertos / total) * 100 : 0;
  });

  if (radarChartInstance) {
    radarChartInstance.destroy();
  }

  radarChartInstance = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Porcentaje de aciertos',
        data: porcentajes,
        backgroundColor: 'rgba(0, 51, 102, 0.2)',
        borderColor: '#003366',
        borderWidth: 2,
        pointBackgroundColor: '#003366'
      }]
    },
    options: {
      scales: {
        r: {
          beginAtZero: true,
          max: 100,
          ticks: { stepSize: 20 }
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.raw.toFixed(1)}%`
          }
        }
      }
    }
  });
}

/**
 * Dibuja un velocímetro (gauge) para mostrar el puntaje simulado.
 * @param {string} canvasId - ID del canvas
 * @param {number} puntajeTotal - Puntaje simulado (0-1000)
 * @param {number} puntajeMinimo - Puntaje mínimo de la carrera
 */
function dibujarVelocimetro(canvasId, puntajeTotal, puntajeMinimo) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  if (gaugeChartInstance) {
    gaugeChartInstance.destroy();
  }

  let colorZona;
  if (puntajeTotal >= puntajeMinimo) {
    colorZona = '#10b981';
  } else if (puntajeTotal >= puntajeMinimo - 50) {
    colorZona = '#f59e0b';
  } else {
    colorZona = '#ef4444';
  }

  gaugeChartInstance = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Puntaje', 'Restante'],
      datasets: [{
        data: [puntajeTotal, 1000 - puntajeTotal],
        backgroundColor: [colorZona, '#e5e7eb'],
        borderWidth: 0
      }]
    },
    options: {
      circumference: 180,
      rotation: 270,
      cutout: '70%',
      plugins: {
        tooltip: { enabled: false },
        legend: { display: false }
      }
    }
  });
}