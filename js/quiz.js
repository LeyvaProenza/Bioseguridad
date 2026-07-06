var QUIZ_DATA = {
  'quiz-container-1': [
    {q:"¿Cuál es el objetivo principal de la bioseguridad?",o:["Evitar contagio entre pacientes y personal","Reducir costos del consultorio","Aumentar productividad","Cumplir requisitos administrativos"],c:0,f:"La bioseguridad previene la transmisión de infecciones protegiendo a pacientes y personal."},
    {q:"¿Cuáles son los tres tipos de riesgos en odontología?",o:["Biológicos, químicos y físicos","Eléctricos, magnéticos y nucleares","Financieros y legales","Emocionales y sociales"],c:0,f:"Los riesgos principales son biológicos (sangre, saliva), químicos (amalgama) y físicos (radiaciones, pinchazos)."},
    {q:"¿Qué significan las 'condiciones subestándar'?",o:["Deficiencias en el ambiente de trabajo","Equipos de última generación","Protocolos excesivos","Horarios largos"],c:0,f:"Son deficiencias ambientales como iluminación inadecuada o pisos resbalosos que incrementan el riesgo."},
    {q:"¿Qué tipo de riesgo representa la sangre y saliva?",o:["Riesgo biológico","Riesgo químico","Riesgo físico","Riesgo psicosocial"],c:0,f:"La sangre y saliva son los principales agentes de riesgo biológico en odontología."},
    {q:"¿Qué es un 'acto subestándar'?",o:["Una acción del trabajador que incumple protocolos","Un defecto en el equipamiento","Una condición ambiental","Una norma obsoleta"],c:0,f:"Son comportamientos inseguros como no usar guantes o recapsular agujas."},
    {q:"¿Cuáles son los niveles de bioseguridad?",o:["Niveles 1, 2, 3 y 4 de menor a mayor","Solo un nivel único","Niveles A, B y C","Niveles determinados por el paciente"],c:0,f:"Van del nivel 1 (riesgo bajo) al nivel 4 (máxima peligrosidad)."},
    {q:"¿Por qué es importante la inmunización del personal?",o:["Proteger de enfermedades transmisibles","Cumplir requisitos burocráticos","No tiene importancia","Solo para hospitales"],c:0,f:"La vacunación (especialmente hepatitis B) protege de enfermedades infecciosas."},
    {q:"¿Qué es el riesgo ergonómico en odontología?",o:["Posturas inadecuadas y movimientos repetitivos","Ruido del turbine","Exposición a rayos X","Contaminación con sangre"],c:0,f:"Las posturas mantenidas y movimientos repetitivos causan lesiones musculoesqueléticas."},
    {q:"¿Cuál es la teoría de Heinrich sobre accidentes?",o:["88% actos inseguros, 10% condiciones, 2% imprevenibles","50% actos, 50% condiciones","Todos los accidentes son imprevenibles","Solo el 1% es prevenible"],c:0,f:"La mayoría de accidentes son causados por actos inseguros del trabajador."},
    {q:"¿Qué es la cadena de transmisión?",o:["Reservorio → Puerta salida → Modo transmisión → Puerta entrada → Huésped","Solo el contacto directo","Solo los aerosoles","Solo los pinchazos"],c:0,f:"La bioseguridad busca romper cualquier eslabón de esta cadena."}
  ],
  'quiz-container-2': [
    {q:"¿Cuál es la diferencia entre asepsia y antisepsia?",o:["Asepsia = prevenir contaminación; Antisepsia = químicos en tejidos vivos","Son sinónimos","La asepsia es solo para laboratorios","La antisepsia es más efectiva"],c:0,f:"La asepsia previene contaminación, la antisepsia usa químicos sobre tejidos vivos."},
    {q:"¿Qué bacterias son más relevantes en odontología?",o:["Streptococcus mutans, Porphyromonas gingivalis","Solo E. coli","Solo Salmonella","No hay bacterias relevantes"],c:0,f:"S. mutans causa caries, P. gingivalis causa periodontitis."},
    {q:"¿Qué equipo se usa para esterilización por vapor?",o:["Autoclave","Estufa de calor seco","Óxido de etileno","Lámpara UV"],c:0,f:"La autoclave utiliza vapor de agua a alta presión y temperatura."},
    {q:"¿A qué temperatura esteriliza la autoclave convencional?",o:["121°C durante 15-30 min","100°C durante 60 min","200°C durante 5 min","80°C durante 45 min"],c:0,f:"La autoclave convencional opera a 121°C con presión de 15 libras."},
    {q:"¿Qué es la desinfección de nivel alto?",o:["Elimina todo excepto esporas","Solo elimina bacterias","Es igual a esterilización","No requiere equipos"],c:0,f:"Elimina todos los microorganismos vegetativos pero no garantiza esporas."},
    {q:"¿Cuáles son las categorías de residuos del MSP?",o:["Infecciosos, cortopunzantes, químicos, farmacéuticos, generales","Solo orgánicos e inorgánicos","Negros y blancos","Reciclables y no reciclables"],c:0,f:"Hay 6 categorías con colores específicos de contenedor."},
    {q:"¿Qué es la cadena de esterilización?",o:["9 pasos desde uso hasta reutilización del instrumental","Solo la limpieza con agua","Solo el uso de autoclave","Solo el lavado de manos"],c:0,f:"Son 9 pasos: uso → transporte → limpieza → enjuague → secado → empaque → esterilización → almacenamiento → uso."},
    {q:"¿Qué antiséptico tiene efecto residual de 6 horas?",o:["Clorhexidina al 2%","Alcohol al 70%","Agua y jabón","Agua destilada"],c:0,f:"La clorhexidina se adhiere a tejidos y ejerce acción antimicrobiana hasta 6 horas."},
    {q:"¿Cuál es la diferencia entre desinfección y esterilización?",o:["Desinfección reduce microorganismos; esterilización elimina todos, incluidas esporas","Son lo mismo","La esterilización es menos completa","Solo se usa desinfección"],c:0,f:"La esterilización destruye toda forma de vida, incluidas esporas bacterianas."},
    {q:"¿Qué es el Kit Púrpura?",o:["Paquete de medicamentos profilácticos para AEE","Protocolo de violencia de género","Manual de limpieza","Guía de ergonomía"],c:0,f:"Es el paquete de antirretrovirales para prevenir HIV, HBV y HCV tras exposición ocupacional."}
  ],
  'quiz-container-3': [
    {q:"¿Qué es la salud ocupacional?",o:["Prevenir enfermedades y lesiones derivadas del trabajo","Solo control de infecciones","Solo administración de medicamentos","Diseño de sonrisas"],c:0,f:"Busca promover bienestar físico, mental y social de los trabajadores."},
    {q:"¿Cuáles son los factores de riesgo ergonómicos más comunes?",o:["Posturas mantenidas y movimientos repetitivos","Solo el ruido","Solo la iluminación","El tipo de silla"],c:0,f:"Las posturas estáticas y movimientos repetitivos son los principales factores."},
    {q:"¿Qué lesiones son más frecuentes en odontólogos?",o:["Lumbalgia, cervicalgia, tendinitis","Solo fracturas","Solo quemaduras","Solo lesiones oculares"],c:0,f:"La lumbalgia afecta al 60-70% y la cervicalgia al 40-60%."},
    {q:"¿Qué vacuna es más importante para odontólogos?",o:["Hepatitis B","Contra resfriado","Contra malaria","Contra dengue"],c:0,f:"La hepatitis B tiene el mayor riesgo de transmisión por pinchazo (6-30%)."},
    {q:"¿Qué hacer ante un pinchazo con sangre contaminada?",o:["Lavar inmediatamente, reportar, evaluar, PEP","Ignorar si es pequeño","Esperar 24 horas","Solo alcohol y continuar"],c:0,f:"Lavado inmediato → reporte → evaluación → Kit Púrpura dentro de 72h."},
    {q:"¿Qué es la RCP?",o:["Técnica de emergencia con compresiones y ventilación","Un tipo de anestesia","Un protocolo de limpieza","Una técnica de radiografía"],c:0,f:"Combina compresiones torácicas y respiración para mantener circulación en paro."},
    {q:"¿Cuáles son los riesgos químicos en odontología?",o:["Amalgama, formaldehído, solventes","Solo la luz del láser","Solo el sonido","Solo las radiografías"],c:0,f:"La amalgama contiene mercurio, el formaldehído es cancerígeno."},
    {q:"¿Qué es el síndrome del túnel carpiano?",o:["Compresión del nervio mediano en la muñeca","Un tipo de caries","Una infección de encías","Un problema de visión"],c:0,f:"Causa hormigueo y dolor en dedos pulgar, índice y medio por movimientos repetitivos."},
    {q:"¿Cuánto duran los estiramientos pre-clínica?",o:["5 minutos","30 minutos","1 hora","No son necesarios"],c:0,f:"5 minutos al inicio de la jornada previenen lesiones musculoesqueléticas."},
    {q:"¿Qué es el modelo de Karasek?",o:["Estrés = alta demanda + bajo control + bajo soporte","Solo alta demanda","Solo bajo control","No es un modelo válido"],c:0,f:"Este perfil se asocia a burnout, LMS y enfermedad cardiovascular."}
  ],
  'quiz-container-4': [
    {q:"¿Qué es la MIPER?",o:["Matriz de Identificación de Peligros y Evaluación de Riesgos","Manual de procedimientos","Protocolo de limpieza","Guía de vacunación"],c:0,f:"Es la herramienta obligatoria para priorizar controles de riesgos."},
    {q:"¿Qué regulate el DS-2013?",o:["Seguridad y Salud en el Trabajo","Solo horarios laborales","Solo impuestos","Solo vacaciones"],c:0,f:"Establece evaluación de riesgos, comités SST, capacitación y vigilancia médica."},
    {q:"¿Qué es el Kit Púrpura del MSP?",o:["Paquete de medicamentos profilácticos para AEE","Protocolo de violencia de género","Manual de limpieza","Guía de ergonomía"],c:0,f:"Contiene antirretrovirales para prevenir HIV, HBV y HCV."},
    {q:"¿Dentro de cuántas horas se debe iniciar la PEP?",o:["72 horas (idealmente <2h)","24 horas","1 semana","No hay límite"],c:0,f:"La profilaxis post-exposición debe iniciarse dentro de las primeras 72 horas."},
    {q:"¿Qué es el RULA?",o:["Evaluación postural de miembros superiores","Un tipo de vacuna","Un desinfectante","Un protocolo de limpieza"],c:0,f:"Genera puntuación de 1-7 con niveles de acción recomendados."},
    {q:"¿Qué es la Matriz de Legalidad?",o:["Verificación de cumplimiento normativo","Tabla de precios","Calendario de vacunación","Protocolo de emergencia"],c:0,f:"Enumera normas aplicables y estado de cumplimiento del consultorio."},
    {q:"¿Qué residuos van en contenedor rojo?",o:["Infecciosos (gasas, guantes con sangre)","Cortopunzantes","Químicos","Generales"],c:0,f:"Los residuos infecciosos que estuvieron en contacto con sangre o fluidos."},
    {q:"¿Qué residuos van en contenedor amarillo?",o:["Cortopunzantes (agujas, bisturís)","Infecciosos","Farmacéuticos","Generales"],c:0,f:"Container rígido irrompible, nunca llenar más de ¾."},
    {q:"¿Qué norma obliga a evaluar riesgos?",o:["DS-2013","Solo recomendaciones internas","No hay norma obligatoria","Solo el código civil"],c:0,f:"El DS-2013 establece evaluación de riesgos como obligación legal."},
    {q:"¿Qué es la cadena de custodia de residuos?",o:["Documentación desde generación hasta disposición final","Solo el transporte","Solo la clasificación","Solo el almacenamiento"],c:0,f:"Se documenta con manifiestos de residuos para trazabilidad completa."}
  ]
};

