// examEngine.js
// Motor genérico de exámenes: filtrado, generación y corrección.

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
 * @param {Array} pool - Preguntas disponibles.
 * @param {number} num - Número de preguntas a seleccionar.
 * @returns {Array} Examen aleatorio.
 */
function generarExamen(pool, num) {
  if (pool.length === 0) return [];
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(num, shuffled.length));
}

/**
 * Corrige un examen y devuelve estadísticas.
 * @param {Array} examen - Preguntas del examen.
 * @param {Array} respuestas - Índices de respuesta del usuario.
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
