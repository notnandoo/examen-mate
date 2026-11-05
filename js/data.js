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

// ==========================================
// MÓDULOS Y BANCOS - NIVEL 2 COMPLETO (CORREGIDO Y VISUALMENTE LIMPIO)
// ==========================================

const modulesDataL2 = {
  1: {
    id: 1, title: "Módulo 1 (Nivel 2): Razonamiento Aritmético y Dosis Clínicas",
    colorClass: "bg-blue-800", badgeClass: "bg-blue-900 text-blue-200 border-blue-700",
    topics: ["Infusiones Continuas", "Conversiones de Unidades", "Flujo de Goteo"],
    description: "Cálculo aritmético avanzado aplicado a velocidades de infusión y dosificación.",
    contentHtml: `
      <div class="space-y-4">
        <h3 class="text-lg font-bold text-slate-800">Ejemplo 1: Cálculo de velocidad en bomba de infusión (ml/h)</h3>
        <p class="text-sm text-slate-600"><strong>Planteamiento:</strong> Un paciente de 75 kg debe recibir dopamina a razón de 2 mg/min. Concentración: 20 mg/ml.<br><strong>Resolución:</strong><br>1. Dosis horaria: 2 mg/min × 60 min = 120 mg/h.<br>2. Velocidad: 120 mg/h ÷ 20 mg/ml = 6.0 ml/h.</p>
        <h3 class="text-lg font-bold text-slate-800">Ejemplo 2: Cálculo de goteo manual (gtt/min)</h3>
        <p class="text-sm text-slate-600"><strong>Planteamiento:</strong> Administrar 500 ml en 8 horas (macrogoteo a 20 gtt/ml).<br><strong>Resolución:</strong><br>Tiempo en min: 480 min. Goteo: (500 × 20) / 480 = 20.83 (aprox. 21 gtt/min).</p>
        <h3 class="text-lg font-bold text-slate-800">Ejemplo 3: Conversión de masa y volumen</h3>
        <p class="text-sm text-slate-600"><strong>Planteamiento:</strong> Concentración de 3.5 g de soluto diluidos en 250 ml.<br><strong>Resolución:</strong><br>3.5 g = 3,500 mg. Concentración: 3,500 mg / 250 ml = 14 mg/ml.</p>
      </div>
    `
  },
  2: {
    id: 2, title: "Módulo 2 (Nivel 2): Proporciones Clínicas Complejas",
    colorClass: "bg-emerald-800", badgeClass: "bg-emerald-900 text-emerald-200 border-emerald-700",
    topics: ["Concentraciones Percentuales", "Diluciones y Mezclas", "Factores de Proporción"],
    description: "Resolución avanzada de problemas de mezclas de soluciones y diluciones.",
    contentHtml: `
      <div class="space-y-4">
        <h3 class="text-lg font-bold text-slate-800">Ejemplo 1: Mezcla de soluciones al %</h3>
        <p class="text-sm text-slate-600"><strong>Planteamiento:</strong> Mezclar 300 ml al 5% con 200 ml al 10%.<br><strong>Resolución:</strong> Soluto 1: 15g, Soluto 2: 20g. Total soluto = 35g en 500ml. Porcentaje final = 7.0%.</p>
        <h3 class="text-lg font-bold text-slate-800">Ejemplo 2: Ley de conservación</h3>
        <p class="text-sm text-slate-600"><strong>Planteamiento:</strong> Preparar 500 ml al 4% desde una solución al 20%.<br><strong>Resolución:</strong> V1 = 100 ml de solución concentrada a diluir en 400 ml de agua.</p>
        <h3 class="text-lg font-bold text-slate-800">Ejemplo 3: Relación p/v a mg/ml</h3>
        <p class="text-sm text-slate-600"><strong>Planteamiento:</strong> Ampolla al 10% p/v en 20 ml.<br><strong>Resolución:</strong> Total = 2,000 mg (2 g).</p>
      </div>
    `
  },
  3: {
    id: 3, title: "Módulo 3 (Nivel 2): Exponentes y Crecimiento",
    colorClass: "bg-amber-800", badgeClass: "bg-amber-900 text-amber-200 border-amber-700",
    topics: ["Duplicación Bacteriana", "Semivida Farmacocinética", "Decaimiento Exponencial"],
    description: "Modelos exponenciales aplicados a la multiplicación celular y eliminación de fármacos.",
    contentHtml: `
      <div class="space-y-4">
        <h3 class="text-lg font-bold text-slate-800">Ejemplo 1: Crecimiento exponencial</h3>
        <p class="text-sm text-slate-600"><strong>Planteamiento:</strong> Cultivo que se duplica cada 3h (inicio 1,000). En 9h.<br><strong>Resolución:</strong> 1,000 × 2³ = 8,000 bacterias.</p>
        <h3 class="text-lg font-bold text-slate-800">Ejemplo 2: Semivida</h3>
        <p class="text-sm text-slate-600"><strong>Planteamiento:</strong> Fármaco con vida media de 4h (inicio 160 mg/L) hasta 20 mg/L.<br><strong>Resolución:</strong> Transcurren 3 periodos = 12 horas.</p>
        <h3 class="text-lg font-bold text-slate-800">Ejemplo 3: Potencias fraccionarias</h3>
        <p class="text-sm text-slate-600">Evaluación de funciones exponenciales de decaimiento en modelos farmacocinéticos.</p>
      </div>
    `
  },
  4: {
    id: 4, title: "Módulo 4 (Nivel 2): Modelado de Inecuaciones",
    colorClass: "bg-purple-800", badgeClass: "bg-purple-900 text-purple-200 border-purple-700",
    topics: ["Ventana Terapéutica", "Inecuaciones con Valor Absoluto", "Sistemas de Restricción"],
    description: "Cálculo de rangos seguros de dosificación médica mediante inecuaciones.",
    contentHtml: `
      <div class="space-y-4">
        <h3 class="text-lg font-bold text-slate-800">Ejemplo 1: Inecuación lineal de dosis</h3>
        <p class="text-sm text-slate-600"><strong>Planteamiento:</strong> Resolver 2x + 15 ≤ 45.<br><strong>Resolución:</strong> x ≤ 15.</p>
        <h3 class="text-lg font-bold text-slate-800">Ejemplo 2: Ventana terapéutica con valor absoluto</h3>
        <p class="text-sm text-slate-600"><strong>Planteamiento:</strong> Modelo |D - 250| ≤ 45.<br><strong>Resolución:</strong> Rango seguro de 205 mg a 295 mg.</p>
        <h3 class="text-lg font-bold text-slate-800">Ejemplo 3: Sistemas de inecuaciones</h3>
        <p class="text-sm text-slate-600">Cálculo de intersecciones seguras entre concentraciones.</p>
      </div>
    `
  },
  5: {
    id: 5, title: "Módulo 5 (Nivel 2): Regla de Tres Compuesta y Venn Avanzado",
    colorClass: "bg-rose-800", badgeClass: "bg-rose-900 text-rose-200 border-rose-700",
    topics: ["Regla de Tres Compuesta", "Diagramas de Venn de 3 Conjuntos", "Análisis Multivariable"],
    description: "Resolución de problemas con múltiples variables proporcionales.",
    contentHtml: `
      <div class="space-y-4">
        <h3 class="text-lg font-bold text-slate-800">Ejemplo 1: Regla de tres compuesta</h3>
        <p class="text-sm text-slate-600"><strong>Planteamiento:</strong> 6 enfermeras aplican 120 vacunas en 4h. ¿9 enfermeras en 6h?<br><strong>Resolución:</strong> 270 vacunas.</p>
        <h3 class="text-lg font-bold text-slate-800">Ejemplo 2: Venn de 3 conjuntos</h3>
        <p class="text-sm text-slate-600">Principio de inclusión-exclusión para poblaciones superpuestas.</p>
        <h3 class="text-lg font-bold text-slate-800">Ejemplo 3: Proporcionalidad inversa</h3>
        <p class="text-sm text-slate-600">Cálculo de tiempos y recursos asignados.</p>
      </div>
    `
  },
  6: {
    id: 6, title: "Módulo 6 (Nivel 2): Optimización Geométrica",
    colorClass: "bg-cyan-800", badgeClass: "bg-cyan-900 text-cyan-200 border-cyan-700",
    topics: ["Pitágoras 3D", "Superficie Corporal (Mosteller)", "Volúmenes Esféricos y Cilíndricos"],
    description: "Geometría espacial aplicada al cálculo de superficies corporales y volúmenes.",
    contentHtml: `
      <div class="space-y-4">
        <h3 class="text-lg font-bold text-slate-800">Ejemplo 1: Superficie Corporal (Mosteller)</h3>
        <p class="text-sm text-slate-600"><strong>Planteamiento:</strong> Paciente de 180 cm y 100 kg.<br><strong>Resolución:</strong> ASC = √(18000 / 3600) ≈ 2.24 m².</p>
        <h3 class="text-lg font-bold text-slate-800">Ejemplo 2: Distancia tridimensional</h3>
        <p class="text-sm text-slate-600">Vectores de posición y distancias espaciales en coordenadas 3D.</p>
        <h3 class="text-lg font-bold text-slate-800">Ejemplo 3: Volumen de tanques</h3>
        <p class="text-sm text-slate-600">Depósitos cilíndricos y esféricos para fluidos médicos.</p>
      </div>
    `
  },
  7: {
    id: 7, title: "Módulo 7 (Nivel 2): Análisis Estadístico y Lógica",
    colorClass: "bg-red-800", badgeClass: "bg-red-900 text-red-200 border-red-700",
    topics: ["Probabilidad Condicional", "Valor Predictivo", "Silogismos y Validez de Premisas"],
    description: "Evaluación matemática de pruebas diagnósticas y razonamiento formal.",
    contentHtml: `
      <div class="space-y-4">
        <h3 class="text-lg font-bold text-slate-800">Ejemplo 1: Probabilidad condicional (VPP)</h3>
        <p class="text-sm text-slate-600">Cálculo de probabilidad de enfermedad con resultado positivo.</p>
        <h3 class="text-lg font-bold text-slate-800">Ejemplo 2: Lógica formal</h3>
        <p class="text-sm text-slate-600">Evaluación de validez en silogismos clínicos.</p>
        <h3 class="text-lg font-bold text-slate-800">Ejemplo 3: Probabilidad combinada</h3>
        <p class="text-sm text-slate-600">Análisis de sucesos independientes en ensayos.</p>
      </div>
    `
  },
  8: { 
    id: 8, title: "Módulo 8 (Nivel 2): Simulador Oficial de Examen General", colorClass: "bg-indigo-900", badgeClass: "bg-indigo-950 text-indigo-200 border-indigo-800",
    topics: ["Simulador Cronometrado", "30 Minutos", "15 Preguntas"],
    description: "Evaluación integradora cronometrada que desbloquea el Nivel 3.",
    contentHtml: `
      <div class="space-y-6">
        <div class="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-6 rounded-2xl border border-amber-500/30 shadow-2xl relative overflow-hidden">
          <h3 class="text-2xl font-black text-amber-400 tracking-tight mb-2">Simulador Oficial de Examen General — Nivel 2</h3>
          <p class="text-sm text-slate-300 leading-relaxed max-w-2xl">Evaluación integradora de alta exigencia para desbloquear el Nivel 3 (Élite).</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-slate-900/60 border border-slate-800 p-4 rounded-xl">
            <h5 class="text-xs font-bold text-slate-200 uppercase">Tiempo Límite</h5>
            <p class="text-lg font-black text-white">30 Minutos</p>
          </div>
          <div class="bg-slate-900/60 border border-slate-800 p-4 rounded-xl">
            <h5 class="text-xs font-bold text-slate-200 uppercase">Calculadora</h5>
            <p class="text-lg font-black text-rose-400">Prohibida</p>
          </div>
          <div class="bg-slate-900/60 border border-slate-800 p-4 rounded-xl">
            <h5 class="text-xs font-bold text-slate-200 uppercase">Criterio</h5>
            <p class="text-lg font-black text-emerald-400">≥ 70% Requerido</p>
          </div>
        </div>
      </div>
    `
  }
};

