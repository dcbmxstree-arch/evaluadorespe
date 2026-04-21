// main.js

const AppState = {
  estudiante: {
    cedula: '',
    nombre: '',
    telefonoTutor: '',
    nombreTutor: '',
    notaColegio: 0,
    carrera: '',
    carreraId: null,
    grupoId: null
  },
  configExamen: {
    semana: null,
    dificultad: null,
    numPreguntas: 30
  },
  examenActual: [],
  respuestasUsuario: [],
  resultadoActual: null,
  timerInterval: null,
  tiempoRestante: 90 * 60 // 90 minutos en segundos
};

// Mapeo de carreras por grupo (debe coincidir con IDs en preguntas.js)
const carrerasPorGrupo = {
  1: ['Administración de Empresas', 'Comercio Exterior', 'Contabilidad y Auditoría', 'Mercadotecnia', 'Tecnología Superior en Logística y Transporte', 'Economía'],
  2: ['Educación Inicial', 'Pedagogía de la Actividad Física y Deporte', 'Educación Básica', 'Pedagogía del Idioma Inglés', 'Turismo', 'Tecnología Superior en Seguridad y Prevención de Riesgos Laborales', 'Relaciones Internacionales'],
  3: ['Biotecnología', 'Medicina', 'Agropecuaria', 'Tecnología Superior en Aeronáutica (Piloto)'],
  4: ['Electromecánica', 'Electrónica y Automatización', 'Ingeniería Ambiental', 'Ingeniería Automotriz', 'Ingeniería Civil', 'Mecánica', 'Mecatrónica', 'Tecnologías Geoespaciales', 'Tecnologías de la Información', 'Petroquímica', 'Software', 'Telecomunicaciones', 'Tecnología Superior en Electromecánica', 'Tecnología Superior en Automatización e Instrumentación', 'Tecnología Superior en Mecánica Aeronáutica', 'Tecnología Superior en Mecánica Automotriz', 'Tecnología Superior en Redes y Telecomunicaciones']
};

document.addEventListener('DOMContentLoaded', () => {
  mostrarVistaRegistro();
});

function mostrarVistaRegistro() {
  if (AppState.timerInterval) {
    clearInterval(AppState.timerInterval);
    AppState.timerInterval = null;
  }
  document.getElementById('view-registro').classList.remove('hidden');
  document.getElementById('view-examen').classList.add('hidden');
  document.getElementById('view-resultados').classList.add('hidden');
  renderizarFormularioRegistro();
}

