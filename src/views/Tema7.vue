<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Integración de modelos en la evaluación
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.md-5
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema7/img_1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La mejora continua de la calidad del  <em>software</em> se potencia al integrar distintos modelos y metodologías de evaluación.

    separador

    #t_7_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 7.1 Uso combinado de CMMI, PSP/TSP y <em>SQuaRE</em> para garantizar calidad total
    .mb-3
    
    .row.justify-content-center.align-items-center.mb-5
      .col-4.col-sm-2.col-lg-1.mb-lg-0.mb-3
        figure.mb-0
          img.mb-0(src="@/assets/curso/temas/tema7/img_2.png", class="img-fluid")
      .col-lg-11.mb-0
        p.mb-0 La integración de modelos como CMMI (<em>Capability Maturity Model Integration</em>), PSP/TSP (<em>Personal y Team Software Process</em>) y el marco <em>SQuaRE</em> permite abordar la calidad desde diversas perspectivas:
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-9.order-2.order-lg-1.mb-0
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--color-secundario-10")
          div(titulo="CMMI")
            p.mb-0 Aporta un enfoque estructurado para la mejora de procesos y la madurez organizacional, estableciendo niveles de gestión que facilitan la identificación de áreas críticas.
          div(titulo="PSP/TSP")
            p.mb-0 Contribuye a la optimización de los procesos individuales y en equipo, favoreciendo la planificación, ejecución y control de las actividades de desarrollo.
          div(titulo="<em>SQuaRE</em>")
            p.mb-0 Ofrece un marco normativo que define, mide y evalúa la calidad del <em>software</em> de manera integral.
      .col-7.col-md-5.col-lg-3.mb-lg-3.order-1.order-lg-2.mb-md-3.mb-3
        figure
          img.mb-0(src="@/assets/curso/temas/tema7/img_3.png", class="img-fluid")
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10
        .tarjeta_tema-7
          .row.justify-content-center.align-items-center.mb-0
            .col-4.col-sm-3.col-lg-2.mb-lg-0.mb-3
              figure
                img.mb-0(src="@/assets/curso/temas/tema7/img_4.png", class="img-fluid")
            .col-lg-10
              p.mb-0 El uso combinado de estos modelos permite lograr un control total sobre la calidad, garantizando que cada fase del desarrollo se realice con estándares altos y que el producto final cumpla con las expectativas tanto del desarrollador como del usuario.
  
</template>

<script>
export default {
  name: 'Tema7',
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
