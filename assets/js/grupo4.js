// grupo4.js - Lógica para el Grupo 4 (Álgebra + Física integrado)
// con integración de preguntas complejas en diagnóstico y final

// Unificar bancos de preguntas normales (Álgebra + Física)
const BANCO_GRUPO4 = (typeof GRUPO4_ALGEBRA_01 !== 'undefined' ? GRUPO4_ALGEBRA_01 : [])
  .concat(typeof GRUPO4_FISICA_01 !== 'undefined' ? GRUPO4_FISICA_01 : []);

// Banco de preguntas complejas (solo Álgebra)
const COMPLEJAS = typeof GRUPO4_ALGEBRA_COMPLEJAS !== 'undefined' ? GRUPO4_ALGEBRA_COMPLEJAS : [];

// Configuración de modalidades
const MODALIDAD_CONFIG = {
  diagnostico: { preguntas: 30, tiempo: 90 },
  semanal: { preguntas: 15, tiempo: 30 },
  acumulado: {
    3: { preguntas: 20, tiempo: 40 },
    6: { preguntas: 25, tiempo: 60 },
    8: { preguntas: 35, tiempo: 90 },
    default: { preguntas: 25, tiempo: 60 }
  },
  final: { preguntas: 30, tiempo: 85 }
};

// Requisitos mínimos para diagnóstico (opcional, puede ajustarse)
const REQUISITOS_DIAGNOSTICO = {
  "4.1 Definición de relación y función. Dominio y Rango": 2,
  "3.4 Valor absoluto": 2,
  "1.1 Sistemas de medida (SI e inglés)": 2
};

// Estado global
const AppState = {
  estudiante: { nombre: 'Estudiante', notaColegio: 8.5, carrera: '', carreraId: 18 },
  config: { modalidad: '', semana: 1, numPreguntas: 15, tiempoMinutos: 30, dificultad: null },
  examenActual: [],
  respuestasUsuario: [],
  timerInterval: null,
  tiempoRestante: 0
};

document.addEventListener('DOMContentLoaded', () => {
  renderizarCronograma();
  configurarListeners();
});

function renderizarCronograma() {
  const container = document.getElementById('cronograma-container');
  if (!container) return;
  let html = '<div class="bg-white rounded-xl shadow-md overflow-hidden"><div class="overflow-x-auto"><table class="w-full text-sm"><thead class="bg-gray-50"><tr><th class="px-4 py-2 text-left">Semana</th><th class="px-4 py-2 text-left">Temas (Álgebra + Física)</th></tr></thead><tbody>';
  for (let s = 1; s <= 10; s++) {
    const temas = CRONOGRAMA_GRUPO4[s] || [];
    html += `<tr class="border-b"><td class="px-4 py-2 font-medium">Semana ${s}</td><td class="px-4 py-2">${temas.join(', ')}</td></tr>`;
  }
  html += '</tbody></table></div></div>';
  container.innerHTML = html;
}

function configurarListeners() {
  const modalidadSelect = document.getElementById('modalidad-select');
  const semanaContainer = document.getElementById('semana-container');
  const tiempoInfo = document.getElementById('tiempo-info');
  const numPreguntasSpan = document.getElementById('num-preguntas');
  const tiempoExamenSpan = document.getElementById('tiempo-examen');

  modalidadSelect.addEventListener('change', () => {
    const mod = modalidadSelect.value;
    if (mod === 'semanal' || mod === 'acumulado') semanaContainer.classList.remove('hidden');
    else semanaContainer.classList.add('hidden');
    if (mod) {
      tiempoInfo.classList.remove('hidden');
      let config;
      if (mod === 'acumulado') {
        const s = parseInt(document.getElementById('semana-select').value);
        config = MODALIDAD_CONFIG.acumulado[s] || MODALIDAD_CONFIG.acumulado.default;
      } else config = MODALIDAD_CONFIG[mod];
      numPreguntasSpan.textContent = config.preguntas + ' preguntas';
      tiempoExamenSpan.textContent = config.tiempo + ' min';
    } else tiempoInfo.classList.add('hidden');
  });

  document.getElementById('semana-select')?.addEventListener('change', () => {
    if (modalidadSelect.value === 'acumulado') {
      const s = parseInt(document.getElementById('semana-select').value);
      const config = MODALIDAD_CONFIG.acumulado[s] || MODALIDAD_CONFIG.acumulado.default;
      numPreguntasSpan.textContent = config.preguntas + ' preguntas';
      tiempoExamenSpan.textContent = config.tiempo + ' min';
    }
  });

  document.getElementById('form-simulador').addEventListener('submit', (e) => {
    e.preventDefault();
    iniciarSimulador();
  });
}