function renderizarFormularioRegistro() {
  const html = `
    <div class="bg-white rounded-xl shadow-espe p-8">
      <h2 class="text-2xl font-bold text-[#003366] mb-6 flex items-center">
        <i class="fas fa-user-edit mr-3"></i>Registro del Estudiante
      </h2>
      <form id="form-registro" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Cédula *</label>
            <input type="text" id="cedula" required class="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#003366]">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Nombre completo *</label>
            <input type="text" id="nombre" required class="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#003366]">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Teléfono del tutor *</label>
            <input type="tel" id="tel-tutor" required class="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#003366]">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Nombre del tutor *</label>
            <input type="text" id="nombre-tutor" required class="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#003366]">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Nota de grado (colegio) 0-10 *</label>
            <input type="number" id="nota-colegio" min="0" max="10" step="0.1" required class="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#003366]">
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Grupo *</label>
            <select id="grupo-select" required class="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#003366]">
              <option value="">Seleccione</option>
              <option value="1">Grupo 1 - Ciencias Económicas</option>
              <option value="2">Grupo 2 - Ciencias Humanas</option>
              <option value="3">Grupo 3 - Ciencias de la Vida</option>
              <option value="4">Grupo 4 - Ingenierías</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Carrera *</label>
            <select id="carrera-select" required disabled class="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#003366]">
              <option value="">Primero seleccione grupo</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Semana *</label>
            <select id="semana-select" required class="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#003366]">
              <option value="">Seleccione</option>
              <option value="0">Diagnóstico (Semana 0)</option>
              <option value="1">Semana 1</option>
              <option value="2">Semana 2</option>
              <option value="3">Semana 3</option>
              <option value="4">Semana 4</option>
              <option value="5">Semana 5</option>
              <option value="6">Semana 6</option>
              <option value="7">Semana 7</option>
              <option value="8">Semana 8</option>
              <option value="9">Semana 9</option>
              <option value="10">Semana 10</option>
              <option value="final">Final (Intensivo)</option>
            </select>
          </div>
        </div>
        
        <div id="dificultad-container" class="hidden">
          <label class="block text-sm font-medium text-gray-700 mb-1">Dificultad (solo para Final)</label>
          <div class="flex space-x-4">
            <label class="inline-flex items-center">
              <input type="checkbox" id="dificultad-media" checked class="rounded border-gray-300 text-[#003366] focus:ring-[#003366]">
              <span class="ml-2">Media</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" id="dificultad-alta" checked class="rounded border-gray-300 text-[#003366] focus:ring-[#003366]">
              <span class="ml-2">Alta</span>
            </label>
          </div>
        </div>

        <div class="flex justify-end pt-4">
          <button type="submit" class="bg-[#003366] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition shadow">
            Comenzar Examen <i class="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </form>
    </div>
  `;
  document.getElementById('view-registro').innerHTML = html;
  configurarListenersRegistro();
}

function configurarListenersRegistro() {
  const grupoSelect = document.getElementById('grupo-select');
  const carreraSelect = document.getElementById('carrera-select');
  const semanaSelect = document.getElementById('semana-select');
  const dificultadContainer = document.getElementById('dificultad-container');
  
  grupoSelect.addEventListener('change', (e) => {
    const grupoId = e.target.value;
    carreraSelect.disabled = !grupoId;
    carreraSelect.innerHTML = '<option value="">Seleccione carrera</option>';
    if (grupoId && carrerasPorGrupo[grupoId]) {
      carrerasPorGrupo[grupoId].forEach(carrera => {
        const option = document.createElement('option');
        option.value = carrera;
        option.textContent = carrera;
        carreraSelect.appendChild(option);
      });
    }
  });
  
  semanaSelect.addEventListener('change', (e) => {
    if (e.target.value === 'final') {
      dificultadContainer.classList.remove('hidden');
    } else {
      dificultadContainer.classList.add('hidden');
    }
  });
  
  document.getElementById('form-registro').addEventListener('submit', (e) => {
    e.preventDefault();
    iniciarExamen();
  });
}

function iniciarExamen() {
  AppState.estudiante = {
    cedula: document.getElementById('cedula').value,
    nombre: document.getElementById('nombre').value,
    telefonoTutor: document.getElementById('tel-tutor').value,
    nombreTutor: document.getElementById('nombre-tutor').value,
    notaColegio: parseFloat(document.getElementById('nota-colegio').value),
    carrera: document.getElementById('carrera-select').value,
    carreraId: obtenerIdCarrera(document.getElementById('carrera-select').value),
    grupoId: parseInt(document.getElementById('grupo-select').value)
  };
  
  const semanaVal = document.getElementById('semana-select').value;
  AppState.configExamen.semana = semanaVal === 'final' ? 'final' : parseInt(semanaVal);
  
  document.getElementById('user-info').classList.remove('hidden');
  document.getElementById('display-nombre').textContent = AppState.estudiante.nombre.split(' ')[0];
  
  let pool = filtrarPreguntas(
    AppState.estudiante.grupoId,
    AppState.estudiante.carreraId,
    AppState.configExamen.semana
  );
  
  if (AppState.configExamen.semana === 'final') {
    const dificultades = [];
    if (document.getElementById('dificultad-media').checked) dificultades.push('media');
    if (document.getElementById('dificultad-alta').checked) dificultades.push('alta');
    if (dificultades.length > 0) {
      pool = pool.filter(p => dificultades.includes(p.dificultad));
    }
  }
  
  if (pool.length === 0) {
    alert('No hay preguntas disponibles para esta selección. Intente con otra semana o carrera.');
    return;
  }
  
  AppState.examenActual = generarExamen(pool, AppState.configExamen.numPreguntas);
  AppState.respuestasUsuario = new Array(AppState.examenActual.length).fill(null);
  
  iniciarTemporizador();
  mostrarVistaExamen();
}

