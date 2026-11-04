// ==========================================
// MÓDULOS Y BANCOS DE PREGUNTAS - 3 NIVELES COMPLETOS
// ==========================================

// --- NIVEL 1 (COMPLETO CON 7 MÓDULOS Y 10 PREGUNTAS CADA UNO) ---
const modulesDataL1 = {
  1: {
    id: 1, title: "Módulo 1: Aritmética y Operaciones con Decimales",
    colorClass: "bg-blue-600", badgeClass: "bg-blue-100 text-blue-800 border-blue-200",
    topics: ["Ley de Signos", "Suma y Resta de Decimales", "Multiplicación y División"],
    description: "Fundamentos de operaciones numéricas básicas y jerarquía elemental.",
    contentHtml: `
      <div class="space-y-4">
        <h3 class="text-lg font-bold text-slate-800">1. Ley de Signos para la Suma y Multiplicación</h3>
        <p class="text-sm text-slate-600">En la suma, signos iguales se suman y se mantiene el signo; signos diferentes se restan y se coloca el signo del número con mayor valor absoluto. En la multiplicación: (+)×(+)=+, (-)×(-)=+, (+)×(-)=-.</p>
        <h3 class="text-lg font-bold text-slate-800">2. Operaciones con Números Decimales</h3>
        <p class="text-sm text-slate-600">Para sumar o restar decimales, alinea siempre los puntos decimales. Para multiplicar, multiplica los números sin el punto y cuenta los decimales totales en los factores para colocar el punto en el resultado.</p>
      </div>
    `
  },
  2: {
    id: 2, title: "Módulo 2: Fracciones, Porcentajes y Proporciones",
    colorClass: "bg-emerald-600", badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-200",
    topics: ["Suma de Quebrados", "Cálculo de Porcentajes", "Proporcionalidad Directa"],
    description: "Operaciones con fracciones comunes y conversiones porcentuales.",
    contentHtml: `
      <div class="space-y-4">
        <h3 class="text-lg font-bold text-slate-800">1. Operaciones con Fracciones</h3>
        <p class="text-sm text-slate-600">Para sumar fracciones con distinto denominador, utiliza el Mínimo Común Múltiplo (MCM). Para multiplicar, hazlo de forma directa: numerador por numerador y denominador por denominador.</p>
        <h3 class="text-lg font-bold text-slate-800">2. Porcentajes</h3>
        <p class="text-sm text-slate-600">Un porcentaje representa una porción de 100. Para calcular el X% de una cantidad N, multiplica N por (X / 100).</p>
      </div>
    `
  },
  3: {
    id: 3, title: "Módulo 3: Potencias, Raíces y Jerarquía",
    colorClass: "bg-amber-600", badgeClass: "bg-amber-100 text-amber-800 border-amber-200",
    topics: ["Leyes de Exponentes", "Radicación", "PEMDAS / Jerarquía"],
    description: "Leyes de potencias y orden estricto de operaciones combinadas.",
    contentHtml: `
      <div class="space-y-4">
        <h3 class="text-lg font-bold text-slate-800">1. Leyes de Exponentes</h3>
        <p class="text-sm text-slate-600">Multiplicación de bases iguales: se suman exponentes (a^m · a^n = a^(m+n)). División de bases iguales: se restan exponentes.</p>
        <h3 class="text-lg font-bold text-slate-800">2. Jerarquía de Operaciones (PEMDAS)</h3>
        <p class="text-sm text-slate-600">1. Paréntesis y signos de agrupación. 2. Potencias y raíces. 3. Multiplicaciones y divisiones (de izquierda a derecha). 4. Sumas y restas.</p>
      </div>
    `
  },
  4: {
    id: 4, title: "Módulo 4: Álgebra e Inecuaciones",
    colorClass: "bg-purple-600", badgeClass: "bg-purple-100 text-purple-800 border-purple-200",
    topics: ["Despeje de Fórmulas", "Ecuaciones de Primer Grado", "Inecuaciones Simples"],
    description: "Manipulación de expresiones algebraicas y despeje de incógnitas.",
    contentHtml: `
      <div class="space-y-4">
        <h3 class="text-lg font-bold text-slate-800">1. Despeje de Variables</h3>
        <p class="text-sm text-slate-600">Todo término que suma pasa a restar al otro lado de la igualdad; lo que multiplica pasa a dividir, respetando la balanza algebraica.</p>
        <h3 class="text-lg font-bold text-slate-800">2. Inecuaciones</h3>
        <p class="text-sm text-slate-600">Se resuelven igual que las ecuaciones, con la salvedad de que si multiplicas o divides ambos lados por un número negativo, el sentido de la desigualdad se invierte.</p>
      </div>
    `
  },
  5: {
    id: 5, title: "Módulo 5: Regla de Tres y Conjuntos",
    colorClass: "bg-rose-600", badgeClass: "bg-rose-100 text-rose-800 border-rose-200",
    topics: ["Regla de Tres Simple", "Regla de Tres Inversa", "Diagramas de Venn"],
    description: "Proporcionalidad directa/inversa y teoría básica de conjuntos.",
    contentHtml: `
      <div class="space-y-4">
        <h3 class="text-lg font-bold text-slate-800">1. Regla de Tres Simple Directa</h3>
        <p class="text-sm text-slate-600">Si A es a B como C es a X, entonces X = (B · C) / A cuando las magnitudes crecen o decrecen juntas.</p>
        <h3 class="text-lg font-bold text-slate-800">2. Diagramas de Venn</h3>
        <p class="text-sm text-slate-600">Herramienta visual para agrupar elementos y resolver problemas de intersecciones y uniones de conjuntos.</p>
      </div>
    `
  },
  6: {
    id: 6, title: "Módulo 6: Geometría y Recta Numérica",
    colorClass: "bg-cyan-600", badgeClass: "bg-cyan-100 text-cyan-800 border-cyan-200",
    topics: ["Teorema de Pitágoras", "Áreas y Perímetros", "Coordenadas en la Recta"],
    description: "Cálculos geométricos fundamentales y distancias.",
    contentHtml: `
      <div class="space-y-4">
        <h3 class="text-lg font-bold text-slate-800">1. Teorema de Pitágoras</h3>
        <p class="text-sm text-slate-600">En todo triángulo rectángulo, el cuadrado de la hipotenusa es igual a la suma de los cuadrados de los catetos: c² = a² + b².</p>
        <h3 class="text-lg font-bold text-slate-800">2. Áreas Básicas</h3>
        <p class="text-sm text-slate-600">Área del triángulo = (base × altura) / 2. Área del círculo = π · r².</p>
      </div>
    `
  },
  7: {
    id: 7, title: "Módulo 7: Gráficas, Series y Lógica",
    colorClass: "bg-red-600", badgeClass: "bg-red-100 text-red-800 border-red-200",
    topics: ["Interpretación de Gráficas", "Sucesiones Numéricas", "Lógica Proposicional"],
    description: "Razonamiento lógico, secuencias y lectura estadística.",
    contentHtml: `
      <div class="space-y-4">
        <h3 class="text-lg font-bold text-slate-800">1. Sucesiones Numéricas</h3>
        <p class="text-sm text-slate-600">Identificación de patrones aritméticos (suma/resta constante) o geométricos (multiplicación/división constante).</p>
        <h3 class="text-lg font-bold text-slate-800">2. Lógica Formal</h3>
        <p class="text-sm text-slate-600">Evaluación de premisas y conclusiones mediante silogismos y reglas de inferencia básica.</p>
      </div>
    `
  }
};