function iniciarSimulador() {
  const carrera = document.getElementById('carrera-select').value;
  const notaColegio = parseFloat(document.getElementById('nota-colegio').value);
  const modalidad = document.getElementById('modalidad-select').value;
  const semana = parseInt(document.getElementById('semana-select').value) || 1;

  if (!carrera || !modalidad) {
    alert('Complete todos los campos.');
    return;
  }
  if (!PERFILES_INGRESO[carrera]) {
    alert(`La carrera "${carrera}" no está registrada en los perfiles de ingreso.`);
    return;
  }

  AppState.estudiante.carrera = carrera;
  AppState.estudiante.carreraId = 18;
  AppState.estudiante.notaColegio = notaColegio;
  AppState.config.modalidad = modalidad;
  AppState.config.semana = semana;
  AppState.config.dificultad = modalidad === 'final' ? ['media', 'alta'] : null;

  const subtemas = obtenerSubtemasEvaluacionGrupo4(modalidad, semana);
  mostrarPrevisualizacion(subtemas, modalidad, semana);
}

function obtenerSubtemasEvaluacionGrupo4(modalidad, semana) {
  if (modalidad === 'diagnostico' || modalidad === 'final') {
    let todos = [];
    for (let i = 1; i <= 10; i++) todos = todos.concat(CRONOGRAMA_GRUPO4[i]);
    return [...new Set(todos)];
  }
  if (modalidad === 'semanal') return CRONOGRAMA_GRUPO4[semana] || [];
  if (modalidad === 'acumulado') {
    let acum = [];
    for (let i = 1; i <= semana; i++) acum = acum.concat(CRONOGRAMA_GRUPO4[i]);
    return [...new Set(acum)];
  }
  return [];
}

function mostrarPrevisualizacion(subtemas, modalidad, semana) {
  document.getElementById('view-home').classList.add('hidden');
  document.getElementById('view-preview').classList.remove('hidden');
  document.getElementById('view-exam').classList.add('hidden');
  document.getElementById('view-results').classList.add('hidden');

  let html = `<div class="bg-white rounded-xl shadow-lg p-8"><h2 class="text-2xl font-bold text-[#003366] mb-4">📋 Temas a Evaluar</h2><p class="mb-4 text-gray-600">Modalidad: <strong>${modalidad.toUpperCase()}</strong> ${modalidad === 'acumulado' ? 'hasta semana ' + semana : ''}</p><div class="bg-blue-50 p-4 rounded-lg mb-6"><ul class="list-disc list-inside space-y-1">`;
  subtemas.forEach(t => { html += `<li>${t}</li>`; });
  html += `</ul></div><div class="flex justify-between"><button onclick="window.location.reload()" class="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">Cancelar</button><button id="btn-comenzar-examen" class="px-6 py-2 bg-[#003366] text-white rounded-lg hover:bg-blue-800">Comenzar Examen</button></div></div>`;
  document.getElementById('view-preview').innerHTML = html;
  document.getElementById('btn-comenzar-examen').addEventListener('click', () => comenzarExamen(subtemas));
}

// Función auxiliar para obtener preguntas aleatorias de un banco (sin repetir)
function obtenerPreguntasAleatorias(banco, cantidad) {
  if (banco.length === 0) return [];
  const shuffled = [...banco].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(cantidad, shuffled.length));
}

