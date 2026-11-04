// js/data.js

// ==========================================
// MÓDULOS DE ESTUDIO
// ==========================================
const modulesDataL1 = {
  1: { id: 1, title: "Módulo 1: Aritmética y Operaciones con Decimales", colorClass: "bg-blue-600", badgeClass: "bg-blue-100 text-blue-800 border-blue-200", topics: ["Ley de Signos", "Decimales"], description: "Cálculo numérico básico.", contentHtml: `<div class="space-y-4"><p class="text-sm text-slate-600">Fundamentos y leyes de signos en operaciones combinadas.</p></div>` },
  2: { id: 2, title: "Módulo 2: Fracciones, Porcentajes y Proporciones", colorClass: "bg-emerald-600", badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-200", topics: ["Fracciones", "Porcentajes"], description: "Operaciones con quebrados y %.", contentHtml: `<div class="space-y-4"><p class="text-sm text-slate-600">Dominio de quebrados y proporciones directas.</p></div>` },
  3: { id: 3, title: "Módulo 3: Potencias, Raíces y Jerarquía", colorClass: "bg-amber-600", badgeClass: "bg-amber-100 text-amber-800 border-amber-200", topics: ["Exponentes", "PEMDAS"], description: "Leyes de exponentes.", contentHtml: `<div class="space-y-4"><p class="text-sm text-slate-600">Jerarquía estricta de operaciones.</p></div>` },
  4: { id: 4, title: "Módulo 4: Álgebra e Inecuaciones", colorClass: "bg-purple-600", badgeClass: "bg-purple-100 text-purple-800 border-purple-200", topics: ["Despeje", "Inecuaciones"], description: "Expresiones algebraicas.", contentHtml: `<div class="space-y-4"><p class="text-sm text-slate-600">Despeje de fórmulas y resolución de inecuaciones.</p></div>` },
  5: { id: 5, title: "Módulo 5: Regla de Tres y Conjuntos", colorClass: "bg-rose-600", badgeClass: "bg-rose-100 text-rose-800 border-rose-200", topics: ["Regla de Tres", "Venn"], description: "Proporcionalidad y conjuntos.", contentHtml: `<div class="space-y-4"><p class="text-sm text-slate-600">Diagramas de Venn y problemas de conjuntos.</p></div>` },
  6: { id: 6, title: "Módulo 6: Geometría y Recta Numérica", colorClass: "bg-cyan-600", badgeClass: "bg-cyan-100 text-cyan-800 border-cyan-200", topics: ["Áreas", "Pitágoras"], description: "Cálculos geométricos.", contentHtml: `<div class="space-y-4"><p class="text-sm text-slate-600">Teorema de Pitágoras y áreas de figuras planas.</p></div>` },
  7: { id: 7, title: "Módulo 7: Gráficas, Series y Lógica", colorClass: "bg-red-600", badgeClass: "bg-red-100 text-red-800 border-red-200", topics: ["Gráficas", "Lógica"], description: "Razonamiento lógico.", contentHtml: `<div class="space-y-4"><p class="text-sm text-slate-600">Interpretación estadística y silogismos lógicos.</p></div>` }
};

const modulesDataL2 = {
  1: { id: 1, title: "Módulo 1 (Nivel 2): Razonamiento Aritmético y Dosis Clínicas", colorClass: "bg-blue-800", badgeClass: "bg-blue-900 text-blue-200 border-blue-700", topics: ["Infusiones", "Conversiones"], description: "Cálculo aritmético clínico.", contentHtml: `<div class="space-y-4"><p class="text-sm text-slate-600">Lección avanzada de infusiones y conversiones.</p></div>` },
  2: { id: 2, title: "Módulo 2 (Nivel 2): Proporciones Clínicas Complejas", colorClass: "bg-emerald-800", badgeClass: "bg-emerald-900 text-emerald-200 border-emerald-700", topics: ["Concentraciones", "Diluciones"], description: "Proporciones avanzadas.", contentHtml: `<div class="space-y-4"><p class="text-sm text-slate-600">Cálculo de concentraciones porcentuales.</p></div>` },
  3: { id: 3, title: "Módulo 3 (Nivel 2): Exponentes y Crecimiento Bacteriano", colorClass: "bg-amber-800", badgeClass: "bg-amber-900 text-amber-200 border-amber-700", topics: ["Duplicación", "Semivida"], description: "Potencias en bacteriología.", contentHtml: `<div class="space-y-4"><p class="text-sm text-slate-600">Modelado exponencial de colonias.</p></div>` },
  4: { id: 4, title: "Módulo 4 (Nivel 2): Modelado de Inecuaciones Médicas", colorClass: "bg-purple-800", badgeClass: "bg-purple-900 text-purple-200 border-purple-700", topics: ["Ventana Terapéutica", "Sistemas"], description: "Inecuaciones farmacológicas.", contentHtml: `<div class="space-y-4"><p class="text-sm text-slate-600">Cálculo de rangos seguros de dosificación.</p></div>` },
  5: { id: 5, title: "Módulo 5 (Nivel 2): Regla de Tres Compuesta y Venn Avanzado", colorClass: "bg-rose-800", badgeClass: "bg-rose-900 text-rose-200 border-rose-700", topics: ["Regla Compuesta", "Venn 3 Conjuntos"], description: "Análisis multivariable.", contentHtml: `<div class="space-y-4"><p class="text-sm text-slate-600">Problemas complejos de personal y diagramas de 3 conjuntos.</p></div>` },
  6: { id: 6, title: "Módulo 6 (Nivel 2): Optimización Geométrica Hospitalaria", colorClass: "bg-cyan-800", badgeClass: "bg-cyan-900 text-cyan-200 border-cyan-700", topics: ["Pitágoras 3D", "Volúmenes", "ASC Mosteller"], description: "Geometría espacial médica.", contentHtml: `<div class="space-y-4"><p class="text-sm text-slate-600">Cálculo de áreas corporales y volúmenes de tanques.</p></div>` },
  7: { id: 7, title: "Módulo 7 (Nivel 2): Análisis Estadístico y Lógica de Ensayos", colorClass: "bg-red-800", badgeClass: "bg-red-900 text-red-200 border-red-700", topics: ["Probabilidad Condicional", "Silogismos"], description: "Estadística y lógica formal.", contentHtml: `<div class="space-y-4"><p class="text-sm text-slate-600">Evaluación de ensayos clínicos y validez de premisas.</p></div>` },
  8: { 
    id: 8, title: "Módulo 8 (Nivel 2): Simulador Oficial de Examen General", colorClass: "bg-indigo-900", badgeClass: "bg-indigo-950 text-indigo-200 border-indigo-800",
    topics: ["Simulador Oficial Cronometrado", "30 Minutos", "15 Preguntas de Alta Complejidad"],
    description: "Evaluación integradora cronometrada que desbloquea el Nivel 3 al aprobar con al menos 70 puntos.",
    contentHtml: `
      <div class="space-y-6">
        <div class="bg-indigo-950 text-white p-6 rounded-xl border border-indigo-800 space-y-4 shadow-md">
          <div class="flex items-center gap-3">
            <span class="text-3xl">⏱️</span>
            <div>
              <h4 class="font-bold text-lg text-amber-400">Simulador Oficial de Examen General</h4>
              <p class="text-xs text-indigo-200">Prueba clave para comprobar tu preparación y desbloquear el Nivel 3 (Élite).</p>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center pt-2">
            <div class="bg-indigo-900 p-3 rounded-lg border border-indigo-700"><span class="text-xs text-indigo-300 block">Duración</span><strong class="text-lg text-amber-400">30 Min</strong></div>
            <div class="bg-indigo-900 p-3 rounded-lg border border-indigo-700"><span class="text-xs text-indigo-300 block">Reactivos</span><strong class="text-lg text-indigo-200">15 Preguntas</strong></div>
            <div class="bg-indigo-900 p-3 rounded-lg border border-indigo-700"><span class="text-xs text-indigo-300 block">Mínimo</span><strong class="text-lg text-emerald-400">70%</strong></div>
          </div>
        </div>
      </div>
    `
  }
};

const modulesDataL3 = {
  1: { id: 1, title: "Módulo 1 (Nivel 3): Cálculo Farmacológico Extremo y Perfusión", colorClass: "bg-emerald-950", badgeClass: "bg-emerald-950 text-emerald-200 border-emerald-800", topics: ["Infusiones Complejas", "Dosificación Pediátrica"], description: "Perfusión continua.", contentHtml: `<div class="space-y-4"><p class="text-sm text-slate-600">Entrenamiento de élite avanzado.</p></div>` },
  2: { id: 2, title: "Módulo 2 (Nivel 3): Funciones Exponenciales, Logarítmicas y Farmacocinética", colorClass: "bg-emerald-950", badgeClass: "bg-emerald-950 text-emerald-200 border-emerald-800", topics: ["Semivida", "Logaritmos"], description: "Farmacocinética.", contentHtml: `<div class="space-y-4"><p class="text-sm text-slate-600">Modelado matemático avanzado.</p></div>` },
  3: { id: 3, title: "Módulo 3 (Nivel 3): Modelado Algebraico Avanzado y Sistemas Complejos", colorClass: "bg-emerald-950", badgeClass: "bg-emerald-950 text-emerald-200 border-emerald-800", topics: ["Sistemas Lineales", "Optimización"], description: "Sistemas complejos.", contentHtml: `<div class="space-y-4"><p class="text-sm text-slate-600">Balances electrolíticos y optimización.</p></div>` },
  4: { id: 4, title: "Módulo 4 (Nivel 3): Geometría Analítica, Trigonometría y Espacio 3D", colorClass: "bg-emerald-950", badgeClass: "bg-emerald-950 text-emerald-200 border-emerald-800", topics: ["Vectores", "Planos Quirúrgicos"], description: "Trigonometría espacial.", contentHtml: `<div class="space-y-4"><p class="text-sm text-slate-600">Radioterapia y posicionamiento 3D.</p></div>` },
  5: { id: 5, title: "Módulo 5 (Nivel 3): Seminario de Casos Clínicos Complejos", colorClass: "bg-slate-950", badgeClass: "bg-slate-950 text-white border-slate-700", topics: ["Razonamiento Clínico Global"], description: "Módulo culminante de profundización conceptual.", contentHtml: `<div class="space-y-4"><p class="text-sm text-slate-600">Seminario de análisis y discusión.</p></div>` }
};

// ==========================================
// BANCOS DE EXÁMENES
// ==========================================
const quizzesDataL1 = {
  1: { title: "Examen Corto 1", questions: [{ id: 1, question: "Resultado de -14 - 6×(-3) + (-8)÷2", options: ["-8", "0", "4", "8"], correct: 1, explanation: "-14 + 18 - 4 = 0." }] },
  2: { title: "Examen Corto 2", questions: [{ id: 1, question: "Pregunta 1", options: ["A", "B", "C", "D"], correct: 0, explanation: "Explicación." }] },
  3: { title: "Examen Corto 3", questions: [{ id: 1, question: "Pregunta 1", options: ["A", "B", "C", "D"], correct: 0, explanation: "Explicación." }] },
  4: { title: "Examen Corto 4", questions: [{ id: 1, question: "Pregunta 1", options: ["A", "B", "C", "D"], correct: 0, explanation: "Explicación." }] },
  5: { title: "Examen Corto 5", questions: [{ id: 1, question: "Pregunta 1", options: ["A", "B", "C", "D"], correct: 0, explanation: "Explicación." }] },
  6: { title: "Examen Corto 6", questions: [{ id: 1, question: "Pregunta 1", options: ["A", "B", "C", "D"], correct: 0, explanation: "Explicación." }] },
  7: { title: "Examen Corto 7", questions: [{ id: 1, question: "Pregunta 1", options: ["A", "B", "C", "D"], correct: 0, explanation: "Explicación." }] }
};

const quizzesDataL2 = {
  1: { title: "Banco Nivel 2 - Mod 1", questions: [{ id: 1, question: "Infusión dopamina...", options: ["A", "B", "26.25 ml/h", "D"], correct: 2, explanation: "Resolución." }] },
  2: { title: "Banco Nivel 2 - Mod 2", questions: [{ id: 1, question: "Mezcla de soluciones...", options: ["A", "2.95%", "C", "D"], correct: 1, explanation: "Resolución." }] },
  3: { title: "Banco Nivel 2 - Mod 3", questions: [{ id: 1, question: "Duplicación bacteriana...", options: ["A", "B", "8,000", "D"], correct: 2, explanation: "Resolución." }] },
  4: { title: "Banco Nivel 2 - Mod 4", questions: [{ id: 1, question: "Ventana terapéutica digoxina...", options: ["1 ≤ x ≤ 4", "B", "C", "D"], correct: 0, explanation: "Resolución." }] },
  5: { title: "Banco Nivel 2 - Mod 5", questions: [{ id: 1, question: "Regla compuesta médicos...", options: ["2 días", "B", "C", "D"], correct: 0, explanation: "Resolución." }] },
  6: { title: "Banco Nivel 2 - Mod 6", questions: [{ id: 1, question: "Distancia sonda 3D...", options: ["A", "11 cm", "C", "D"], correct: 1, explanation: "Resolución." }] },
  7: { title: "Banco Nivel 2 - Mod 7", questions: [{ id: 1, question: "Probabilidad condicional ensayo...", options: ["12 / 27", "B", "C", "D"], correct: 0, explanation: "Resolución." }] },
  8: {
    title: "Simulador Oficial de Examen General - Nivel 2",
    questions: [
      { id: 1, question: "1. (CUSAM Élite) Una solución de lidocaína al 2% se administra en infusión continua a un paciente de 75 kg a razón de 2 mg/min. Sabiendo que 2% = 20 mg/ml, ¿cuál es la velocidad en ml/h?", options: ["4.5 ml/h", "6.0 ml/h", "7.5 ml/h", "9.0 ml/h"], correct: 1, explanation: "Lidocaína 2% = 20 mg/ml. Dosis = 2 mg/min = 120 mg/h. Velocidad = 120 / 20 = 6.0 ml/h." },
      { id: 2, question: "2. (CUSAM Élite) Si la concentración sérica de un fármaco decae según C(t) = 160 * (0.5)^(t/4), donde t está en horas, ¿cuánto tiempo exacto toma para que la concentración sea de 20 mg/L?", options: ["8 horas", "12 horas", "16 horas", "20 horas"], correct: 1, explanation: "20 = 160 * (0.5)^(t/4) → 1/8 = (0.5)^(t/4) → t/4 = 3 → t = 12 horas." },
      { id: 3, question: "3. (CUSAM Élite) Calcule la distancia tridimensional exacta entre el foco en (1, 2, 3) y el centro del tumor en (5, 5, 15) cm.", options: ["11 cm", "13 cm", "14 cm", "15 cm"], correct: 1, explanation: "d = √[(5-1)² + (5-2)² + (15-3)²] = √169 = 13 cm." },
      { id: 4, question: "4. (CUSAM Élite) En un estudio de 300 pacientes: 150 daño craneal (C), 120 daño torácico (T), 90 fracturas (F). Intersecciones: 50 C y T, 40 T y F, 30 C y F, 20 los tres. ¿Cuántos presentan exactamente una lesión?", options: ["100", "120", "140", "160"], correct: 1, explanation: "Aplicando diagrama de Venn, el resultado exclusivo es 120." },
      { id: 5, question: "5. (CUSAM Élite) Para un medicamento con rango terapéutico estricto, la dosis D (mg) cumple |D - 250| ≤ 45. Si cada comprimido contiene 75 mg, ¿cuál es el número máximo entero de comprimidos permitidos?", options: ["3", "4", "5", "6"], correct: 2, explanation: "Rango [205, 295]. 295/75 = 3.93 → máximo 3 comprimidos." },
      { id: 6, question: "6. (CUSAM Élite) Un cultivo bacteriano se triplica cada 2 horas. Si la población inicial es 500, ¿cuántas habrá a las 6 horas?", options: ["4,500", "13,500", "27,000", "40,500"], correct: 1, explanation: "6h / 2h = 3 períodos. 500 × 3³ = 13,500." },
      { id: 7, question: "7. (CUSAM Élite) Si la sensibilidad es 95% y especificidad 90% con prevalencia del 10%, ¿cuál es la probabilidad de que un positivo esté enfermo (VPP aprox)?", options: ["45% ~ 50%", "65% ~ 70%", "85% ~ 90%", "95%"], correct: 0, explanation: "Por teorema de Bayes, aprox 50%." },
      { id: 8, question: "8. (CUSAM Élite) Goteo en progresión geométrica: 64, 32, 16, 8, 4 gotas en 5 minutos. Total acumulado:", options: ["120 gotas", "124 gotas", "126 gotas", "248 gotas"], correct: 1, explanation: "Suma = 64 + 32 + 16 + 8 + 4 = 124 gotas." },
      { id: 9, question: "9. (CUSAM Élite) Premisas: 'Ningún fármaco nefrotóxico sin control' y 'Este medicamento se administra sin control'. Conclusión:", options: ["El fármaco es nefrotóxico", "El fármaco no es nefrotóxico", "El paciente está sano", "Se requiere diálisis"], correct: 1, explanation: "Por Modus Tollens." },
      { id: 10, question: "10. (CUSAM Élite) Calcule el Área Superficial Corporal (ASC) por Mosteller de un adulto de 180 cm y 100 kg.", options: ["1.95 m²", "2.12 m²", "2.24 m²", "2.45 m²"], correct: 2, explanation: "ASC = √(18000 / 3600) = √5 ≈ 2.24 m²." },
      { id: 11, question: "11. (CUSAM Élite) 8 anestesiólogos intuban 40 pacientes en 2 horas. ¿Cuántos pacientes 12 anestesiólogos en 3 horas?", options: ["60 pacientes", "75 pacientes", "90 pacientes", "120 pacientes"], correct: 2, explanation: "Pacientes = 40 × (12/8) × (3/2) = 90 pacientes." },
      { id: 12, question: "12. (CUSAM Élite) Sistema de inecuaciones: 3x - 6 ≥ 0 y -2x + 10 > 0. Intervalo solución:", options: ["[2, 5)", "(2, 5]", "[2, 5]", "(-∞, 5)"], correct: 0, explanation: "[2, 5)." },
      { id: 13, question: "13. (CUSAM Élite) Tanque esférico de oxígeno con diámetro de 60 cm. Capacidad en litros:", options: ["56.5 Litros", "113.1 Litros", "226.2 Litros", "452.4 Litros"], correct: 1, explanation: "V = (4/3)*π*(30)³ = 113.1 Litros." },
      { id: 14, question: "14. (CUSAM Élite) Serie aritmética de pulsaciones: 60, 65, 70, 75... Frecuencia en el término 15:", options: ["120 lpm", "125 lpm", "130 lpm", "135 lpm"], correct: 1, explanation: "a₁₅ = 60 + 14(5) = 130 lpm." },
      { id: 15, question: "15. (CUSAM Élite) Si la probabilidad combinada de éxito de dos procedimientos es 0.48 y el primero tiene 0.80, probabilidad del segundo:", options: ["0.50", "0.60", "0.70", "0.75"], correct: 1, explanation: "0.48 / 0.80 = 0.60." }
    ]
  }
};

const quizzesDataL3 = {
  1: { title: "Banco Nivel 3 - Módulo 1", questions: [] },
  2: { title: "Banco Nivel 3 - Mod 2", questions: [] },
  3: { title: "Banco Nivel 3 - Mod 3", questions: [] },
  4: { title: "Banco Nivel 3 - Mod 4", questions: [] },
  5: { title: "Banco Nivel 3 - Mod 5", questions: [] }
};