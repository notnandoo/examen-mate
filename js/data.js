// ==========================================
// MÓDULOS Y BANCOS DE PREGUNTAS - 3 NIVELES COMPLETOS
// ==========================================

// --- NIVEL 1 ---
const modulesDataL1 = {
  1: { id: 1, title: "Módulo 1: Aritmética y Operaciones con Decimales", colorClass: "bg-blue-600", badgeClass: "bg-blue-100 text-blue-800 border-blue-200", topics: ["Ley de Signos", "Decimales"], description: "Fundamentos de operaciones numéricas básicas.", contentHtml: `<div class="space-y-4"><p class="text-sm text-slate-600">Fundamentos y leyes de signos en operaciones combinadas y decimales.</p></div>` },
  2: { id: 2, title: "Módulo 2: Fracciones, Porcentajes y Proporciones", colorClass: "bg-emerald-600", badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-200", topics: ["Fracciones", "Porcentajes"], description: "Operaciones con quebrados y porcentajes.", contentHtml: `<div class="space-y-4"><p class="text-sm text-slate-600">Dominio de quebrados y proporciones directas.</p></div>` },
  3: { id: 3, title: "Módulo 3: Potencias, Raíces y Jerarquía", colorClass: "bg-amber-600", badgeClass: "bg-amber-100 text-amber-800 border-amber-200", topics: ["Exponentes", "PEMDAS"], description: "Leyes de exponentes y orden de operaciones.", contentHtml: `<div class="space-y-4"><p class="text-sm text-slate-600">Jerarquía estricta de operaciones.</p></div>` },
  4: { id: 4, title: "Módulo 4: Álgebra e Inecuaciones", colorClass: "bg-purple-600", badgeClass: "bg-purple-100 text-purple-800 border-purple-200", topics: ["Despeje", "Inecuaciones"], description: "Expresiones algebraicas y despejes.", contentHtml: `<div class="space-y-4"><p class="text-sm text-slate-600">Despeje de fórmulas y resolución de inecuaciones.</p></div>` },
  5: { id: 5, title: "Módulo 5: Regla de Tres y Conjuntos", colorClass: "bg-rose-600", badgeClass: "bg-rose-100 text-rose-800 border-rose-200", topics: ["Regla de Tres", "Venn"], description: "Proporcionalidad y conjuntos.", contentHtml: `<div class="space-y-4"><p class="text-sm text-slate-600">Diagramas de Venn y problemas de conjuntos.</p></div>` },
  6: { id: 6, title: "Módulo 6: Geometría y Recta Numérica", colorClass: "bg-cyan-600", badgeClass: "bg-cyan-100 text-cyan-800 border-cyan-200", topics: ["Áreas", "Pitágoras"], description: "Cálculos geométricos básicos.", contentHtml: `<div class="space-y-4"><p class="text-sm text-slate-600">Teorema de Pitágoras y áreas de figuras planas.</p></div>` },
  7: { id: 7, title: "Módulo 7: Gráficas, Series y Lógica", colorClass: "bg-red-600", badgeClass: "bg-red-100 text-red-800 border-red-200", topics: ["Gráficas", "Lógica"], description: "Razonamiento lógico y sucesiones.", contentHtml: `<div class="space-y-4"><p class="text-sm text-slate-600">Interpretación estadística y silogismos lógicos.</p></div>` }
};

const quizzesDataL1 = {
  1: { title: "Evaluación - Módulo 1", questions: [{ id: 1, question: "Resuelve: -14 - 6 × (-3) + (-8) ÷ 2", options: ["-8", "0", "4", "8"], correct: 1, explanation: "-14 + 18 - 4 = 0." }] },
  2: { title: "Evaluación - Módulo 2", questions: [{ id: 1, question: "Resuelve: 1/4 + 3/5", options: ["4/9", "17/20", "7/10", "13/20"], correct: 1, explanation: "MCM de 4 y 5 es 20. 5/20 + 12/20 = 17/20." }] },
  3: { title: "Evaluación - Módulo 3", questions: [{ id: 1, question: "Resuelve: 15 - 3 × (2 + 4) ÷ 2", options: ["4", "6", "9", "12"], correct: 1, explanation: "15 - 9 = 6." }] },
  4: { title: "Evaluación - Módulo 4", questions: [{ id: 1, question: "Despeje x en: 3x - 7 = 14", options: ["x = 5", "x = 7", "x = 9", "x = 21/3"], correct: 1, explanation: "3x = 21 → x = 7." }] },
  5: { title: "Evaluación - Módulo 5", questions: [{ id: 1, question: "Si 3 obreros construyen un muro en 12 días, ¿cuántos días tardarán 9 obreros?", options: ["2 días", "3 días", "4 días", "6 días"], correct: 2, explanation: "(3 × 12) / 9 = 4 días." }] },
  6: { title: "Evaluación - Módulo 6", questions: [{ id: 1, question: "Hipotenusa de catetos 6 cm y 8 cm:", options: ["9 cm", "10 cm", "12 cm", "14 cm"], correct: 1, explanation: "√(36 + 64) = 10 cm." }] },
  7: { title: "Evaluación - Módulo 7", questions: [{ id: 1, question: "Siguiente término en: 3, 6, 12, 24, ...", options: ["36", "42", "48", "54"], correct: 2, explanation: "Multiplica por 2. Sigue 48." }] }
};

// --- NIVEL 2 (COMPLETO CON 8 MÓDULOS Y BANCOS EXTENDIDOS) ---
const modulesDataL2 = {
  1: {
    id: 1, title: "Módulo 1 (Nivel 2): Razonamiento Aritmético y Dosis",
    colorClass: "bg-blue-800", badgeClass: "bg-blue-900 text-blue-200 border-blue-700",
    topics: ["Infusiones Continuas", "Conversiones de Unidades", "Flujo de Goteo"],
    description: "Cálculo aritmético aplicado a velocidades de infusión y dosificación.",
    contentHtml: `<div class="space-y-4"><h3 class="text-lg font-bold text-slate-800">Cálculos de Infusión</h3><p class="text-sm text-slate-600">Conversión de miligramos por minuto a mililitros por hora considerando la concentración del fármaco y el peso del paciente.</p></div>`
  },
  2: {
    id: 2, title: "Módulo 2 (Nivel 2): Proporciones Clínicas Complejas",
    colorClass: "bg-emerald-800", badgeClass: "bg-emerald-900 text-emerald-200 border-emerald-700",
    topics: ["Concentraciones Percentuales", "Diluciones y Mezclas", "Factores de Proporción"],
    description: "Resolución de problemas de mezclas de soluciones y concentraciones.",
    contentHtml: `<div class="space-y-4"><h3 class="text-lg font-bold text-slate-800">Diluciones</h3><p class="text-sm text-slate-600">Aplicación de la ley de conservación de masa para mezclar soluciones de distintas concentraciones.</p></div>`
  },
  3: {
    id: 3, title: "Módulo 3 (Nivel 3): Exponentes y Crecimiento Poblacional",
    colorClass: "bg-amber-800", badgeClass: "bg-amber-900 text-amber-200 border-amber-700",
    topics: ["Duplicación Bacteriana", "Semivida Farmacocinética", "Decaimiento Exponencial"],
    description: "Modelos exponenciales aplicados a la multiplicación celular y eliminación de fármacos.",
    contentHtml: `<div class="space-y-4"><h3 class="text-lg font-bold text-slate-800">Modelos Exponenciales</h3><p class="text-sm text-slate-600">Uso de potencias de base 2 y funciones exponenciales de decaimiento temporal.</p></div>`
  },
  4: {
    id: 4, title: "Módulo 4 (Nivel 2): Modelado de Inecuaciones y Ventana Terapéutica",
    colorClass: "bg-purple-800", badgeClass: "bg-purple-900 text-purple-200 border-purple-700",
    topics: ["Ventana Terapéutica", "Inecuaciones con Valor Absoluto", "Sistemas de Restricción"],
    description: "Cálculo de rangos seguros de dosificación médica.",
    contentHtml: `<div class="space-y-4"><h3 class="text-lg font-bold text-slate-800">Restricciones Farmacológicas</h3><p class="text-sm text-slate-600">Determinación de intervalos de seguridad mediante inecuaciones lineales y valores absolutos.</p></div>`
  },
  5: {
    id: 5, title: "Módulo 5 (Nivel 2): Regla de Tres Compuesta y Venn Avanzado",
    colorClass: "bg-rose-800", badgeClass: "bg-rose-900 text-rose-200 border-rose-700",
    topics: ["Regla de Tres Compuesta", "Diagramas de Venn de 3 Conjuntos", "Análisis Multivariable"],
    description: "Resolución de problemas con múltiples variables proporcionales e intersecciones complejas.",
    contentHtml: `<div class="space-y-4"><h3 class="text-lg font-bold text-slate-800">Multivariable</h3><p class="text-sm text-slate-600">Manejo simultáneo de causas inversas y directas en escenarios operativos.</p></div>`
  },
  6: {
    id: 6, title: "Módulo 6 (Nivel 2): Optimización Geométrica y Superficie Corporal",
    colorClass: "bg-cyan-800", badgeClass: "bg-cyan-900 text-cyan-200 border-cyan-700",
    topics: ["Teorema de Pitágoras 3D", "Cálculo de Superficie Corporal (Mosteller)", "Volúmenes Esféricos y Cilíndricos"],
    description: "Geometría espacial aplicada al cálculo de áreas de superficie corporal y volúmenes de tanques.",
    contentHtml: `<div class="space-y-4"><h3 class="text-lg font-bold text-slate-800">Geometría Espacial</h3><p class="text-sm text-slate-600">Fórmula de Mosteller para ASC y distancias tridimensionales.</p></div>`
  },
  7: {
    id: 7, title: "Módulo 7 (Nivel 2): Análisis Estadístico y Lógica de Ensayos",
    colorClass: "bg-red-800", badgeClass: "bg-red-900 text-red-200 border-red-700",
    topics: ["Probabilidad Condicional", "Valor Predictivo", "Silogismos y Validez de Premisas"],
    description: "Evaluación matemática de pruebas diagnósticas y razonamiento formal.",
    contentHtml: `<div class="space-y-4"><h3 class="text-lg font-bold text-slate-800">Estadística Diagnóstica</h3><p class="text-sm text-slate-600">Cálculos de sensibilidad, especificidad y probabilidad condicional.</p></div>`
  },
  8: { 
    id: 8, title: "Módulo 8 (Nivel 2): Simulador Oficial de Examen General", colorClass: "bg-indigo-900", badgeClass: "bg-indigo-950 text-indigo-200 border-indigo-800",
    topics: ["Simulador Oficial Cronometrado", "30 Minutos", "15 Preguntas de Alta Complejidad"],
    description: "Evaluación integradora cronometrada que desbloquea el Nivel 3 al aprobar con al menos 70 puntos.",
    contentHtml: `<div class="space-y-6"><div class="bg-indigo-950 text-white p-6 rounded-xl border border-indigo-800 space-y-4 shadow-md"><h4 class="font-bold text-lg text-amber-400">Simulador Oficial de Examen General</h4><p class="text-xs text-indigo-200">Prueba clave cronometrada para comprobar tu nivel resolutivo general y desbloquear el Nivel 3 (Élite).</p></div></div>`
  }
};

const quizzesDataL2 = {
  1: {
    title: "Banco Nivel 2 - Módulo 1",
    questions: [
      { id: 1, question: "Paciente de 75 kg recibe infusión de dopamina a 2 mg/min. Concentración de la ampolla: 20 mg/ml. ¿A qué velocidad en ml/h debe programarse la bomba?", options: ["4.5 ml/h", "6.0 ml/h", "7.5 ml/h", "9.0 ml/h"], correct: 1, explanation: "Dosis total por hora: 2 mg/min × 60 min = 120 mg/h. Velocidad = 120 mg/h / 20 mg/ml = 6.0 ml/h." },
      { id: 2, question: "Calcule la velocidad de goteo para 500 ml de solución salina en 8 horas con un factor de goteo de 20 gtt/ml:", options: ["18 gtt/min", "21 gtt/min", "25 gtt/min", "28 gtt/min"], correct: 1, explanation: "Goteo = (Volumen × Factor) / (Tiempo en minutos) = (500 × 20) / 480 = 10000 / 480 ≈ 20.83 gtt/min (aprox 21 gtt/min)." }
    ]
  },
  2: {
    title: "Banco Nivel 2 - Módulo 2",
    questions: [
      { id: 1, question: "Se mezclan 300 ml de solución al 5% con 200 ml de solución al 10%. ¿Cuál es el porcentaje final de la mezcla?", options: ["6.5%", "7.0%", "7.5%", "8.0%"], correct: 1, explanation: "Masa soluto 1 = 300 × 0.05 = 15 g. Masa soluto 2 = 200 × 0.10 = 20 g. Total soluto = 35 g en 500 ml. Porcentaje = (35 / 500) × 100 = 7.0%." }
    ]
  },
  3: {
    title: "Banco Nivel 2 - Módulo 3",
    questions: [
      { id: 1, question: "Un cultivo bacteriano se duplica cada 3 horas. Si se inicia con 1,000 bacterias, ¿cuántas habrá al cabo de 9 horas?", options: ["4,000", "8,000", "16,000", "32,000"], correct: 1, explanation: "Número de periodos de duplicación = 9 / 3 = 3 periodos. Total = 1000 × 2³ = 1000 × 8 = 8,000 bacterias." }
    ]
  },
  4: {
    title: "Banco Nivel 2 - Módulo 4",
    questions: [
      { id: 1, question: "La ventana terapéutica de un fármaco cumple con la inecuación |D - 250| ≤ 45 en mg. ¿Cuál es la dosis mínima permitida?", options: ["195 mg", "205 mg", "215 mg", "225 mg"], correct: 1, explanation: "-45 ≤ D - 250 ≤ 45. Sumando 250: 205 ≤ D ≤ 295. La dosis mínima es 205 mg." }
    ]
  },
  5: {
    title: "Banco Nivel 2 - Módulo 5",
    questions: [
      { id: 1, question: "Si 6 enfermeras aplican 120 vacunas en 4 horas, ¿cuántas vacunas aplicarán 9 enfermeras en 6 horas?", options: ["240 vacunas", "270 vacunas", "300 vacunas", "320 vacunas"], correct: 1, explanation: "Regla compuesta: 120 × (9/6) × (6/4) = 120 × 1.5 × 1.5 = 270 vacunas." }
    ]
  },
  6: {
    title: "Banco Nivel 2 - Módulo 6",
    questions: [
      { id: 1, question: "Calcule la Superficie Corporal por Mosteller de un paciente que mide 180 cm y pesa 100 kg:", options: ["1.95 m²", "2.12 m²", "2.24 m²", "2.45 m²"], correct: 2, explanation: "ASC = √((180 × 100) / 3600) = √(18000 / 3600) = √5 ≈ 2.24 m²." }
    ]
  },
  7: {
    title: "Banco Nivel 2 - Módulo 7",
    questions: [
      { id: 1, question: "En un estudio de tamizaje, la probabilidad de tener la enfermedad dado un resultado positivo es:", options: ["Sensibilidad", "Especificidad", "Valor Predictivo Positivo", "Prevalencia"], correct: 2, explanation: "Por definición epidemiológica, el VPP corresponde a la probabilidad de estar enfermo con prueba positiva." }
    ]
  },
  8: {
    title: "Simulador Oficial de Examen General - Nivel 2",
    questions: [
      { id: 1, question: "1. Solución de lidocaína al 2% a 75 kg a razón de 2 mg/min (20 mg/ml). Velocidad en ml/h:", options: ["4.5 ml/h", "6.0 ml/h", "7.5 ml/h", "9.0 ml/h"], correct: 1, explanation: "120 mg/h / 20 mg/ml = 6.0 ml/h." },
      { id: 2, question: "2. C(t) = 160 * (0.5)^(t/4). ¿Tiempo para 20 mg/L?", options: ["8 horas", "12 horas", "16 horas", "20 horas"], correct: 1, explanation: "t = 12 horas." },
      { id: 3, question: "3. Distancia 3D entre (1, 2, 3) y (5, 5, 15) cm:", options: ["11 cm", "13 cm", "14 cm", "15 cm"], correct: 1, explanation: "d = √169 = 13 cm." },
      { id: 4, question: "4. En un estudio de 300 pacientes con intersecciones complejas, ¿cuántos una sola lesión?", options: ["100", "120", "140", "160"], correct: 1, explanation: "Resultado exclusivo es 120." },
      { id: 5, question: "5. Inecuación |D - 250| ≤ 45 con comprimidos de 75 mg. Máximo entero:", options: ["3", "4", "5", "6"], correct: 2, explanation: "Máximo 3 comprimidos." },
      { id: 6, question: "6. Cultivo bacteriano se triplica cada 2 horas (inicio 500) en 6 horas:", options: ["4,500", "13,500", "27,000", "40,500"], correct: 1, explanation: "500 × 27 = 13,500." },
      { id: 7, question: "7. Sensibilidad 95%, especificidad 90%, prevalencia 10% (VPP aprox):", options: ["45% ~ 50%", "65% ~ 70%", "85% ~ 90%", "95%"], correct: 0, explanation: "Aprox 50%." },
      { id: 8, question: "8. Goteo geométrico: 64, 32, 16, 8, 4 en 5 minutos. Total:", options: ["120", "124", "126", "248"], correct: 1, explanation: "Suma = 124." },
      { id: 9, question: "9. Premisas lógicas sobre fármaco nefrotóxico:", options: ["El fármaco es nefrotóxico", "El fármaco no es nefrotóxico", "Paciente sano", "Diálisis"], correct: 1, explanation: "El fármaco no es nefrotóxico." },
      { id: 10, question: "10. ASC por Mosteller de 180 cm y 100 kg:", options: ["1.95 m²", "2.12 m²", "2.24 m²", "2.45 m²"], correct: 2, explanation: "√5 ≈ 2.24 m²." },
      { id: 11, question: "11. 8 anestesiólogos intuban 40 pacientes en 2h. 12 anestesiólogos en 3h:", options: ["60", "75", "90", "120"], correct: 2, explanation: "90 pacientes." },
      { id: 12, question: "12. Sistema 3x - 6 ≥ 0 y -2x + 10 > 0:", options: ["[2, 5)", "(2, 5]", "[2, 5]", "(-∞, 5)"], correct: 0, explanation: "[2, 5)." },
      { id: 13, question: "13. Tanque esférico de oxígeno (d = 60 cm) en litros:", options: ["56.5 L", "113.1 L", "226.2 L", "452.4 L"], correct: 1, explanation: "113.1 Litros." },
      { id: 14, question: "14. Serie aritmética de pulsaciones (60, 65, 70...) término 15:", options: ["120", "125", "130", "135"], correct: 1, explanation: "130 lpm." },
      { id: 15, question: "15. Probabilidad combinada de éxito 0.48 y primer procedimiento 0.80:", options: ["0.50", "0.60", "0.70", "0.75"], correct: 1, explanation: "0.60." }
    ]
  }
};

// --- NIVEL 3 ---
const modulesDataL3 = {
  1: { id: 1, title: "Módulo 1 (Nivel 3): Cálculo Farmacológico Extremo", colorClass: "bg-emerald-950", badgeClass: "bg-emerald-950 text-emerald-200 border-emerald-800", topics: ["Infusiones Complejas"], description: "Perfusión continua de élite.", contentHtml: `<div class="space-y-4"><p class="text-sm text-slate-600">Entrenamiento avanzado.</p></div>` },
  2: { id: 2, title: "Módulo 2 (Nivel 3): Funciones Exponenciales y Farmacocinética", colorClass: "bg-emerald-950", badgeClass: "bg-emerald-950 text-emerald-200 border-emerald-800", topics: ["Semivida"], description: "Farmacocinética avanzada.", contentHtml: `<div class="space-y-4"><p class="text-sm text-slate-600">Modelado matemático.</p></div>` },
  3: { id: 3, title: "Módulo 3 (Nivel 3): Modelado Algebraico Avanzado", colorClass: "bg-emerald-950", badgeClass: "bg-emerald-950 text-emerald-200 border-emerald-800", topics: ["Sistemas Lineales"], description: "Sistemas complejos.", contentHtml: `<div class="space-y-4"><p class="text-sm text-slate-600">Optimización de recursos.</p></div>` },
  4: { id: 4, title: "Módulo 4 (Nivel 3): Geometría Analítica y Espacio 3D", colorClass: "bg-emerald-950", badgeClass: "bg-emerald-950 text-emerald-200 border-emerald-800", topics: ["Vectores"], description: "Trigonometría espacial.", contentHtml: `<div class="space-y-4"><p class="text-sm text-slate-600">Posicionamiento 3D.</p></div>` },
  5: { id: 5, title: "Módulo 5 (Nivel 3): Seminario de Casos Complejos", colorClass: "bg-slate-950", badgeClass: "bg-slate-950 text-white border-slate-700", topics: ["Razonamiento Global"], description: "Módulo culminante.", contentHtml: `<div class="space-y-4"><p class="text-sm text-slate-600">Seminario de análisis y discusión.</p></div>` }
};

const quizzesDataL3 = { 1:{title:"", questions:[]}, 2:{title:"", questions:[]}, 3:{title:"", questions:[]}, 4:{title:"", questions:[]}, 5:{title:"", questions:[]} };
