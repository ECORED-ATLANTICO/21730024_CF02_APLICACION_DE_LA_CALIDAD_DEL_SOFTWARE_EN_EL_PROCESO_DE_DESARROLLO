<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Medidas de calidad (ISO/IEC 2502n)
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.md-5
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img_1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La división 2502n de la familia ISO/IEC 25000 establece un marco para la medición de la calidad del software, mediante el uso de métricas y procedimientos de evaluación. Esta subdivisión se organiza en diversos estándares que abordan tanto aspectos de medición de referencia como métricas específicas aplicables a diferentes niveles.
    .tarjeta.tarjeta--fondo__slider.p-4
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0
            #t_3_1.h2 3.1 ISO/IEC 25020: modelo de referencia para medición con guía 
            p Esta norma establece la estructura y el modelo de referencia que relaciona características y subcaracterísticas de calidad con los métodos y elementos de medición. 
            p Su función es servir como guía para la definición de medidas que permitan evaluar cuantitativamente la calidad del software, especificando métodos, funciones de medición y elementos de referencia que facilitan la obtención de datos objetivos. 
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema3/img_2.png', class="img-fluid")

        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0
            #t_3_2.h2 3.2 ISO/IEC 25021: medidas primitivas (QME)
            p El estándar ISO/IEC 25021 se centra en definir las medidas primitivas, conocidas como elementos de medida de calidad (QME), que actúan como base para la medición de atributos tanto internos como externos y en uso.
            p Estas métricas son esenciales para establecer comparaciones y seguimiento de la calidad a lo largo del ciclo de vida del software, ya que permiten cuantificar aspectos fundamentales del producto. 
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema3/img_3.png', class="img-fluid")

        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0
            #t_3_3.h2 3.3 ISO/IEC 25022: métricas de calidad en uso 
            p Esta norma específica un conjunto de métricas orientadas a evaluar la calidad del software desde la perspectiva del usuario final. 
            p Se enfoca en aspectos como la eficacia, eficiencia, seguridad y satisfacción, estableciendo directrices para medir la experiencia real de uso y determinar el impacto del producto en el desempeño del usuario.
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema3/img_4.png', class="img-fluid")
        
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0
            #t_3_4.h2 3.4 ISO/IEC 25023: métricas de calidad externa
            p El estándar ISO/IEC 25023 se orienta a la medición de la calidad externa del producto, es decir, el desempeño del software cuando se encuentra en operación.
            p Se incluyen métricas que evalúan atributos como el tiempo de respuesta, la robustez y la tasa de error, lo que permite una valoración objetiva y cuantificable de la calidad en escenarios reales de uso.
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema3/img_5.png', class="img-fluid")

        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0
            #t_3_5.h2 3.5 ISO/IEC 25024: métricas de calidad interna
            p La norma ISO/IEC 25024 define las métricas para evaluar la calidad interna del software, que se relaciona con la estructura y el diseño del código. 
            p Este conjunto de medidas permite identificar oportunidades de mejora en el proceso de desarrollo, facilitando la detección de inconsistencias y la aplicación de acciones correctivas que optimicen el mantenimiento y la evolución del producto.
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema3/img_6.png', class="img-fluid")
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
