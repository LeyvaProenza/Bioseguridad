document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('glossary-items');
  const searchInput = document.getElementById('glossary-search');
  const letterNav = document.getElementById('letter-nav');
  if (!container) return;

  const items = [
    {term:"AEE (Accidente de Exposición Ocupacional)",def:"Contacto accidental con sangre o fluidos corporales durante procedimientos laborales. Incluye pinchazos, salpicaduras en mucosas y contacto con piel lesionada."},
    {term:"Aerosoles intraorales",def:"Partículas finas generadas por el turbine dental que contienen sangre, saliva y microorganismos. Alcanzan 1-2 metros y permanecen suspendidos hasta 60 minutos."},
    {term:"Amalgama dental",def:"Aleación de mercurio con metales (plata, estaño, cobre) usada para obturaciones. Riesgo: vapores de mercurio (neurotóxico) durante manipulación."},
    {term:"Asepsia",def:"Conjunto de técnicas y procedimientos destinados a prevenir la contaminación por microorganismos, manteniendo un ambiente libre de infección."},
    {term:"Antisepsia",def:"Uso de agentes químicos (antisépticos) sobre tejidos vivos para destruir o inhibir el crecimiento de microorganismos patógenos."},
    {term:"Autoclave",def:"Equipo de esterilización que utiliza vapor de agua a presión elevada (121°C o 134°C) para eliminar microorganismos, incluidas esporas."},
    {term:"Barreras de protección",def:"Elementos físicos (guantes, mascarillas, cubrebocas, pantallas faciales) que impiden el contacto directo con agentes infecciosos."},
    {term:"Bioseguridad",def:"Conjunto de medidas preventivas destinadas a proteger la salud y seguridad de los trabajadores frente a riesgos biológicos, químicos y físicos."},
    {term:"Burnout",def:"Síndrome de desgaste profesional caracterizado por agotamiento emocional, despersonalización y baja realización personal. Común en profesionales de salud."},
    {term:"Calor seco",def:"Método de esterilización que utiliza temperaturas de 160-170°C durante 1-2 horas para destruir microorganismos en instrumental seco."},
    {term:"Cadena de esterilización",def:"Secuencia completa: uso → transporte → limpieza → enjuague → secado → empaque → esterilización → almacenamiento → uso."},
    {term:"Clorhexidina",def:"Antiséptico de amplio uso en odontología. Concentraciones: 0.12% (enjuague), 2% (lavado de manos/preparación de piel). Efecto residual hasta 6 horas."},
    {term:"Condiciones subestándar",def:"Deficiencias en el ambiente de trabajo que aumentan la probabilidad de accidentes (iluminación inadecuada, pisos resbalosos, equipos defectuosos)."},
    {term:"Cuestionario NORDIC",def:"Instrumento de autoevaluación de molestias musculoesqueléticas por 9 regiones corporales. Estándar para estudios epidemiológicos en trabajadores."},
    {term:"Descontaminación",def:"Proceso de reducir la carga microbiana a niveles seguros mediante limpieza y desinfección de superficies y equipos."},
    {term:"Desinfección",def:"Eliminación de la mayoría de microorganismos patógenos de superficies inanimadas, sin garantizar la destrucción de esporas."},
    {term:"Desechos biosanitarios",def:"Residuos generados en establecimientos de salud que pueden representar un riesgo para la salud pública y el medio ambiente."},
    {term:"DS-2013",def:"Decreto Supremo que establece el Reglamento de Seguridad y Salud en el Trabajo en Ecuador. Obliga a evaluación de riesgos, planes de prevención y capacitación."},
    {term:"EPP (Equipo de Protección Personal)",def:"Elementos utilizados por el trabajador para protegerse de riesgos laborales: guantes, mascarillas, gafas, mandil, cofia."},
    {term:"Ergonomía",def:"Ciencia que estudia la adaptación del trabajo al ser humano, optimizando posturas, movimientos y condiciones del entorno laboral."},
    {term:"Esterilización",def:"Proceso que destruye toda forma de vida microbiana, incluyendo esporas bacterianas, garantizando un nivel de seguridad absoluto."},
    {term:"Exposición ocupacional",def:"Contacto accidental del personal de salud con sangre, fluidos corporales u otros agentes infecciosos durante procedimientos clínicos."},
    {term:"Formaldehído",def:"Sustancia química cancerígena usada en fijadores y formocresol (endodoncia). Riesgo: irritación respiratoria y dermatitis de contacto."},
    {term:"Glutaraldehído",def:"Agente de esterilización química de nivel alto (2%). Para equipos termolábiles como endoscopios. Tóxico — requiere ventilación."},
    {term:"Hepatitis B",def:"Enfermedad infecciosa del hígado causada por el virus HBV, transmitida por sangre y fluidos corporales. Principal riesgo biológico en odontología."},
    {term:"Hepatitis C",def:"Enfermedad viral que afecta el hígado, transmitida principalmente por exposición a sangre contaminada."},
    {term:"HIV (VIH)",def:"Virus de inmunodeficiencia humana que ataca al sistema inmunológico. Riesgo ocupacional principal en procedimientos dentales."},
    {term:"Hot spots ergonómicos",def:"Puntos de tensión muscular generados por posturas incorrectas durante procedimientos odontológicos prolongados."},
    {term:"Incidente laboral",def:"Suceso no deseado que pudo haber causado una lesión o enfermedad, o que tuvo el potencial de hacerlo."},
    {term:"Indicador biológico",def:"Sistema de control que contiene microorganismos resistentes (Bacillus stearothermophilus) para verificar que la esterilización fue exitosa."},
    {term:"Inmunización",def:"Proceso de protección activa del personal odontológico mediante vacunación (especialmente hepatitis B, influenza, tétanos)."},
    {term:"Kit Púrpura",def:"Paquete de medicamentos profilácticos del MSP Ecuador para exposiciones ocupacionales a sangre. Contiene antirretrovirales para prevenir HIV, HBV y HCV."},
    {term:"Lavado de manos",def:"Técnica fundamental de asepsia que elimina microorganismos transitorios de las manos mediante fricción con jabón o soluciones antisépticas."},
    {term:"Lesiones musculoesqueléticas",def:"Daños en músculos, tendones, ligamentos y articulaciones causados por posturas mantenidas y movimientos repetitivos en la práctica odontológica."},
    {term:"MIPER",def:"Matriz de Identificación de Peligros y Evaluación de Riesgos. Herramienta obligatoria en gestión de SST para priorizar controles."},
    {term:"Modelo de Karasek",def:"Modelo de estrés laboral que propone que el mayor daño ocurre cuando alta demanda se combina con bajo control sobre el trabajo."},
    {term:"MSP",def:"Ministerio de Salud Pública del Ecuador. Organismo rector del sistema de salud y emisor de normativas de bioseguridad."},
    {term:"N95/FFP2",def:"Mascarilla de alta filtración que bloquea el 95% de aerosoles <0.3 micras. Obligatoria en procedimientos que generan aerosoles dentales."},
    {term:"Normativa de bioseguridad",def:"Conjunto de leyes, decretos, reglamentos y protocolos que regulan las prácticas de seguridad en establecimientos de salud."},
    {term:"Óxido de etileno",def:"Gas esterilizante utilizado para materiales sensible al calor y al vapor. Requiere ventilación adecuada y tiempos de aireación."},
    {term:"Patógeno",def:"Microorganismo capaz de causar enfermedad en su huésped (bacterias, virus, hongos, parásitos)."},
    {term:"PEP (Profilaxis Post-Exposición)",def:"Tratamiento preventivo administrado después de una exposición ocupacional a HIV, hepatitis B o C. Debe iniciarse dentro de las primeras 72 horas."},
    {term:"Precauciones estándar",def:"Prácticas de control de infección basadas en el principio de que toda sangre y fluido corporal debe tratarse como potencialmente infeccioso."},
    {term:"RCP (Reanimación Cardiopulmonar)",def:"Técnica de emergencia que combina compresiones torácicas y ventilación artificial para mantener la circulación y oxigenación."},
    {term:"REBA (Rapid Entire Body Assessment)",def:"Herramienta de evaluación postural que analiza todo el cuerpo. Útil para trabajos con carga y posturas dinámicas."},
    {term:"Riesgo biológico",def:"Peligro derivado de microorganismos (bacterias, virus, hongos) presentes en sangre, saliva y fluidos de pacientes."},
    {term:"Riesgo ergonómico",def:"Peligro asociado a posturas inadecuadas, movimientos repetitivos y diseño inapropiado del puesto de trabajo dental."},
    {term:"Riesgo físico",def:"Peligro por agentes como ruido, radiaciones (rayos X), calor, electricidad y pinchazos con agujas."},
    {term:"Riesgo químico",def:"Peligro por sustancias químicas utilizadas en odontología: amalgama, formaldehído, solventes, productos de limpieza."},
    {term:"Riesgo psicosocial",def:"Factores del trabajo que afectan la salud mental: estrés laboral, sobrecarga, conflictos interpersonales, burnout."},
    {term:"RULA (Rapid Upper Limb Assessment)",def:"Método de evaluación ergonómica que analiza posturas de miembros superiores, cuello y tronco. Genera puntuación de 1-7 con niveles de acción recomendados."},
    {term:"Salud ocupacional",def:"Rama de la salud pública dedicada a prevenir enfermedades y lesiones derivadas del trabajo, promoviendo ambientes seguros."},
    {term:"Simulación clínica",def:"Método de enseñanza que reproduce escenarios reales de atención odontológica para practicar protocolos de seguridad sin riesgo al paciente."},
    {term:"Técnicas de eliminación de microorganismos",def:"Métodos físicos (calor, radiación) y químicos (desinfectantes, antisépticos) para destruir patógenos."},
    {term:"Triaje de residuos",def:"Separación y clasificación de desechos según su tipo (infecciosos, cortopunzantes, generales) para su manejo adecuado."},
    {term:"Vacunación",def:"Administración de vacunas al personal odontológico para protección contra enfermedades transmisibles (hepatitis B, influenza, tétanos)."},
    {term:"Yodopovidona",def:"Antiséptico de amplio espectro (bacterias, virus, hongos, esporas). Concentración: 1-10% para preparación de piel. Contraindicado en hipertiroidismo."}
  ];

  items.sort((a, b) => a.term.localeCompare(b.term, 'es'));

  function render(filterLetter, filterText) {
    filterLetter = filterLetter || '';
    filterText = filterText || '';
    container.innerHTML = '';
    var currentLetter = '';
    var filtered = items.filter(function(item) {
      var matchLetter = !filterLetter || item.term[0].toUpperCase() === filterLetter;
      var matchText = !filterText || item.term.toLowerCase().indexOf(filterText.toLowerCase()) !== -1 || item.def.toLowerCase().indexOf(filterText.toLowerCase()) !== -1;
      return matchLetter && matchText;
    });

    filtered.forEach(function(item) {
      var letter = item.term[0].toUpperCase();
      if (letter !== currentLetter) {
        currentLetter = letter;
        var divider = document.createElement('div');
        divider.className = 'glossary-letter-divider';
        divider.textContent = letter;
        container.appendChild(divider);
      }
      var div = document.createElement('div');
      div.className = 'glossary-item';
      div.innerHTML = '<div class="term">' + item.term + '</div><div class="def">' + item.def + '</div>';
      container.appendChild(div);
    });

    if (filtered.length === 0) {
      container.innerHTML = '<p style="text-align:center;color:#5d6d7e;padding:40px;">No se encontraron términos.</p>';
    }
  }

  var letters = [];
  var seen = {};
  items.forEach(function(i) {
    var l = i.term[0].toUpperCase();
    if (!seen[l]) { seen[l] = true; letters.push(l); }
  });
  letters.sort();

  letters.forEach(function(letter) {
    var btn = document.createElement('button');
    btn.textContent = letter;
    btn.addEventListener('click', function() {
      letterNav.querySelectorAll('button').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      render(letter, searchInput ? searchInput.value : '');
    });
    letterNav.appendChild(btn);
  });

  if (searchInput) {
    searchInput.addEventListener('input', function() {
      letterNav.querySelectorAll('button').forEach(function(b) { b.classList.remove('active'); });
      render('', searchInput.value);
    });
  }

  render();
});