const quizzesDataL1 = {
  1: {
    title: "Evaluación - Módulo 1",
    questions: [
      { id: 1, question: "Resuelve: -14 - 6 × (-3) + (-8) ÷ 2", options: ["-8", "0", "4", "8"], correct: 1, explanation: "Primero multiplicaciones y divisiones: 6×(-3) = -18, (-8)÷2 = -4. Queda: -14 - (-18) + (-4) = -14 + 18 - 4 = 0." },
      { id: 2, question: "Calcule la suma de 45.62 + 8.9 - 12.35", options: ["41.17", "42.17", "43.17", "44.17"], correct: 1, explanation: "Sumamos 45.62 + 8.9 = 54.52. Luego restamos 54.52 - 12.35 = 42.17." },
      { id: 3, question: "¿Cuál es el resultado de multiplicar 3.5 por 2.4?", options: ["7.2", "8.4", "9.0", "8.6"], correct: 1, explanation: "35 × 24 = 840. Como hay dos decimales en total, el resultado es 8.40 u 8.4." },
      { id: 4, question: "Resuelve aplicando ley de signos: (-5) × (-4) + (-20) ÷ 5", options: ["12", "16", "20", "24"], correct: 1, explanation: "(-5)×(-4) = 20. (-20)÷5 = -4. Operando: 20 + (-4) = 16." },
      { id: 5, question: "Determine el valor de: |-18| + |-7| - |12 - 25|", options: ["5", "12", "15", "18"], correct: 1, explanation: "|-18| = 18, |-7| = 7, |12 - 25| = |-13| = 13. Operando: 18 + 7 - 13 = 12." },
      { id: 6, question: "Divida 144.6 entre 1.2", options: ["110.5", "120.5", "125.5", "130.5"], correct: 1, explanation: "Multiplicamos ambos por 10: 1446 ÷ 12 = 120.5." },
      { id: 7, question: "Resuelve: -(-8) + [ -3 + (-5) ]", options: ["0", "2", "8", "16"], correct: 0, explanation: " -(-8) = 8. Dentro del corchete: -3 - 5 = -8. Queda: 8 + (-8) = 0." },
      { id: 8, question: "Si a = -3 y b = 4, ¿cuál es el valor de 2a² - 3ab?", options: ["48", "54", "60", "72"], correct: 1, explanation: "2(-3)² - 3(-3)(4) = 2(9) - (-36) = 18 + 36 = 54." },
      { id: 9, question: "Reste -24.5 de 12.3", options: ["-36.8", "-12.2", "12.2", "36.8"], correct: 3, explanation: "Planteamiento: 12.3 - (-24.5) = 12.3 + 24.5 = 36.8." },
      { id: 10, question: "Resultado de: ( -2 )³ × ( -3 )²", options: ["-72", "-36", "36", "72"], correct: 0, explanation: "(-2)³ = -8 y (-3)² = 9. Multiplicando: -8 × 9 = -72." }
    ]
  },
  2: {
    title: "Evaluación - Módulo 2",
    questions: [
      { id: 1, question: "Resuelve la suma de fracciones: 1/4 + 3/5", options: ["4/9", "17/20", "7/10", "13/20"], correct: 1, explanation: "MCM de 4 y 5 es 20. (5/20) + (12/20) = 17/20." },
      { id: 2, question: "¿Cuánto es el 35% de 240?", options: ["74", "80", "84", "90"], correct: 2, explanation: "240 × 0.35 = 84." },
      { id: 3, question: "Multiplique las fracciones: (2/3) × (9/10)", options: ["3/5", "18/30", "9/15", "6/9"], correct: 0, explanation: "(2×9) / (3×10) = 18/30. Simplificando entre 6 da 3/5." },
      { id: 4, question: "Si una camisa cuesta $80 y tiene un descuento del 20%, ¿cuál es su precio final?", options: ["$58", "$60", "$64", "$68"], correct: 2, explanation: "Descuento = 80 × 0.20 = 16. Precio final = 80 - 16 = $64." },
      { id: 5, question: "Resuelve la división de fracciones: (3/4) ÷ (5/8)", options: ["12/20", "6/5", "15/32", "5/6"], correct: 1, explanation: "(3/4) × (8/5) = 24/20 = 6/5." },
      { id: 6, question: "¿Qué porcentaje de 50 es 15?", options: ["20%", "25%", "30%", "35%"], correct: 2, explanation: "(15 / 50) × 100 = 0.30 × 100 = 30%." },
      { id: 7, question: "Resuelve: 2 + 1/3", options: ["3/3", "7/3", "5/3", "8/3"], correct: 1, explanation: "2 se expresa como 6/3. 6/3 + 1/3 = 7/3." },
      { id: 8, question: "Encuentre el número cuyo 15% es 45", options: ["250", "300", "350", "400"], correct: 1, explanation: "X × 0.15 = 45 → X = 45 / 0.15 = 300." },
      { id: 9, question: "Simplifique la fracción 84/126 a su mínima expresión", options: ["2/3", "3/4", "4/7", "5/8"], correct: 0, explanation: "Dividiendo numerador y denominador entre su máximo común divisor (42) se obtiene 2/3." },
      { id: 10, question: "Sume: 1.5 + 3/4 en formato decimal", options: ["2.00", "2.15", "2.25", "2.50"], correct: 2, explanation: "3/4 = 0.75. Sumando: 1.5 + 0.75 = 2.25." }
    ]
  },
  3: {
    title: "Evaluación - Módulo 3",
    questions: [
      { id: 1, question: "Resuelve usando jerarquía: 15 - 3 × (2 + 4) ÷ 2", options: ["4", "6", "9", "12"], correct: 1, explanation: "1. Paréntesis: (2+4)=6. 2. Multiplicación/División: 3×6÷2 = 9. 3. Resta: 15 - 9 = 6." },
      { id: 2, question: "Simplifique: (2³)⁴", options: ["2^7", "2^12", "8^4", "4^6"], correct: 1, explanation: "Potencia de potencia: se multiplican los exponentes (3 × 4 = 12). Resultado: 2^12." },
      { id: 3, question: "Calcule la raíz cuadrada exacta: √[ 144 + 25 ]", options: ["13", "17", "19", "21"], correct: 0, explanation: "Primero la suma dentro del radical: 144 + 25 = 169. Raíz cuadrada de 169 es 13." },
      { id: 4, question: "Resuelve: 5² - 3² + 2³", options: ["20", "24", "28", "32"], correct: 1, explanation: "25 - 9 + 8 = 16 + 8 = 24." },
      { id: 5, question: "Simplifique la división de potencias: (5^7) / (5^4)", options: ["5^3", "5^28", "1^3", "25^3"], correct: 0, explanation: "División de bases iguales: se restan exponentes (7 - 4 = 3). Queda 5^3." },
      { id: 6, question: "Resuelve: 4 + 6 × 3 - 8 ÷ 2", options: ["16", "18", "20", "22"], correct: 0, explanation: "4 + 18 - 4 = 18." },
      { id: 7, question: "¿Cuál es el valor de 3⁰ + 2³ + 1^50?", options: ["8", "9", "10", "11"], correct: 2, explanation: "1 + 8 + 1 = 10." },
      { id: 8, question: "Calcule: ³√64 + √81", options: ["11", "13", "15", "17"], correct: 1, explanation: "³√64 = 4 y √81 = 9. Suma: 4 + 9 = 13." },
      { id: 9, question: "Resuelve: 20 ÷ [ 5 - ( -3 ) ]", options: ["2.0", "2.5", "3.0", "4.0"], correct: 1, explanation: "Paréntesis: 5 - (-3) = 8. División: 20 ÷ 8 = 2.5." },
      { id: 10, question: "Simplifique: (2 × 3)²", options: ["12", "18", "36", "64"], correct: 2, explanation: "(6)² = 36." }
    ]
  },
  4: {
    title: "Evaluación - Módulo 4",
    questions: [
      { id: 1, question: "Despeje x en la ecuación: 3x - 7 = 14", options: ["x = 5", "x = 7", "x = 9", "x = 21/3"], correct: 1, explanation: "3x = 14 + 7 → 3x = 21 → x = 7." },
      { id: 2, question: "Resuelve la inecuación: 2x + 5 < 15", options: ["x < 5", "x > 5", "x < 10", "x > 10"], correct: 0, explanation: "2x < 10 → x < 5." },
      { id: 3, question: "Despeje la variable v de la fórmula física: d = v · t", options: ["v = d · t", "v = t / d", "v = d / t", "v = d - t"], correct: 2, explanation: "El tiempo t pasa dividiendo: v = d / t." },
      { id: 4, question: "Resuelve el sistema lineal simple: x + y = 10 y x - y = 4", options: ["x=6, y=4", "x=7, y=3", "x=8, y=2", "x=5, y=5"], correct: 1, explanation: "Sumando ambas ecuaciones: 2x = 14 → x = 7. Sustituyendo: y = 3." },
      { id: 5, question: "Resuelva la inecuación con cambio de signo: -3x + 12 ≥ 0", options: ["x ≥ 4", "x ≤ 4", "x ≥ -4", "x ≤ -4"], correct: 1, explanation: "-3x ≥ -12. Al dividir entre -3, se invierte el signo: x ≤ 4." },
      { id: 6, question: "Encuentre el valor de x: 5(x - 2) = 3(x + 4)", options: ["x = 7", "x = 9", "x = 11", "x = 13"], correct: 2, explanation: "5x - 10 = 3x + 12 → 2x = 22 → x = 11." },
      { id: 7, question: "Despeje r de la ecuación de área del círculo: A = π r²", options: ["r = A / π", "r = √(A/π)", "r = A² / π", "r = π / A"], correct: 1, explanation: "r² = A/π → r = √(A/π)." },
      { id: 8, question: "Resuelva: (x / 3) + 4 = 9", options: ["x = 9", "x = 12", "x = 15", "x = 18"], correct: 2, explanation: "x / 3 = 5 → x = 15." },
      { id: 9, question: "Conjunto solución de la inecuación: |x - 3| ≤ 2", options: ["[-1, 5]", "[1, 5]", "(-2, 2)", "[0, 6]"], correct: 1, explanation: "-2 ≤ x - 3 ≤ 2. Sumando 3 en todos los miembros: 1 ≤ x ≤ 5." },
      { id: 10, question: "Si 4x + 8 = 2x + 20, ¿cuánto vale x?", options: ["4", "6", "8", "10"], correct: 1, explanation: "2x = 12 → x = 6." }
    ]
  },
  5: {
    title: "Evaluación - Módulo 5",
    questions: [
      { id: 1, question: "Si 3 obreros construyen un muro en 12 días, ¿cuántos días tardarán 9 obreros?", options: ["2 días", "3 días", "4 días", "6 días"], correct: 2, explanation: "Regla de tres inversa: (3 obreros × 12 días) / 9 obreros = 36 / 9 = 4 días." },
      { id: 2, question: "En un grupo de 50 estudiantes, 30 juegan fútbol, 25 básquetbol y 10 ambos. ¿Cuántos no juegan ninguno?", options: ["3", "5", "8", "10"], correct: 1, explanation: "Fútbol solo = 30-10=20. Básquetbol solo = 25-10=15. Ambos = 10. Total que juegan = 20+15+10 = 45. Ninguno = 50 - 45 = 5." },
      { id: 3, question: "Si 5 litros de gasolina cuestan $25, ¿cuánto costarán 12 litros?", options: ["$50", "$55", "$60", "$65"], correct: 2, explanation: "Directa: (12 × 25) / 5 = 300 / 5 = $60." },
      { id: 4, question: "En una encuesta a 100 personas, 60 leen la revista A y 40 la revista B. Si 20 leen ambas, ¿cuántas leen solo la revista A?", options: ["20", "30", "40", "50"], correct: 2, explanation: "Solo A = Total A - Intersección = 60 - 20 = 40." },
      { id: 5, question: "Un automóvil recorre 180 km en 3 horas a velocidad constante. ¿Qué distancia recorrerá en 5 horas?", options: ["250 km", "280 km", "300 km", "320 km"], correct: 2, explanation: "(5 × 180) / 3 = 300 km." },
      { id: 6, question: "Si 8 máquinas producen 120 piezas en 4 horas, ¿cuántas piezas producen 4 máquinas en 6 horas?", options: ["90 piezas", "100 piezas", "110 piezas", "120 piezas"], correct: 0, explanation: "Regla compuesta: (120 × (4/8) × (6/4)) = 120 × 0.5 × 1.5 = 90 piezas." },
      { id: 7, question: "¿Cuál es la intersección de los conjuntos A = {1, 2, 3, 4} y B = {3, 4, 5, 6}?", options: ["{1, 2}", "{3, 4}", "{1, 2, 5, 6}", "{1, 2, 3, 4, 5, 6}"], correct: 1, explanation: "Elementos comunes en ambos conjuntos: {3, 4}." },
      { id: 8, question: "Si 12 hombres hacen una obra en 15 días, ¿en cuántos días harán la misma obra 20 hombres?", options: ["8 días", "9 días", "10 días", "12 días"], correct: 1, explanation: "(12 × 15) / 20 = 180 / 20 = 9 días." },
      { id: 9, question: "Un grifo arroja 30 litros de agua en 5 minutos. ¿Cuántos litros arrojará en un cuarto de hora?", options: ["75 litros", "90 litros", "105 litros", "120 litros"], correct: 1, explanation: "15 min = 3 bloques de 5 min. 30 × 3 = 90 litros." },
      { id: 10, question: "Conjunto universal U = {1,2,3,4,5,6,7,8}. Si A = {2,4,6,8}, ¿cuál es el complemento A'?", options: ["{1,3,5,7}", "{2,4,6,8}", "{1,2,3,4}", "{5,6,7,8}"], correct: 0, explanation: "Elementos de U que no están en A: {1, 3, 5, 7}." }
    ]
  },
  6: {
    title: "Evaluación - Módulo 6",
    questions: [
      { id: 1, question: "Calcule la hipotenusa de un triángulo rectángulo cuyos catetos miden 6 cm y 8 cm", options: ["9 cm", "10 cm", "12 cm", "14 cm"], correct: 1, explanation: "c = √(6² + 8²) = √(36 + 64) = √100 = 10 cm." },
      { id: 2, question: "¿Cuál es el área de un círculo cuyo radio mide 7 cm? (Use π ≈ 22/7)", options: ["144 cm²", "154 cm²", "164 cm²", "174 cm²"], correct: 1, explanation: "Área = π · r² = (22/7) · 7² = 22 × 7 = 154 cm²." },
      { id: 3, question: "En un triángulo rectángulo, si la hipotenusa es 13 cm y un cateto mide 5 cm, ¿cuánto mide el otro cateto?", options: ["10 cm", "11 cm", "12 cm", "14 cm"], correct: 2, explanation: "b = √(13² - 5²) = √(169 - 25) = √144 = 12 cm." },
      { id: 4, question: "Calcule el área de un triángulo con base de 12 cm y altura de 7 cm", options: ["36 cm²", "42 cm²", "48 cm²", "84 cm²"], correct: 1, explanation: "Área = (12 × 7) / 2 = 84 / 2 = 42 cm²." },
      { id: 5, question: "¿Cuál es el perímetro de un rectángulo que mide 15 cm de largo y 8 cm de ancho?", options: ["40 cm", "46 cm", "50 cm", "60 cm"], correct: 1, explanation: "Perímetro = 2(largo + ancho) = 2(15 + 8) = 2(23) = 46 cm." },
      { id: 6, question: "Calcule la distancia entre los puntos en la recta numérica: -5 y 12", options: ["7", "12", "17", "24"], correct: 2, explanation: "Distancia = |12 - (-5)| = 12 + 5 = 17." },
      { id: 7, question: "El volumen de un cubo cuya arista mide 5 cm es:", options: ["75 cm³", "100 cm³", "125 cm³", "150 cm³"], correct: 2, explanation: "Volumen = arista³ = 5³ = 125 cm³." },
      { id: 8, question: "¿Cuánto mide el área de un trapecio con bases de 8 cm y 12 cm, y altura de 5 cm?", options: ["40 cm²", "50 cm²", "60 cm²", "70 cm²"], correct: 1, explanation: "Área = [(8 + 12) / 2] × 5 = [20 / 2] × 5 = 10 × 5 = 50 cm²." },
      { id: 9, question: "Si el diámetro de una circunferencia es 20 cm, su longitud (perímetro) es: (Use π ≈ 3.14)", options: ["31.4 cm", "62.8 cm", "125.6 cm", "314.0 cm"], correct: 1, explanation: "Longitud = π · diámetro = 3.14 × 20 = 62.8 cm." },
      { id: 10, question: "Encuentre el valor de x si los puntos 3 y x distan 7 unidades (x > 3)", options: ["7", "9", "10", "12"], correct: 2, explanation: "x - 3 = 7 → x = 10." }
    ]
  },
  7: {
    title: "Evaluación - Módulo 7",
    questions: [
      { id: 1, question: "Encuentre el siguiente término en la sucesión: 3, 6, 12, 24, ...", options: ["36", "42", "48", "54"], correct: 2, explanation: "Cada término se multiplica por 2. El siguiente es 24 × 2 = 48." },
      { id: 2, question: "Dada la sucesión aritmética: 5, 9, 13, 17, ... ¿Cuál es el décimo término (a₁₀)?", options: ["37", "41", "45", "49"], correct: 1, explanation: "Fórmula: a_n = a₁ + (n-1)d = 5 + (9)(4) = 5 + 36 = 41." },
      { id: 3, question: "Premisa 1: Todos los médicos estudian anatomía. Premisa 2: Juan estudia anatomía. Conclusión lógica:", options: ["Juan es médico", "Juan no es médico", "No se puede concluir con certeza que sea médico", "Juan estudia física"], correct: 2, explanation: "Falacia de afirmación del consecuente; estudiar anatomía no hace necesariamente médico a alguien de forma exclusiva." },
      { id: 4, question: "Encuentre el número que completa la serie: 2, 5, 10, 17, 26, ...", options: ["35", "37", "40", "45"], correct: 1, explanation: "Diferencias sucesivas: +3, +5, +7, +9. La siguiente diferencia es +11. 26 + 11 = 37." },
      { id: 5, question: "Si se lanzan dos dados legales, ¿cuál es la probabilidad de que la suma sea exactamente 7?", options: ["1/6", "1/9", "5/36", "7/36"], correct: 0, explanation: "Casos favorables: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) → 6 casos de 36 totales. 6/36 = 1/6." },
      { id: 6, question: "Identifique la figura que no guarda relación con las demás en una serie lógica geométrica de patrones crecientes:", options: ["Cuadrado con 4 lados", "Pentágono con 5 lados", "Hexágono con 6 lados", "Círculo con 4 lados"], correct: 3, explanation: "El círculo no posee lados rectos ni sigue la progresión poligonal." },
      { id: 7, question: "Premisa: Ningún número par es primo mayor que 2. El número 8 es par. Conclusión:", options: ["El número 8 es primo", "El número 8 no es primo mayor que 2", "El número 8 es impar", "No se puede determinar"], correct: 1, explanation: "Por Modus Ponens directo a partir de las premisas dadas." },
      { id: 8, question: "En una progresión geométrica, el primer término es 3 y la razón es 2. ¿Cuál es el quinto término?", options: ["24", "32", "48", "96"], correct: 2, explanation: "a_n = a₁ · r^(n-1) = 3 · 2⁴ = 3 · 16 = 48." },
      { id: 9, question: "¿Cuál es la suma de los primeros 10 términos de la serie aritmética: 2, 4, 6, 8, ...?", options: ["90", "100", "110", "120"], correct: 1, explanation: "Suma = n/2 · (a₁ + a_10) = 10/2 · (2 + 20) = 5 · 22 = 110." },
      { id: 10, question: "Si la probabilidad de que llueva hoy es 0.35, ¿cuál es la probabilidad de que no llueva?", options: ["0.35", "0.50", "0.65", "0.75"], correct: 2, explanation: "P(no evento) = 1 - 0.35 = 0.65." }
    ]
  }
};