function comenzarExamen(subtemas) {
  const modalidad = AppState.config.modalidad;
  let config;
  if (modalidad === 'acumulado') config = MODALIDAD_CONFIG.acumulado[AppState.config.semana] || MODALIDAD_CONFIG.acumulado.default;
  else config = MODALIDAD_CONFIG[modalidad];
  AppState.config.numPreguntas = config.preguntas;
  AppState.config.tiempoMinutos = config.tiempo;

  // Filtrar pool normal (Álgebra + Física)
  let pool = BANCO_GRUPO4;
  if (modalidad === 'final') {
    pool = pool.filter(p => p.dificultad === 'media' || p.dificultad === 'alta');
  } else {
    pool = filtrarPreguntas(pool, 4, AppState.estudiante.carreraId, subtemas);
  }

  // --- Integración de preguntas complejas ---
  let preguntasFinal = [];
  let preguntasNormales = [...pool];

  if (modalidad === 'diagnostico') {
    // Tomar 5 complejas al azar
    const complejas = obtenerPreguntasAleatorias(COMPLEJAS, 5);
    preguntasFinal.push(...complejas);
    // Eliminar las complejas del pool normal (por si acaso, aunque los IDs son distintos, no es necesario)
    // El resto se completa con preguntas normales (sin requisitos especiales, pero se pueden añadir requisitos si se desea)
    const necesarias = AppState.config.numPreguntas - preguntasFinal.length;
    if (necesarias > 0) {
      const normales = pool.sort(() => Math.random() - 0.5).slice(0, necesarias);
      preguntasFinal.push(...normales);
    }
  } 
  else if (modalidad === 'final') {
    // Tomar 6 complejas al azar
    const complejas = obtenerPreguntasAleatorias(COMPLEJAS, 6);
    preguntasFinal.push(...complejas);
    const necesarias = AppState.config.numPreguntas - preguntasFinal.length;
    if (necesarias > 0) {
      const normales = pool.sort(() => Math.random() - 0.5).slice(0, necesarias);
      preguntasFinal.push(...normales);
    }
  }
  else {
    // Semanal o acumulado: solo preguntas normales
    if (modalidad === 'diagnostico' && false) {} // ya cubierto
    else {
      preguntasFinal = generarExamen(pool, AppState.config.numPreguntas);
    }
  }

  // Si aún no se ha generado (caso semanal/acumulado), generamos examen normal
  if (preguntasFinal.length === 0) {
    preguntasFinal = generarExamen(pool, AppState.config.numPreguntas);
  }

  // Barajar opciones de todas las preguntas (por si acaso se usa directamente sin generarExamen)
  preguntasFinal = preguntasFinal.map(p => barajarOpciones(p));

  // Si falta alguna pregunta (por falta de pool), ajustar
  if (preguntasFinal.length < AppState.config.numPreguntas) {
    alert(`Solo hay ${preguntasFinal.length} preguntas disponibles. Se ajustará el número.`);
    AppState.config.numPreguntas = preguntasFinal.length;
  } else if (preguntasFinal.length > AppState.config.numPreguntas) {
    preguntasFinal = preguntasFinal.slice(0, AppState.config.numPreguntas);
  }

  AppState.examenActual = preguntasFinal;
  AppState.respuestasUsuario = new Array(AppState.examenActual.length).fill(null);
  renderizarExamen();
  iniciarTemporizador();
}

function renderizarExamen() {
  document.getElementById('view-home').classList.add('hidden');
  document.getElementById('view-preview').classList.add('hidden');
  document.getElementById('view-exam').classList.remove('hidden');
  document.getElementById('view-results').classList.add('hidden');

  let html = `<div class="bg-white rounded-xl shadow-lg p-6"><div class="flex justify-between items-center mb-6"><h2 class="text-xl font-bold text-[#003366]">Examen - ${AppState.estudiante.carrera}</h2><div class="flex items-center space-x-4"><span class="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm">${AppState.config.numPreguntas} preguntas</span><div class="bg-gray-100 px-4 py-1 rounded-full text-lg font-mono font-bold" id="timer-display">${AppState.config.tiempoMinutos}:00</div></div></div><div id="preguntas-container" class="space-y-8">`;
  AppState.examenActual.forEach((p, idx) => {
    html += `<div class="border-b pb-6"><p class="font-medium text-gray-800 mb-3"><span class="text-[#003366] font-bold">${idx+1}.</span> ${p.enunciado}</p><div class="grid grid-cols-1 md:grid-cols-2 gap-3">`;
    p.opciones.forEach((op, optIdx) => {
      html += `<label class="quiz-option flex items-center p-3 border rounded-lg cursor-pointer"><input type="radio" name="preg-${idx}" value="${optIdx}" class="mr-3 w-4 h-4 text-[#003366]"><span>${String.fromCharCode(65+optIdx)}) ${op}</span></label>`;
    });
    html += `</div></div>`;
  });
  html += `</div><div class="flex justify-end mt-6"><button id="btn-finalizar" class="bg-[#003366] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800">Finalizar y Ver Resultados</button></div></div>`;
  document.getElementById('view-exam').innerHTML = html;

  document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      const idx = parseInt(e.target.name.split('-')[1]);
      AppState.respuestasUsuario[idx] = parseInt(e.target.value);
    });
  });
  document.getElementById('btn-finalizar').addEventListener('click', calcularYMostrarResultados);
}

function iniciarTemporizador() {
  AppState.tiempoRestante = AppState.config.tiempoMinutos * 60;
  actualizarDisplayTiempo();
  if (AppState.timerInterval) clearInterval(AppState.timerInterval);
  AppState.timerInterval = setInterval(() => {
    AppState.tiempoRestante--;
    actualizarDisplayTiempo();
    if (AppState.tiempoRestante <= 0) {
      clearInterval(AppState.timerInterval);
      alert('¡Tiempo terminado!');
      calcularYMostrarResultados();
    }
  }, 1000);
}

