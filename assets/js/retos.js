// retos.js - Lógica para la evaluación de retos de alta dificultad

const TOTAL_PREGUNTAS_RETO = 10;
const TIEMPO_MINUTOS_RETO = 15;

// Estado del examen
let preguntasExamen = [];
let respuestasUsuario = [];
let timerInterval = null;
let tiempoRestante = TIEMPO_MINUTOS_RETO * 60;

// Función auxiliar para mezclar array (Fisher-Yates)
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Barajar opciones de una pregunta (ya está en examEngine.js, pero la incluimos por si no se usa)
function barajarOpciones(pregunta) {
  const nuevaPregunta = JSON.parse(JSON.stringify(pregunta));
  const opcionesOriginales = nuevaPregunta.opciones;
  const indiceCorrectoOriginal = nuevaPregunta.respuesta_correcta;
  const opcionCorrectaTexto = opcionesOriginales[indiceCorrectoOriginal];
  const opcionesMezcladas = shuffleArray(opcionesOriginales);
  const nuevoIndiceCorrecto = opcionesMezcladas.findIndex(op => op === opcionCorrectaTexto);
  nuevaPregunta.opciones = opcionesMezcladas;
  nuevaPregunta.respuesta_correcta = nuevoIndiceCorrecto;
  return nuevaPregunta;
}

// Generar examen con preguntas aleatorias
function generarExamenReto() {
  const banco = RETO_PREGUNTAS;
  if (banco.length === 0) {
    alert("El banco de preguntas de retos está vacío. Contacta al administrador.");
    return [];
  }
  const seleccionadas = shuffleArray(banco).slice(0, TOTAL_PREGUNTAS_RETO);
  return seleccionadas.map(p => barajarOpciones(p));
}

// Renderizar examen
function renderizarExamen() {
  const container = document.getElementById('view-exam');
  let html = `<div class="bg-white rounded-xl shadow-lg p-6">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-xl font-bold text-[#003366]">Reto de Alta Dificultad</h2>
      <div class="bg-gray-100 px-4 py-1 rounded-full text-lg font-mono font-bold" id="timer-display">${TIEMPO_MINUTOS_RETO}:00</div>
    </div>
    <div id="preguntas-container" class="space-y-8">`;
  
  preguntasExamen.forEach((p, idx) => {
    html += `<div class="border-b pb-6">
      <p class="font-medium text-gray-800 mb-3"><span class="text-[#003366] font-bold">${idx+1}.</span> ${p.enunciado}</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">`;
    p.opciones.forEach((op, optIdx) => {
      html += `<label class="quiz-option flex items-center p-3 border rounded-lg cursor-pointer">
        <input type="radio" name="preg-${idx}" value="${optIdx}" class="mr-3 w-4 h-4 text-[#003366]">
        <span>${String.fromCharCode(65+optIdx)}) ${op}</span></label>`;
    });
    html += `</div></div>`;
  });
  
  html += `</div>
    <div class="flex justify-end mt-6">
      <button id="btn-finalizar" class="bg-[#003366] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800">Finalizar y Ver Resultados</button>
    </div>
  </div>`;
  container.innerHTML = html;

  // Registrar respuestas
  document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      const idx = parseInt(e.target.name.split('-')[1]);
      respuestasUsuario[idx] = parseInt(e.target.value);
    });
  });
  document.getElementById('btn-finalizar').addEventListener('click', calcularYMostrarResultados);
}

// Temporizador
function iniciarTemporizador() {
  tiempoRestante = TIEMPO_MINUTOS_RETO * 60;
  actualizarDisplayTiempo();
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    tiempoRestante--;
    actualizarDisplayTiempo();
    if (tiempoRestante <= 0) {
      clearInterval(timerInterval);
      alert('¡Tiempo terminado!');
      calcularYMostrarResultados();
    }
  }, 1000);
}

function actualizarDisplayTiempo() {
  const min = Math.floor(tiempoRestante / 60);
  const seg = tiempoRestante % 60;
  const display = document.getElementById('timer-display');
  if (display) {
    display.textContent = `${min.toString().padStart(2,'0')}:${seg.toString().padStart(2,'0')}`;
    if (tiempoRestante <= 600) display.classList.add('text-red-600');
  }
}

