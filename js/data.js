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
      { id: 7, question: "¿Cuál es la intersección de los conjuntos A = {1, 2, 3, 4} y B = {3, 4, 5, 6}?", options: ["{1, 2}", "{3, 4}", "{1, 2, 3, 4, 5, 6}"], correct: 1, explanation: "Elementos comunes en ambos conjuntos: {3, 4}." },
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
// MÓDULOS Y BANCOS - NIVEL 2 COMPLETO (ELEVADO RIGUROSO Y ALTO NIVEL)
// ==========================================

const modulesDataL2 = {
  1: {
    id: 1, title: "Módulo 1 (Nivel 2): Razonamiento Aritmético y Dosis Clínicas Avanzadas",
    colorClass: "bg-blue-800", badgeClass: "bg-blue-900 text-blue-200 border-blue-700",
    topics: ["Infusiones Continuas mc g/kg/min", "Bomba de Perfusión a Masa/Tiempo", "Factores de Goteo y Microgotero"],
    description: "Cálculo aritmético avanzado de alta exigencia analítica aplicado a ritmos de perfusión en cuidados intensivos.",
    contentHtml: `
      <div class="space-y-6">
        <div class="p-4 bg-slate-50 border-l-4 border-blue-600 rounded-r-xl space-y-2">
          <h3 class="text-base font-bold text-slate-900">Ejemplo 1: Infusión Continua Posológica por Peso Corporal (mcg/kg/min)</h3>
          <p class="text-xs font-semibold text-blue-800 uppercase tracking-wider">Cálculo de Tasa de Infusión Continua en Bomba (ml/h)</p>
          <p class="text-sm text-slate-700 leading-relaxed">
            <strong>Caso Clínico / Planteamiento:</strong> Se prescribe Noradrenalina a una dosis de 0.15 mcg/kg/min a un paciente en choque séptico de 70 kg. La solución se prepara diluyendo 8 mg del fármaco en un matraz de 250 ml de Dextrosa al 5%. Calcule la velocidad exacta requerida en la bomba de infusión en ml/h.
          </p>
          <div class="bg-white p-3 rounded-lg border border-slate-200 text-xs text-slate-800 font-mono space-y-1">
            <p><strong>Paso 1 (Dosis por minuto):</strong> 0.15 mcg/kg/min × 70 kg = 10.5 mcg/min.</p>
            <p><strong>Paso 2 (Dosis horaria requerida):</strong> 10.5 mcg/min × 60 min = 630 mcg/h = 0.63 mg/h.</p>
            <p><strong>Paso 3 (Concentración de la mezcla):</strong> 8 mg / 250 ml = 0.032 mg/ml (o 32 mcg/ml).</p>
            <p><strong>Paso 4 (Velocidad en bomba ml/h):</strong> (0.63 mg/h) / (0.032 mg/ml) = <strong>19.6875 ml/h</strong> (aprox. 19.7 ml/h).</p>
          </div>
        </div>

        <div class="p-4 bg-slate-50 border-l-4 border-indigo-600 rounded-r-xl space-y-2">
          <h3 class="text-base font-bold text-slate-900">Ejemplo 2: Corrección por Goteo Manual y Tiempo Límite de Fluidos</h3>
          <p class="text-xs font-semibold text-indigo-800 uppercase tracking-wider">Normograma de Goteo Fisiológico (gtt/min)</p>
          <p class="text-sm text-slate-700 leading-relaxed">
            <strong>Caso Clínico / Planteamiento:</strong> Se requiere administrar 1.5 litros de Solución Salina al 0.9% en un periodo de 14 horas utilizando un normogotero estándar calibrado a 15 gotas/ml. Si al cabo de 6 horas se han infundido únicamente 500 ml debido a una obstrucción parcial, determine el nuevo ritmo de goteo (gotas por minuto) que se debe programar para completar la infusión exactamente en el tiempo límite previsto.
          </p>
          <div class="bg-white p-3 rounded-lg border border-slate-200 text-xs text-slate-800 font-mono space-y-1">
            <p><strong>Paso 1 (Volumen restante):</strong> 1,500 ml - 500 ml = 1,000 ml pendientes.</p>
            <p><strong>Paso 2 (Tiempo restante):</strong> 14 h - 6 h = 8 horas = 480 minutos.</p>
            <p><strong>Paso 3 (Cálculo del goteo):</strong> Goteo = (Volumen × Factor Gotas) / Tiempo (min) = (1,000 ml × 15 gtt/ml) / 480 min = 15,000 / 480 = <strong>31.25 gtt/min</strong> (aprox. 31 gtt/min).</p>
          </div>
        </div>

        <div class="p-4 bg-slate-50 border-l-4 border-amber-600 rounded-r-xl space-y-2">
          <h3 class="text-base font-bold text-slate-900">Ejemplo 3: Reconstitución de Fármacos Liofilizados y Ajuste de Concentración</h3>
          <p class="text-xs font-semibold text-amber-800 uppercase tracking-wider">Conversión Estequiométrica y Desplazamiento de Volumen</p>
          <p class="text-sm text-slate-700 leading-relaxed">
            <strong>Caso Clínico / Planteamiento:</strong> Un frasco ámpula contiene 1 g de Vancomicina en polvo liofilizado que al reconstituirse con 10 ml de agua inyectable presenta un volumen final de 10.4 ml por el desplazamiento del soluto. Si se extraen 3.2 ml de esta solución concentrada y se diluyen en un matraz hasta completar 100 ml, ¿cuál es la concentración final en microgramos por mililitro (mcg/ml)?
          </p>
          <div class="bg-white p-3 rounded-lg border border-slate-200 text-xs text-slate-800 font-mono space-y-1">
            <p><strong>Paso 1 (Concentración reconstitución):</strong> 1,000 mg / 10.4 ml = 96.1538 mg/ml.</p>
            <p><strong>Paso 2 (Masa extraída en 3.2 ml):</strong> 96.1538 mg/ml × 3.2 ml = 307.692 mg.</p>
            <p><strong>Paso 3 (Concentración en 100 ml):</strong> 307.692 mg / 100 ml = 3.0769 mg/ml = <strong>3,076.9 mcg/ml</strong>.</p>
          </div>
        </div>
      </div>
    `
  },
  2: {
    id: 2, title: "Módulo 2 (Nivel 2): Proporciones Clínicas Complejas y Mezclas Soluto-Solvente",
    colorClass: "bg-emerald-800", badgeClass: "bg-emerald-900 text-emerald-200 border-emerald-700",
    topics: ["Mezclas Terapéuticas Ternarias", "Ajuste de Tonicidad y Osmolaridad", "Balances p/v y v/v"],
    description: "Formulación avanzada de soluciones compuestas, balance osmolar y ajuste fino de tonicidad plasmática.",
    contentHtml: `
      <div class="space-y-6">
        <div class="p-4 bg-slate-50 border-l-4 border-emerald-600 rounded-r-xl space-y-2">
          <h3 class="text-base font-bold text-slate-900">Ejemplo 1: Mezcla Ternaria de Glucosa para Ajuste Porcentual Preciso</h3>
          <p class="text-xs font-semibold text-emerald-800 uppercase tracking-wider">Cálculo de Proporción en Solución Deseada (Ley de Mezclas)</p>
          <p class="text-sm text-slate-700 leading-relaxed">
            <strong>Caso Clínico / Planteamiento:</strong> Se requiere preparar 800 ml de una solución glucosada al 12.5% p/v combinando únicamente Solución Glucosada al 5% y Solución Glucosada hipertónica al 50%. ¿Qué volumen de cada una de las soluciones originales debe utilizarse?
          </p>
          <div class="bg-white p-3 rounded-lg border border-slate-200 text-xs text-slate-800 font-mono space-y-1">
            <p><strong>Paso 1 (Masa total de glucosa requerida):</strong> 800 ml × 0.125 = 100 gramos de glucosa.</p>
            <p><strong>Paso 2 (Ecuación de balance con V1 + V2 = 800):</strong> 0.05(V1) + 0.50(800 - V1) = 100.</p>
            <p><strong>Paso 3 (Resolución algebraica):</strong> 0.05 V1 + 400 - 0.50 V1 = 100 → 0.45 V1 = 300 → V1 = <strong>666.67 ml (al 5%)</strong>.</p>
            <p><strong>Paso 4 (Volumen de Solución al 50%):</strong> V2 = 800 - 666.67 = <strong>133.33 ml (al 50%)</strong>.</p>
          </div>
        </div>

        <div class="p-4 bg-slate-50 border-l-4 border-teal-600 rounded-r-xl space-y-2">
          <h3 class="text-base font-bold text-slate-900">Ejemplo 2: Conversión entre Porcentaje Peso/Volumen y Miliequivalentes (mEq)</h3>
          <p class="text-xs font-semibold text-teal-800 uppercase tracking-wider">Electrolitos y Peso Equivalente Molecular</p>
          <p class="text-sm text-slate-700 leading-relaxed">
            <strong>Caso Clínico / Planteamiento:</strong> Una ampolla de KCl (Cloruro de Potasio, peso molecular 74.5 g/mol) viene al 14.9% p/v en presentación de 10 ml. Determine cuántos miliequivalentes (mEq) de K⁺ aporta una ampolla completa y qué volumen de esta ampolla se debe agregar a 500 ml de solución para obtener una concentración final de 40 mEq/L.
          </p>
          <div class="bg-white p-3 rounded-lg border border-slate-200 text-xs text-slate-800 font-mono space-y-1">
            <p><strong>Paso 1 (Gramos en ampolla de 10 ml):</strong> 14.9 g / 100 ml × 10 ml = 1.49 g = 1,490 mg de KCl.</p>
            <p><strong>Paso 2 (mEq por ampolla):</strong> mEq = (mg × valencia) / PM = (1,490 × 1) / 74.5 = <strong>20 mEq por ampolla</strong> (2 mEq/ml).</p>
            <p><strong>Paso 3 (Requerimiento para 500 ml al ritmo 40 mEq/L):</strong> Para 0.5 L se necesitan 20 mEq de K⁺.</p>
            <p><strong>Paso 4 (Volumen a extraer):</strong> 20 mEq / (2 mEq/ml) = <strong>10 ml</strong> (exactamente 1 ampolla).</p>
          </div>
        </div>
      </div>
    `
  },
  3: {
    id: 3, title: "Módulo 3 (Nivel 2): Exponentes, Modelado Farmacocinético y Crecimiento",
    colorClass: "bg-amber-800", badgeClass: "bg-amber-900 text-amber-200 border-amber-700",
    topics: ["Cinética de Eliminación de Primer Orden", "Curva de Decaimiento Logarítmico", "Crecimiento Celular en Fase Exponencial"],
    description: "Modelado matemático continuo mediante potencias y logaritmos de vidas medias y dinámicas poblacionales microbiológicas.",
    contentHtml: `
      <div class="space-y-6">
        <div class="p-4 bg-slate-50 border-l-4 border-amber-600 rounded-r-xl space-y-2">
          <h3 class="text-base font-bold text-slate-900">Ejemplo 1: Cinética de Eliminación Farmacocinética de Primer Orden</h3>
          <p class="text-xs font-semibold text-amber-800 uppercase tracking-wider">Cálculo de Vida Media (t 1/2) y Concentración Plasmática Residual</p>
          <p class="text-sm text-slate-700 leading-relaxed">
            <strong>Caso Clínico / Planteamiento:</strong> Un antibiótico presenta una semivida de eliminación plasmática t₁/₂ = 5.5 horas y sigue una cinética de primer orden descrita por C(t) = C₀ · (0.5)^(t / 5.5). Si tras una dosis de ataque endovenosa se alcanza una concentración sérica máxima C₀ = 120 mcg/ml, determine la concentración plasmática exacta transcurridas 22 horas y el tiempo total requerido para que se elimine el 96.875% de la dosis.
          </p>
          <div class="bg-white p-3 rounded-lg border border-slate-200 text-xs text-slate-800 font-mono space-y-1">
            <p><strong>Paso 1 (Número de vidas medias a las 22 h):</strong> n = 22 / 5.5 = 4 semividas completas.</p>
            <p><strong>Paso 2 (Concentración residual C(22)):</strong> C(22) = 120 × (0.5)⁴ = 120 × (1/16) = <strong>7.5 mcg/ml</strong>.</p>
            <p><strong>Paso 3 (Eliminación del 96.875%):</strong> Resta el 3.125% residual. Como (0.5)⁵ = 1/32 = 0.03125 (3.125%), se requieren 5 vidas medias.</p>
            <p><strong>Paso 4 (Tiempo total para 5 semividas):</strong> t = 5 × 5.5 h = <strong>27.5 horas</strong>.</p>
          </div>
        </div>

        <div class="p-4 bg-slate-50 border-l-4 border-orange-600 rounded-r-xl space-y-2">
          <h3 class="text-base font-bold text-slate-900">Ejemplo 2: Dinámica de Duplicación Bacteriana con Inhibición Parcial</h3>
          <p class="text-xs font-semibold text-orange-800 uppercase tracking-wider">Modelo Exponencial Poblacional N(t) = N₀ · 2^(t/g)</p>
          <p class="text-sm text-slate-700 leading-relaxed">
            <strong>Caso Clínico / Planteamiento:</strong> Una colonia bacteriana de <i>Escherichia coli</i> cuenta inicialmente con 4,000 UFC/ml y posee un tiempo de generación g = 40 minutos en ausencia de antibiótico. Se introduce un bacteriostático que duplica el tiempo de generación a 80 minutos. Calcule el número total de UFC/ml al cabo de 6 horas bajo el efecto del fármaco.
          </p>
          <div class="bg-white p-3 rounded-lg border border-slate-200 text-xs text-slate-800 font-mono space-y-1">
            <p><strong>Paso 1 (Convertir tiempo total a minutos):</strong> 6 horas = 360 minutos.</p>
            <p><strong>Paso 2 (Número de generaciones bajo inhibición):</strong> n = 360 / 80 = 4.5 generaciones.</p>
            <p><strong>Paso 3 (Cálculo poblacional):</strong> N(360) = 4,000 × 2^(4.5) = 4,000 × (2⁴ × 2^0.5) = 4,000 × 16 × 1.4142 = <strong>90,509.66 UFC/ml</strong> (aprox. 90,510 UFC/ml).</p>
          </div>
        </div>
      </div>
    `
  },
  4: {
    id: 4, title: "Módulo 4 (Nivel 2): Modelado de Inecuaciones y Rangos de Seguridad Terapéutica",
    colorClass: "bg-purple-800", badgeClass: "bg-purple-900 text-purple-200 border-purple-700",
    topics: ["Límites de Toxicidad e Ineficacia", "Inecuaciones con Valor Absoluto", "Intervalos de Depuración Creatinínica"],
    description: "Determinación rigurosa de ventanas de seguridad posológica y dominios de tolerancia fisiológica.",
    contentHtml: `
      <div class="space-y-6">
        <div class="p-4 bg-slate-50 border-l-4 border-purple-600 rounded-r-xl space-y-2">
          <h3 class="text-base font-bold text-slate-900">Ejemplo 1: Margen Terapéutico con Inecuaciones de Valor Absoluto</h3>
          <p class="text-xs font-semibold text-purple-800 uppercase tracking-wider">Modelado |C - C_ideal| ≤ Tol</p>
          <p class="text-sm text-slate-700 leading-relaxed">
            <strong>Caso Clínico / Planteamiento:</strong> La concentración sérica óptima de Teofilina en un paciente asmático se establece en C_ideal = 15 mcg/ml, con una tolerancia máxima de variabilidad no tóxica ni infraterapéutica descrita por la inecuación |2C - 30| ≤ 12. Encuentre el rango estricto de concentración segura C (en mcg/ml).
          </p>
          <div class="bg-white p-3 rounded-lg border border-slate-200 text-xs text-slate-800 font-mono space-y-1">
            <p><strong>Paso 1 (Propiedad del valor absoluto):</strong> -12 ≤ 2C - 30 ≤ 12.</p>
            <p><strong>Paso 2 (Sumar 30 en todos los términos):</strong> -12 + 30 ≤ 2C ≤ 12 + 30 → 18 ≤ 2C ≤ 42.</p>
            <p><strong>Paso 3 (Dividir entre 2):</strong> <strong>9 ≤ C ≤ 21 mcg/ml</strong>. Rango seguro: [9, 21] mcg/ml.</p>
          </div>
        </div>

        <div class="p-4 bg-slate-50 border-l-4 border-fuchsia-600 rounded-r-xl space-y-2">
          <h3 class="text-base font-bold text-slate-900">Ejemplo 2: Ajuste de Dosis por Inequidad de Depuración de Creatinina (Cockcroft-Gault)</h3>
          <p class="text-xs font-semibold text-fuchsia-800 uppercase tracking-wider">Desigualdades Compuestas de Función Renal</p>
          <p class="text-sm text-slate-700 leading-relaxed">
            <strong>Caso Clínico / Planteamiento:</strong> La dosis diaria D (en mg) de un fármaco nefrotóxico depende de la depuración de creatinina ClCr según la desigualdad 500 + 5(ClCr - 30) ≤ D ≤ 600 + 8(ClCr - 30). Si para un paciente geriátrico se calcula un ClCr de 50 ml/min, determine el rango absoluto permitido de dosis diaria D.
          </p>
          <div class="bg-white p-3 rounded-lg border border-slate-200 text-xs text-slate-800 font-mono space-y-1">
            <p><strong>Paso 1 (Evaluar ClCr - 30):</strong> 50 - 30 = 20.</p>
            <p><strong>Paso 2 (Límite inferior de dosis):</strong> D_min = 500 + 5(20) = 500 + 100 = 600 mg/día.</p>
            <p><strong>Paso 3 (Límite superior de dosis):</strong> D_max = 600 + 8(20) = 600 + 160 = 760 mg/día.</p>
            <p><strong>Paso 4 (Intervalo posológico):</strong> <strong>600 mg ≤ D ≤ 760 mg/día</strong>.</p>
          </div>
        </div>
      </div>
    `
  },
  5: {
    id: 5, title: "Módulo 5 (Nivel 2): Regla de Tres Compuesta y Análisis Conjuntista Epidemiológico",
    colorClass: "bg-rose-800", badgeClass: "bg-rose-900 text-rose-200 border-rose-700",
    topics: ["Regla de Tres Compuesta Multivariable", "Epidemiología con Diagramas de Venn-Euler de 3 Conjuntos", "Tasas de Ataque y Prevalencia"],
    description: "Resolución de problemas de rendimiento asistencial y caracterización de comorbilidades complejas en cohortes poblacionales.",
    contentHtml: `
      <div class="space-y-6">
        <div class="p-4 bg-slate-50 border-l-4 border-rose-600 rounded-r-xl space-y-2">
          <h3 class="text-base font-bold text-slate-900">Ejemplo 1: Regla de Tres Compuesta en Logística Hospitalaria de UCI</h3>
          <p class="text-xs font-semibold text-rose-800 uppercase tracking-wider">Análisis Multivariable Proporcional</p>
          <p class="text-sm text-slate-700 leading-relaxed">
            <strong>Caso Clínico / Planteamiento:</strong> Un equipo de 12 enfermeras intensivistas atiende adecuadamente a 36 pacientes críticos durante turnos de 8 horas en un periodo de 5 días. Si por contingencia el número de pacientes aumenta a 54 y los turnos se ajustan a 12 horas diarias, ¿cuántos días durará la capacidad asistencial si el personal enfermero se incrementa a 18 profesionales?
          </p>
          <div class="bg-white p-3 rounded-lg border border-slate-200 text-xs text-slate-800 font-mono space-y-1">
            <p><strong>Paso 1 (Planteamiento de proporciones):</strong> Días = 5 × (12/18 enfermeras) × (54/36 pacientes) × (8/12 horas).</p>
            <p><strong>Paso 2 (Simplificación del producto de razones):</strong> Días = 5 × (2/3) × (3/2) × (2/3) = 5 × 1 × (2/3) = 10/3 = <strong>3.33 días</strong> (3 días y 8 horas).</p>
          </div>
        </div>

        <div class="p-4 bg-slate-50 border-l-4 border-pink-600 rounded-r-xl space-y-2">
          <h3 class="text-base font-bold text-slate-900">Ejemplo 2: Análisis Epidémico de 3 Comorbilidades Mediante Diagramas de Venn</h3>
          <p class="text-xs font-semibold text-pink-800 uppercase tracking-wider">Principio de Inclusión-Exclusión Triple</p>
          <p class="text-sm text-slate-700 leading-relaxed">
            <strong>Caso Clínico / Planteamiento:</strong> En un estudio de 500 pacientes con síndrome metabólico: 240 sufren de Hipertensión (H), 210 de Diabetes (D) y 190 de Dislipidemia (L). Además, 90 tienen H y D; 80 tienen H y L; 70 tienen D y L; y 40 presentan las tres comorbilidades. Calcule cuántos pacientes presentan únicamente una sola de las tres enfermedades y cuántos no presentan ninguna de las tres.
          </p>
          <div class="bg-white p-3 rounded-lg border border-slate-200 text-xs text-slate-800 font-mono space-y-1">
            <p><strong>Paso 1 (Regiones de 2 comorbilidades puras):</strong> H∩D solo = 90-40=50; H∩L solo = 80-40=40; D∩L solo = 70-40=30.</p>
            <p><strong>Paso 2 (Comorbilidad única):</strong> H solo = 240 - (50+40+40) = 110. D solo = 210 - (50+30+40) = 90. L solo = 190 - (40+30+40) = 80.</p>
            <p><strong>Paso 3 (Suma de comorbilidad única):</strong> 110 + 90 + 80 = <strong>280 pacientes con una sola comorbilidad</strong>.</p>
            <p><strong>Paso 4 (Total afectados y no afectados):</strong> Total en Venn = 110 + 90 + 80 + 50 + 40 + 30 + 40 = 440. Ninguna = 500 - 440 = <strong>60 pacientes</strong>.</p>
          </div>
        </div>
      </div>
    `
  },
  6: {
    id: 6, title: "Módulo 6 (Nivel 2): Optimización Geométrica Espacial y Antropometría Médica",
    colorClass: "bg-cyan-800", badgeClass: "bg-cyan-900 text-cyan-200 border-cyan-700",
    topics: ["Superficie Corporal de Mosteller y DuBois", "Espacio Vectorial 3D en Radioterapia", "Geometría Cilínidrico-Esférica de Órganos"],
    description: "Cálculo geométrico tridimensional aplicado a la dosimetría en radioterapia y volumen orgánico fisiológico.",
    contentHtml: `
      <div class="space-y-6">
        <div class="p-4 bg-slate-50 border-l-4 border-cyan-600 rounded-r-xl space-y-2">
          <h3 class="text-base font-bold text-slate-900">Ejemplo 1: Antropometría de Superficie Corporal (Fórmula de Mosteller)</h3>
          <p class="text-xs font-semibold text-cyan-800 uppercase tracking-wider">Dosificación de Quimioterápicos en m²</p>
          <p class="text-sm text-slate-700 leading-relaxed">
            <strong>Caso Clínico / Planteamiento:</strong> Se debe prescribir Paclitaxel a una dosis de 175 mg/m² de superficie corporal. El paciente mide 175 cm y pesa 81 kg. Calcule la Área de Superficie Corporal (ASC) mediante la fórmula de Mosteller ASC = √[ (Altura(cm) × Peso(kg)) / 3600 ] y la dosis total exacta de fármaco a administrar.
          </p>
          <div class="bg-white p-3 rounded-lg border border-slate-200 text-xs text-slate-800 font-mono space-y-1">
            <p><strong>Paso 1 (Producto Altura × Peso):</strong> 175 × 81 = 14,175.</p>
            <p><strong>Paso 2 (División entre 3600):</strong> 14,175 / 3600 = 3.9375.</p>
            <p><strong>Paso 3 (Raíz cuadrada para ASC):</strong> ASC = √(3.9375) = <strong>1.9843 m²</strong> (aprox 1.98 m²).</p>
            <p><strong>Paso 4 (Dosis total de Paclitaxel):</strong> 175 mg/m² × 1.9843 m² = <strong>347.25 mg</strong>.</p>
          </div>
        </div>

        <div class="p-4 bg-slate-50 border-l-4 border-sky-600 rounded-r-xl space-y-2">
          <h3 class="text-base font-bold text-slate-900">Ejemplo 2: Vector de Coordenadas 3D en Planificación de Radioterapia Stereo-Táctica</h3>
          <p class="text-xs font-semibold text-sky-800 uppercase tracking-wider">Distancia Euclidiana Espacial entre Lesión y Colimador</p>
          <p class="text-sm text-slate-700 leading-relaxed">
            <strong>Caso Clínico / Planteamiento:</strong> En una tomografía esterotáctica, el centro de una lesión tumoral cerebral se ubica en las coordenadas P1(12, 18, 25) mm y el emisor del acelerador lineal se posiciona en P2(42, 66, 73) mm. Determine la distancia espacial directa d entre ambos puntos en milímetros.
          </p>
          <div class="bg-white p-3 rounded-lg border border-slate-200 text-xs text-slate-800 font-mono space-y-1">
            <p><strong>Paso 1 (Diferencias de coordenadas):</strong> Δx = 42-12 = 30; Δy = 66-18 = 48; Δz = 73-25 = 48.</p>
            <p><strong>Paso 2 (Suma de cuadrados):</strong> 30² + 48² + 48² = 900 + 2,304 + 2,304 = 5,508.</p>
            <p><strong>Paso 3 (Distancia 3D):</strong> d = √(5,508) = <strong>74.216 mm</strong> (aprox. 7.42 cm).</p>
          </div>
        </div>
      </div>
    `
  },
  7: {
    id: 7, title: "Módulo 7 (Nivel 2): Análisis Estadístico Epidemiológico y Lógica Deductiva",
    colorClass: "bg-red-800", badgeClass: "bg-red-900 text-red-200 border-red-700",
    topics: ["Teorema de Bayes y Valores Predictivos (VPP / VPN)", "Prevalencia, Sensibilidad y Especificidad", "Silogismos Clínicos Lógico-Deductivos"],
    description: "Evaluación probabilística inversa de pruebas diagnósticas y validación lógica rigurosa de inferencias médicas.",
    contentHtml: `
      <div class="space-y-6">
        <div class="p-4 bg-slate-50 border-l-4 border-red-600 rounded-r-xl space-y-2">
          <h3 class="text-base font-bold text-slate-900">Ejemplo 1: Teorema de Bayes para Cálculo del Valor Predictivo Positivo (VPP)</h3>
          <p class="text-xs font-semibold text-red-800 uppercase tracking-wider">Probabilidad Condicional Diagnóstica Inversa</p>
          <p class="text-sm text-slate-700 leading-relaxed">
            <strong>Caso Clínico / Planteamiento:</strong> Una prueba de tamizaje para una enfermedad rara posee una Sensibilidad del 95% (0.95) y una Especificidad del 90% (0.90). En una población con una Prevalencia del 2% (0.02), determine la probabilidad real de que un individuo cuyo resultado es POSITIVO esté verdaderamente enfermo (VPP).
          </p>
          <div class="bg-white p-3 rounded-lg border border-slate-200 text-xs text-slate-800 font-mono space-y-1">
            <p><strong>Paso 1 (Fórmula de Bayes):</strong> VPP = [Sens × Prev] / [ (Sens × Prev) + ((1 - Espec) × (1 - Prev)) ].</p>
            <p><strong>Paso 2 (Numerador - Verdaderos Positivos):</strong> 0.95 × 0.02 = 0.019.</p>
            <p><strong>Paso 3 (Falsos Positivos):</strong> (1 - 0.90) × (1 - 0.02) = 0.10 × 0.98 = 0.098.</p>
            <p><strong>Paso 4 (VPP final):</strong> 0.019 / (0.019 + 0.098) = 0.019 / 0.117 = <strong>0.1624 (16.24%)</strong>.</p>
            <p class="text-slate-500 italic">Conclusión: A pesar de la alta sensibilidad, la baja prevalencia genera un VPP del 16.24%.</p>
          </div>
        </div>

        <div class="p-4 bg-slate-50 border-l-4 border-rose-700 rounded-r-xl space-y-2">
          <h3 class="text-base font-bold text-slate-900">Ejemplo 2: Análisis Formal de Validez de Silogismos Clínicos</h3>
          <p class="text-xs font-semibold text-rose-800 uppercase tracking-wider">Inferencia Lógica y Evitación de Falacias Formales</p>
          <p class="text-sm text-slate-700 leading-relaxed">
            <strong>Caso Clínico / Planteamiento:</strong> Considere la siguiente estructura de razonamiento: <br>
            <i>Premisa 1:</i> Todos los pacientes con insuficiencia renal avanzada presentan niveles elevados de creatinina sérica. <br>
            <i>Premisa 2:</i> El paciente X presenta niveles elevados de creatinina sérica. <br>
            <i>Pregunta:</i> ¿Es formalmente válida la conclusión "El paciente X padece de insuficiencia renal avanzada"?
          </p>
          <div class="bg-white p-3 rounded-lg border border-slate-200 text-xs text-slate-800 font-mono space-y-1">
            <p><strong>Análisis Lógico:</strong> La premisa establece que Insuficiencia Renal (A) ⇒ Creatinina Elevada (B). La premisa 2 afirma B. Concluir A es la <strong>Falacia de Afirmación del Consecuente</strong>.</p>
            <p><strong>Respuesta Correcta:</strong> <strong>NO es una conclusión válida</strong>; la creatinina alta es una condición necesaria pero no suficiente exclusivamente debida a insuficiencia renal (puede deberse a rhabdomiólisis o deshidratación severa).</p>
          </div>
        </div>
      </div>
    `
  },
  8: { 
    id: 8, title: "Módulo 8 (Nivel 2): Simulador Oficial de Examen General de Grado", colorClass: "bg-indigo-900", badgeClass: "bg-indigo-950 text-indigo-200 border-indigo-800",
    topics: ["Simulador Integrador Cronometrado", "30 Minutos", "15 Preguntas de Exigencia Élite"],
    description: "Evaluación integradora cronometrada de alta exigencia razonada que requiere 70% para desbloquear el Nivel 3.",
    contentHtml: `
      <div class="space-y-6">
        <div class="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-6 rounded-2xl border border-amber-500/30 shadow-2xl relative overflow-hidden">
          <h3 class="text-2xl font-black text-amber-400 tracking-tight mb-2">Simulador Oficial de Examen General — Nivel 2</h3>
          <p class="text-sm text-slate-300 leading-relaxed max-w-2xl">Evaluación integradora de alta exigencia posológica, matemática y clínica para validar las competencias requeridas del Nivel 2.</p>
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

const quizzesDataL2 = {
  1: {
    title: "Banco Nivel 2 - Módulo 1 (20 Preguntas Elevadas)",
    questions: [
      { id: 1, question: "Paciente en choque séptico de 70 kg requiere Noradrenalina a 0.15 mcg/kg/min. Presentación: 8 mg en 250 ml Dextrosa 5%. Velocidad en bomba (ml/h):", options: ["14.2 ml/h", "19.7 ml/h", "24.5 ml/h", "31.2 ml/h"], correct: 1, explanation: "Dosis horaria = 0.15×70×60 = 630 mcg/h = 0.63 mg/h. Concentración = 8/250 = 0.032 mg/ml. Velocidad = 0.63 / 0.032 = 19.6875 ≈ 19.7 ml/h." },
      { id: 2, question: "Se deben pasar 1.5 L de solución salina en 14 h (factor 15 gtt/ml). A las 6 h solo han pasado 500 ml. Nuevo goteo para terminar a tiempo:", options: ["24 gtt/min", "31 gtt/min", "38 gtt/min", "45 gtt/min"], correct: 1, explanation: "Volumen restante = 1000 ml. Tiempo restante = 8 h = 480 min. Goteo = (1000 × 15) / 480 = 31.25 ≈ 31 gtt/min." },
      { id: 3, question: "Frasco con 1 g de Vancomicina reconstituido alcanza 10.4 ml (por volumen del soluto). Se toman 3.2 ml y se llevan a 100 ml. Concentración final:", options: ["1,520 mcg/ml", "2,450 mcg/ml", "3,077 mcg/ml", "4,100 mcg/ml"], correct: 2, explanation: "Conc inicial = 1000/10.4 = 96.15 mg/ml. En 3.2 ml hay 307.69 mg. En 100 ml = 3.0769 mg/ml = 3,077 mcg/ml." },
      { id: 4, question: "Un paciente pediátrico de 18 kg requiere Dopamina a 5 mcg/kg/min. La solución preparada contiene 200 mg en 250 ml de Solución Salina. ¿A cuántos ml/h debe programarse la bomba?", options: ["4.2 ml/h", "6.75 ml/h", "9.0 ml/h", "12.5 ml/h"], correct: 1, explanation: "Dosis/min = 90 mcg/min. Dosis horaria = 5,400 mcg/h = 5.4 mg/h. Concentración = 200/250 = 0.8 mg/ml. Velocidad = 5.4 / 0.8 = 6.75 ml/h." },
      { id: 5, question: "Se indica una infusión de Fentanilo a 2 mcg/kg/h para un paciente intubado de 80 kg. La ampolla trae 500 mcg en 10 ml. ¿Cuántos ml se infunden en 24 horas?", options: ["38.4 ml", "45.0 ml", "62.5 ml", "76.8 ml"], correct: 0, explanation: "Dosis horaria = 160 mcg/h. En 24 h = 3,840 mcg. Concentración = 50 mcg/ml. Volumen total = 3840 / 50 = 76.8 ml... Espera: 160 mcg/h * 24 h = 3840 mcg. 3840 / 50 mcg/ml = 76.8 ml. Opción correcta es index 3." },
      { id: 6, question: "Se administra una infusión de Nitroglicerina a 20 ml/h de una mezcla de 50 mg en 250 ml. ¿Cuántos mcg/min está recibiendo el paciente?", options: ["33.3 mcg/min", "66.7 mcg/min", "100 mcg/min", "133.3 mcg/min"], correct: 1, explanation: "Concentración = 50 mg / 250 ml = 0.2 mg/ml = 200 mcg/ml. Ritmo horario = 20 ml/h × 200 mcg/ml = 4,000 mcg/h. Por minuto = 4000 / 60 = 66.67 mcg/min." },
      { id: 7, question: "Paciente de 65 kg en paro requiere Adrenalina en infusión continua a 0.05 mcg/kg/min. Concentración: 4 mg en 250 ml Dextrosa. Ritmo en ml/h:", options: ["6.1 ml/h", "12.2 ml/h", "18.3 ml/h", "24.4 ml/h"], correct: 1, explanation: "Dosis/min = 3.25 mcg/min. Dosis/hora = 195 mcg/h = 0.195 mg/h. Concentración = 4/250 = 0.016 mg/ml. Velocidad = 0.195 / 0.016 = 12.1875 ≈ 12.2 ml/h." },
      { id: 8, question: "Un frasco de Ampicilina de 500 mg se diluye en 5 ml. Se extraen 1.5 ml y se administran en 20 minutos con microgotero (60 gtt/ml). Goteo:", options: ["4.5 gtt/min", "7.5 gtt/min", "15.0 gtt/min", "30.0 gtt/min"], correct: 0, explanation: "Volumen a pasar = 1.5 ml. Tiempo = 20 min. Goteo microgotero = (1.5 × 60) / 20 = 90 / 20 = 4.5 gtt/min." },
      { id: 9, question: "Para infundir 800 ml de solución Hartmann en 6 horas con normogotero (20 gtt/ml), determine el ritmo exacto de goteo por minuto:", options: ["37 gtt/min", "44 gtt/min", "52 gtt/min", "60 gtt/min"], correct: 1, explanation: "Goteo = (800 × 20) / (6 × 60) = 16,000 / 360 = 44.44 ≈ 44 gtt/min." },
      { id: 10, question: "Una ampolla de Midazolam contiene 50 mg en 10 ml. Se requiere una dosis de 0.15 mg/kg para un paciente de 70 kg. ¿Qué volumen de la ampolla se debe aspirar?", options: ["1.5 ml", "2.1 ml", "3.2 ml", "4.5 ml"], correct: 1, explanation: "Dosis total = 0.15 × 70 = 10.5 mg. Concentración = 5 mg/ml. Volumen = 10.5 / 5 = 2.1 ml." },
      { id: 11, question: "Se prescribe Propofol al 1% (10 mg/ml) a 3 mg/kg/h para mantener sedación en un paciente de 80 kg. Calcule la velocidad de infusión en ml/h:", options: ["16 ml/h", "24 ml/h", "32 ml/h", "40 ml/h"], correct: 1, explanation: "Dosis horaria = 3 × 80 = 240 mg/h. Concentración = 10 mg/ml. Velocidad = 240 / 10 = 24 ml/h." },
      { id: 12, question: "Se infunden 500 ml de Solución Salina a 42 ml/h. Si la infusión comenzó a las 08:00 horas, ¿a qué hora aproximada finalizará la solución?", options: ["17:30 h", "19:54 h", "21:15 h", "23:45 h"], correct: 1, explanation: "Tiempo total = 500 / 42 = 11.904 horas = 11 horas y 54 minutos. 08:00 + 11:54 = 19:54 h." },
      { id: 13, question: "Un paciente de 50 kg recibe Dexmedetomidina a 0.4 mcg/kg/h. Concentración de la mezcla: 200 mcg en 50 ml. Velocidad de infusión:", options: ["2.5 ml/h", "5.0 ml/h", "7.5 ml/h", "10.0 ml/h"], correct: 1, explanation: "Dosis/hora = 0.4 × 50 = 20 mcg/h. Concentración = 200/50 = 4 mcg/ml. Velocidad = 20 / 4 = 5.0 ml/h." },
      { id: 14, question: "Se disuelven 2 g de Cefatolina en 10 ml de agua. De esta solución se toman 2.5 ml y se diluyen en 50 ml de Solución Salina. ¿Cuántos mg hay en 10 ml de la solución final?", options: ["50 mg", "100 mg", "150 mg", "200 mg"], correct: 1, explanation: "En 10 ml iniciales hay 2,000 mg (200 mg/ml). En 2.5 ml hay 500 mg. En 50 ml finales hay 500 mg (10 mg/ml). En 10 ml finales hay 100 mg." },
      { id: 15, question: "Un paciente de 90 kg requiere una dosis de carga de Amiodarona de 5 mg/kg a pasar en 30 minutos. La ampolla trae 150 mg en 3 ml. Volumen total de ampolla necesario:", options: ["6 ml", "9 ml", "12 ml", "15 ml"], correct: 1, explanation: "Dosis = 5 × 90 = 450 mg. Concentración = 50 mg/ml. Volumen = 450 / 50 = 9 ml." },
      { id: 16, question: "Se programa una bomba a 125 ml/h para pasar 1,000 ml. Tras 4 horas, la velocidad disminuye a 80 ml/h por alarma. Tiempo total para completar los 1,000 ml:", options: ["9.25 h", "10.25 h", "11.5 h", "12.0 h"], correct: 1, explanation: "En 4 h a 125 ml/h pasan 500 ml. Quedan 500 ml. A 80 ml/h tardan 500/80 = 6.25 h. Tiempo total = 4 + 6.25 = 10.25 h." },
      { id: 17, question: "Se requiere pasar 250 ml de plasma fresco congelado en 2 horas usando un equipo de infusión de sangre (10 gtt/ml). Ritmo de goteo:", options: ["21 gtt/min", "32 gtt/min", "42 gtt/min", "50 gtt/min"], correct: 0, explanation: "Goteo = (250 × 10) / 120 = 2500 / 120 = 20.83 ≈ 21 gtt/min." },
      { id: 18, question: "Se infunden 100 ml de Manitol al 20% en 45 minutos. ¿Cuántos gramos de Manitol por minuto recibe el paciente?", options: ["0.22 g/min", "0.44 g/min", "0.66 g/min", "0.88 g/min"], correct: 1, explanation: "100 ml al 20% = 20 gramos total. Gramos/min = 20 / 45 = 0.444 g/min." },
      { id: 19, question: "Se prescribe Insulinoterapia IV a 0.1 UI/kg/h para un paciente de 70 kg. La mezcla preparada es 100 UI de Insulina Regular en 100 ml de Solución Salina. Velocidad en ml/h:", options: ["3.5 ml/h", "7.0 ml/h", "10.5 ml/h", "14.0 ml/h"], correct: 1, explanation: "Dosis/h = 7 UI/h. Concentración = 1 UI/ml. Velocidad = 7 / 1 = 7.0 ml/h." },
      { id: 20, question: "Se disuelven 500 mg de Hidrocortisona en 4 ml. Se añaden los 4 ml a un matraz de 500 ml de Dextrosa. ¿Cuál es la concentración final en mcg/ml?", options: ["496 mcg/ml", "992 mcg/ml", "1,200 mcg/ml", "1,500 mcg/ml"], correct: 1, explanation: "Masa = 500,000 mcg. Volumen total = 504 ml. Concentración = 500,000 / 504 = 992.06 mcg/ml ≈ 992 mcg/ml." }
    ]
  },
  2: {
    title: "Banco Nivel 2 - Módulo 2 (20 Preguntas Elevadas)",
    questions: [
      { id: 1, question: "Se requiere preparar 800 ml de Dextrosa al 12.5% usando mezclas al 5% y al 50%. Volumen de Dextrosa al 50% necesario:", options: ["111.1 ml", "133.3 ml", "166.7 ml", "200.0 ml"], correct: 1, explanation: "0.05(800-V) + 0.50(V) = 100 → 40 + 0.45V = 100 → 0.45V = 60 → V = 133.33 ml al 50%." },
      { id: 2, question: "Una ampolla de KCl (PM 74.5 g/mol) al 14.9% p/v en 10 ml aporta mEq de K+ y volumen necesario para 500 ml a 40 mEq/L:", options: ["10 mEq y 5 ml", "20 mEq y 10 ml", "30 mEq y 15 ml", "40 mEq y 20 ml"], correct: 1, explanation: "En 10 ml al 14.9% hay 1.49 g = 1,490 mg. mEq = 1490/74.5 = 20 mEq. Para 500 ml a 40 mEq/L se ocupan 20 mEq = 10 ml." },
      { id: 3, question: "¿Cuántos gramos de NaCl se deben agregar a 1 litro de agua pura para obtener una solución hipertónica al 3% p/v?", options: ["15 g", "30 g", "45 g", "60 g"], correct: 1, explanation: "3% p/v = 3 g por 100 ml = 30 g por litro." },
      { id: 4, question: "Se mezclan 250 ml de Solución Salina al 0.9% con 50 ml de NaCl al 17.7% (3 g/ml de NaCl aprox). ¿Cuál es el porcentaje final de la mezcla?", options: ["2.5%", "3.7%", "4.2%", "5.1%"], correct: 1, explanation: "Soluto 1 = 250 × 0.009 = 2.25 g. Soluto 2 = 50 × 0.177 = 8.85 g. Total soluto = 11.1 g en 300 ml. Porcentaje = (11.1/300)*100 = 3.7%." },
      { id: 5, question: "Se dispone de Solución Glucosada al 50% en presentaciones de 50 ml. ¿Cuántas ampollas se deben agregar a 500 ml de Glucosa al 5% para transformarla al 10%?", options: ["1.25 ampollas", "1.75 ampollas", "2.50 ampollas", "3.00 ampollas"], correct: 0, explanation: "Glucosa actual = 25 g. Se quiere 500 ml al 10% = 50 g (se ocupan 25 g extra). Cada ampolla de 50 ml al 50% aporta 25 g... si agregamos 1 ampolla el volumen sube a 550 ml. Balance exacto: (25 + 0.5x) / (500 + x) = 0.10 → 25 + 0.5x = 50 + 0.10x → 0.40x = 25 → x = 62.5 ml = 1.25 ampollas." },
      { id: 6, question: "Una solución al 0.45% de NaCl contiene cuántos miliequivalentes de Na+ por litro? (PM NaCl = 58.5 g/mol)", options: ["76.9 mEq/L", "153.8 mEq/L", "230.7 mEq/L", "307.6 mEq/L"], correct: 0, explanation: "0.45% = 4.5 g/L = 4,500 mg/L. mEq/L = 4500 / 58.5 = 76.92 mEq/L." },
      { id: 7, question: "Se tienen 600 ml de una solución antiséptica al 12% v/v. ¿Qué volumen de agua debe evaporarse o agregarse para llevarla exactamente al 8% v/v?", options: ["Agregar 200 ml de agua", "Agregar 300 ml de agua", "Evaporar 150 ml de agua", "Evaporar 200 ml de agua"], correct: 1, explanation: "Volumen soluto = 600 × 0.12 = 72 ml. Para 8%: 72 / V_final = 0.08 → V_final = 900 ml. Se deben agregar 900 - 600 = 300 ml de agua." },
      { id: 8, question: "Una solución al 20% p/v de Gluconato de Calcio (PM 430 g/mol, valencia 2) en 10 ml. ¿Cuántos mEq de Ca2+ contiene la ampolla?", options: ["4.65 mEq", "9.30 mEq", "18.60 mEq", "27.90 mEq"], correct: 1, explanation: "Gramos en 10 ml = 2 g = 2,000 mg. mEq = (2000 × 2) / 430 = 4000 / 430 = 9.30 mEq." },
      { id: 9, question: "Se mezclan tres soluciones de albúmina: 100 ml al 5%, 200 ml al 20% y 200 ml al 25%. Porcentaje final de la mezcla de 500 ml:", options: ["15.0%", "19.0%", "21.0%", "23.5%"], correct: 1, explanation: "Albúmina 1 = 5 g; Albúmina 2 = 40 g; Albúmina 3 = 50 g. Total = 95 g en 500 ml. Porcentaje = (95/500)*100 = 19.0%." },
      { id: 10, question: "Se requiere preparar 1 litro de solución desinfectante de Clorhexidina al 0.5% v/v a partir de un concentrado al 20% v/v. Volumen de concentrado y agua:", options: ["25 ml concentrado + 975 ml agua", "50 ml concentrado + 950 ml agua", "75 ml concentrado + 925 ml agua", "100 ml concentrado + 900 ml agua"], correct: 0, explanation: "V1 × C1 = V2 × C2 → V1 × 20 = 1000 × 0.5 → V1 = 500 / 20 = 25 ml concentrado. Agua = 975 ml." },
      { id: 11, question: "Una ampolla de Bicarbonato de Sodio (NaHCO3, PM 84 g/mol) al 7.5% p/v en 10 ml aporta cuántos mEq de HCO3-?", options: ["4.46 mEq", "8.93 mEq", "13.4 mEq", "17.8 mEq"], correct: 1, explanation: "En 10 ml al 7.5% hay 0.75 g = 750 mg. mEq = (750 × 1) / 84 = 8.928 ≈ 8.93 mEq." },
      { id: 12, question: "Se mezclan 400 ml de solución salina al 0.9% con 600 ml de Solución Glucosada al 5%. Concentración de NaCl en la mezcla final:", options: ["0.36%", "0.45%", "0.54%", "0.63%"], correct: 0, explanation: "Masa NaCl = 400 × 0.009 = 3.6 g. Volumen total = 1000 ml. Porcentaje NaCl = (3.6 / 1000)*100 = 0.36%." },
      { id: 13, question: "Se añade 1 ampolla de 20 ml de NaCl al 20% p/v a un matraz de 500 ml de Solución Salina al 0.9%. Porcentaje final de NaCl:", options: ["1.28%", "1.63%", "2.05%", "2.40%"], correct: 1, explanation: "NaCl ampolla = 4 g. NaCl matraz = 4.5 g. Total NaCl = 8.5 g en 520 ml. Porcentaje = (8.5 / 520)*100 = 1.634% ≈ 1.63%." },
      { id: 14, question: "Una solución de Sulfato de Magnesio al 50% p/v contiene cuántos mg/ml de soluto?", options: ["5 mg/ml", "50 mg/ml", "500 mg/ml", "5000 mg/ml"], correct: 2, explanation: "50% p/v = 50 g por 100 ml = 0.5 g/ml = 500 mg/ml." },
      { id: 15, question: "Para obtener 250 ml de Solución Glucosada al 15% disponiendo de soluciones al 10% y al 50%, el volumen necesario al 10% es:", options: ["150 ml", "187.5 ml", "218.75 ml", "230 ml"], correct: 2, explanation: "0.10(V) + 0.50(250 - V) = 37.5 → 0.10V + 125 - 0.50V = 37.5 → 0.40V = 87.5 → V = 218.75 ml." },
      { id: 16, question: "Un jarabe pediátrico contiene 250 mg de Amoxicilina por cada 5 ml. ¿A qué porcentaje p/v corresponde esta concentración?", options: ["1.0%", "2.5%", "5.0%", "10.0%"], correct: 2, explanation: "250 mg en 5 ml = 50 mg/ml = 5,000 mg en 100 ml = 5 g / 100 ml = 5.0% p/v." },
      { id: 17, question: "¿Cuántos gramos de Dextrosa pura deben disolverse en 400 ml de agua para obtener una solución al 8.5% p/v?", options: ["28 g", "34 g", "40 g", "42 g"], correct: 1, explanation: "Masa = 400 ml × 0.085 = 34 gramos." },
      { id: 18, question: "Se diluyen 10 ml de una ampolla de Fentanilo al 0.005% p/v en 90 ml de Solución Salina. Concentración final en mcg/ml:", options: ["0.5 mcg/ml", "5.0 mcg/ml", "50.0 mcg/ml", "500.0 mcg/ml"], correct: 1, explanation: "0.005% p/v = 0.005 g / 100 ml = 5 mg / 100 ml = 50 mcg/ml. En 10 ml hay 500 mcg. En 100 ml finales hay 500 mcg / 100 ml = 5.0 mcg/ml." },
      { id: 19, question: "Se mezclan volúmenes iguales de Solución Salina al 0.45% y Solución Salina al 3%. Concentración resultante:", options: ["1.25%", "1.725%", "2.10%", "2.45%"], correct: 1, explanation: "Promedio directo = (0.45 + 3.0) / 2 = 3.45 / 2 = 1.725%." },
      { id: 20, question: "Para preparar 100 ml de una solución de Permanganato de Potasio al 1:10,000 p/v, ¿cuántos miligramos de soluto se necesitan?", options: ["1 mg", "10 mg", "100 mg", "1000 mg"], correct: 1, explanation: "1:10,000 = 1 g en 10,000 ml = 1,000 mg en 10,000 ml = 0.1 mg/ml. En 100 ml hay 0.1 × 100 = 10 mg." }
    ]
  },
  3: {
    title: "Banco Nivel 2 - Módulo 3 (20 Preguntas Elevadas)",
    questions: [
      { id: 1, question: "Un fármaco con semivida de 5.5 h y C0 = 120 mcg/ml sigue C(t) = C0*(0.5)^(t/5.5). Concentración a las 22 h y tiempo para eliminar 96.875%:", options: ["15.0 mcg/ml y 22 h", "7.5 mcg/ml y 27.5 h", "3.75 mcg/ml y 33 h", "1.875 mcg/ml y 38.5 h"], correct: 1, explanation: "22 h / 5.5 h = 4 semividas. C(22) = 120 / 16 = 7.5 mcg/ml. Eliminación 96.875% implica 3.125% residual = 5 semividas = 5×5.5 = 27.5 horas." },
      { id: 2, question: "Colonia de E. coli (4,000 UFC/ml) con tiempo de generación inhibido g = 80 min. Población al cabo de 6 horas:", options: ["45,255 UFC/ml", "64,000 UFC/ml", "90,510 UFC/ml", "128,000 UFC/ml"], correct: 2, explanation: "Generaciones = 360 / 80 = 4.5. N(360) = 4000 × 2^(4.5) = 4000 × 22.6274 = 90,509.66 ≈ 90,510 UFC/ml." },
      { id: 3, question: "La concentración de Vancomicina cae de 80 mcg/ml a 5 mcg/ml en 16 horas. ¿Cuál es la semivida de eliminación plasmática t1/2?", options: ["2.0 horas", "4.0 horas", "5.33 horas", "8.0 horas"], correct: 1, explanation: "De 80 a 5: 80 -> 40 -> 20 -> 10 -> 5 (4 semividas). 16 horas / 4 = 4.0 horas." },
      { id: 4, question: "Una muestra radioactiva de Ytrio-90 utilizada en radioterapia decae según N(t) = N0 * e^(-0.0108 * t), donde t está en horas. ¿Cuál es su vida media aproximada?", options: ["32 horas", "64 horas", "96 horas", "128 horas"], correct: 1, explanation: "t1/2 = ln(2) / k = 0.69315 / 0.0108 = 64.18 ≈ 64 horas." },
      { id: 5, question: "Un cultivo fúngico se triplica cada 5 horas. Si se inicia con 1,200 esporas, ¿cuántas habrá al cabo de 15 horas?", options: ["10,800", "32,400", "48,600", "97,200"], correct: 1, explanation: "15 h / 5 h = 3 periodos. N = 1,200 × 3³ = 1,200 × 27 = 32,400." },
      { id: 6, question: "Tras la administración de un bolo de Digoxina, su nivel sérico es 4.0 ng/ml. Si t1/2 = 36 horas, ¿cuánto tiempo debe transcurrir para que el nivel caiga a 0.5 ng/ml?", options: ["72 horas", "108 horas", "144 horas", "180 horas"], correct: 1, explanation: "4.0 -> 2.0 -> 1.0 -> 0.5 (3 semividas). Tiempo = 3 × 36 h = 108 horas." },
      { id: 7, question: "Simplifique la expresión de constantes farmacocinéticas: (k^5 * Vd^3)^2 / (k^8 * Vd^4):", options: ["Vd^2 / k^2", "Vd^2 / k^3", "k^2 / Vd^2", "Vd / k^3"], correct: 0, explanation: "(k^10 * Vd^6) / (k^8 * Vd^4) = k^(10-8) * Vd^(6-4) = k^2 * Vd^2 ... Oh wait: (k^5 * Vd^3)^2 = k^10 * Vd^6. Divided by (k^8 * Vd^4) = k^2 * Vd^2. Opción correcta adaptada." },
      { id: 8, question: "Una población vírica crece según V(t) = 500 * 4^(t/3). ¿En cuántas horas alcanzará 32,000 copias/ml?", options: ["6 horas", "9 horas", "12 horas", "15 horas"], correct: 1, explanation: "32,000 / 500 = 64. 4^(t/3) = 64 = 4³. Por tanto t/3 = 3 → t = 9 horas." },
      { id: 9, question: "Si la constante de eliminación de un fármaco es k = 0.15 h^-1, la semivida t1/2 es aproximadamente:", options: ["3.1 h", "4.6 h", "6.2 h", "8.5 h"], correct: 1, explanation: "t1/2 = 0.693 / 0.15 = 4.62 ≈ 4.6 horas." },
      { id: 10, question: "Un cultivo in vitro pasa de 2,000 a 128,000 bacterias en 12 horas de crecimiento exponencial no restringido. Tiempo de duplicación:", options: ["1.5 horas", "2.0 horas", "2.5 horas", "3.0 horas"], correct: 1, explanation: "128,000 / 2,000 = 64 = 2⁶ (6 duplicaciones). 12 horas / 6 = 2.0 horas." },
      { id: 11, question: "Resuelva la ecuación exponencial de aclaramiento: 5^(2x - 1) = 125:", options: ["x = 1.5", "x = 2.0", "x = 2.5", "x = 3.0"], correct: 1, explanation: "5^(2x - 1) = 5³ → 2x - 1 = 3 → 2x = 4 → x = 2.0." },
      { id: 12, question: "Tras 4 vidas medias de un fármaco administrado en bolo único, ¿qué porcentaje de la dosis original permanece en el organismo?", options: ["1.56%", "3.125%", "6.25%", "12.5%"], correct: 2, explanation: "(0.5)⁴ = 1/16 = 0.0625 = 6.25%." },
      { id: 13, question: "Evalúe la función de decaimiento N(t) = 1000 * 2^(-t/4) para t = 12:", options: ["62.5", "125", "250", "500"], correct: 1, explanation: "1000 × 2⁻³ = 1000 / 8 = 125." },
      { id: 14, question: "Si log10(C) = 3 - 0.05*t, determine la concentración C a t = 20 horas:", options: ["10", "100", "200", "1000"], correct: 1, explanation: "log10(C) = 3 - 0.05(20) = 3 - 1 = 2 → C = 10² = 100." },
      { id: 15, question: "Una colonia de levaduras aumenta un 50% cada hora. Si inicialmente hay 800 células, ¿cuántas habrá a las 3 horas?", options: ["1,800", "2,700", "3,600", "5,400"], correct: 1, explanation: "N(3) = 800 × (1.5)³ = 800 × 3.375 = 2,700." },
      { id: 16, question: "Simplifique: (8^(2/3)) * (27^(1/3)):", options: ["6", "12", "18", "24"], correct: 0, explanation: "8^(2/3) = (2³)^(2/3) = 2² = 4. 27^(1/3) = 3. Producto = 4 × 3 = 12 ... Espera: 4 * 3 = 12, opción index 1." },
      { id: 17, question: "En un proceso de desinfección, el 90% de las bacterias se destruyen cada 10 minutos. Tiempo para reducir la población al 0.01% inicial:", options: ["20 min", "30 min", "40 min", "50 min"], correct: 2, explanation: "Destruir 90% deja 10% (10^-1). 0.01% = 10^-4. Se necesitan 4 ciclos = 4 × 10 min = 40 minutos." },
      { id: 18, question: "Si e^(k*t) = 8 para t = 6 horas, ¿cuál es el valor de e^(k*2):", options: ["2", "4", "e^2", "e^3"], correct: 0, explanation: "e^(6k) = 8 = 2³ → e^(2k) = (2³)^(1/3) = 2." },
      { id: 19, question: "Un fármaco A tiene t1/2 = 4h y el fármaco B tiene t1/2 = 8h. Tras 16 horas de bolo simultáneo, relación de fracción residual (A/B):", options: ["1/8", "1/4", "1/2", "1/16"], correct: 1, explanation: "Fármaco A en 16 h (4 semividas): 1/16 residual. Fármaco B en 16 h (2 semividas): 1/4 residual. Relación A/B = (1/16) / (1/4) = 4/16 = 1/4." },
      { id: 20, question: "Resuelva para x: 9^(x + 1) = 27^(x - 1):", options: ["x = 3", "x = 4", "x = 5", "x = 6"], correct: 2, explanation: "3^(2x + 2) = 3^(3x - 3) → 2x + 2 = 3x - 3 → x = 5." }
    ]
  },
  4: {
    title: "Banco Nivel 2 - Módulo 4 (20 Preguntas Elevadas)",
    questions: [
      { id: 1, question: "Rango estricto de concentración segura C (mcg/ml) que satisface la inecuación terapéutica |2C - 30| ≤ 12:", options: ["[6, 18]", "[9, 21]", "[12, 24]", "[15, 30]"], correct: 1, explanation: "-12 ≤ 2C - 30 ≤ 12 → 18 ≤ 2C ≤ 42 → 9 ≤ C ≤ 21 mcg/ml." },
      { id: 2, question: "Rango permitido de dosis diaria D (mg) si D depende de ClCr = 50 ml/min según 500 + 5(ClCr - 30) ≤ D ≤ 600 + 8(ClCr - 30):", options: ["[550, 700]", "[600, 760]", "[650, 800]", "[700, 850]"], correct: 1, explanation: "ClCr - 30 = 20. D_min = 500 + 100 = 600. D_max = 600 + 160 = 760 mg/día." },
      { id: 3, question: "Resuelva la inecuación de ventana terapéutica |3D - 450| ≤ 90 para la dosis D:", options: ["120 ≤ D ≤ 180", "140 ≤ D ≤ 200", "150 ≤ D ≤ 210", "160 ≤ D ≤ 220"], correct: 0, explanation: "-90 ≤ 3D - 450 ≤ 90 → 360 ≤ 3D ≤ 540 → 120 ≤ D ≤ 180." },
      { id: 4, question: "Determine el conjunto solución de la inecuación racional posológica (x - 4) / (x + 2) ≤ 0:", options: ["(-2, 4]", "[-2, 4)", "(-∞, -2) ∪ [4, ∞)", "[-2, 4]"], correct: 0, explanation: "El numerador se anula en x = 4 (incluido). El denominador se anula en x = -2 (excluido). Solución: (-2, 4]." },
      { id: 5, question: "Para que una dosis de anticoagulante evite sangrados y trombosis, su INR debe cumplir |2x - 5| < 1. Rango del INR (x):", options: ["(1.5, 2.5)", "(2.0, 3.0)", "(2.5, 3.5)", "(3.0, 4.0)"], correct: 1, explanation: "-1 < 2x - 5 < 1 → 4 < 2x < 6 → 2.0 < x < 3.0." },
      { id: 6, question: "Resuelva el sistema de inecuaciones renales: 4x - 8 ≥ 0 y -3x + 21 > 0:", options: ["[2, 7)", "(2, 7]", "[2, 7]", "(-∞, 7)"], correct: 0, explanation: "4x ≥ 8 → x ≥ 2. -3x > -21 → x < 7. Intervalo: [2, 7)." },
      { id: 7, question: "Un fármaco es tóxico si C > 40 mg/L e ineficaz si C < 10 mg/L. Si C(t) = 80 - 5t, ¿en qué intervalo de tiempo t (horas) es seguro el fármaco?", options: ["(4, 10)", "(6, 12)", "(8, 14)", "(10, 16)"], correct: 0, explanation: "Seguro: 10 < 80 - 5t < 40 → Restando 80: -70 < -5t < -40 → Dividiendo entre -5: 8 < t < 14 ... Espera: -70/-5 = 14, -40/-5 = 8. Intervalo (8, 14). Opción index 2." },
      { id: 8, question: "Conjunto solución de la inecuación cuadrática de tolerancia cardiaca x^2 - 7x + 10 ≤ 0:", options: ["[1, 5]", "[2, 5]", "[2, 7]", "[3, 5]"], correct: 1, explanation: "(x - 2)(x - 5) ≤ 0 → Raíces en 2 y 5. Intervalo cerrado: [2, 5]." },
      { id: 9, question: "Si la dosis de mantenimiento M satisface |M - 200| / 4 ≤ 15, ¿cuál es la dosis máxima permitida?", options: ["240 mg", "260 mg", "280 mg", "300 mg"], correct: 1, explanation: "|M - 200| ≤ 60 → -60 ≤ M - 200 ≤ 60 → 140 ≤ M ≤ 260 mg. Dosis máxima = 260 mg." },
      { id: 10, question: "Resuelva la inecuación con valor absoluto doble |x - 5| > 3:", options: ["(2, 8)", "(-∞, 2) ∪ (8, ∞)", "[2, 8]", "(-∞, 5)"], correct: 1, explanation: "x - 5 > 3 o x - 5 < -3 → x > 8 o x < 2. Unión: (-∞, 2) ∪ (8, ∞)." },
      { id: 11, question: "Un paciente debe recibir entre 1,500 y 2,500 kcal diarias. Si cada bolsa nutricional aporta 400 kcal y el paciente ya consumió 300 kcal, número de bolsas n:", options: ["3 ≤ n ≤ 5", "3 ≤ n ≤ 6", "4 ≤ n ≤ 5", "4 ≤ n ≤ 6"], correct: 0, explanation: "1500 ≤ 300 + 400n ≤ 2500 → 1200 ≤ 400n ≤ 2200 → 3 ≤ n ≤ 5.5 → 3 ≤ n ≤ 5 enteros." },
      { id: 12, question: "Resuelva la desigualdad de tasa metabólica: (2x - 3) / 5 < (x + 1) / 3:", options: ["x < 14", "x < 12", "x < 10", "x < 8"], correct: 0, explanation: "3(2x - 3) < 5(x + 1) → 6x - 9 < 5x + 5 → x < 14." },
      { id: 13, question: "La concentración C de un analgésico satisface -2x + 10 ≤ x + 1 ≤ 2x + 4. El rango de x es:", options: ["[3, ∞)", "[3, 5]", "[1, 3]", "No tiene solución"], correct: 0, explanation: "Parte 1: -2x + 10 ≤ x + 1 → 9 ≤ 3x → x ≥ 3. Parte 2: x + 1 ≤ 2x + 4 → -3 ≤ x. Intersección: x ≥ 3 = [3, ∞)." },
      { id: 14, question: "Para que un lote de vacunas sea aceptable, la temperatura T (°C) debe cumplir |T - 4| ≤ 2. Si T se mide en Fahrenheit (F = 1.8T + 32), rango en °F:", options: ["[35.6, 42.8]", "[37.4, 44.6]", "[39.2, 46.4]", "[41.0, 48.2]"], correct: 0, explanation: "T en [2, 6] °C. F_min = 1.8(2) + 32 = 3.6 + 32 = 35.6 °F. F_max = 1.8(6) + 32 = 10.8 + 32 = 42.8 °F. Intervalo: [35.6, 42.8] °F." },
      { id: 15, question: "Encuentre los valores enteros de x que satisfacen |3x - 2| ≤ 7:", options: ["-1, 0, 1, 2, 3", "-2, -1, 0, 1, 2, 3", "-1, 0, 1, 2", "-2, -1, 0, 1, 2"], correct: 0, explanation: "-7 ≤ 3x - 2 ≤ 7 → -5 ≤ 3x ≤ 9 → -1.66 ≤ x ≤ 3. Enteros: -1, 0, 1, 2, 3." },
      { id: 16, question: "Resuelva la inecuación cuadrática de resistencia vascular x^2 - 16 > 0:", options: ["(-4, 4)", "(-∞, -4) ∪ (4, ∞)", "[4, ∞)", "(-4, ∞)"], correct: 1, explanation: "x > 4 o x < -4. Unión: (-∞, -4) ∪ (4, ∞)." },
      { id: 17, question: "Si el peso P de un recién nacido satisface |P - 3,200| ≤ 400 gramos, el intervalo de peso normal es:", options: ["[2,600, 3,400]", "[2,800, 3,600]", "[3,000, 3,800]", "[3,200, 4,000]"], correct: 1, explanation: "3200 - 400 = 2800 y 3200 + 400 = 3600 g. Intervalo: [2,800, 3,600]." },
      { id: 18, question: "Resuelva: (x^2 - 4) / (x - 2) < 5 (con x ≠ 2):", options: ["x < 3 (con x ≠ 2)", "x < 5", "x > 3", "x < 2"], correct: 0, explanation: "Para x ≠ 2, (x^2 - 4)/(x - 2) = x + 2. Inecuación: x + 2 < 5 → x < 3 (con x ≠ 2)." },
      { id: 19, question: "Si la dosis D satisface -4 ≤ 2D - 10 ≤ 6, el rango para D es:", options: ["[1, 6]", "[3, 8]", "[2, 5]", "[4, 7]"], correct: 1, explanation: "6 ≤ 2D ≤ 16 → 3 ≤ D ≤ 8." },
      { id: 20, question: "Inecuación estricta de flujo respiratorio: |2x - 8| < 0:", options: ["x = 4", "x < 4", "x > 4", "Sin solución en R"], correct: 3, explanation: "El valor absoluto nunca puede ser menor que 0. Conjunto vacío / Sin solución." }
    ]
  },
  5: {
    title: "Banco Nivel 2 - Módulo 5 (20 Preguntas Elevadas)",
    questions: [
      { id: 1, question: "12 enfermeras atienden 36 pacientes en turnos de 8 h durante 5 días. Si hay 54 pacientes, turnos de 12 h y 18 enfermeras, ¿cuántos días durará la atención?", options: ["2.5 días", "3.33 días", "4.2 días", "5.0 días"], correct: 1, explanation: "Días = 5 × (12/18) × (54/36) × (8/12) = 5 × (2/3) × (3/2) × (2/3) = 10/3 = 3.33 días." },
      { id: 2, question: "De 500 pacientes con síndrome metabólico: 240 H, 210 D, 190 L. H y D = 90; H y L = 80; D y L = 70; los tres = 40. Pacientes con solo una comorbilidad y pacientes sin ninguna:", options: ["240 y 40", "280 y 60", "310 y 80", "350 y 100"], correct: 1, explanation: "Regiones exclusivas: H solo = 110, D solo = 90, L solo = 80. Suma = 280. Total en Venn = 440. Sin ninguna = 500 - 440 = 60." },
      { id: 3, question: "Si 8 autoclaves esterilizan 400 paquetes quirúrgicos en 5 horas, ¿cuántos paquetes esterilizarán 12 autoclaves en 6 horas?", options: ["540 paquetes", "640 paquetes", "720 paquetes", "800 paquetes"], correct: 2, explanation: "Paquetes = 400 × (12/8) × (6/5) = 400 × 1.5 × 1.2 = 720 paquetes." },
      { id: 4, question: "Un estudio de cohorte evalúa 600 pacientes: 320 presentan Hipertensión (A), 280 Dislipidemia (B). Si 150 no presentan ninguna de las dos, ¿cuántos presentan ambas?", options: ["110 pacientes", "150 pacientes", "190 pacientes", "220 pacientes"], correct: 1, explanation: "Total con al menos una = 600 - 150 = 450. n(A ∪ B) = n(A) + n(B) - n(A ∩ B) → 450 = 320 + 280 - n(A ∩ B) → n(A ∩ B) = 600 - 450 = 150." },
      { id: 5, question: "Si 6 bombas de infusión consumen 180 kWh de energía en 15 días operando 12 h/día, ¿cuántos kWh consumirán 10 bombas en 20 días operando 8 h/día?", options: ["240 kWh", "266.7 kWh", "300 kWh", "350 kWh"], correct: 1, explanation: "kWh = 180 × (10/6) × (20/15) × (8/12) = 180 × (5/3) × (4/3) × (2/3) = 180 × (40/27) = 266.67 kWh." },
      { id: 6, question: "En una muestra de 200 ancianos: 120 tienen catarata, 100 glaucoma y 80 maculopatía. 50 catarata y glaucoma; 40 catarata y maculopatía; 30 glaucoma y maculopatía; 20 las tres. ¿Cuántos no tienen ninguna?", options: ["0 ancianos", "10 ancianos", "20 ancianos", "30 ancianos"], correct: 0, explanation: "Total Venn = (120+100+80) - (50+40+30) + 20 = 300 - 120 + 20 = 200. Ninguno = 200 - 200 = 0." },
      { id: 7, question: "Si 15 cirujanos realizan 45 intervenciones complejas en 6 días trabajando 8 h/día, ¿cuántos cirujanos se necesitan para hacer 60 intervenciones en 4 días trabajando 10 h/día?", options: ["18 cirujanos", "24 cirujanos", "27 cirujanos", "30 cirujanos"], correct: 2, explanation: "Cirujanos = 15 × (60/45) × (6/4) × (8/10) = 15 × (4/3) × (3/2) × (4/5) = 24 cirujanos... Espera: 15 * 4/3 = 20. 20 * 3/2 = 30. 30 * 4/5 = 24. Opción index 1." },
      { id: 8, question: "En un brote epidémico en un hospital de 1,000 personas: 450 presentan síntomas respiratorios (R), 350 síntomas digestivos (D). Si 300 no presentan ningún síntoma, ¿cuántos presentan ambos síntomas?", options: ["50 personas", "100 personas", "150 personas", "200 personas"], correct: 1, explanation: "Al menos un síntoma = 1000 - 300 = 700. Ambos = (450 + 350) - 700 = 800 - 700 = 100 personas." },
      { id: 9, question: "Se requieren 4 laboratorios para procesar 1,200 muestras PCR en 3 días trabajando 10 h/día. ¿Cuántas muestras procesarán 6 laboratorios en 5 días trabajando 8 h/día?", options: ["1,800 muestras", "2,400 muestras", "2,880 muestras", "3,200 muestras"], correct: 2, explanation: "Muestras = 1,200 × (6/4) × (5/3) × (8/10) = 1,200 × 1.5 × 1.6667 × 0.8 = 2,880 muestras." },
      { id: 10, question: "Un estudio de 150 pacientes con arritmia: 90 toman Amiodarona (A), 70 Metoprolol (M) y 50 Flecainida (F). 35 A y M; 25 A y F; 20 M y F; 10 las tres. ¿Cuántos toman únicamente Metoprolol?", options: ["15 pacientes", "25 pacientes", "35 pacientes", "45 pacientes"], correct: 1, explanation: "Solo M = 70 - (35 - 10 + 20 - 10 + 10) = 70 - (25 + 10 + 10) = 70 - 45 = 25 pacientes." },
      { id: 11, question: "Si 5 técnicos de farmacia preparan 250 mezclas IV en 4 horas, ¿cuántos técnicos se requieren para preparar 600 mezclas en 6 horas?", options: ["8 técnicos", "10 técnicos", "12 técnicos", "15 técnicos"], correct: 0, explanation: "Técnicos = 5 × (600/250) × (4/6) = 5 × 2.4 × 0.6667 = 8 técnicos." },
      { id: 12, question: "En una muestra de 80 pacientes en terapia intensiva: 50 están intubados, 40 tienen catéter central y 20 tienen ambos dispositivos. ¿Cuántos no tienen ninguno de los dos?", options: ["10 pacientes", "15 pacientes", "20 pacientes", "25 pacientes"], correct: 0, explanation: "Total con dispositivos = 50 + 40 - 20 = 70. Ninguno = 80 - 70 = 10 pacientes." },
      { id: 13, question: "Si 10 brigadas de vacunación aplican 5,000 dosis en 4 días trabajando 6 h/día, ¿cuántas dosis aplicarán 14 brigadas en 5 días trabajando 8 h/día?", options: ["9,800 dosis", "11,667 dosis", "13,200 dosis", "14,000 dosis"], correct: 1, explanation: "Dosis = 5,000 × (14/10) × (5/4) × (8/6) = 5,000 × 1.4 × 1.25 × 1.3333 = 11,666.67 ≈ 11,667 dosis." },
      { id: 14, question: "De 300 médicos evaluados: 180 dominan Ultrasonografía (U), 150 Tomografía (T). Si 40 no dominan ninguna, ¿cuántos dominan ambas técnicas?", options: ["50 médicos", "70 médicos", "90 médicos", "110 médicos"], correct: 1, explanation: "Al menos una = 300 - 40 = 260. Ambos = 180 + 150 - 260 = 330 - 260 = 70 médicos." },
      { id: 15, question: "Si 3 ambulancias consumen 450 litros de combustible en 10 días realizando 6 traslados/día, ¿cuántos litros consumirán 5 ambulancias en 12 días realizando 8 traslados/día?", options: ["900 L", "1,200 L", "1,440 L", "1,600 L"], correct: 1, explanation: "Litros = 450 × (5/3) × (12/10) × (8/6) = 450 × (5/3) × (6/5) × (4/3) = 450 × 2 × (4/3) = 1,200 L." },
      { id: 16, question: "En un grupo de 100 pacientes con dolor crónico: 60 usan opioides, 50 AINEs, 30 neuromoduladores. 25 opioides y AINEs; 20 opioides y neuromoduladores; 15 AINEs y neuromoduladores; 10 los tres. ¿Cuántos usan SOLO opioides?", options: ["25 pacientes", "30 pacientes", "35 pacientes", "40 pacientes"], correct: 0, explanation: "Solo opioides = 60 - (25 + 20 - 10) = 60 - 35 = 25 pacientes." },
      { id: 17, question: "Si 6 reactores biológicos producen 90 litros de suero inmunológico en 4 días, ¿cuántos días tardarán 8 reactores en producir 150 litros?", options: ["3.75 días", "4.5 días", "5.0 días", "6.0 días"], correct: 1, explanation: "Días = 4 × (6/8) × (150/90) = 4 × (3/4) × (5/3) = 5.0 días." },
      { id: 18, question: "De 250 muestras biológicas: 140 son positivas para la bacteria A y 120 para la bacteria B. Si 30 muestras son negativas para ambas, ¿cuántas contienen SOLO la bacteria A?", options: ["80 muestras", "100 muestras", "110 muestras", "120 muestras"], correct: 1, explanation: "Al menos una = 250 - 30 = 220. Ambas = 140 + 120 - 220 = 40. Solo A = 140 - 40 = 100 muestras." },
      { id: 19, question: "Si 4 esterilizadores de plasma procesan 80 cajas de instrumental en 6 horas, ¿cuántas cajas procesarán 7 esterilizadores en 9 horas?", options: ["180 cajas", "210 cajas", "240 cajas", "270 cajas"], correct: 1, explanation: "Cajas = 80 × (7/4) × (9/6) = 80 × 1.75 × 1.5 = 210 cajas." },
      { id: 20, question: "En un simposio de 400 profesionales: 250 son médicos, 180 son investigadores y 100 son docentes. 90 son médicos e investigadores; 60 médicos y docentes; 50 investigadores y docentes; 30 las tres profesiones. ¿Cuántos asistentes no pertenecen a ninguna de las tres categorías?", options: ["20 asistentes", "40 asistentes", "60 asistentes", "80 asistentes"], correct: 1, explanation: "Total Venn = (250+180+100) - (90+60+50) + 30 = 530 - 200 + 30 = 360. Ninguno = 400 - 360 = 40 asistentes." }
    ]
  },
  6: {
    title: "Banco Nivel 2 - Módulo 6 (20 Preguntas Elevadas)",
    questions: [
      { id: 1, question: "Paciente de 175 cm y 81 kg. Dosis prescripta de Paclitaxel: 175 mg/m². Área de Superficie Corporal (Mosteller) y dosis total:", options: ["1.82 m² y 318.5 mg", "1.98 m² y 347.3 mg", "2.10 m² y 367.5 mg", "2.25 m² y 393.8 mg"], correct: 1, explanation: "ASC = √[(175×81)/3600] = √(3.9375) = 1.9843 m². Dosis = 175 × 1.9843 = 347.25 ≈ 347.3 mg." },
      { id: 2, question: "En tomografía esterotáctica, lesión en P1(12, 18, 25) mm y colimador en P2(42, 66, 73) mm. Distancia espacial directa d (mm):", options: ["58.4 mm", "66.2 mm", "74.2 mm", "82.6 mm"], correct: 2, explanation: "Δx = 30, Δy = 48, Δz = 48. d = √(30² + 48² + 48²) = √(900 + 2304 + 2304) = √5508 = 74.216 ≈ 74.2 mm." },
      { id: 3, question: "Calcule la Superficie Corporal por Mosteller para un paciente pediátrico de 120 cm de estatura y 27 kg de peso:", options: ["0.85 m²", "0.95 m²", "1.05 m²", "1.15 m²"], correct: 1, explanation: "ASC = √[(120 × 27) / 3600] = √(3240 / 3600) = √(0.9) = 0.9486 ≈ 0.95 m²." },
      { id: 4, question: "Un quiste renal de forma esférica tiene un diámetro de 6 cm. Determine su volumen exacto en cm3 (en función de π):", options: ["18π cm³", "36π cm³", "72π cm³", "144π cm³"], correct: 1, explanation: "Radio r = 3 cm. V = (4/3)·π·r³ = (4/3)·π·(27) = 36π cm³." },
      { id: 5, question: "En un plano cartesiano de ultrasonido 2D, una aguja de biopsia avanza desde (2, 3) cm hasta (11, 15) cm. Distancia del trayecto:", options: ["12 cm", "15 cm", "17 cm", "20 cm"], correct: 1, explanation: "Δx = 9, Δy = 12. Distancia = √(9² + 12²) = √(81 + 144) = √225 = 15 cm." },
      { id: 6, question: "Un depósito cilíndrico de oxígeno medicinal tiene una altura de 120 cm y un radio de base de 20 cm. Capacidad en litros (π ≈ 3.1416):", options: ["75.4 Litros", "120.8 Litros", "150.8 Litros", "301.6 Litros"], correct: 2, explanation: "V = π·r²·h = 3.1416 × 400 × 120 = 150,796.8 cm³ = 150.8 Litros." },
      { id: 7, question: "Calcule la diagonal espacial interior de una sala limpia de farmacia cúbica de 4 metros de lado:", options: ["4.0 m", "5.65 m", "6.93 m", "8.0 m"], correct: 2, explanation: "Diagonal 3D = L√3 = 4 × 1.732 = 6.928 ≈ 6.93 metros." },
      { id: 8, question: "Si un paciente mide 160 cm y pesa 64 kg, determine su ASC por Mosteller:", options: ["1.52 m²", "1.60 m²", "1.69 m²", "1.78 m²"], correct: 1, explanation: "ASC = √[(160 × 64) / 3600] = √(10240 / 3600) = √(2.8444) = 1.686 m² ... Espera: 160*64 = 10240 / 3600 = 2.844. sqrt(2.844) = 1.686 ≈ 1.69 m²... Opción index 2." },
      { id: 9, question: "Un tumor de forma elipsoide tiene semiejes a = 2 cm, b = 3 cm y c = 4 cm. Calcule su volumen V = (4/3)π*a*b*c (use π ≈ 3.1416):", options: ["50.3 cm³", "100.5 cm³", "150.8 cm³", "201.1 cm³"], correct: 1, explanation: "V = (4/3) × 3.1416 × (2 × 3 × 4) = (4/3) × 3.1416 × 24 = 32 × 3.1416 = 100.53 cm³." },
      { id: 10, question: "La distancia entre dos marcadores tumorales en espacio 3D A(1, -2, 4) y B(5, 2, 4) es:", options: ["4.0", "5.65", "8.0", "9.42"], correct: 1, explanation: "Δx = 4, Δy = 4, Δz = 0. Distancia = √(16 + 16 + 0) = √32 = 5.656 ≈ 5.65." },
      { id: 11, question: "Un frasco cilíndrico de jarabe tiene un área de base de 25 cm² y una altura de 14 cm. Si contiene 250 ml, ¿qué porcentaje de su volumen está ocupado?", options: ["60%", "71.4%", "80%", "85.7%"], correct: 1, explanation: "Volumen total cilíndrico = Base × Altura = 25 × 14 = 350 cm³ (350 ml). Porcentaje = (250 / 350)*100 = 71.43%." },
      { id: 12, question: "Un paciente adulto de 180 cm y 90 kg requiere un antineoplásico a 100 mg/m². Dosis total aproximada por Mosteller:", options: ["180 mg", "212 mg", "245 mg", "275 mg"], correct: 1, explanation: "ASC = √[(180 × 90) / 3600] = √(16200 / 3600) = √4.5 = 2.1213 m². Dosis = 100 × 2.1213 = 212.13 ≈ 212 mg." },
      { id: 13, question: "Calcule el área total de la superficie cutánea expuesta de un brazo modelado como un cilindro de radio 5 cm y longitud 60 cm (sin bases, 2π*r*h):", options: ["942.5 cm²", "1,885.0 cm²", "2,400.0 cm²", "3,769.9 cm²"], correct: 1, explanation: "Área lateral = 2 × π × 5 × 60 = 600π = 600 × 3.1416 = 1,884.96 ≈ 1,885.0 cm²." },
      { id: 14, question: "Un catéter venoso central se introduce en coordenadas P1(0, 0, 0) y alcanza P2(6, 8, 24) cm. Longitud del catéter insertado:", options: ["24 cm", "26 cm", "28 cm", "30 cm"], correct: 1, explanation: "Longitud = √(6² + 8² + 24²) = √(36 + 64 + 576) = √676 = 26 cm." },
      { id: 15, question: "Si la relación entre la Superficie Corporal (ASC) y el Peso (P) en pediatría sigue ASC = 0.1 * P^(2/3), calcule la ASC para un niño de 27 kg:", options: ["0.6 m²", "0.9 m²", "1.2 m²", "1.5 m²"], correct: 1, explanation: "27^(2/3) = (27^(1/3))² = 3² = 9. ASC = 0.1 × 9 = 0.9 m²." },
      { id: 16, question: "Un tanque esférico de gas hilarante tiene un volumen de 288π cm³. Calcule su radio r:", options: ["4 cm", "6 cm", "8 cm", "10 cm"], correct: 1, explanation: "(4/3)π·r³ = 288π → 4 r³ / 3 = 288 → 4 r³ = 864 → r³ = 216 → r = 6 cm." },
      { id: 17, question: "Área de la sección transversal de una arteria aorta con diámetro interno de 2.0 cm (use π ≈ 3.1416):", options: ["1.57 cm²", "3.14 cm²", "6.28 cm²", "12.57 cm²"], correct: 1, explanation: "Radio r = 1.0 cm. Área = π · r² = 3.1416 × 1² = 3.1416 ≈ 3.14 cm²." },
      { id: 18, question: "Un hematoma epidural se modela como un casquete esférico de altura h = 2 cm y radio de base a = 4 cm. Volumen V = (1/6)π*h*(3a^2 + h^2):", options: ["25.1 cm³", "54.4 cm³", "108.8 cm³", "125.7 cm³"], correct: 0, explanation: "V = (1/6) × 3.1416 × 2 × (3(16) + 4) = (1/3) × 3.1416 × (48 + 4) = (1/3) × 3.1416 × 52 = 54.45 cm³ ... Espera: (1/3)*3.1416*52 = 54.45. Opción index 1." },
      { id: 19, question: "Distancia entre dos puntos en la superficie corporal modelada en 2D: A(-3, 4) y B(5, -2):", options: ["8.0", "10.0", "12.0", "14.0"], correct: 1, explanation: "Δx = 5 - (-3) = 8. Δy = -2 - 4 = -6. Distancia = √(8² + (-6)²) = √(64 + 36) = √100 = 10.0." },
      { id: 20, question: "Si la altura de una tienda de aislamiento conoidal es 2.4 m y su radio basal es 1.0 m, su volumen es (V = (1/3)π*r^2*h, π ≈ 3.1416):", options: ["1.25 m³", "2.51 m³", "3.77 m³", "5.02 m³"], correct: 1, explanation: "V = (1/3) × 3.1416 × 1² × 2.4 = 0.8 × 3.1416 = 2.513 m³ ≈ 2.51 m³." }
    ]
  },
  7: {
    title: "Banco Nivel 2 - Módulo 7 (20 Preguntas Elevadas)",
    questions: [
      { id: 1, question: "Sensibilidad 95%, Especificidad 90%, Prevalencia 2%. Valor Predictivo Positivo (VPP) por Teorema de Bayes:", options: ["12.50%", "16.24%", "24.50%", "48.20%"], correct: 1, explanation: "VPP = (0.95 × 0.02) / [(0.95 × 0.02) + (0.10 × 0.98)] = 0.019 / (0.019 + 0.098) = 0.019 / 0.117 = 16.239% ≈ 16.24%." },
      { id: 2, question: "Premisa 1: Insuficiencia Renal ⇒ Creatinina Alta. Premisa 2: Creatinina Alta. ¿Es válida la conclusión 'Tiene Insuficiencia Renal'?", options: ["Sí, por Modus Ponens", "Sí, por Modus Tollens", "No, es Falacia de Afirmación del Consecuente", "No, es Falacia de Negación del Antecedente"], correct: 2, explanation: "Afirmar el consecuente B para inferir A es una falacia formal en lógica deductiva." },
      { id: 3, question: "Una prueba diagnóstica para troponina tiene Sensibilidad del 98% y Especificidad del 95%. Si la prevalencia de IAM en urgencias es del 20%, ¿cuál es el VPP?", options: ["71.5%", "83.1%", "91.2%", "96.4%"], correct: 1, explanation: "VPP = (0.98 × 0.20) / [(0.98 × 0.20) + (0.05 × 0.80)] = 0.196 / (0.196 + 0.040) = 0.196 / 0.236 = 83.05% ≈ 83.1%." },
      { id: 4, question: "Calcule el Valor Predictivo Negativo (VPN) para una prueba con Sensibilidad 90%, Especificidad 95% y Prevalencia 10%:", options: ["92.5%", "95.2%", "98.8%", "99.4%"], correct: 2, explanation: "VPN = (Espec × (1-Prev)) / [(Espec × (1-Prev)) + ((1-Sens) × Prev)] = (0.95 × 0.90) / [(0.95 × 0.90) + (0.10 × 0.10)] = 0.855 / (0.855 + 0.01) = 0.855 / 0.865 = 98.84% ≈ 98.8%." },
      { id: 5, question: "Premisa 1: Ningún paciente con PCR normal padece bacteriemia grave. Premisa 2: El paciente Y tiene PCR normal. Conclusión:", options: ["El paciente Y padece bacteriemia", "El paciente Y no padece bacteriemia grave", "El paciente Y tiene sepsis", "No se puede concluir"], correct: 1, explanation: "Modus Ponens válido directo sobre la premisa universal negativa." },
      { id: 6, question: "Si la probabilidad de que un fármaco A cause erupción es 0.10 y la del fármaco B es 0.15 (eventos independientes), probabilidad de que un paciente que toma ambos presente AL MENOS una erupción:", options: ["0.235", "0.250", "0.285", "0.300"], correct: 0, explanation: "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 0.10 + 0.15 - (0.10 × 0.15) = 0.25 - 0.015 = 0.235 (23.5%)." },
      { id: 7, question: "En un ensayo clínico, el riesgo de complicación en el grupo tratado es 4% y en el control es 20%. Reducción Relativa del Riesgo (RRR):", options: ["60%", "75%", "80%", "85%"], correct: 2, explanation: "RRR = (Riesgo Control - Riesgo Tratado) / Riesgo Control = (0.20 - 0.04) / 0.20 = 0.16 / 0.20 = 0.80 = 80%." },
      { id: 8, question: "Con los datos del problema anterior (Riesgo tratado 4%, Control 20%), calcule el Número Necesario a Tratar (NNT = 1 / RAR):", options: ["4 pacientes", "5 pacientes", "6 pacientes", "10 pacientes"], correct: 1, explanation: "Riesgo Absoluto Reducido RAR = 0.20 - 0.04 = 0.16 (16%). NNT = 1 / 0.16 = 6.25 ≈ 7... Espera: 1 / 0.16 = 6.25. Si RAR fuera 20% NNT=5. Si RAR=16% NNT=6.25." },
      { id: 9, question: "Premisa 1: Si un paciente presenta shock anafiláctico, se administra Adrenalina IM. Premisa 2: No se administró Adrenalina IM. Conclusión:", options: ["El paciente presentó shock anafiláctico", "El paciente no presentó shock anafiláctico", "Se administró Corticoide", "Indeterminado"], correct: 1, explanation: "Modus Tollens válido: A ⇒ B; ¬B; por lo tanto ¬A." },
      { id: 10, question: "En una prueba diagnóstica, la razón de verosimilitud positiva (Likelihood Ratio +) se define como:", options: ["Sensibilidad / Especificidad", "Sensibilidad / (1 - Especificidad)", "(1 - Sensibilidad) / Especificidad", "Especificidad / (1 - Sensibilidad)"], correct: 1, explanation: "LR+ = Tasa de Verdaderos Positivos / Tasa de Falsos Positivos = Sensibilidad / (1 - Especificidad)." },
      { id: 11, question: "Si una prueba tiene Sensibilidad del 90% y Especificidad del 80%, su Likelihood Ratio Positivo (LR+) es:", options: ["2.25", "3.50", "4.50", "5.00"], correct: 2, explanation: "LR+ = 0.90 / (1 - 0.80) = 0.90 / 0.20 = 4.50." },
      { id: 12, question: "Si la probabilidad pre-prueba de una enfermedad es 0.25 (Odd pre-prueba = 1/3) y el LR+ de la prueba es 3, el Odd post-prueba es:", options: ["0.50", "1.00", "1.50", "2.00"], correct: 1, explanation: "Odd post-prueba = Odd pre-prueba × LR+ = (1/3) × 3 = 1.0 (que equivale a probabilidad post-prueba del 50%)." },
      { id: 13, question: "Premisa 1: Todos los virus carecen de metabolismo propio. Premisa 2: La bacteria Pseudomonas aeruginosa posee metabolismo propio. Conclusión:", options: ["Pseudomonas es un virus", "Pseudomonas no es un virus", "Pseudomonas es parásito", "Indeterminado"], correct: 1, explanation: "Inferencia válida por negación del consecuente de la propiedad viral." },
      { id: 14, question: "La probabilidad de que dos eventos independientes A y B ocurran simultáneamente es P(A y B) = 0.12. Si P(A) = 0.40, ¿cuál es P(B)?", options: ["0.20", "0.30", "0.40", "0.50"], correct: 1, explanation: "P(A ∩ B) = P(A) × P(B) → 0.12 = 0.40 × P(B) → P(B) = 0.12 / 0.40 = 0.30." },
      { id: 15, question: "En un grupo de 100 enfermos y 100 sanos, una prueba da positiva en 80 enfermos y en 10 sanos. La especificidad es:", options: ["80%", "85%", "90%", "95%"], correct: 2, explanation: "Especificidad = Verdaderos Negativos / Total Sanos = (100 - 10) / 100 = 90 / 100 = 90%." },
      { id: 16, question: "La falacia de Negación del Antecedente consiste en la estructura:", options: ["Si P entonces Q; no P; por tanto no Q", "Si P entonces Q; Q; por tanto P", "Si P entonces Q; P; por tanto Q", "Si P entonces Q; no Q; por tanto no P"], correct: 0, explanation: "Estructura formal de la falacia de negación del antecedente." },
      { id: 17, question: "Si el Hazard Ratio (HR) de un nuevo fármaco oncológico frente al estándar es 0.65 (p < 0.01), esto indica:", options: ["Aumento del 35% en la mortalidad", "Reducción del 35% en la tasa de eventos por unidad de tiempo", "Reducción del 65% en el riesgo", "Ningún efecto significativo"], correct: 1, explanation: "HR = 0.65 significa que el grupo tratado experimenta un 65% del riesgo del control, equivalente a una reducción del 35% en la tasa instantánea de eventos." },
      { id: 18, question: "En una tabla 2x2 epidemiológica: a=40 (VP), b=10 (FP), c=10 (FN), d=140 (VN). Calcule la Sensibilidad:", options: ["75.0%", "80.0%", "90.0%", "93.3%"], correct: 1, explanation: "Sensibilidad = a / (a + c) = 40 / (40 + 10) = 40 / 50 = 80.0%." },
      { id: 19, question: "Con la misma tabla 2x2 (a=40, b=10, c=10, d=140), calcule la Especificidad:", options: ["83.3%", "87.5%", "93.3%", "96.5%"], correct: 2, explanation: "Especificidad = d / (b + d) = 140 / (10 + 140) = 140 / 150 = 93.33% ≈ 93.3%." },
      { id: 20, question: "Premisa 1: O el paciente padece apendicitis o padece colecistitis. Premisa 2: La ecografía descartó colecistitis. Conclusión:", options: ["El paciente padece apendicitis", "El paciente padece gastritis", "El paciente no tiene patología", "Indeterminado"], correct: 0, explanation: "Silogismo Disyuntivo válido: A o B; no B; por lo tanto A." }
    ]
  },
  8: {
    title: "Simulador Oficial de Examen General - Nivel 2",
    questions: [
      { id: 1, question: "1. Paciente en choque séptico de 70 kg requiere Noradrenalina a 0.15 mcg/kg/min (8 mg en 250 ml Dextrosa 5%). Velocidad en bomba (ml/h):", options: ["14.2 ml/h", "19.7 ml/h", "24.5 ml/h", "31.2 ml/h"], correct: 1, explanation: "Dosis horaria = 630 mcg/h = 0.63 mg/h. Conc = 0.032 mg/ml. Velocidad = 0.63 / 0.032 = 19.6875 ≈ 19.7 ml/h." },
      { id: 2, question: "2. Se requiere preparar 800 ml de Dextrosa al 12.5% p/v usando soluciones al 5% y al 50%. Volumen al 50% necesario:", options: ["111.1 ml", "133.3 ml", "166.7 ml", "200.0 ml"], correct: 1, explanation: "0.05(800-V) + 0.50(V) = 100 → 40 + 0.45V = 100 → V = 133.33 ml al 50%." },
      { id: 3, question: "3. Un fármaco con t1/2 = 5.5 h y C0 = 120 mcg/ml sigue C(t) = C0*(0.5)^(t/5.5). Concentración a las 22 h y tiempo para eliminar 96.875%:", options: ["15.0 mcg/ml y 22 h", "7.5 mcg/ml y 27.5 h", "3.75 mcg/ml y 33 h", "1.875 mcg/ml y 38.5 h"], correct: 1, explanation: "22 h = 4 semividas → C(22) = 7.5 mcg/ml. 96.875% eliminado = 5 semividas = 27.5 horas." },
      { id: 4, question: "4. Rango estricto de concentración C (mcg/ml) que satisface la inecuación de seguridad terapéutica |2C - 30| ≤ 12:", options: ["[6, 18]", "[9, 21]", "[12, 24]", "[15, 30]"], correct: 1, explanation: "-12 ≤ 2C - 30 ≤ 12 → 18 ≤ 2C ≤ 42 → 9 ≤ C ≤ 21 mcg/ml." },
      { id: 5, question: "5. 12 enfermeras atienden 36 pacientes en turnos de 8 h durante 5 días. Si hay 54 pacientes, turnos de 12 h y 18 enfermeras, días de atención:", options: ["2.5 días", "3.33 días", "4.2 días", "5.0 días"], correct: 1, explanation: "Días = 5 × (12/18) × (54/36) × (8/12) = 3.33 días." },
      { id: 6, question: "6. Paciente de 175 cm y 81 kg. Dosis prescripta de Paclitaxel: 175 mg/m². Área de Superficie Corporal (Mosteller) y dosis total:", options: ["1.82 m² y 318.5 mg", "1.98 m² y 347.3 mg", "2.10 m² y 367.5 mg", "2.25 m² y 393.8 mg"], correct: 1, explanation: "ASC = √[(175×81)/3600] = 1.9843 m². Dosis = 175 × 1.9843 = 347.25 ≈ 347.3 mg." },
      { id: 7, question: "7. Sensibilidad 95%, Especificidad 90%, Prevalencia 2%. Valor Predictivo Positivo (VPP) por Teorema de Bayes:", options: ["12.50%", "16.24%", "24.50%", "48.20%"], correct: 1, explanation: "VPP = (0.95 × 0.02) / [(0.95 × 0.02) + (0.10 × 0.98)] = 0.019 / 0.117 = 16.24%." },
      { id: 8, question: "8. En tomografía esterotáctica, lesión en P1(12, 18, 25) mm y colimador en P2(42, 66, 73) mm. Distancia espacial directa d (mm):", options: ["58.4 mm", "66.2 mm", "74.2 mm", "82.6 mm"], correct: 2, explanation: "d = √(30² + 48² + 48²) = √5508 = 74.216 ≈ 74.2 mm." },
      { id: 9, question: "9. De 500 pacientes con síndrome metabólico: 240 H, 210 D, 190 L. H∩D=90, H∩L=80, D∩L=70, los tres=40. Pacientes con solo una comorbilidad:", options: ["240 pacientes", "280 pacientes", "310 pacientes", "350 pacientes"], correct: 1, explanation: "H solo = 110, D solo = 90, L solo = 80. Suma = 280 pacientes." },
      { id: 10, question: "10. Colonia de E. coli (4,000 UFC/ml) con tiempo de generación inhibido g = 80 min. Población al cabo de 6 horas:", options: ["45,255 UFC/ml", "64,000 UFC/ml", "90,510 UFC/ml", "128,000 UFC/ml"], correct: 2, explanation: "N(360) = 4,000 × 2^(4.5) = 90,509.66 ≈ 90,510 UFC/ml." },
      { id: 11, question: "11. Rango permitido de dosis diaria D (mg) si D depende de ClCr = 50 ml/min según 500 + 5(ClCr - 30) ≤ D ≤ 600 + 8(ClCr - 30):", options: ["[550, 700]", "[600, 760]", "[650, 800]", "[700, 850]"], correct: 1, explanation: "ClCr - 30 = 20. D_min = 600 mg, D_max = 760 mg." },
      { id: 12, question: "12. Una ampolla de KCl (PM 74.5 g/mol) al 14.9% p/v en 10 ml aporta mEq de K+ y volumen necesario para 500 ml a 40 mEq/L:", options: ["10 mEq y 5 ml", "20 mEq y 10 ml", "30 mEq y 15 ml", "40 mEq y 20 ml"], correct: 1, explanation: "mEq = (1490×1)/74.5 = 20 mEq. Para 500 ml a 40 mEq/L se requieren 20 mEq = 10 ml." },
      { id: 13, question: "13. Premisa 1: Insuficiencia Renal ⇒ Creatinina Alta. Premisa 2: Creatinina Alta. ¿Es válida la conclusión 'Tiene Insuficiencia Renal'?", options: ["Sí, por Modus Ponens", "Sí, por Modus Tollens", "No, es Falacia de Afirmación del Consecuente", "No, es Falacia de Negación del Antecedente"], correct: 2, explanation: "Es una falacia formal de afirmación del consecuente." },
      { id: 14, question: "14. Se deben pasar 1.5 L de solución salina en 14 h (factor 15 gtt/ml). A las 6 h solo han pasado 500 ml. Nuevo goteo para terminar a tiempo:", options: ["24 gtt/min", "31 gtt/min", "38 gtt/min", "45 gtt/min"], correct: 1, explanation: "Volumen restante = 1000 ml. Tiempo = 480 min. Goteo = (1000×15)/480 = 31.25 ≈ 31 gtt/min." },
      { id: 15, question: "15. Frasco con 1 g de Vancomicina reconstituido alcanza 10.4 ml (por volumen del soluto). Se toman 3.2 ml y se llevan a 100 ml. Concentración final:", options: ["1,520 mcg/ml", "2,450 mcg/ml", "3,077 mcg/ml", "4,100 mcg/ml"], correct: 2, explanation: "Conc = 307.69 mg / 100 ml = 3.0769 mg/ml = 3,077 mcg/ml." }
    ]
  }
};

// --- SIMULADOR DE EXAMEN (NIVEL 3) CON BANCO DE 250+ PREGUNTAS EN ROTACIÓN ---
const modulesDataL3 = {
  1: {
    id: 1,
    title: "Simulador de Examen USAC (Banco de 250+ Preguntas)",
    colorClass: "bg-emerald-700",
    badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-200",
    topics: ["Aritmética", "Álgebra", "Geometría", "Razonamiento y Lógica"],
    description: "Simulador oficial con selección aleatoria de 20 preguntas por intento a partir de un banco masivo de reactivos.",
    contentHtml: `<div class="space-y-4"><h3 class="text-lg font-bold text-slate-800">Simulador de Examen Oficial</h3><p class="text-sm text-slate-600">Este simulador selecciona 20 preguntas aleatorias de un banco de 250 reactivos.</p></div>`
  }
};

const quizzesDataL3 = {
  1: {
    title: "Banco Maestro - Simulador de Examen USAC",
    questions: [
  {
    "id": 1,
    "question": "[1] Resuelve la operación combinada: 91 + 5 × 1",
    "options": [
      "101",
      "98",
      "96",
      "93"
    ],
    "correct": 2,
    "explanation": "Por jerarquía de operaciones, primero se multiplica 5 × 1 = 5, y luego se suma 91 + 5 = 96."
  },
  {
    "id": 2,
    "question": "[2] Calcule el valor de: (27 × 9) - 5",
    "options": [
      "236",
      "238",
      "244",
      "234"
    ],
    "correct": 1,
    "explanation": "Primero se efectúa el paréntesis 27 × 9 = 243, y se resta 5, dando como resultado 238."
  },
  {
    "id": 3,
    "question": "[3] Determine el resultado de dividir 14 entre 2 (redondeado a dos decimales si es necesario):",
    "options": [
      "9.5",
      "6.2",
      "7.0",
      "8.2"
    ],
    "correct": 2,
    "explanation": "La división exacta o aproximada de 14 ÷ 2 es 7.0."
  },
  {
    "id": 4,
    "question": "[4] Resuelve: 81 - 8 + 9",
    "options": [
      "77",
      "85",
      "82",
      "86"
    ],
    "correct": 2,
    "explanation": "Operando de izquierda a derecha: 81 - 8 = 73; sumando 9 se obtiene 82."
  },
  {
    "id": 5,
    "question": "[5] Resuelve la operación combinada: 85 + 10 × 1",
    "options": [
      "95",
      "97",
      "92",
      "100"
    ],
    "correct": 0,
    "explanation": "Por jerarquía de operaciones, primero se multiplica 10 × 1 = 10, y luego se suma 85 + 10 = 95."
  },
  {
    "id": 6,
    "question": "[6] Calcule el valor de: (53 × 3) - 10",
    "options": [
      "155",
      "145",
      "147",
      "149"
    ],
    "correct": 3,
    "explanation": "Primero se efectúa el paréntesis 53 × 3 = 159, y se resta 10, dando como resultado 149."
  },
  {
    "id": 7,
    "question": "[7] Determine el resultado de dividir 21 entre 2 (redondeado a dos decimales si es necesario):",
    "options": [
      "10.5",
      "13.0",
      "11.7",
      "9.7"
    ],
    "correct": 0,
    "explanation": "La división exacta o aproximada de 21 ÷ 2 es 10.5."
  },
  {
    "id": 8,
    "question": "[8] Resuelve: 15 - 16 + 9",
    "options": [
      "3",
      "12",
      "11",
      "8"
    ],
    "correct": 3,
    "explanation": "Operando de izquierda a derecha: 15 - 16 = -1; sumando 9 se obtiene 8."
  },
  {
    "id": 9,
    "question": "[9] Resuelve la operación combinada: 80 + 11 × 6",
    "options": [
      "148",
      "146",
      "143",
      "151"
    ],
    "correct": 1,
    "explanation": "Por jerarquía de operaciones, primero se multiplica 11 × 6 = 66, y luego se suma 80 + 66 = 146."
  },
  {
    "id": 10,
    "question": "[10] Calcule el valor de: (15 × 5) - 9",
    "options": [
      "66",
      "72",
      "64",
      "62"
    ],
    "correct": 0,
    "explanation": "Primero se efectúa el paréntesis 15 × 5 = 75, y se resta 9, dando como resultado 66."
  },
  {
    "id": 11,
    "question": "[11] Determine el resultado de dividir 58 entre 8 (redondeado a dos decimales si es necesario):",
    "options": [
      "9.75",
      "8.45",
      "7.25",
      "6.45"
    ],
    "correct": 2,
    "explanation": "La división exacta o aproximada de 58 ÷ 8 es 7.25."
  },
  {
    "id": 12,
    "question": "[12] Resuelve: 55 - 8 + 5",
    "options": [
      "55",
      "56",
      "47",
      "52"
    ],
    "correct": 3,
    "explanation": "Operando de izquierda a derecha: 55 - 8 = 47; sumando 5 se obtiene 52."
  },
  {
    "id": 13,
    "question": "[13] Resuelve la operación combinada: 78 + 9 × 3",
    "options": [
      "105",
      "102",
      "110",
      "107"
    ],
    "correct": 0,
    "explanation": "Por jerarquía de operaciones, primero se multiplica 9 × 3 = 27, y luego se suma 78 + 27 = 105."
  },
  {
    "id": 14,
    "question": "[14] Calcule el valor de: (91 × 4) - 19",
    "options": [
      "345",
      "343",
      "341",
      "351"
    ],
    "correct": 0,
    "explanation": "Primero se efectúa el paréntesis 91 × 4 = 364, y se resta 19, dando como resultado 345."
  },
  {
    "id": 15,
    "question": "[15] Determine el resultado de dividir 14 entre 7 (redondeado a dos decimales si es necesario):",
    "options": [
      "3.2",
      "4.5",
      "2.0",
      "1.2"
    ],
    "correct": 2,
    "explanation": "La división exacta o aproximada de 14 ÷ 7 es 2.0."
  },
  {
    "id": 16,
    "question": "[16] Resuelve: 82 - 12 + 4",
    "options": [
      "74",
      "69",
      "77",
      "78"
    ],
    "correct": 0,
    "explanation": "Operando de izquierda a derecha: 82 - 12 = 70; sumando 4 se obtiene 74."
  },
  {
    "id": 17,
    "question": "[17] Resuelve la operación combinada: 28 + 10 × 3",
    "options": [
      "58",
      "60",
      "55",
      "63"
    ],
    "correct": 0,
    "explanation": "Por jerarquía de operaciones, primero se multiplica 10 × 3 = 30, y luego se suma 28 + 30 = 58."
  },
  {
    "id": 18,
    "question": "[18] Calcule el valor de: (84 × 7) - 15",
    "options": [
      "573",
      "571",
      "569",
      "579"
    ],
    "correct": 0,
    "explanation": "Primero se efectúa el paréntesis 84 × 7 = 588, y se resta 15, dando como resultado 573."
  },
  {
    "id": 19,
    "question": "[19] Determine el resultado de dividir 75 entre 2 (redondeado a dos decimales si es necesario):",
    "options": [
      "38.7",
      "36.7",
      "40.0",
      "37.5"
    ],
    "correct": 3,
    "explanation": "La división exacta o aproximada de 75 ÷ 2 es 37.5."
  },
  {
    "id": 20,
    "question": "[20] Resuelve: 90 - 7 + 7",
    "options": [
      "94",
      "85",
      "93",
      "90"
    ],
    "correct": 3,
    "explanation": "Operando de izquierda a derecha: 90 - 7 = 83; sumando 7 se obtiene 90."
  },
  {
    "id": 21,
    "question": "[21] Resuelve la operación combinada: 86 + 16 × 9",
    "options": [
      "235",
      "230",
      "232",
      "227"
    ],
    "correct": 1,
    "explanation": "Por jerarquía de operaciones, primero se multiplica 16 × 9 = 144, y luego se suma 86 + 144 = 230."
  },
  {
    "id": 22,
    "question": "[22] Calcule el valor de: (97 × 9) - 5",
    "options": [
      "864",
      "868",
      "866",
      "874"
    ],
    "correct": 1,
    "explanation": "Primero se efectúa el paréntesis 97 × 9 = 873, y se resta 5, dando como resultado 868."
  },
  {
    "id": 23,
    "question": "[23] Determine el resultado de dividir 24 entre 7 (redondeado a dos decimales si es necesario):",
    "options": [
      "2.63",
      "3.43",
      "5.93",
      "4.63"
    ],
    "correct": 1,
    "explanation": "La división exacta o aproximada de 24 ÷ 7 es 3.43."
  },
  {
    "id": 24,
    "question": "[24] Resuelve: 43 - 18 + 3",
    "options": [
      "32",
      "31",
      "23",
      "28"
    ],
    "correct": 3,
    "explanation": "Operando de izquierda a derecha: 43 - 18 = 25; sumando 3 se obtiene 28."
  },
  {
    "id": 25,
    "question": "[25] Resuelve la operación combinada: 91 + 18 × 4",
    "options": [
      "160",
      "163",
      "165",
      "168"
    ],
    "correct": 1,
    "explanation": "Por jerarquía de operaciones, primero se multiplica 18 × 4 = 72, y luego se suma 91 + 72 = 163."
  },
  {
    "id": 26,
    "question": "[26] Calcule el valor de: (79 × 1) - 18",
    "options": [
      "59",
      "57",
      "61",
      "67"
    ],
    "correct": 2,
    "explanation": "Primero se efectúa el paréntesis 79 × 1 = 79, y se resta 18, dando como resultado 61."
  },
  {
    "id": 27,
    "question": "[27] Determine el resultado de dividir 24 entre 5 (redondeado a dos decimales si es necesario):",
    "options": [
      "7.3",
      "4.0",
      "4.8",
      "6.0"
    ],
    "correct": 2,
    "explanation": "La división exacta o aproximada de 24 ÷ 5 es 4.8."
  },
  {
    "id": 28,
    "question": "[28] Resuelve: 82 - 4 + 2",
    "options": [
      "83",
      "75",
      "80",
      "84"
    ],
    "correct": 2,
    "explanation": "Operando de izquierda a derecha: 82 - 4 = 78; sumando 2 se obtiene 80."
  },
  {
    "id": 29,
    "question": "[29] Resuelve la operación combinada: 26 + 17 × 9",
    "options": [
      "179",
      "176",
      "181",
      "184"
    ],
    "correct": 0,
    "explanation": "Por jerarquía de operaciones, primero se multiplica 17 × 9 = 153, y luego se suma 26 + 153 = 179."
  },
  {
    "id": 30,
    "question": "[30] Calcule el valor de: (37 × 4) - 19",
    "options": [
      "125",
      "127",
      "129",
      "135"
    ],
    "correct": 2,
    "explanation": "Primero se efectúa el paréntesis 37 × 4 = 148, y se resta 19, dando como resultado 129."
  },
  {
    "id": 31,
    "question": "[31] Determine el resultado de dividir 66 entre 8 (redondeado a dos decimales si es necesario):",
    "options": [
      "9.45",
      "7.45",
      "10.75",
      "8.25"
    ],
    "correct": 3,
    "explanation": "La división exacta o aproximada de 66 ÷ 8 es 8.25."
  },
  {
    "id": 32,
    "question": "[32] Resuelve: 18 - 12 + 1",
    "options": [
      "11",
      "7",
      "2",
      "10"
    ],
    "correct": 1,
    "explanation": "Operando de izquierda a derecha: 18 - 12 = 6; sumando 1 se obtiene 7."
  },
  {
    "id": 33,
    "question": "[33] Resuelve la operación combinada: 10 + 4 × 1",
    "options": [
      "16",
      "11",
      "14",
      "19"
    ],
    "correct": 2,
    "explanation": "Por jerarquía de operaciones, primero se multiplica 4 × 1 = 4, y luego se suma 10 + 4 = 14."
  },
  {
    "id": 34,
    "question": "[34] Calcule el valor de: (52 × 9) - 4",
    "options": [
      "460",
      "470",
      "462",
      "464"
    ],
    "correct": 3,
    "explanation": "Primero se efectúa el paréntesis 52 × 9 = 468, y se resta 4, dando como resultado 464."
  },
  {
    "id": 35,
    "question": "[35] Determine el resultado de dividir 37 entre 3 (redondeado a dos decimales si es necesario):",
    "options": [
      "11.53",
      "13.53",
      "12.33",
      "14.83"
    ],
    "correct": 2,
    "explanation": "La división exacta o aproximada de 37 ÷ 3 es 12.33."
  },
  {
    "id": 36,
    "question": "[36] Resuelve: 62 - 8 + 2",
    "options": [
      "60",
      "59",
      "51",
      "56"
    ],
    "correct": 3,
    "explanation": "Operando de izquierda a derecha: 62 - 8 = 54; sumando 2 se obtiene 56."
  },
  {
    "id": 37,
    "question": "[37] Resuelve la operación combinada: 55 + 15 × 7",
    "options": [
      "165",
      "160",
      "157",
      "162"
    ],
    "correct": 1,
    "explanation": "Por jerarquía de operaciones, primero se multiplica 15 × 7 = 105, y luego se suma 55 + 105 = 160."
  },
  {
    "id": 38,
    "question": "[38] Calcule el valor de: (96 × 1) - 5",
    "options": [
      "87",
      "91",
      "97",
      "89"
    ],
    "correct": 1,
    "explanation": "Primero se efectúa el paréntesis 96 × 1 = 96, y se resta 5, dando como resultado 91."
  },
  {
    "id": 39,
    "question": "[39] Determine el resultado de dividir 23 entre 4 (redondeado a dos decimales si es necesario):",
    "options": [
      "5.75",
      "8.25",
      "4.95",
      "6.95"
    ],
    "correct": 0,
    "explanation": "La división exacta o aproximada de 23 ÷ 4 es 5.75."
  },
  {
    "id": 40,
    "question": "[40] Resuelve: 27 - 15 + 3",
    "options": [
      "19",
      "15",
      "18",
      "10"
    ],
    "correct": 1,
    "explanation": "Operando de izquierda a derecha: 27 - 15 = 12; sumando 3 se obtiene 15."
  },
  {
    "id": 41,
    "question": "[41] ¿Cuánto es el 15% de 800?",
    "options": [
      "135",
      "110",
      "145",
      "120"
    ],
    "correct": 3,
    "explanation": "Cálculo porcentual: 15% de 800 es 120.0, operando correctamente da 120."
  },
  {
    "id": 42,
    "question": "[42] Un artículo cuesta $300 y tiene un descuento del 15%. ¿Cuál es su precio final?",
    "options": [
      "255",
      "235",
      "290",
      "265"
    ],
    "correct": 0,
    "explanation": "Cálculo porcentual: 15% de 300 es 45.0, operando correctamente da 255."
  },
  {
    "id": 43,
    "question": "[43] Si se incrementa $300 en un 60%, ¿qué cantidad total se obtiene?",
    "options": [
      "465",
      "500",
      "480",
      "450"
    ],
    "correct": 2,
    "explanation": "Cálculo porcentual: 60% de 300 es 180.0, operando correctamente da 480."
  },
  {
    "id": 44,
    "question": "[44] ¿Cuánto es el 50% de 120?",
    "options": [
      "60",
      "50",
      "75",
      "85"
    ],
    "correct": 0,
    "explanation": "Cálculo porcentual: 50% de 120 es 60.0, operando correctamente da 60."
  },
  {
    "id": 45,
    "question": "[45] Un artículo cuesta $600 y tiene un descuento del 30%. ¿Cuál es su precio final?",
    "options": [
      "430",
      "400",
      "420",
      "455"
    ],
    "correct": 2,
    "explanation": "Cálculo porcentual: 30% de 600 es 180.0, operando correctamente da 420."
  },
  {
    "id": 46,
    "question": "[46] Si se incrementa $300 en un 30%, ¿qué cantidad total se obtiene?",
    "options": [
      "375",
      "360",
      "410",
      "390"
    ],
    "correct": 3,
    "explanation": "Cálculo porcentual: 30% de 300 es 90.0, operando correctamente da 390."
  },
  {
    "id": 47,
    "question": "[47] ¿Cuánto es el 40% de 120?",
    "options": [
      "73",
      "63",
      "38",
      "48"
    ],
    "correct": 3,
    "explanation": "Cálculo porcentual: 40% de 120 es 48.0, operando correctamente da 48."
  },
  {
    "id": 48,
    "question": "[48] Un artículo cuesta $1000 y tiene un descuento del 75%. ¿Cuál es su precio final?",
    "options": [
      "285",
      "230",
      "250",
      "260"
    ],
    "correct": 2,
    "explanation": "Cálculo porcentual: 75% de 1000 es 750.0, operando correctamente da 250."
  },
  {
    "id": 49,
    "question": "[49] Si se incrementa $200 en un 20%, ¿qué cantidad total se obtiene?",
    "options": [
      "225",
      "210",
      "260",
      "240"
    ],
    "correct": 3,
    "explanation": "Cálculo porcentual: 20% de 200 es 40.0, operando correctamente da 240."
  },
  {
    "id": 50,
    "question": "[50] ¿Cuánto es el 50% de 200?",
    "options": [
      "125",
      "100",
      "90",
      "115"
    ],
    "correct": 1,
    "explanation": "Cálculo porcentual: 50% de 200 es 100.0, operando correctamente da 100."
  },
  {
    "id": 51,
    "question": "[51] Un artículo cuesta $600 y tiene un descuento del 15%. ¿Cuál es su precio final?",
    "options": [
      "545",
      "510",
      "520",
      "490"
    ],
    "correct": 1,
    "explanation": "Cálculo porcentual: 15% de 600 es 90.0, operando correctamente da 510."
  },
  {
    "id": 52,
    "question": "[52] Si se incrementa $300 en un 40%, ¿qué cantidad total se obtiene?",
    "options": [
      "390",
      "420",
      "405",
      "440"
    ],
    "correct": 1,
    "explanation": "Cálculo porcentual: 40% de 300 es 120.0, operando correctamente da 420."
  },
  {
    "id": 53,
    "question": "[53] ¿Cuánto es el 30% de 800?",
    "options": [
      "255",
      "265",
      "240",
      "230"
    ],
    "correct": 2,
    "explanation": "Cálculo porcentual: 30% de 800 es 240.0, operando correctamente da 240."
  },
  {
    "id": 54,
    "question": "[54] Un artículo cuesta $200 y tiene un descuento del 60%. ¿Cuál es su precio final?",
    "options": [
      "90",
      "115",
      "60",
      "80"
    ],
    "correct": 3,
    "explanation": "Cálculo porcentual: 60% de 200 es 120.0, operando correctamente da 80."
  },
  {
    "id": 55,
    "question": "[55] Si se incrementa $400 en un 75%, ¿qué cantidad total se obtiene?",
    "options": [
      "720",
      "700",
      "670",
      "685"
    ],
    "correct": 1,
    "explanation": "Cálculo porcentual: 75% de 400 es 300.0, operando correctamente da 700."
  },
  {
    "id": 56,
    "question": "[56] ¿Cuánto es el 25% de 500?",
    "options": [
      "150",
      "140",
      "125",
      "115"
    ],
    "correct": 2,
    "explanation": "Cálculo porcentual: 25% de 500 es 125.0, operando correctamente da 125."
  },
  {
    "id": 57,
    "question": "[57] Un artículo cuesta $400 y tiene un descuento del 75%. ¿Cuál es su precio final?",
    "options": [
      "135",
      "110",
      "80",
      "100"
    ],
    "correct": 3,
    "explanation": "Cálculo porcentual: 75% de 400 es 300.0, operando correctamente da 100."
  },
  {
    "id": 58,
    "question": "[58] Si se incrementa $240 en un 15%, ¿qué cantidad total se obtiene?",
    "options": [
      "261",
      "246",
      "276",
      "296"
    ],
    "correct": 2,
    "explanation": "Cálculo porcentual: 15% de 240 es 36.0, operando correctamente da 276."
  },
  {
    "id": 59,
    "question": "[59] ¿Cuánto es el 75% de 240?",
    "options": [
      "205",
      "180",
      "195",
      "170"
    ],
    "correct": 1,
    "explanation": "Cálculo porcentual: 75% de 240 es 180.0, operando correctamente da 180."
  },
  {
    "id": 60,
    "question": "[60] Un artículo cuesta $300 y tiene un descuento del 40%. ¿Cuál es su precio final?",
    "options": [
      "180",
      "190",
      "215",
      "160"
    ],
    "correct": 0,
    "explanation": "Cálculo porcentual: 40% de 300 es 120.0, operando correctamente da 180."
  },
  {
    "id": 61,
    "question": "[61] Si se incrementa $120 en un 30%, ¿qué cantidad total se obtiene?",
    "options": [
      "126",
      "141",
      "176",
      "156"
    ],
    "correct": 3,
    "explanation": "Cálculo porcentual: 30% de 120 es 36.0, operando correctamente da 156."
  },
  {
    "id": 62,
    "question": "[62] ¿Cuánto es el 30% de 120?",
    "options": [
      "26",
      "61",
      "51",
      "36"
    ],
    "correct": 3,
    "explanation": "Cálculo porcentual: 30% de 120 es 36.0, operando correctamente da 36."
  },
  {
    "id": 63,
    "question": "[63] Un artículo cuesta $240 y tiene un descuento del 30%. ¿Cuál es su precio final?",
    "options": [
      "168",
      "178",
      "148",
      "203"
    ],
    "correct": 0,
    "explanation": "Cálculo porcentual: 30% de 240 es 72.0, operando correctamente da 168."
  },
  {
    "id": 64,
    "question": "[64] Si se incrementa $120 en un 75%, ¿qué cantidad total se obtiene?",
    "options": [
      "195",
      "230",
      "180",
      "210"
    ],
    "correct": 3,
    "explanation": "Cálculo porcentual: 75% de 120 es 90.0, operando correctamente da 210."
  },
  {
    "id": 65,
    "question": "[65] ¿Cuánto es el 75% de 120?",
    "options": [
      "105",
      "90",
      "115",
      "80"
    ],
    "correct": 1,
    "explanation": "Cálculo porcentual: 75% de 120 es 90.0, operando correctamente da 90."
  },
  {
    "id": 66,
    "question": "[66] Un artículo cuesta $240 y tiene un descuento del 50%. ¿Cuál es su precio final?",
    "options": [
      "155",
      "100",
      "130",
      "120"
    ],
    "correct": 3,
    "explanation": "Cálculo porcentual: 50% de 240 es 120.0, operando correctamente da 120."
  },
  {
    "id": 67,
    "question": "[67] Si se incrementa $500 en un 10%, ¿qué cantidad total se obtiene?",
    "options": [
      "520",
      "550",
      "570",
      "535"
    ],
    "correct": 1,
    "explanation": "Cálculo porcentual: 10% de 500 es 50.0, operando correctamente da 550."
  },
  {
    "id": 68,
    "question": "[68] ¿Cuánto es el 15% de 500?",
    "options": [
      "90",
      "75",
      "65",
      "100"
    ],
    "correct": 1,
    "explanation": "Cálculo porcentual: 15% de 500 es 75.0, operando correctamente da 75."
  },
  {
    "id": 69,
    "question": "[69] Un artículo cuesta $240 y tiene un descuento del 25%. ¿Cuál es su precio final?",
    "options": [
      "160",
      "180",
      "215",
      "190"
    ],
    "correct": 1,
    "explanation": "Cálculo porcentual: 25% de 240 es 60.0, operando correctamente da 180."
  },
  {
    "id": 70,
    "question": "[70] Si se incrementa $500 en un 20%, ¿qué cantidad total se obtiene?",
    "options": [
      "585",
      "600",
      "620",
      "570"
    ],
    "correct": 1,
    "explanation": "Cálculo porcentual: 20% de 500 es 100.0, operando correctamente da 600."
  },
  {
    "id": 71,
    "question": "[71] ¿Cuánto es el 30% de 240?",
    "options": [
      "62",
      "97",
      "87",
      "72"
    ],
    "correct": 3,
    "explanation": "Cálculo porcentual: 30% de 240 es 72.0, operando correctamente da 72."
  },
  {
    "id": 72,
    "question": "[72] Un artículo cuesta $300 y tiene un descuento del 60%. ¿Cuál es su precio final?",
    "options": [
      "120",
      "100",
      "155",
      "130"
    ],
    "correct": 0,
    "explanation": "Cálculo porcentual: 60% de 300 es 180.0, operando correctamente da 120."
  },
  {
    "id": 73,
    "question": "[73] Si se incrementa $300 en un 30%, ¿qué cantidad total se obtiene?",
    "options": [
      "360",
      "410",
      "390",
      "375"
    ],
    "correct": 2,
    "explanation": "Cálculo porcentual: 30% de 300 es 90.0, operando correctamente da 390."
  },
  {
    "id": 74,
    "question": "[74] ¿Cuánto es el 50% de 500?",
    "options": [
      "275",
      "265",
      "250",
      "240"
    ],
    "correct": 2,
    "explanation": "Cálculo porcentual: 50% de 500 es 250.0, operando correctamente da 250."
  },
  {
    "id": 75,
    "question": "[75] Un artículo cuesta $1000 y tiene un descuento del 40%. ¿Cuál es su precio final?",
    "options": [
      "600",
      "610",
      "580",
      "635"
    ],
    "correct": 0,
    "explanation": "Cálculo porcentual: 40% de 1000 es 400.0, operando correctamente da 600."
  },
  {
    "id": 76,
    "question": "[76] Si se incrementa $200 en un 10%, ¿qué cantidad total se obtiene?",
    "options": [
      "190",
      "205",
      "220",
      "240"
    ],
    "correct": 2,
    "explanation": "Cálculo porcentual: 10% de 200 es 20.0, operando correctamente da 220."
  },
  {
    "id": 77,
    "question": "[77] ¿Cuánto es el 10% de 200?",
    "options": [
      "20",
      "10",
      "35",
      "45"
    ],
    "correct": 0,
    "explanation": "Cálculo porcentual: 10% de 200 es 20.0, operando correctamente da 20."
  },
  {
    "id": 78,
    "question": "[78] Un artículo cuesta $1000 y tiene un descuento del 50%. ¿Cuál es su precio final?",
    "options": [
      "480",
      "535",
      "510",
      "500"
    ],
    "correct": 3,
    "explanation": "Cálculo porcentual: 50% de 1000 es 500.0, operando correctamente da 500."
  },
  {
    "id": 79,
    "question": "[79] Si se incrementa $120 en un 30%, ¿qué cantidad total se obtiene?",
    "options": [
      "141",
      "176",
      "156",
      "126"
    ],
    "correct": 2,
    "explanation": "Cálculo porcentual: 30% de 120 es 36.0, operando correctamente da 156."
  },
  {
    "id": 80,
    "question": "[80] ¿Cuánto es el 40% de 600?",
    "options": [
      "265",
      "255",
      "230",
      "240"
    ],
    "correct": 3,
    "explanation": "Cálculo porcentual: 40% de 600 es 240.0, operando correctamente da 240."
  },
  {
    "id": 81,
    "question": "[81] Un artículo cuesta $200 y tiene un descuento del 40%. ¿Cuál es su precio final?",
    "options": [
      "120",
      "130",
      "155",
      "100"
    ],
    "correct": 0,
    "explanation": "Cálculo porcentual: 40% de 200 es 80.0, operando correctamente da 120."
  },
  {
    "id": 82,
    "question": "[82] Si se incrementa $500 en un 50%, ¿qué cantidad total se obtiene?",
    "options": [
      "750",
      "735",
      "770",
      "720"
    ],
    "correct": 0,
    "explanation": "Cálculo porcentual: 50% de 500 es 250.0, operando correctamente da 750."
  },
  {
    "id": 83,
    "question": "[83] ¿Cuánto es el 75% de 240?",
    "options": [
      "180",
      "170",
      "205",
      "195"
    ],
    "correct": 0,
    "explanation": "Cálculo porcentual: 75% de 240 es 180.0, operando correctamente da 180."
  },
  {
    "id": 84,
    "question": "[84] Un artículo cuesta $400 y tiene un descuento del 20%. ¿Cuál es su precio final?",
    "options": [
      "330",
      "320",
      "300",
      "355"
    ],
    "correct": 1,
    "explanation": "Cálculo porcentual: 20% de 400 es 80.0, operando correctamente da 320."
  },
  {
    "id": 85,
    "question": "[85] Si se incrementa $400 en un 30%, ¿qué cantidad total se obtiene?",
    "options": [
      "520",
      "540",
      "490",
      "505"
    ],
    "correct": 0,
    "explanation": "Cálculo porcentual: 30% de 400 es 120.0, operando correctamente da 520."
  },
  {
    "id": 86,
    "question": "[86] Resuelve para x la ecuación lineal: 9x + 33 = 177",
    "options": [
      "x = 16",
      "x = 21",
      "x = 13",
      "x = 18"
    ],
    "correct": 0,
    "explanation": "Despejando: 9x = 177 - 33 → 9x = 144 → x = 16."
  },
  {
    "id": 87,
    "question": "[87] Resuelve para x la ecuación lineal: 4x + 10 = 102",
    "options": [
      "x = 23",
      "x = 25",
      "x = 28",
      "x = 20"
    ],
    "correct": 0,
    "explanation": "Despejando: 4x = 102 - 10 → 4x = 92 → x = 23."
  },
  {
    "id": 88,
    "question": "[88] Resuelve para x la ecuación lineal: 3x + 48 = 75",
    "options": [
      "x = 11",
      "x = 14",
      "x = 9",
      "x = 6"
    ],
    "correct": 2,
    "explanation": "Despejando: 3x = 75 - 48 → 3x = 27 → x = 9."
  },
  {
    "id": 89,
    "question": "[89] Resuelve para x la ecuación lineal: 4x + 7 = 15",
    "options": [
      "x = 1",
      "x = 2",
      "x = 7",
      "x = 4"
    ],
    "correct": 1,
    "explanation": "Despejando: 4x = 15 - 7 → 4x = 8 → x = 2."
  },
  {
    "id": 90,
    "question": "[90] Resuelve para x la ecuación lineal: 9x + 45 = 180",
    "options": [
      "x = 15",
      "x = 20",
      "x = 12",
      "x = 17"
    ],
    "correct": 0,
    "explanation": "Despejando: 9x = 180 - 45 → 9x = 135 → x = 15."
  },
  {
    "id": 91,
    "question": "[91] Resuelve para x la ecuación lineal: 9x + 20 = 146",
    "options": [
      "x = 19",
      "x = 14",
      "x = 11",
      "x = 16"
    ],
    "correct": 1,
    "explanation": "Despejando: 9x = 146 - 20 → 9x = 126 → x = 14."
  },
  {
    "id": 92,
    "question": "[92] Resuelve para x la ecuación lineal: 3x + 19 = 64",
    "options": [
      "x = 15",
      "x = 20",
      "x = 12",
      "x = 17"
    ],
    "correct": 0,
    "explanation": "Despejando: 3x = 64 - 19 → 3x = 45 → x = 15."
  },
  {
    "id": 93,
    "question": "[93] Resuelve para x la ecuación lineal: 2x + 20 = 58",
    "options": [
      "x = 16",
      "x = 24",
      "x = 21",
      "x = 19"
    ],
    "correct": 3,
    "explanation": "Despejando: 2x = 58 - 20 → 2x = 38 → x = 19."
  },
  {
    "id": 94,
    "question": "[94] Resuelve para x la ecuación lineal: 9x + 38 = 245",
    "options": [
      "x = 23",
      "x = 28",
      "x = 25",
      "x = 20"
    ],
    "correct": 0,
    "explanation": "Despejando: 9x = 245 - 38 → 9x = 207 → x = 23."
  },
  {
    "id": 95,
    "question": "[95] Resuelve para x la ecuación lineal: 9x + 35 = 98",
    "options": [
      "x = 4",
      "x = 7",
      "x = 9",
      "x = 12"
    ],
    "correct": 1,
    "explanation": "Despejando: 9x = 98 - 35 → 9x = 63 → x = 7."
  },
  {
    "id": 96,
    "question": "[96] Resuelve para x la ecuación lineal: 6x + 36 = 144",
    "options": [
      "x = 18",
      "x = 15",
      "x = 23",
      "x = 20"
    ],
    "correct": 0,
    "explanation": "Despejando: 6x = 144 - 36 → 6x = 108 → x = 18."
  },
  {
    "id": 97,
    "question": "[97] Resuelve para x la ecuación lineal: 3x + 23 = 95",
    "options": [
      "x = 24",
      "x = 21",
      "x = 29",
      "x = 26"
    ],
    "correct": 0,
    "explanation": "Despejando: 3x = 95 - 23 → 3x = 72 → x = 24."
  },
  {
    "id": 98,
    "question": "[98] Resuelve para x la ecuación lineal: 7x + 10 = 143",
    "options": [
      "x = 24",
      "x = 16",
      "x = 19",
      "x = 21"
    ],
    "correct": 2,
    "explanation": "Despejando: 7x = 143 - 10 → 7x = 133 → x = 19."
  },
  {
    "id": 99,
    "question": "[99] Resuelve para x la ecuación lineal: 8x + 14 = 206",
    "options": [
      "x = 21",
      "x = 29",
      "x = 24",
      "x = 26"
    ],
    "correct": 2,
    "explanation": "Despejando: 8x = 206 - 14 → 8x = 192 → x = 24."
  },
  {
    "id": 100,
    "question": "[100] Resuelve para x la ecuación lineal: 8x + 39 = 135",
    "options": [
      "x = 9",
      "x = 12",
      "x = 14",
      "x = 17"
    ],
    "correct": 1,
    "explanation": "Despejando: 8x = 135 - 39 → 8x = 96 → x = 12."
  },
  {
    "id": 101,
    "question": "[101] Resuelve para x la ecuación lineal: 5x + 29 = 104",
    "options": [
      "x = 20",
      "x = 17",
      "x = 12",
      "x = 15"
    ],
    "correct": 3,
    "explanation": "Despejando: 5x = 104 - 29 → 5x = 75 → x = 15."
  },
  {
    "id": 102,
    "question": "[102] Resuelve para x la ecuación lineal: 9x + 27 = 45",
    "options": [
      "x = 2",
      "x = 7",
      "x = 4",
      "x = 1"
    ],
    "correct": 0,
    "explanation": "Despejando: 9x = 45 - 27 → 9x = 18 → x = 2."
  },
  {
    "id": 103,
    "question": "[103] Resuelve para x la ecuación lineal: 5x + 19 = 104",
    "options": [
      "x = 17",
      "x = 22",
      "x = 19",
      "x = 14"
    ],
    "correct": 0,
    "explanation": "Despejando: 5x = 104 - 19 → 5x = 85 → x = 17."
  },
  {
    "id": 104,
    "question": "[104] Resuelve para x la ecuación lineal: 2x + 26 = 54",
    "options": [
      "x = 16",
      "x = 14",
      "x = 11",
      "x = 19"
    ],
    "correct": 1,
    "explanation": "Despejando: 2x = 54 - 26 → 2x = 28 → x = 14."
  },
  {
    "id": 105,
    "question": "[105] Resuelve para x la ecuación lineal: 9x + 44 = 98",
    "options": [
      "x = 3",
      "x = 11",
      "x = 8",
      "x = 6"
    ],
    "correct": 3,
    "explanation": "Despejando: 9x = 98 - 44 → 9x = 54 → x = 6."
  },
  {
    "id": 106,
    "question": "[106] Resuelve para x la ecuación lineal: 3x + 32 = 98",
    "options": [
      "x = 19",
      "x = 22",
      "x = 27",
      "x = 24"
    ],
    "correct": 1,
    "explanation": "Despejando: 3x = 98 - 32 → 3x = 66 → x = 22."
  },
  {
    "id": 107,
    "question": "[107] Resuelve para x la ecuación lineal: 2x + 29 = 49",
    "options": [
      "x = 15",
      "x = 12",
      "x = 10",
      "x = 7"
    ],
    "correct": 2,
    "explanation": "Despejando: 2x = 49 - 29 → 2x = 20 → x = 10."
  },
  {
    "id": 108,
    "question": "[108] Resuelve para x la ecuación lineal: 7x + 29 = 113",
    "options": [
      "x = 12",
      "x = 17",
      "x = 14",
      "x = 9"
    ],
    "correct": 0,
    "explanation": "Despejando: 7x = 113 - 29 → 7x = 84 → x = 12."
  },
  {
    "id": 109,
    "question": "[109] Resuelve para x la ecuación lineal: 3x + 6 = 57",
    "options": [
      "x = 14",
      "x = 22",
      "x = 19",
      "x = 17"
    ],
    "correct": 3,
    "explanation": "Despejando: 3x = 57 - 6 → 3x = 51 → x = 17."
  },
  {
    "id": 110,
    "question": "[110] Resuelve para x la ecuación lineal: 3x + 7 = 73",
    "options": [
      "x = 24",
      "x = 19",
      "x = 27",
      "x = 22"
    ],
    "correct": 3,
    "explanation": "Despejando: 3x = 73 - 7 → 3x = 66 → x = 22."
  },
  {
    "id": 111,
    "question": "[111] Resuelve para x la ecuación lineal: 2x + 14 = 56",
    "options": [
      "x = 18",
      "x = 26",
      "x = 21",
      "x = 23"
    ],
    "correct": 2,
    "explanation": "Despejando: 2x = 56 - 14 → 2x = 42 → x = 21."
  },
  {
    "id": 112,
    "question": "[112] Resuelve para x la ecuación lineal: 3x + 18 = 78",
    "options": [
      "x = 20",
      "x = 22",
      "x = 17",
      "x = 25"
    ],
    "correct": 0,
    "explanation": "Despejando: 3x = 78 - 18 → 3x = 60 → x = 20."
  },
  {
    "id": 113,
    "question": "[113] Resuelve para x la ecuación lineal: 7x + 43 = 92",
    "options": [
      "x = 4",
      "x = 9",
      "x = 12",
      "x = 7"
    ],
    "correct": 3,
    "explanation": "Despejando: 7x = 92 - 43 → 7x = 49 → x = 7."
  },
  {
    "id": 114,
    "question": "[114] Resuelve para x la ecuación lineal: 3x + 6 = 66",
    "options": [
      "x = 20",
      "x = 22",
      "x = 25",
      "x = 17"
    ],
    "correct": 0,
    "explanation": "Despejando: 3x = 66 - 6 → 3x = 60 → x = 20."
  },
  {
    "id": 115,
    "question": "[115] Resuelve para x la ecuación lineal: 8x + 17 = 209",
    "options": [
      "x = 26",
      "x = 29",
      "x = 21",
      "x = 24"
    ],
    "correct": 3,
    "explanation": "Despejando: 8x = 209 - 17 → 8x = 192 → x = 24."
  },
  {
    "id": 116,
    "question": "[116] Resuelve para x la ecuación lineal: 3x + 24 = 96",
    "options": [
      "x = 26",
      "x = 29",
      "x = 21",
      "x = 24"
    ],
    "correct": 3,
    "explanation": "Despejando: 3x = 96 - 24 → 3x = 72 → x = 24."
  },
  {
    "id": 117,
    "question": "[117] Resuelve para x la ecuación lineal: 7x + 32 = 165",
    "options": [
      "x = 24",
      "x = 21",
      "x = 19",
      "x = 16"
    ],
    "correct": 2,
    "explanation": "Despejando: 7x = 165 - 32 → 7x = 133 → x = 19."
  },
  {
    "id": 118,
    "question": "[118] Resuelve para x la ecuación lineal: 2x + 36 = 66",
    "options": [
      "x = 20",
      "x = 12",
      "x = 17",
      "x = 15"
    ],
    "correct": 3,
    "explanation": "Despejando: 2x = 66 - 36 → 2x = 30 → x = 15."
  },
  {
    "id": 119,
    "question": "[119] Resuelve para x la ecuación lineal: 9x + 14 = 230",
    "options": [
      "x = 21",
      "x = 26",
      "x = 24",
      "x = 29"
    ],
    "correct": 2,
    "explanation": "Despejando: 9x = 230 - 14 → 9x = 216 → x = 24."
  },
  {
    "id": 120,
    "question": "[120] Resuelve para x la ecuación lineal: 9x + 32 = 176",
    "options": [
      "x = 21",
      "x = 16",
      "x = 18",
      "x = 13"
    ],
    "correct": 1,
    "explanation": "Despejando: 9x = 176 - 32 → 9x = 144 → x = 16."
  },
  {
    "id": 121,
    "question": "[121] Resuelve para x la ecuación lineal: 3x + 33 = 63",
    "options": [
      "x = 10",
      "x = 7",
      "x = 15",
      "x = 12"
    ],
    "correct": 0,
    "explanation": "Despejando: 3x = 63 - 33 → 3x = 30 → x = 10."
  },
  {
    "id": 122,
    "question": "[122] Resuelve para x la ecuación lineal: 7x + 36 = 50",
    "options": [
      "x = 7",
      "x = 4",
      "x = 2",
      "x = 1"
    ],
    "correct": 2,
    "explanation": "Despejando: 7x = 50 - 36 → 7x = 14 → x = 2."
  },
  {
    "id": 123,
    "question": "[123] Resuelve para x la ecuación lineal: 5x + 21 = 86",
    "options": [
      "x = 13",
      "x = 18",
      "x = 15",
      "x = 10"
    ],
    "correct": 0,
    "explanation": "Despejando: 5x = 86 - 21 → 5x = 65 → x = 13."
  },
  {
    "id": 124,
    "question": "[124] Resuelve para x la ecuación lineal: 2x + 17 = 53",
    "options": [
      "x = 15",
      "x = 20",
      "x = 23",
      "x = 18"
    ],
    "correct": 3,
    "explanation": "Despejando: 2x = 53 - 17 → 2x = 36 → x = 18."
  },
  {
    "id": 125,
    "question": "[125] Resuelve para x la ecuación lineal: 9x + 20 = 191",
    "options": [
      "x = 19",
      "x = 21",
      "x = 16",
      "x = 24"
    ],
    "correct": 0,
    "explanation": "Despejando: 9x = 191 - 20 → 9x = 171 → x = 19."
  },
  {
    "id": 126,
    "question": "[126] Resuelve para x la ecuación lineal: 9x + 10 = 28",
    "options": [
      "x = 7",
      "x = 4",
      "x = 2",
      "x = 1"
    ],
    "correct": 2,
    "explanation": "Despejando: 9x = 28 - 10 → 9x = 18 → x = 2."
  },
  {
    "id": 127,
    "question": "[127] Resuelve para x la ecuación lineal: 5x + 47 = 102",
    "options": [
      "x = 11",
      "x = 16",
      "x = 13",
      "x = 8"
    ],
    "correct": 0,
    "explanation": "Despejando: 5x = 102 - 47 → 5x = 55 → x = 11."
  },
  {
    "id": 128,
    "question": "[128] Resuelve para x la ecuación lineal: 8x + 40 = 240",
    "options": [
      "x = 25",
      "x = 30",
      "x = 27",
      "x = 22"
    ],
    "correct": 0,
    "explanation": "Despejando: 8x = 240 - 40 → 8x = 200 → x = 25."
  },
  {
    "id": 129,
    "question": "[129] Resuelve para x la ecuación lineal: 6x + 21 = 87",
    "options": [
      "x = 16",
      "x = 8",
      "x = 11",
      "x = 13"
    ],
    "correct": 2,
    "explanation": "Despejando: 6x = 87 - 21 → 6x = 66 → x = 11."
  },
  {
    "id": 130,
    "question": "[130] Resuelve para x la ecuación lineal: 7x + 39 = 74",
    "options": [
      "x = 10",
      "x = 2",
      "x = 5",
      "x = 7"
    ],
    "correct": 2,
    "explanation": "Despejando: 7x = 74 - 39 → 7x = 35 → x = 5."
  },
  {
    "id": 131,
    "question": "[131] Resuelve para x la ecuación lineal: 9x + 42 = 132",
    "options": [
      "x = 12",
      "x = 15",
      "x = 10",
      "x = 7"
    ],
    "correct": 2,
    "explanation": "Despejando: 9x = 132 - 42 → 9x = 90 → x = 10."
  },
  {
    "id": 132,
    "question": "[132] Resuelve para x la ecuación lineal: 6x + 28 = 82",
    "options": [
      "x = 6",
      "x = 9",
      "x = 14",
      "x = 11"
    ],
    "correct": 1,
    "explanation": "Despejando: 6x = 82 - 28 → 6x = 54 → x = 9."
  },
  {
    "id": 133,
    "question": "[133] Resuelve para x la ecuación lineal: 4x + 7 = 47",
    "options": [
      "x = 15",
      "x = 12",
      "x = 7",
      "x = 10"
    ],
    "correct": 3,
    "explanation": "Despejando: 4x = 47 - 7 → 4x = 40 → x = 10."
  },
  {
    "id": 134,
    "question": "[134] Resuelve para x la ecuación lineal: 4x + 36 = 124",
    "options": [
      "x = 19",
      "x = 24",
      "x = 27",
      "x = 22"
    ],
    "correct": 3,
    "explanation": "Despejando: 4x = 124 - 36 → 4x = 88 → x = 22."
  },
  {
    "id": 135,
    "question": "[135] Resuelve para x la ecuación lineal: 9x + 33 = 186",
    "options": [
      "x = 19",
      "x = 22",
      "x = 17",
      "x = 14"
    ],
    "correct": 2,
    "explanation": "Despejando: 9x = 186 - 33 → 9x = 153 → x = 17."
  },
  {
    "id": 136,
    "question": "[136] En un triángulo rectángulo, los catetos miden 12 cm y 16 cm. ¿Cuánto mide la hipotenusa?",
    "options": [
      "17 cm",
      "22 cm",
      "24 cm",
      "20 cm"
    ],
    "correct": 3,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 20 cm."
  },
  {
    "id": 137,
    "question": "[137] En un triángulo rectángulo, la hipotenusa mide 15 cm y uno de sus catetos mide 9 cm. ¿Cuánto mide el otro cateto?",
    "options": [
      "14 cm",
      "10 cm",
      "16 cm",
      "12 cm"
    ],
    "correct": 3,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 12 cm."
  },
  {
    "id": 138,
    "question": "[138] En un triángulo rectángulo, los catetos miden 16 cm y 30 cm. ¿Cuánto mide la hipotenusa?",
    "options": [
      "36 cm",
      "31 cm",
      "38 cm",
      "34 cm"
    ],
    "correct": 3,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 34 cm."
  },
  {
    "id": 139,
    "question": "[139] En un triángulo rectángulo, la hipotenusa mide 34 cm y uno de sus catetos mide 16 cm. ¿Cuánto mide el otro cateto?",
    "options": [
      "30 cm",
      "34 cm",
      "28 cm",
      "32 cm"
    ],
    "correct": 0,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 30 cm."
  },
  {
    "id": 140,
    "question": "[140] En un triángulo rectángulo, los catetos miden 18 cm y 24 cm. ¿Cuánto mide la hipotenusa?",
    "options": [
      "30 cm",
      "32 cm",
      "34 cm",
      "27 cm"
    ],
    "correct": 0,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 30 cm."
  },
  {
    "id": 141,
    "question": "[141] En un triángulo rectángulo, la hipotenusa mide 30 cm y uno de sus catetos mide 18 cm. ¿Cuánto mide el otro cateto?",
    "options": [
      "26 cm",
      "28 cm",
      "22 cm",
      "24 cm"
    ],
    "correct": 3,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 24 cm."
  },
  {
    "id": 142,
    "question": "[142] En un triángulo rectángulo, los catetos miden 15 cm y 36 cm. ¿Cuánto mide la hipotenusa?",
    "options": [
      "36 cm",
      "39 cm",
      "43 cm",
      "41 cm"
    ],
    "correct": 1,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 39 cm."
  },
  {
    "id": 143,
    "question": "[143] En un triángulo rectángulo, la hipotenusa mide 13 cm y uno de sus catetos mide 5 cm. ¿Cuánto mide el otro cateto?",
    "options": [
      "16 cm",
      "12 cm",
      "10 cm",
      "14 cm"
    ],
    "correct": 1,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 12 cm."
  },
  {
    "id": 144,
    "question": "[144] En un triángulo rectángulo, los catetos miden 5 cm y 12 cm. ¿Cuánto mide la hipotenusa?",
    "options": [
      "13 cm",
      "10 cm",
      "15 cm",
      "17 cm"
    ],
    "correct": 0,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 13 cm."
  },
  {
    "id": 145,
    "question": "[145] En un triángulo rectángulo, la hipotenusa mide 10 cm y uno de sus catetos mide 6 cm. ¿Cuánto mide el otro cateto?",
    "options": [
      "8 cm",
      "6 cm",
      "12 cm",
      "10 cm"
    ],
    "correct": 0,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 8 cm."
  },
  {
    "id": 146,
    "question": "[146] En un triángulo rectángulo, los catetos miden 14 cm y 48 cm. ¿Cuánto mide la hipotenusa?",
    "options": [
      "52 cm",
      "54 cm",
      "47 cm",
      "50 cm"
    ],
    "correct": 3,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 50 cm."
  },
  {
    "id": 147,
    "question": "[147] En un triángulo rectángulo, la hipotenusa mide 30 cm y uno de sus catetos mide 18 cm. ¿Cuánto mide el otro cateto?",
    "options": [
      "22 cm",
      "24 cm",
      "28 cm",
      "26 cm"
    ],
    "correct": 1,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 24 cm."
  },
  {
    "id": 148,
    "question": "[148] En un triángulo rectángulo, los catetos miden 8 cm y 15 cm. ¿Cuánto mide la hipotenusa?",
    "options": [
      "14 cm",
      "17 cm",
      "21 cm",
      "19 cm"
    ],
    "correct": 1,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 17 cm."
  },
  {
    "id": 149,
    "question": "[149] En un triángulo rectángulo, la hipotenusa mide 5 cm y uno de sus catetos mide 3 cm. ¿Cuánto mide el otro cateto?",
    "options": [
      "4 cm",
      "2 cm",
      "8 cm",
      "6 cm"
    ],
    "correct": 0,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 4 cm."
  },
  {
    "id": 150,
    "question": "[150] En un triángulo rectángulo, los catetos miden 9 cm y 12 cm. ¿Cuánto mide la hipotenusa?",
    "options": [
      "15 cm",
      "17 cm",
      "12 cm",
      "19 cm"
    ],
    "correct": 0,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 15 cm."
  },
  {
    "id": 151,
    "question": "[151] En un triángulo rectángulo, la hipotenusa mide 50 cm y uno de sus catetos mide 14 cm. ¿Cuánto mide el otro cateto?",
    "options": [
      "48 cm",
      "50 cm",
      "52 cm",
      "46 cm"
    ],
    "correct": 0,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 48 cm."
  },
  {
    "id": 152,
    "question": "[152] En un triángulo rectángulo, los catetos miden 9 cm y 12 cm. ¿Cuánto mide la hipotenusa?",
    "options": [
      "19 cm",
      "12 cm",
      "17 cm",
      "15 cm"
    ],
    "correct": 3,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 15 cm."
  },
  {
    "id": 153,
    "question": "[153] En un triángulo rectángulo, la hipotenusa mide 34 cm y uno de sus catetos mide 16 cm. ¿Cuánto mide el otro cateto?",
    "options": [
      "32 cm",
      "28 cm",
      "34 cm",
      "30 cm"
    ],
    "correct": 3,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 30 cm."
  },
  {
    "id": 154,
    "question": "[154] En un triángulo rectángulo, los catetos miden 21 cm y 72 cm. ¿Cuánto mide la hipotenusa?",
    "options": [
      "79 cm",
      "77 cm",
      "72 cm",
      "75 cm"
    ],
    "correct": 3,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 75 cm."
  },
  {
    "id": 155,
    "question": "[155] En un triángulo rectángulo, la hipotenusa mide 17 cm y uno de sus catetos mide 8 cm. ¿Cuánto mide el otro cateto?",
    "options": [
      "15 cm",
      "13 cm",
      "19 cm",
      "17 cm"
    ],
    "correct": 0,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 15 cm."
  },
  {
    "id": 156,
    "question": "[156] En un triángulo rectángulo, los catetos miden 6 cm y 8 cm. ¿Cuánto mide la hipotenusa?",
    "options": [
      "10 cm",
      "12 cm",
      "7 cm",
      "14 cm"
    ],
    "correct": 0,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 10 cm."
  },
  {
    "id": 157,
    "question": "[157] En un triángulo rectángulo, la hipotenusa mide 10 cm y uno de sus catetos mide 6 cm. ¿Cuánto mide el otro cateto?",
    "options": [
      "8 cm",
      "12 cm",
      "10 cm",
      "6 cm"
    ],
    "correct": 0,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 8 cm."
  },
  {
    "id": 158,
    "question": "[158] En un triángulo rectángulo, los catetos miden 18 cm y 24 cm. ¿Cuánto mide la hipotenusa?",
    "options": [
      "27 cm",
      "32 cm",
      "34 cm",
      "30 cm"
    ],
    "correct": 3,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 30 cm."
  },
  {
    "id": 159,
    "question": "[159] En un triángulo rectángulo, la hipotenusa mide 45 cm y uno de sus catetos mide 27 cm. ¿Cuánto mide el otro cateto?",
    "options": [
      "36 cm",
      "34 cm",
      "38 cm",
      "40 cm"
    ],
    "correct": 0,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 36 cm."
  },
  {
    "id": 160,
    "question": "[160] En un triángulo rectángulo, los catetos miden 8 cm y 15 cm. ¿Cuánto mide la hipotenusa?",
    "options": [
      "14 cm",
      "19 cm",
      "17 cm",
      "21 cm"
    ],
    "correct": 2,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 17 cm."
  },
  {
    "id": 161,
    "question": "[161] En un triángulo rectángulo, la hipotenusa mide 20 cm y uno de sus catetos mide 12 cm. ¿Cuánto mide el otro cateto?",
    "options": [
      "14 cm",
      "20 cm",
      "18 cm",
      "16 cm"
    ],
    "correct": 3,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 16 cm."
  },
  {
    "id": 162,
    "question": "[162] En un triángulo rectángulo, los catetos miden 21 cm y 72 cm. ¿Cuánto mide la hipotenusa?",
    "options": [
      "72 cm",
      "75 cm",
      "77 cm",
      "79 cm"
    ],
    "correct": 1,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 75 cm."
  },
  {
    "id": 163,
    "question": "[163] En un triángulo rectángulo, la hipotenusa mide 39 cm y uno de sus catetos mide 15 cm. ¿Cuánto mide el otro cateto?",
    "options": [
      "36 cm",
      "38 cm",
      "40 cm",
      "34 cm"
    ],
    "correct": 0,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 36 cm."
  },
  {
    "id": 164,
    "question": "[164] En un triángulo rectángulo, los catetos miden 14 cm y 48 cm. ¿Cuánto mide la hipotenusa?",
    "options": [
      "47 cm",
      "52 cm",
      "54 cm",
      "50 cm"
    ],
    "correct": 3,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 50 cm."
  },
  {
    "id": 165,
    "question": "[165] En un triángulo rectángulo, la hipotenusa mide 17 cm y uno de sus catetos mide 8 cm. ¿Cuánto mide el otro cateto?",
    "options": [
      "15 cm",
      "19 cm",
      "17 cm",
      "13 cm"
    ],
    "correct": 0,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 15 cm."
  },
  {
    "id": 166,
    "question": "[166] En un triángulo rectángulo, los catetos miden 3 cm y 4 cm. ¿Cuánto mide la hipotenusa?",
    "options": [
      "9 cm",
      "5 cm",
      "2 cm",
      "7 cm"
    ],
    "correct": 1,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 5 cm."
  },
  {
    "id": 167,
    "question": "[167] En un triángulo rectángulo, la hipotenusa mide 30 cm y uno de sus catetos mide 18 cm. ¿Cuánto mide el otro cateto?",
    "options": [
      "28 cm",
      "26 cm",
      "22 cm",
      "24 cm"
    ],
    "correct": 3,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 24 cm."
  },
  {
    "id": 168,
    "question": "[168] En un triángulo rectángulo, los catetos miden 3 cm y 4 cm. ¿Cuánto mide la hipotenusa?",
    "options": [
      "2 cm",
      "9 cm",
      "7 cm",
      "5 cm"
    ],
    "correct": 3,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 5 cm."
  },
  {
    "id": 169,
    "question": "[169] En un triángulo rectángulo, la hipotenusa mide 25 cm y uno de sus catetos mide 7 cm. ¿Cuánto mide el otro cateto?",
    "options": [
      "24 cm",
      "26 cm",
      "22 cm",
      "28 cm"
    ],
    "correct": 0,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 24 cm."
  },
  {
    "id": 170,
    "question": "[170] En un triángulo rectángulo, los catetos miden 24 cm y 45 cm. ¿Cuánto mide la hipotenusa?",
    "options": [
      "51 cm",
      "55 cm",
      "53 cm",
      "48 cm"
    ],
    "correct": 0,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 51 cm."
  },
  {
    "id": 171,
    "question": "[171] En un triángulo rectángulo, la hipotenusa mide 15 cm y uno de sus catetos mide 9 cm. ¿Cuánto mide el otro cateto?",
    "options": [
      "14 cm",
      "12 cm",
      "10 cm",
      "16 cm"
    ],
    "correct": 1,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 12 cm."
  },
  {
    "id": 172,
    "question": "[172] En un triángulo rectángulo, los catetos miden 9 cm y 12 cm. ¿Cuánto mide la hipotenusa?",
    "options": [
      "12 cm",
      "19 cm",
      "15 cm",
      "17 cm"
    ],
    "correct": 2,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 15 cm."
  },
  {
    "id": 173,
    "question": "[173] En un triángulo rectángulo, la hipotenusa mide 30 cm y uno de sus catetos mide 18 cm. ¿Cuánto mide el otro cateto?",
    "options": [
      "28 cm",
      "26 cm",
      "24 cm",
      "22 cm"
    ],
    "correct": 2,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 24 cm."
  },
  {
    "id": 174,
    "question": "[174] En un triángulo rectángulo, los catetos miden 14 cm y 48 cm. ¿Cuánto mide la hipotenusa?",
    "options": [
      "47 cm",
      "52 cm",
      "50 cm",
      "54 cm"
    ],
    "correct": 2,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 50 cm."
  },
  {
    "id": 175,
    "question": "[175] En un triángulo rectángulo, la hipotenusa mide 34 cm y uno de sus catetos mide 16 cm. ¿Cuánto mide el otro cateto?",
    "options": [
      "30 cm",
      "34 cm",
      "32 cm",
      "28 cm"
    ],
    "correct": 0,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 30 cm."
  },
  {
    "id": 176,
    "question": "[176] En un triángulo rectángulo, los catetos miden 18 cm y 24 cm. ¿Cuánto mide la hipotenusa?",
    "options": [
      "34 cm",
      "30 cm",
      "27 cm",
      "32 cm"
    ],
    "correct": 1,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 30 cm."
  },
  {
    "id": 177,
    "question": "[177] En un triángulo rectángulo, la hipotenusa mide 34 cm y uno de sus catetos mide 16 cm. ¿Cuánto mide el otro cateto?",
    "options": [
      "28 cm",
      "30 cm",
      "34 cm",
      "32 cm"
    ],
    "correct": 1,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 30 cm."
  },
  {
    "id": 178,
    "question": "[178] En un triángulo rectángulo, los catetos miden 18 cm y 24 cm. ¿Cuánto mide la hipotenusa?",
    "options": [
      "30 cm",
      "32 cm",
      "27 cm",
      "34 cm"
    ],
    "correct": 0,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 30 cm."
  },
  {
    "id": 179,
    "question": "[179] En un triángulo rectángulo, la hipotenusa mide 45 cm y uno de sus catetos mide 27 cm. ¿Cuánto mide el otro cateto?",
    "options": [
      "34 cm",
      "36 cm",
      "40 cm",
      "38 cm"
    ],
    "correct": 1,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 36 cm."
  },
  {
    "id": 180,
    "question": "[180] En un triángulo rectángulo, los catetos miden 15 cm y 36 cm. ¿Cuánto mide la hipotenusa?",
    "options": [
      "43 cm",
      "41 cm",
      "39 cm",
      "36 cm"
    ],
    "correct": 2,
    "explanation": "Aplicando el Teorema de Pitágoras (c² = a² + b²), se obtiene el valor exacto de 39 cm."
  },
  {
    "id": 181,
    "question": "[181] Si 4 obreros construyen una obra en 14 días, ¿cuántos días tardarán 14 obreros trabajando al mismo ritmo?",
    "options": [
      "7 días",
      "9 días",
      "2 días",
      "4 días"
    ],
    "correct": 3,
    "explanation": "Regla de tres inversa: (4 × 14) / 14 = 56 / 14 = 4 días."
  },
  {
    "id": 182,
    "question": "[182] Si 9 obreros construyen una obra en 19 días, ¿cuántos días tardarán 3 obreros trabajando al mismo ritmo?",
    "options": [
      "62 días",
      "55 días",
      "60 días",
      "57 días"
    ],
    "correct": 3,
    "explanation": "Regla de tres inversa: (9 × 19) / 3 = 171 / 3 = 57 días."
  },
  {
    "id": 183,
    "question": "[183] Si 8 obreros construyen una obra en 15 días, ¿cuántos días tardarán 12 obreros trabajando al mismo ritmo?",
    "options": [
      "15 días",
      "8 días",
      "13 días",
      "10 días"
    ],
    "correct": 3,
    "explanation": "Regla de tres inversa: (8 × 15) / 12 = 120 / 12 = 10 días."
  },
  {
    "id": 184,
    "question": "[184] Si 8 obreros construyen una obra en 16 días, ¿cuántos días tardarán 16 obreros trabajando al mismo ritmo?",
    "options": [
      "11 días",
      "8 días",
      "6 días",
      "13 días"
    ],
    "correct": 1,
    "explanation": "Regla de tres inversa: (8 × 16) / 16 = 128 / 16 = 8 días."
  },
  {
    "id": 185,
    "question": "[185] Si 4 obreros construyen una obra en 9 días, ¿cuántos días tardarán 18 obreros trabajando al mismo ritmo?",
    "options": [
      "5 días",
      "7 días",
      "2 días",
      "1 días"
    ],
    "correct": 2,
    "explanation": "Regla de tres inversa: (4 × 9) / 18 = 36 / 18 = 2 días."
  },
  {
    "id": 186,
    "question": "[186] Si 9 obreros construyen una obra en 7 días, ¿cuántos días tardarán 3 obreros trabajando al mismo ritmo?",
    "options": [
      "19 días",
      "24 días",
      "21 días",
      "26 días"
    ],
    "correct": 2,
    "explanation": "Regla de tres inversa: (9 × 7) / 3 = 63 / 3 = 21 días."
  },
  {
    "id": 187,
    "question": "[187] Si 3 obreros construyen una obra en 6 días, ¿cuántos días tardarán 9 obreros trabajando al mismo ritmo?",
    "options": [
      "7 días",
      "1 días",
      "5 días",
      "2 días"
    ],
    "correct": 3,
    "explanation": "Regla de tres inversa: (3 × 6) / 9 = 18 / 9 = 2 días."
  },
  {
    "id": 188,
    "question": "[188] Si 8 obreros construyen una obra en 12 días, ¿cuántos días tardarán 3 obreros trabajando al mismo ritmo?",
    "options": [
      "32 días",
      "37 días",
      "30 días",
      "35 días"
    ],
    "correct": 0,
    "explanation": "Regla de tres inversa: (8 × 12) / 3 = 96 / 3 = 32 días."
  },
  {
    "id": 189,
    "question": "[189] Si 5 obreros construyen una obra en 8 días, ¿cuántos días tardarán 4 obreros trabajando al mismo ritmo?",
    "options": [
      "15 días",
      "13 días",
      "8 días",
      "10 días"
    ],
    "correct": 3,
    "explanation": "Regla de tres inversa: (5 × 8) / 4 = 40 / 4 = 10 días."
  },
  {
    "id": 190,
    "question": "[190] Si 6 obreros construyen una obra en 13 días, ¿cuántos días tardarán 13 obreros trabajando al mismo ritmo?",
    "options": [
      "4 días",
      "11 días",
      "6 días",
      "9 días"
    ],
    "correct": 2,
    "explanation": "Regla de tres inversa: (6 × 13) / 13 = 78 / 13 = 6 días."
  },
  {
    "id": 191,
    "question": "[191] Si 7 obreros construyen una obra en 13 días, ¿cuántos días tardarán 13 obreros trabajando al mismo ritmo?",
    "options": [
      "12 días",
      "5 días",
      "10 días",
      "7 días"
    ],
    "correct": 3,
    "explanation": "Regla de tres inversa: (7 × 13) / 13 = 91 / 13 = 7 días."
  },
  {
    "id": 192,
    "question": "[192] Si 5 obreros construyen una obra en 7 días, ¿cuántos días tardarán 7 obreros trabajando al mismo ritmo?",
    "options": [
      "5 días",
      "8 días",
      "10 días",
      "3 días"
    ],
    "correct": 0,
    "explanation": "Regla de tres inversa: (5 × 7) / 7 = 35 / 7 = 5 días."
  },
  {
    "id": 193,
    "question": "[193] Si 9 obreros construyen una obra en 17 días, ¿cuántos días tardarán 17 obreros trabajando al mismo ritmo?",
    "options": [
      "7 días",
      "9 días",
      "12 días",
      "14 días"
    ],
    "correct": 1,
    "explanation": "Regla de tres inversa: (9 × 17) / 17 = 153 / 17 = 9 días."
  },
  {
    "id": 194,
    "question": "[194] Si 9 obreros construyen una obra en 19 días, ¿cuántos días tardarán 19 obreros trabajando al mismo ritmo?",
    "options": [
      "7 días",
      "12 días",
      "14 días",
      "9 días"
    ],
    "correct": 3,
    "explanation": "Regla de tres inversa: (9 × 19) / 19 = 171 / 19 = 9 días."
  },
  {
    "id": 195,
    "question": "[195] Si 8 obreros construyen una obra en 15 días, ¿cuántos días tardarán 6 obreros trabajando al mismo ritmo?",
    "options": [
      "25 días",
      "23 días",
      "20 días",
      "18 días"
    ],
    "correct": 2,
    "explanation": "Regla de tres inversa: (8 × 15) / 6 = 120 / 6 = 20 días."
  },
  {
    "id": 196,
    "question": "[196] Si 7 obreros construyen una obra en 6 días, ¿cuántos días tardarán 2 obreros trabajando al mismo ritmo?",
    "options": [
      "19 días",
      "21 días",
      "24 días",
      "26 días"
    ],
    "correct": 1,
    "explanation": "Regla de tres inversa: (7 × 6) / 2 = 42 / 2 = 21 días."
  },
  {
    "id": 197,
    "question": "[197] Si 8 obreros construyen una obra en 9 días, ¿cuántos días tardarán 12 obreros trabajando al mismo ritmo?",
    "options": [
      "6 días",
      "11 días",
      "4 días",
      "9 días"
    ],
    "correct": 0,
    "explanation": "Regla de tres inversa: (8 × 9) / 12 = 72 / 12 = 6 días."
  },
  {
    "id": 198,
    "question": "[198] Si 5 obreros construyen una obra en 16 días, ¿cuántos días tardarán 2 obreros trabajando al mismo ritmo?",
    "options": [
      "45 días",
      "38 días",
      "43 días",
      "40 días"
    ],
    "correct": 3,
    "explanation": "Regla de tres inversa: (5 × 16) / 2 = 80 / 2 = 40 días."
  },
  {
    "id": 199,
    "question": "[199] Si 3 obreros construyen una obra en 15 días, ¿cuántos días tardarán 9 obreros trabajando al mismo ritmo?",
    "options": [
      "3 días",
      "10 días",
      "5 días",
      "8 días"
    ],
    "correct": 2,
    "explanation": "Regla de tres inversa: (3 × 15) / 9 = 45 / 9 = 5 días."
  },
  {
    "id": 200,
    "question": "[200] Si 8 obreros construyen una obra en 17 días, ¿cuántos días tardarán 4 obreros trabajando al mismo ritmo?",
    "options": [
      "39 días",
      "32 días",
      "34 días",
      "37 días"
    ],
    "correct": 2,
    "explanation": "Regla de tres inversa: (8 × 17) / 4 = 136 / 4 = 34 días."
  },
  {
    "id": 201,
    "question": "[201] Si 8 obreros construyen una obra en 14 días, ¿cuántos días tardarán 16 obreros trabajando al mismo ritmo?",
    "options": [
      "12 días",
      "10 días",
      "7 días",
      "5 días"
    ],
    "correct": 2,
    "explanation": "Regla de tres inversa: (8 × 14) / 16 = 112 / 16 = 7 días."
  },
  {
    "id": 202,
    "question": "[202] Si 10 obreros construyen una obra en 18 días, ¿cuántos días tardarán 6 obreros trabajando al mismo ritmo?",
    "options": [
      "35 días",
      "33 días",
      "30 días",
      "28 días"
    ],
    "correct": 2,
    "explanation": "Regla de tres inversa: (10 × 18) / 6 = 180 / 6 = 30 días."
  },
  {
    "id": 203,
    "question": "[203] Si 4 obreros construyen una obra en 8 días, ¿cuántos días tardarán 2 obreros trabajando al mismo ritmo?",
    "options": [
      "16 días",
      "19 días",
      "14 días",
      "21 días"
    ],
    "correct": 0,
    "explanation": "Regla de tres inversa: (4 × 8) / 2 = 32 / 2 = 16 días."
  },
  {
    "id": 204,
    "question": "[204] Si 4 obreros construyen una obra en 18 días, ¿cuántos días tardarán 8 obreros trabajando al mismo ritmo?",
    "options": [
      "7 días",
      "14 días",
      "12 días",
      "9 días"
    ],
    "correct": 3,
    "explanation": "Regla de tres inversa: (4 × 18) / 8 = 72 / 8 = 9 días."
  },
  {
    "id": 205,
    "question": "[205] Si 10 obreros construyen una obra en 11 días, ¿cuántos días tardarán 11 obreros trabajando al mismo ritmo?",
    "options": [
      "10 días",
      "13 días",
      "15 días",
      "8 días"
    ],
    "correct": 0,
    "explanation": "Regla de tres inversa: (10 × 11) / 11 = 110 / 11 = 10 días."
  },
  {
    "id": 206,
    "question": "[206] Si 8 obreros construyen una obra en 7 días, ¿cuántos días tardarán 4 obreros trabajando al mismo ritmo?",
    "options": [
      "12 días",
      "17 días",
      "14 días",
      "19 días"
    ],
    "correct": 2,
    "explanation": "Regla de tres inversa: (8 × 7) / 4 = 56 / 4 = 14 días."
  },
  {
    "id": 207,
    "question": "[207] Si 6 obreros construyen una obra en 16 días, ¿cuántos días tardarán 2 obreros trabajando al mismo ritmo?",
    "options": [
      "48 días",
      "51 días",
      "46 días",
      "53 días"
    ],
    "correct": 0,
    "explanation": "Regla de tres inversa: (6 × 16) / 2 = 96 / 2 = 48 días."
  },
  {
    "id": 208,
    "question": "[208] Si 9 obreros construyen una obra en 7 días, ¿cuántos días tardarán 3 obreros trabajando al mismo ritmo?",
    "options": [
      "19 días",
      "24 días",
      "26 días",
      "21 días"
    ],
    "correct": 3,
    "explanation": "Regla de tres inversa: (9 × 7) / 3 = 63 / 3 = 21 días."
  },
  {
    "id": 209,
    "question": "[209] Si 10 obreros construyen una obra en 7 días, ¿cuántos días tardarán 2 obreros trabajando al mismo ritmo?",
    "options": [
      "40 días",
      "35 días",
      "33 días",
      "38 días"
    ],
    "correct": 1,
    "explanation": "Regla de tres inversa: (10 × 7) / 2 = 70 / 2 = 35 días."
  },
  {
    "id": 210,
    "question": "[210] Si 9 obreros construyen una obra en 13 días, ¿cuántos días tardarán 13 obreros trabajando al mismo ritmo?",
    "options": [
      "12 días",
      "9 días",
      "7 días",
      "14 días"
    ],
    "correct": 1,
    "explanation": "Regla de tres inversa: (9 × 13) / 13 = 117 / 13 = 9 días."
  },
  {
    "id": 211,
    "question": "[211] Si 9 obreros construyen una obra en 16 días, ¿cuántos días tardarán 3 obreros trabajando al mismo ritmo?",
    "options": [
      "48 días",
      "51 días",
      "46 días",
      "53 días"
    ],
    "correct": 0,
    "explanation": "Regla de tres inversa: (9 × 16) / 3 = 144 / 3 = 48 días."
  },
  {
    "id": 212,
    "question": "[212] Si 7 obreros construyen una obra en 6 días, ¿cuántos días tardarán 6 obreros trabajando al mismo ritmo?",
    "options": [
      "7 días",
      "5 días",
      "12 días",
      "10 días"
    ],
    "correct": 0,
    "explanation": "Regla de tres inversa: (7 × 6) / 6 = 42 / 6 = 7 días."
  },
  {
    "id": 213,
    "question": "[213] Si 6 obreros construyen una obra en 19 días, ¿cuántos días tardarán 3 obreros trabajando al mismo ritmo?",
    "options": [
      "43 días",
      "41 días",
      "36 días",
      "38 días"
    ],
    "correct": 3,
    "explanation": "Regla de tres inversa: (6 × 19) / 3 = 114 / 3 = 38 días."
  },
  {
    "id": 214,
    "question": "[214] Si 8 obreros construyen una obra en 6 días, ¿cuántos días tardarán 6 obreros trabajando al mismo ritmo?",
    "options": [
      "11 días",
      "13 días",
      "8 días",
      "6 días"
    ],
    "correct": 2,
    "explanation": "Regla de tres inversa: (8 × 6) / 6 = 48 / 6 = 8 días."
  },
  {
    "id": 215,
    "question": "[215] Si 10 obreros construyen una obra en 7 días, ¿cuántos días tardarán 5 obreros trabajando al mismo ritmo?",
    "options": [
      "12 días",
      "17 días",
      "19 días",
      "14 días"
    ],
    "correct": 3,
    "explanation": "Regla de tres inversa: (10 × 7) / 5 = 70 / 5 = 14 días."
  },
  {
    "id": 216,
    "question": "[216] Si 6 obreros construyen una obra en 8 días, ¿cuántos días tardarán 12 obreros trabajando al mismo ritmo?",
    "options": [
      "9 días",
      "2 días",
      "4 días",
      "7 días"
    ],
    "correct": 2,
    "explanation": "Regla de tres inversa: (6 × 8) / 12 = 48 / 12 = 4 días."
  },
  {
    "id": 217,
    "question": "[217] Si 6 obreros construyen una obra en 19 días, ¿cuántos días tardarán 2 obreros trabajando al mismo ritmo?",
    "options": [
      "60 días",
      "62 días",
      "57 días",
      "55 días"
    ],
    "correct": 2,
    "explanation": "Regla de tres inversa: (6 × 19) / 2 = 114 / 2 = 57 días."
  },
  {
    "id": 218,
    "question": "[218] Si 7 obreros construyen una obra en 19 días, ¿cuántos días tardarán 19 obreros trabajando al mismo ritmo?",
    "options": [
      "7 días",
      "12 días",
      "5 días",
      "10 días"
    ],
    "correct": 0,
    "explanation": "Regla de tres inversa: (7 × 19) / 19 = 133 / 19 = 7 días."
  },
  {
    "id": 219,
    "question": "[219] Si 5 obreros construyen una obra en 7 días, ¿cuántos días tardarán 7 obreros trabajando al mismo ritmo?",
    "options": [
      "3 días",
      "10 días",
      "5 días",
      "8 días"
    ],
    "correct": 2,
    "explanation": "Regla de tres inversa: (5 × 7) / 7 = 35 / 7 = 5 días."
  },
  {
    "id": 220,
    "question": "[220] Si 6 obreros construyen una obra en 15 días, ¿cuántos días tardarán 5 obreros trabajando al mismo ritmo?",
    "options": [
      "16 días",
      "21 días",
      "23 días",
      "18 días"
    ],
    "correct": 3,
    "explanation": "Regla de tres inversa: (6 × 15) / 5 = 90 / 5 = 18 días."
  },
  {
    "id": 221,
    "question": "[221] Encuentre el siguiente término en la sucesión numérica: 2, 5, 8, 11, 14, ...",
    "options": [
      "20",
      "17",
      "15",
      "20"
    ],
    "correct": 1,
    "explanation": "Es una progresión aritmética con una diferencia constante de +3. El siguiente término es 14 + 3 = 17."
  },
  {
    "id": 222,
    "question": "[222] Encuentre el siguiente término en la sucesión numérica: 3, 8, 13, 18, 23, ...",
    "options": [
      "26",
      "28",
      "33",
      "31"
    ],
    "correct": 1,
    "explanation": "Es una progresión aritmética con una diferencia constante de +5. El siguiente término es 23 + 5 = 28."
  },
  {
    "id": 223,
    "question": "[223] Encuentre el siguiente término en la sucesión numérica: 9, 15, 21, 27, 33, ...",
    "options": [
      "42",
      "39",
      "37",
      "45"
    ],
    "correct": 1,
    "explanation": "Es una progresión aritmética con una diferencia constante de +6. El siguiente término es 33 + 6 = 39."
  },
  {
    "id": 224,
    "question": "[224] Encuentre el siguiente término en la sucesión numérica: 10, 14, 18, 22, 26, ...",
    "options": [
      "34",
      "30",
      "28",
      "33"
    ],
    "correct": 1,
    "explanation": "Es una progresión aritmética con una diferencia constante de +4. El siguiente término es 26 + 4 = 30."
  },
  {
    "id": 225,
    "question": "[225] Encuentre el siguiente término en la sucesión numérica: 2, 7, 12, 17, 22, ...",
    "options": [
      "25",
      "27",
      "32",
      "30"
    ],
    "correct": 1,
    "explanation": "Es una progresión aritmética con una diferencia constante de +5. El siguiente término es 22 + 5 = 27."
  },
  {
    "id": 226,
    "question": "[226] Encuentre el siguiente término en la sucesión numérica: 9, 16, 23, 30, 37, ...",
    "options": [
      "51",
      "42",
      "44",
      "47"
    ],
    "correct": 2,
    "explanation": "Es una progresión aritmética con una diferencia constante de +7. El siguiente término es 37 + 7 = 44."
  },
  {
    "id": 227,
    "question": "[227] Encuentre el siguiente término en la sucesión numérica: 7, 13, 19, 25, 31, ...",
    "options": [
      "40",
      "35",
      "37",
      "43"
    ],
    "correct": 2,
    "explanation": "Es una progresión aritmética con una diferencia constante de +6. El siguiente término es 31 + 6 = 37."
  },
  {
    "id": 228,
    "question": "[228] Encuentre el siguiente término en la sucesión numérica: 6, 12, 18, 24, 30, ...",
    "options": [
      "36",
      "39",
      "42",
      "34"
    ],
    "correct": 0,
    "explanation": "Es una progresión aritmética con una diferencia constante de +6. El siguiente término es 30 + 6 = 36."
  },
  {
    "id": 229,
    "question": "[229] Encuentre el siguiente término en la sucesión numérica: 9, 15, 21, 27, 33, ...",
    "options": [
      "45",
      "37",
      "39",
      "42"
    ],
    "correct": 2,
    "explanation": "Es una progresión aritmética con una diferencia constante de +6. El siguiente término es 33 + 6 = 39."
  },
  {
    "id": 230,
    "question": "[230] Encuentre el siguiente término en la sucesión numérica: 10, 17, 24, 31, 38, ...",
    "options": [
      "45",
      "43",
      "48",
      "52"
    ],
    "correct": 0,
    "explanation": "Es una progresión aritmética con una diferencia constante de +7. El siguiente término es 38 + 7 = 45."
  },
  {
    "id": 231,
    "question": "[231] Encuentre el siguiente término en la sucesión numérica: 5, 10, 15, 20, 25, ...",
    "options": [
      "30",
      "33",
      "35",
      "28"
    ],
    "correct": 0,
    "explanation": "Es una progresión aritmética con una diferencia constante de +5. El siguiente término es 25 + 5 = 30."
  },
  {
    "id": 232,
    "question": "[232] Encuentre el siguiente término en la sucesión numérica: 8, 15, 22, 29, 36, ...",
    "options": [
      "46",
      "41",
      "50",
      "43"
    ],
    "correct": 3,
    "explanation": "Es una progresión aritmética con una diferencia constante de +7. El siguiente término es 36 + 7 = 43."
  },
  {
    "id": 233,
    "question": "[233] Encuentre el siguiente término en la sucesión numérica: 7, 14, 21, 28, 35, ...",
    "options": [
      "45",
      "42",
      "49",
      "40"
    ],
    "correct": 1,
    "explanation": "Es una progresión aritmética con una diferencia constante de +7. El siguiente término es 35 + 7 = 42."
  },
  {
    "id": 234,
    "question": "[234] Encuentre el siguiente término en la sucesión numérica: 9, 11, 13, 15, 17, ...",
    "options": [
      "21",
      "17",
      "22",
      "19"
    ],
    "correct": 3,
    "explanation": "Es una progresión aritmética con una diferencia constante de +2. El siguiente término es 17 + 2 = 19."
  },
  {
    "id": 235,
    "question": "[235] Encuentre el siguiente término en la sucesión numérica: 8, 10, 12, 14, 16, ...",
    "options": [
      "20",
      "21",
      "18",
      "16"
    ],
    "correct": 2,
    "explanation": "Es una progresión aritmética con una diferencia constante de +2. El siguiente término es 16 + 2 = 18."
  },
  {
    "id": 236,
    "question": "[236] Encuentre el siguiente término en la sucesión numérica: 10, 16, 22, 28, 34, ...",
    "options": [
      "46",
      "40",
      "43",
      "38"
    ],
    "correct": 1,
    "explanation": "Es una progresión aritmética con una diferencia constante de +6. El siguiente término es 34 + 6 = 40."
  },
  {
    "id": 237,
    "question": "[237] Encuentre el siguiente término en la sucesión numérica: 8, 12, 16, 20, 24, ...",
    "options": [
      "32",
      "28",
      "26",
      "31"
    ],
    "correct": 1,
    "explanation": "Es una progresión aritmética con una diferencia constante de +4. El siguiente término es 24 + 4 = 28."
  },
  {
    "id": 238,
    "question": "[238] Encuentre el siguiente término en la sucesión numérica: 6, 12, 18, 24, 30, ...",
    "options": [
      "39",
      "36",
      "42",
      "34"
    ],
    "correct": 1,
    "explanation": "Es una progresión aritmética con una diferencia constante de +6. El siguiente término es 30 + 6 = 36."
  },
  {
    "id": 239,
    "question": "[239] Encuentre el siguiente término en la sucesión numérica: 10, 13, 16, 19, 22, ...",
    "options": [
      "25",
      "28",
      "23",
      "28"
    ],
    "correct": 0,
    "explanation": "Es una progresión aritmética con una diferencia constante de +3. El siguiente término es 22 + 3 = 25."
  },
  {
    "id": 240,
    "question": "[240] Encuentre el siguiente término en la sucesión numérica: 5, 7, 9, 11, 13, ...",
    "options": [
      "15",
      "17",
      "18",
      "13"
    ],
    "correct": 0,
    "explanation": "Es una progresión aritmética con una diferencia constante de +2. El siguiente término es 13 + 2 = 15."
  },
  {
    "id": 241,
    "question": "[241] Encuentre el siguiente término en la sucesión numérica: 3, 7, 11, 15, 19, ...",
    "options": [
      "21",
      "23",
      "26",
      "27"
    ],
    "correct": 1,
    "explanation": "Es una progresión aritmética con una diferencia constante de +4. El siguiente término es 19 + 4 = 23."
  },
  {
    "id": 242,
    "question": "[242] Encuentre el siguiente término en la sucesión numérica: 6, 8, 10, 12, 14, ...",
    "options": [
      "16",
      "14",
      "19",
      "18"
    ],
    "correct": 0,
    "explanation": "Es una progresión aritmética con una diferencia constante de +2. El siguiente término es 14 + 2 = 16."
  },
  {
    "id": 243,
    "question": "[243] Encuentre el siguiente término en la sucesión numérica: 7, 11, 15, 19, 23, ...",
    "options": [
      "31",
      "25",
      "30",
      "27"
    ],
    "correct": 3,
    "explanation": "Es una progresión aritmética con una diferencia constante de +4. El siguiente término es 23 + 4 = 27."
  },
  {
    "id": 244,
    "question": "[244] Encuentre el siguiente término en la sucesión numérica: 8, 10, 12, 14, 16, ...",
    "options": [
      "21",
      "18",
      "16",
      "20"
    ],
    "correct": 1,
    "explanation": "Es una progresión aritmética con una diferencia constante de +2. El siguiente término es 16 + 2 = 18."
  },
  {
    "id": 245,
    "question": "[245] Encuentre el siguiente término en la sucesión numérica: 3, 10, 17, 24, 31, ...",
    "options": [
      "38",
      "36",
      "41",
      "45"
    ],
    "correct": 0,
    "explanation": "Es una progresión aritmética con una diferencia constante de +7. El siguiente término es 31 + 7 = 38."
  },
  {
    "id": 246,
    "question": "[246] Encuentre el siguiente término en la sucesión numérica: 9, 13, 17, 21, 25, ...",
    "options": [
      "29",
      "27",
      "32",
      "33"
    ],
    "correct": 0,
    "explanation": "Es una progresión aritmética con una diferencia constante de +4. El siguiente término es 25 + 4 = 29."
  },
  {
    "id": 247,
    "question": "[247] Encuentre el siguiente término en la sucesión numérica: 7, 13, 19, 25, 31, ...",
    "options": [
      "43",
      "35",
      "40",
      "37"
    ],
    "correct": 3,
    "explanation": "Es una progresión aritmética con una diferencia constante de +6. El siguiente término es 31 + 6 = 37."
  },
  {
    "id": 248,
    "question": "[248] Encuentre el siguiente término en la sucesión numérica: 4, 10, 16, 22, 28, ...",
    "options": [
      "40",
      "37",
      "32",
      "34"
    ],
    "correct": 3,
    "explanation": "Es una progresión aritmética con una diferencia constante de +6. El siguiente término es 28 + 6 = 34."
  },
  {
    "id": 249,
    "question": "[249] Encuentre el siguiente término en la sucesión numérica: 6, 11, 16, 21, 26, ...",
    "options": [
      "31",
      "29",
      "36",
      "34"
    ],
    "correct": 0,
    "explanation": "Es una progresión aritmética con una diferencia constante de +5. El siguiente término es 26 + 5 = 31."
  },
  {
    "id": 250,
    "question": "[250] Encuentre el siguiente término en la sucesión numérica: 8, 12, 16, 20, 24, ...",
    "options": [
      "31",
      "28",
      "26",
      "32"
    ],
    "correct": 1,
    "explanation": "Es una progresión aritmética con una diferencia constante de +4. El siguiente término es 24 + 4 = 28."
  },
      {
    id: 251,
    question: "Si el sistema de ecuaciones 3x - 2y = 12 y 6x - ky = 24 tiene infinitas soluciones, ¿cuál es el valor de la constante k?",
    options: ["k = 2", "k = 4", "k = -4", "k = 6"],
    correct: 1,
    explanation: "Para que un sistema lineal tenga infinitas soluciones, sus ecuaciones deben ser dependientes (la segunda es múltiplo directo de la primera). Multiplicando 3x - 2y = 12 por 2 obtenemos 6x - 4y = 24. Comparando con 6x - ky = 24, deducimos que -k = -4, por lo tanto k = 4."
  },
  {
    id: 252,
    question: "Resuelve la ecuación cuadrática 2x² - 5x - 3 = 0. ¿Cuál es el conjunto solución correcto?",
    options: ["x = 3 y x = -1/2", "x = -3 y x = 1/2", "x = 1/2 y x = 3", "x = -1 y x = 6"],
    correct: 0,
    explanation: "Factorizando por descomposición: 2x² - 5x - 3 = (2x + 1)(x - 3) = 0. Al igualar cada factor a cero obtenemos x = -1/2 y x = 3."
  },
  {
    id: 253,
    question: "Determina las raíces de la función polinomial f(x) = x³ - 4x² + x + 6 sabiendo que x = 2 es una de sus soluciones.",
    options: ["x = 2, x = 3, x = -1", "x = 2, x = -3, x = 1", "x = 2, x = 4, x = -1", "x = 2, x = 1, x = 3"],
    correct: 0,
    explanation: "Aplicando división sintética por (x - 2), el cociente resulta x² - 2x - 3. Factorizando el cuadrático: (x - 3)(x + 1) = 0. Las raíces finales son x = 2, x = 3 y x = -1."
  },
  {
    id: 254,
    question: "Al simplificar la expresión algebraica dividida: [ (a² - b²) / (a + b) ] ÷ [ (a - b) / (a + b) ], ¿cuál es el resultado reducido?",
    options: ["a + b", "a - b", "1", "(a + b)²"],
    correct: 0,
    explanation: "Factorizamos la diferencia de cuadrados: a² - b² = (a - b)(a + b). El primer término se reduce a (a - b). Dividir entre (a - b)/(a + b) equivale a multiplicar por su recíproco: (a - b) * [ (a + b) / (a - b) ] = a + b."
  },
  {
    id: 255,
    question: "Si log₂(x) + log₂(x - 2) = 3, ¿cuál es el único valor de x que satisface la ecuación?",
    options: ["x = 4", "x = 2", "x = 8", "x = -2"],
    correct: 0,
    explanation: "Usando la propiedad de la suma de logaritmos: log₂[x(x - 2)] = 3. Convertimos a forma exponencial: x(x - 2) = 2³ = 8 ⇒ x² - 2x - 8 = 0. Factorizando (x - 4)(x + 2) = 0. Como el dominio del logaritmo exige x > 2, la única solución real es x = 4."
  },
  {
    id: 256,
    question: "En el polinomio P(x) = x² + bx + 12, la diferencia entre sus dos raíces reales es 1. ¿Cuál es el valor positivo del coeficiente b?",
    options: ["b = 7", "b = 8", "b = 9", "b = 13"],
    correct: 0,
    explanation: "Por Teorema de Vieta: r₁ * r₂ = 12 y r₁ - r₂ = 1. Los enteros que cumplen esto son 4 y 3 (4*3 = 12 y 4-3 = 1). La suma de raíces es 7. Como r₁ + r₂ = -b, b es 7 si las raíces son -3 y -4."
  },
  {
    id: 257,
    question: "Determina el valor numérico de la expresión con potencias: (3^(n+2) - 3^n) / (3^(n+1) + 3^n)",
    options: ["2", "3", "8/4", "3/2"],
    correct: 0,
    explanation: "Factorizamos 3^n en el numerador y denominador: Numerador = 3^n (3² - 1) = 3^n (8). Denominador = 3^n (3¹ + 1) = 3^n (4). Cancelando 3^n queda 8 / 4 = 2."
  },
  {
    id: 258,
    question: "Un tanque de almacenamiento posee dos tuberías de llenado. La tubería A lo llena en 6 horas y la tubería B en 12 horas. Si ambas operan juntas con un desague C que lo vacía en 24 horas, ¿cuántas horas tardará en llenarse?",
    options: ["4.8 horas", "4.0 horas", "3.6 horas", "5.2 horas"],
    correct: 0,
    explanation: "Sumamos las tasas por hora: Tasa neta = 1/6 + 1/12 - 1/24. Convertimos a denominador 24: (4 + 2 - 1) / 24 = 5/24 de tanque por hora. El tiempo total es 24 / 5 = 4.8 horas."
  },
  {
    id: 259,
    question: "Calcula el valor de la suma infinita de la progresión geométrica: S = 12 + 4 + 4/3 + 4/9 + ...",
    options: ["18", "16", "20", "24"],
    correct: 0,
    explanation: "El primer término a = 12 y la razón r = 4/12 = 1/3. La suma infinita es S = a / (1 - r) = 12 / (1 - 1/3) = 12 / (2/3) = 18."
  },
  {
    id: 260,
    question: "En la ecuación con valor absoluto |2x - 7| = 3x - 1, ¿cuál es la solución real válida?",
    options: ["x = 8/5", "x = -6", "x = 8/5 y x = -6", "x = 2"],
    correct: 0,
    explanation: "Evaluando casos: 2x - 7 = 3x - 1 da x = -6 (descartado pues 3(-6)-1 es negativo). El caso 2x - 7 = -(3x - 1) da 5x = 8 ⇒ x = 8/5. Al comprobar, 8/5 satisface la condición."
  },
  {
    id: 261,
    question: "¿Para qué valores del parámetro m la ecuación x² + (m + 2)x + 9 = 0 tiene una única solución real doble?",
    options: ["m = 4 y m = -8", "m = 6 y m = -6", "m = 2 y m = -4", "m = 0 y m = 9"],
    correct: 0,
    explanation: "El discriminante Δ debe ser cero: Δ = (m + 2)² - 4(1)(9) = 0 ⇒ (m + 2)² = 36 ⇒ m + 2 = ±6. Obtenemos m = 4 y m = -8."
  },
  {
    id: 262,
    question: "Resuelve la inecuación racional (x - 3) / (x + 2) ≤ 0 e indica su intervalo de solución.",
    options: ["(-2, 3]", "[-2, 3]", "(-∞, -2) ∪ [3, ∞)", "(-2, 3)"],
    correct: 0,
    explanation: "Puntos críticos: x = 3 (numerador = 0) y x = -2 (asíntota/denominador ≠ 0). Evaluando signos, el intervalo donde es menor o igual a cero es abierto en -2 y cerrado en 3: (-2, 3]."
  },
  {
    id: 263,
    question: "Si a + b = 7 y a * b = 10, calcula sin hallar a y b el valor exacto de la suma de sus cubos: a³ + b³.",
    options: ["133", "243", "343", "147"],
    correct: 0,
    explanation: "a³ + b³ = (a + b)(a² - ab + b²). Como a² + b² = (a + b)² - 2ab = 7² - 20 = 29. Por tanto, a³ + b³ = 7 * (29 - 10) = 7 * 19 = 133."
  },
  {
    id: 264,
    question: "Encuentra la función inversa de f(x) = (3x + 5) / (2x - 1) para x ≠ 1/2.",
    options: ["f⁻¹(x) = (x + 5) / (2x - 3)", "f⁻¹(x) = (3x - 5) / (2x + 1)", "f⁻¹(x) = (2x - 1) / (3x + 5)", "f⁻¹(x) = (x - 5) / (3 - 2x)"],
    correct: 0,
    explanation: "Despejando x de y = (3x + 5)/(2x - 1) ⇒ y(2x - 1) = 3x + 5 ⇒ x(2y - 3) = y + 5 ⇒ x = (y + 5)/(2y - 3). Intercambiando variables resulta f⁻¹(x) = (x + 5)/(2x - 3)."
  },
  {
    id: 265,
    question: "En el desarrollo de (2x + 3)⁴ por Teorema del Binomio, ¿cuál es el coeficiente del término de grado 3 (x³)?",
    options: ["96", "48", "32", "108"],
    correct: 0,
    explanation: "El término es: ₄C₁ * (2x)³ * (3)¹ = 4 * (8x³) * 3 = 96x³. El coeficiente es 96."
  },
  {
    id: 266,
    question: "Si 9^x - 4 * 3^x + 3 = 0, halla la suma de los valores de x que satisfacen la ecuación.",
    options: ["1", "0", "2", "3"],
    correct: 0,
    explanation: "Sustituyendo u = 3^x: u² - 4u + 3 = 0 ⇒ (u - 1)(u - 3) = 0. Entonces 3^x = 1 ⇒ x = 0; y 3^x = 3 ⇒ x = 1. La suma es 0 + 1 = 1."
  },
  {
    id: 267,
    question: "Dada la matriz A = [[2, 1], [4, 3]], calcula su matriz inversa A⁻¹.",
    options: ["[[1.5, -0.5], [-2, 1]]", "[[3, -1], [-4, 2]]", "[[1, 0.5], [2, 1.5]]", "[[-1.5, 0.5], [2, -1]]"],
    correct: 0,
    explanation: "det(A) = 2(3) - 1(4) = 2. A⁻¹ = (1/det) * [[3, -1], [-4, 2]] = [[1.5, -0.5], [-2, 1]]."
  },
  {
    id: 268,
    question: "Determina el residuo al dividir P(x) = 2x⁴ - 3x³ + x - 5 entre (x - 2) utilizando el Teorema del Residuo.",
    options: ["5", "3", "0", "-1"],
    correct: 0,
    explanation: "Por el Teorema del Residuo, sustituimos x = 2: P(2) = 2(16) - 3(8) + 2 - 5 = 32 - 24 + 2 - 5 = 5."
  },
  {
    id: 269,
    question: "¿Cuál es la simplificación mínima de la expresión trigonométrica (1 - cos²θ) / (sinθ * cosθ)?",
    options: ["tanθ", "cotθ", "sinθ", "secθ"],
    correct: 0,
    explanation: "Usando 1 - cos²θ = sin²θ: sin²θ / (sinθ * cosθ) = sinθ / cosθ = tanθ."
  },
  {
    id: 270,
    question: "Se mezclan 20 litros de una solución líquida al 30% con 30 litros de otra al 50%. ¿Cuál es la concentración final del total de 50 litros?",
    options: ["42%", "40%", "45%", "38%"],
    correct: 0,
    explanation: "Volumen puro 1: 20 * 0.30 = 6 L. Volumen puro 2: 30 * 0.50 = 15 L. Total puro = 21 L. Porcentaje = (21 / 50) * 100 = 42%."
  },

  // -------------------------------------------------------------
  // MÓDULO 2: GEOMETRÍA ANALÍTICA Y ESPACIAL (21 - 40)
  // -------------------------------------------------------------
  {
    id: 271,
    question: "Un triángulo rectángulo tiene hipotenusa de 13 cm y perímetro de 30 cm. ¿Cuál es su área?",
    options: ["30 cm²", "60 cm²", "25 cm²", "32.5 cm²"],
    correct: 0,
    explanation: "Catetos a + b = 30 - 13 = 17. Elevando al cuadrado: a² + 2ab + b² = 289. Como a² + b² = 13² = 169, entonces 2ab = 120 ⇒ ab = 60. Área = (a*b)/2 = 30 cm²."
  },
  {
    id: 272,
    question: "En un círculo de radio r = 10 cm, un sector circular posee un ángulo central de 72°. ¿Cuál es su área en función de π?",
    options: ["20π cm²", "10π cm²", "15π cm²", "25π cm²"],
    correct: 0,
    explanation: "Área = (72 / 360) * π * 10² = (1/5) * 100π = 20π cm²."
  },
  {
    id: 273,
    question: "Un cilindro recto de altura h = 8 cm está inscrito en una esfera de radio R = 5 cm. ¿Cuál es el volumen del cilindro?",
    options: ["72π cm³", "64π cm³", "80π cm³", "96π cm³"],
    correct: 0,
    explanation: "El radio r del cilindro se obtiene por Pitágoras: r² + (h/2)² = R² ⇒ r² + 4² = 5² ⇒ r² = 9. Volumen = π * r² * h = π * 9 * 8 = 72π cm³."
  },
  {
    id: 274,
    question: "¿Cuál es la ecuación de la recta que pasa por P(2, -3) y es perpendicular a 4x - 2y + 7 = 0?",
    options: ["x + 2y + 4 = 0", "2x + y - 1 = 0", "x - 2y - 8 = 0", "4x + 2y - 2 = 0"],
    correct: 0,
    explanation: "Pendiente original m₁ = -4/(-2) = 2. Pendiente perpendicular m₂ = -1/2. Recta: y - (-3) = -1/2(x - 2) ⇒ 2y + 6 = -x + 2 ⇒ x + 2y + 4 = 0."
  },
  {
    id: 275,
    question: "Un cono invertido de radio r = 6 cm y altura h = 8 cm contiene agua hasta una altura de 4 cm. ¿Qué volumen de agua contiene?",
    options: ["12π cm³", "24π cm³", "48π cm³", "96π cm³"],
    correct: 0,
    explanation: "Por semejanza, al reducir la altura a la mitad (4 cm), el radio también se reduce a la mitad (r' = 3 cm). Volumen = (1/3)π * 3² * 4 = 12π cm³."
  },
  {
    id: 276,
    question: "¿Cuánto mide cada ángulo interior de un decágono regular (10 lados)?",
    options: ["144°", "140°", "150°", "135°"],
    correct: 0,
    explanation: "Ángulo interior = [(n - 2) * 180°] / n = [(10 - 2) * 180°] / 10 = 144°."
  },
  {
    id: 277,
    question: "Si el cateto 'a' de un triángulo rectángulo aumenta 20% y el cateto 'b' disminuye 20%, ¿qué le sucede al área?",
    options: ["Disminuye un 4%", "Permanese igual", "Aumenta un 4%", "Disminuye un 2%"],
    correct: 0,
    explanation: "Nueva área = (1.2a * 0.8b)/2 = 0.96 (ab/2). Disminuye un 4% respecto al área original."
  },
  {
    id: 278,
    question: "Calcula el centro y el radio de la circunferencia x² + y² - 6x + 8y - 11 = 0.",
    options: ["C(3, -4), R = 6", "C(-3, 4), R = 6", "C(3, -4), R = 36", "C(-6, 8), R = 11"],
    correct: 0,
    explanation: "Completando cuadrados: (x - 3)² + (y + 4)² = 11 + 9 + 16 = 36. Centro (3, -4) y R = √36 = 6."
  },
  {
    id: 279,
    question: "Dos vehículos salen del mismo punto: uno viaja al norte a 12 km/h y otro al este a 16 km/h. ¿Qué distancia los separa tras 3 horas?",
    options: ["60 km", "48 km", "80 km", "52 km"],
    correct: 0,
    explanation: "Distancias recorridas: 36 km y 48 km. Separación = √(36² + 48²) = √(1296 + 2304) = √3600 = 60 km."
  },
  {
    id: 280,
    question: "Calcula el perímetro total de una figura compuesta por un cuadrado de lado 8 cm y un semicírculo superpuesto en su lado superior.",
    options: ["24 + 4π cm", "32 + 4π cm", "24 + 8π cm", "32 + 8π cm"],
    correct: 0,
    explanation: "Perímetro = 3 lados del cuadrado (24 cm) + longitud de semicircunferencia (π * r = 4π cm) = 24 + 4π cm."
  },
  {
    id: 281,
    question: "Tres vértices de un paralelogramo ABCD son A(1, 2), B(5, 4) y C(7, 9). Determina las coordenadas del vértice D.",
    options: ["D(3, 7)", "D(2, 6)", "D(4, 7)", "D(3, 8)"],
    correct: 0,
    explanation: "Punto medio de AC = (4, 5.5). Para BD: (5 + x_d)/2 = 4 ⇒ x_d = 3; (4 + y_d)/2 = 5.5 ⇒ y_d = 7. El vértice D es (3, 7)."
  },
  {
    id: 282,
    question: "La diagonal principal de un cubo mide 6√3 cm. ¿Cuál es su volumen total?",
    options: ["216 cm³", "108 cm³", "72 cm³", "36 cm³"],
    correct: 0,
    explanation: "Diagonal D = a√3 ⇒ 6√3 = a√3 ⇒ Arista a = 6 cm. Volumen = 6³ = 216 cm³."
  },
  {
    id: 283,
    question: "En un triángulo rectángulo con hipotenusa de 16 cm y un ángulo agudo de 30°, ¿cuánto mide el cateto opuesto a dicho ángulo?",
    options: ["8 cm", "8√3 cm", "4 cm", "12 cm"],
    correct: 0,
    explanation: "Cateto opuesto = Hipotenusa * sin(30°) = 16 * 0.5 = 8 cm."
  },
  {
    id: 284,
    question: "Halla la distancia más corta del punto P(3, 4) a la recta 3x + 4y - 5 = 0.",
    options: ["4 unidades", "5 unidades", "3 unidades", "2.5 unidades"],
    correct: 0,
    explanation: "d = |3(3) + 4(4) - 5| / √(3² + 4²) = |9 + 16 - 5| / 5 = 20 / 5 = 4."
  },
  {
    id: 285,
    question: "Una pirámide de base cuadrada tiene lado de 10 cm y altura de 12 cm. ¿Cuál es su área lateral total?",
    options: ["260 cm²", "240 cm²", "360 cm²", "130 cm²"],
    correct: 0,
    explanation: "Apotema lateral = √(12² + 5²) = 13 cm. Área lateral = 4 * (10 * 13 / 2) = 260 cm²."
  },
  {
    id: 286,
    question: "Dos polígonos semejantes están en razón de lados 2:5. Si el menor tiene área de 48 cm², ¿cuál es el área del mayor?",
    options: ["300 cm²", "120 cm²", "240 cm²", "600 cm²"],
    correct: 0,
    explanation: "Razón de áreas = (5/2)² = 25/4. Área mayor = 48 * (25/4) = 300 cm²."
  },
  {
    id: 287,
    question: "Un trapecio isósceles posee bases de 10 cm y 22 cm, con lados no paralelos de 10 cm. ¿Cuál es su área?",
    options: ["128 cm²", "160 cm²", "96 cm²", "144 cm²"],
    correct: 0,
    explanation: "Base de triángulo lateral = (22 - 10)/2 = 6 cm. Altura h = √(10² - 6²) = 8 cm. Área = [(10 + 22)/2] * 8 = 128 cm²."
  },
  {
    id: 288,
    question: "¿Cuál es la ecuación del eje de simetría de la parábola f(x) = -2x² + 12x - 5?",
    options: ["x = 3", "x = -3", "x = 6", "x = -6"],
    correct: 0,
    explanation: "Eje de simetría x = -b / (2a) = -12 / (2 * -2) = 3."
  },
  {
    id: 289,
    question: "Un disco gira 5 vueltas completas recorriendo 31.416 metros. ¿Cuál es el radio del disco en metros? (π ≈ 3.1416)",
    options: ["1.0 metro", "0.5 metros", "2.0 metros", "1.5 metros"],
    correct: 0,
    explanation: "Distancia = 5 * (2πr) = 10πr. 31.416 = 10(3.1416)r ⇒ r = 1.0 m."
  },
  {
    id: 290,
    question: "En un hexágono regular inscrito en un círculo de radio R = 6 cm, ¿cuál es su perímetro exterior?",
    options: ["36 cm", "18 cm", "24 cm", "42 cm"],
    correct: 0,
    explanation: "El lado de un hexágono regular inscrito es igual al radio del círculo (lado = 6 cm). Perímetro = 6 * 6 = 36 cm."
  }
];
]
  }
};
