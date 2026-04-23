// =============================================
// PERFILES DE INGRESO - PHYSICS PREUNIVERSITARIO
// ESPE - Puntajes referenciales oficiales por carrera
// Fórmula de ingreso: 70% nota colegio + 30% examen
// =============================================

const PERFILES_INGRESO = {
  // ------------------------------------------------------------
  // GRUPO 1: Ciencias Económicas y Administrativas
  // ------------------------------------------------------------
  "Administración de Empresas": {
    grupo_id: 1,
    puntaje_minimo: 873,
    cupos_disponibles: null
  },
  "Comercio Exterior": {
    grupo_id: 1,
    puntaje_minimo: 896,
    cupos_disponibles: null
  },
  "Contabilidad y Auditoría": {
    grupo_id: 1,
    puntaje_minimo: 907,
    cupos_disponibles: null
  },
  "Mercadotecnia": {
    grupo_id: 1,
    puntaje_minimo: 874,
    cupos_disponibles: null
  },
  "Tecnología Superior en Logística y Transporte": {
    grupo_id: 1,
    puntaje_minimo: 692,
    cupos_disponibles: null
  },
  "Economía": {
    grupo_id: 1,
    puntaje_minimo: 859,
    cupos_disponibles: null
  },

  // ------------------------------------------------------------
  // GRUPO 2: Ciencias Humanas y Servicios
  // ------------------------------------------------------------
  "Educación Inicial": {
    grupo_id: 2,
    puntaje_minimo: 874,
    cupos_disponibles: null
  },
  "Pedagogía de la Actividad Física y Deporte": {
    grupo_id: 2,
    puntaje_minimo: 882,
    cupos_disponibles: null
  },
  "Educación Básica": {
    grupo_id: 2,
    puntaje_minimo: 881,
    cupos_disponibles: null
  },
  "Pedagogía del Idioma Inglés": {
    grupo_id: 2,
    puntaje_minimo: 850,
    cupos_disponibles: null
  },
  "Turismo": {
    grupo_id: 2,
    puntaje_minimo: 862,
    cupos_disponibles: null
  },
  "Tecnología Superior en Seguridad y Prevención de Riesgos Laborales": {
    grupo_id: 2,
    puntaje_minimo: 784,
    cupos_disponibles: null
  },
  "Relaciones Internacionales": {
    grupo_id: 2,
    puntaje_minimo: 870,
    cupos_disponibles: null
  },

  // ------------------------------------------------------------
  // GRUPO 3: Ciencias de la Vida y Medicina
  // ------------------------------------------------------------
  "Biotecnología": {
    grupo_id: 3,
    puntaje_minimo: 942,
    cupos_disponibles: null
  },
  "Medicina": {
    grupo_id: 3,
    puntaje_minimo: 956,
    cupos_disponibles: null
  },
  "Agropecuaria": {
    grupo_id: 3,
    puntaje_minimo: 861,
    cupos_disponibles: null
  },
  "Tecnología Superior en Aeronáutica (Piloto)": {
    grupo_id: 3,
    puntaje_minimo: 781,
    cupos_disponibles: null
  },

  // ------------------------------------------------------------
  // GRUPO 4: Ingenierías y Carreras Técnicas
  // ------------------------------------------------------------
  "Electromecánica": {
    grupo_id: 4,
    puntaje_minimo: 835,
    cupos_disponibles: null
  },
  "Electrónica y Automatización": {
    grupo_id: 4,
    puntaje_minimo: 845,
    cupos_disponibles: null
  },
  "Ingeniería Ambiental": {
    grupo_id: 4,
    puntaje_minimo: 850,
    cupos_disponibles: null
  },
  "Ingeniería Automotriz": {
    grupo_id: 4,
    puntaje_minimo: 862,
    cupos_disponibles: null
  },
  "Ingeniería Civil": {
    grupo_id: 4,
    puntaje_minimo: 888,
    cupos_disponibles: null
  },
  "Mecánica": {
    grupo_id: 4,
    puntaje_minimo: 863,
    cupos_disponibles: null
  },
  "Mecatrónica": {
    grupo_id: 4,
    puntaje_minimo: 860,
    cupos_disponibles: null
  },
  "Tecnologías Geoespaciales": {
    grupo_id: 4,
    puntaje_minimo: 870,
    cupos_disponibles: null
  },
  "Tecnologías de la Información": {
    grupo_id: 4,
    puntaje_minimo: 870,
    cupos_disponibles: null
  },
  "Petroquímica": {
    grupo_id: 4,
    puntaje_minimo: 841,
    cupos_disponibles: null
  },
  "Software": {
    grupo_id: 4,
    puntaje_minimo: 930,
    cupos_disponibles: null
  },
  "Telecomunicaciones": {
    grupo_id: 4,
    puntaje_minimo: 920,
    cupos_disponibles: null
  },
  "Tecnología Superior en Electromecánica": {
    grupo_id: 4,
    puntaje_minimo: 698,
    cupos_disponibles: null
  },
  "Tecnología Superior en Automatización e Instrumentación": {
    grupo_id: 4,
    puntaje_minimo: 659,
    cupos_disponibles: null
  },
  "Tecnología Superior en Mecánica Aeronáutica": {
    grupo_id: 4,
    puntaje_minimo: 781,
    cupos_disponibles: null
  },
  "Tecnología Superior en Mecánica Automotriz": {
    grupo_id: 4,
    puntaje_minimo: 776,
    cupos_disponibles: null
  },
  "Tecnología Superior en Redes y Telecomunicaciones": {
    grupo_id: 4,
    puntaje_minimo: 780,
    cupos_disponibles: null
  }
};