// 2. Asegúrate de que quizzesDataL2 se declare una sola vez así:
const quizzesDataL2 = {
  1: {
    title: "Banco Nivel 2 - Módulo 1 (20 Preguntas)",
    questions: [
      { id: 1, question: "Paciente de 75 kg recibe infusión de dopamina a 2 mg/min. Concentración: 20 mg/ml. Velocidad en ml/h:", options: ["4.5 ml/h", "6.0 ml/h", "7.5 ml/h", "9.0 ml/h"], correct: 1, explanation: "120 mg/h / 20 mg/ml = 6.0 ml/h." },
      { id: 2, question: "Calcule el goteo para 500 ml en 8 horas con factor 20 gtt/ml:", options: ["18 gtt/min", "21 gtt/min", "25 gtt/min", "28 gtt/min"], correct: 1, explanation: "(500 × 20) / 480 ≈ 21 gtt/min." },
      { id: 3, question: "Si se administran 1000 ml de solución en 12 horas con microgotero (60 gtt/ml), el goteo es:", options: ["75 gtt/min", "83.3 gtt/min", "90 gtt/min", "100 gtt/min"], correct: 1, explanation: "83.3 gtt/min." },
      { id: 4, question: "Un fármaco viene en presentación de 500 mg en 10 ml. ¿Cuántos mg hay en 3 ml?", options: ["100 mg", "150 mg", "200 mg", "250 mg"], correct: 1, explanation: "150 mg." },
      { id: 5, question: "Transforme 45 mcg a miligramos (mg):", options: ["0.045 mg", "0.45 mg", "4.5 mg", "45 mg"], correct: 0, explanation: "0.045 mg." },
      { id: 6, question: "Velocidad de infusión de 45 ml/h y el equipo pasa 1 ml en 20 gotas, goteo:", options: ["12 gtt/min", "15 gtt/min", "18 gtt/min", "21 gtt/min"], correct: 1, explanation: "15 gtt/min." },
      { id: 7, question: "Paciente de 80 kg recibe 0.5 mcg/kg/min. Dosis total por minuto:", options: ["20 mcg/min", "40 mcg/min", "60 mcg/min", "80 mcg/min"], correct: 1, explanation: "40 mcg/min." },
      { id: 8, question: "Convierta 2.5 litros a mililitros:", options: ["250 ml", "2500 ml", "25000 ml", "25 ml"], correct: 1, explanation: "2500 ml." },
      { id: 9, question: "Infusión de 6 horas a 80 ml/h, volumen total:", options: ["360 ml", "420 ml", "480 ml", "540 ml"], correct: 2, explanation: "480 ml." },
      { id: 10, question: "Ampolla de 40 mg en 2 ml. Se requieren 60 mg, volumen a administrar:", options: ["2.0 ml", "2.5 ml", "3.0 ml", "3.5 ml"], correct: 2, explanation: "3.0 ml." },
      { id: 11, question: "Velocidad para pasar 250 ml en 4 horas:", options: ["55.5 ml/h", "62.5 ml/h", "70.0 ml/h", "75.5 ml/h"], correct: 1, explanation: "62.5 ml/h." },
      { id: 12, question: "¿Cuántos mcg hay en 0.02 g?", options: ["200 mcg", "2,000 mcg", "20,000 mcg", "200,000 mcg"], correct: 2, explanation: "20,000 mcg." },
      { id: 13, question: "100 ml de solución al 5% contiene cuántos gramos:", options: ["2.5 g", "5.0 g", "7.5 g", "10.0 g"], correct: 1, explanation: "5.0 g." },
      { id: 14, question: "Si un equipo entrega 15 gtt/ml, gotas en 100 ml:", options: ["1,200 gtt", "1,500 gtt", "1,800 gtt", "2,000 gtt"], correct: 1, explanation: "1,500 gtt." },
      { id: 15, question: "Paciente de 60 kg a 4 mg/kg/día. Dosis total diaria:", options: ["120 mg", "180 mg", "240 mg", "300 mg"], correct: 2, explanation: "240 mg." },
      { id: 16, question: "Dosis anterior dividida en 3 tomas diarias:", options: ["60 mg", "80 mg", "100 mg", "120 mg"], correct: 1, explanation: "80 mg." },
      { id: 17, question: "Pasar 50 ml en 30 minutos en bomba, velocidad:", options: ["50 ml/h", "75 ml/h", "100 ml/h", "120 ml/h"], correct: 2, explanation: "100 ml/h." },
      { id: 18, question: "Conversión: 750 miligramos a gramos:", options: ["0.075 g", "0.75 g", "7.5 g", "75 g"], correct: 1, explanation: "0.75 g." },
      { id: 19, question: "Concentración de 5 mg/ml y pasan 15 mg en una hora, flujo:", options: ["1 ml/h", "2 ml/h", "3 ml/h", "5 ml/h"], correct: 2, explanation: "3 ml/h." },
      { id: 20, question: "Velocidad de infusión para 1200 ml en 24 horas:", options: ["40 ml/h", "45 ml/h", "50 ml/h", "55 ml/h"], correct: 2, explanation: "50 ml/h." }
    ]
  },
  2: {
    title: "Banco Nivel 2 - Módulo 2 (20 Preguntas)",
    questions: [
      { id: 1, question: "Se mezclan 300 ml al 5% con 200 ml al 10%. Porcentaje final:", options: ["6.5%", "7.0%", "7.5%", "8.0%"], correct: 1, explanation: "7.0%." },
      { id: 2, question: "Volumen al 25% para obtener 50 g de soluto:", options: ["100 ml", "150 ml", "200 ml", "250 ml"], correct: 2, explanation: "200 ml." },
      { id: 3, question: "Diluir 50 ml al 30% hasta 150 ml, concentración final:", options: ["5%", "10%", "15%", "20%"], correct: 1, explanation: "10%." },
      { id: 4, question: "Solución al 0.9% en 1000 ml contiene cuántos gramos de sal:", options: ["0.9 g", "9.0 g", "90.0 g", "900.0 g"], correct: 1, explanation: "9.0 g." },
      { id: 5, question: "Preparar 250 ml al 2% a partir de solución al 10%:", options: ["30 ml", "50 ml", "75 ml", "100 ml"], correct: 1, explanation: "50 ml." },
      { id: 6, question: "Mg en 5 ml de solución al 4% p/v:", options: ["100 mg", "200 mg", "400 mg", "500 mg"], correct: 1, explanation: "200 mg." },
      { id: 7, question: "Mezclar 400 ml al 2% con 100 ml al 12%, concentración resultante:", options: ["3.2%", "4.0%", "4.5%", "5.0%"], correct: 1, explanation: "4.0%." },
      { id: 8, question: "Presentación de 50 mg/ml equivale a porcentaje p/v de:", options: ["0.5%", "1.0%", "5.0%", "10.0%"], correct: 2, explanation: "5.0%." },
      { id: 9, question: "600 ml al 15% evaporados 100 ml, nueva concentración:", options: ["16.5%", "17.2%", "18.0%", "19.5%"], correct: 2, explanation: "18.0%." },
      { id: 10, question: "Agua a agregar a 100 ml al 20% para bajar al 5%:", options: ["200 ml", "300 ml", "400 ml", "500 ml"], correct: 1, explanation: "300 ml." },
      { id: 11, question: "Proporción 1:1000 p/v equivale a porcentaje de:", options: ["0.01%", "0.1%", "1.0%", "10.0%"], correct: 1, explanation: "0.1%." },
      { id: 12, question: "1 litro al 2% mezclado con 1 litro de agua pura:", options: ["0.5%", "1.0%", "1.5%", "2.0%"], correct: 1, explanation: "1.0%." },
      { id: 13, question: "Gramos de soluto en 250 ml al 3.5%:", options: ["7.25 g", "8.75 g", "9.50 g", "10.25 g"], correct: 1, explanation: "8.75 g." },
      { id: 14, question: "Preparar 500 ml al 5% usando ampollas al 50% (50 ml):", options: ["1 ampolla", "2 ampollas", "3 ampollas", "4 ampollas"], correct: 1, explanation: "1 ampolla." },
      { id: 15, question: "Solución madre de 2 mg/ml. ¿Qué volumen contiene 400 mcg?", options: ["0.1 ml", "0.2 ml", "0.4 ml", "0.5 ml"], correct: 1, explanation: "0.2 ml." },
      { id: 16, question: "Volúmenes iguales al 4% y al 8%, mezcla:", options: ["5.0%", "5.5%", "6.0%", "6.5%"], correct: 2, explanation: "6.0%." },
      { id: 17, question: "Mg de cloruro de sodio en 10 ml al 0.9%:", options: ["45 mg", "90 mg", "135 mg", "180 mg"], correct: 1, explanation: "90 mg." },
      { id: 18, question: "Diluir 200 ml al 8% hasta 400 ml:", options: ["2%", "3%", "4%", "5%"], correct: 2, explanation: "4%." },
      { id: 19, question: "Proporción 1:10,000 en mg/ml:", options: ["0.01 mg/ml", "0.1 mg/ml", "1.0 mg/ml", "10.0 mg/ml"], correct: 1, explanation: "0.1 mg/ml." },
      { id: 20, question: "Mezcla al 6% combinando 3% y 9%, proporción:", options: ["1:1", "1:2", "2:1", "3:1"], correct: 0, explanation: "1:1." }
    ]
  },
  3: {
    title: "Banco Nivel 2 - Módulo 3 (20 Preguntas)",
    questions: [
      { id: 1, question: "Cultivo bacteriano se duplica cada 3h (inicio 1,000). En 9h:", options: ["4,000", "8,000", "16,000", "32,000"], correct: 1, explanation: "8,000." },
      { id: 2, question: "Semivida de 4h (inicio 160 mg/L). Tiempo para 20 mg/L:", options: ["8 horas", "12 horas", "16 horas", "20 horas"], correct: 1, explanation: "12 horas." },
      { id: 3, question: "Población celular triplica cada 2h (inicio 500). En 6h:", options: ["4,500", "13,500", "27,000", "40,500"], correct: 1, explanation: "13,500." },
      { id: 4, question: "Simplifique: (2³)⁴", options: ["2^7", "2^12", "8^4", "4^6"], correct: 1, explanation: "2^12." },
      { id: 5, question: "Valor de 5⁻²:", options: ["-25", "-1/25", "1/25", "25"], correct: 2, explanation: "1/25." },
      { id: 6, question: "Vida media de 6 días, fracción tras 18 días:", options: ["1/2", "1/4", "1/8", "1/16"], correct: 2, explanation: "1/8." },
      { id: 7, question: "Resuelva 2ˣ = 32:", options: ["x = 3", "x = 4", "x = 5", "x = 6"], correct: 2, explanation: "x = 5." },
      { id: 8, question: "Virus se cuadruplica cada hora (inicio 10). En 3 horas:", options: ["160", "320", "640", "1,280"], correct: 2, explanation: "640." },
      { id: 9, question: "Simplifique (3⁸) / (3⁵):", options: ["3³", "3¹³", "1³", "9³"], correct: 0, explanation: "3³." },
      { id: 10, question: "Antibiótico desciende a la mitad cada 2h (inicio 80). A las 6h:", options: ["5 mcg/ml", "10 mcg/ml", "20 mcg/ml", "40 mcg/ml"], correct: 1, explanation: "10 mcg/ml." },
      { id: 11, question: "Resuelva (4¹/²) × (8¹/³):", options: ["2", "4", "6", "8"], correct: 1, explanation: "4." },
      { id: 12, question: "Colonia se multiplica por 5 cada hora (inicio 2). En 2h:", options: ["10", "25", "50", "100"], correct: 2, explanation: "50." },
      { id: 13, question: "Calcule log₂(64):", options: ["4", "5", "6", "7"], correct: 2, explanation: "6." },
      { id: 14, question: "Si 3ˣ⁺¹ = 27, x =", options: ["x = 1", "x = 2", "x = 3", "x = 4"], correct: 1, explanation: "x = 2." },
      { id: 15, question: "Constante de decaimiento en C = 200 · e⁻⁰·²ᵗ:", options: ["Concentración inicial", "Constante de eliminación", "Tiempo total", "Volumen de distribución"], correct: 1, explanation: "Constante de eliminación." },
      { id: 16, question: "Simplifique (x³y²)²:", options: ["x⁵y⁴", "x⁶y⁴", "x⁹y²", "x⁶y²"], correct: 1, explanation: "x⁶y⁴." },
      { id: 17, question: "De 200 a 6,400 bacterias duplicándose, número de duplicaciones:", options: ["4", "5", "6", "7"], correct: 1, explanation: "5 duplicaciones." },
      { id: 18, question: "(-150)⁰ + 4²:", options: ["15", "16", "17", "18"], correct: 2, explanation: "17." },
      { id: 19, question: "Vida media de 5 horas, porcentaje eliminado tras 2 vidas medias:", options: ["25%", "50%", "75%", "100%"], correct: 2, explanation: "75%." },
      { id: 20, question: "2³ + 2² + 2¹ + 2⁰:", options: ["12", "14", "15", "30"], correct: 2, explanation: "15." }
    ]
  },
  4: {
    title: "Banco Nivel 2 - Módulo 4 (20 Preguntas)",
    questions: [
      { id: 1, question: "Resuelva la inecuación: 2x + 15 ≤ 45", options: ["x ≤ 10", "x ≤ 15", "x ≤ 20", "x ≤ 30"], correct: 1, explanation: "2x ≤ 30 → x ≤ 15." },
      { id: 2, question: "Ventana terapéutica modelada por |D - 250| ≤ 45. Dosis mínima:", options: ["195 mg", "205 mg", "215 mg", "225 mg"], correct: 1, explanation: "250 - 45 = 205 mg." },
      { id: 3, question: "Ventana terapéutica |D - 250| ≤ 45. Dosis máxima:", options: ["275 mg", "285 mg", "295 mg", "305 mg"], correct: 2, explanation: "250 + 45 = 295 mg." },
      { id: 4, question: "Resuelva la inecuación con cambio de signo: -3x + 12 ≥ 0", options: ["x ≥ 4", "x ≤ 4", "x ≥ -4", "x ≤ -4"], correct: 1, explanation: "-3x ≥ -12 → x ≤ 4." },
      { id: 5, question: "Conjunto solución de la inecuación con valor absoluto |x - 3| ≤ 2:", options: ["[-1, 5]", "[1, 5]", "(-2, 2)", "[0, 6]"], correct: 1, explanation: "1 ≤ x ≤ 5." },
      { id: 6, question: "Si 5x - 10 > 15, el valor de x es:", options: ["x > 3", "x > 5", "x > 8", "x > 10"], correct: 1, explanation: "5x > 25 → x > 5." },
      { id: 7, question: "Resuelva el sistema de inecuaciones: 3x - 6 ≥ 0 y -2x + 10 > 0:", options: ["[2, 5)", "(2, 5]", "[2, 5]", "(-∞, 5)"], correct: 0, explanation: "x ≥ 2 y x < 5 → [2, 5)." },
      { id: 8, question: "Si la dosis D cumple 100 < 3D < 300, el rango para D es:", options: ["(33.3, 100)", "(50, 150)", "(20, 80)", "(40, 120)"], correct: 0, explanation: "Dividiendo entre 3: 33.3 < D < 100." },
      { id: 9, question: "Encuentre el número de enteros que satisfacen |x| < 4:", options: ["5 enteros", "7 enteros", "9 enteros", "Infinitos"], correct: 1, explanation: "Enteros: -3, -2, -1, 0, 1, 2, 3 (7 enteros)." },
      { id: 10, question: "Si 4 - 2x ≥ 10, entonces:", options: ["x ≥ -3", "x ≤ -3", "x ≥ 3", "x ≤ 3"], correct: 1, explanation: "-2x ≥ 6 → x ≤ -3." },
      { id: 11, question: "Rango de seguridad para presión arterial sistólica S: |S - 120| ≤ 20:", options: ["[100, 140]", "[90, 130]", "[110, 150]", "[80, 120]"], correct: 0, explanation: "120 - 20 = 100 y 120 + 20 = 140." },
      { id: 12, question: "Si x/4 + 2 > 5, el valor de x es:", options: ["x > 8", "x > 10", "x > 12", "x > 15"], correct: 2, explanation: "x/4 > 3 → x > 12." },
      { id: 13, question: "Inecuación cuadrática simple: x² - 9 < 0, solución:", options: ["(-3, 3)", "(-∞, -3) ∪ (3, ∞)", "[0, 3]", "(-9, 9)"], correct: 0, explanation: "-3 < x < 3." },
      { id: 14, question: "Si la concentración plasmática C debe cumplir 10 ≤ C ≤ 50 y se reduce a la mitad, el nuevo rango es:", options: ["[5, 25]", "[20, 100]", "[10, 50]", "[2, 10]"], correct: 0, explanation: "Dividiendo entre 2: [5, 25]." },
      { id: 15, question: "Resuelva: 5(x - 1) < 2(x + 5):", options: ["x < 3", "x < 5", "x < 7", "x < 9"], correct: 1, explanation: "5x - 5 < 2x + 10 → 3x < 15 → x < 5." },
      { id: 16, question: "Si -5 < 2x + 1 < 7, el intervalo para x es:", options: ["(-3, 3)", "(-2, 3)", "(-1, 4)", "(0, 5)"], correct: 0, explanation: "Restando 1 y dividiendo entre 2: -6 < 2x < 6 → -3 < x < 3." },
      { id: 17, question: "Valor máximo entero que cumple 4x - 3 < 10:", options: ["x = 2", "x = 3", "x = 4", "x = 5"], correct: 1, explanation: "4x < 13 → x < 3.25 (máximo entero 3)." },
      { id: 18, question: "Si |2x| ≥ 8, la solución es:", options: ["[-4, 4]", "(-∞, -4] ∪ [4, ∞)", "[0, 4]", "(-4, 4)"], correct: 1, explanation: "x ≥ 4 o x ≤ -4." },
      { id: 19, question: "Un frasco de 500 mg tiene margen de error del 10%. Rango permitido:", options: ["[400, 600]", "[450, 550]", "[480, 520]", "[490, 510]"], correct: 1, explanation: "500 ± 50 = [450, 550]." },
      { id: 20, question: "Si 3(x + 2) ≥ 2(x + 6), entonces:", options: ["x ≥ 3", "x ≥ 6", "x ≥ 9", "x ≥ 12"], correct: 1, explanation: "3x + 6 ≥ 2x + 12 → x ≥ 6." }
    ]
  },
  5: {
    title: "Banco Nivel 2 - Módulo 5 (20 Preguntas)",
    questions: [
      { id: 1, question: "6 enfermeras aplican 120 vacunas en 4h. ¿9 enfermeras en 6h?", options: ["240", "270", "300", "320"], correct: 1, explanation: "120 × (9/6) × (6/4) = 270." },
      { id: 2, question: "En un grupo de 50 estudiantes, 30 fútbol, 25 básquetbol y 10 ambos. ¿Ninguno?", options: ["3", "5", "8", "10"], correct: 1, explanation: "Solo fútbol=20, solo básquet=15, ambos=10. Total=45. Ninguno=5." },
      { id: 3, question: "Si 4 máquinas producen 100 piezas en 5 horas, ¿cuántas piezas producen 8 máquinas en 3 horas?", options: ["100", "120", "150", "180"], correct: 2, explanation: "100 × (8/4) × (3/5) = 120." },
      { id: 4, question: "100 personas: 60 revista A, 40 revista B, 20 ambas. Solo A:", options: ["20", "30", "40", "50"], correct: 2, explanation: "60 - 20 = 40." },
      { id: 5, question: "Si 3 obreros hacen un muro en 12 días, 9 obreros tardan:", options: ["2 días", "3 días", "4 días", "6 días"], correct: 2, explanation: "(3 × 12) / 9 = 4 días." },
      { id: 6, question: "En una encuesta de 120 médicos, 70 usan fármaco A, 50 fármaco B y 20 ambos. ¿Cuántos usan solo uno de ellos?", options: ["60", "70", "80", "90"], correct: 2, explanation: "Solo A = 50, Solo B = 30. Total = 80." },
      { id: 7, question: "Si 5 grifos abiertos durante 4 horas llenan un estanque de 2000 L, ¿cuántos litros llenan 8 grifos en 3 horas?", options: ["2200 L", "2400 L", "2600 L", "2800 L"], correct: 1, explanation: "2000 × (8/5) × (3/4) = 2400 L." },
      { id: 8, question: "Un conjunto universal U tiene 100 elementos. Si n(A)=40, n(B)=35 y n(A ∩ B)=15, ¿cuántos elementos están fuera de A ∪ B?", options: ["30", "40", "50", "60"], correct: 1, explanation: "n(A ∪ B) = 40 + 35 - 15 = 60. Fuera = 100 - 60 = 40." },
      { id: 9, question: "Si 12 hombres hacen una obra en 15 días, ¿en cuántos días la hacen 20 hombres?", options: ["8 días", "9 días", "10 días", "12 días"], correct: 1, explanation: "(12 × 15) / 20 = 9 días." },
      { id: 10, question: "En un hospital, 45 pacientes tienen fiebre, 30 tos y 15 ambos. ¿Cuántos tienen fiebre o tos?", options: ["50", "55", "60", "65"], correct: 2, explanation: "45 + 30 - 15 = 60." },
      { id: 11, question: "Si 2 bombas de infusión trabajan 6 horas diarias y gastan 30 L, ¿cuántos litros gastan 4 bombas en 8 horas diarias?", options: ["60 L", "80 L", "100 L", "120 L"], correct: 1, explanation: "30 × (4/2) × (8/6) = 80 L." },
      { id: 12, question: "Intersección de 3 conjuntos A, B, C si hay 5 elementos comunes a los tres:", options: ["n(A ∩ B ∩ C) = 5", "Indeterminado", "0", "15"], correct: 0, explanation: "Por definición de intersección triple." },
      { id: 13, question: "Si 8 carpinteros hacen 32 muebles en 4 días, ¿cuántos días tardan 4 carpinteros en hacer 16 muebles?", options: ["2 días", "3 días", "4 días", "5 días"], correct: 2, explanation: "4 días." },
      { id: 14, question: "De 80 pacientes, 50 toman analgésicos, 40 antiinflamatorios y 25 ambos. ¿Cuántos no toman ninguno?", options: ["10", "15", "20", "25"], correct: 1, explanation: "Unión = 65. Ninguno = 15." },
      { id: 15, question: "Si 10 albañiles construyen 50 metros de barda en 5 días, rendimiento por albañil por día:", options: ["0.5 m", "1.0 m", "1.5 m", "2.0 m"], correct: 1, explanation: "1 metro por día." },
      { id: 16, question: "En un diagrama de Venn de 3 conjuntos, las regiones exclusivas de cada conjunto suman:", options: ["El total de la unión menos las intersecciones", "La unión total", "Solo la triple", "Cero"], correct: 0, explanation: "Propiedad de conjuntos." },
      { id: 17, question: "Si 3 camiones transportan 18 toneladas en 2 viajes, ¿cuántas toneladas transportan 5 camiones en 3 viajes?", options: ["35", "40", "45", "50"], correct: 2, explanation: "45 toneladas." },
      { id: 18, question: "Si n(A)=50 y n(B)=30, el máximo valor posible para la intersección n(A ∩ B) es:", options: ["30", "40", "50", "80"], correct: 0, explanation: "30." },
      { id: 19, question: "Si 6 analistas procesan 300 muestras en 5 días, ¿cuántas muestras procesan 4 analistas en 10 días?", options: ["300", "400", "450", "500"], correct: 1, explanation: "400 muestras." },
      { id: 20, question: "Principio fundamental de la regla de tres compuesta:", options: ["Igualar relaciones de proporcionalidad de causas y efectos", "Sumar variables", "Multiplicar todo por cero", "Ninguna"], correct: 0, explanation: "Relación de causa, obra y tiempo." }
    ]
  },
  6: {
    title: "Banco Nivel 2 - Módulo 6 (20 Preguntas)",
    questions: [
      { id: 1, question: "Superficie corporal por Mosteller de 180 cm y 100 kg:", options: ["1.95 m²", "2.12 m²", "2.24 m²", "2.45 m²"], correct: 2, explanation: "√5 ≈ 2.24 m²." },
      { id: 2, question: "Distancia 3D entre los puntos (1, 2, 3) y (5, 5, 15) cm:", options: ["11 cm", "13 cm", "14 cm", "15 cm"], correct: 1, explanation: "d = 13 cm." },
      { id: 3, question: "Volumen de un tanque esférico de oxígeno con diámetro de 60 cm:", options: ["56.5 L", "113.1 L", "226.2 L", "452.4 L"], correct: 1, explanation: "113.1 Litros." },
      { id: 4, question: "Calcule la hipotenusa de un triángulo rectángulo 3D con catetos de 6 cm y 8 cm:", options: ["9 cm", "10 cm", "12 cm", "14 cm"], correct: 1, explanation: "10 cm." },
      { id: 5, question: "Área de un círculo con radio de 7 cm (Use π ≈ 22/7):", options: ["144 cm²", "154 cm²", "164 cm²", "174 cm²"], correct: 1, explanation: "154 cm²." },
      { id: 6, question: "Si una persona mide 160 cm y pesa 64 kg, su ASC por Mosteller es:", options: ["1.50 m²", "1.60 m²", "1.70 m²", "1.80 m²"], correct: 1, explanation: "1.60 m²." },
      { id: 7, question: "Volumen de un cilindro con radio de 5 cm y altura de 10 cm (π ≈ 3.14):", options: ["314 cm³", "628 cm³", "785 cm³", "1570 cm³"], correct: 0, explanation: "785 cm³." },
      { id: 8, question: "Distancia entre los puntos (0, 0, 0) y (3, 4, 12) en el espacio:", options: ["11", "12", "13", "14"], correct: 2, explanation: "13." },
      { id: 9, question: "Perímetro de un rectángulo de 15 cm de largo y 8 cm de ancho:", options: ["40 cm", "46 cm", "50 cm", "60 cm"], correct: 1, explanation: "46 cm." },
      { id: 10, question: "Si el radio de una esfera se duplica, su volumen se multiplica por:", options: ["2", "4", "6", "8"], correct: 3, explanation: "8." },
      { id: 11, question: "Área superficial de un cubo de 4 cm de arista:", options: ["64 cm²", "96 cm²", "128 cm²", "144 cm²"], correct: 1, explanation: "96 cm²." },
      { id: 12, question: "Diagonal espacial de un cubo de 3 cm de lado:", options: ["3√2 cm", "3√3 cm", "6 cm", "9 cm"], correct: 1, explanation: "3√3 cm." },
      { id: 13, question: "Si la altura de un cono es 12 cm y su radio es 5 cm, su generatriz mide:", options: ["11 cm", "12 cm", "13 cm", "15 cm"], correct: 2, explanation: "13 cm." },
      { id: 14, question: "Volumen de una esfera con radio de 3 cm (en función de π):", options: ["18π cm³", "36π cm³", "54π cm³", "108π cm³"], correct: 1, explanation: "36π cm³." },
      { id: 15, question: "Si dos puntos en el plano son (1, 2) y (4, 6), la distancia euclidiana es:", options: ["3", "4", "5", "6"], correct: 2, explanation: "5." },
      { id: 16, question: "Área de un triángulo con base de 12 cm y altura de 7 cm:", options: ["36 cm²", "42 cm²", "48 cm²", "84 cm²"], correct: 1, explanation: "42 cm²." },
      { id: 17, question: "Capacidad en litros de un tanque cúbico de 1 metro de arista:", options: ["100 L", "500 L", "1000 L", "10000 L"], correct: 2, explanation: "1,000 Litros." },
      { id: 18, question: "Si el diámetro de una circunferencia es 20 cm, su longitud es (π ≈ 3.14):", options: ["31.4 cm", "62.8 cm", "125.6 cm", "314.0 cm"], correct: 1, explanation: "62.8 cm." },
      { id: 19, question: "Fórmula de Mosteller utiliza la raíz cuadrada del producto de peso y talla dividida entre:", options: ["1000", "2500", "3600", "5000"], correct: 2, explanation: "3600." },
      { id: 20, question: "Ecuación general de una esfera con centro en el origen en 3D:", options: ["x + y + z = r", "x² + y² + z² = r²", "xy + yz = r", "x² - y² = r²"], correct: 1, explanation: "x² + y² + z² = r²." }
    ]
  },
  7: {
    title: "Banco Nivel 2 - Módulo 7 (20 Preguntas)",
    questions: [
      { id: 1, question: "Probabilidad de tener la enfermedad dado un resultado positivo:", options: ["Sensibilidad", "Especificidad", "Valor Predictivo Positivo", "Prevalencia"], correct: 2, explanation: "Valor Predictivo Positivo (VPP)." },
      { id: 2, question: "Sensibilidad 95%, especificidad 90%, prevalencia 10%. VPP aproximado:", options: ["45% ~ 50%", "65% ~ 70%", "85% ~ 90%", "95%"], correct: 0, explanation: "Aprox 50%." },
      { id: 3, question: "Premisa 1: Todo inmunosupresor aumenta infección. Premisa 2: Ciclosporina es inmunosupresor. Conclusión:", options: ["Ciclosporina aumenta riesgo de infección", "Cura infecciones", "No se relaciona", "Es placebo"], correct: 0, explanation: "Modus Ponens." },
      { id: 4, question: "La probabilidad de que una prueba sea negativa en personas sanas se conoce como:", options: ["Sensibilidad", "Especificidad", "VPP", "VPN"], correct: 1, explanation: "Especificidad." },
      { id: 5, question: "Si se lanzan dos dados legales, ¿cuál es la probabilidad de que la suma sea 7?", options: ["1/6", "1/9", "5/36", "7/36"], correct: 0, explanation: "1/6." },
      { id: 6, question: "Premisa: Ningún antibiótico es antiviral. El aciclovir es antiviral. Conclusión:", options: ["El aciclovir es antibiótico", "El aciclovir no es antibiótico", "Inútil", "Indeterminado"], correct: 1, explanation: "El aciclovir no es antibiótico." },
      { id: 7, question: "Probabilidad de evento complementario P(A') si P(A) = 0.35:", options: ["0.35", "0.50", "0.65", "0.75"], correct: 2, explanation: "0.65." },
      { id: 8, question: "Proporción de verdaderos positivos entre todos los enfermos:", options: ["Sensibilidad", "Especificidad", "VPP", "VPN"], correct: 0, explanation: "Sensibilidad." },
      { id: 9, question: "Si dos eventos A y B son mutuamente excluyentes, P(A ∩ B) es:", options: ["1", "0.5", "0", "P(A) × P(B)"], correct: 2, explanation: "0." },
      { id: 10, question: "Falacia lógica de afirmar el consecuente:", options: ["Si P entonces Q, Q, por tanto P", "Modus Tollens", "Silogismo disyuntivo", "Ninguna"], correct: 0, explanation: "Afirmación del consecuente." },
      { id: 11, question: "Probabilidad de extraer una carta de corazones de una baraja de 52 cartas:", options: ["1/4", "1/13", "1/2", "4/13"], correct: 0, explanation: "1/4." },
      { id: 12, question: "Si la prevalencia de una enfermedad es del 1%, se considera:", options: ["Frecuente", "Rara o baja prevalencia", "Pandémica", "Endémica"], correct: 1, explanation: "Baja prevalencia." },
      { id: 13, question: "Teorema de Bayes calcula fundamentalmente:", options: ["Probabilidades condicionales inversas", "Áreas", "Logaritmos", "Derivadas"], correct: 0, explanation: "Probabilidades condicionales inversas." },
      { id: 14, question: "Si P(A) = 0.4 y P(B) = 0.5 y son independientes, P(A y B):", options: ["0.9", "0.1", "0.2", "0.5"], correct: 2, explanation: "0.2." },
      { id: 15, question: "Valor Predictivo Negativo (VPN) mide probabilidad de:", options: ["Estar sano dado resultado negativo", "Estar enfermo", "Sintomatología", "Vacunación"], correct: 0, explanation: "Estar sano dado resultado negativo." },
      { id: 16, question: "Modus Tollens formal:", options: ["Si P entonces Q, no Q, por tanto no P", "P entonces Q", "P o Q", "Ninguna"], correct: 0, explanation: "Modus Tollens." },
      { id: 17, question: "En un ensayo con 1000 pacientes, 200 mejoraron. Probabilidad empírica:", options: ["0.1", "0.2", "0.5", "0.8"], correct: 1, explanation: "0.2." },
      { id: 18, question: "Si la probabilidad de éxito es 0.8, la de fracaso es:", options: ["0.2", "0.8", "1.0", "0.0"], correct: 0, explanation: "0.2." },
      { id: 19, question: "Prueba con especificidad del 100% significa que:", options: ["No tiene falsos positivos", "No tiene falsos negativos", "Perfecta", "Ninguno"], correct: 0, explanation: "No tiene falsos positivos." },
      { id: 20, question: "Razonamiento deductivo parte de:", options: ["Premisas generales a conclusiones particulares", "Azar", "Experimentos", "Intuición"], correct: 0, explanation: "Premisas generales." }
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