function iniciarTemporizador() {
  AppState.tiempoRestante = 90 * 60;
  actualizarDisplayTiempo();
  
  AppState.timerInterval = setInterval(() => {
    AppState.tiempoRestante--;
    actualizarDisplayTiempo();
    
    if (AppState.tiempoRestante <= 0) {
      clearInterval(AppState.timerInterval);
      alert('El tiempo ha terminado. Se enviarán tus respuestas automáticamente.');
      calcularYMostrarResultados();
    }
  }, 1000);
}

function actualizarDisplayTiempo() {
  const minutos = Math.floor(AppState.tiempoRestante / 60);
  const segundos = AppState.tiempoRestante % 60;
  const tiempoFormateado = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
  const timerElement = document.getElementById('timer-display');
  if (timerElement) {
    timerElement.textContent = tiempoFormateado;
    if (AppState.tiempoRestante <= 600) {
      timerElement.classList.add('text-red-600');
    } else {
      timerElement.classList.remove('text-red-600');
    }
  }
}

function mostrarVistaExamen() {
  document.getElementById('view-registro').classList.add('hidden');
  document.getElementById('view-examen').classList.remove('hidden');
  document.getElementById('view-resultados').classList.add('hidden');
  renderizarExamen();
}

function renderizarExamen() {
  const examen = AppState.examenActual;
  let html = `
    <div class="bg-white rounded-xl shadow-espe p-6">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-bold text-[#003366]">Examen - ${AppState.estudiante.carrera}</h2>
        <div class="flex items-center space-x-4">
          <span class="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium">
            Preguntas: ${examen.length}
          </span>
          <div class="bg-gray-100 px-4 py-1 rounded-full text-lg font-mono font-bold" id="timer-display">
            90:00
          </div>
        </div>
      </div>
      <div id="preguntas-container" class="space-y-8">
  `;
  
  examen.forEach((pregunta, idx) => {
    html += `
      <div class="border-b pb-6">
        <p class="font-medium text-gray-800 mb-3"><span class="text-[#003366] font-bold">${idx+1}.</span> ${pregunta.enunciado}</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
    `;
    pregunta.opciones.forEach((opcion, optIdx) => {
      html += `
        <label class="quiz-option flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
          <input type="radio" name="pregunta-${idx}" value="${optIdx}" class="mr-3 w-4 h-4 text-[#003366] focus:ring-[#003366]"
            ${AppState.respuestasUsuario[idx] === optIdx ? 'checked' : ''}>
          <span>${String.fromCharCode(65+optIdx)}) ${opcion}</span>
        </label>
      `;
    });
    html += `</div></div>`;
  });
  
  html += `
      </div>
      <div class="flex justify-between mt-8">
        <button id="btn-ver-resultados" class="bg-[#003366] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
          Finalizar y Ver Resultados
        </button>
      </div>
    </div>
  `;
  
  document.getElementById('view-examen').innerHTML = html;
  
  document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      const name = e.target.name;
      const idx = parseInt(name.split('-')[1]);
      AppState.respuestasUsuario[idx] = parseInt(e.target.value);
    });
  });
  
  document.getElementById('btn-ver-resultados').addEventListener('click', () => {
    if (AppState.respuestasUsuario.includes(null)) {
      if (!confirm('Hay preguntas sin responder. ¿Desea continuar de todos modos?')) {
        return;
      }
    }
    calcularYMostrarResultados();
  });
}