// ------------------------------------------------------------
// Configuración del sistema de puntajes (FÓRMULA 70/30)
// ------------------------------------------------------------
const APORTE_MAXIMO_COLEGIO = 700;  // 10/10 en el colegio equivale a 700 puntos
const APORTE_MAXIMO_EXAMEN = 300;   // Examen perfecto (1000/1000) equivale a 300 puntos
const PUNTAJE_TOTAL_MAXIMO = 1000;  // Escala final

/**
 * Calcula el puntaje ponderado total simulado para el ingreso a la ESPE.
 * Nueva fórmula: 70% nota de colegio + 30% nota del examen.
 * @param {number} notaColegio - Nota de grado del colegio (0-10).
 * @param {number} puntajeExamen - Puntaje obtenido en el examen Physics (0-1000).
 * @returns {number} Puntaje total simulado (máximo 1000).
 */
function calcularPuntajePonderado(notaColegio, puntajeExamen) {
  const aporteColegio = (notaColegio / 10) * APORTE_MAXIMO_COLEGIO;
  const aporteExamen = (puntajeExamen / 1000) * APORTE_MAXIMO_EXAMEN;
  return aporteColegio + aporteExamen;
}

/**
 * Obtiene el puntaje mínimo requerido para una carrera específica.
 * @param {string} nombreCarrera - Nombre exacto de la carrera.
 * @returns {number|null} Puntaje mínimo o null si la carrera no existe.
 */
function getPuntajeMinimo(nombreCarrera) {
  return PERFILES_INGRESO[nombreCarrera]?.puntaje_minimo || null;
}

/**
 * Evalúa el estado del estudiante comparando su puntaje simulado con el mínimo de la carrera.
 * @param {string} nombreCarrera - Carrera deseada.
 * @param {number} notaColegio - Nota del colegio (0-10).
 * @param {number} puntajeExamen - Puntaje del examen Physics (0-1000).
 * @returns {object} Objeto con puntajeTotal, puntajeMinimo, diferencia y mensaje.
 */
function evaluarEstadoIngreso(nombreCarrera, notaColegio, puntajeExamen) {
  const perfil = PERFILES_INGRESO[nombreCarrera];
  if (!perfil) {
    return { error: `Carrera "${nombreCarrera}" no encontrada en la base de datos.` };
  }

  const puntajeTotal = calcularPuntajePonderado(notaColegio, puntajeExamen);
  const puntajeMinimo = perfil.puntaje_minimo;
  const diferencia = puntajeTotal - puntajeMinimo;

  let estado, mensaje;
  if (diferencia >= 0) {
    estado = "FAVORABLE";
    mensaje = `¡Vas por buen camino! Tu puntaje simulado (${puntajeTotal.toFixed(0)}) supera el mínimo referencial (${puntajeMinimo}).`;
  } else if (diferencia >= -50) {
    estado = "EN RIESGO";
    mensaje = `Estás cerca, pero necesitas mejorar. Te faltan ${Math.abs(diferencia).toFixed(0)} puntos para alcanzar el mínimo de ${nombreCarrera}.`;
  } else {
    estado = "CRÍTICO";
    mensaje = `Debes reforzar intensamente los temas. Tu puntaje actual (${puntajeTotal.toFixed(0)}) está muy por debajo del requerido (${puntajeMinimo}).`;
  }

  return {
    carrera: nombreCarrera,
    puntajeTotal,
    puntajeMinimo,
    diferencia,
    estado,
    mensaje
  };
}

// Exportar para módulos (si se usa Node.js)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    PERFILES_INGRESO,
    APORTE_MAXIMO_COLEGIO,
    APORTE_MAXIMO_EXAMEN,
    PUNTAJE_TOTAL_MAXIMO,
    calcularPuntajePonderado,
    getPuntajeMinimo,
    evaluarEstadoIngreso
  };
}
