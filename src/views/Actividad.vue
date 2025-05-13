<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
    #Actividad                
      <Actividad :cuestionario="cuestionario"/>
  
</template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Evaluación de normas y métricas de calidad en software',
      titulo: 'Evaluación de normas y métricas de calidad en software',
      introduccion:
        '<b> Objetivo:</b> Evaluar la comprensión de los aprendices sobre la familia de normas ISO/IEC 25000 <em>(SQuaRE)</em>, modelos de calidad (ISO/IEC 25010, 25012), métricas (2502n) y su aplicación práctica.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto:
            '<em>La norma ISO/IEC 25000 SQuaRE reemplazó completamente a las normas ISO/IEC 9126 e ISO/IEC 14598.</em>',
          imagen: require('@/assets/actividad/img_1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Verdadero</em>',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '<em>Falso</em>',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre las normas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '<em>ISO/IEC 25010 define características de calidad para sistemas y  <i>software</i>, pero no incluye subcaracterísticas</em>',
          imagen: require('@/assets/actividad/img_2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Verdadero</em>',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>Falso</em>',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre las normas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '<em>ISO/IEC 25012 se enfoca exclusivamente en la calidad de datos inherentes, ignorando los dependientes del sistema.</em>',
          imagen: require('@/assets/actividad/img_3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Verdadero</em>',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>Falso</em>',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre las normas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '<em>Las medidas primitivas (QME) en ISO/IEC 25021 son métricas base para evaluar calidad interna y externa.</em>',
          imagen: require('@/assets/actividad/img_4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Verdadero</em>',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '<em>Falso</em>',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre las normas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '<em>ISO/IEC 25023 mide la calidad en uso, como la satisfacción del usuario.</em>',
          imagen: require('@/assets/actividad/img_5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Verdadero</em>',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>Falso</em>',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre las normas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '<em>La vista interna en SQuaRE analiza el rendimiento del  <i>software</i> en operación.</em>',
          imagen: require('@/assets/actividad/img_1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Verdadero</em>',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>Falso</em>',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre las normas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '<em>ISO/IEC 25030 especifica requisitos de calidad para etapas tempranas del desarrollo.</em>',
          imagen: require('@/assets/actividad/img_2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Verdadero</em>',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '<em>Falso</em>',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre las normas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '<em>El caso del Ministerio de Salud del Perú aplicó métricas de usabilidad pero no de eficiencia.</em>',
          imagen: require('@/assets/actividad/img_3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Verdadero</em>',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>Falso</em>',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre las normas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '<em>CMMI nivel 1 (Inicial) se caracteriza por procesos estandarizados y medibles.</em>',
          imagen: require('@/assets/actividad/img_4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Verdadero</em>',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>Falso</em>',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre las normas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '<em>PSP (Personal Software Process) se utiliza para gestionar equipos grandes en proyectos ágiles.</em>',
          imagen: require('@/assets/actividad/img_5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre las normas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '<em>ISO/IEC 25024 define métricas para evaluar la calidad de datos en sistemas estructurados.</em>',
          imagen: require('@/assets/actividad/img_1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre las normas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '<em>La división 2504n de SQuaRE se enfoca en la gestión de requisitos de calidad.</em>',
          imagen: require('@/assets/actividad/img_2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre las normas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '<em>En el ejemplo de Adobe vs. Corel, la fiabilidad se midió mediante tasas de error en producción.</em>',
          imagen: require('@/assets/actividad/img_3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre las normas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '<em>La norma ISO/IEC 25040 solo aplica para evaluadores externos, no para desarrolladores.</em>',
          imagen: require('@/assets/actividad/img_4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre las normas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '<em>La documentación en SQuaRE incluye históricos de progreso pero no simulacros de uso.</em>',
          imagen: require('@/assets/actividad/img_5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre las normas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '<em>ISO/IEC 25022 mide la eficacia del software en tareas específicas del usuario final.</em>',
          imagen: require('@/assets/actividad/img_1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre las normas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '<em>La integración de CMMI y SQuaRE permite evaluar tanto procesos organizacionales como calidad del producto.</em>',
          imagen: require('@/assets/actividad/img_2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre las normas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '<em>Las métricas de calidad interna (ISO/IEC 25024) evalúan la experiencia del usuario con el software.</em>',
          imagen: require('@/assets/actividad/img_3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre las normas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '<em>ISO/IEC 25021 proporciona fórmulas específicas para calcular métricas de mantenibilidad.</em>',
          imagen: require('@/assets/actividad/img_4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre las normas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '<em>El modelo TSP requiere que todos los miembros del equipo dominen PSP antes de implementarse.</em>',
          imagen: require('@/assets/actividad/img_5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre las normas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Lo felicito, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