// --- NIVEL 2 (MÓDULO 1 COMPLETO CON 3 EJEMPLOS Y 20 PREGUNTAS EN BANCO) ---
const modulesDataL2 = {
  1: {
    id: 1, title: "Módulo 1 (Nivel 2): Razonamiento Aritmético y Dosis Clínicas",
    colorClass: "bg-blue-800", badgeClass: "bg-blue-900 text-blue-200 border-blue-700",
    topics: ["Infusiones Continuas", "Conversiones de Unidades", "Flujo de Goteo"],
    description: "Cálculo aritmético avanzado aplicado a velocidades de infusión y dosificación.",
    contentHtml: `
      <div class="space-y-4">
        <h3 class="text-lg font-bold text-slate-800">Ejemplo 1: Cálculo de velocidad en bomba de infusión (ml/h)</h3>
        <p class="text-sm text-slate-600"><strong>Planteamiento:</strong> Un paciente de 75 kg debe recibir dopamina a razón de 2 mg/min. La concentración disponible es de 20 mg/ml.<br><strong>Resolución:</strong><br>1. Calculamos la dosis horaria: $2\text{ mg/min} \times 60\text{ min} = 120\text{ mg/h}$.<br>2. Dividimos entre la concentración: $120\text{ mg/h} \div 20\text{ mg/ml} = 6.0\text{ ml/h}$.</p>
        
        <h3 class="text-lg font-bold text-slate-800">Ejemplo 2: Cálculo de goteo manual (gtt/min)</h3>
        <p class="text-sm text-slate-600"><strong>Planteamiento:</strong> Administrar 500 ml de solución salina en 8 horas usando un equipo de macrogoteo (20 gtt/ml).<br><strong>Resolución:</strong><br>1. Convertimos el tiempo a minutos: $8\text{ horas} \times 60 = 480\text{ min}$.<br>2. Aplicamos la fórmula: $\frac{500\text{ ml} \times 20\text{ gtt/ml}}{480\text{ min}} = \frac{10000}{480} \approx 20.83\text{ gtt/min}$ (se ajusta a 21 gtt/min).</p>

        <h3 class="text-lg font-bold text-slate-800">Ejemplo 3: Conversión de unidades de masa y volumen</h3>
        <p class="text-sm text-slate-600"><strong>Planteamiento:</strong> ¿Cuántos miligramos hay en 3.5 gramos de un soluto si se diluyen en 250 ml?<br><strong>Resolución:</strong><br>1. Convertimos gramos a miligramos multiplicando por 1000: $3.5\text{ g} \times 1000 = 3500\text{ mg}$.<br>2. La concentración resultante es $\frac{3500\text{ mg}}{250\text{ ml}} = 14\text{ mg/ml}$.</p>
      </div>
    `
  },
  2: {
  id: 2, title: "Módulo 2 (Nivel 2): Proporciones Clínicas Complejas",
  colorClass: "bg-emerald-800", badgeClass: "bg-emerald-900 text-emerald-200 border-emerald-700",
  topics: ["Concentraciones Percentuales", "Diluciones y Mezclas", "Factores de Proporción"],
  description: "Resolución avanzada de problemas de mezclas de soluciones, porcentajes y diluciones.",
  contentHtml: `
    <div class="space-y-4">
      <h3 class="text-lg font-bold text-slate-800">Ejemplo 1: Mezcla de dos soluciones con diferente porcentaje</h3>
      <p class="text-sm text-slate-600"><strong>Planteamiento:</strong> Se mezclan 300 ml de una solución al 5% con 200 ml de una solución al 10%. ¿Cuál es el porcentaje final de la mezcla?<br><strong>Resolución:</strong><br>1. Calculamos el soluto de la primera solución: $300\text{ ml} \times 0.05 = 15\text{ g}$.<br>2. Calculamos el soluto de la segunda solución: $200\text{ ml} \times 0.10 = 20\text{ g}$.<br>3. Sumamos solutos ($15 + 20 = 35\text{ g}$) y volúmenes ($300 + 200 = 500\text{ ml}$).<br>4. Hallamos el porcentaje final: $\frac{35\text{ g}}{500\text{ ml}} \times 100 = 7.0\%$.</p>
      
      <h3 class="text-lg font-bold text-slate-800">Ejemplo 2: Preparación de diluciones por ley de conservación ($C_1V_1 = C_2V_2$)</h3>
      <p class="text-sm text-slate-600"><strong>Planteamiento:</strong> ¿Cuántos mililitros de una solución concentrada al 20% se necesitan para preparar 500 ml de una solución al 4%?<br><strong>Resolución:</strong><br>1. Aplicamos la fórmula: $C_1 \cdot V_1 = C_2 \cdot V_2$.<br>2. Sustituimos: $20\% \cdot V_1 = 4\% \cdot 500\text{ ml}$.<br>3. Despejamos $V_1$: $V_1 = \frac{2000}{20} = 100\text{ ml}$ de solución concentrada a diluir en 400 ml de agua estéril.</p>

      <h3 class="text-lg font-bold text-slate-800">Ejemplo 3: Conversión de relación peso/volumen (p/v) a concentración en mg/ml</h3>
      <p class="text-sm text-slate-600"><strong>Planteamiento:</strong> Una ampolla de glucosa se encuentra al 10% p/v en un volumen de 20 ml. ¿Cuántos miligramos totales de glucosa contiene?<br><strong>Resolución:</strong><br>1. Una concentración al 10% significa que hay $10\text{ g}$ de soluto por cada $100\text{ ml}$ ($100\text{ mg/ml}$).<br>2. Multiplicamos la concentración por el volumen total: $100\text{ mg/ml} \times 20\text{ ml} = 2000\text{ mg}$ ($2\text{ g}$).</p>
    </div>
  `
},
  3: { id: 3, title: "Módulo 3 (Nivel 2): Exponentes y Crecimiento", colorClass: "bg-amber-800", badgeClass: "bg-amber-900 text-amber-200 border-amber-700", topics: ["Duplicación", "Semivida"], description: "Potencias aplicadas.", contentHtml: `<div class="space-y-4"><p class="text-sm text-slate-600">Contenido en desarrollo...</p></div>` },
  4: { id: 4, title: "Módulo 4 (Nivel 2): Modelado de Inecuaciones", colorClass: "bg-purple-800", badgeClass: "bg-purple-900 text-purple-200 border-purple-700", topics: ["Ventana Terapéutica", "Sistemas"], description: "Inecuaciones avanzadas.", contentHtml: `<div class="space-y-4"><p class="text-sm text-slate-600">Contenido en desarrollo...</p></div>` },
  5: { id: 5, title: "Módulo 5 (Nivel 2): Regla de Tres Compuesta y Venn Avanzado", colorClass: "bg-rose-800", badgeClass: "bg-rose-900 text-rose-200 border-rose-700", topics: ["Regla Compuesta", "Venn 3 Conjuntos"], description: "Análisis multivariable.", contentHtml: `<div class="space-y-4"><p class="text-sm text-slate-600">Contenido en desarrollo...</p></div>` },
  6: { id: 6, title: "Módulo 6 (Nivel 2): Optimización Geométrica", colorClass: "bg-cyan-800", badgeClass: "bg-cyan-900 text-cyan-200 border-cyan-700", topics: ["Pitágoras 3D", "Volúmenes"], description: "Geometría espacial.", contentHtml: `<div class="space-y-4"><p class="text-sm text-slate-600">Contenido en desarrollo...</p></div>` },
  7: { id: 7, title: "Módulo 7 (Nivel 2): Análisis Estadístico y Lógica", colorClass: "bg-red-800", badgeClass: "bg-red-900 text-red-200 border-red-700", topics: ["Probabilidad Condicional", "Silogismos"], description: "Estadística y lógica formal.", contentHtml: `<div class="space-y-4"><p class="text-sm text-slate-600">Contenido en desarrollo...</p></div>` },
  8: { 
    id: 8, title: "Módulo 8 (Nivel 2): Simulador Oficial de Examen General", colorClass: "bg-indigo-900", badgeClass: "bg-indigo-950 text-indigo-200 border-indigo-800",
    topics: ["Simulador Cronometrado", "30 Minutos", "15 Preguntas"],
    description: "Evaluación integradora cronometrada que desbloquea el Nivel 3.",
    contentHtml: `<div class="space-y-6"><div class="bg-indigo-950 text-white p-6 rounded-xl border border-indigo-800 space-y-4 shadow-md"><h4 class="font-bold text-lg text-amber-400">Simulador Oficial de Examen General</h4><p class="text-xs text-indigo-200">Prueba clave para comprobar tu preparación y desbloquear el Nivel 3.</p></div></div>`
  }
};

