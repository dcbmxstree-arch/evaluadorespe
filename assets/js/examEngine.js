// examEngine.js

/**
 * Filtra las preguntas del banco según grupo, carrera y semana.
 * @param {number} grupoId - ID del grupo (1-4)
 * @param {number} carreraId - ID de la carrera seleccionada
 * @param {number|string} semana - Número de semana (0-10) o "final"
 * @returns {Array} Lista de preguntas que cumplen los criterios
 */
function filtrarPreguntas(grupoId, carreraId, semana) {
  let subtemasSemana = [];
  if (semana === 'final') {
    // Semana final: todos los subtemas del grupo
    subtemasSemana = [...new Set(BANCO_PREGUNTAS
      .filter(p => p.grupo_id === grupoId)
      .map(p => p.subtema))];
  } else {
    subtemasSemana = CRONOGRAMA[grupoId]?.[semana] || [];
  }
  
  if (subtemasSemana.length === 0) {
    console.warn(`No hay subtemas definidos para grupo ${grupoId} semana ${semana}`);
    return [];
  }

  return BANCO_PREGUNTAS.filter(p => 
    p.grupo_id === grupoId && 
    subtemasSemana.includes(p.subtema) &&
    p.carrera_id.includes(carreraId)
  );
}

/**
 * Genera un examen aleatorio con un número específico de preguntas.
 * @param {Array} poolPreguntas - Conjunto de preguntas disponibles
 * @param {number} numPreguntas - Cantidad deseada (por defecto 30)
 * @returns {Array} Subconjunto aleatorio de preguntas
 */
function generarExamen(poolPreguntas, numPreguntas = 30) {
  if (poolPreguntas.length === 0) return [];
  const shuffled = [...poolPreguntas];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, Math.min(numPreguntas, shuffled.length));
}

/**
 * Corrige el examen y calcula estadísticas.
 * @param {Array} examen - Lista de preguntas del examen
 * @param {Array} respuestasUsuario - Índices de respuesta seleccionados (0-3)
 * @returns {Object} Resultados: aciertos, puntaje, detalle por unidad
 */
function corregirExamen(examen, respuestasUsuario) {
  let aciertos = 0;
  const detalleUnidades = {};

  examen.forEach((pregunta, idx) => {
    const unidad = pregunta.unidad;
    if (!detalleUnidades[unidad]) {
      detalleUnidades[unidad] = { aciertos: 0, total: 0 };
    }
    detalleUnidades[unidad].total += 1;
    
    if (respuestasUsuario[idx] === pregunta.respuesta_correcta) {
      aciertos++;
      detalleUnidades[unidad].aciertos += 1;
    }
  });

  const totalPreguntas = examen.length;
  const puntaje = totalPreguntas > 0 ? (aciertos / totalPreguntas) * 1000 : 0;

  return {
    aciertos,
    totalPreguntas,
    puntaje,
    detalleUnidades
  };
}

/**
 * Determina si el estudiante necesita plan remedial (según diagnóstico <60%)
 * @param {number} puntaje - Puntaje sobre 1000
 * @returns {boolean}
 */
function necesitaPlanRemedial(puntaje) {
  return puntaje < 600;
}