function calcularYMostrarResultados() {
  if (AppState.timerInterval) {
    clearInterval(AppState.timerInterval);
    AppState.timerInterval = null;
  }
  const resultado = corregirExamen(AppState.examenActual, AppState.respuestasUsuario);
  AppState.resultadoActual = resultado;
  mostrarVistaResultados();
}

function mostrarVistaResultados() {
  document.getElementById('view-registro').classList.add('hidden');
  document.getElementById('view-examen').classList.add('hidden');
  document.getElementById('view-resultados').classList.remove('hidden');
  
  const res = AppState.resultadoActual;
  const estudiante = AppState.estudiante;
  
  const puntajeSimulado = calcularPuntajePonderado(estudiante.notaColegio, res.puntaje);
  const perfilCarrera = PERFILES_INGRESO[estudiante.carrera];
  const puntajeMinimo = perfilCarrera ? perfilCarrera.puntaje_minimo : 800;
  const estadoIngreso = evaluarEstadoIngreso(estudiante.carrera, estudiante.notaColegio, res.puntaje);
  
  let remedialMsg = '';
  if (AppState.configExamen.semana === 0 && necesitaPlanRemedial(res.puntaje)) {
    remedialMsg = `
      <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
        <p class="font-bold text-yellow-800"><i class="fas fa-exclamation-triangle mr-2"></i>Plan Remedial Sugerido</p>
        <p class="text-yellow-700">Tu puntaje en el diagnóstico es menor al 60%. Te recomendamos iniciar el <strong>Módulo de Nivelación en Fundamentos</strong> (Álgebra básica, operaciones, factorización) antes de continuar con el cronograma regular.</p>
      </div>
    `;
  }
  
  const html = `
    <div class="bg-white rounded-xl shadow-espe p-8">
      <h2 class="text-2xl font-bold text-[#003366] mb-6">Resultados de la Evaluación</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-lg font-semibold mb-4">Resumen</h3>
            <p class="text-3xl font-bold text-[#003366]">${res.aciertos} / ${res.totalPreguntas}</p>
            <p class="text-gray-600">Puntaje Examen (sobre 1000): <span class="font-bold">${res.puntaje.toFixed(0)}</span></p>
            <p class="text-gray-600 mt-2">Nota Colegio: ${estudiante.notaColegio.toFixed(1)} / 10</p>
            <hr class="my-3">
            <p class="text-lg font-semibold">Puntaje Total Simulado ESPE: <span class="text-[#003366]">${puntajeSimulado.toFixed(0)} / 1000</span></p>
            <p class="text-sm text-gray-500">Mínimo ${estudiante.carrera}: ${puntajeMinimo}</p>
            <div class="mt-4 p-3 rounded-lg ${estadoIngreso.estado === 'FAVORABLE' ? 'bg-green-100 text-green-800' : (estadoIngreso.estado === 'EN RIESGO' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800')}">
              <i class="fas fa-${estadoIngreso.estado === 'FAVORABLE' ? 'check-circle' : 'exclamation-circle'} mr-2"></i>
              ${estadoIngreso.mensaje}
            </div>
            ${remedialMsg}
          </div>
          
          <div class="mt-6">
            <button id="btn-descargar-json" class="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
              <i class="fas fa-download mr-2"></i>Descargar Resultados (JSON)
            </button>
            <button id="btn-nuevo-examen" class="ml-3 border border-[#003366] text-[#003366] px-6 py-2 rounded-lg hover:bg-gray-50 transition">
              <i class="fas fa-redo-alt mr-2"></i>Nuevo Examen
            </button>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Desempeño por Unidad</h3>
          <canvas id="radar-chart" width="400" height="400"></canvas>
        </div>
      </div>
      
      <div class="mt-8">
        <h3 class="text-lg font-semibold mb-4">Velocímetro de Ingreso</h3>
        <div class="flex justify-center">
          <div style="width: 250px; height: 150px;">
            <canvas id="gauge-chart"></canvas>
          </div>
        </div>
        <p class="text-center text-sm text-gray-500 mt-2">Puntaje simulado: ${puntajeSimulado.toFixed(0)} / 1000</p>
      </div>
    </div>
  `;
  
  document.getElementById('view-resultados').innerHTML = html;
  
  dibujarRadar('radar-chart', res.detalleUnidades);
  dibujarVelocimetro('gauge-chart', puntajeSimulado, puntajeMinimo);
  
  document.getElementById('btn-descargar-json').addEventListener('click', descargarJSON);
  document.getElementById('btn-nuevo-examen').addEventListener('click', () => {
    mostrarVistaRegistro();
  });
}

