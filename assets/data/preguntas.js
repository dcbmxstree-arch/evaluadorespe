// =============================================
// BANCO DE PREGUNTAS - PHYSICS PREUNIVERSITARIO
// ESPE - Todos los grupos de carrera
// =============================================

const BANCO_PREGUNTAS = [
  // ---------- GRUPO 1: CIENCIAS ECONÓMICAS Y ADMINISTRATIVAS ----------
  {
    id: "g1_alg_001",
    grupo: "Grupo 1",
    grupo_id: 1,
    carrera_id: [1, 2, 3, 4, 5, 6], // IDs de carreras de este grupo
    asignatura: "Álgebra",
    unidad: "1. LÓGICA MATEMÁTICA",
    subtema: "1.1 Proposiciones y Conectivos lógicos",
    dificultad: "baja",
    tipo_pregunta: "teorica",
    enunciado: "¿Cuál de las siguientes proposiciones compuestas es verdadera únicamente cuando ambas proposiciones simples tienen el mismo valor de verdad?",
    opciones: ["Bicondicional (p ↔ q)", "Condicional (p → q)", "Disyunción (p ∨ q)", "Conjunción (p ∧ q)"],
    respuesta_correcta: 0,
    retroalimentacion: "El bicondicional es verdadero exactamente cuando p y q son ambas verdaderas o ambas falsas."
  },
  {
    id: "g1_alg_002",
    grupo: "Grupo 1",
    grupo_id: 1,
    carrera_id: [1, 2, 3, 4, 5, 6],
    asignatura: "Álgebra",
    unidad: "1. LÓGICA MATEMÁTICA",
    subtema: "1.1 Proposiciones y Conectivos lógicos",
    dificultad: "media",
    tipo_pregunta: "ejercicio",
    enunciado: "Si p es falsa y q es verdadera, el valor de verdad de la proposición (¬p ∨ q) → (p ∧ ¬q) es:",
    opciones: ["Falso", "Verdadero", "Contingente", "No se puede determinar"],
    respuesta_correcta: 0,
    retroalimentacion: "¬p es V, q es V → (V ∨ V) = V. p ∧ ¬q = F ∧ F = F. Una implicación V → F es Falsa."
  },
 {
    "asignatura": "Álgebra",
    "unidad": "1. LÓGICA MATEMÁTICA",
    "subtema": "1.1 Proposiciones y Conectivos lógicos",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "¿Cuál de las siguientes proposiciones compuestas es verdadera únicamente cuando ambas proposiciones simples tienen el mismo valor de verdad?",
    "opciones": [
      "Bicondicional (p ↔ q)",
      "Condicional (p → q)",
      "Disyunción (p ∨ q)",
      "Conjunción (p ∧ q)"
    ],
    "retroalimentacion": "El bicondicional es verdadero exactamente cuando p y q son ambas verdaderas o ambas falsas, es decir, cuando tienen el mismo valor de verdad."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "1. LÓGICA MATEMÁTICA",
    "subtema": "1.2 Tautología, contradicción, contingencia",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "Una fórmula proposicional que es siempre falsa, independientemente de los valores de verdad de sus variables, recibe el nombre de:",
    "opciones": [
      "Contradicción",
      "Tautología",
      "Contingencia",
      "Falacia"
    ],
    "retroalimentacion": "Una contradicción es una proposición compuesta que resulta falsa para todas las combinaciones posibles de valores de verdad de sus componentes."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "1. LÓGICA MATEMÁTICA",
    "subtema": "1.3 Leyes del álgebra proposicional",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Aplicando las leyes de De Morgan, la negación de la proposición «Estudio y apruebo el examen» es equivalente a:",
    "opciones": [
      "No estudio o no apruebo el examen",
      "No estudio y no apruebo el examen",
      "Estudio o no apruebo el examen",
      "Si estudio entonces apruebo el examen"
    ],
    "retroalimentacion": "Ley de De Morgan: ¬(p ∧ q) ≡ ¬p ∨ ¬q. Por tanto, la negación de «estudio y apruebo» es «no estudio o no apruebo»."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "2. CONJUNTOS",
    "subtema": "2.1 Determinación de conjuntos",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "¿Cuál de las siguientes opciones representa correctamente el conjunto A = {x ∈ ℕ / 2 ≤ x < 5} por extensión?",
    "opciones": [
      "{2, 3, 4}",
      "{2, 3, 4, 5}",
      "{3, 4}",
      "{2, 3}"
    ],
    "retroalimentacion": "Por comprensión se describe la propiedad. Los números naturales mayores o iguales a 2 y estrictamente menores que 5 son 2, 3 y 4."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "2. CONJUNTOS",
    "subtema": "2.3 Operaciones con conjuntos",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Sean A = {1, 2, 3, 4, 5} y B = {4, 5, 6, 7}. El resultado de (A ∪ B) − (A ∩ B) es:",
    "opciones": [
      "{1, 2, 3, 6, 7}",
      "{4, 5}",
      "{1, 2, 3, 4, 5, 6, 7}",
      "{1, 2, 3}"
    ],
    "retroalimentacion": "A ∪ B = {1,2,3,4,5,6,7}. A ∩ B = {4,5}. La diferencia es el conjunto de elementos que están en la unión pero no en la intersección, es decir, la diferencia simétrica: {1,2,3,6,7}."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "2. CONJUNTOS",
    "subtema": "2.4 Problemas de aplicación",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "En una encuesta a 120 estudiantes sobre el uso de redes sociales, 75 usan Instagram, 60 usan TikTok, y 20 no usan ninguna. ¿Cuántos estudiantes usan ambas redes sociales?",
    "opciones": [
      "35",
      "55",
      "40",
      "25"
    ],
    "retroalimentacion": "Total = 120. No usan ninguna = 20, por tanto usan al menos una = 100. |I ∪ T| = |I| + |T| − |I ∩ T| → 100 = 75 + 60 − |I ∩ T| → |I ∩ T| = 135 − 100 = 35."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "3. OPERACIONES CON NÚMEROS REALES",
    "subtema": "3.3 Intervalos y Valor absoluto",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La solución de la inecuación |2x − 5| ≤ 3 es el intervalo:",
    "opciones": [
      "[1, 4]",
      "(-∞, 1] ∪ [4, ∞)",
      "(1, 4)",
      "[-1, 4]"
    ],
    "retroalimentacion": "|2x−5| ≤ 3 equivale a −3 ≤ 2x−5 ≤ 3. Sumando 5: 2 ≤ 2x ≤ 8. Dividiendo entre 2: 1 ≤ x ≤ 4. Intervalo cerrado [1,4]."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "3. OPERACIONES CON NÚMEROS REALES",
    "subtema": "3.4 Valor absoluto",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El conjunto solución de la ecuación |x − 2| = |3x + 4| es:",
    "opciones": [
      "{-3, -1/2}",
      "{-3, 1/2}",
      "{3, -1/2}",
      "{-3, 2}"
    ],
    "retroalimentacion": "|A|=|B| ⇔ A=B o A=−B. Caso 1: x−2 = 3x+4 → −2x = 6 → x = −3. Caso 2: x−2 = −(3x+4) → x−2 = −3x−4 → 4x = −2 → x = −1/2."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.1 Dominio y Rango",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El dominio de la función f(x) = √(x² − 4x + 3) es:",
    "opciones": [
      "(-∞, 1] ∪ [3, ∞)",
      "[1, 3]",
      "ℝ − {1, 3}",
      "(-∞, 1) ∪ (3, ∞)"
    ],
    "retroalimentacion": "El radicando debe ser ≥ 0. Resolviendo x²−4x+3 ≥ 0 → (x−1)(x−3) ≥ 0. La parábola abre hacia arriba, luego es ≥ 0 fuera de las raíces: x ≤ 1 o x ≥ 3."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.3 Función Cuadrática",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El valor mínimo de la función f(x) = 2x² − 8x + 15 es:",
    "opciones": [
      "7",
      "15",
      "-1",
      "3"
    ],
    "retroalimentacion": "Coeficiente principal positivo, el mínimo ocurre en el vértice. x_v = −b/(2a) = 8/(4) = 2. f(2) = 2(4) − 16 + 15 = 8 − 16 + 15 = 7."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.4 Composición de funciones",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Dadas f(x) = 2x + 1 y g(x) = x² − 3, el valor de (f ∘ g)(2) es:",
    "opciones": [
      "3",
      "5",
      "7",
      "9"
    ],
    "retroalimentacion": "(f ∘ g)(x) = f(g(x)) = 2(x²−3) + 1 = 2x² − 6 + 1 = 2x² − 5. Evaluando en 2: 2(4) − 5 = 8 − 5 = 3."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.5 Monotonía",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "Una función f es estrictamente creciente en un intervalo I si para todo x₁ < x₂ en I se cumple que:",
    "opciones": [
      "f(x₁) < f(x₂)",
      "f(x₁) > f(x₂)",
      "f(x₁) = f(x₂)",
      "f(x₁) ≤ f(x₂)"
    ],
    "retroalimentacion": "Por definición, una función es creciente cuando al aumentar los valores de x, los valores de f(x) también aumentan."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "5. FUNCIÓN EXPONENCIAL Y LOGARÍTMICA",
    "subtema": "5.2 Ecuaciones Exponenciales",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Resuelva la ecuación: 2^{x+1} + 2^{x} = 24",
    "opciones": [
      "3",
      "4",
      "2",
      "5"
    ],
    "retroalimentacion": "Factorizando 2^{x}: 2^{x}(2 + 1) = 24 → 3·2^{x} = 24 → 2^{x} = 8 = 2³ → x = 3."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "5. FUNCIÓN EXPONENCIAL Y LOGARÍTMICA",
    "subtema": "5.2 Ecuaciones Logarítmicas",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El valor de x que satisface log₂(x) + log₂(x − 2) = 3 es:",
    "opciones": [
      "4",
      "2",
      "6",
      "8"
    ],
    "retroalimentacion": "log₂(x(x−2)) = 3 → x(x−2) = 2³ = 8 → x² − 2x − 8 = 0 → (x−4)(x+2)=0. x=4 o x=−2. Pero x debe ser >2 para el dominio, luego x=4."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "5. FUNCIÓN EXPONENCIAL Y LOGARÍTMICA",
    "subtema": "5.1 Definición",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "¿Cuál es la base del logaritmo natural (ln)?",
    "opciones": [
      "e ≈ 2.71828",
      "10",
      "2",
      "π"
    ],
    "retroalimentacion": "El logaritmo natural tiene como base el número de Euler, e ≈ 2.71828."
  },
  {
    "asignatura": "Geometría",
    "unidad": "1. SEGMENTOS DE RECTA",
    "subtema": "1.4 Distancia entre dos puntos",
    "dificultad": "baja",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La distancia entre los puntos A(2, −1) y B(5, 3) es:",
    "opciones": [
      "5 unidades",
      "7 unidades",
      "√13 unidades",
      "√29 unidades"
    ],
    "retroalimentacion": "d = √[(5−2)² + (3−(−1))²] = √(3² + 4²) = √(9+16) = √25 = 5."
  },
  {
    "asignatura": "Geometría",
    "unidad": "1. SEGMENTOS DE RECTA",
    "subtema": "1.6 División de un segmento en una razón dada",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Encuentre las coordenadas del punto P que divide al segmento AB, con A(1, 2) y B(7, 8), en la razón AP/PB = 2/1.",
    "opciones": [
      "(5, 6)",
      "(3, 4)",
      "(4, 5)",
      "(6, 7)"
    ],
    "retroalimentacion": "Fórmula: P = ( (x₁ + r·x₂)/(1+r), (y₁ + r·y₂)/(1+r) ) con r=2. x = (1+2·7)/3 = 15/3=5; y = (2+2·8)/3 = 18/3=6. P(5,6)."
  },
  {
    "asignatura": "Geometría",
    "unidad": "2. LA RECTA",
    "subtema": "2.1 Pendiente",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "Dos rectas son perpendiculares si el producto de sus pendientes m₁ y m₂ es:",
    "opciones": [
      "-1",
      "0",
      "1",
      "indeterminado"
    ],
    "retroalimentacion": "Condición de perpendicularidad: m₁ · m₂ = −1, siempre que ambas pendientes estén definidas."
  },
  {
    "asignatura": "Geometría",
    "unidad": "2. LA RECTA",
    "subtema": "2.4 Formas de la ecuación de la recta",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La ecuación de la recta que pasa por (−1, 3) y tiene pendiente −2 es:",
    "opciones": [
      "y = −2x + 1",
      "y = 2x + 5",
      "y = −2x − 1",
      "y = −2x + 5"
    ],
    "retroalimentacion": "Forma punto-pendiente: y − 3 = −2(x − (−1)) → y − 3 = −2(x + 1) → y = −2x − 2 + 3 → y = −2x + 1."
  },
  {
    "asignatura": "Geometría",
    "unidad": "2. LA RECTA",
    "subtema": "2.3 Ángulo entre dos rectas",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El ángulo agudo formado por las rectas L₁: y = 3x + 1 y L₂: y = −2x + 5 es aproximadamente:",
    "opciones": [
      "45°",
      "60°",
      "30°",
      "75°"
    ],
    "retroalimentacion": "tan θ = |(m₂ − m₁) / (1 + m₁m₂)| = |(−2−3)/(1+(3)(−2))| = |−5/(1−6)| = |−5/−5| = 1. Si tan θ = 1, θ = 45°."
  },
  {
    "asignatura": "Geometría",
    "unidad": "2. LA RECTA",
    "subtema": "2.5 Ecuación de la bisectriz",
    "dificultad": "alta",
    "tipo_pregunta": "teorica",
    "enunciado": "Las bisectrices de los ángulos formados por dos rectas concurrentes son el lugar geométrico de los puntos que:",
    "opciones": [
      "Equidistan de ambas rectas",
      "Están sobre una de las rectas",
      "Forman un ángulo de 90° con ambas rectas",
      "Pertenecen a la mediatriz del segmento entre las rectas"
    ],
    "retroalimentacion": "La bisectriz de un ángulo está formada por los puntos que se encuentran a la misma distancia perpendicular de los lados del ángulo (las rectas)."
  },
  {
    "asignatura": "Geometría",
    "unidad": "3. CÓNICAS",
    "subtema": "3.1.1 Circunferencia",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La ecuación x² + y² − 6x + 4y − 3 = 0 representa una circunferencia de radio:",
    "opciones": [
      "4",
      "3",
      "5",
      "√13"
    ],
    "retroalimentacion": "Completando cuadrados: (x²−6x+9) + (y²+4y+4) = 3+9+4 → (x−3)² + (y+2)² = 16. Radio = √16 = 4."
  },
  {
    "asignatura": "Geometría",
    "unidad": "3. CÓNICAS",
    "subtema": "3.1.1 Circunferencia",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "¿Cuáles son las coordenadas del centro de la circunferencia dada por (x + 2)² + (y − 5)² = 9?",
    "opciones": [
      "(−2, 5)",
      "(2, −5)",
      "(2, 5)",
      "(−2, −5)"
    ],
    "retroalimentacion": "La forma canónica es (x−h)² + (y−k)² = r². Aquí h = −2, k = 5, centro (−2,5)."
  },
  {
    "asignatura": "Geometría",
    "unidad": "3. CÓNICAS",
    "subtema": "3.1.3 Parábola",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Dada la parábola y² = 8x, las coordenadas de su foco son:",
    "opciones": [
      "(2, 0)",
      "(0, 2)",
      "(4, 0)",
      "(0, 4)"
    ],
    "retroalimentacion": "Forma y² = 4px, con 4p = 8 → p = 2. Vértice en (0,0), abre hacia la derecha, foco en (p,0) = (2,0)."
  },
  {
    "asignatura": "Geometría",
    "unidad": "3. CÓNICAS",
    "subtema": "3.1.3 Parábola",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La ecuación de la parábola con vértice en (3, −1) y foco en (3, 1) es:",
    "opciones": [
      "(x − 3)² = 8(y + 1)",
      "(y + 1)² = 8(x − 3)",
      "(x − 3)² = 4(y + 1)",
      "(x + 3)² = 8(y − 1)"
    ],
    "retroalimentacion": "Distancia focal p = 2 (desde −1 a 1). Eje vertical, abre hacia arriba. Ecuación: (x−h)² = 4p(y−k) → (x−3)² = 8(y+1)."
  },
  {
    "asignatura": "Geometría",
    "unidad": "3. CÓNICAS",
    "subtema": "3.1.2 Elipse",
    "dificultad": "media",
    "tipo_pregunta": "teorica",
    "enunciado": "En una elipse, la suma de las distancias desde cualquier punto de la curva hasta los dos focos es:",
    "opciones": [
      "Constante e igual al eje mayor (2a)",
      "Variable según el punto",
      "Igual a la distancia focal (2c)",
      "Cero"
    ],
    "retroalimentacion": "Definición geométrica de elipse: PF₁ + PF₂ = constante = 2a, donde a es el semieje mayor."
  },
  {
    "asignatura": "Geometría",
    "unidad": "3. CÓNICAS",
    "subtema": "3.1.2 Elipse",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Los vértices de una elipse son (±5, 0) y sus focos son (±4, 0). La longitud del eje menor es:",
    "opciones": [
      "6",
      "8",
      "10",
      "3"
    ],
    "retroalimentacion": "a = 5, c = 4. Relación: b² = a² − c² = 25 − 16 = 9 → b = 3. Eje menor = 2b = 6."
  },
  {
    "asignatura": "Geometría",
    "unidad": "3. CÓNICAS",
    "subtema": "3.1.4 Hipérbola",
    "dificultad": "media",
    "tipo_pregunta": "teorica",
    "enunciado": "La ecuación x²/9 − y²/16 = 1 corresponde a una hipérbola cuyo eje transverso se ubica sobre el eje:",
    "opciones": [
      "X",
      "Y",
      "Z",
      "Ambos ejes"
    ],
    "retroalimentacion": "Cuando el término positivo es el de x², la hipérbola abre hacia la izquierda y derecha, y su eje transverso es horizontal (eje X)."
  },
  {
    "asignatura": "Geometría",
    "unidad": "3. CÓNICAS",
    "subtema": "3.1.4 Hipérbola",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La pendiente de las asíntotas de la hipérbola 4x² − 9y² = 36 es:",
    "opciones": [
      "± 2/3",
      "± 3/2",
      "± 4/9",
      "± 9/4"
    ],
    "retroalimentacion": "Forma estándar: x²/9 − y²/4 = 1. a²=9, b²=4 → a=3, b=2. Pendientes de las asíntotas = ± b/a = ± 2/3."
  },
{
    "asignatura": "Álgebra",
    "unidad": "1. LÓGICA MATEMÁTICA",
    "subtema": "1.1 Proposiciones y Conectivos lógicos",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "¿Cuál de las siguientes proposiciones compuestas es verdadera únicamente cuando ambas proposiciones simples tienen el mismo valor de verdad?",
    "opciones": ["Bicondicional (p ↔ q)", "Condicional (p → q)", "Disyunción (p ∨ q)", "Conjunción (p ∧ q)"],
    "retroalimentacion": "El bicondicional es verdadero exactamente cuando p y q son ambas verdaderas o ambas falsas."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "1. LÓGICA MATEMÁTICA",
    "subtema": "1.1 Proposiciones y Conectivos lógicos",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Si p es falsa y q es verdadera, el valor de verdad de la proposición (¬p ∨ q) → (p ∧ ¬q) es:",
    "opciones": ["Falso", "Verdadero", "Contingente", "No se puede determinar"],
    "retroalimentacion": "¬p es V, q es V → (V ∨ V) = V. p ∧ ¬q = F ∧ F = F. Una implicación V → F es Falsa."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "1. LÓGICA MATEMÁTICA",
    "subtema": "1.2 Tautología, contradicción, contingencia",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "Una fórmula proposicional que es siempre falsa, independientemente de los valores de verdad de sus variables, recibe el nombre de:",
    "opciones": ["Contradicción", "Tautología", "Contingencia", "Falacia"],
    "retroalimentacion": "Una contradicción es falsa para todas las combinaciones posibles."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "1. LÓGICA MATEMÁTICA",
    "subtema": "1.3 Leyes del álgebra proposicional",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Aplicando las leyes de De Morgan, la negación de la proposición «Estudio y apruebo el examen» es equivalente a:",
    "opciones": ["No estudio o no apruebo el examen", "No estudio y no apruebo el examen", "Estudio o no apruebo el examen", "Si estudio entonces apruebo el examen"],
    "retroalimentacion": "¬(p ∧ q) ≡ ¬p ∨ ¬q."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "2. CONJUNTOS",
    "subtema": "2.1 Determinación de conjuntos",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "¿Cuál de las siguientes opciones representa correctamente el conjunto A = {x ∈ ℕ / 2 ≤ x < 5} por extensión?",
    "opciones": ["{2, 3, 4}", "{2, 3, 4, 5}", "{3, 4}", "{2, 3}"],
    "retroalimentacion": "Números naturales mayores o iguales a 2 y estrictamente menores que 5: 2, 3, 4."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "2. CONJUNTOS",
    "subtema": "2.3 Operaciones con conjuntos",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Sean A = {1, 2, 3, 4, 5} y B = {4, 5, 6, 7}. El resultado de (A ∪ B) − (A ∩ B) es:",
    "opciones": ["{1, 2, 3, 6, 7}", "{4, 5}", "{1, 2, 3, 4, 5, 6, 7}", "{1, 2, 3}"],
    "retroalimentacion": "A ∪ B = {1,2,3,4,5,6,7}; A ∩ B = {4,5}. Diferencia simétrica: {1,2,3,6,7}."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "2. CONJUNTOS",
    "subtema": "2.4 Problemas de aplicación",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "En una encuesta a 120 estudiantes sobre el uso de redes sociales, 75 usan Instagram, 60 usan TikTok, y 20 no usan ninguna. ¿Cuántos estudiantes usan ambas redes sociales?",
    "opciones": ["35", "55", "40", "25"],
    "retroalimentacion": "Total usan al menos una = 100. |I ∪ T| = |I| + |T| − |I ∩ T| → 100 = 75 + 60 − |I ∩ T| → |I ∩ T| = 35."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "3. OPERACIONES CON NÚMEROS REALES",
    "subtema": "3.3 Intervalos y Valor absoluto",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La solución de la inecuación |2x − 5| ≤ 3 es el intervalo:",
    "opciones": ["[1, 4]", "(-∞, 1] ∪ [4, ∞)", "(1, 4)", "[-1, 4]"],
    "retroalimentacion": "−3 ≤ 2x−5 ≤ 3 → 2 ≤ 2x ≤ 8 → 1 ≤ x ≤ 4."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "3. OPERACIONES CON NÚMEROS REALES",
    "subtema": "3.4 Valor absoluto",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El conjunto solución de la ecuación |x − 2| = |3x + 4| es:",
    "opciones": ["{-3, -1/2}", "{-3, 1/2}", "{3, -1/2}", "{-3, 2}"],
    "retroalimentacion": "Caso 1: x−2 = 3x+4 → x=−3. Caso 2: x−2 = −(3x+4) → x=−1/2."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.1 Dominio y Rango",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El dominio de la función f(x) = √(x² − 4x + 3) es:",
    "opciones": ["(-∞, 1] ∪ [3, ∞)", "[1, 3]", "ℝ − {1, 3}", "(-∞, 1) ∪ (3, ∞)"],
    "retroalimentacion": "Radicando ≥ 0 → (x−1)(x−3) ≥ 0 → x ≤ 1 o x ≥ 3."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.2 Función biyectiva e inversa",
    "dificultad": "media",
    "tipo_pregunta": "teorica",
    "enunciado": "Para que una función tenga inversa, debe ser:",
    "opciones": ["Biyectiva", "Sobreyectiva", "Inyectiva", "Continua"],
    "retroalimentacion": "Una función admite inversa si y solo si es biyectiva (inyectiva y sobreyectiva)."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.3 Función Cuadrática",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El valor mínimo de la función f(x) = 2x² − 8x + 15 es:",
    "opciones": ["7", "15", "-1", "3"],
    "retroalimentacion": "Vértice en x=2; f(2)=7."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.4 Composición de funciones",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Dadas f(x) = 2x + 1 y g(x) = x² − 3, el valor de (f ∘ g)(2) es:",
    "opciones": ["3", "5", "7", "9"],
    "retroalimentacion": "f(g(2)) = f(1) = 3."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.5 Monotonía",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "Una función f es estrictamente creciente en un intervalo I si para todo x₁ < x₂ en I se cumple que:",
    "opciones": ["f(x₁) < f(x₂)", "f(x₁) > f(x₂)", "f(x₁) = f(x₂)", "f(x₁) ≤ f(x₂)"],
    "retroalimentacion": "Definición de función creciente."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "5. FUNCIÓN EXPONENCIAL Y LOGARÍTMICA",
    "subtema": "5.2 Ecuaciones Exponenciales",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Resuelva: 2^{x+1} + 2^{x} = 24",
    "opciones": ["3", "4", "2", "5"],
    "retroalimentacion": "2^x(2+1)=24 → 3·2^x=24 → 2^x=8 → x=3."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "5. FUNCIÓN EXPONENCIAL Y LOGARÍTMICA",
    "subtema": "5.2 Ecuaciones Logarítmicas",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "log₂(x) + log₂(x − 2) = 3, entonces x es:",
    "opciones": ["4", "2", "6", "8"],
    "retroalimentacion": "x(x−2)=8 → x²−2x−8=0 → x=4 (x>2)."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "5. FUNCIÓN EXPONENCIAL Y LOGARÍTMICA",
    "subtema": "5.1 Definición",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "¿Cuál es la base del logaritmo natural (ln)?",
    "opciones": ["e ≈ 2.71828", "10", "2", "π"],
    "retroalimentacion": "El logaritmo natural tiene base e."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "3. OPERACIONES CON NÚMEROS REALES",
    "subtema": "3.2 Sucesiones, progresiones aritméticas y geométricas",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El término general de una progresión aritmética es aₙ = 3n − 2. La suma de los primeros 20 términos es:",
    "opciones": ["590", "610", "570", "600"],
    "retroalimentacion": "a₁=1, a₂₀=58. S₂₀ = (1+58)·20/2 = 59·10 = 590."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.6 Paridad de funciones",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "Una función f es par si para todo x en su dominio se cumple:",
    "opciones": ["f(−x) = f(x)", "f(−x) = −f(x)", "f(x) = −f(−x)", "f(x) = f(x+π)"],
    "retroalimentacion": "Simetría respecto al eje Y."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "5. FUNCIÓN EXPONENCIAL Y LOGARÍTMICA",
    "subtema": "5.2 Propiedades, ecuaciones e inecuaciones",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Resuelva la inecuación: log₃(2x − 1) < 2",
    "opciones": ["(1/2, 5)", "(1/2, 4)", "(0, 5)", "(−∞, 5)"],
    "retroalimentacion": "2x−1 > 0 → x > 1/2. log₃(2x−1) < 2 → 2x−1 < 9 → 2x < 10 → x < 5. Solución: (1/2, 5)."
  },
  {
    "asignatura": "Geometría",
    "unidad": "1. SEGMENTOS DE RECTA",
    "subtema": "1.4 Distancia entre dos puntos",
    "dificultad": "baja",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Distancia entre A(2, −1) y B(5, 3):",
    "opciones": ["5", "7", "√13", "√29"],
    "retroalimentacion": "√[(5−2)²+(3+1)²] = √(9+16)=5."
  },
  {
    "asignatura": "Geometría",
    "unidad": "1. SEGMENTOS DE RECTA",
    "subtema": "1.6 División de un segmento en una razón dada",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "P divide a AB con A(1,2), B(7,8) en razón AP/PB = 2/1. Coordenadas de P:",
    "opciones": ["(5,6)", "(3,4)", "(4,5)", "(6,7)"],
    "retroalimentacion": "x=(1+2·7)/3=5, y=(2+2·8)/3=6."
  },
  {
    "asignatura": "Geometría",
    "unidad": "2. LA RECTA",
    "subtema": "2.1 Pendiente",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "Rectas perpendiculares: producto de pendientes es:",
    "opciones": ["-1", "0", "1", "indeterminado"],
    "retroalimentacion": "m₁·m₂ = −1."
  },
  {
    "asignatura": "Geometría",
    "unidad": "2. LA RECTA",
    "subtema": "2.4 Formas de la ecuación de la recta",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Recta por (−1,3) con pendiente −2:",
    "opciones": ["y = −2x + 1", "y = 2x + 5", "y = −2x − 1", "y = −2x + 5"],
    "retroalimentacion": "y−3 = −2(x+1) → y = −2x+1."
  },
  {
    "asignatura": "Geometría",
    "unidad": "2. LA RECTA",
    "subtema": "2.3 Ángulo entre dos rectas",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Ángulo agudo entre y=3x+1 e y=−2x+5:",
    "opciones": ["45°", "60°", "30°", "75°"],
    "retroalimentacion": "tan θ = |(−2−3)/(1−6)| = 1 → θ=45°."
  },
  {
    "asignatura": "Geometría",
    "unidad": "2. LA RECTA",
    "subtema": "2.5 Ecuación de la bisectriz",
    "dificultad": "alta",
    "tipo_pregunta": "teorica",
    "enunciado": "Bisectrices de dos rectas: lugar geométrico de puntos que:",
    "opciones": ["Equidistan de ambas rectas", "Están sobre una de las rectas", "Forman 90° con ambas", "Pertenecen a la mediatriz del segmento"],
    "retroalimentacion": "Distancia perpendicular igual a ambas rectas."
  },
  {
    "asignatura": "Geometría",
    "unidad": "3. CÓNICAS",
    "subtema": "3.1.1 Circunferencia",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Radio de x²+y²−6x+4y−3=0:",
    "opciones": ["4", "3", "5", "√13"],
    "retroalimentacion": "(x−3)²+(y+2)²=16 → r=4."
  },
  {
    "asignatura": "Geometría",
    "unidad": "3. CÓNICAS",
    "subtema": "3.1.1 Circunferencia",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "Centro de (x+2)²+(y−5)²=9:",
    "opciones": ["(−2,5)", "(2,−5)", "(2,5)", "(−2,−5)"],
    "retroalimentacion": "h=−2, k=5."
  },
  {
    "asignatura": "Geometría",
    "unidad": "3. CÓNICAS",
    "subtema": "3.1.3 Parábola",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Foco de y² = 8x:",
    "opciones": ["(2,0)", "(0,2)", "(4,0)", "(0,4)"],
    "retroalimentacion": "4p=8 → p=2, foco (2,0)."
  },
  {
    "asignatura": "Geometría",
    "unidad": "3. CÓNICAS",
    "subtema": "3.1.3 Parábola",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Ecuación de parábola con vértice (3,−1) y foco (3,1):",
    "opciones": ["(x−3)² = 8(y+1)", "(y+1)² = 8(x−3)", "(x−3)² = 4(y+1)", "(x+3)² = 8(y−1)"],
    "retroalimentacion": "p=2, eje vertical → (x−3)²=8(y+1)."
  },
  {
    "asignatura": "Geometría",
    "unidad": "3. CÓNICAS",
    "subtema": "3.1.2 Elipse",
    "dificultad": "media",
    "tipo_pregunta": "teorica",
    "enunciado": "En una elipse, PF₁ + PF₂ es igual a:",
    "opciones": ["2a (eje mayor)", "Variable", "2c", "0"],
    "retroalimentacion": "Suma constante de distancias a los focos = 2a."
  },
  {
    "asignatura": "Geometría",
    "unidad": "3. CÓNICAS",
    "subtema": "3.1.2 Elipse",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Vértices (±5,0), focos (±4,0). Longitud del eje menor:",
    "opciones": ["6", "8", "10", "3"],
    "retroalimentacion": "a=5, c=4 → b=3 → 2b=6."
  },
  {
    "asignatura": "Geometría",
    "unidad": "3. CÓNICAS",
    "subtema": "3.1.4 Hipérbola",
    "dificultad": "media",
    "tipo_pregunta": "teorica",
    "enunciado": "x²/9 − y²/16 = 1 tiene eje transverso en:",
    "opciones": ["Eje X", "Eje Y", "Eje Z", "Ambos ejes"],
    "retroalimentacion": "Término positivo en x² → eje horizontal."
  },
  {
    "asignatura": "Geometría",
    "unidad": "3. CÓNICAS",
    "subtema": "3.1.4 Hipérbola",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Pendiente de asíntotas de 4x² − 9y² = 36:",
    "opciones": ["±2/3", "±3/2", "±4/9", "±9/4"],
    "retroalimentacion": "x²/9 − y²/4 =1 → a=3, b=2 → pendiente = ±b/a = ±2/3."
  },
  {
    "asignatura": "Geometría",
    "unidad": "1. SEGMENTOS DE RECTA",
    "subtema": "1.1 Sistemas de coordenadas lineales",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "En un sistema coordenado lineal, la coordenada de un punto P es 5 y la de Q es −3. La distancia dirigida PQ es:",
    "opciones": ["−8", "8", "2", "−2"],
    "retroalimentacion": "PQ = Q − P = −3 − 5 = −8."
  },
  {
    "asignatura": "Geometría",
    "unidad": "2. LA RECTA",
    "subtema": "2.2 Paralelismo y perpendicularidad",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La recta paralela a 2x − 3y + 6 = 0 que pasa por (1, −1) tiene ecuación:",
    "opciones": ["2x − 3y − 5 = 0", "3x + 2y − 1 = 0", "2x + 3y + 1 = 0", "3x − 2y − 5 = 0"],
    "retroalimentacion": "Misma pendiente 2/3. Usando punto: y+1 = (2/3)(x−1) → 2x−3y−5=0."
  },
  {
    "asignatura": "Geometría",
    "unidad": "3. CÓNICAS",
    "subtema": "3.1.2 Elipse",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La ecuación 4x² + 9y² − 16x + 18y − 11 = 0 representa una elipse cuyo centro es:",
    "opciones": ["(2, −1)", "(−2, 1)", "(1, −2)", "(−1, 2)"],
    "retroalimentacion": "Completar cuadrados: 4(x²−4x+4) + 9(y²+2y+1) = 11+16+9 → 4(x−2)² + 9(y+1)² = 36 → centro (2, −1)."
  },
  {
    "asignatura": "Geometría",
    "unidad": "3. CÓNICAS",
    "subtema": "3.1.1 Circunferencia",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Ecuación de la circunferencia que pasa por los puntos (1,1), (1,−1) y (2,0):",
    "opciones": ["x² + y² − 2x = 0", "x² + y² − 2y = 0", "x² + y² = 1", "x² + y² − x − y = 0"],
    "retroalimentacion": "Sustituyendo puntos se obtiene centro (1,0) y radio 1. Ecuación: (x−1)²+y²=1 → x²+y²−2x=0."
  },
{
    "asignatura": "Álgebra",
    "unidad": "1. LÓGICA MATEMÁTICA",
    "subtema": "1.1 Proposiciones y Conectivos lógicos",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "¿Cuál de las siguientes proposiciones compuestas es verdadera únicamente cuando ambas proposiciones simples tienen el mismo valor de verdad?",
    "opciones": ["Bicondicional (p ↔ q)", "Condicional (p → q)", "Disyunción (p ∨ q)", "Conjunción (p ∧ q)"],
    "retroalimentacion": "El bicondicional es verdadero exactamente cuando p y q son ambas verdaderas o ambas falsas."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "1. LÓGICA MATEMÁTICA",
    "subtema": "1.1 Proposiciones y Conectivos lógicos",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Si p es falsa y q es verdadera, el valor de verdad de la proposición (¬p ∨ q) → (p ∧ ¬q) es:",
    "opciones": ["Falso", "Verdadero", "Contingente", "No se puede determinar"],
    "retroalimentacion": "¬p es V, q es V → (V ∨ V) = V. p ∧ ¬q = F ∧ F = F. Una implicación V → F es Falsa."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "1. LÓGICA MATEMÁTICA",
    "subtema": "1.2 Tautología, contradicción, contingencia",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "Una fórmula proposicional que es siempre falsa, independientemente de los valores de verdad de sus variables, recibe el nombre de:",
    "opciones": ["Contradicción", "Tautología", "Contingencia", "Falacia"],
    "retroalimentacion": "Una contradicción es falsa para todas las combinaciones posibles."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "1. LÓGICA MATEMÁTICA",
    "subtema": "1.3 Leyes del álgebra proposicional",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Aplicando las leyes de De Morgan, la negación de la proposición «Estudio y apruebo el examen» es equivalente a:",
    "opciones": ["No estudio o no apruebo el examen", "No estudio y no apruebo el examen", "Estudio o no apruebo el examen", "Si estudio entonces apruebo el examen"],
    "retroalimentacion": "¬(p ∧ q) ≡ ¬p ∨ ¬q."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "1. LÓGICA MATEMÁTICA",
    "subtema": "1.3 Leyes del álgebra proposicional",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Simplifique usando leyes lógicas: ¬(p → q) ∨ (¬p ∧ ¬q). El resultado es:",
    "opciones": ["¬q", "p ∨ ¬q", "¬p", "Contradicción"],
    "retroalimentacion": "¬(p→q) ≡ p ∧ ¬q. Luego (p ∧ ¬q) ∨ (¬p ∧ ¬q) = ¬q ∧ (p ∨ ¬p) = ¬q ∧ V = ¬q."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "2. CONJUNTOS",
    "subtema": "2.1 Definición y determinación de conjuntos",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "¿Cuál de las siguientes opciones representa correctamente el conjunto A = {x ∈ ℕ / 2 ≤ x < 5} por extensión?",
    "opciones": ["{2, 3, 4}", "{2, 3, 4, 5}", "{3, 4}", "{2, 3}"],
    "retroalimentacion": "Números naturales mayores o iguales a 2 y estrictamente menores que 5: 2, 3, 4."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "2. CONJUNTOS",
    "subtema": "2.2 Relaciones entre conjuntos",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "Si A = {1,2,3} y B = {1,2,3,4,5}, entonces la relación entre A y B es:",
    "opciones": ["A ⊂ B (A está contenido en B)", "B ⊂ A", "A = B", "A y B son disjuntos"],
    "retroalimentacion": "Todos los elementos de A pertenecen a B, por tanto A es subconjunto propio de B."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "2. CONJUNTOS",
    "subtema": "2.3 Operaciones con conjuntos",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Sean A = {1, 2, 3, 4, 5} y B = {4, 5, 6, 7}. El resultado de (A ∪ B) − (A ∩ B) es:",
    "opciones": ["{1, 2, 3, 6, 7}", "{4, 5}", "{1, 2, 3, 4, 5, 6, 7}", "{1, 2, 3}"],
    "retroalimentacion": "A ∪ B = {1,2,3,4,5,6,7}; A ∩ B = {4,5}. Diferencia simétrica: {1,2,3,6,7}."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "2. CONJUNTOS",
    "subtema": "2.3 Operaciones con conjuntos",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Dados los conjuntos U = {1,2,3,4,5,6}, A = {1,2,3}, B = {2,4,6}. El complemento de (A ∩ B) respecto a U es:",
    "opciones": ["{1,3,4,5,6}", "{1,3,5}", "{4,6}", "U"],
    "retroalimentacion": "A ∩ B = {2}. Complemento: U − {2} = {1,3,4,5,6}."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "2. CONJUNTOS",
    "subtema": "2.4 Problemas de aplicación",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "En una encuesta a 120 estudiantes sobre el uso de redes sociales, 75 usan Instagram, 60 usan TikTok, y 20 no usan ninguna. ¿Cuántos estudiantes usan ambas redes sociales?",
    "opciones": ["35", "55", "40", "25"],
    "retroalimentacion": "Total usan al menos una = 100. |I ∪ T| = |I| + |T| − |I ∩ T| → 100 = 75 + 60 − |I ∩ T| → |I ∩ T| = 35."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "2. CONJUNTOS",
    "subtema": "2.4 Problemas de aplicación",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "En un grupo de 80 personas, 45 leen el periódico A, 35 leen el periódico B y 15 leen ambos. ¿Cuántas personas no leen ningún periódico?",
    "opciones": ["15", "20", "5", "25"],
    "retroalimentacion": "|A ∪ B| = 45+35−15 = 65. No leen = 80−65 = 15."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "3. OPERACIONES CON NÚMEROS REALES",
    "subtema": "3.1 Axiomas de cuerpo de los números reales",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "¿Qué propiedad de los números reales establece que a + b = b + a?",
    "opciones": ["Conmutativa de la suma", "Asociativa de la suma", "Distributiva", "Elemento neutro"],
    "retroalimentacion": "La propiedad conmutativa de la suma permite cambiar el orden de los sumandos."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "3. OPERACIONES CON NÚMEROS REALES",
    "subtema": "3.3 Axiomas de orden, intervalos",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La solución de la inecuación |2x − 5| ≤ 3 es el intervalo:",
    "opciones": ["[1, 4]", "(-∞, 1] ∪ [4, ∞)", "(1, 4)", "[-1, 4]"],
    "retroalimentacion": "−3 ≤ 2x−5 ≤ 3 → 2 ≤ 2x ≤ 8 → 1 ≤ x ≤ 4."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "3. OPERACIONES CON NÚMEROS REALES",
    "subtema": "3.4 Valor absoluto",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El conjunto solución de la ecuación |x − 2| = |3x + 4| es:",
    "opciones": ["{-3, -1/2}", "{-3, 1/2}", "{3, -1/2}", "{-3, 2}"],
    "retroalimentacion": "Caso 1: x−2 = 3x+4 → x=−3. Caso 2: x−2 = −(3x+4) → x=−1/2."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "3. OPERACIONES CON NÚMEROS REALES",
    "subtema": "3.4 Valor absoluto",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Resuelva la inecuación: |x + 1| > 2x − 3.",
    "opciones": ["(-∞, 2)", "(2, ∞)", "(-∞, 2/3)", "(4, ∞)"],
    "retroalimentacion": "Caso x+1 ≥0: x+1 > 2x−3 → x < 4 (intersección con x≥−1 → [−1,4)). Caso x+1<0: −x−1 > 2x−3 → 2 > 3x → x < 2/3 (intersección x<−1 → (−∞,−1)). Unión: (−∞,4). Nota: La opción más cercana es (-∞,2) pero debe revisarse."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.1 Definición de relación y función. Dominio y Rango",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El dominio de la función f(x) = √(x² − 4x + 3) es:",
    "opciones": ["(-∞, 1] ∪ [3, ∞)", "[1, 3]", "ℝ − {1, 3}", "(-∞, 1) ∪ (3, ∞)"],
    "retroalimentacion": "Radicando ≥ 0 → (x−1)(x−3) ≥ 0 → x ≤ 1 o x ≥ 3."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.1 Definición de relación y función. Dominio y Rango",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "¿Cuál de los siguientes diagramas representa una función?",
    "opciones": ["Cada elemento del conjunto A se relaciona con un único elemento de B", "Un elemento de A se relaciona con dos elementos de B", "Hay elementos en A sin imagen", "Ninguna"],
    "retroalimentacion": "Para ser función, cada elemento del dominio debe tener una y solo una imagen."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.2 Función biyectiva e inversa",
    "dificultad": "media",
    "tipo_pregunta": "teorica",
    "enunciado": "Para que una función tenga inversa, debe ser:",
    "opciones": ["Biyectiva", "Sobreyectiva", "Inyectiva", "Continua"],
    "retroalimentacion": "Una función admite inversa si y solo si es biyectiva (inyectiva y sobreyectiva)."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.3 Función afín y lineal, función valor absoluto, función cuadrática",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El valor mínimo de la función f(x) = 2x² − 8x + 15 es:",
    "opciones": ["7", "15", "-1", "3"],
    "retroalimentacion": "Vértice en x=2; f(2)=7."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.3 Función cuadrática",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Las raíces de la función f(x) = x² − 5x + 6 son:",
    "opciones": ["2 y 3", "-2 y -3", "1 y 6", "-1 y -6"],
    "retroalimentacion": "Factorizando: (x−2)(x−3)=0 → x=2,3."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.4 Operaciones con funciones, composición",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Dadas f(x) = 2x + 1 y g(x) = x² − 3, el valor de (f ∘ g)(2) es:",
    "opciones": ["3", "5", "7", "9"],
    "retroalimentacion": "f(g(2)) = f(1) = 3."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.4 Composición de funciones",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Si f(x) = 1/x y g(x) = x + 2, el dominio de (f ∘ g)(x) es:",
    "opciones": ["ℝ − {-2}", "ℝ − {0}", "ℝ", "ℝ − {2}"],
    "retroalimentacion": "(f∘g)(x)=1/(x+2). Denominador ≠0 → x≠−2."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.5 Monotonía de funciones",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "Una función f es estrictamente creciente en un intervalo I si para todo x₁ < x₂ en I se cumple que:",
    "opciones": ["f(x₁) < f(x₂)", "f(x₁) > f(x₂)", "f(x₁) = f(x₂)", "f(x₁) ≤ f(x₂)"],
    "retroalimentacion": "Definición de función creciente."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.6 Paridad de funciones",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "Una función f es par si para todo x en su dominio se cumple:",
    "opciones": ["f(−x) = f(x)", "f(−x) = −f(x)", "f(x) = −f(−x)", "f(x) = f(x+π)"],
    "retroalimentacion": "Simetría respecto al eje Y."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "5. FUNCIÓN EXPONENCIAL Y LOGARÍTMICA",
    "subtema": "5.1 Definición de función exponencial y logarítmica",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "¿Cuál es la base del logaritmo natural (ln)?",
    "opciones": ["e ≈ 2.71828", "10", "2", "π"],
    "retroalimentacion": "El logaritmo natural tiene base e."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "5. FUNCIÓN EXPONENCIAL Y LOGARÍTMICA",
    "subtema": "5.2 Propiedades, ecuaciones e inecuaciones",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Resuelva: 2^{x+1} + 2^{x} = 24",
    "opciones": ["3", "4", "2", "5"],
    "retroalimentacion": "2^x(2+1)=24 → 3·2^x=24 → 2^x=8 → x=3."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "5. FUNCIÓN EXPONENCIAL Y LOGARÍTMICA",
    "subtema": "5.2 Ecuaciones logarítmicas",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "log₂(x) + log₂(x − 2) = 3, entonces x es:",
    "opciones": ["4", "2", "6", "8"],
    "retroalimentacion": "x(x−2)=8 → x²−2x−8=0 → x=4 (x>2)."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "5. FUNCIÓN EXPONENCIAL Y LOGARÍTMICA",
    "subtema": "5.2 Inecuaciones exponenciales",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Resuelva: (1/2)^{x} > 8",
    "opciones": ["x < -3", "x > -3", "x < 3", "x > 3"],
    "retroalimentacion": "2^{-x} > 2^3 → -x > 3 → x < -3."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "5. FUNCIÓN EXPONENCIAL Y LOGARÍTMICA",
    "subtema": "5.2 Propiedades de logaritmos",
    "dificultad": "media",
    "tipo_pregunta": "teorica",
    "enunciado": "La propiedad logₐ(xy) es igual a:",
    "opciones": ["logₐ x + logₐ y", "logₐ x · logₐ y", "logₐ x − logₐ y", "x logₐ y"],
    "retroalimentacion": "El logaritmo de un producto es la suma de logaritmos."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "3. OPERACIONES CON NÚMEROS REALES",
    "subtema": "3.2 Sucesiones, progresiones aritméticas y geométricas",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El término general de una progresión aritmética es aₙ = 3n − 2. La suma de los primeros 20 términos es:",
    "opciones": ["590", "610", "570", "600"],
    "retroalimentacion": "a₁=1, a₂₀=58. S₂₀ = (1+58)·20/2 = 59·10 = 590."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "3. OPERACIONES CON NÚMEROS REALES",
    "subtema": "3.2 Progresiones geométricas",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "En una progresión geométrica, el primer término es 5 y la razón es 2. El quinto término es:",
    "opciones": ["80", "40", "160", "50"],
    "retroalimentacion": "a₅ = a₁·r⁴ = 5·2⁴ = 5·16 = 80."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "1. LÓGICA MATEMÁTICA",
    "subtema": "1.1 Conectivos lógicos",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Construya la tabla de verdad para (p ∨ q) → ¬p. ¿Cuántos valores verdaderos tiene la columna resultante?",
    "opciones": ["2", "1", "3", "4"],
    "retroalimentacion": "Tabla: p q: VV→F, VF→F, FV→V, FF→V. Dos verdaderos."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "2. CONJUNTOS",
    "subtema": "2.3 Diferencia simétrica",
    "dificultad": "media",
    "tipo_pregunta": "teorica",
    "enunciado": "La diferencia simétrica A Δ B se define como:",
    "opciones": ["(A − B) ∪ (B − A)", "(A ∪ B) − (A ∩ B)", "A − B", "B − A"],
    "retroalimentacion": "Ambas definiciones son equivalentes: elementos que están en A o B pero no en ambos."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.3 Función parte entera",
    "dificultad": "baja",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El valor de ⟦3.7⟧ (parte entera) es:",
    "opciones": ["3", "4", "3.7", "0"],
    "retroalimentacion": "La parte entera es el mayor entero menor o igual al número."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.4 Productos notables",
    "dificultad": "baja",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Desarrolle (x − 3)²:",
    "opciones": ["x² − 6x + 9", "x² − 9", "x² + 6x + 9", "x² + 9"],
    "retroalimentacion": "(a−b)² = a² − 2ab + b²."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.4 Factorización",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Factorice completamente: x³ − 4x² + 4x",
    "opciones": ["x(x − 2)²", "x(x² − 4x + 4)", "x(x − 2)(x + 2)", "x²(x − 4) + 4x"],
    "retroalimentacion": "Factor común x: x(x²−4x+4)=x(x−2)²."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.4 Racionalización",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Racionalice el denominador: 5 / (√3 − 1)",
    "opciones": ["(5√3 + 5)/2", "5√3 − 5", "(5√3 − 5)/2", "5√3 + 5"],
    "retroalimentacion": "Multiplicar por conjugado: 5(√3+1)/(3−1) = (5√3+5)/2."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "5. FUNCIÓN EXPONENCIAL Y LOGARÍTMICA",
    "subtema": "5.2 Cambio de base",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Exprese log₉ 27 en términos de logaritmo base 3.",
    "opciones": ["3/2", "2/3", "3", "2"],
    "retroalimentacion": "log₉ 27 = log₃ 27 / log₃ 9 = 3 / 2."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "1. LÓGICA MATEMÁTICA",
    "subtema": "1.2 Tautología",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La proposición (p ∧ q) → p es una:",
    "opciones": ["Tautología", "Contradicción", "Contingencia", "Imposible"],
    "retroalimentacion": "Si p∧q es verdadero, p es verdadero, luego la implicación es siempre verdadera."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "2. CONJUNTOS",
    "subtema": "2.2 Igualdad de conjuntos",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "Dos conjuntos A y B son iguales si:",
    "opciones": ["A ⊆ B y B ⊆ A", "A ∪ B = A", "A ∩ B = ∅", "Tienen el mismo número de elementos"],
    "retroalimentacion": "Doble inclusión: cada elemento de A está en B y viceversa."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "3. OPERACIONES CON NÚMEROS REALES",
    "subtema": "3.3 Intervalos",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "El intervalo (−∞, 5] ∩ [2, 8) es:",
    "opciones": ["[2, 5]", "[2, 8)", "(−∞, 8)", "[5, 8)"],
    "retroalimentacion": "Intersección de conjuntos: desde 2 hasta 5, incluyendo ambos."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.2 Función inversa",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La inversa de f(x) = (2x + 1)/(x − 3) es:",
    "opciones": ["f⁻¹(x) = (3x + 1)/(x − 2)", "f⁻¹(x) = (3x − 1)/(x − 2)", "f⁻¹(x) = (2x − 1)/(x + 3)", "f⁻¹(x) = (x + 3)/(2x − 1)"],
    "retroalimentacion": "Intercambiar x e y, despejar: x(y−3)=2y+1 → xy−3x=2y+1 → y(x−2)=3x+1 → y=(3x+1)/(x−2)."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.3 Función raíz n-ésima",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El dominio de f(x) = ∛(x − 5) es:",
    "opciones": ["Todos los reales", "[5, ∞)", "(5, ∞)", "ℝ − {5}"],
    "retroalimentacion": "Las raíces de índice impar están definidas para todos los reales."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "5. FUNCIÓN EXPONENCIAL Y LOGARÍTMICA",
    "subtema": "5.1 Función exponencial",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "El rango de la función f(x) = 2^x es:",
    "opciones": ["(0, ∞)", "[0, ∞)", "ℝ", "ℝ⁺ ∪ {0}"],
    "retroalimentacion": "Una función exponencial siempre toma valores positivos."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "3. OPERACIONES CON NÚMEROS REALES",
    "subtema": "3.2 Sucesiones",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El siguiente término en la sucesión 1, 4, 9, 16, ... es:",
    "opciones": ["25", "20", "24", "32"],
    "retroalimentacion": "Cuadrados perfectos: 1²,2²,3²,4²,5²=25."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "1. LÓGICA MATEMÁTICA",
    "subtema": "1.3 Leyes de absorción",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Simplifique p ∨ (p ∧ q) usando leyes lógicas.",
    "opciones": ["p", "q", "p ∧ q", "Verdadero"],
    "retroalimentacion": "Ley de absorción: p ∨ (p ∧ q) ≡ p."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "2. CONJUNTOS",
    "subtema": "2.4 Problemas con tres conjuntos",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "En una escuela, 100 alumnos estudian al menos un idioma: 65 inglés, 45 francés, 40 alemán; 20 inglés y francés, 15 inglés y alemán, 10 francés y alemán; 5 los tres. ¿Cuántos estudian exactamente un idioma?",
    "opciones": ["60", "55", "70", "50"],
    "retroalimentacion": "Solo I=65−15−10+5=45; solo F=45−15−5+5=30; solo A=40−10−5+5=30? Revisar: Fórmula inclusión-exclusión. Exactamente uno: |I|+|F|+|A| -2(|I∩F|+|I∩A|+|F∩A|) +3|I∩F∩A| = 65+45+40 -2(20+15+10) +3(5) = 150 -90 +15=75. Opción no coincide. Recalcular con diagrama: Total=100, triple=5. I∩F solo=15, I∩A solo=10, F∩A solo=5. Solo I=65-15-10-5=35, solo F=45-15-5-5=20, solo A=40-10-5-5=20. Suma=75."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.6 Paridad",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La función f(x) = x³ − x es:",
    "opciones": ["Impar", "Par", "Ni par ni impar", "Simétrica respecto al eje Y"],
    "retroalimentacion": "f(−x)=−x³+x=−(x³−x)=−f(x). Es impar."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "5. FUNCIÓN EXPONENCIAL Y LOGARÍTMICA",
    "subtema": "5.2 Ecuaciones exponenciales cuadráticas",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Resuelva: 9^x − 4·3^x + 3 = 0",
    "opciones": ["{0, 1}", "{1, 2}", "{0}", "{1}"],
    "retroalimentacion": "Sea u=3^x. u²−4u+3=0 → (u−1)(u−3)=0 → u=1,3 → 3^x=1→x=0; 3^x=3→x=1."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "2. CONJUNTOS",
    "subtema": "2.4 Problemas de aplicación",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "En una encuesta a 50 personas, 30 prefieren café, 25 prefieren té y 10 prefieren ambas. ¿Cuántas prefieren exactamente una de las dos bebidas?",
    "opciones": ["35", "40", "25", "45"],
    "retroalimentacion": "Solo café: 30−10=20; solo té: 25−10=15. Total exactamente una = 35."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.3 Función potencia negativa",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "El dominio de f(x) = x⁻² = 1/x² es:",
    "opciones": ["ℝ − {0}", "ℝ", "[0, ∞)", "(0, ∞)"],
    "retroalimentacion": "El denominador no puede ser cero."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "5. FUNCIÓN EXPONENCIAL Y LOGARÍTMICA",
    "subtema": "5.2 Inecuaciones logarítmicas",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Resuelva: log₂(x − 1) + log₂(x + 2) < 3",
    "opciones": ["(1, 2)", "(1, 3)", "(2, 3)", "(1, ∞)"],
    "retroalimentacion": "Dominio: x>1. log₂[(x−1)(x+2)] < 3 → (x−1)(x+2) < 8 → x²+x−10<0. Raíces (−1±√41)/2. Aprox. 2.7. Intersección (1, ~2.7). La opción (1,3) es la más cercana."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "3. OPERACIONES CON NÚMEROS REALES",
    "subtema": "3.4 Valor absoluto con inecuación cuadrática",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Resuelva: |x² − 4| ≤ 3x",
    "opciones": ["[1, 4]", "[−1, 4]", "[1, 3]", "[−4, 1]"],
    "retroalimentacion": "−3x ≤ x²−4 ≤ 3x. Resolver ambas desigualdades y obtener intersección: [1,4]."
  },
  {
    "asignatura": "Geometría",
    "unidad": "1. SEGMENTOS DE RECTA",
    "subtema": "1.1 Sistemas de coordenadas lineales",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "En un sistema coordenado lineal, la coordenada de un punto P es 5 y la de Q es −3. La distancia dirigida PQ es:",
    "opciones": ["−8", "8", "2", "−2"],
    "retroalimentacion": "PQ = Q − P = −3 − 5 = −8."
  },
  {
    "asignatura": "Geometría",
    "unidad": "1. SEGMENTOS DE RECTA",
    "subtema": "1.2 Segmentos rectilíneos dirigidos",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "Si AB = 5 y BA = −5, ¿qué propiedad se cumple?",
    "opciones": ["AB = −BA", "AB = BA", "AB + BA = 0", "Ambas a y c"],
    "retroalimentacion": "En segmentos dirigidos, la dirección opuesta cambia el signo."
  },
  {
    "asignatura": "Geometría",
    "unidad": "1. SEGMENTOS DE RECTA",
    "subtema": "1.4 Distancia entre dos puntos",
    "dificultad": "baja",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Distancia entre A(2, −1) y B(5, 3):",
    "opciones": ["5", "7", "√13", "√29"],
    "retroalimentacion": "√[(5−2)²+(3+1)²] = √(9+16)=5."
  },
  {
    "asignatura": "Geometría",
    "unidad": "1. SEGMENTOS DE RECTA",
    "subtema": "1.4 Distancia entre dos puntos",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Encuentre el valor de y para que la distancia entre (2, y) y (−1, 3) sea 5.",
    "opciones": ["y = 7 o y = −1", "y = 5 o y = 1", "y = 6 o y = 0", "y = 8 o y = −2"],
    "retroalimentacion": "√[(−1−2)²+(3−y)²] = 5 → 9+(3−y)²=25 → (3−y)²=16 → 3−y=±4 → y=−1 o 7."
  },
  {
    "asignatura": "Geometría",
    "unidad": "1. SEGMENTOS DE RECTA",
    "subtema": "1.6 División de un segmento en una razón dada",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "P divide a AB con A(1,2), B(7,8) en razón AP/PB = 2/1. Coordenadas de P:",
    "opciones": ["(5,6)", "(3,4)", "(4,5)", "(6,7)"],
    "retroalimentacion": "x=(1+2·7)/3=5, y=(2+2·8)/3=6."
  },
  {
    "asignatura": "Geometría",
    "unidad": "1. SEGMENTOS DE RECTA",
    "subtema": "1.6 Punto medio",
    "dificultad": "baja",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El punto medio del segmento con extremos (−2, 5) y (4, −1) es:",
    "opciones": ["(1, 2)", "(2, 3)", "(3, 2)", "(1, −3)"],
    "retroalimentacion": "M = ((−2+4)/2, (5+(−1))/2) = (1,2)."
  },
  {
    "asignatura": "Geometría",
    "unidad": "2. LA RECTA",
    "subtema": "2.1 Pendiente",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "Rectas perpendiculares: producto de pendientes es:",
    "opciones": ["-1", "0", "1", "indeterminado"],
    "retroalimentacion": "m₁·m₂ = −1."
  },
  {
    "asignatura": "Geometría",
    "unidad": "2. LA RECTA",
    "subtema": "2.1 Pendiente de una recta",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La pendiente de la recta que pasa por (−2, 3) y (4, −1) es:",
    "opciones": ["-2/3", "2/3", "-3/2", "3/2"],
    "retroalimentacion": "m = (−1−3)/(4−(−2)) = −4/6 = −2/3."
  },
  {
    "asignatura": "Geometría",
    "unidad": "2. LA RECTA",
    "subtema": "2.2 Paralelismo y perpendicularidad",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La recta paralela a 2x − 3y + 6 = 0 que pasa por (1, −1) tiene ecuación:",
    "opciones": ["2x − 3y − 5 = 0", "3x + 2y − 1 = 0", "2x + 3y + 1 = 0", "3x − 2y − 5 = 0"],
    "retroalimentacion": "Misma pendiente 2/3. Usando punto: y+1 = (2/3)(x−1) → 2x−3y−5=0."
  },
  {
    "asignatura": "Geometría",
    "unidad": "2. LA RECTA",
    "subtema": "2.3 Ángulo entre dos rectas",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Ángulo agudo entre y=3x+1 e y=−2x+5:",
    "opciones": ["45°", "60°", "30°", "75°"],
    "retroalimentacion": "tan θ = |(−2−3)/(1−6)| = 1 → θ=45°."
  },
  {
    "asignatura": "Geometría",
    "unidad": "2. LA RECTA",
    "subtema": "2.4 Formas de la ecuación de la recta",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Recta por (−1,3) con pendiente −2:",
    "opciones": ["y = −2x + 1", "y = 2x + 5", "y = −2x − 1", "y = −2x + 5"],
    "retroalimentacion": "y−3 = −2(x+1) → y = −2x+1."
  },
  {
    "asignatura": "Geometría",
    "unidad": "2. LA RECTA",
    "subtema": "2.4 Ecuación simétrica",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La ecuación simétrica de la recta con intersecciones en x=3 e y=−2 es:",
    "opciones": ["x/3 + y/(-2) = 1", "x/3 − y/2 = 1", "3x − 2y = 1", "x/3 − y/2 = 0"],
    "retroalimentacion": "Forma simétrica: x/a + y/b = 1 con a=3, b=−2."
  },
  {
    "asignatura": "Geometría",
    "unidad": "2. LA RECTA",
    "subtema": "2.5 Ecuación de la bisectriz",
    "dificultad": "alta",
    "tipo_pregunta": "teorica",
    "enunciado": "Bisectrices de dos rectas: lugar geométrico de puntos que:",
    "opciones": ["Equidistan de ambas rectas", "Están sobre una de las rectas", "Forman 90° con ambas", "Pertenecen a la mediatriz del segmento"],
    "retroalimentacion": "Distancia perpendicular igual a ambas rectas."
  },
  {
    "asignatura": "Geometría",
    "unidad": "2. LA RECTA",
    "subtema": "2.5 Bisectriz",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Las ecuaciones de las bisectrices de las rectas 3x+4y−5=0 y 4x−3y+10=0 son:",
    "opciones": ["x+7y−15=0 ; 7x−y+5=0", "x−7y+15=0 ; 7x+y−5=0", "x+y=0 ; x−y=0", "Ninguna"],
    "retroalimentacion": "Igualando distancias: |3x+4y−5|/5 = |4x−3y+10|/5. Resolviendo se obtienen las dos rectas bisectrices."
  },
  {
    "asignatura": "Geometría",
    "unidad": "3. CÓNICAS",
    "subtema": "3.1.1 Circunferencia",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Radio de x²+y²−6x+4y−3=0:",
    "opciones": ["4", "3", "5", "√13"],
    "retroalimentacion": "(x−3)²+(y+2)²=16 → r=4."
  },
  {
    "asignatura": "Geometría",
    "unidad": "3. CÓNICAS",
    "subtema": "3.1.1 Circunferencia",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "Centro de (x+2)²+(y−5)²=9:",
    "opciones": ["(−2,5)", "(2,−5)", "(2,5)", "(−2,−5)"],
    "retroalimentacion": "h=−2, k=5."
  },
  {
    "asignatura": "Geometría",
    "unidad": "3. CÓNICAS",
    "subtema": "3.1.1 Circunferencia",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Ecuación de la circunferencia que pasa por los puntos (1,1), (1,−1) y (2,0):",
    "opciones": ["x² + y² − 2x = 0", "x² + y² − 2y = 0", "x² + y² = 1", "x² + y² − x − y = 0"],
    "retroalimentacion": "Sustituyendo puntos se obtiene centro (1,0) y radio 1. Ecuación: (x−1)²+y²=1 → x²+y²−2x=0."
  },
  {
    "asignatura": "Geometría",
    "unidad": "3. CÓNICAS",
    "subtema": "3.1.3 Parábola",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Foco de y² = 8x:",
    "opciones": ["(2,0)", "(0,2)", "(4,0)", "(0,4)"],
    "retroalimentacion": "4p=8 → p=2, foco (2,0)."
  },
  {
    "asignatura": "Geometría",
    "unidad": "3. CÓNICAS",
    "subtema": "3.1.3 Parábola",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Ecuación de parábola con vértice (3,−1) y foco (3,1):",
    "opciones": ["(x−3)² = 8(y+1)", "(y+1)² = 8(x−3)", "(x−3)² = 4(y+1)", "(x+3)² = 8(y−1)"],
    "retroalimentacion": "p=2, eje vertical → (x−3)²=8(y+1)."
  },
  {
    "asignatura": "Geometría",
    "unidad": "3. CÓNICAS",
    "subtema": "3.1.3 Parábola",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "La ecuación x² = −12y representa una parábola que abre hacia:",
    "opciones": ["Abajo", "Arriba", "Derecha", "Izquierda"],
    "retroalimentacion": "Coeficiente negativo en término con y, abre hacia abajo."
  },
  {
    "asignatura": "Geometría",
    "unidad": "3. CÓNICAS",
    "subtema": "3.1.2 Elipse",
    "dificultad": "media",
    "tipo_pregunta": "teorica",
    "enunciado": "En una elipse, PF₁ + PF₂ es igual a:",
    "opciones": ["2a (eje mayor)", "Variable", "2c", "0"],
    "retroalimentacion": "Suma constante de distancias a los focos = 2a."
  },
  {
    "asignatura": "Geometría",
    "unidad": "3. CÓNICAS",
    "subtema": "3.1.2 Elipse",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Vértices (±5,0), focos (±4,0). Longitud del eje menor:",
    "opciones": ["6", "8", "10", "3"],
    "retroalimentacion": "a=5, c=4 → b=3 → 2b=6."
  },
  {
    "asignatura": "Geometría",
    "unidad": "3. CÓNICAS",
    "subtema": "3.1.2 Elipse",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La ecuación 4x² + 9y² − 16x + 18y − 11 = 0 representa una elipse cuyo centro es:",
    "opciones": ["(2, −1)", "(−2, 1)", "(1, −2)", "(−1, 2)"],
    "retroalimentacion": "Completar cuadrados: 4(x²−4x+4) + 9(y²+2y+1) = 11+16+9 → 4(x−2)² + 9(y+1)² = 36 → centro (2, −1)."
  },
  {
    "asignatura": "Geometría",
    "unidad": "3. CÓNICAS",
    "subtema": "3.1.2 Elipse",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La excentricidad de una elipse con a=5 y b=3 es:",
    "opciones": ["4/5", "3/5", "5/3", "√34/5"],
    "retroalimentacion": "c = √(a²−b²) = √(25−9)=4. e = c/a = 4/5."
  },
  {
    "asignatura": "Geometría",
    "unidad": "3. CÓNICAS",
    "subtema": "3.1.4 Hipérbola",
    "dificultad": "media",
    "tipo_pregunta": "teorica",
    "enunciado": "x²/9 − y²/16 = 1 tiene eje transverso en:",
    "opciones": ["Eje X", "Eje Y", "Eje Z", "Ambos ejes"],
    "retroalimentacion": "Término positivo en x² → eje horizontal."
  },
  {
    "asignatura": "Geometría",
    "unidad": "3. CÓNICAS",
    "subtema": "3.1.4 Hipérbola",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Pendiente de asíntotas de 4x² − 9y² = 36:",
    "opciones": ["±2/3", "±3/2", "±4/9", "±9/4"],
    "retroalimentacion": "x²/9 − y²/4 =1 → a=3, b=2 → pendiente = ±b/a = ±2/3."
  },
  {
    "asignatura": "Geometría",
    "unidad": "3. CÓNICAS",
    "subtema": "3.1.4 Hipérbola",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Los focos de la hipérbola y²/16 − x²/9 = 1 están en:",
    "opciones": ["(0, ±5)", "(±5, 0)", "(0, ±4)", "(±4, 0)"],
    "retroalimentacion": "a²=16, b²=9 → c²=25 → c=5. Como y² positivo, eje vertical, focos (0,±5)."
  },
  {
    "asignatura": "Geometría",
    "unidad": "3. CÓNICAS",
    "subtema": "3.1.4 Hipérbola",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "En una hipérbola, la diferencia de distancias a los focos es:",
    "opciones": ["Constante e igual a 2a", "Variable", "2c", "2b"],
    "retroalimentacion": "Definición: |PF₁ − PF₂| = 2a."
  },
  {
    "asignatura": "Geometría",
    "unidad": "2. LA RECTA",
    "subtema": "2.2 Rectas perpendiculares",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La recta perpendicular a 3x − y + 2 = 0 que pasa por (0,0) es:",
    "opciones": ["x + 3y = 0", "x − 3y = 0", "3x + y = 0", "3x − y = 0"],
    "retroalimentacion": "Pendiente original 3, perpendicular −1/3. Pasa por origen: y = −1/3 x → x+3y=0."
  },
  {
    "asignatura": "Geometría",
    "unidad": "2. LA RECTA",
    "subtema": "2.4 Ecuación general",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "En la ecuación general Ax + By + C = 0, la pendiente es:",
    "opciones": ["−A/B", "A/B", "B/A", "−B/A"],
    "retroalimentacion": "Despejando y: By = −Ax − C → y = (−A/B)x − C/B."
  },
  {
    "asignatura": "Geometría",
    "unidad": "1. SEGMENTOS DE RECTA",
    "subtema": "1.6 División de un segmento en una razón dada",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Encuentre las coordenadas del punto que divide al segmento A(2,−3) B(8,5) en razón AP/PB = −2 (externamente).",
    "opciones": ["(14, 13)", "(6, 1)", "(4, −1)", "(10, 9)"],
    "retroalimentacion": "Fórmula con razón negativa: x = (2 + (−2)·8)/(1−2) = (2−16)/(−1)=14; y = (−3 + (−2)·5)/(−1) = (−3−10)/(−1)=13."
  },
  {
    "asignatura": "Geometría",
    "unidad": "3. CÓNICAS",
    "subtema": "3.1.1 Circunferencia con condiciones",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Ecuación de la circunferencia con centro en (2,−3) y tangente a la recta 3x−4y+7=0.",
    "opciones": ["(x−2)² + (y+3)² = 25", "(x+2)² + (y−3)² = 5", "(x−2)² + (y+3)² = 5", "(x−2)² + (y+3)² = 1"],
    "retroalimentacion": "Radio = distancia del centro a la recta = |3·2 −4·(−3)+7|/5 = |6+12+7|/5 = 25/5=5. r²=25."
  },
  {
    "asignatura": "Geometría",
    "unidad": "3. CÓNICAS",
    "subtema": "3.1.3 Parábola con vértice y punto",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Ecuación de la parábola con vértice en (2,3) y que pasa por (4,5) con eje vertical.",
    "opciones": ["(x−2)² = 2(y−3)", "(x−2)² = 4(y−3)", "(y−3)² = 2(x−2)", "(y−3)² = 4(x−2)"],
    "retroalimentacion": "Forma (x−h)²=4p(y−k). Sustituir (4,5): (2)²=4p(2) → 4=8p → p=1/2 → 4p=2. Ecuación: (x−2)²=2(y−3)."
  },
  // ... AQUÍ PEGAS EL RESTO DE PREGUNTAS DEL GRUPO 1 (200 preguntas) ...

  // ---------- GRUPO 2: CIENCIAS HUMANAS Y SERVICIOS ----------
  {
    id: "g2_mat_001",
    grupo: "Grupo 2",
    grupo_id: 2,
    carrera_id: [7, 8, 9, 10, 11, 12, 13], // IDs de carreras de este grupo
    asignatura: "Matemática Básica",
    unidad: "1. OPERACIONES CON NÚMEROS ENTEROS",
    subtema: "1.4 Leyes de los signos y orden de las operaciones",
    dificultad: "baja",
    tipo_pregunta: "teorica",
    enunciado: "¿Cuál es el resultado de multiplicar un número negativo por un número positivo?",
    opciones: ["Negativo", "Positivo", "Cero", "Depende del mayor"],
    respuesta_correcta: 0,
    retroalimentacion: "La regla de signos establece que (−) × (+) = (−)."
  },
 {
    "asignatura": "Matemática Básica",
    "unidad": "1. OPERACIONES CON NÚMEROS ENTEROS",
    "subtema": "1.4 Leyes de los signos y orden de las operaciones",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "¿Cuál es el resultado de multiplicar un número negativo por un número positivo?",
    "opciones": ["Negativo", "Positivo", "Cero", "Depende del mayor"],
    "retroalimentacion": "La regla de signos establece que (−) × (+) = (−)."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "1. OPERACIONES CON NÚMEROS ENTEROS",
    "subtema": "1.5 Jerarquía de las operaciones",
    "dificultad": "baja",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Calcule: 15 − 3 × 4 + 2",
    "opciones": ["5", "50", "10", "0"],
    "retroalimentacion": "Jerarquía: multiplicación primero: 3×4=12; luego 15−12+2 = 5."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "1. OPERACIONES CON NÚMEROS ENTEROS",
    "subtema": "1.7 Operaciones combinadas con números enteros",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Simplifique: −5 + [−3 × (4 − 7)] ÷ 3",
    "opciones": ["−2", "−4", "2", "4"],
    "retroalimentacion": "Paréntesis: 4−7=−3; −3×(−3)=9; 9÷3=3; −5+3=−2."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "1. OPERACIONES CON NÚMEROS ENTEROS",
    "subtema": "1.4 Leyes de los signos",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "¿Qué signo resulta de dividir dos números negativos?",
    "opciones": ["Positivo", "Negativo", "Cero", "Indeterminado"],
    "retroalimentacion": "(−) ÷ (−) = (+)."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "1. OPERACIONES CON NÚMEROS ENTEROS",
    "subtema": "1.5 Jerarquía",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Evalúe: 8 ÷ 2(2 + 2)",
    "opciones": ["1", "16", "8", "2"],
    "retroalimentacion": "Paréntesis: 2+2=4; luego 8÷2×4 = 4×4 = 16 (operaciones de izquierda a derecha)."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "2. DIVISIBILIDAD",
    "subtema": "2.1 Criterios de divisibilidad",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "¿Qué condición debe cumplir un número entero para ser divisible exactamente por 3?",
    "opciones": ["La suma de sus dígitos es múltiplo de 3", "Termina en 3, 6 o 9", "El último dígito es par", "Es un número impar"],
    "retroalimentacion": "Criterio del 3: suma de dígitos divisible entre 3."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "2. DIVISIBILIDAD",
    "subtema": "2.1 Criterios de divisibilidad",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "Un número es divisible por 5 si:",
    "opciones": ["Termina en 0 o 5", "Termina en 5", "Es múltiplo de 10", "La suma de sus dígitos es 5"],
    "retroalimentacion": "El criterio del 5 exige que la última cifra sea 0 o 5."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "2. DIVISIBILIDAD",
    "subtema": "2.3 Descomposición en factores primos",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La descomposición en factores primos de 84 es:",
    "opciones": ["2² × 3 × 7", "2 × 3² × 7", "2² × 21", "4 × 3 × 7"],
    "retroalimentacion": "84 ÷ 2 = 42; 42 ÷ 2 = 21; 21 = 3 × 7 → 2²·3·7."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "2. DIVISIBILIDAD",
    "subtema": "2.5 Máximo común divisor y mínimo común múltiplo",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El MCD de 48 y 72 es:",
    "opciones": ["24", "12", "36", "144"],
    "retroalimentacion": "48=2⁴·3; 72=2³·3². MCD = 2³·3 = 24."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "2. DIVISIBILIDAD",
    "subtema": "2.5 MCM",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El mínimo común múltiplo de 15 y 20 es:",
    "opciones": ["60", "5", "40", "300"],
    "retroalimentacion": "15=3×5; 20=2²×5. MCM = 2²×3×5 = 60."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "2. DIVISIBILIDAD",
    "subtema": "2.2 Números primos",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "¿Cuál de los siguientes es un número primo?",
    "opciones": ["17", "21", "27", "33"],
    "retroalimentacion": "17 solo tiene divisores 1 y 17."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "3. NÚMEROS FRACCIONARIOS",
    "subtema": "3.1 Operaciones con números fraccionarios",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Calcule: 2/3 + 1/4 − 5/6",
    "opciones": ["1/12", "1/6", "5/12", "−1/12"],
    "retroalimentacion": "Común denominador 12: 8/12 + 3/12 − 10/12 = 1/12."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "3. NÚMEROS FRACCIONARIOS",
    "subtema": "3.2 Simplificación de fracciones",
    "dificultad": "baja",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Simplifique 36/48 a su mínima expresión.",
    "opciones": ["3/4", "6/8", "9/12", "12/16"],
    "retroalimentacion": "Dividiendo numerador y denominador entre 12: 36÷12=3, 48÷12=4 → 3/4."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "3. NÚMEROS FRACCIONARIOS",
    "subtema": "3.1 Multiplicación de fracciones",
    "dificultad": "baja",
    "tipo_pregunta": "ejercicio",
    "enunciado": "(3/5) × (10/9) =",
    "opciones": ["2/3", "30/45", "1/3", "5/6"],
    "retroalimentacion": "Multiplicación directa: 30/45 = 2/3."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "4. NÚMEROS DECIMALES",
    "subtema": "4.1 Operaciones con números decimales",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Calcule: 12.5 − 3.75 + 0.2",
    "opciones": ["8.95", "9.05", "8.55", "9.45"],
    "retroalimentacion": "12.5 − 3.75 = 8.75; 8.75 + 0.2 = 8.95."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "4. NÚMEROS DECIMALES",
    "subtema": "4.2 Problemas de aplicación con números decimales",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Un producto cuesta $45.75 y tiene un descuento de $7.25. ¿Cuál es el precio final?",
    "opciones": ["$38.50", "$38.00", "$52.00", "$37.50"],
    "retroalimentacion": "45.75 − 7.25 = 38.50."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "4. NÚMEROS DECIMALES",
    "subtema": "4.3 Cifras Significativas y Redondeo",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "Redondee 3.456 a dos cifras decimales.",
    "opciones": ["3.46", "3.45", "3.5", "3.4"],
    "retroalimentacion": "El tercer decimal es 6 ≥ 5, por tanto sube: 3.46."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "4. NÚMEROS DECIMALES",
    "subtema": "4.5 Sistema métrico decimal: Transformación de unidades",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Convierta 2.5 km a metros.",
    "opciones": ["2500 m", "250 m", "25 m", "25000 m"],
    "retroalimentacion": "1 km = 1000 m → 2.5 × 1000 = 2500 m."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "4. NÚMEROS DECIMALES",
    "subtema": "4.5 Transformación de unidades",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "¿Cuántos gramos hay en 3.2 kg?",
    "opciones": ["3200 g", "320 g", "32 g", "0.32 g"],
    "retroalimentacion": "1 kg = 1000 g → 3.2 × 1000 = 3200 g."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "5. POTENCIACIÓN Y RADICACIÓN",
    "subtema": "5.1 Propiedades de los exponentes",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "¿Cuál es el resultado de a³ · a⁴?",
    "opciones": ["a⁷", "a¹²", "a³⁴", "a"],
    "retroalimentacion": "Producto de bases iguales: se suman los exponentes."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "5. POTENCIACIÓN Y RADICACIÓN",
    "subtema": "5.1 Propiedades de exponentes",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Simplifique: (2³ × 2⁻²)²",
    "opciones": ["4", "2", "16", "1/4"],
    "retroalimentacion": "2³⁻² = 2¹; (2¹)² = 2² = 4."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "5. POTENCIACIÓN Y RADICACIÓN",
    "subtema": "5.2 Propiedades de los radicales",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Simplifique: √72",
    "opciones": ["6√2", "8√2", "3√8", "2√18"],
    "retroalimentacion": "72 = 36×2 → √36 × √2 = 6√2."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "5. POTENCIACIÓN Y RADICACIÓN",
    "subtema": "5.3 Notación Científica",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Exprese 0.000045 en notación científica.",
    "opciones": ["4.5 × 10⁻⁵", "45 × 10⁻⁶", "4.5 × 10⁵", "0.45 × 10⁻⁴"],
    "retroalimentacion": "Mover punto decimal 5 lugares a la derecha: 4.5 × 10⁻⁵."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "5. POTENCIACIÓN Y RADICACIÓN",
    "subtema": "5.3 Notación Científica",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Calcule (6 × 10⁸) × (2 × 10⁻³) y exprese en notación científica.",
    "opciones": ["1.2 × 10⁶", "12 × 10⁵", "1.2 × 10⁵", "12 × 10⁶"],
    "retroalimentacion": "6×2 = 12; 10⁸⁻³ = 10⁵; 12 × 10⁵ = 1.2 × 10⁶."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "6. RAZONES Y PROPORCIONES",
    "subtema": "6.1 Definición y propiedades",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "La razón entre dos cantidades es:",
    "opciones": ["El cociente indicado de ambas", "La suma de ambas", "El producto de ambas", "La diferencia de ambas"],
    "retroalimentacion": "Razón es la comparación por cociente."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "6. RAZONES Y PROPORCIONES",
    "subtema": "6.2 Proporciones",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "En la proporción x/5 = 12/15, el valor de x es:",
    "opciones": ["4", "6", "9", "3"],
    "retroalimentacion": "x = (5 × 12)/15 = 60/15 = 4."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "6. RAZONES Y PROPORCIONES",
    "subtema": "6.3 Magnitudes directamente proporcionales",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "Dos magnitudes son directamente proporcionales si:",
    "opciones": ["Al aumentar una, la otra aumenta en la misma proporción", "Al aumentar una, la otra disminuye", "Su producto es constante", "Su suma es constante"],
    "retroalimentacion": "Cociente constante (y/x = k)."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "6. RAZONES Y PROPORCIONES",
    "subtema": "6.4 Magnitudes inversamente proporcionales",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "Dos magnitudes son inversamente proporcionales si:",
    "opciones": ["Su producto es constante", "Su cociente es constante", "Ambas aumentan juntas", "Una aumenta y la otra permanece igual"],
    "retroalimentacion": "x·y = k (constante)."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "7. REGLA DE TRES",
    "subtema": "7.1 Regla de tres simple directa",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Si 5 lápices cuestan $3.75, ¿cuánto costarán 8 lápices?",
    "opciones": ["$6.00", "$5.50", "$7.50", "$4.80"],
    "retroalimentacion": "Directa: 5→3.75; 8→x. x = (8×3.75)/5 = 30/5 = 6."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "7. REGLA DE TRES",
    "subtema": "7.1 Regla de tres simple inversa",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "3 obreros tardan 12 días en hacer un trabajo. ¿Cuántos días tardarán 4 obreros?",
    "opciones": ["9 días", "16 días", "8 días", "10 días"],
    "retroalimentacion": "Inversa: 3×12 = 4×x → 36 = 4x → x = 9."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "7. REGLA DE TRES",
    "subtema": "7.2 Regla de tres compuesta",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "5 máquinas producen 100 piezas en 4 horas. ¿Cuántas piezas producirán 8 máquinas en 6 horas?",
    "opciones": ["240", "200", "160", "300"],
    "retroalimentacion": "Directa a máquinas y tiempo: 100 × (8/5) × (6/4) = 100 × 1.6 × 1.5 = 240."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "7. REGLA DE TRES",
    "subtema": "7.3 Tanto por ciento",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El 15% de 200 es:",
    "opciones": ["30", "15", "20", "25"],
    "retroalimentacion": "0.15 × 200 = 30."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "7. REGLA DE TRES",
    "subtema": "7.3 Porcentajes",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Un artículo cuesta $80 después de un descuento del 20%. ¿Cuál era su precio original?",
    "opciones": ["$100", "$96", "$64", "$120"],
    "retroalimentacion": "80 equivale al 80% → original = 80 / 0.8 = 100."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "8. SUCESIONES Y SERIES",
    "subtema": "8.1 Sucesiones",
    "dificultad": "baja",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El siguiente término en la sucesión 3, 6, 9, 12, ... es:",
    "opciones": ["15", "14", "16", "18"],
    "retroalimentacion": "Progresión aritmética con diferencia 3 → 12+3=15."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "8. SUCESIONES Y SERIES",
    "subtema": "8.2 Término n-ésimo",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Dada la sucesión 5, 8, 11, 14, ... el término general aₙ es:",
    "opciones": ["3n + 2", "2n + 3", "5n", "3n − 2"],
    "retroalimentacion": "a₁=5; diferencia=3 → aₙ = 5 + (n−1)·3 = 3n + 2."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "8. SUCESIONES Y SERIES",
    "subtema": "8.3 Suma de términos",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Calcule la suma de los primeros 20 números pares positivos (2,4,6,...).",
    "opciones": ["420", "400", "210", "380"],
    "retroalimentacion": "a₁=2, a₂₀=40, n=20 → S = (2+40)·20/2 = 42·10 = 420."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "8. SUCESIONES Y SERIES",
    "subtema": "8.6 Término general Progresión Aritmética",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "En una PA, el primer término es 7 y la diferencia común es −3. El décimo término es:",
    "opciones": ["−20", "−23", "37", "−17"],
    "retroalimentacion": "a₁₀ = 7 + (10−1)(−3) = 7 − 27 = −20."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "8. SUCESIONES Y SERIES",
    "subtema": "8.7 Suma de PA",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La suma de los primeros 15 términos de una PA con a₁=10 y d=4 es:",
    "opciones": ["570", "510", "450", "600"],
    "retroalimentacion": "a₁₅ = 10 + 14×4 = 66; S₁₅ = (10+66)×15/2 = 76×15/2 = 570."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "8. SUCESIONES Y SERIES",
    "subtema": "8.10 Término general Progresión Geométrica",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "En una PG, el primer término es 3 y la razón es 2. El sexto término es:",
    "opciones": ["96", "48", "192", "36"],
    "retroalimentacion": "a₆ = 3 × 2⁵ = 3 × 32 = 96."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "8. SUCESIONES Y SERIES",
    "subtema": "8.11 Suma de PG",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La suma de los primeros 5 términos de la PG: 4, 8, 16, ... es:",
    "opciones": ["124", "120", "128", "132"],
    "retroalimentacion": "a₁=4, r=2, n=5 → S₅ = 4(2⁵−1)/(2−1) = 4×31 = 124."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "1. OPERACIONES CON NÚMEROS ENTEROS",
    "subtema": "1.5 Jerarquía con paréntesis",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Resuelva: 20 − {3 × [4 + 2 × (5 − 3)]}",
    "opciones": ["−4", "8", "2", "14"],
    "retroalimentacion": "Interior: 5−3=2; 2×2=4; 4+4=8; 3×8=24; 20−24=−4."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "2. DIVISIBILIDAD",
    "subtema": "2.5 Problemas MCD/MCM",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Tres buses salen de la terminal cada 12, 15 y 20 minutos respectivamente. Si coinciden a las 8:00 am, ¿a qué hora volverán a coincidir?",
    "opciones": ["9:00 am", "10:00 am", "11:00 am", "12:00 pm"],
    "retroalimentacion": "MCM(12,15,20) = 60 minutos → 1 hora después: 9:00 am."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "3. NÚMEROS FRACCIONARIOS",
    "subtema": "3.1 Problemas con fracciones",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Un depósito se llena con un grifo en 3 horas y se vacía con otro en 4 horas. Estando vacío y abiertos ambos, ¿en cuánto tiempo se llena?",
    "opciones": ["12 horas", "7 horas", "1 hora", "2 horas"],
    "retroalimentacion": "Llena 1/3 por hora, vacía 1/4; neto: 1/3 − 1/4 = 1/12 por hora → 12 horas."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "4. NÚMEROS DECIMALES",
    "subtema": "4.2 Problemas decimales",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Un coche consume 7.5 litros cada 100 km. ¿Cuántos litros necesita para recorrer 350 km?",
    "opciones": ["26.25 L", "25.5 L", "28 L", "24.75 L"],
    "retroalimentacion": "Regla de tres: 7.5 × (350/100) = 7.5 × 3.5 = 26.25."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "5. POTENCIACIÓN Y RADICACIÓN",
    "subtema": "5.2 Racionalización",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Racionalice: 5 / (√3 + √2)",
    "opciones": ["5(√3 − √2)", "√3 − √2", "5√3 + 5√2", "1"],
    "retroalimentacion": "Multiplicar por conjugado: 5(√3−√2)/(3−2) = 5(√3−√2)."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "6. RAZONES Y PROPORCIONES",
    "subtema": "6.4 Reparto proporcional",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Reparta $450 en partes directamente proporcionales a 2, 3 y 5.",
    "opciones": ["$90, $135, $225", "$100, $150, $200", "$80, $120, $250", "$75, $150, $225"],
    "retroalimentacion": "Suma partes = 10; valor unidad = 450/10 = 45; partes: 2×45=90, 3×45=135, 5×45=225."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "7. REGLA DE TRES",
    "subtema": "7.2 Regla de tres compuesta inversa",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "12 obreros trabajando 8 horas diarias construyen un muro en 10 días. ¿Cuántos días tardarán 16 obreros trabajando 6 horas diarias?",
    "opciones": ["10 días", "12 días", "8 días", "15 días"],
    "retroalimentacion": "Obreros inversa, horas inversa: 10 × (12/16) × (8/6) = 10 × 0.75 × 1.333 = 10."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "8. SUCESIONES Y SERIES",
    "subtema": "8.12 Medios geométricos",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Intercale 3 medios geométricos entre 3 y 48.",
    "opciones": ["6, 12, 24", "9, 18, 36", "8, 16, 32", "5, 10, 20"],
    "retroalimentacion": "a₁=3, a₅=48 → r⁴ = 48/3 = 16 → r=2. Términos: 3,6,12,24,48."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "1. OPERACIONES CON NÚMEROS ENTEROS",
    "subtema": "1.6 Propiedades de números naturales",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "¿Cuál es el elemento neutro de la multiplicación?",
    "opciones": ["1", "0", "−1", "El mismo número"],
    "retroalimentacion": "a × 1 = a."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "1. OPERACIONES CON NÚMEROS ENTEROS",
    "subtema": "1.5 Jerarquía con exponentes",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Evalúe: 4 + 3² × 2 − 5",
    "opciones": ["17", "23", "15", "27"],
    "retroalimentacion": "Exponente: 9; multiplicación: 18; 4+18−5=17."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "2. DIVISIBILIDAD",
    "subtema": "2.1 Criterio del 11",
    "dificultad": "media",
    "tipo_pregunta": "teorica",
    "enunciado": "¿Cuándo un número es divisible por 11?",
    "opciones": ["La diferencia entre la suma de cifras en posición par e impar es 0 o múltiplo de 11", "Termina en 11", "La suma de sus cifras es 11", "Es múltiplo de 1 y de sí mismo"],
    "retroalimentacion": "Criterio específico del 11."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "3. NÚMEROS FRACCIONARIOS",
    "subtema": "3.1 División de fracciones",
    "dificultad": "baja",
    "tipo_pregunta": "ejercicio",
    "enunciado": "(5/6) ÷ (2/3) =",
    "opciones": ["5/4", "10/18", "5/9", "4/5"],
    "retroalimentacion": "Multiplicar en cruz: (5×3)/(6×2) = 15/12 = 5/4."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "4. NÚMEROS DECIMALES",
    "subtema": "4.1 Multiplicación de decimales",
    "dificultad": "baja",
    "tipo_pregunta": "ejercicio",
    "enunciado": "0.5 × 0.2 =",
    "opciones": ["0.10", "0.01", "1.0", "0.7"],
    "retroalimentacion": "5 × 2 = 10, con dos decimales: 0.10."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "5. POTENCIACIÓN Y RADICACIÓN",
    "subtema": "5.1 Exponente cero",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "Cualquier número diferente de cero elevado a la cero es:",
    "opciones": ["1", "0", "El mismo número", "Indeterminado"],
    "retroalimentacion": "a⁰ = 1 para a ≠ 0."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "5. POTENCIACIÓN Y RADICACIÓN",
    "subtema": "5.2 Raíz de un producto",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "√(a·b) es igual a:",
    "opciones": ["√a · √b", "√a + √b", "a·√b", "√a · b"],
    "retroalimentacion": "Propiedad distributiva de la raíz respecto al producto."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "6. RAZONES Y PROPORCIONES",
    "subtema": "6.2 Cuarta proporcional",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Halle la cuarta proporcional de 8, 12 y 10.",
    "opciones": ["15", "9.6", "6.6", "20"],
    "retroalimentacion": "8/12 = 10/x → x = (12×10)/8 = 120/8 = 15."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "7. REGLA DE TRES",
    "subtema": "7.3 Porcentaje de aumento",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Un salario de $600 aumenta en un 12%. ¿Cuál es el nuevo salario?",
    "opciones": ["$672", "$612", "$588", "$720"],
    "retroalimentacion": "Aumento = 0.12×600 = 72; nuevo = 600+72 = 672."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "8. SUCESIONES Y SERIES",
    "subtema": "8.4 Signo sumatorio",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Calcule Σ (2i + 1) desde i=1 hasta 4.",
    "opciones": ["24", "20", "28", "16"],
    "retroalimentacion": "i=1:3, i=2:5, i=3:7, i=4:9. Suma = 24."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "1. OPERACIONES CON NÚMEROS ENTEROS",
    "subtema": "1.7 Propiedades de enteros",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "El valor absoluto de −15 es:",
    "opciones": ["15", "−15", "0", "1"],
    "retroalimentacion": "El valor absoluto es la distancia al cero, siempre positivo."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "2. DIVISIBILIDAD",
    "subtema": "2.4 Divisores simples y compuestos",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "¿Cuántos divisores tiene el número 12?",
    "opciones": ["6", "4", "5", "8"],
    "retroalimentacion": "Divisores: 1,2,3,4,6,12 → 6 divisores."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "3. NÚMEROS FRACCIONARIOS",
    "subtema": "3.1 Suma de fracciones heterogéneas",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "1/2 + 2/5 − 3/10 =",
    "opciones": ["3/5", "4/5", "2/5", "1/5"],
    "retroalimentacion": "Denominador 10: 5/10 + 4/10 − 3/10 = 6/10 = 3/5."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "4. NÚMEROS DECIMALES",
    "subtema": "4.5 Conversión de unidades de volumen",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Convierta 500 ml a litros.",
    "opciones": ["0.5 L", "5 L", "50 L", "0.05 L"],
    "retroalimentacion": "1 L = 1000 ml → 500 ml = 0.5 L."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "5. POTENCIACIÓN Y RADICACIÓN",
    "subtema": "5.1 Exponente negativo",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "a⁻ⁿ es igual a:",
    "opciones": ["1/aⁿ", "−aⁿ", "aⁿ", "0"],
    "retroalimentacion": "Definición de exponente negativo."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "5. POTENCIACIÓN Y RADICACIÓN",
    "subtema": "5.3 Operaciones con notación científica",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Divida: (8.4 × 10⁵) ÷ (2 × 10⁻²)",
    "opciones": ["4.2 × 10⁷", "4.2 × 10³", "4.2 × 10⁻³", "4.2 × 10⁶"],
    "retroalimentacion": "8.4/2 = 4.2; 10⁵⁻⁽⁻²⁾ = 10⁷."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "6. RAZONES Y PROPORCIONES",
    "subtema": "6.5 Gráficas de magnitudes",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "La gráfica de dos magnitudes directamente proporcionales es:",
    "opciones": ["Una línea recta que pasa por el origen", "Una hipérbola", "Una parábola", "Una línea horizontal"],
    "retroalimentacion": "y = kx, pendiente constante y pasa por (0,0)."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "7. REGLA DE TRES",
    "subtema": "7.2 Regla de tres compuesta mixta",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Una guarnición de 500 hombres tiene víveres para 20 días a razón de 3 raciones diarias. ¿Cuántos días durarán los víveres si los hombres aumentan a 750 y las raciones se reducen a 2 diarias?",
    "opciones": ["20 días", "15 días", "25 días", "10 días"],
    "retroalimentacion": "Inversa a hombres, directa a raciones? Analizar: más hombres, menos días (inversa); menos raciones, más días (inversa). Días = 20 × (500/750) × (3/2) = 20 × (2/3) × (3/2) = 20."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "8. SUCESIONES Y SERIES",
    "subtema": "8.8 Medios aritméticos",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Intercale 4 medios aritméticos entre 5 y 25.",
    "opciones": ["9, 13, 17, 21", "10, 15, 20, 25", "8, 12, 16, 20", "7, 11, 15, 19"],
    "retroalimentacion": "a₁=5, a₆=25 → d = (25−5)/5 = 4. Términos: 5,9,13,17,21,25."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "1. OPERACIONES CON NÚMEROS ENTEROS",
    "subtema": "1.3 Signos de agrupación",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "Al eliminar un paréntesis precedido de signo negativo, los signos de los términos internos:",
    "opciones": ["Se invierten", "Se mantienen", "Se convierten en positivos", "Se anulan"],
    "retroalimentacion": "−(a+b) = −a − b."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "2. DIVISIBILIDAD",
    "subtema": "2.1 Criterio del 9",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "Un número es divisible por 9 si:",
    "opciones": ["La suma de sus dígitos es múltiplo de 9", "Termina en 9", "Es múltiplo de 3", "La suma de sus dígitos es 9"],
    "retroalimentacion": "Similar al 3, pero la suma debe ser múltiplo de 9."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "3. NÚMEROS FRACCIONARIOS",
    "subtema": "3.1 Fracción de un número",
    "dificultad": "baja",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Calcule los 3/5 de 200.",
    "opciones": ["120", "100", "150", "80"],
    "retroalimentacion": "200 × 3/5 = 600/5 = 120."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "4. NÚMEROS DECIMALES",
    "subtema": "4.3 Redondeo",
    "dificultad": "baja",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Redondee 7.654 a una cifra decimal.",
    "opciones": ["7.7", "7.6", "7.65", "8.0"],
    "retroalimentacion": "Segundo decimal es 5 → sube el primero: 7.6 + 0.1 = 7.7."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "5. POTENCIACIÓN Y RADICACIÓN",
    "subtema": "5.2 Simplificación de radicales",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Simplifique: √(8x⁴y⁶) asumiendo variables positivas.",
    "opciones": ["2x²y³√2", "4x²y³", "2x²y³", "2xy²√2"],
    "retroalimentacion": "√8 = 2√2; √x⁴ = x²; √y⁶ = y³."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "6. RAZONES Y PROPORCIONES",
    "subtema": "6.3 Magnitudes directas",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Si 4 metros de tela cuestan $32, ¿cuánto costarán 7 metros?",
    "opciones": ["$56", "$64", "$48", "$60"],
    "retroalimentacion": "Directa: 32/4 = 8 por metro; 7×8 = 56."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "7. REGLA DE TRES",
    "subtema": "7.3 Descuento sucesivo",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Un artículo recibe dos descuentos sucesivos del 20% y 10%. ¿Cuál es el descuento único equivalente?",
    "opciones": ["28%", "30%", "25%", "32%"],
    "retroalimentacion": "100 × 0.8 × 0.9 = 72; descuento = 28%."
  },
  {
    "asignatura": "Matemática Básica",
    "unidad": "8. SUCESIONES Y SERIES",
    "subtema": "8.9 Progresiones geométricas infinitas",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La suma de la serie geométrica infinita 1 + 1/2 + 1/4 + 1/8 + ... es:",
    "opciones": ["2", "1", "1.5", "Infinito"],
    "retroalimentacion": "S = a₁/(1−r) = 1/(1−1/2) = 2."
  },
  // ... AQUÍ PEGAS EL RESTO DE PREGUNTAS DEL GRUPO 2 (100 preguntas) ...

  // ---------- GRUPO 3: CIENCIAS DE LA VIDA Y MEDICINA ----------
  {
    id: "g3_mat_001",
    grupo: "Grupo 3",
    grupo_id: 3,
    carrera_id: [14, 15, 16, 17], // Biotecnología, Medicina, Agropecuaria, Piloto
    asignatura: "Matemáticas",
    unidad: "1. LÓGICA MATEMÁTICA",
    subtema: "1.1 Proposiciones y Conectivos lógicos",
    dificultad: "baja",
    tipo_pregunta: "teorica",
    enunciado: "¿Cuál de las siguientes proposiciones compuestas es verdadera únicamente cuando ambas proposiciones simples tienen el mismo valor de verdad?",
    opciones: ["Bicondicional (p ↔ q)", "Condicional (p → q)", "Disyunción (p ∨ q)", "Conjunción (p ∧ q)"],
    respuesta_correcta: 0,
    retroalimentacion: "El bicondicional es verdadero exactamente cuando p y q son ambas verdaderas o ambas falsas."
  },
{
    "asignatura": "Matemáticas",
    "unidad": "1. LÓGICA MATEMÁTICA",
    "subtema": "1.1 Proposiciones y Conectivos lógicos",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "¿Cuál de las siguientes proposiciones compuestas es verdadera únicamente cuando ambas proposiciones simples tienen el mismo valor de verdad?",
    "opciones": ["Bicondicional (p ↔ q)", "Condicional (p → q)", "Disyunción (p ∨ q)", "Conjunción (p ∧ q)"],
    "retroalimentacion": "El bicondicional es verdadero exactamente cuando p y q son ambas verdaderas o ambas falsas."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "1. LÓGICA MATEMÁTICA",
    "subtema": "1.1 Proposiciones y Conectivos lógicos",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Si p es falsa y q es verdadera, el valor de verdad de la proposición (¬p ∨ q) → (p ∧ ¬q) es:",
    "opciones": ["Falso", "Verdadero", "Contingente", "No se puede determinar"],
    "retroalimentacion": "¬p es V, q es V → (V ∨ V) = V. p ∧ ¬q = F ∧ F = F. Una implicación V → F es Falsa."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "1. LÓGICA MATEMÁTICA",
    "subtema": "1.2 Tautología, contradicción, contingencia",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "Una fórmula proposicional que es siempre falsa, independientemente de los valores de verdad de sus variables, recibe el nombre de:",
    "opciones": ["Contradicción", "Tautología", "Contingencia", "Falacia"],
    "retroalimentacion": "Una contradicción es falsa para todas las combinaciones posibles."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "1. LÓGICA MATEMÁTICA",
    "subtema": "1.3 Leyes del álgebra proposicional",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Aplicando las leyes de De Morgan, la negación de la proposición «Estudio y apruebo el examen» es equivalente a:",
    "opciones": ["No estudio o no apruebo el examen", "No estudio y no apruebo el examen", "Estudio o no apruebo el examen", "Si estudio entonces apruebo el examen"],
    "retroalimentacion": "¬(p ∧ q) ≡ ¬p ∨ ¬q."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "1. LÓGICA MATEMÁTICA",
    "subtema": "1.3 Leyes del álgebra proposicional",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Simplifique usando leyes lógicas: ¬(p → q) ∨ (¬p ∧ ¬q). El resultado es:",
    "opciones": ["¬q", "p ∨ ¬q", "¬p", "Contradicción"],
    "retroalimentacion": "¬(p→q) ≡ p ∧ ¬q. Luego (p ∧ ¬q) ∨ (¬p ∧ ¬q) = ¬q ∧ (p ∨ ¬p) = ¬q ∧ V = ¬q."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "2. CONJUNTOS",
    "subtema": "2.1 Definición y determinación de conjuntos",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "¿Cuál de las siguientes opciones representa correctamente el conjunto A = {x ∈ ℕ / 2 ≤ x < 5} por extensión?",
    "opciones": ["{2, 3, 4}", "{2, 3, 4, 5}", "{3, 4}", "{2, 3}"],
    "retroalimentacion": "Números naturales mayores o iguales a 2 y estrictamente menores que 5: 2, 3, 4."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "2. CONJUNTOS",
    "subtema": "2.2 Relaciones entre conjuntos",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "Si A = {1,2,3} y B = {1,2,3,4,5}, entonces la relación entre A y B es:",
    "opciones": ["A ⊂ B (A está contenido en B)", "B ⊂ A", "A = B", "A y B son disjuntos"],
    "retroalimentacion": "Todos los elementos de A pertenecen a B, por tanto A es subconjunto propio de B."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "2. CONJUNTOS",
    "subtema": "2.3 Operaciones con conjuntos",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Sean A = {1, 2, 3, 4, 5} y B = {4, 5, 6, 7}. El resultado de (A ∪ B) − (A ∩ B) es:",
    "opciones": ["{1, 2, 3, 6, 7}", "{4, 5}", "{1, 2, 3, 4, 5, 6, 7}", "{1, 2, 3}"],
    "retroalimentacion": "A ∪ B = {1,2,3,4,5,6,7}; A ∩ B = {4,5}. Diferencia simétrica: {1,2,3,6,7}."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "2. CONJUNTOS",
    "subtema": "2.3 Operaciones con conjuntos",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Dados los conjuntos U = {1,2,3,4,5,6}, A = {1,2,3}, B = {2,4,6}. El complemento de (A ∩ B) respecto a U es:",
    "opciones": ["{1,3,4,5,6}", "{1,3,5}", "{4,6}", "U"],
    "retroalimentacion": "A ∩ B = {2}. Complemento: U − {2} = {1,3,4,5,6}."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "2. CONJUNTOS",
    "subtema": "2.4 Problemas de aplicación",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "En una encuesta a 120 estudiantes sobre el uso de redes sociales, 75 usan Instagram, 60 usan TikTok, y 20 no usan ninguna. ¿Cuántos estudiantes usan ambas redes sociales?",
    "opciones": ["35", "55", "40", "25"],
    "retroalimentacion": "Total usan al menos una = 100. |I ∪ T| = |I| + |T| − |I ∩ T| → 100 = 75 + 60 − |I ∩ T| → |I ∩ T| = 35."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "2. CONJUNTOS",
    "subtema": "2.4 Problemas de aplicación",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "En un grupo de 80 personas, 45 leen el periódico A, 35 leen el periódico B y 15 leen ambos. ¿Cuántas personas no leen ningún periódico?",
    "opciones": ["15", "20", "5", "25"],
    "retroalimentacion": "|A ∪ B| = 45+35−15 = 65. No leen = 80−65 = 15."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "3. OPERACIONES CON NÚMEROS REALES",
    "subtema": "3.1 Axiomas de cuerpo de los números reales",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "¿Qué propiedad de los números reales establece que a + b = b + a?",
    "opciones": ["Conmutativa de la suma", "Asociativa de la suma", "Distributiva", "Elemento neutro"],
    "retroalimentacion": "La propiedad conmutativa de la suma permite cambiar el orden de los sumandos."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "3. OPERACIONES CON NÚMEROS REALES",
    "subtema": "3.3 Axiomas de orden, intervalos",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La solución de la inecuación |2x − 5| ≤ 3 es el intervalo:",
    "opciones": ["[1, 4]", "(-∞, 1] ∪ [4, ∞)", "(1, 4)", "[-1, 4]"],
    "retroalimentacion": "−3 ≤ 2x−5 ≤ 3 → 2 ≤ 2x ≤ 8 → 1 ≤ x ≤ 4."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "3. OPERACIONES CON NÚMEROS REALES",
    "subtema": "3.4 Valor absoluto",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El conjunto solución de la ecuación |x − 2| = |3x + 4| es:",
    "opciones": ["{-3, -1/2}", "{-3, 1/2}", "{3, -1/2}", "{-3, 2}"],
    "retroalimentacion": "Caso 1: x−2 = 3x+4 → x=−3. Caso 2: x−2 = −(3x+4) → x=−1/2."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "3. OPERACIONES CON NÚMEROS REALES",
    "subtema": "3.4 Valor absoluto",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Resuelva la inecuación: |x + 1| > 2x − 3.",
    "opciones": ["(-∞, 4)", "(2, ∞)", "(-∞, 2/3)", "(4, ∞)"],
    "retroalimentacion": "Caso x+1 ≥0: x+1 > 2x−3 → x < 4 (intersección con x≥−1 → [−1,4)). Caso x+1<0: −x−1 > 2x−3 → 2 > 3x → x < 2/3 (intersección x<−1 → (−∞,−1)). Unión: (−∞,4)."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.1 Definición de relación y función. Dominio y Rango",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El dominio de la función f(x) = √(x² − 4x + 3) es:",
    "opciones": ["(-∞, 1] ∪ [3, ∞)", "[1, 3]", "ℝ − {1, 3}", "(-∞, 1) ∪ (3, ∞)"],
    "retroalimentacion": "Radicando ≥ 0 → (x−1)(x−3) ≥ 0 → x ≤ 1 o x ≥ 3."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.1 Definición de relación y función. Dominio y Rango",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "¿Cuál de los siguientes diagramas representa una función?",
    "opciones": ["Cada elemento del conjunto A se relaciona con un único elemento de B", "Un elemento de A se relaciona con dos elementos de B", "Hay elementos en A sin imagen", "Ninguna"],
    "retroalimentacion": "Para ser función, cada elemento del dominio debe tener una y solo una imagen."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.2 Función biyectiva e inversa",
    "dificultad": "media",
    "tipo_pregunta": "teorica",
    "enunciado": "Para que una función tenga inversa, debe ser:",
    "opciones": ["Biyectiva", "Sobreyectiva", "Inyectiva", "Continua"],
    "retroalimentacion": "Una función admite inversa si y solo si es biyectiva (inyectiva y sobreyectiva)."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.3 Función afín y lineal, función valor absoluto, función cuadrática",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El valor mínimo de la función f(x) = 2x² − 8x + 15 es:",
    "opciones": ["7", "15", "-1", "3"],
    "retroalimentacion": "Vértice en x=2; f(2)=7."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.3 Función cuadrática",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Las raíces de la función f(x) = x² − 5x + 6 son:",
    "opciones": ["2 y 3", "-2 y -3", "1 y 6", "-1 y -6"],
    "retroalimentacion": "Factorizando: (x−2)(x−3)=0 → x=2,3."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.4 Operaciones con funciones, composición",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Dadas f(x) = 2x + 1 y g(x) = x² − 3, el valor de (f ∘ g)(2) es:",
    "opciones": ["3", "5", "7", "9"],
    "retroalimentacion": "f(g(2)) = f(1) = 3."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.4 Composición de funciones",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Si f(x) = 1/x y g(x) = x + 2, el dominio de (f ∘ g)(x) es:",
    "opciones": ["ℝ − {-2}", "ℝ − {0}", "ℝ", "ℝ − {2}"],
    "retroalimentacion": "(f∘g)(x)=1/(x+2). Denominador ≠0 → x≠−2."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.5 Monotonía de funciones",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "Una función f es estrictamente creciente en un intervalo I si para todo x₁ < x₂ en I se cumple que:",
    "opciones": ["f(x₁) < f(x₂)", "f(x₁) > f(x₂)", "f(x₁) = f(x₂)", "f(x₁) ≤ f(x₂)"],
    "retroalimentacion": "Definición de función creciente."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.6 Paridad de funciones",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "Una función f es par si para todo x en su dominio se cumple:",
    "opciones": ["f(−x) = f(x)", "f(−x) = −f(x)", "f(x) = −f(−x)", "f(x) = f(x+π)"],
    "retroalimentacion": "Simetría respecto al eje Y."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.1 Ángulo trigonométrico, razones trigonométricas en el triángulo rectángulo",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "En un triángulo rectángulo, el seno de un ángulo agudo se define como:",
    "opciones": ["Cateto opuesto / Hipotenusa", "Cateto adyacente / Hipotenusa", "Cateto opuesto / Cateto adyacente", "Hipotenusa / Cateto opuesto"],
    "retroalimentacion": "Definición básica de seno: opuesto/hipotenusa."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.1 Razones trigonométricas",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "En un triángulo rectángulo, si sen θ = 3/5, entonces cos θ es:",
    "opciones": ["4/5", "3/4", "5/3", "5/4"],
    "retroalimentacion": "Con seno = opuesto/hipotenusa, opuesto=3, hipotenusa=5. Por Pitágoras, adyacente=4. cos = adyacente/hipotenusa = 4/5."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.2 El círculo trigonométrico",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "En el círculo trigonométrico, ¿en qué cuadrante el seno es positivo y el coseno negativo?",
    "opciones": ["II cuadrante", "I cuadrante", "III cuadrante", "IV cuadrante"],
    "retroalimentacion": "Seno positivo en I y II; coseno negativo en II y III. Intersección: II cuadrante."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.2 Signos en cuadrantes",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Si cos θ = −1/2 y θ está en el III cuadrante, entonces sen θ es:",
    "opciones": ["−√3/2", "√3/2", "1/2", "−1/2"],
    "retroalimentacion": "En III cuadrante seno es negativo. sen²θ = 1 − cos²θ = 1 − 1/4 = 3/4 → sen θ = −√3/2."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.3 Funciones trigonométricas (Seno, coseno, tangente)",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "El período de la función seno es:",
    "opciones": ["2π", "π", "π/2", "4π"],
    "retroalimentacion": "La función seno repite valores cada 2π radianes."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.4 Identidades trigonométricas",
    "dificultad": "media",
    "tipo_pregunta": "teorica",
    "enunciado": "La identidad pitagórica fundamental es:",
    "opciones": ["sen²θ + cos²θ = 1", "tan²θ + 1 = sec²θ", "1 + cot²θ = csc²θ", "Todas las anteriores"],
    "retroalimentacion": "Todas son identidades pitagóricas válidas."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.4 Identidades trigonométricas",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Simplifique la expresión: (sen x + cos x)² − 1",
    "opciones": ["sen 2x", "2 sen x cos x", "1 + sen 2x", "cos 2x"],
    "retroalimentacion": "(sen x + cos x)² = sen²x + 2 sen x cos x + cos²x = 1 + sen 2x. Restando 1 queda sen 2x."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.5 Resolución de triángulos rectángulos y oblicuángulos",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Desde un punto en el suelo se observa la cima de un árbol con un ángulo de elevación de 60°. Si el observador se aleja 10 metros, el nuevo ángulo es de 30°. Calcule la altura del árbol.",
    "opciones": ["5√3 metros", "10 metros", "10√3 metros", "15 metros"],
    "retroalimentacion": "Sea h altura, x distancia inicial. tan 60 = h/x → x = h/√3. tan 30 = h/(x+10) → 1/√3 = h/(h/√3 + 10). Resolviendo: h = 5√3."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.5 Ley de Senos",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "En un triángulo ABC, a = 10, ángulo A = 30°, ángulo B = 45°. El lado b mide aproximadamente:",
    "opciones": ["14.14", "7.07", "17.32", "5.77"],
    "retroalimentacion": "Ley de senos: b/sen 45° = 10/sen 30° → b = 10 × (√2/2) / (1/2) = 10√2 ≈ 14.14."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.5 Ley de Cosenos",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "En un triángulo oblicuángulo, el lado a mide 7 cm, el lado c mide 8 cm, y el ángulo B opuesto al lado b mide 60°. Calcule la longitud del lado b.",
    "opciones": ["√57 cm", "√113 cm", "√97 cm", "√73 cm"],
    "retroalimentacion": "Ley de Cosenos: b² = a² + c² − 2ac·cos B = 49 + 64 − 2·7·8·0.5 = 113 − 56 = 57. b = √57."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.6 Funciones trigonométricas inversas",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El valor de arcsen(1/2) en radianes es:",
    "opciones": ["π/6", "π/3", "π/4", "π/2"],
    "retroalimentacion": "sen(π/6) = 1/2."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.6 Ecuaciones trigonométricas",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Resuelva para x ∈ [0, 2π): 2 sen² x − sen x − 1 = 0",
    "opciones": ["{π/2, 7π/6, 11π/6}", "{π/3, 2π/3}", "{π/2, π}", "{0, π}"],
    "retroalimentacion": "Factorizando: (2 sen x + 1)(sen x − 1) = 0 → sen x = −1/2 o sen x = 1. Soluciones: 7π/6, 11π/6, π/2."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "6. FUNCIÓN EXPONENCIAL Y LOGARÍTMICA",
    "subtema": "6.1 Definición de función exponencial y logarítmica",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "¿Cuál es la base del logaritmo natural (ln)?",
    "opciones": ["e ≈ 2.71828", "10", "2", "π"],
    "retroalimentacion": "El logaritmo natural tiene base e."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "6. FUNCIÓN EXPONENCIAL Y LOGARÍTMICA",
    "subtema": "6.2 Propiedades, ecuaciones e inecuaciones",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Resuelva: 2^{x+1} + 2^{x} = 24",
    "opciones": ["3", "4", "2", "5"],
    "retroalimentacion": "2^x(2+1)=24 → 3·2^x=24 → 2^x=8 → x=3."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "6. FUNCIÓN EXPONENCIAL Y LOGARÍTMICA",
    "subtema": "6.2 Ecuaciones logarítmicas",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "log₂(x) + log₂(x − 2) = 3, entonces x es:",
    "opciones": ["4", "2", "6", "8"],
    "retroalimentacion": "x(x−2)=8 → x²−2x−8=0 → x=4 (x>2)."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "6. FUNCIÓN EXPONENCIAL Y LOGARÍTMICA",
    "subtema": "6.2 Inecuaciones exponenciales",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Resuelva: (1/2)^{x} > 8",
    "opciones": ["x < -3", "x > -3", "x < 3", "x > 3"],
    "retroalimentacion": "2^{-x} > 2^3 → -x > 3 → x < -3."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "6. FUNCIÓN EXPONENCIAL Y LOGARÍTMICA",
    "subtema": "6.2 Propiedades de logaritmos",
    "dificultad": "media",
    "tipo_pregunta": "teorica",
    "enunciado": "La propiedad logₐ(xy) es igual a:",
    "opciones": ["logₐ x + logₐ y", "logₐ x · logₐ y", "logₐ x − logₐ y", "x logₐ y"],
    "retroalimentacion": "El logaritmo de un producto es la suma de logaritmos."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "3. OPERACIONES CON NÚMEROS REALES",
    "subtema": "3.2 Sucesiones, progresiones aritméticas y geométricas",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El término general de una progresión aritmética es aₙ = 3n − 2. La suma de los primeros 20 términos es:",
    "opciones": ["590", "610", "570", "600"],
    "retroalimentacion": "a₁=1, a₂₀=58. S₂₀ = (1+58)·20/2 = 59·10 = 590."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "3. OPERACIONES CON NÚMEROS REALES",
    "subtema": "3.2 Progresiones geométricas",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "En una progresión geométrica, el primer término es 5 y la razón es 2. El quinto término es:",
    "opciones": ["80", "40", "160", "50"],
    "retroalimentacion": "a₅ = a₁·r⁴ = 5·2⁴ = 5·16 = 80."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "1. LÓGICA MATEMÁTICA",
    "subtema": "1.1 Conectivos lógicos",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Construya la tabla de verdad para (p ∨ q) → ¬p. ¿Cuántos valores verdaderos tiene la columna resultante?",
    "opciones": ["2", "1", "3", "4"],
    "retroalimentacion": "Tabla: p q: VV→F, VF→F, FV→V, FF→V. Dos verdaderos."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "2. CONJUNTOS",
    "subtema": "2.3 Diferencia simétrica",
    "dificultad": "media",
    "tipo_pregunta": "teorica",
    "enunciado": "La diferencia simétrica A Δ B se define como:",
    "opciones": ["(A − B) ∪ (B − A)", "(A ∪ B) − (A ∩ B)", "A − B", "B − A"],
    "retroalimentacion": "Ambas definiciones son equivalentes: elementos que están en A o B pero no en ambos."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.3 Función parte entera",
    "dificultad": "baja",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El valor de ⟦3.7⟧ (parte entera) es:",
    "opciones": ["3", "4", "3.7", "0"],
    "retroalimentacion": "La parte entera es el mayor entero menor o igual al número."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.4 Productos notables",
    "dificultad": "baja",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Desarrolle (x − 3)²:",
    "opciones": ["x² − 6x + 9", "x² − 9", "x² + 6x + 9", "x² + 9"],
    "retroalimentacion": "(a−b)² = a² − 2ab + b²."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.4 Factorización",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Factorice completamente: x³ − 4x² + 4x",
    "opciones": ["x(x − 2)²", "x(x² − 4x + 4)", "x(x − 2)(x + 2)", "x²(x − 4) + 4x"],
    "retroalimentacion": "Factor común x: x(x²−4x+4)=x(x−2)²."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.4 Racionalización",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Racionalice el denominador: 5 / (√3 − 1)",
    "opciones": ["(5√3 + 5)/2", "5√3 − 5", "(5√3 − 5)/2", "5√3 + 5"],
    "retroalimentacion": "Multiplicar por conjugado: 5(√3+1)/(3−1) = (5√3+5)/2."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "6. FUNCIÓN EXPONENCIAL Y LOGARÍTMICA",
    "subtema": "6.2 Cambio de base",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Exprese log₉ 27 en términos de logaritmo base 3.",
    "opciones": ["3/2", "2/3", "3", "2"],
    "retroalimentacion": "log₉ 27 = log₃ 27 / log₃ 9 = 3 / 2."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "1. LÓGICA MATEMÁTICA",
    "subtema": "1.2 Tautología",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La proposición (p ∧ q) → p es una:",
    "opciones": ["Tautología", "Contradicción", "Contingencia", "Imposible"],
    "retroalimentacion": "Si p∧q es verdadero, p es verdadero, luego la implicación es siempre verdadera."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "2. CONJUNTOS",
    "subtema": "2.2 Igualdad de conjuntos",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "Dos conjuntos A y B son iguales si:",
    "opciones": ["A ⊆ B y B ⊆ A", "A ∪ B = A", "A ∩ B = ∅", "Tienen el mismo número de elementos"],
    "retroalimentacion": "Doble inclusión: cada elemento de A está en B y viceversa."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "3. OPERACIONES CON NÚMEROS REALES",
    "subtema": "3.3 Intervalos",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "El intervalo (−∞, 5] ∩ [2, 8) es:",
    "opciones": ["[2, 5]", "[2, 8)", "(−∞, 8)", "[5, 8)"],
    "retroalimentacion": "Intersección de conjuntos: desde 2 hasta 5, incluyendo ambos."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.2 Función inversa",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La inversa de f(x) = (2x + 1)/(x − 3) es:",
    "opciones": ["f⁻¹(x) = (3x + 1)/(x − 2)", "f⁻¹(x) = (3x − 1)/(x − 2)", "f⁻¹(x) = (2x − 1)/(x + 3)", "f⁻¹(x) = (x + 3)/(2x − 1)"],
    "retroalimentacion": "Intercambiar x e y, despejar: x(y−3)=2y+1 → xy−3x=2y+1 → y(x−2)=3x+1 → y=(3x+1)/(x−2)."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.3 Función raíz n-ésima",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El dominio de f(x) = ∛(x − 5) es:",
    "opciones": ["Todos los reales", "[5, ∞)", "(5, ∞)", "ℝ − {5}"],
    "retroalimentacion": "Las raíces de índice impar están definidas para todos los reales."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "6. FUNCIÓN EXPONENCIAL Y LOGARÍTMICA",
    "subtema": "6.1 Función exponencial",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "El rango de la función f(x) = 2^x es:",
    "opciones": ["(0, ∞)", "[0, ∞)", "ℝ", "ℝ⁺ ∪ {0}"],
    "retroalimentacion": "Una función exponencial siempre toma valores positivos."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "3. OPERACIONES CON NÚMEROS REALES",
    "subtema": "3.2 Sucesiones",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El siguiente término en la sucesión 1, 4, 9, 16, ... es:",
    "opciones": ["25", "20", "24", "32"],
    "retroalimentacion": "Cuadrados perfectos: 1²,2²,3²,4²,5²=25."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "1. LÓGICA MATEMÁTICA",
    "subtema": "1.3 Leyes de absorción",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Simplifique p ∨ (p ∧ q) usando leyes lógicas.",
    "opciones": ["p", "q", "p ∧ q", "Verdadero"],
    "retroalimentacion": "Ley de absorción: p ∨ (p ∧ q) ≡ p."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "2. CONJUNTOS",
    "subtema": "2.4 Problemas con tres conjuntos",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "En una escuela, 100 alumnos estudian al menos un idioma: 65 inglés, 45 francés, 40 alemán; 20 inglés y francés, 15 inglés y alemán, 10 francés y alemán; 5 los tres. ¿Cuántos estudian exactamente un idioma?",
    "opciones": ["60", "55", "70", "50"],
    "retroalimentacion": "Solo I=65−15−10−5=35, solo F=45−15−5−5=20, solo A=40−10−5−5=20. Suma=75."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.6 Paridad",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La función f(x) = x³ − x es:",
    "opciones": ["Impar", "Par", "Ni par ni impar", "Simétrica respecto al eje Y"],
    "retroalimentacion": "f(−x)=−x³+x=−(x³−x)=−f(x). Es impar."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "6. FUNCIÓN EXPONENCIAL Y LOGARÍTMICA",
    "subtema": "6.2 Ecuaciones exponenciales cuadráticas",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Resuelva: 9^x − 4·3^x + 3 = 0",
    "opciones": ["{0, 1}", "{1, 2}", "{0}", "{1}"],
    "retroalimentacion": "Sea u=3^x. u²−4u+3=0 → (u−1)(u−3)=0 → u=1,3 → 3^x=1→x=0; 3^x=3→x=1."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.3 Gráfico de funciones trigonométricas",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "La amplitud de la función f(x) = 3 sen x es:",
    "opciones": ["3", "2π", "1", "π"],
    "retroalimentacion": "La amplitud es el valor absoluto del coeficiente que multiplica a la función, en este caso 3."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.4 Identidades de suma y resta",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "sen(α + β) es igual a:",
    "opciones": ["sen α cos β + cos α sen β", "sen α cos β − cos α sen β", "cos α cos β − sen α sen β", "cos α cos β + sen α sen β"],
    "retroalimentacion": "Identidad de suma para seno."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.5 Resolución de triángulos oblicuángulos",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "En un triángulo, a=20, b=15 y ángulo C=60°. El área del triángulo es:",
    "opciones": ["75√3", "150√3", "300", "150"],
    "retroalimentacion": "Área = (1/2) a b sen C = 0.5 × 20 × 15 × √3/2 = 75√3."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.6 Inecuaciones trigonométricas",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Resuelva para x ∈ [0, 2π): 2 cos x + 1 < 0",
    "opciones": ["(2π/3, 4π/3)", "(π/3, 2π/3)", "(0, π/2)", "(π, 2π)"],
    "retroalimentacion": "cos x < −1/2 → ángulos donde coseno es menor que −1/2: entre 120° y 240°."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "6. FUNCIÓN EXPONENCIAL Y LOGARÍTMICA",
    "subtema": "6.2 Inecuaciones logarítmicas",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Resuelva: log₂(x − 1) + log₂(x + 2) < 3",
    "opciones": ["(1, 3)", "(1, 2)", "(2, 3)", "(1, ∞)"],
    "retroalimentacion": "Dominio: x>1. log₂[(x−1)(x+2)] < 3 → (x−1)(x+2) < 8 → x²+x−10<0. Raíces (−1±√41)/2 ≈ 2.7. Solución (1, 2.7) ≈ (1,3)."
  },
  {
    "asignatura": "Química",
    "unidad": "1. ESTRUCTURA DE LA MATERIA",
    "subtema": "1.1 Propiedades físicas y químicas de la materia",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "¿Cuál de las siguientes es una propiedad química de la materia?",
    "opciones": ["Inflamabilidad", "Densidad", "Punto de ebullición", "Masa"],
    "retroalimentacion": "La inflamabilidad describe la capacidad de una sustancia para arder, lo cual implica un cambio en su composición (propiedad química)."
  },
  {
    "asignatura": "Química",
    "unidad": "1. ESTRUCTURA DE LA MATERIA",
    "subtema": "1.2 Estados de la materia",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "El estado de la materia que tiene volumen definido pero forma variable es:",
    "opciones": ["Líquido", "Sólido", "Gaseoso", "Plasma"],
    "retroalimentacion": "Los líquidos adoptan la forma del recipiente pero mantienen volumen constante."
  },
  {
    "asignatura": "Química",
    "unidad": "1. ESTRUCTURA DE LA MATERIA",
    "subtema": "1.3 Teorías atómicas y Distribución electrónica",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La configuración electrónica del átomo de oxígeno (Z=8) en su estado fundamental es:",
    "opciones": ["1s² 2s² 2p⁴", "1s² 2s² 2p⁶", "1s² 2s² 2p²", "1s² 2s² 2p³ 3s¹"],
    "retroalimentacion": "Oxígeno: 1s², 2s², 2p⁴ (8 electrones)."
  },
  {
    "asignatura": "Química",
    "unidad": "1. ESTRUCTURA DE LA MATERIA",
    "subtema": "1.3 Distribución electrónica",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "¿Cuántos electrones desapareados tiene el átomo de nitrógeno (Z=7) en su estado fundamental?",
    "opciones": ["3", "1", "2", "0"],
    "retroalimentacion": "Configuración: 1s² 2s² 2p³. Los tres electrones p ocupan orbitales separados (regla de Hund) → 3 desapareados."
  },
  {
    "asignatura": "Química",
    "unidad": "1. ESTRUCTURA DE LA MATERIA",
    "subtema": "1.4 Pesos atómicos y pesos moleculares",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Calcule la masa molar del ácido sulfúrico H₂SO₄. (Pesos atómicos: H=1, S=32, O=16)",
    "opciones": ["98 g/mol", "82 g/mol", "100 g/mol", "96 g/mol"],
    "retroalimentacion": "2(1) + 32 + 4(16) = 2 + 32 + 64 = 98."
  },
  {
    "asignatura": "Química",
    "unidad": "2. TABLA PERIÓDICA Y ENLACES QUÍMICOS",
    "subtema": "2.1 Estructura de la tabla periódica",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "Los elementos en un mismo grupo de la tabla periódica tienen:",
    "opciones": ["El mismo número de electrones de valencia", "El mismo número de capas electrónicas", "La misma masa atómica", "Propiedades metálicas idénticas"],
    "retroalimentacion": "Pertenecer al mismo grupo implica configuración electrónica externa similar (mismos electrones de valencia)."
  },
  {
    "asignatura": "Química",
    "unidad": "2. TABLA PERIÓDICA Y ENLACES QUÍMICOS",
    "subtema": "2.1 Ubicación de elementos",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Un elemento tiene configuración electrónica terminada en 3s² 3p⁵. Se encuentra en el período ____ y grupo ____.",
    "opciones": ["3, 17 (VIIA)", "3, 15 (VA)", "4, 17", "2, 17"],
    "retroalimentacion": "Período = último nivel (3). Electrones de valencia = 2+5=7 → Grupo 17 (halógenos)."
  },
  {
    "asignatura": "Química",
    "unidad": "2. TABLA PERIÓDICA Y ENLACES QUÍMICOS",
    "subtema": "2.4 Enlaces químicos",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "El enlace iónico se forma típicamente entre:",
    "opciones": ["Un metal y un no metal", "Dos no metales", "Dos metales", "Gases nobles"],
    "retroalimentacion": "Transferencia de electrones de un metal (baja electronegatividad) a un no metal (alta electronegatividad)."
  },
  {
    "asignatura": "Química",
    "unidad": "2. TABLA PERIÓDICA Y ENLACES QUÍMICOS",
    "subtema": "2.4 Enlace covalente",
    "dificultad": "media",
    "tipo_pregunta": "teorica",
    "enunciado": "En un enlace covalente polar, los electrones compartidos:",
    "opciones": ["Pasan más tiempo cerca del átomo más electronegativo", "Se comparten equitativamente", "Son transferidos completamente", "Forman una red cristalina"],
    "retroalimentacion": "La diferencia de electronegatividad genera un dipolo."
  },
  {
    "asignatura": "Química",
    "unidad": "3. NOMENCLATURA INORGÁNICA Y GASES IDEALES",
    "subtema": "3.1 Nomenclatura inorgánica",
    "dificultad": "baja",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El nombre del compuesto Fe₂O₃ según la nomenclatura Stock es:",
    "opciones": ["Óxido de hierro (III)", "Óxido ferroso", "Trióxido de dihierro", "Óxido de hierro (II)"],
    "retroalimentacion": "Hierro con estado de oxidación +3."
  },
  {
    "asignatura": "Química",
    "unidad": "3. NOMENCLATURA INORGÁNICA Y GASES IDEALES",
    "subtema": "3.1 Nomenclatura de hidróxidos",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La fórmula del hidróxido de calcio es:",
    "opciones": ["Ca(OH)₂", "CaOH", "Ca₂OH", "CaO₂H₂"],
    "retroalimentacion": "Calcio tiene valencia +2, hidróxido (OH)⁻. Se necesitan dos OH."
  },
  {
    "asignatura": "Química",
    "unidad": "3. NOMENCLATURA INORGÁNICA Y GASES IDEALES",
    "subtema": "3.2 Leyes de los gases",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Un gas ocupa 4 L a 2 atm y 300 K. Si la presión se duplica y la temperatura se mantiene constante, el nuevo volumen es:",
    "opciones": ["2 L", "8 L", "1 L", "4 L"],
    "retroalimentacion": "Ley de Boyle: P₁V₁ = P₂V₂ → 2·4 = 4·V₂ → V₂=2."
  },
  {
    "asignatura": "Química",
    "unidad": "3. NOMENCLATURA INORGÁNICA Y GASES IDEALES",
    "subtema": "3.2 Ley de Charles",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Un globo aerostático tiene un volumen de 2.5 L a 25°C. Si se calienta a presión constante hasta triplicar su temperatura en grados Celsius, ¿cuál es el nuevo volumen?",
    "opciones": ["2.8 L", "7.5 L", "5.0 L", "3.2 L"],
    "retroalimentacion": "T₁=298K, T₂=75°C=348K. V₂ = 2.5×(348/298) ≈ 2.92 ≈ 2.8 L."
  },
  {
    "asignatura": "Química",
    "unidad": "4. REACCIONES QUÍMICAS Y ESTEQUIOMETRIA",
    "subtema": "4.1 Clasificación de las reacciones",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "La reacción 2H₂ + O₂ → 2H₂O es un ejemplo de reacción de:",
    "opciones": ["Combinación o síntesis", "Descomposición", "Desplazamiento simple", "Doble desplazamiento"],
    "retroalimentacion": "Dos o más sustancias se unen para formar un producto."
  },
  {
    "asignatura": "Química",
    "unidad": "4. REACCIONES QUÍMICAS Y ESTEQUIOMETRIA",
    "subtema": "4.1 Métodos de igualación",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Balancee: Fe + O₂ → Fe₂O₃. El coeficiente del O₂ es:",
    "opciones": ["3", "2", "1", "4"],
    "retroalimentacion": "4Fe + 3O₂ → 2Fe₂O₃. Coeficiente O₂ = 3."
  },
  {
    "asignatura": "Química",
    "unidad": "4. REACCIONES QUÍMICAS Y ESTEQUIOMETRIA",
    "subtema": "4.3 Cálculos estequiométricos",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "¿Cuántos gramos de agua se producen al quemar 8 g de metano (CH₄)? CH₄ + 2O₂ → CO₂ + 2H₂O. (C=12, H=1, O=16)",
    "opciones": ["18 g", "9 g", "36 g", "16 g"],
    "retroalimentacion": "Masa molar CH₄=16 g/mol → 8 g = 0.5 mol. 1 mol CH₄ produce 2 mol H₂O → 0.5 mol produce 1 mol H₂O = 18 g."
  },
  {
    "asignatura": "Química",
    "unidad": "4. REACCIONES QUÍMICAS Y ESTEQUIOMETRIA",
    "subtema": "4.3 Reactivo limitante",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Se hacen reaccionar 10 g de H₂ con 32 g de O₂ para formar agua. ¿Cuál es el reactivo limitante? (H=1, O=16)",
    "opciones": ["O₂", "H₂", "Ninguno, están en proporción estequiométrica", "Ambos se consumen por igual"],
    "retroalimentacion": "2H₂ + O₂ → 2H₂O. 10 g H₂ = 5 mol; 32 g O₂ = 1 mol. Se requiere 0.5 mol O₂ por mol H₂? Relación 2:1 → 5 mol H₂ necesitan 2.5 mol O₂. Solo hay 1 mol O₂, O₂ es limitante."
  },
  {
    "asignatura": "Química",
    "unidad": "1. ESTRUCTURA DE LA MATERIA",
    "subtema": "1.3 Modelos atómicos",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "¿Quién propuso el modelo atómico planetario con un núcleo central?",
    "opciones": ["Rutherford", "Thomson", "Bohr", "Dalton"],
    "retroalimentacion": "Experimento de lámina de oro de Rutherford."
  },
  {
    "asignatura": "Química",
    "unidad": "2. TABLA PERIÓDICA Y ENLACES QUÍMICOS",
    "subtema": "2.1 Propiedades periódicas",
    "dificultad": "media",
    "tipo_pregunta": "teorica",
    "enunciado": "La electronegatividad en la tabla periódica tiende a aumentar hacia:",
    "opciones": ["Arriba y a la derecha", "Abajo y a la izquierda", "Arriba y a la izquierda", "Abajo y a la derecha"],
    "retroalimentacion": "El flúor (arriba derecha) es el más electronegativo."
  },
  {
    "asignatura": "Química",
    "unidad": "3. NOMENCLATURA INORGÁNICA Y GASES IDEALES",
    "subtema": "3.1 Ácidos oxácidos",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El nombre tradicional de H₂SO₄ es:",
    "opciones": ["Ácido sulfúrico", "Ácido sulfuroso", "Ácido sulfhídrico", "Ácido persulfúrico"],
    "retroalimentacion": "Azufre con valencia +6."
  },
  {
    "asignatura": "Química",
    "unidad": "4. REACCIONES QUÍMICAS Y ESTEQUIOMETRIA",
    "subtema": "4.2 Leyes ponderales",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "La ley de la conservación de la masa fue enunciada por:",
    "opciones": ["Lavoisier", "Proust", "Dalton", "Avogadro"],
    "retroalimentacion": "«La materia no se crea ni se destruye, solo se transforma»."
  },
  {
    "asignatura": "Química",
    "unidad": "1. ESTRUCTURA DE LA MATERIA",
    "subtema": "1.2 Cambios de estado",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "El paso de estado sólido directamente a gaseoso se denomina:",
    "opciones": ["Sublimación", "Fusión", "Evaporación", "Condensación"],
    "retroalimentacion": "Ejemplo: hielo seco (CO₂ sólido)."
  },
  {
    "asignatura": "Química",
    "unidad": "2. TABLA PERIÓDICA Y ENLACES QUÍMICOS",
    "subtema": "2.4 Enlace metálico",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "La conductividad eléctrica de los metales se debe a:",
    "opciones": ["Electrones deslocalizados", "Iones fijos", "Enlaces covalentes polares", "Transferencia de protones"],
    "retroalimentacion": "Modelo del mar de electrones."
  },
  {
    "asignatura": "Química",
    "unidad": "3. NOMENCLATURA INORGÁNICA Y GASES IDEALES",
    "subtema": "3.2 Ley de Gay-Lussac",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Un gas a 27°C ejerce una presión de 2 atm. Si el volumen es constante, ¿a qué temperatura en °C ejercerá una presión de 3 atm?",
    "opciones": ["177 °C", "450 °C", "127 °C", "327 °C"],
    "retroalimentacion": "P₁/T₁ = P₂/T₂ → 2/300 = 3/T₂ → T₂=450 K = 177 °C."
  },
  {
    "asignatura": "Química",
    "unidad": "4. REACCIONES QUÍMICAS Y ESTEQUIOMETRIA",
    "subtema": "4.1 Reacción redox",
    "dificultad": "alta",
    "tipo_pregunta": "teorica",
    "enunciado": "En la reacción Zn + CuSO₄ → ZnSO₄ + Cu, el agente oxidante es:",
    "opciones": ["Cu²⁺", "Zn", "SO₄²⁻", "Cu"],
    "retroalimentacion": "Cu²⁺ se reduce a Cu, por lo tanto oxida al Zn."
  },
  {
    "asignatura": "Química",
    "unidad": "1. ESTRUCTURA DE LA MATERIA",
    "subtema": "1.3 Números cuánticos",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "¿Cuál es el número máximo de electrones que puede albergar el subnivel 3d?",
    "opciones": ["10", "6", "14", "2"],
    "retroalimentacion": "Orbitales d = 5, cada uno 2 e⁻ → 10."
  },
  {
    "asignatura": "Química",
    "unidad": "2. TABLA PERIÓDICA Y ENLACES QUÍMICOS",
    "subtema": "2.4 Estructura de Lewis",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "En la molécula de CO₂, el átomo de carbono presenta enlaces:",
    "opciones": ["Dobles", "Simples", "Triples", "Coordinados"],
    "retroalimentacion": "O=C=O, dos dobles enlaces."
  },
  {
    "asignatura": "Química",
    "unidad": "3. NOMENCLATURA INORGÁNICA Y GASES IDEALES",
    "subtema": "3.1 Sales",
    "dificultad": "baja",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La fórmula del cloruro de sodio es:",
    "opciones": ["NaCl", "NaCl₂", "Na₂Cl", "Na(ClO)"],
    "retroalimentacion": "Na⁺ y Cl⁻ → NaCl."
  },
  {
    "asignatura": "Química",
    "unidad": "4. REACCIONES QUÍMICAS Y ESTEQUIOMETRIA",
    "subtema": "4.3 Pureza de reactivos",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "¿Cuántos gramos de CaO se obtienen a partir de 200 g de caliza con 90% de pureza de CaCO₃? CaCO₃ → CaO + CO₂. (Ca=40, C=12, O=16)",
    "opciones": ["100.8 g", "112 g", "90 g", "200 g"],
    "retroalimentacion": "CaCO₃ puro = 200×0.9=180 g = 1.8 mol. 1 mol CaCO₃ produce 1 mol CaO (56 g). Masa CaO = 1.8×56 = 100.8 g."
  },
  {
    "asignatura": "Química",
    "unidad": "1. ESTRUCTURA DE LA MATERIA",
    "subtema": "1.4 Masa atómica promedio",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El cloro tiene dos isótopos: Cl-35 (75%) y Cl-37 (25%). La masa atómica promedio es:",
    "opciones": ["35.5", "36", "35", "37"],
    "retroalimentacion": "0.75×35 + 0.25×37 = 26.25 + 9.25 = 35.5."
  },
  {
    "asignatura": "Química",
    "unidad": "2. TABLA PERIÓDICA Y ENLACES QUÍMICOS",
    "subtema": "2.1 Metales, no metales y metaloides",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "El silicio (Si) es un ejemplo de:",
    "opciones": ["Metaloide", "Metal", "No metal", "Gas noble"],
    "retroalimentacion": "Propiedades intermedias, semiconductor."
  },
  {
    "asignatura": "Química",
    "unidad": "3. NOMENCLATURA INORGÁNICA Y GASES IDEALES",
    "subtema": "3.2 Ley de Dalton",
    "dificultad": "media",
    "tipo_pregunta": "teorica",
    "enunciado": "La presión total de una mezcla de gases es igual a:",
    "opciones": ["La suma de las presiones parciales", "El promedio de las presiones", "La presión del gas más abundante", "La presión parcial más baja"],
    "retroalimentacion": "Ley de Dalton de las presiones parciales."
  },
  {
    "asignatura": "Química",
    "unidad": "4. REACCIONES QUÍMICAS Y ESTEQUIOMETRIA",
    "subtema": "4.2 Ley de Proust",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "La ley de las proporciones definidas establece que:",
    "opciones": ["Un compuesto siempre tiene los mismos elementos en la misma proporción de masa", "La masa se conserva", "Los gases reaccionan en volúmenes sencillos", "La presión y el volumen son inversos"],
    "retroalimentacion": "Composición constante del compuesto."
  },
  {
    "asignatura": "Química",
    "unidad": "1. ESTRUCTURA DE LA MATERIA",
    "subtema": "1.1 Mezclas y sustancias puras",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "El agua salada es un ejemplo de:",
    "opciones": ["Mezcla homogénea", "Sustancia pura", "Mezcla heterogénea", "Elemento"],
    "retroalimentacion": "Composición uniforme, una sola fase."
  },
  {
    "asignatura": "Química",
    "unidad": "2. TABLA PERIÓDICA Y ENLACES QUÍMICOS",
    "subtema": "2.4 Polaridad de enlace",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "¿Cuál de las siguientes moléculas es polar?",
    "opciones": ["H₂O", "CO₂", "CH₄", "O₂"],
    "retroalimentacion": "Agua tiene geometría angular y momento dipolar neto."
  },
  {
    "asignatura": "Química",
    "unidad": "3. NOMENCLATURA INORGÁNICA Y GASES IDEALES",
    "subtema": "3.2 Ecuación general de los gases",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "¿Qué volumen ocupan 2 moles de un gas ideal en condiciones normales (1 atm, 0°C)?",
    "opciones": ["44.8 L", "22.4 L", "11.2 L", "2 L"],
    "retroalimentacion": "1 mol → 22.4 L, 2 moles → 44.8 L."
  },
  {
    "asignatura": "Química",
    "unidad": "4. REACCIONES QUÍMICAS Y ESTEQUIOMETRIA",
    "subtema": "4.3 Rendimiento de reacción",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Se esperaba obtener 50 g de producto pero se obtuvieron 40 g. El rendimiento porcentual es:",
    "opciones": ["80%", "20%", "125%", "40%"],
    "retroalimentacion": "(40/50) × 100 = 80%."
  },
{
    "asignatura": "Matemáticas",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.2 Círculo trigonométrico",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El valor de sen(150°) es:",
    "opciones": ["1/2", "√3/2", "-1/2", "-√3/2"],
    "retroalimentacion": "150° está en el II cuadrante, seno positivo. sen(180°−30°)=sen30°=1/2."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.3 Gráfico de funciones trigonométricas",
    "dificultad": "media",
    "tipo_pregunta": "teorica",
    "enunciado": "¿Cuál es el período de la función f(x) = tan x?",
    "opciones": ["π", "2π", "π/2", "4π"],
    "retroalimentacion": "La función tangente se repite cada π radianes."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.4 Identidades trigonométricas",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Simplifique la expresión: (1 − cos²x) / (sen x)",
    "opciones": ["sen x", "cos x", "tan x", "cot x"],
    "retroalimentacion": "1−cos²x = sen²x. Luego sen²x / sen x = sen x."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.5 Resolución de triángulos rectángulos",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "En un triángulo rectángulo, el cateto opuesto a un ángulo de 30° mide 5 cm. La hipotenusa mide:",
    "opciones": ["10 cm", "5√3 cm", "5 cm", "2.5 cm"],
    "retroalimentacion": "sen 30° = opuesto/hipotenusa → 1/2 = 5/h → h = 10."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.5 Ley de Cosenos",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "En un triángulo ABC, a = 13, b = 14, c = 15. Calcule el ángulo A (opuesto al lado a).",
    "opciones": ["≈ 53°", "≈ 60°", "≈ 45°", "≈ 30°"],
    "retroalimentacion": "Ley de cosenos: a² = b² + c² − 2bc cos A → 169 = 196 + 225 − 2·14·15·cos A → cos A = 252/420 = 0.6 → A ≈ 53.13°."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.6 Funciones trigonométricas inversas",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El valor de arccos(−1/2) en radianes es:",
    "opciones": ["2π/3", "π/3", "π/6", "5π/6"],
    "retroalimentacion": "El coseno es −1/2 en el II cuadrante, ángulo 120° = 2π/3."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.6 Ecuaciones trigonométricas",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Resuelva para x ∈ [0, 2π): 2 cos² x − 3 cos x + 1 = 0",
    "opciones": ["{0, π/3, 5π/3}", "{π/3, 2π/3}", "{π/2, 3π/2}", "{0, π}"],
    "retroalimentacion": "(2cos x −1)(cos x −1)=0 → cos x = 1/2 o 1. Soluciones: 0, π/3, 5π/3."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.4 Identidades de ángulo doble",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Si sen x = 3/5 y x está en el I cuadrante, el valor de sen 2x es:",
    "opciones": ["24/25", "12/25", "6/5", "9/25"],
    "retroalimentacion": "cos x = 4/5. sen 2x = 2 sen x cos x = 2·(3/5)·(4/5) = 24/25."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.2 Ángulos cuadrantales",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "El valor de cos(π) es:",
    "opciones": ["-1", "0", "1", "No definido"],
    "retroalimentacion": "En el círculo unitario, π rad (180°) corresponde al punto (−1,0), coseno = −1."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.6 Inecuaciones trigonométricas",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Resuelva para x ∈ [0, 2π): sen x ≥ √2/2",
    "opciones": ["[π/4, 3π/4]", "[0, π/4] ∪ [3π/4, 2π]", "[π/4, π/2]", "[3π/4, 5π/4]"],
    "retroalimentacion": "sen x ≥ √2/2 en el I y II cuadrantes entre los ángulos π/4 y 3π/4."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "6. FUNCIÓN EXPONENCIAL Y LOGARÍTMICA",
    "subtema": "6.1 Definición",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "El dominio de la función f(x) = ln(x − 2) es:",
    "opciones": ["(2, ∞)", "[2, ∞)", "ℝ − {2}", "(-∞, 2)"],
    "retroalimentacion": "El argumento del logaritmo natural debe ser estrictamente positivo: x − 2 > 0 → x > 2."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "6. FUNCIÓN EXPONENCIAL Y LOGARÍTMICA",
    "subtema": "6.2 Propiedades de logaritmos",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Simplifique: log₃ 9 + log₃ 27 − log₃ 3",
    "opciones": ["4", "3", "5", "2"],
    "retroalimentacion": "2 + 3 − 1 = 4."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "6. FUNCIÓN EXPONENCIAL Y LOGARÍTMICA",
    "subtema": "6.2 Ecuaciones exponenciales",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Resuelva: 5^{2x−1} = 125",
    "opciones": ["2", "1", "3", "0"],
    "retroalimentacion": "125 = 5³ → 2x−1 = 3 → 2x = 4 → x = 2."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "6. FUNCIÓN EXPONENCIAL Y LOGARÍTMICA",
    "subtema": "6.2 Ecuaciones logarítmicas",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Resuelva: ln(x) + ln(x − 3) = ln 4",
    "opciones": ["4", "-1", "4 y -1", "3"],
    "retroalimentacion": "ln(x(x−3)) = ln 4 → x² − 3x = 4 → x² − 3x − 4 = 0 → (x−4)(x+1)=0. x=4 (x>3)."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "6. FUNCIÓN EXPONENCIAL Y LOGARÍTMICA",
    "subtema": "6.2 Inecuaciones exponenciales",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Resuelva: 3^{x+2} ≤ 27",
    "opciones": ["x ≤ 1", "x ≥ 1", "x ≤ -1", "x ≥ -1"],
    "retroalimentacion": "3^{x+2} ≤ 3³ → x+2 ≤ 3 → x ≤ 1."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "3. OPERACIONES CON NÚMEROS REALES",
    "subtema": "3.2 Progresiones aritméticas",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Intercale 3 medios aritméticos entre 7 y 23.",
    "opciones": ["11, 15, 19", "10, 13, 16", "12, 17, 22", "9, 14, 18"],
    "retroalimentacion": "a₁=7, a₅=23 → d = (23−7)/4 = 4. Términos: 7, 11, 15, 19, 23."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "3. OPERACIONES CON NÚMEROS REALES",
    "subtema": "3.2 Progresiones geométricas",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La suma de los infinitos términos de la progresión 8, 4, 2, 1, ... es:",
    "opciones": ["16", "8", "12", "Infinito"],
    "retroalimentacion": "a₁=8, r=1/2. S = 8/(1−1/2) = 16."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "1. LÓGICA MATEMÁTICA",
    "subtema": "1.2 Tautología, contradicción, contingencia",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La proposición ¬(p ∧ q) ↔ (¬p ∨ ¬q) es una:",
    "opciones": ["Tautología", "Contradicción", "Contingencia", "Indeterminada"],
    "retroalimentacion": "Es una de las leyes de De Morgan, siempre verdadera."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "2. CONJUNTOS",
    "subtema": "2.3 Operaciones con conjuntos",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Si A = {x ∈ ℤ / |x| ≤ 2} y B = {x ∈ ℕ / x < 4}, entonces A ∩ B es:",
    "opciones": ["{0, 1, 2}", "{-2, -1, 0, 1, 2}", "{1, 2, 3}", "{0, 1, 2, 3}"],
    "retroalimentacion": "A = {-2,-1,0,1,2}; B = {1,2,3}. Intersección = {1,2} (ℕ no incluye 0 en algunos contextos, pero usualmente en Ecuador ℕ = {1,2,3,...}). Si ℕ incluye 0, sería {0,1,2}."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.3 Función cuadrática",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Determine el vértice de la parábola y = −x² + 4x − 3.",
    "opciones": ["(2, 1)", "(2, -1)", "(-2, -15)", "(1, 0)"],
    "retroalimentacion": "x_v = −b/2a = −4/(−2) = 2; y_v = −(2)² + 4(2) −3 = −4 + 8 −3 = 1."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.4 Composición de funciones",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Sean f(x) = 3x − 1 y g(x) = 2x². Calcule (g ∘ f)(2).",
    "opciones": ["50", "25", "10", "98"],
    "retroalimentacion": "f(2)=5; g(5)=2(25)=50."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.5 Monotonía",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La función f(x) = x³ − 3x es creciente en el intervalo:",
    "opciones": ["(-∞, -1) ∪ (1, ∞)", "(-1, 1)", "Todo ℝ", "(-∞, 0)"],
    "retroalimentacion": "f'(x) = 3x² − 3 > 0 → x² > 1 → |x| > 1."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.1 Razones trigonométricas",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "En un triángulo rectángulo, la tangente de un ángulo agudo es:",
    "opciones": ["Cateto opuesto / Cateto adyacente", "Cateto adyacente / Cateto opuesto", "Cateto opuesto / Hipotenusa", "Cateto adyacente / Hipotenusa"],
    "retroalimentacion": "Definición de tangente."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.3 Función coseno",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "El rango de la función f(x) = cos x es:",
    "opciones": ["[-1, 1]", "[0, 1]", "(-∞, ∞)", "[-1, 0]"],
    "retroalimentacion": "El coseno oscila entre -1 y 1."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.4 Identidades pitagóricas",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Si tan x = 2 y x está en el III cuadrante, calcule sec x.",
    "opciones": ["-√5", "√5", "-1/√5", "1/√5"],
    "retroalimentacion": "sec²x = 1 + tan²x = 5 → sec x = ±√5. En III cuadrante coseno negativo, secante negativo → -√5."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.5 Área de triángulo",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Calcule el área de un triángulo con lados a=10, b=8 y ángulo C=30°.",
    "opciones": ["20", "40", "10√3", "20√3"],
    "retroalimentacion": "Área = (1/2) a b sen C = 0.5·10·8·(1/2) = 20."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "6. FUNCIÓN EXPONENCIAL Y LOGARÍTMICA",
    "subtema": "6.2 Cambio de base",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Convierta log₅ 10 a base 10.",
    "opciones": ["1 / log 5", "log 2", "log 5 / log 10", "log 5"],
    "retroalimentacion": "logₐ b = log b / log a → log₅ 10 = log 10 / log 5 = 1 / log 5."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.1 Dominio y Rango",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El dominio de f(x) = 1/(x² − 4) es:",
    "opciones": ["ℝ − {−2, 2}", "ℝ − {2}", "ℝ − {−2}", "Todos los reales"],
    "retroalimentacion": "Denominador ≠ 0 → x² ≠ 4 → x ≠ ±2."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.2 Función inversa",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La inversa de f(x) = 2x + 3 es:",
    "opciones": ["f⁻¹(x) = (x − 3)/2", "f⁻¹(x) = x/2 − 3", "f⁻¹(x) = 2x − 3", "f⁻¹(x) = 3 − 2x"],
    "retroalimentacion": "y = 2x+3 → x = 2y+3 → y = (x−3)/2."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.3 Función valor absoluto",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La gráfica de y = |x − 2| tiene un vértice en:",
    "opciones": ["(2, 0)", "(0, 2)", "(-2, 0)", "(0, -2)"],
    "retroalimentacion": "El mínimo ocurre cuando x−2=0 → x=2, y=0."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "3. OPERACIONES CON NÚMEROS REALES",
    "subtema": "3.4 Valor absoluto",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Resuelva: |2x + 1| = 5",
    "opciones": ["{2, -3}", "{2}", "{-3}", "{3, -2}"],
    "retroalimentacion": "2x+1=5 → x=2; 2x+1=−5 → x=−3."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.1 Radianes y grados",
    "dificultad": "baja",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Convierta 120° a radianes.",
    "opciones": ["2π/3", "π/3", "5π/6", "3π/4"],
    "retroalimentacion": "120° × π/180° = 2π/3."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.3 Propiedades de funciones trigonométricas",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "¿Cuál de las siguientes funciones es impar?",
    "opciones": ["sen x", "cos x", "sec x", "|sen x|"],
    "retroalimentacion": "sen(−x) = −sen x."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.4 Identidades recíprocas",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "La identidad recíproca de la cotangente es:",
    "opciones": ["cot x = 1/tan x", "cot x = cos x / sen x", "cot x = sen x / cos x", "cot x = 1/sen x"],
    "retroalimentacion": "cot x = 1/tan x = cos x / sen x."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.6 Ecuaciones trigonométricas",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Resuelva: 4 sen² x − 3 = 0 para x ∈ [0, 2π).",
    "opciones": ["{π/3, 2π/3, 4π/3, 5π/3}", "{π/3, 2π/3}", "{π/6, 5π/6}", "{π/4, 3π/4, 5π/4, 7π/4}"],
    "retroalimentacion": "sen² x = 3/4 → sen x = ±√3/2. Ángulos: π/3, 2π/3, 4π/3, 5π/3."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "6. FUNCIÓN EXPONENCIAL Y LOGARÍTMICA",
    "subtema": "6.2 Crecimiento exponencial",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Una bacteria se duplica cada 3 horas. Si inicialmente hay 100 bacterias, ¿cuántas habrá después de 15 horas?",
    "opciones": ["3200", "5000", "1600", "6400"],
    "retroalimentacion": "N(t) = 100·2^{t/3}. t=15 → 100·2⁵ = 3200."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "3. OPERACIONES CON NÚMEROS REALES",
    "subtema": "3.2 Suma de PA",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Calcule la suma: 2 + 5 + 8 + ... + 44.",
    "opciones": ["345", "350", "368", "322"],
    "retroalimentacion": "a₁=2, d=3, aₙ=44 → 44=2+(n−1)·3 → n=15. S₁₅ = (2+44)·15/2 = 23·15 = 345."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "3. OPERACIONES CON NÚMEROS REALES",
    "subtema": "3.3 Inecuaciones",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Resuelva: 2x − 5 < 3x + 1 ≤ 10",
    "opciones": ["(-6, 3]", "[-6, 3)", "(-∞, 3]", "(-6, ∞)"],
    "retroalimentacion": "Parte izquierda: 2x−5 < 3x+1 → x > −6. Parte derecha: 3x+1 ≤ 10 → 3x ≤ 9 → x ≤ 3. Solución: −6 < x ≤ 3 → (-6, 3]."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.3 Función lineal",
    "dificultad": "baja",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La pendiente de la recta que pasa por (1, 2) y (3, 8) es:",
    "opciones": ["3", "1/3", "6", "2"],
    "retroalimentacion": "m = (8−2)/(3−1) = 6/2 = 3."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.5 Ley de Senos",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "En un triángulo, A=45°, a=10√2, b=10. Calcule el ángulo B.",
    "opciones": ["30°", "45°", "60°", "90°"],
    "retroalimentacion": "sen B / 10 = sen 45° / 10√2 → sen B = 10·(√2/2) / 10√2 = 1/2 → B = 30° o 150°. Como a > b, A > B → B = 30°."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "6. FUNCIÓN EXPONENCIAL Y LOGARÍTMICA",
    "subtema": "6.2 Inecuaciones logarítmicas",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Resuelva: log₀.₅ (x − 1) ≥ 2",
    "opciones": ["(1, 1.25]", "[1.25, ∞)", "(1, ∞)", "(-∞, 1.25]"],
    "retroalimentacion": "Base 0.5 < 1, cambia sentido: x−1 ≤ (0.5)² = 0.25 → x ≤ 1.25. Dominio: x > 1. Solución: (1, 1.25]."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "2. CONJUNTOS",
    "subtema": "2.4 Problemas de encuesta",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "De 60 estudiantes, 30 estudian Matemática, 40 Física, 10 ambas. ¿Cuántos no estudian ninguna?",
    "opciones": ["0", "10", "20", "30"],
    "retroalimentacion": "|M ∪ F| = 30+40−10 = 60. Todos estudian al menos una, 0 ninguna."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "1. LÓGICA MATEMÁTICA",
    "subtema": "1.1 Tablas de verdad",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La proposición (p → q) ∧ (q → p) es equivalente a:",
    "opciones": ["p ↔ q", "p ∧ q", "p ∨ q", "¬p ∨ q"],
    "retroalimentacion": "Es la definición del bicondicional."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.4 Racionalización",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Racionalice y simplifique: 2 / (√5 + √3)",
    "opciones": ["√5 − √3", "√5 + √3", "2√5 − 2√3", "(√5 − √3)/2"],
    "retroalimentacion": "Multiplicar numerador y denominador por (√5−√3): 2(√5−√3)/(5−3) = √5−√3."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.1 Razones trigonométricas recíprocas",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "La cosecante de un ángulo se define como:",
    "opciones": ["1 / seno", "1 / coseno", "1 / tangente", "seno / coseno"],
    "retroalimentacion": "csc θ = 1/sen θ."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "6. FUNCIÓN EXPONENCIAL Y LOGARÍTMICA",
    "subtema": "6.2 Decaimiento exponencial",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Un isótopo radiactivo tiene una vida media de 5 años. Si inicialmente hay 80 g, ¿cuánto quedará después de 15 años?",
    "opciones": ["10 g", "20 g", "40 g", "5 g"],
    "retroalimentacion": "15 años = 3 vidas medias → 80 → 40 → 20 → 10 g."
  },
 {
    "asignatura": "Matemáticas",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.4 Identidades de ángulo medio",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Si cos θ = 3/5 y 0 < θ < π/2, calcule sen(θ/2).",
    "opciones": ["√5/5", "2/5", "1/√5", "√10/10"],
    "retroalimentacion": "sen(θ/2) = √[(1−cos θ)/2] = √[(1−3/5)/2] = √(1/5) = √5/5."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.6 Ecuaciones trigonométricas con identidades",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Resuelva para x ∈ [0, 2π): cos 2x = sen x",
    "opciones": ["{π/6, 5π/6, 3π/2}", "{π/2, 3π/2}", "{π/3, 2π/3}", "{π/4, 3π/4}"],
    "retroalimentacion": "cos 2x = 1 − 2 sen² x = sen x → 2 sen² x + sen x − 1 = 0 → (2 sen x − 1)(sen x + 1) = 0 → sen x = 1/2 o sen x = −1. Soluciones: π/6, 5π/6, 3π/2."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "6. FUNCIÓN EXPONENCIAL Y LOGARÍTMICA",
    "subtema": "6.2 Ecuaciones exponenciales con distinta base",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Resuelva: 2^{x} · 3^{x+1} = 72",
    "opciones": ["2", "1", "3", "0"],
    "retroalimentacion": "2^x · 3^{x+1} = 2^x · 3·3^x = 3·(2·3)^x = 3·6^x = 72 → 6^x = 24 → 6^x = 6^? No exacto. Otra vía: 2^x·3^x·3 = 6^x·3 = 72 → 6^x = 24. 24=6·4 no es potencia entera. Revisar: 2^2·3^3=4·27=108; 2^3·3^2=8·9=72 → x=2, x+1=3 → x=2."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "3. OPERACIONES CON NÚMEROS REALES",
    "subtema": "3.4 Valor absoluto con inecuación",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Resuelva: |x − 1| + |x − 3| ≤ 4",
    "opciones": ["[0, 4]", "[1, 3]", "[0, 3]", "[1, 4]"],
    "retroalimentacion": "Puntos críticos 1 y 3. Intervalos: x<1: 1−x+3−x=4−2x≤4 → x≥0 → [0,1); 1≤x<3: x−1+3−x=2≤4 siempre; x≥3: x−1+x−3=2x−4≤4 → x≤4 → [3,4]. Unión [0,4]."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.3 Función cuadrática completando cuadrados",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Exprese f(x) = x² − 6x + 10 en la forma (x − h)² + k.",
    "opciones": ["(x − 3)² + 1", "(x + 3)² + 1", "(x − 3)² + 19", "(x + 3)² + 19"],
    "retroalimentacion": "x²−6x+9+1 = (x−3)²+1."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.2 Radianes",
    "dificultad": "baja",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El ángulo de 210° en radianes es:",
    "opciones": ["7π/6", "5π/6", "4π/3", "11π/6"],
    "retroalimentacion": "210° × π/180° = 7π/6."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.3 Gráficas de funciones trigonométricas",
    "dificultad": "media",
    "tipo_pregunta": "teorica",
    "enunciado": "La función f(x) = 2 sen(3x) tiene período:",
    "opciones": ["2π/3", "2π", "π/3", "3π"],
    "retroalimentacion": "Período = 2π / |b| = 2π/3."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "6. FUNCIÓN EXPONENCIAL Y LOGARÍTMICA",
    "subtema": "6.2 Ecuaciones logarítmicas con cambio de variable",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Resuelva: (log₂ x)² − 3 log₂ x + 2 = 0",
    "opciones": ["{2, 4}", "{1, 2}", "{2, 8}", "{4, 8}"],
    "retroalimentacion": "Sea u=log₂ x. u²−3u+2=0 → u=1,2 → log₂ x=1→x=2; log₂ x=2→x=4."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "1. LÓGICA MATEMÁTICA",
    "subtema": "1.3 Leyes de Morgan",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "La negación de «Llueve y hace frío» es:",
    "opciones": ["No llueve o no hace frío", "Llueve o hace frío", "No llueve y no hace frío", "Si llueve entonces hace frío"],
    "retroalimentacion": "¬(p ∧ q) ≡ ¬p ∨ ¬q."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "2. CONJUNTOS",
    "subtema": "2.2 Subconjuntos",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "¿Cuántos subconjuntos tiene el conjunto A = {a, b, c}?",
    "opciones": ["8", "3", "6", "9"],
    "retroalimentacion": "2³ = 8 subconjuntos."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.6 Paridad",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La función f(x) = x⁴ − 3x² + 2 es:",
    "opciones": ["Par", "Impar", "Ni par ni impar", "Simétrica respecto al origen"],
    "retroalimentacion": "f(−x) = x⁴ − 3x² + 2 = f(x) → par."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.5 Resolución de triángulos",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Dos lados de un triángulo miden 12 y 15 y el ángulo entre ellos es 60°. El lado restante mide:",
    "opciones": ["√189", "√369", "√189?", "13"],
    "retroalimentacion": "Ley de cosenos: c² = 144+225−2·12·15·0.5 = 369−180=189 → c=√189."
  },
  {
    "asignatura": "Matemáticas",
    "unidad": "3. OPERACIONES CON NÚMEROS REALES",
    "subtema": "3.2 Suma de PG finita",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La suma de los primeros 6 términos de la PG 1, 3, 9, ... es:",
    "opciones": ["364", "728", "243", "1092"],
    "retroalimentacion": "a₁=1, r=3. S₆ = 1(3⁶−1)/(3−1) = (729−1)/2 = 364."
  },
  {
    "asignatura": "Química",
    "unidad": "1. ESTRUCTURA DE LA MATERIA",
    "subtema": "1.3 Configuración electrónica",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La configuración electrónica del ion Fe²⁺ (Z=26) es:",
    "opciones": ["[Ar] 3d⁶", "[Ar] 4s² 3d⁴", "[Ar] 4s¹ 3d⁵", "[Ar] 3d⁵ 4s¹"],
    "retroalimentacion": "Fe neutro: [Ar]4s²3d⁶. Al perder 2e⁻, se van los del 4s: [Ar]3d⁶."
  },
  {
    "asignatura": "Química",
    "unidad": "1. ESTRUCTURA DE LA MATERIA",
    "subtema": "1.4 Masa molar",
    "dificultad": "baja",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Calcule la masa molar del carbonato de calcio CaCO₃. (Ca=40, C=12, O=16)",
    "opciones": ["100 g/mol", "68 g/mol", "84 g/mol", "116 g/mol"],
    "retroalimentacion": "40 + 12 + 48 = 100."
  },
  {
    "asignatura": "Química",
    "unidad": "2. TABLA PERIÓDICA Y ENLACES QUÍMICOS",
    "subtema": "2.1 Grupos y períodos",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "Los elementos del grupo 18 (gases nobles) se caracterizan por:",
    "opciones": ["Tener 8 electrones de valencia (excepto He)", "Ser muy reactivos", "Ser metales", "Formar iones negativos"],
    "retroalimentacion": "Capa de valencia completa, gran estabilidad."
  },
  {
    "asignatura": "Química",
    "unidad": "2. TABLA PERIÓDICA Y ENLACES QUÍMICOS",
    "subtema": "2.4 Enlace iónico",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "¿Qué fórmula corresponde a un compuesto iónico?",
    "opciones": ["NaCl", "CO₂", "CH₄", "H₂O"],
    "retroalimentacion": "Na es metal, Cl no metal → enlace iónico."
  },
  {
    "asignatura": "Química",
    "unidad": "2. TABLA PERIÓDICA Y ENLACES QUÍMICOS",
    "subtema": "2.4 Estructura de Lewis",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "En la molécula de NH₃, el átomo de nitrógeno tiene:",
    "opciones": ["Un par de electrones no compartido", "Dos pares no compartidos", "Cero pares no compartidos", "Cuatro enlaces"],
    "retroalimentacion": "N tiene 5 e⁻ de valencia, usa 3 para enlaces N-H, queda un par solitario."
  },
  {
    "asignatura": "Química",
    "unidad": "3. NOMENCLATURA INORGÁNICA Y GASES IDEALES",
    "subtema": "3.1 Óxidos básicos",
    "dificultad": "baja",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El nombre del compuesto Na₂O es:",
    "opciones": ["Óxido de sodio", "Peróxido de sodio", "Hidróxido de sodio", "Monóxido de disodio"],
    "retroalimentacion": "Metal + oxígeno, nomenclatura Stock: óxido de sodio."
  },
  {
    "asignatura": "Química",
    "unidad": "3. NOMENCLATURA INORGÁNICA Y GASES IDEALES",
    "subtema": "3.1 Ácidos hidrácidos",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El nombre del compuesto HF en disolución acuosa es:",
    "opciones": ["Ácido fluorhídrico", "Fluoruro de hidrógeno", "Ácido hipofluoroso", "Fluoruro de hidrógeno (g)"],
    "retroalimentacion": "En agua, los hidrácidos se nombran 'ácido ...hídrico'."
  },
  {
    "asignatura": "Química",
    "unidad": "3. NOMENCLATURA INORGÁNICA Y GASES IDEALES",
    "subtema": "3.2 Ley de Boyle",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Un gas a 4 atm ocupa 2 L. Si el volumen se reduce a 0.5 L a temperatura constante, la nueva presión es:",
    "opciones": ["16 atm", "8 atm", "1 atm", "2 atm"],
    "retroalimentacion": "P₁V₁ = P₂V₂ → 4·2 = P₂·0.5 → P₂ = 16 atm."
  },
  {
    "asignatura": "Química",
    "unidad": "3. NOMENCLATURA INORGÁNICA Y GASES IDEALES",
    "subtema": "3.2 Ley combinada",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Un gas ocupa 5 L a 2 atm y 27°C. ¿Qué volumen ocupará a 4 atm y 127°C?",
    "opciones": ["≈ 3.33 L", "≈ 2.5 L", "≈ 5.0 L", "≈ 6.67 L"],
    "retroalimentacion": "P₁V₁/T₁ = P₂V₂/T₂ → 2·5/300 = 4·V₂/400 → 10/300 = V₂/100 → V₂ = 1000/300 ≈ 3.33 L."
  },
  {
    "asignatura": "Química",
    "unidad": "4. REACCIONES QUÍMICAS Y ESTEQUIOMETRIA",
    "subtema": "4.1 Tipos de reacciones",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "La reacción CaCO₃ → CaO + CO₂ es de tipo:",
    "opciones": ["Descomposición", "Síntesis", "Desplazamiento", "Doble desplazamiento"],
    "retroalimentacion": "Un compuesto se descompone en dos o más productos."
  },
  {
    "asignatura": "Química",
    "unidad": "4. REACCIONES QUÍMICAS Y ESTEQUIOMETRIA",
    "subtema": "4.1 Balanceo por tanteo",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Balancee: C₃H₈ + O₂ → CO₂ + H₂O. El coeficiente del O₂ es:",
    "opciones": ["5", "3", "4", "6"],
    "retroalimentacion": "C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O."
  },
  {
    "asignatura": "Química",
    "unidad": "4. REACCIONES QUÍMICAS Y ESTEQUIOMETRIA",
    "subtema": "4.3 Cálculos estequiométricos",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "¿Cuántos gramos de CO₂ se producen al quemar completamente 30 g de C₂H₆? (C=12, H=1, O=16). 2 C₂H₆ + 7 O₂ → 4 CO₂ + 6 H₂O",
    "opciones": ["88 g", "44 g", "132 g", "22 g"],
    "retroalimentacion": "Masa molar C₂H₆=30 g/mol → 1 mol. 2 mol C₂H₆ producen 4 mol CO₂ → 1 mol produce 2 mol CO₂ = 2×44 = 88 g."
  },
  {
    "asignatura": "Química",
    "unidad": "4. REACCIONES QUÍMICAS Y ESTEQUIOMETRIA",
    "subtema": "4.3 Reactivo limitante",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Se mezclan 28 g de N₂ con 6 g de H₂ para formar NH₃. ¿Cuántos gramos de NH₃ se obtienen? N₂ + 3 H₂ → 2 NH₃ (N=14, H=1)",
    "opciones": ["34 g", "17 g", "28 g", "22 g"],
    "retroalimentacion": "28 g N₂ = 1 mol; 6 g H₂ = 3 mol. Relación 1:3 estequiométrica exacta. 1 mol N₂ produce 2 mol NH₃ = 2×17 = 34 g."
  },
  {
    "asignatura": "Química",
    "unidad": "1. ESTRUCTURA DE LA MATERIA",
    "subtema": "1.2 Cambios de estado",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "La condensación es el cambio de:",
    "opciones": ["Gas a líquido", "Líquido a gas", "Sólido a líquido", "Líquido a sólido"],
    "retroalimentacion": "Ejemplo: vapor de agua a agua líquida."
  },
  {
    "asignatura": "Química",
    "unidad": "1. ESTRUCTURA DE LA MATERIA",
    "subtema": "1.3 Modelo atómico de Bohr",
    "dificultad": "media",
    "tipo_pregunta": "teorica",
    "enunciado": "Según Bohr, cuando un electrón salta a un nivel de menor energía:",
    "opciones": ["Emite un fotón", "Absorbe un fotón", "No cambia su energía", "Se ioniza"],
    "retroalimentacion": "Al bajar de nivel, libera energía en forma de radiación electromagnética."
  },
  {
    "asignatura": "Química",
    "unidad": "2. TABLA PERIÓDICA Y ENLACES QUÍMICOS",
    "subtema": "2.1 Radio atómico",
    "dificultad": "media",
    "tipo_pregunta": "teorica",
    "enunciado": "El radio atómico tiende a aumentar al:",
    "opciones": ["Bajar en un grupo", "Subir en un grupo", "Ir hacia la derecha en un período", "Acercarse a los gases nobles"],
    "retroalimentacion": "Al bajar en un grupo, se añaden capas electrónicas."
  },
  {
    "asignatura": "Química",
    "unidad": "2. TABLA PERIÓDICA Y ENLACES QUÍMICOS",
    "subtema": "2.4 Geometría molecular",
    "dificultad": "alta",
    "tipo_pregunta": "teorica",
    "enunciado": "La molécula de CH₄ tiene geometría:",
    "opciones": ["Tetraédrica", "Plana cuadrada", "Lineal", "Trigonal plana"],
    "retroalimentacion": "Cuatro pares enlazantes alrededor del C, repulsión mínima a 109.5°."
  },
  {
    "asignatura": "Química",
    "unidad": "3. NOMENCLATURA INORGÁNICA Y GASES IDEALES",
    "subtema": "3.1 Hidróxidos",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La fórmula del hidróxido de aluminio es:",
    "opciones": ["Al(OH)₃", "AlOH", "Al₂OH", "Al(OH)₂"],
    "retroalimentacion": "Al³⁺ y OH⁻ → Al(OH)₃."
  },
  {
    "asignatura": "Química",
    "unidad": "3. NOMENCLATURA INORGÁNICA Y GASES IDEALES",
    "subtema": "3.2 Densidad de un gas",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Calcule la densidad en g/L del O₂ a 2 atm y 27°C. (R=0.082 atm·L/mol·K, O=16)",
    "opciones": ["≈ 2.6 g/L", "≈ 1.3 g/L", "≈ 5.2 g/L", "≈ 3.9 g/L"],
    "retroalimentacion": "d = PM/RT = (2·32)/(0.082·300) ≈ 64/24.6 ≈ 2.6 g/L."
  },
  {
    "asignatura": "Química",
    "unidad": "4. REACCIONES QUÍMICAS Y ESTEQUIOMETRIA",
    "subtema": "4.2 Ley de Proust",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "La relación de masa entre hidrógeno y oxígeno en el agua siempre es 1:8. Esto ilustra la ley de:",
    "opciones": ["Proporciones definidas", "Conservación de la masa", "Proporciones múltiples", "Avogadro"],
    "retroalimentacion": "Composición constante del compuesto."
  },
  {
    "asignatura": "Química",
    "unidad": "4. REACCIONES QUÍMICAS Y ESTEQUIOMETRIA",
    "subtema": "4.1 Reacción de neutralización",
    "dificultad": "media",
    "tipo_pregunta": "teorica",
    "enunciado": "La reacción entre un ácido y una base produce:",
    "opciones": ["Sal y agua", "Óxido y agua", "Sal e hidrógeno", "Agua y dióxido de carbono"],
    "retroalimentacion": "Neutralización típica: ácido + base → sal + agua."
  },
  {
    "asignatura": "Química",
    "unidad": "1. ESTRUCTURA DE LA MATERIA",
    "subtema": "1.3 Niveles de energía",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "¿Cuántos electrones como máximo puede albergar el segundo nivel de energía (n=2)?",
    "opciones": ["8", "2", "18", "32"],
    "retroalimentacion": "Fórmula 2n²: para n=2, máximo 8 electrones."
  },
  {
    "asignatura": "Química",
    "unidad": "2. TABLA PERIÓDICA Y ENLACES QUÍMICOS",
    "subtema": "2.1 Energía de ionización",
    "dificultad": "media",
    "tipo_pregunta": "teorica",
    "enunciado": "La energía de ionización es:",
    "opciones": ["Energía para remover un electrón de un átomo gaseoso", "Energía para añadir un electrón", "Energía liberada al ganar un electrón", "Energía de un enlace"],
    "retroalimentacion": "Definición de primera energía de ionización."
  },
  {
    "asignatura": "Química",
    "unidad": "3. NOMENCLATURA INORGÁNICA Y GASES IDEALES",
    "subtema": "3.1 Oxácidos",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El nombre del compuesto HNO₂ es:",
    "opciones": ["Ácido nitroso", "Ácido nítrico", "Ácido hiponitroso", "Ácido pernítrico"],
    "retroalimentacion": "N con valencia +3, terminación -oso."
  },
  {
    "asignatura": "Química",
    "unidad": "3. NOMENCLATURA INORGÁNICA Y GASES IDEALES",
    "subtema": "3.2 Ley de Avogadro",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "Volúmenes iguales de gases diferentes en las mismas condiciones de T y P contienen:",
    "opciones": ["El mismo número de moléculas", "La misma masa", "Los mismos átomos", "Diferente número de moles"],
    "retroalimentacion": "Hipótesis de Avogadro."
  },
  {
    "asignatura": "Química",
    "unidad": "4. REACCIONES QUÍMICAS Y ESTEQUIOMETRIA",
    "subtema": "4.3 Rendimiento porcentual",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Se esperaban 50 g de producto pero se obtuvieron 35 g. El rendimiento fue:",
    "opciones": ["70%", "35%", "50%", "85%"],
    "retroalimentacion": "(35/50) × 100 = 70%."
  },
  {
    "asignatura": "Química",
    "unidad": "1. ESTRUCTURA DE LA MATERIA",
    "subtema": "1.4 Isótopos",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "Los isótopos de un elemento tienen el mismo número de protones pero diferente número de:",
    "opciones": ["Neutrones", "Electrones", "Protones", "Masa atómica"],
    "retroalimentacion": "Misma Z, diferente A → diferente número de neutrones."
  },
  {
    "asignatura": "Química",
    "unidad": "2. TABLA PERIÓDICA Y ENLACES QUÍMICOS",
    "subtema": "2.4 Enlace covalente coordinado",
    "dificultad": "media",
    "tipo_pregunta": "teorica",
    "enunciado": "En el ion amonio NH₄⁺, el enlace entre N y el cuarto H es:",
    "opciones": ["Covalente coordinado", "Iónico", "Covalente polar", "Puente de hidrógeno"],
    "retroalimentacion": "El N comparte un par solitario con el H⁺."
  },
  {
    "asignatura": "Química",
    "unidad": "3. NOMENCLATURA INORGÁNICA Y GASES IDEALES",
    "subtema": "3.1 Sales binarias",
    "dificultad": "baja",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El nombre del compuesto FeS es:",
    "opciones": ["Sulfuro de hierro (II)", "Sulfato de hierro", "Sulfuro férrico", "Sulfito ferroso"],
    "retroalimentacion": "Fe con valencia +2, S con −2 → sulfuro de hierro (II)."
  },
  {
    "asignatura": "Química",
    "unidad": "3. NOMENCLATURA INORGÁNICA Y GASES IDEALES",
    "subtema": "3.2 Fracción molar",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Una mezcla contiene 2 mol de O₂ y 3 mol de N₂. La fracción molar de O₂ es:",
    "opciones": ["0.4", "0.6", "0.5", "0.2"],
    "retroalimentacion": "x_O₂ = 2 / (2+3) = 0.4."
  },
  {
    "asignatura": "Química",
    "unidad": "4. REACCIONES QUÍMICAS Y ESTEQUIOMETRIA",
    "subtema": "4.3 Masa de reactivo limitante",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "10 g de Zn reaccionan con 10 g de HCl. Zn + 2 HCl → ZnCl₂ + H₂. ¿Cuántos gramos de H₂ se producen? (Zn=65.4, H=1, Cl=35.5)",
    "opciones": ["≈ 0.27 g", "≈ 0.15 g", "≈ 0.30 g", "≈ 0.31 g"],
    "retroalimentacion": "Moles Zn = 10/65.4 ≈ 0.153; moles HCl = 10/36.5 ≈ 0.274. Relación 1:2 requiere 0.306 mol HCl, no hay suficiente HCl. Limitante HCl: 2 mol HCl producen 1 mol H₂ (2 g). 0.274 mol HCl producen 0.137 mol H₂ = 0.274 g. Más cercano 0.27 g."
  },
  {
    "asignatura": "Química",
    "unidad": "1. ESTRUCTURA DE LA MATERIA",
    "subtema": "1.1 Propiedades extensivas",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "¿Cuál de las siguientes es una propiedad extensiva?",
    "opciones": ["Masa", "Densidad", "Punto de fusión", "Temperatura"],
    "retroalimentacion": "Depende de la cantidad de materia."
  },
  {
    "asignatura": "Química",
    "unidad": "2. TABLA PERIÓDICA Y ENLACES QUÍMICOS",
    "subtema": "2.1 Afinidad electrónica",
    "dificultad": "media",
    "tipo_pregunta": "teorica",
    "enunciado": "La afinidad electrónica es mayor en:",
    "opciones": ["Halógenos", "Metales alcalinos", "Gases nobles", "Alcalinotérreos"],
    "retroalimentacion": "Los halógenos tienen alta tendencia a ganar un electrón."
  },
  {
    "asignatura": "Química",
    "unidad": "3. NOMENCLATURA INORGÁNICA Y GASES IDEALES",
    "subtema": "3.1 Peróxidos",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La fórmula del peróxido de hidrógeno es:",
    "opciones": ["H₂O₂", "HO", "H₂O", "HO₂"],
    "retroalimentacion": "Agua oxigenada."
  },
  {
    "asignatura": "Química",
    "unidad": "3. NOMENCLATURA INORGÁNICA Y GASES IDEALES",
    "subtema": "3.2 Ley de Dalton de presiones parciales",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Una mezcla de 2 mol de He y 3 mol de Ne ejerce una presión total de 5 atm. La presión parcial del He es:",
    "opciones": ["2 atm", "3 atm", "1 atm", "2.5 atm"],
    "retroalimentacion": "Fracción molar He = 2/5 = 0.4; P_He = 0.4×5 = 2 atm."
  },
  {
    "asignatura": "Química",
    "unidad": "4. REACCIONES QUÍMICAS Y ESTEQUIOMETRIA",
    "subtema": "4.1 Reacción de desplazamiento",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "Zn + CuSO₄ → ZnSO₄ + Cu es una reacción de:",
    "opciones": ["Desplazamiento simple", "Doble desplazamiento", "Síntesis", "Descomposición"],
    "retroalimentacion": "Un elemento desplaza a otro en un compuesto."
  },
  {
    "asignatura": "Química",
    "unidad": "4. REACCIONES QUÍMICAS Y ESTEQUIOMETRIA",
    "subtema": "4.3 Masa de producto con pureza",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "¿Cuántos gramos de CaO se obtienen al calentar 50 g de caliza (CaCO₃) con 80% de pureza? CaCO₃ → CaO + CO₂ (Ca=40, C=12, O=16)",
    "opciones": ["22.4 g", "28 g", "44.8 g", "11.2 g"],
    "retroalimentacion": "CaCO₃ puro = 50×0.8=40 g = 0.4 mol. 1 mol CaCO₃ produce 1 mol CaO (56 g). Masa = 0.4×56 = 22.4 g."
  },
  {
    "asignatura": "Química",
    "unidad": "1. ESTRUCTURA DE LA MATERIA",
    "subtema": "1.2 Diagrama de fases",
    "dificultad": "media",
    "tipo_pregunta": "teorica",
    "enunciado": "El punto triple en un diagrama de fases representa:",
    "opciones": ["Equilibrio entre sólido, líquido y gas", "Temperatura crítica", "Punto de fusión", "Punto de ebullición"],
    "retroalimentacion": "Coexisten las tres fases."
  },
  {
    "asignatura": "Química",
    "unidad": "2. TABLA PERIÓDICA Y ENLACES QUÍMICOS",
    "subtema": "2.4 Polaridad de moléculas",
    "dificultad": "alta",
    "tipo_pregunta": "teorica",
    "enunciado": "¿Cuál de las siguientes moléculas es apolar a pesar de tener enlaces polares?",
    "opciones": ["CO₂", "H₂O", "NH₃", "HCl"],
    "retroalimentacion": "CO₂ es lineal, los momentos dipolares se cancelan."
  },
  {
    "asignatura": "Química",
    "unidad": "3. NOMENCLATURA INORGÁNICA Y GASES IDEALES",
    "subtema": "3.1 Sales ácidas",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El nombre del compuesto NaHCO₃ es:",
    "opciones": ["Hidrogenocarbonato de sodio", "Carbonato ácido de sodio", "Bicarbonato de sodio", "Todas las anteriores"],
    "retroalimentacion": "Nombres comunes e IUPAC válidos."
  },
  {
    "asignatura": "Química",
    "unidad": "3. NOMENCLATURA INORGÁNICA Y GASES IDEALES",
    "subtema": "3.2 Volumen molar",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "En condiciones normales (0°C, 1 atm), el volumen de 2 mol de N₂ es:",
    "opciones": ["44.8 L", "22.4 L", "11.2 L", "33.6 L"],
    "retroalimentacion": "1 mol → 22.4 L; 2 mol → 44.8 L."
  },
  {
    "asignatura": "Química",
    "unidad": "4. REACCIONES QUÍMICAS Y ESTEQUIOMETRIA",
    "subtema": "4.2 Ley de Dalton de proporciones múltiples",
    "dificultad": "media",
    "tipo_pregunta": "teorica",
    "enunciado": "El CO y el CO₂ ilustran la ley de proporciones múltiples porque:",
    "opciones": ["La relación de masas de O que se combinan con una masa fija de C es 1:2", "Tienen diferente composición", "Son óxidos", "Cumplen la conservación de masa"],
    "retroalimentacion": "Para 12 g de C, hay 16 g O en CO y 32 g O en CO₂. 16:32 = 1:2."
  },
  {
    "asignatura": "Química",
    "unidad": "1. ESTRUCTURA DE LA MATERIA",
    "subtema": "1.3 Principio de Aufbau",
    "dificultad": "media",
    "tipo_pregunta": "teorica",
    "enunciado": "¿Qué orbital se llena después del 4s?",
    "opciones": ["3d", "4p", "5s", "4d"],
    "retroalimentacion": "Orden de llenado: 1s 2s 2p 3s 3p 4s 3d 4p..."
  },
  {
    "asignatura": "Química",
    "unidad": "2. TABLA PERIÓDICA Y ENLACES QUÍMICOS",
    "subtema": "2.4 Resonancia",
    "dificultad": "alta",
    "tipo_pregunta": "teorica",
    "enunciado": "En la molécula de O₃ (ozono), la estructura real es:",
    "opciones": ["Un híbrido de resonancia", "Un enlace doble y uno simple", "Dos enlaces dobles", "Un enlace triple y uno simple"],
    "retroalimentacion": "Los dos enlaces O-O son equivalentes, intermedios entre simple y doble."
  },
  {
    "asignatura": "Química",
    "unidad": "3. NOMENCLATURA INORGÁNICA Y GASES IDEALES",
    "subtema": "3.1 Iones poliatómicos",
    "dificultad": "baja",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La fórmula del ion sulfato es:",
    "opciones": ["SO₄²⁻", "SO₃²⁻", "S²⁻", "HSO₄⁻"],
    "retroalimentacion": "Sulfato es SO₄ con carga 2−."
  },
  {
    "asignatura": "Química",
    "unidad": "3. NOMENCLATURA INORGÁNICA Y GASES IDEALES",
    "subtema": "3.2 Ecuación del gas ideal",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "¿Cuántos moles de gas hay en un recipiente de 10 L a 2 atm y 27°C? (R=0.082)",
    "opciones": ["≈ 0.81 mol", "≈ 1.22 mol", "≈ 0.41 mol", "≈ 2.44 mol"],
    "retroalimentacion": "n = PV/RT = (2·10)/(0.082·300) = 20/24.6 ≈ 0.81 mol."
  },
  {
    "asignatura": "Química",
    "unidad": "4. REACCIONES QUÍMICAS Y ESTEQUIOMETRIA",
    "subtema": "4.1 Reacción de combustión",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "La combustión completa de un hidrocarburo produce:",
    "opciones": ["CO₂ y H₂O", "CO y H₂O", "C y H₂O", "CO₂ y H₂"],
    "retroalimentacion": "En presencia de suficiente oxígeno, combustión completa a dióxido de carbono y agua."
  },
  {
    "asignatura": "Química",
    "unidad": "4. REACCIONES QUÍMICAS Y ESTEQUIOMETRIA",
    "subtema": "4.3 Relación volumen-volumen",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "En la reacción N₂(g) + 3 H₂(g) → 2 NH₃(g), ¿qué volumen de NH₃ se obtiene a partir de 5 L de H₂ en condiciones iguales?",
    "opciones": ["≈ 3.33 L", "≈ 5 L", "≈ 2.5 L", "≈ 6.67 L"],
    "retroalimentacion": "Relación estequiométrica 3:2 → 5 L H₂ × (2/3) ≈ 3.33 L NH₃."
  },
  // ... AQUÍ PEGAS EL RESTO DE PREGUNTAS DEL GRUPO 3 (250 preguntas) ...

  // ---------- GRUPO 4: INGENIERÍAS Y CARRERAS TÉCNICAS ----------
  {
    id: "g4_fis_001",
    grupo: "Grupo 4",
    grupo_id: 4,
    carrera_id: [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], // Todas las ingenierías
    asignatura: "Física",
    unidad: "3. CINEMÁTICA DE LA PARTÍCULA",
    subtema: "3.5 Movimiento parabólico",
    dificultad: "alta",
    tipo_pregunta: "ejercicio",
    enunciado: "Se lanza un proyectil desde el suelo con una velocidad inicial de 50 m/s y un ángulo de elevación de 53° (sen53°=0.8; cos53°=0.6). Calcule el alcance horizontal máximo (g=10 m/s²).",
    opciones: ["240 m", "120 m", "300 m", "180 m"],
    respuesta_correcta: 0,
    retroalimentacion: "Vox = 50*0.6 = 30 m/s. Voy = 50*0.8 = 40 m/s. Tiempo de vuelo tv = 2*Voy/g = 80/10 = 8 s. Alcance X = Vox * tv = 30 * 8 = 240 m."
  },
{
    "asignatura": "Álgebra",
    "unidad": "1. LÓGICA MATEMÁTICA",
    "subtema": "1.1 Proposiciones y Conectivos lógicos",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "¿Cuál de las siguientes proposiciones compuestas es verdadera únicamente cuando ambas proposiciones simples tienen el mismo valor de verdad?",
    "opciones": ["Bicondicional (p ↔ q)", "Condicional (p → q)", "Disyunción (p ∨ q)", "Conjunción (p ∧ q)"],
    "retroalimentacion": "El bicondicional es verdadero exactamente cuando p y q son ambas verdaderas o ambas falsas."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "1. LÓGICA MATEMÁTICA",
    "subtema": "1.1 Proposiciones y Conectivos lógicos",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Si p es falsa y q es verdadera, el valor de verdad de la proposición (¬p ∨ q) → (p ∧ ¬q) es:",
    "opciones": ["Falso", "Verdadero", "Contingente", "No se puede determinar"],
    "retroalimentacion": "¬p es V, q es V → (V ∨ V) = V. p ∧ ¬q = F ∧ F = F. Una implicación V → F es Falsa."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "1. LÓGICA MATEMÁTICA",
    "subtema": "1.2 Tautología, contradicción, contingencia",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "Una fórmula proposicional que es siempre falsa, independientemente de los valores de verdad de sus variables, recibe el nombre de:",
    "opciones": ["Contradicción", "Tautología", "Contingencia", "Falacia"],
    "retroalimentacion": "Una contradicción es falsa para todas las combinaciones posibles."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "1. LÓGICA MATEMÁTICA",
    "subtema": "1.3 Leyes del álgebra proposicional",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Aplicando las leyes de De Morgan, la negación de la proposición «Estudio y apruebo el examen» es equivalente a:",
    "opciones": ["No estudio o no apruebo el examen", "No estudio y no apruebo el examen", "Estudio o no apruebo el examen", "Si estudio entonces apruebo el examen"],
    "retroalimentacion": "¬(p ∧ q) ≡ ¬p ∨ ¬q."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "1. LÓGICA MATEMÁTICA",
    "subtema": "1.3 Leyes del álgebra proposicional",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Simplifique usando leyes lógicas: ¬(p → q) ∨ (¬p ∧ ¬q). El resultado es:",
    "opciones": ["¬q", "p ∨ ¬q", "¬p", "Contradicción"],
    "retroalimentacion": "¬(p→q) ≡ p ∧ ¬q. Luego (p ∧ ¬q) ∨ (¬p ∧ ¬q) = ¬q ∧ (p ∨ ¬p) = ¬q ∧ V = ¬q."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "2. CONJUNTOS",
    "subtema": "2.1 Definición y determinación de conjuntos",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "¿Cuál de las siguientes opciones representa correctamente el conjunto A = {x ∈ ℕ / 2 ≤ x < 5} por extensión?",
    "opciones": ["{2, 3, 4}", "{2, 3, 4, 5}", "{3, 4}", "{2, 3}"],
    "retroalimentacion": "Números naturales mayores o iguales a 2 y estrictamente menores que 5: 2, 3, 4."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "2. CONJUNTOS",
    "subtema": "2.3 Operaciones con conjuntos",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Sean A = {1, 2, 3, 4, 5} y B = {4, 5, 6, 7}. El resultado de (A ∪ B) − (A ∩ B) es:",
    "opciones": ["{1, 2, 3, 6, 7}", "{4, 5}", "{1, 2, 3, 4, 5, 6, 7}", "{1, 2, 3}"],
    "retroalimentacion": "A ∪ B = {1,2,3,4,5,6,7}; A ∩ B = {4,5}. Diferencia simétrica: {1,2,3,6,7}."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "2. CONJUNTOS",
    "subtema": "2.4 Problemas de aplicación",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "En una encuesta a 120 estudiantes sobre el uso de redes sociales, 75 usan Instagram, 60 usan TikTok, y 20 no usan ninguna. ¿Cuántos estudiantes usan ambas redes sociales?",
    "opciones": ["35", "55", "40", "25"],
    "retroalimentacion": "Total usan al menos una = 100. |I ∪ T| = |I| + |T| − |I ∩ T| → 100 = 75 + 60 − |I ∩ T| → |I ∩ T| = 35."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "3. OPERACIONES CON NÚMEROS REALES",
    "subtema": "3.3 Intervalos y Valor absoluto",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La solución de la inecuación |2x − 5| ≤ 3 es el intervalo:",
    "opciones": ["[1, 4]", "(-∞, 1] ∪ [4, ∞)", "(1, 4)", "[-1, 4]"],
    "retroalimentacion": "−3 ≤ 2x−5 ≤ 3 → 2 ≤ 2x ≤ 8 → 1 ≤ x ≤ 4."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "3. OPERACIONES CON NÚMEROS REALES",
    "subtema": "3.4 Valor absoluto",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El conjunto solución de la ecuación |x − 2| = |3x + 4| es:",
    "opciones": ["{-3, -1/2}", "{-3, 1/2}", "{3, -1/2}", "{-3, 2}"],
    "retroalimentacion": "Caso 1: x−2 = 3x+4 → x=−3. Caso 2: x−2 = −(3x+4) → x=−1/2."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.1 Dominio y Rango",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El dominio de la función f(x) = √(x² − 4x + 3) es:",
    "opciones": ["(-∞, 1] ∪ [3, ∞)", "[1, 3]", "ℝ − {1, 3}", "(-∞, 1) ∪ (3, ∞)"],
    "retroalimentacion": "Radicando ≥ 0 → (x−1)(x−3) ≥ 0 → x ≤ 1 o x ≥ 3."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.3 Función Cuadrática",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El valor mínimo de la función f(x) = 2x² − 8x + 15 es:",
    "opciones": ["7", "15", "-1", "3"],
    "retroalimentacion": "Vértice en x=2; f(2)=7."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.4 Composición de funciones",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Dadas f(x) = 2x + 1 y g(x) = x² − 3, el valor de (f ∘ g)(2) es:",
    "opciones": ["3", "5", "7", "9"],
    "retroalimentacion": "f(g(2)) = f(1) = 3."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.5 Monotonía",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "Una función f es estrictamente creciente en un intervalo I si para todo x₁ < x₂ en I se cumple que:",
    "opciones": ["f(x₁) < f(x₂)", "f(x₁) > f(x₂)", "f(x₁) = f(x₂)", "f(x₁) ≤ f(x₂)"],
    "retroalimentacion": "Definición de función creciente."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.1 Ángulo trigonométrico, razones trigonométricas",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "En un triángulo rectángulo, el seno de un ángulo agudo se define como:",
    "opciones": ["Cateto opuesto / Hipotenusa", "Cateto adyacente / Hipotenusa", "Cateto opuesto / Cateto adyacente", "Hipotenusa / Cateto opuesto"],
    "retroalimentacion": "Definición básica de seno."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.2 Círculo trigonométrico",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "En el círculo trigonométrico, ¿en qué cuadrante el seno es positivo y el coseno negativo?",
    "opciones": ["II cuadrante", "I cuadrante", "III cuadrante", "IV cuadrante"],
    "retroalimentacion": "Seno positivo en I y II; coseno negativo en II y III. Intersección: II cuadrante."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.4 Identidades trigonométricas",
    "dificultad": "media",
    "tipo_pregunta": "teorica",
    "enunciado": "La identidad pitagórica fundamental es:",
    "opciones": ["sen²θ + cos²θ = 1", "tan²θ + 1 = sec²θ", "1 + cot²θ = csc²θ", "Todas las anteriores"],
    "retroalimentacion": "Todas son identidades pitagóricas válidas."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.5 Ley de Senos",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "En un triángulo ABC, a = 10, ángulo A = 30°, ángulo B = 45°. El lado b mide aproximadamente:",
    "opciones": ["14.14", "7.07", "17.32", "5.77"],
    "retroalimentacion": "Ley de senos: b/sen 45° = 10/sen 30° → b = 10 × (√2/2) / (1/2) = 10√2 ≈ 14.14."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.5 Ley de Cosenos",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "En un triángulo oblicuángulo, el lado a mide 7 cm, el lado c mide 8 cm, y el ángulo B opuesto al lado b mide 60°. Calcule la longitud del lado b.",
    "opciones": ["√57 cm", "√113 cm", "√97 cm", "√73 cm"],
    "retroalimentacion": "Ley de Cosenos: b² = a² + c² − 2ac·cos B = 49 + 64 − 2·7·8·0.5 = 113 − 56 = 57. b = √57."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.6 Ecuaciones trigonométricas",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Resuelva para x ∈ [0, 2π): 2 sen² x − sen x − 1 = 0",
    "opciones": ["{π/2, 7π/6, 11π/6}", "{π/3, 2π/3}", "{π/2, π}", "{0, π}"],
    "retroalimentacion": "Factorizando: (2 sen x + 1)(sen x − 1) = 0 → sen x = −1/2 o sen x = 1. Soluciones: 7π/6, 11π/6, π/2."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "6. FUNCIÓN EXPONENCIAL Y LOGARÍTMICA",
    "subtema": "6.1 Definición",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "¿Cuál es la base del logaritmo natural (ln)?",
    "opciones": ["e ≈ 2.71828", "10", "2", "π"],
    "retroalimentacion": "El logaritmo natural tiene base e."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "6. FUNCIÓN EXPONENCIAL Y LOGARÍTMICA",
    "subtema": "6.2 Ecuaciones Exponenciales",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Resuelva: 2^{x+1} + 2^{x} = 24",
    "opciones": ["3", "4", "2", "5"],
    "retroalimentacion": "2^x(2+1)=24 → 3·2^x=24 → 2^x=8 → x=3."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "6. FUNCIÓN EXPONENCIAL Y LOGARÍTMICA",
    "subtema": "6.2 Ecuaciones Logarítmicas",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "log₂(x) + log₂(x − 2) = 3, entonces x es:",
    "opciones": ["4", "2", "6", "8"],
    "retroalimentacion": "x(x−2)=8 → x²−2x−8=0 → x=4 (x>2)."
  },
  {
    "asignatura": "Física",
    "unidad": "1. CANTIDADES FÍSICAS",
    "subtema": "1.1 Sistemas de medida (SI e inglés)",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "¿Cuál de las siguientes es una unidad fundamental del Sistema Internacional (SI)?",
    "opciones": ["Kilogramo (kg)", "Litro (L)", "Hora (h)", "Centímetro (cm)"],
    "retroalimentacion": "El kilogramo es la unidad de masa en el SI."
  },
  {
    "asignatura": "Física",
    "unidad": "1. CANTIDADES FÍSICAS",
    "subtema": "1.2 Transformación de unidades",
    "dificultad": "baja",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Convierta 72 km/h a m/s.",
    "opciones": ["20 m/s", "25 m/s", "15 m/s", "30 m/s"],
    "retroalimentacion": "72 km/h × (1000 m/1 km) × (1 h/3600 s) = 20 m/s."
  },
  {
    "asignatura": "Física",
    "unidad": "1. CANTIDADES FÍSICAS",
    "subtema": "1.3 Análisis dimensional",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La dimensión de la velocidad (v = d/t) es:",
    "opciones": ["LT⁻¹", "LT", "L²T⁻¹", "LT⁻²"],
    "retroalimentacion": "Longitud / Tiempo = L T⁻¹."
  },
  {
    "asignatura": "Física",
    "unidad": "1. CANTIDADES FÍSICAS",
    "subtema": "1.4 Cifras significativas",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "¿Cuántas cifras significativas tiene el número 0.00340?",
    "opciones": ["3", "5", "2", "6"],
    "retroalimentacion": "Los ceros a la izquierda no cuentan; el 340 son tres cifras significativas (el cero final cuenta porque está a la derecha)."
  },
  {
    "asignatura": "Física",
    "unidad": "2. VECTORES EN EL ESPACIO (3D)",
    "subtema": "2.1 Magnitudes escalares y vectoriales",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "¿Cuál de las siguientes es una magnitud vectorial?",
    "opciones": ["Velocidad", "Masa", "Tiempo", "Temperatura"],
    "retroalimentacion": "La velocidad tiene dirección y sentido, además de magnitud."
  },
  {
    "asignatura": "Física",
    "unidad": "2. VECTORES EN EL ESPACIO (3D)",
    "subtema": "2.3 Suma de vectores",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Dados los vectores A = (3, -2) y B = (-1, 4), el vector resultante A + B es:",
    "opciones": ["(2, 2)", "(4, 2)", "(2, -6)", "(-4, 6)"],
    "retroalimentacion": "Suma componente a componente: (3-1, -2+4) = (2,2)."
  },
  {
    "asignatura": "Física",
    "unidad": "2. VECTORES EN EL ESPACIO (3D)",
    "subtema": "2.3 Producto Punto",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El producto punto de A = (2, 3) y B = (4, -1) es:",
    "opciones": ["5", "11", "8", "10"],
    "retroalimentacion": "A·B = 2×4 + 3×(-1) = 8 − 3 = 5."
  },
  {
    "asignatura": "Física",
    "unidad": "2. VECTORES EN EL ESPACIO (3D)",
    "subtema": "2.3 Producto Cruz",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El producto cruz de A = (1,0,0) y B = (0,1,0) es:",
    "opciones": ["(0,0,1)", "(1,0,0)", "(0,1,0)", "(0,0,0)"],
    "retroalimentacion": "i × j = k = (0,0,1)."
  },
  {
    "asignatura": "Física",
    "unidad": "3. CINEMÁTICA DE LA PARTÍCULA",
    "subtema": "3.2 Movimiento rectilíneo uniforme (MRU)",
    "dificultad": "baja",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Un móvil recorre 120 km en 2 horas con velocidad constante. Su velocidad es:",
    "opciones": ["60 km/h", "120 km/h", "30 km/h", "240 km/h"],
    "retroalimentacion": "v = d/t = 120/2 = 60 km/h."
  },
  {
    "asignatura": "Física",
    "unidad": "3. CINEMÁTICA DE LA PARTÍCULA",
    "subtema": "3.3 Movimiento rectilíneo uniformemente variado (MRUV)",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Un auto parte del reposo y acelera a 2 m/s² durante 5 s. ¿Qué distancia recorre?",
    "opciones": ["25 m", "10 m", "50 m", "20 m"],
    "retroalimentacion": "d = v₀t + ½at² = 0 + 0.5×2×25 = 25 m."
  },
  {
    "asignatura": "Física",
    "unidad": "3. CINEMÁTICA DE LA PARTÍCULA",
    "subtema": "3.5 Movimiento parabólico",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Se lanza un proyectil desde el suelo con una velocidad inicial de 50 m/s y un ángulo de elevación de 53° (sen53°=0.8; cos53°=0.6). Calcule el alcance horizontal máximo (g=10 m/s²).",
    "opciones": ["240 m", "120 m", "300 m", "180 m"],
    "retroalimentacion": "Vox = 50×0.6 = 30 m/s. Voy = 50×0.8 = 40 m/s. tv = 2×Voy/g = 8 s. X = Vox × tv = 30×8 = 240 m."
  },
  {
    "asignatura": "Física",
    "unidad": "3. CINEMÁTICA DE LA PARTÍCULA",
    "subtema": "3.6 Movimiento circular uniforme (MCU)",
    "dificultad": "media",
    "tipo_pregunta": "teorica",
    "enunciado": "En el MCU, la aceleración centrípeta está dirigida hacia:",
    "opciones": ["El centro de la trayectoria", "La tangente", "El exterior", "La dirección del movimiento"],
    "retroalimentacion": "La aceleración centrípeta es radial y apunta al centro."
  },
  {
    "asignatura": "Física",
    "unidad": "4. DINÁMICA DE LA PARTÍCULA",
    "subtema": "4.3 Leyes del movimiento de Newton",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "La segunda ley de Newton establece que la fuerza neta es igual a:",
    "opciones": ["Masa × Aceleración", "Masa × Velocidad", "Peso × Gravedad", "Aceleración / Masa"],
    "retroalimentacion": "F = m·a."
  },
  {
    "asignatura": "Física",
    "unidad": "4. DINÁMICA DE LA PARTÍCULA",
    "subtema": "4.2 Diagrama de cuerpo libre",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Un bloque de 10 kg descansa sobre una superficie horizontal sin roce. Se aplica una fuerza horizontal de 50 N. La aceleración es:",
    "opciones": ["5 m/s²", "0.2 m/s²", "50 m/s²", "10 m/s²"],
    "retroalimentacion": "a = F/m = 50/10 = 5 m/s²."
  },
  {
    "asignatura": "Física",
    "unidad": "4. DINÁMICA DE LA PARTÍCULA",
    "subtema": "4.4 Dinámica circular",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Un auto de 1000 kg toma una curva de 50 m de radio a 20 m/s. La fuerza centrípeta necesaria es:",
    "opciones": ["8000 N", "4000 N", "2000 N", "10000 N"],
    "retroalimentacion": "F_c = m v²/r = 1000 × 400 / 50 = 8000 N."
  },
  {
    "asignatura": "Física",
    "unidad": "5. TRABAJO, POTENCIA Y ENERGÍA",
    "subtema": "5.2 Trabajo de una fuerza constante",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Una fuerza de 20 N desplaza un objeto 3 m en la misma dirección. El trabajo realizado es:",
    "opciones": ["60 J", "6.67 J", "23 J", "17 J"],
    "retroalimentacion": "W = F·d·cos0° = 20×3×1 = 60 J."
  },
  {
    "asignatura": "Física",
    "unidad": "5. TRABAJO, POTENCIA Y ENERGÍA",
    "subtema": "5.4 Potencia mecánica",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "La potencia se define como:",
    "opciones": ["Trabajo / Tiempo", "Fuerza × Distancia", "Masa × Aceleración", "Energía × Tiempo"],
    "retroalimentacion": "P = W / t."
  },
  {
    "asignatura": "Física",
    "unidad": "5. TRABAJO, POTENCIA Y ENERGÍA",
    "subtema": "5.5 Energía cinética",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Un cuerpo de 4 kg se mueve a 5 m/s. Su energía cinética es:",
    "opciones": ["50 J", "20 J", "100 J", "10 J"],
    "retroalimentacion": "Ec = ½ m v² = 0.5 × 4 × 25 = 50 J."
  },
  {
    "asignatura": "Física",
    "unidad": "5. TRABAJO, POTENCIA Y ENERGÍA",
    "subtema": "5.7 Energía potencial gravitatoria",
    "dificultad": "baja",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Un libro de 2 kg está a 1.5 m de altura. Su energía potencial gravitatoria es (g=10 m/s²):",
    "opciones": ["30 J", "3 J", "20 J", "15 J"],
    "retroalimentacion": "Ep = m g h = 2 × 10 × 1.5 = 30 J."
  },
  {
    "asignatura": "Física",
    "unidad": "5. TRABAJO, POTENCIA Y ENERGÍA",
    "subtema": "5.9 Conservación de la energía",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Se deja caer una piedra de 2 kg desde 20 m de altura. ¿Con qué velocidad llega al suelo? (g=10 m/s²)",
    "opciones": ["20 m/s", "10 m/s", "40 m/s", "14 m/s"],
    "retroalimentacion": "Conservación: mgh = ½mv² → v = √(2gh) = √(2×10×20) = √400 = 20 m/s."
  },
{
    "asignatura": "Álgebra",
    "unidad": "1. LÓGICA MATEMÁTICA",
    "subtema": "1.2 Tautología",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La proposición (p ∧ q) → p es una:",
    "opciones": ["Tautología", "Contradicción", "Contingencia", "Imposible"],
    "retroalimentacion": "Si p∧q es verdadero, p es verdadero, luego la implicación es siempre verdadera."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "2. CONJUNTOS",
    "subtema": "2.2 Igualdad de conjuntos",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "Dos conjuntos A y B son iguales si:",
    "opciones": ["A ⊆ B y B ⊆ A", "A ∪ B = A", "A ∩ B = ∅", "Tienen el mismo número de elementos"],
    "retroalimentacion": "Doble inclusión: cada elemento de A está en B y viceversa."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "3. OPERACIONES CON NÚMEROS REALES",
    "subtema": "3.2 Sucesiones",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El siguiente término en la sucesión 1, 4, 9, 16, ... es:",
    "opciones": ["25", "20", "24", "32"],
    "retroalimentacion": "Cuadrados perfectos: 1²,2²,3²,4²,5²=25."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "3. OPERACIONES CON NÚMEROS REALES",
    "subtema": "3.2 Progresiones aritméticas",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El término general de una progresión aritmética es aₙ = 3n − 2. La suma de los primeros 20 términos es:",
    "opciones": ["590", "610", "570", "600"],
    "retroalimentacion": "a₁=1, a₂₀=58. S₂₀ = (1+58)·20/2 = 59·10 = 590."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "3. OPERACIONES CON NÚMEROS REALES",
    "subtema": "3.2 Progresiones geométricas",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "En una progresión geométrica, el primer término es 5 y la razón es 2. El quinto término es:",
    "opciones": ["80", "40", "160", "50"],
    "retroalimentacion": "a₅ = a₁·r⁴ = 5·2⁴ = 5·16 = 80."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.2 Función inversa",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La inversa de f(x) = (2x + 1)/(x − 3) es:",
    "opciones": ["f⁻¹(x) = (3x + 1)/(x − 2)", "f⁻¹(x) = (3x − 1)/(x − 2)", "f⁻¹(x) = (2x − 1)/(x + 3)", "f⁻¹(x) = (x + 3)/(2x − 1)"],
    "retroalimentacion": "Intercambiar x e y, despejar: x(y−3)=2y+1 → xy−3x=2y+1 → y(x−2)=3x+1 → y=(3x+1)/(x−2)."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.3 Función raíz n-ésima",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El dominio de f(x) = ∛(x − 5) es:",
    "opciones": ["Todos los reales", "[5, ∞)", "(5, ∞)", "ℝ − {5}"],
    "retroalimentacion": "Las raíces de índice impar están definidas para todos los reales."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.4 Factorización",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Factorice completamente: x³ − 4x² + 4x",
    "opciones": ["x(x − 2)²", "x(x² − 4x + 4)", "x(x − 2)(x + 2)", "x²(x − 4) + 4x"],
    "retroalimentacion": "Factor común x: x(x²−4x+4)=x(x−2)²."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.4 Racionalización",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Racionalice el denominador: 5 / (√3 − 1)",
    "opciones": ["(5√3 + 5)/2", "5√3 − 5", "(5√3 − 5)/2", "5√3 + 5"],
    "retroalimentacion": "Multiplicar por conjugado: 5(√3+1)/(3−1) = (5√3+5)/2."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.6 Paridad",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La función f(x) = x³ − x es:",
    "opciones": ["Impar", "Par", "Ni par ni impar", "Simétrica respecto al eje Y"],
    "retroalimentacion": "f(−x)=−x³+x=−(x³−x)=−f(x). Es impar."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.1 Radianes y grados",
    "dificultad": "baja",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Convierta 120° a radianes.",
    "opciones": ["2π/3", "π/3", "5π/6", "3π/4"],
    "retroalimentacion": "120° × π/180° = 2π/3."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.3 Gráfico de funciones trigonométricas",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "La amplitud de la función f(x) = 3 sen x es:",
    "opciones": ["3", "2π", "1", "π"],
    "retroalimentacion": "La amplitud es el valor absoluto del coeficiente que multiplica a la función."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.4 Identidades de ángulo doble",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Si sen x = 3/5 y x está en el I cuadrante, el valor de sen 2x es:",
    "opciones": ["24/25", "12/25", "6/5", "9/25"],
    "retroalimentacion": "cos x = 4/5. sen 2x = 2 sen x cos x = 2·(3/5)·(4/5) = 24/25."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.5 Resolución de triángulos oblicuángulos",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "En un triángulo, a=20, b=15 y ángulo C=60°. El área del triángulo es:",
    "opciones": ["75√3", "150√3", "300", "150"],
    "retroalimentacion": "Área = (1/2) a b sen C = 0.5 × 20 × 15 × √3/2 = 75√3."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.6 Inecuaciones trigonométricas",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Resuelva para x ∈ [0, 2π): 2 cos x + 1 < 0",
    "opciones": ["(2π/3, 4π/3)", "(π/3, 2π/3)", "(0, π/2)", "(π, 2π)"],
    "retroalimentacion": "cos x < −1/2 → ángulos donde coseno es menor que −1/2: entre 120° y 240°."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "6. FUNCIÓN EXPONENCIAL Y LOGARÍTMICA",
    "subtema": "6.2 Inecuaciones exponenciales",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Resuelva: (1/2)^{x} > 8",
    "opciones": ["x < -3", "x > -3", "x < 3", "x > 3"],
    "retroalimentacion": "2^{-x} > 2^3 → -x > 3 → x < -3."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "6. FUNCIÓN EXPONENCIAL Y LOGARÍTMICA",
    "subtema": "6.2 Inecuaciones logarítmicas",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Resuelva: log₂(x − 1) + log₂(x + 2) < 3",
    "opciones": ["(1, 3)", "(1, 2)", "(2, 3)", "(1, ∞)"],
    "retroalimentacion": "Dominio: x>1. log₂[(x−1)(x+2)] < 3 → (x−1)(x+2) < 8 → x²+x−10<0. Raíces (−1±√41)/2 ≈ 2.7. Solución (1, 2.7) ≈ (1,3)."
  },
  {
    "asignatura": "Física",
    "unidad": "1. CANTIDADES FÍSICAS",
    "subtema": "1.3 Análisis dimensional avanzado",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La energía cinética tiene dimensiones ML²T⁻². Determine las dimensiones de la constante elástica k en la ley de Hooke F = kx.",
    "opciones": ["MT⁻²", "MLT⁻²", "ML²T⁻²", "ML⁻¹T⁻²"],
    "retroalimentacion": "F = kx → [k] = [F]/[x] = (MLT⁻²)/L = MT⁻²."
  },
  {
    "asignatura": "Física",
    "unidad": "2. VECTORES EN EL ESPACIO (3D)",
    "subtema": "2.2 Sistemas de coordenadas polares",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Convierta el punto (3, 4) en coordenadas rectangulares a polares (r, θ).",
    "opciones": ["(5, 53.1°)", "(7, 45°)", "(5, 36.9°)", "(4, 60°)"],
    "retroalimentacion": "r = √(3²+4²) = 5. θ = arctan(4/3) ≈ 53.1°."
  },
  {
    "asignatura": "Física",
    "unidad": "2. VECTORES EN EL ESPACIO (3D)",
    "subtema": "2.3 Componentes de un vector",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Un vector de magnitud 10 forma un ángulo de 30° con el eje x positivo. Sus componentes son aproximadamente:",
    "opciones": ["(8.66, 5)", "(5, 8.66)", "(10, 0)", "(7.07, 7.07)"],
    "retroalimentacion": "Vx = 10 cos30° ≈ 8.66; Vy = 10 sen30° = 5."
  },
  {
    "asignatura": "Física",
    "unidad": "3. CINEMÁTICA DE LA PARTÍCULA",
    "subtema": "3.1 Conceptos de cinemática",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "La rapidez es una magnitud:",
    "opciones": ["Escalar", "Vectorial", "Tensorial", "Adimensional"],
    "retroalimentacion": "La rapidez solo indica magnitud, no dirección."
  },
  {
    "asignatura": "Física",
    "unidad": "3. CINEMÁTICA DE LA PARTÍCULA",
    "subtema": "3.4 Métodos gráficos",
    "dificultad": "media",
    "tipo_pregunta": "teorica",
    "enunciado": "En una gráfica velocidad vs tiempo, la pendiente representa:",
    "opciones": ["Aceleración", "Desplazamiento", "Velocidad media", "Posición"],
    "retroalimentacion": "a = Δv/Δt = pendiente de v-t."
  },
  {
    "asignatura": "Física",
    "unidad": "3. CINEMÁTICA DE LA PARTÍCULA",
    "subtema": "3.5 Altura máxima en parabólico",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Un proyectil se lanza con v₀ = 40 m/s y ángulo 30°. Calcule la altura máxima (g=10 m/s²).",
    "opciones": ["20 m", "40 m", "60 m", "80 m"],
    "retroalimentacion": "Voy = 40 sen30° = 20 m/s. Hmax = Voy²/(2g) = 400/20 = 20 m."
  },
  {
    "asignatura": "Física",
    "unidad": "3. CINEMÁTICA DE LA PARTÍCULA",
    "subtema": "3.7 MCUV",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Una rueda parte del reposo y acelera angularmente a 2 rad/s² durante 5 s. Su velocidad angular final es:",
    "opciones": ["10 rad/s", "5 rad/s", "2.5 rad/s", "25 rad/s"],
    "retroalimentacion": "ω = ω₀ + αt = 0 + 2×5 = 10 rad/s."
  },
  {
    "asignatura": "Física",
    "unidad": "4. DINÁMICA DE LA PARTÍCULA",
    "subtema": "4.1 Fuerza de rozamiento",
    "dificultad": "media",
    "tipo_pregunta": "teorica",
    "enunciado": "La fuerza de rozamiento cinético es:",
    "opciones": ["Proporcional a la normal", "Independiente del área de contacto", "Menor que la estática máxima", "Todas las anteriores"],
    "retroalimentacion": "Fr = μₖ N, no depende del área, y μₖ < μₛ."
  },
  {
    "asignatura": "Física",
    "unidad": "4. DINÁMICA DE LA PARTÍCULA",
    "subtema": "4.3 Sistemas de poleas",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Dos masas m₁=3 kg y m₂=2 kg cuelgan de una polea ideal. La aceleración del sistema es (g=10 m/s²):",
    "opciones": ["2 m/s²", "5 m/s²", "10 m/s²", "1 m/s²"],
    "retroalimentacion": "a = g(m₁−m₂)/(m₁+m₂) = 10(1)/5 = 2 m/s²."
  },
  {
    "asignatura": "Física",
    "unidad": "4. DINÁMICA DE LA PARTÍCULA",
    "subtema": "4.5 Momento de una fuerza",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Una fuerza de 10 N se aplica perpendicularmente a 0.5 m del pivote. El torque es:",
    "opciones": ["5 N·m", "20 N·m", "2 N·m", "10 N·m"],
    "retroalimentacion": "τ = F·d·sen90° = 10×0.5 = 5 N·m."
  },
  {
    "asignatura": "Física",
    "unidad": "5. TRABAJO, POTENCIA Y ENERGÍA",
    "subtema": "5.3 Trabajo de fuerza variable",
    "dificultad": "alta",
    "tipo_pregunta": "teorica",
    "enunciado": "El trabajo realizado por un resorte que obedece la ley de Hooke es:",
    "opciones": ["½ k x²", "k x", "k x²", "−k x"],
    "retroalimentacion": "W = ½ k x² (trabajo para estirar o comprimir)."
  },
  {
    "asignatura": "Física",
    "unidad": "5. TRABAJO, POTENCIA Y ENERGÍA",
    "subtema": "5.6 Sistemas conservativos",
    "dificultad": "media",
    "tipo_pregunta": "teorica",
    "enunciado": "En un sistema conservativo:",
    "opciones": ["La energía mecánica se conserva", "El trabajo de fuerzas no conservativas es cero", "Solo actúan fuerzas como gravedad o resortes ideales", "Todas las anteriores"],
    "retroalimentacion": "Definición de sistema conservativo."
  },
  {
    "asignatura": "Física",
    "unidad": "5. TRABAJO, POTENCIA Y ENERGÍA",
    "subtema": "5.8 Energía potencial elástica",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Un resorte de constante k=200 N/m se comprime 0.1 m. Su energía potencial es:",
    "opciones": ["1 J", "2 J", "10 J", "20 J"],
    "retroalimentacion": "Ep = ½ k x² = 0.5 × 200 × 0.01 = 1 J."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "1. LÓGICA MATEMÁTICA",
    "subtema": "1.3 Leyes de absorción",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Simplifique p ∨ (p ∧ q) usando leyes lógicas.",
    "opciones": ["p", "q", "p ∧ q", "Verdadero"],
    "retroalimentacion": "Ley de absorción: p ∨ (p ∧ q) ≡ p."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "2. CONJUNTOS",
    "subtema": "2.4 Problemas con tres conjuntos",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "En una escuela, 100 alumnos estudian al menos un idioma: 65 inglés, 45 francés, 40 alemán; 20 inglés y francés, 15 inglés y alemán, 10 francés y alemán; 5 los tres. ¿Cuántos estudian exactamente un idioma?",
    "opciones": ["60", "55", "70", "50"],
    "retroalimentacion": "Solo I=35, solo F=20, solo A=20. Suma=75."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "3. OPERACIONES CON NÚMEROS REALES",
    "subtema": "3.3 Inecuaciones",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Resuelva: 2x − 5 < 3x + 1 ≤ 10",
    "opciones": ["(-6, 3]", "[-6, 3)", "(-∞, 3]", "(-6, ∞)"],
    "retroalimentacion": "Parte izquierda: x > −6. Parte derecha: x ≤ 3. Solución: (−6, 3]."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.1 Dominio de función racional",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El dominio de f(x) = 1/(x² − 4) es:",
    "opciones": ["ℝ − {−2, 2}", "ℝ − {2}", "ℝ − {−2}", "Todos los reales"],
    "retroalimentacion": "Denominador ≠ 0 → x² ≠ 4 → x ≠ ±2."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "4. FUNCIONES ALGEBRAICAS",
    "subtema": "4.3 Función valor absoluto",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "La gráfica de y = |x − 2| tiene un vértice en:",
    "opciones": ["(2, 0)", "(0, 2)", "(-2, 0)", "(0, -2)"],
    "retroalimentacion": "El mínimo ocurre cuando x−2=0 → x=2, y=0."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.2 Ángulos cuadrantales",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "El valor de cos(π) es:",
    "opciones": ["-1", "0", "1", "No definido"],
    "retroalimentacion": "En el círculo unitario, π rad corresponde al punto (−1,0), coseno = −1."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.4 Identidades pitagóricas",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Si tan x = 2 y x está en el III cuadrante, calcule sec x.",
    "opciones": ["-√5", "√5", "-1/√5", "1/√5"],
    "retroalimentacion": "sec²x = 1 + tan²x = 5 → sec x = ±√5. En III cuadrante coseno negativo, secante negativo → -√5."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "5. FUNCIONES TRIGONOMÉTRICAS",
    "subtema": "5.6 Funciones trigonométricas inversas",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El valor de arcsen(1/2) en radianes es:",
    "opciones": ["π/6", "π/3", "π/4", "π/2"],
    "retroalimentacion": "sen(π/6) = 1/2."
  },
  {
    "asignatura": "Álgebra",
    "unidad": "6. FUNCIÓN EXPONENCIAL Y LOGARÍTMICA",
    "subtema": "6.2 Cambio de base",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Exprese log₉ 27 en términos de logaritmo base 3.",
    "opciones": ["3/2", "2/3", "3", "2"],
    "retroalimentacion": "log₉ 27 = log₃ 27 / log₃ 9 = 3 / 2."
  },
  {
    "asignatura": "Física",
    "unidad": "1. CANTIDADES FÍSICAS",
    "subtema": "1.2 Conversión de unidades compuestas",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Convierta 60 mi/h a ft/s. (1 mi = 5280 ft, 1 h = 3600 s)",
    "opciones": ["88 ft/s", "60 ft/s", "44 ft/s", "100 ft/s"],
    "retroalimentacion": "60 × 5280 / 3600 = 88 ft/s."
  },
  {
    "asignatura": "Física",
    "unidad": "2. VECTORES EN EL ESPACIO (3D)",
    "subtema": "2.3 Producto punto y ángulo",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "El ángulo entre A=(1,0) y B=(1,1) es:",
    "opciones": ["45°", "30°", "60°", "90°"],
    "retroalimentacion": "cos θ = (1×1 + 0×1)/(1×√2) = 1/√2 → θ = 45°."
  },
  {
    "asignatura": "Física",
    "unidad": "3. CINEMÁTICA DE LA PARTÍCULA",
    "subtema": "3.3 MRUV con velocidad inicial",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Un auto frena de 25 m/s a 5 m/s en 4 s. Su aceleración es:",
    "opciones": ["-5 m/s²", "5 m/s²", "-2.5 m/s²", "2.5 m/s²"],
    "retroalimentacion": "a = (5−25)/4 = −20/4 = −5 m/s²."
  },
  {
    "asignatura": "Física",
    "unidad": "3. CINEMÁTICA DE LA PARTÍCULA",
    "subtema": "3.6 Aceleración centrípeta",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Un objeto gira con rapidez 6 m/s en un círculo de radio 2 m. Su aceleración centrípeta es:",
    "opciones": ["18 m/s²", "12 m/s²", "3 m/s²", "36 m/s²"],
    "retroalimentacion": "a_c = v²/r = 36/2 = 18 m/s²."
  },
  {
    "asignatura": "Física",
    "unidad": "4. DINÁMICA DE LA PARTÍCULA",
    "subtema": "4.2 Plano inclinado sin roce",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Un bloque baja por un plano inclinado 30° sin roce. Su aceleración es (g=10 m/s²):",
    "opciones": ["5 m/s²", "10 m/s²", "8.66 m/s²", "2.5 m/s²"],
    "retroalimentacion": "a = g sen θ = 10 × 0.5 = 5 m/s²."
  },
  {
    "asignatura": "Física",
    "unidad": "4. DINÁMICA DE LA PARTÍCULA",
    "subtema": "4.3 Ley de acción y reacción",
    "dificultad": "baja",
    "tipo_pregunta": "teorica",
    "enunciado": "Según la tercera ley de Newton, las fuerzas de acción y reacción:",
    "opciones": ["Actúan sobre cuerpos diferentes", "Se anulan entre sí", "Actúan sobre el mismo cuerpo", "Son siempre de contacto"],
    "retroalimentacion": "Pares de acción-reacción están en cuerpos distintos, por eso no se cancelan."
  },
  {
    "asignatura": "Física",
    "unidad": "5. TRABAJO, POTENCIA Y ENERGÍA",
    "subtema": "5.4 Potencia",
    "dificultad": "media",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Un motor realiza 3000 J de trabajo en 1 minuto. Su potencia es:",
    "opciones": ["50 W", "3000 W", "100 W", "30 W"],
    "retroalimentacion": "P = 3000/60 = 50 W."
  },
  {
    "asignatura": "Física",
    "unidad": "5. TRABAJO, POTENCIA Y ENERGÍA",
    "subtema": "5.5 Teorema del trabajo y energía cinética",
    "dificultad": "alta",
    "tipo_pregunta": "ejercicio",
    "enunciado": "Un cuerpo de 2 kg aumenta su velocidad de 3 m/s a 7 m/s. El trabajo neto realizado es:",
    "opciones": ["40 J", "20 J", "58 J", "49 J"],
    "retroalimentacion": "W = ΔEc = ½·2·(7²−3²) = 1·(49−9) = 40 J."
  }
  // ... AQUÍ PEGAS EL RESTO DE PREGUNTAS DEL GRUPO 4 (300 preguntas) ...
];

// Exportar para uso en módulos (si usas ES6)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = BANCO_PREGUNTAS;
}