// Banco de 20 preguntas para el Módulo 1 (de las cuales el sistema toma 10 aleatorias)
const quizzesDataL2 = {
  1: {
    title: "Banco Nivel 2 - Módulo 1 (20 Preguntas)",
    questions: [
      { id: 1, question: "Paciente de 75 kg recibe infusión de dopamina a 2 mg/min. Concentración: 20 mg/ml. Velocidad en ml/h:", options: ["4.5 ml/h", "6.0 ml/h", "7.5 ml/h", "9.0 ml/h"], correct: 1, explanation: "120 mg/h / 20 mg/ml = 6.0 ml/h." },
      { id: 2, question: "Calcule el goteo para 500 ml en 8 horas con factor 20 gtt/ml:", options: ["18 gtt/min", "21 gtt/min", "25 gtt/min", "28 gtt/min"], correct: 1, explanation: "(500 × 20) / 480 ≈ 21 gtt/min." },
      { id: 3, question: "Si se administran 1000 ml de solución en 12 horas con microgotero (60 gtt/ml), el goteo es:", options: ["75 gtt/min", "83.3 gtt/min", "90 gtt/min", "100 gtt/min"], correct: 1, explanation: "(1000 × 60) / 720 = 60000 / 720 = 83.3 gtt/min." },
      { id: 4, question: "Un fármaco viene en presentación de 500 mg en 10 ml. ¿Cuántos mg hay en 3 ml?", options: ["100 mg", "150 mg", "200 mg", "250 mg"], correct: 1, explanation: "Concentración = 50 mg/ml. 50 × 3 = 150 mg." },
      { id: 5, question: "Transforme 45 mcg a miligramos (mg):", options: ["0.045 mg", "0.45 mg", "4.5 mg", "45 mg"], correct: 0, explanation: "1 mg = 1000 mcg. 45 / 1000 = 0.045 mg." },
      { id: 6, question: "Si la velocidad de infusión es de 45 ml/h y el equipo pasa 1 ml en 20 gotas, ¿cuál es el goteo?", options: ["12 gtt/min", "15 gtt/min", "18 gtt/min", "21 gtt/min"], correct: 1, explanation: "(45 × 20) / 60 = 900 / 60 = 15 gtt/min." },
      { id: 7, question: "Un paciente recibe 0.5 mcg/kg/min de un inotrópico. Pesa 80 kg. Dosis total por minuto:", options: ["20 mcg/min", "40 mcg/min", "60 mcg/min", "80 mcg/min"], correct: 1, explanation: "0.5 × 80 = 40 mcg/min." },
      { id: 8, question: "Convierta 2.5 litros a mililitros:", options: ["250 ml", "2500 ml", "25000 ml", "25 ml"], correct: 1, explanation: "2.5 × 1000 = 2500 ml." },
      { id: 9, question: "Si una infusión dura 6 horas a 80 ml/h, ¿cuál es el volumen total infundido?", options: ["360 ml", "420 ml", "480 ml", "540 ml"], correct: 2, explanation: "80 × 6 = 480 ml." },
      { id: 10, question: "Una ampolla tiene 40 mg en 2 ml. Se requieren 60 mg. ¿Cuántos ml se deben administrar?", options: ["2.0 ml", "2.5 ml", "3.0 ml", "3.5 ml"], correct: 2, explanation: "20 mg/ml. 60 / 20 = 3.0 ml." },
      { id: 11, question: "Calcule la velocidad para pasar 250 ml en 4 horas:", options: ["55.5 ml/h", "62.5 ml/h", "70.0 ml/h", "75.5 ml/h"], correct: 1, explanation: "250 / 4 = 62.5 ml/h." },
      { id: 12, question: "Si 1 gramo equivale a 1,000,000 de microgramos, ¿cuántos mcg hay en 0.02 g?", options: ["200 mcg", "2,000 mcg", "20,000 mcg", "200,000 mcg"], correct: 2, explanation: "0.02 × 1,000,000 = 20,000 mcg." },
      { id: 13.0, question: "Un frasco contiene 100 ml de solución al 5%. ¿Cuántos gramos de soluto contiene?", options: ["2.5 g", "5.0 g", "7.5 g", "10.0 g"], correct: 1, explanation: "5% significa 5 g por cada 100 ml." },
      { id: 14, question: "Si un equipo entrega 15 gtt/ml, ¿cuántas gotas hay en 100 ml?", options: ["1,200 gtt", "1,500 gtt", "1,800 gtt", "2,000 gtt"], correct: 1, explanation: "100 × 15 = 1,500 gotas." },
      { id: 15, question: "Paciente pesa 60 kg. Dosis pautada: 4 mg/kg/día. Dosis total diaria:", options: ["120 mg", "180 mg", "240 mg", "300 mg"], correct: 2, explanation: "60 × 4 = 240 mg/día." },
      { id: 16, question: "Dividiendo la dosis anterior en cada 8 horas (3 veces al día), la dosis por toma es:", options: ["60 mg", "80 mg", "100 mg", "120 mg"], correct: 1, explanation: "240 / 3 = 80 mg." },
      { id: 17, question: "Si se pasan 50 ml en 30 minutos en bomba, la velocidad programada es:", options: ["50 ml/h", "75 ml/h", "100 ml/h", "120 ml/h"], correct: 2, explanation: "50 ml en 0.5 h = 100 ml/h." },
      { id: 18, question: "Conversión: 750 miligramos a gramos:", options: ["0.075 g", "0.75 g", "7.5 g", "75 g"], correct: 1, explanation: "750 / 1000 = 0.75 g." },
      { id: 19, question: "Si la concentración es 5 mg/ml y se pasan 15 mg en una hora, el flujo es:", options: ["1 ml/h", "2 ml/h", "3 ml/h", "5 ml/h"], correct: 2, explanation: "15 / 5 = 3 ml/h." },
      { id: 20, question: "Velocidad de infusión para 1200 ml en 24 horas:", options: ["40 ml/h", "45 ml/h", "50 ml/h", "55 ml/h"], correct: 2, explanation: "1200 / 24 = 50 ml/h." }
    ]
  },
  2: {
  title: "Banco Nivel 2 - Módulo 2 (20 Preguntas)",
  questions: [
    { id: 1, question: "Se mezclan 300 ml de solución al 5% con 200 ml de solución al 10%. Porcentaje final:", options: ["6.5%", "7.0%", "7.5%", "8.0%"], correct: 1, explanation: "(15g + 20g) / 500ml = 7.0%." },
    { id: 2, question: "¿Qué volumen de solución al 25% se requiere para obtener 50 g de soluto puro?", options: ["100 ml", "150 ml", "200 ml", "250 ml"], correct: 2, explanation: "25g en 100ml -> 50g en 200ml." },
    { id: 3, question: "Si se diluyen 50 ml de una solución al 30% hasta alcanzar un volumen final de 150 ml, la concentración final es:", options: ["5%", "10%", "15%", "20%"], correct: 1, explanation: "(30 × 50) / 150 = 10%." },
    { id: 4, question: "Una solución al 0.9% de cloruro de sodio en 1000 ml contiene cuántos gramos de sal:", options: ["0.9 g", "9.0 g", "90.0 g", "900.0 g"], correct: 1, explanation: "0.9 g por cada 100 ml, por lo tanto 9.0 g en 1000 ml." },
    { id: 5, question: "Para preparar 250 ml de solución al 2% a partir de una solución al 10%, se requieren:", options: ["30 ml", "50 ml", "75 ml", "100 ml"], correct: 1, explanation: "(2% × 250ml) / 10% = 50 ml." },
    { id: 6, question: "¿Cuántos mg de fármaco hay en 5 ml de una solución al 4% p/v?", options: ["100 mg", "200 mg", "400 mg", "500 mg"], correct: 1, explanation: "4% = 40 mg/ml. 40 × 5 = 200 mg." },
    { id: 7, question: "Si se mezclan 400 ml al 2% con 100 ml al 12%, la concentración resultante es:", options: ["3.2%", "4.0%", "4.5%", "5.0%"], correct: 1, explanation: "(8g + 12g) / 500ml = 20/500 = 4.0%." },
    { id: 8, question: "Una presentación comercial indica 50 mg/ml. ¿Cuál es su porcentaje p/v equivalente?", options: ["0.5%", "1.0%", "5.0%", "10.0%"], correct: 2, explanation: "50 mg/ml = 5 g / 100 ml = 5.0%." },
    { id: 9, question: "Se tienen 600 ml de solución al 15%. Si se evaporan 100 ml, la nueva concentración es:", options: ["16.5%", "17.2%", "18.0%", "19.5%"], correct: 2, explanation: "Soluto = 90g. Volumen nuevo = 500ml. (90/500)*100 = 18.0%." },
    { id: 10, question: "¿Qué cantidad de agua destilada se debe agregar a 100 ml de solución al 20% para bajarla al 5%?", options: ["200 ml", "300 ml", "400 ml", "500 ml"], correct: 1, explanation: "Volumen final = 400 ml. Como ya hay 100 ml, se añaden 300 ml de agua." },
    { id: 11, question: "Una proporción 1:1000 en peso/volumen equivale a una concentración porcentual de:", options: ["0.01%", "0.1%", "1.0%", "10.0%"], correct: 1, explanation: "1g en 1000ml = 0.1g en 100ml (0.1%)." },
    { id: 12, question: "Se mezclan 1 litro de solución al 2% con 1 litro de agua pura. El porcentaje final es:", options: ["0.5%", "1.0%", "1.5%", "2.0%"], correct: 1, explanation: "20g en 2000ml = 1.0%." },
    { id: 13, question: "Calcule los gramos de soluto en 250 ml de una solución al 3.5%:", options: ["7.25 g", "8.75 g", "9.50 g", "10.25 g"], correct: 1, explanation: "250 × 0.035 = 8.75 g." },
    { id: 14, question: "Si se requiere preparar 500 ml de suero glucosado al 5% usando ampollas al 50% (50 ml), ¿cuántas ampollas se necesitan?", options: ["1 ampolla", "2 ampollas", "3 ampollas", "4 ampollas"], correct: 1, explanation: "Soluto requerido = 25g. Cada ampolla al 50% en 50ml aporta 25g. Se necesita 1 ampolla (Nota: si es cálculo de volumen de ampolla, V1 = 50ml)." },
    { id: 15, question: "Una solución madre tiene una concentración de 2 mg/ml. ¿Qué volumen contiene 400 mcg?", options: ["0.1 ml", "0.2 ml", "0.4 ml", "0.5 ml"], correct: 1, explanation: "400 mcg = 0.4 mg. 0.4 / 2 = 0.2 ml." },
    { id: 16, question: "Al mezclar volúmenes iguales de soluciones al 4% y al 8%, el porcentaje de la mezcla es:", options: ["5.0%", "5.5%", "6.0%", "6.5%"], correct: 2, explanation: "Promedio ponderado simple por partes iguales: (4 + 8) / 2 = 6.0%." },
    { id: 17, question: "¿Cuántos miligramos de cloruro de sodio hay en 10 ml de una solución al 0.9%?", options: ["45 mg", "90 mg", "135 mg", "180 mg"], correct: 1, explanation: "0.9% = 9 mg/ml. 9 × 10 = 90 mg." },
    { id: 18, question: "Si se diluyen 200 ml de una solución al 8% hasta obtener 400 ml, la concentración es:", options: ["2%", "3%", "4%", "5%"], correct: 2, explanation: "(8% × 200) / 400 = 4%." },
    { id: 19, question: "Una proporción 1:10,000 expresada en mg/ml equivale a:", options: ["0.01 mg/ml", "0.1 mg/ml", "1.0 mg/ml", "10.0 mg/ml"], correct: 1, explanation: "1g (1000mg) en 10,000ml = 0.1 mg/ml." },
    { id: 20, question: "Para obtener una mezcla final al 6% combinando soluciones al 3% y al 9%, la proporción de mezcla debe ser:", options: ["1:1", "1:2", "2:1", "3:1"], correct: 0, explanation: "Equidistante de 3 y 9, requiere partes iguales (1:1)." }
  ]
},
  3: { title: "Banco Nivel 2 - Mod 3", questions: [] },
  4: { title: "Banco Nivel 2 - Mod 4", questions: [] },
  5: { title: "Banco Nivel 2 - Mod 5", questions: [] },
  6: { title: "Banco Nivel 2 - Mod 6", questions: [] },
  7: { title: "Banco Nivel 2 - Mod 7", questions: [] },
  8: { title: "Simulador Nivel 2", questions: [] } // El simulador general se mantiene con sus 15 preguntas ya definidas
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