function descargarJSON() {
  const estudiante = AppState.estudiante;
  const resultado = AppState.resultadoActual;
  
  const informe = {
    estudiante: {
      cedula: estudiante.cedula,
      nombre: estudiante.nombre,
      telefono_tutor: estudiante.telefonoTutor,
      nombre_tutor: estudiante.nombreTutor,
      nota_colegio: estudiante.notaColegio,
      carrera: estudiante.carrera
    },
    examen: {
      semana: AppState.configExamen.semana,
      fecha: new Date().toISOString(),
      aciertos: resultado.aciertos,
      total_preguntas: resultado.totalPreguntas,
      puntaje_examen: resultado.puntaje,
      puntaje_simulado_espe: calcularPuntajePonderado(estudiante.notaColegio, resultado.puntaje),
      detalle_unidades: resultado.detalleUnidades,
      respuestas: AppState.respuestasUsuario.map((resp, idx) => ({
        pregunta_id: AppState.examenActual[idx].id,
        respuesta_usuario: resp,
        correcta: AppState.examenActual[idx].respuesta_correcta,
        es_correcta: resp === AppState.examenActual[idx].respuesta_correcta
      }))
    }
  };
  
  const blob = new Blob([JSON.stringify(informe, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `evaluacion_${estudiante.cedula}_semana${AppState.configExamen.semana}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function obtenerIdCarrera(nombreCarrera) {
  const mapa = {
    'Administración de Empresas': 1, 'Comercio Exterior': 2, 'Contabilidad y Auditoría': 3,
    'Mercadotecnia': 4, 'Tecnología Superior en Logística y Transporte': 5, 'Economía': 6,
    'Educación Inicial': 7, 'Pedagogía de la Actividad Física y Deporte': 8, 'Educación Básica': 9,
    'Pedagogía del Idioma Inglés': 10, 'Turismo': 11, 'Tecnología Superior en Seguridad y Prevención de Riesgos Laborales': 12,
    'Relaciones Internacionales': 13, 'Biotecnología': 14, 'Medicina': 15, 'Agropecuaria': 16,
    'Tecnología Superior en Aeronáutica (Piloto)': 17, 'Electromecánica': 18, 'Electrónica y Automatización': 19,
    'Ingeniería Ambiental': 20, 'Ingeniería Automotriz': 21, 'Ingeniería Civil': 22, 'Mecánica': 23,
    'Mecatrónica': 24, 'Tecnologías Geoespaciales': 25, 'Tecnologías de la Información': 26,
    'Petroquímica': 27, 'Software': 28, 'Telecomunicaciones': 29,
    'Tecnología Superior en Electromecánica': 30, 'Tecnología Superior en Automatización e Instrumentación': 31,
    'Tecnología Superior en Mecánica Aeronáutica': 32, 'Tecnología Superior en Mecánica Automotriz': 33,
    'Tecnología Superior en Redes y Telecomunicaciones': 34
  };
  return mapa[nombreCarrera] || 1;
}