function loadQuiz(containerId) {
  var container = document.getElementById(containerId);
  if (!container) return;

  var questions = QUIZ_DATA[containerId];
  if (!questions) return;

  var score = 0;
  var answered = 0;
  var total = questions.length;

  container.innerHTML = '<h2>📝 Quiz de repaso</h2>';

  questions.forEach(function(q, i) {
    var qDiv = document.createElement('div');
    qDiv.className = 'quiz-question';
    var optionsHtml = q.o.map(function(opt, j) {
      return '<label><input type="radio" name="q' + i + '" value="' + j + '"> ' + opt + '</label>';
    }).join('');

    qDiv.innerHTML = '<div class="q-text">' + (i + 1) + '. ' + q.q + '</div>' +
      '<div class="options">' + optionsHtml + '</div>' +
      '<div class="feedback"></div>';
    container.appendChild(qDiv);

    qDiv.querySelectorAll('input[type="radio"]').forEach(function(radio) {
      radio.addEventListener('change', function() {
        var selected = parseInt(radio.value);
        var feedback = qDiv.querySelector('.feedback');
        qDiv.classList.remove('correct', 'incorrect');

        if (!qDiv.dataset.answered) {
          qDiv.dataset.answered = 'true';
          answered++;
          if (selected === q.c) {
            score++;
          }
        }

        if (selected === q.c) {
          qDiv.classList.add('correct');
          feedback.textContent = '✓ Correcto: ' + q.f;
        } else {
          qDiv.classList.add('incorrect');
          feedback.textContent = '✗ Incorrecto: ' + q.f;
        }
      });
    });
  });

  var btn = document.createElement('button');
  btn.className = 'quiz-btn';
  btn.textContent = 'Ver resultado';
  btn.addEventListener('click', function() {
    var existing = container.querySelector('.quiz-score');
    if (!existing) {
      var sd = document.createElement('div');
      sd.className = 'quiz-score';
      var pct = Math.round((score / total) * 100);
      var msg = score === total ? '¡Excelente! Dominas el tema.' :
                score >= total * 0.7 ? '¡Bien! Repasa los temas que fallaste.' :
                'Necesitas repasar. ¡Vuelve a intentarlo!';
      sd.innerHTML = '<div class="score-num">' + score + '/' + total + '</div>' +
        '<div class="score-text">' + msg + ' (' + pct + '%)</div>';
      sd.style.display = 'block';
      container.appendChild(sd);
    }
  });
  container.appendChild(btn);
}

document.addEventListener('DOMContentLoaded', function() {
  ['quiz-container-1','quiz-container-2','quiz-container-3','quiz-container-4'].forEach(function(id) {
    if (document.getElementById(id)) loadQuiz(id);
  });
});
