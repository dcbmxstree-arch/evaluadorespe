// examEngine.js
// Motor genérico de exámenes: filtrado, generación, corrección y barajado de opciones

/**
 * Función auxiliar para mezclar un array (Fisher-Yates)
 * @param {Array} array
 * @returns {Array} Nuevo array mezclado
 */
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

/**
 * Baraja las opciones de una pregunta y actualiza el índice de la respuesta correcta.
 * @param {Object} pregunta - Objeto pregunta original (con opciones y respuesta_correcta)
 * @returns {Object} Nueva pregunta con opciones mezcladas y respuesta_correcta actualizada.
 */
function barajarOpciones(pregunta) {
  // Crear una copia profunda
  const nuevaPregunta = JSON.parse(JSON.stringify(pregunta));
  const opcionesOriginales = nuevaPregunta.opciones;
  const indiceCorrectoOriginal = nuevaPregunta.respuesta_correcta;
  const opcionCorrectaTexto = opcionesOriginales[indiceCorrectoOriginal];

  // Mezclar las opciones
  const opcionesMezcladas = shuffleArray(opcionesOriginales);
  // Encontrar el nuevo índice donde quedó la opción correcta
  const nuevoIndiceCorrecto = opcionesMezcladas.findIndex(op => op === opcionCorrectaTexto);

  nuevaPregunta.opciones = opcionesMezcladas;
  nuevaPregunta.respuesta_correcta = nuevoIndiceCorrecto;

  return nuevaPregunta;
}

/**
 * Filtra las preguntas según el grupo, carrera, semana(s) y dificultad.
 * @param {Array} banco - Array completo de preguntas (unión de asignaturas).
 * @param {number} grupoId - ID del grupo (1-4).
 * @param {number} carreraId - ID de la carrera.
 * @param {Array} subtemas - Lista de subtemas permitidos.
 * @param {string|null} dificultad - Filtrar por dificultad (baja, media, alta) o null.
 * @returns {Array} Preguntas que cumplen los criterios.
 */
function filtrarPreguntas(banco, grupoId, carreraId, subtemas, dificultad = null) {
  let pool = banco.filter(p => {
    if (p.grupo_id !== grupoId) return false;
    if (!p.carrera_id.includes(carreraId)) return false;
    if (!subtemas.includes(p.subtema)) return false;
    return true;
  });
  if (dificultad) {
    pool = pool.filter(p => p.dificultad === dificultad);
  }
  return pool;
}

/**
 * Genera un examen aleatorio con un número dado de preguntas.
 * Las opciones de cada pregunta se barajan automáticamente.
 * @param {Array} pool - Preguntas disponibles.
 * @param {number} num - Número de preguntas a seleccionar.
 * @returns {Array} Examen aleatorio con opciones mezcladas.
 */
function generarExamen(pool, num) {
  if (pool.length === 0) return [];
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  const seleccionadas = shuffled.slice(0, Math.min(num, shuffled.length));
  // Barajar opciones de cada pregunta seleccionada
  return seleccionadas.map(preg => barajarOpciones(preg));
}

/**
 * Genera un examen con requisitos mínimos (para diagnóstico, por ejemplo).
 * También baraja las opciones de cada pregunta.
 * @param {Array} pool - Preguntas disponibles.
 * @param {number} numTotal - Total de preguntas del examen.
 * @param {Object} requisitos - { "subtema": cantidadMinima, ... }
 * @returns {Array} Examen generado con opciones mezcladas.
 */
function generarExamenConRequisitos(pool, numTotal, requisitos) {
  let seleccionadas = [];
  let poolRestante = [...pool];

  // Extraer preguntas para cada requisito
  for (let [subtema, cantidad] of Object.entries(requisitos)) {
    const preguntasSubtema = poolRestante.filter(p => p.subtema === subtema);
    const extraidas = preguntasSubtema.sort(() => Math.random() - 0.5).slice(0, Math.min(cantidad, preguntasSubtema.length));
    seleccionadas.push(...extraidas);
    // Eliminar las extraídas del pool para no repetir
    const idsExtraidas = new Set(extraidas.map(p => p.id));
    poolRestante = poolRestante.filter(p => !idsExtraidas.has(p.id));
  }

  // Si ya tenemos suficientes, recortar aleatoriamente y barajar opciones
  if (seleccionadas.length >= numTotal) {
    const examen = seleccionadas.sort(() => Math.random() - 0.5).slice(0, numTotal);
    return examen.map(preg => barajarOpciones(preg));
  }

  // Rellenar el resto con preguntas aleatorias del pool restante
  const restantesNecesarias = numTotal - seleccionadas.length;
  const restantes = poolRestante.sort(() => Math.random() - 0.5).slice(0, restantesNecesarias);
  const examenCompleto = [...seleccionadas, ...restantes].sort(() => Math.random() - 0.5);
  return examenCompleto.map(preg => barajarOpciones(preg));
}

/**
 * Corrige un examen y devuelve estadísticas.
 * @param {Array} examen - Preguntas del examen (ya barajadas).
 * @param {Array} respuestas - Índices de respuesta del usuario (según el orden presentado).
 * @returns {Object} Resultados con aciertos, puntaje y detalle por unidad.
 */
function corregirExamen(examen, respuestas) {
  let aciertos = 0;
  const detalleUnidades = {};
  examen.forEach((p, i) => {
    const unidad = p.unidad;
    if (!detalleUnidades[unidad]) detalleUnidades[unidad] = { aciertos: 0, total: 0 };
    detalleUnidades[unidad].total++;
    if (respuestas[i] === p.respuesta_correcta) {
      aciertos++;
      detalleUnidades[unidad].aciertos++;
    }
  });
  const total = examen.length;
  const puntaje = total > 0 ? Math.round((aciertos / total) * 1000) : 0;
  return { aciertos, total, puntaje, detalleUnidades };
}

/**
 * Obtiene los subtemas para una evaluación según modalidad.
 * @param {number} grupoId - ID del grupo.
 * @param {string} modalidad - diagnostico, semanal, acumulado, final.
 * @param {number} semana - Número de semana (aplicable en semanal y acumulado).
 * @returns {Array} Lista de subtemas.
 */
function obtenerSubtemasEvaluacion(grupoId, modalidad, semana) {
  if (modalidad === 'diagnostico' || modalidad === 'final') {
    // Todos los subtemas del grupo (todas las semanas)
    const semanas = Object.keys(CRONOGRAMA[grupoId]).filter(s => !isNaN(s));
    let todos = [];
    semanas.forEach(s => {
      todos = todos.concat(CRONOGRAMA[grupoId][s]);
    });
    return [...new Set(todos)];
  }
  if (modalidad === 'semanal') {
    return CRONOGRAMA[grupoId][semana] || [];
  }
  if (modalidad === 'acumulado') {
    let acum = [];
    for (let i = 1; i <= semana; i++) {
      acum = acum.concat(CRONOGRAMA[grupoId][i] || []);
    }
    return [...new Set(acum)];
  }
  return [];
}