// Corrección y resultados
function calcularYMostrarResultados() {
  if (timerInterval) clearInterval(timerInterval);
  
  let aciertos = 0;
  preguntasExamen.forEach((p, i) => {
    if (respuestasUsuario[i] === p.respuesta_correcta) aciertos++;
  });
  const total = preguntasExamen.length;
  const puntaje = Math.round((aciertos / total) * 1000);
  
  const detalleUnidades = {};
  preguntasExamen.forEach((p, i) => {
    const unidad = p.unidad || (p.asignatura ? p.asignatura : "General");
    if (!detalleUnidades[unidad]) detalleUnidades[unidad] = { aciertos: 0, total: 0 };
    detalleUnidades[unidad].total++;
    if (respuestasUsuario[i] === p.respuesta_correcta) detalleUnidades[unidad].aciertos++;
  });
  
  const resultado = { aciertos, total, puntaje, detalleUnidades };
  mostrarResultados(resultado);
}

function mostrarResultados(resultado) {
  document.getElementById('view-home').classList.add('hidden');
  document.getElementById('view-exam').classList.add('hidden');
  document.getElementById('view-results').classList.remove('hidden');
  
  let mensaje = "";
  if (resultado.puntaje >= 900) mensaje = "🏆 ¡Excelente! Dominas los temas más complejos.";
  else if (resultado.puntaje >= 700) mensaje = "👍 Muy bien, sigue practicando para alcanzar la perfección.";
  else mensaje = "📚 Necesitas reforzar conceptos avanzados. ¡Persevera!";
  
  let html = `<div class="bg-white rounded-xl shadow-lg p-8">
    <h2 class="text-2xl font-bold text-[#003366] mb-6">Resultados del Reto</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="bg-gray-50 p-6 rounded-lg">
        <h3 class="text-lg font-semibold mb-4">Resumen</h3>
        <p class="text-3xl font-bold text-[#003366]">${resultado.aciertos} / ${resultado.total}</p>
        <p class="text-gray-600 mt-2">Puntaje: <span class="font-bold">${resultado.puntaje}</span> / 1000</p>
        <div class="mt-4 p-3 rounded-lg bg-blue-100 text-blue-800">
          <i class="fas fa-info-circle mr-2"></i> ${mensaje}
        </div>
        <div class="mt-6 flex space-x-4">
          <button id="btn-descargar" class="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800"><i class="fas fa-download mr-2"></i>Descargar JSON</button>
          <button onclick="location.reload()" class="border border-[#003366] text-[#003366] px-4 py-2 rounded-lg hover:bg-gray-50">Nuevo Reto</button>
        </div>
      </div>
      <div>
        <h3 class="text-lg font-semibold mb-4">Desempeño por Unidad</h3>
        <canvas id="radar-chart" width="400" height="400"></canvas>
      </div>
    </div>
    <div class="mt-8 flex justify-center"><div style="width:250px;height:150px"><canvas id="gauge-chart"></canvas></div></div>
  </div>`;
  document.getElementById('view-results').innerHTML = html;
  
  if (typeof dibujarRadar === 'function') dibujarRadar('radar-chart', resultado.detalleUnidades);
  if (typeof dibujarVelocimetro === 'function') dibujarVelocimetro('gauge-chart', resultado.puntaje, 700);
  
  document.getElementById('btn-descargar').addEventListener('click', () => {
    const informe = {
      tipo: "Reto de alta dificultad",
      aciertos: resultado.aciertos,
      total: resultado.total,
      puntaje: resultado.puntaje,
      detalleUnidades: resultado.detalleUnidades,
      respuestas: preguntasExamen.map((p, i) => ({
        pregunta: p.id,
        respuesta: respuestasUsuario[i],
        correcta: p.respuesta_correcta,
        enunciado: p.enunciado
      }))
    };
    const blob = new Blob([JSON.stringify(informe, null, 2)], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `reto_${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  });
}

// Inicializar evento del botón
document.getElementById('btn-iniciar-reto').addEventListener('click', () => {
  const banco = RETO_PREGUNTAS;
  if (banco.length === 0) {
    alert("El banco de preguntas de retos está vacío. Por favor, cargue las preguntas primero.");
    return;
  }
  preguntasExamen = generarExamenReto();
  respuestasUsuario = new Array(preguntasExamen.length).fill(null);
  document.getElementById('view-home').classList.add('hidden');
  document.getElementById('view-exam').classList.remove('hidden');
  renderizarExamen();
  iniciarTemporizador();
});