function actualizarDisplayTiempo() {
  const min = Math.floor(AppState.tiempoRestante / 60);
  const seg = AppState.tiempoRestante % 60;
  const display = document.getElementById('timer-display');
  if (display) {
    display.textContent = `${min.toString().padStart(2,'0')}:${seg.toString().padStart(2,'0')}`;
    if (AppState.tiempoRestante <= 600) display.classList.add('text-red-600');
  }
}

function calcularYMostrarResultados() {
  if (AppState.timerInterval) clearInterval(AppState.timerInterval);
  const resultado = corregirExamen(AppState.examenActual, AppState.respuestasUsuario);
  mostrarResultados(resultado);
}

function mostrarResultados(resultado) {
  document.getElementById('view-home').classList.add('hidden');
  document.getElementById('view-preview').classList.add('hidden');
  document.getElementById('view-exam').classList.add('hidden');
  document.getElementById('view-results').classList.remove('hidden');

  const estado = evaluarEstadoIngreso(AppState.estudiante.carrera, AppState.estudiante.notaColegio, resultado.puntaje);

  if (!estado || estado.puntajeTotal === undefined) {
    document.getElementById('view-results').innerHTML = `
      <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
        <strong>Error:</strong> No se pudo calcular el puntaje de ingreso.<br>
        Verifique que la carrera "${AppState.estudiante.carrera}" esté registrada correctamente.
      </div>`;
    return;
  }

  let html = `<div class="bg-white rounded-xl shadow-lg p-8"><h2 class="text-2xl font-bold text-[#003366] mb-6">Resultados</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-8"><div><div class="bg-gray-50 p-6 rounded-lg"><h3 class="text-lg font-semibold mb-4">Resumen del Examen</h3><p class="text-3xl font-bold text-[#003366]">${resultado.aciertos} / ${resultado.total}</p><p class="text-gray-600 mt-2">Puntaje Examen: <span class="font-bold">${resultado.puntaje}</span></p><p class="text-gray-600">Nota Colegio: ${AppState.estudiante.notaColegio.toFixed(1)} / 10</p><hr class="my-3"><p class="text-lg font-semibold">Puntaje Total Simulado: <span class="text-[#003366]">${estado.puntajeTotal.toFixed(0)} / 1000</span></p><p class="text-sm text-gray-500">Mínimo ${AppState.estudiante.carrera}: ${estado.puntajeMinimo}</p><div class="mt-4 p-3 rounded-lg ${estado.estado === 'FAVORABLE' ? 'bg-green-100 text-green-800' : (estado.estado === 'EN RIESGO' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800')}"><i class="fas fa-${estado.estado === 'FAVORABLE' ? 'check-circle' : 'exclamation-circle'} mr-2"></i>${estado.mensaje}</div></div><div class="mt-6 flex space-x-4"><button id="btn-descargar" class="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800"><i class="fas fa-download mr-2"></i>Descargar JSON</button><button onclick="window.location.reload()" class="border border-[#003366] text-[#003366] px-4 py-2 rounded-lg hover:bg-gray-50">Nuevo Examen</button></div></div><div><h3 class="text-lg font-semibold mb-4">Desempeño por Unidad</h3><canvas id="radar-chart" width="400" height="400"></canvas></div></div><div class="mt-8 flex justify-center"><div style="width:250px;height:150px"><canvas id="gauge-chart"></canvas></div></div></div>`;
  document.getElementById('view-results').innerHTML = html;

  if (typeof dibujarRadar === 'function') dibujarRadar('radar-chart', resultado.detalleUnidades);
  if (typeof dibujarVelocimetro === 'function') dibujarVelocimetro('gauge-chart', estado.puntajeTotal, estado.puntajeMinimo);

  document.getElementById('btn-descargar')?.addEventListener('click', () => {
    const informe = { estudiante: { carrera: AppState.estudiante.carrera, notaColegio: AppState.estudiante.notaColegio }, examen: { modalidad: AppState.config.modalidad, semana: AppState.config.semana, aciertos: resultado.aciertos, total: resultado.total, puntajeExamen: resultado.puntaje, puntajeSimulado: estado.puntajeTotal, detalleUnidades: resultado.detalleUnidades, respuestas: AppState.respuestasUsuario.map((r,i) => ({ pregunta: AppState.examenActual[i].id, respuesta: r, correcta: AppState.examenActual[i].respuesta_correcta })) } };
    const blob = new Blob([JSON.stringify(informe, null, 2)], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `evaluacion_grupo4_${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  });
}
