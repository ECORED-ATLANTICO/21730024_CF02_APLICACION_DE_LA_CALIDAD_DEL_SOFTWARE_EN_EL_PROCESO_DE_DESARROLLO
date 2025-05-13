<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.md-5
        .bloque-texto-g.color-adicional-1.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/introduccion/img_1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El componente formativo “Medición, evaluación y aplicación práctica de la calidad de <em>software</em>” profundiza en los aspectos avanzados de la calidad del  <em>software</em>, centrándose en la medición y evaluación bajo el marco de la familia de normas ISO/IEC 25000. A través de un enfoque práctico, se exploran modelos como ISO/IEC 25010 (sistemas y  <em>software</em>) e ISO/IEC 25012 (datos), junto con métricas internas, externas y de uso, complementadas con casos reales. Además, se refuerza la comprensión de la norma ISO/IEC 25000 <em>SQuaRE</em>, destacando sus ventajas y divisiones para fortalecer el proceso de evaluación. Este componente te brinda herramientas para transformar la calidad en un elemento estratégico, garantizando que los productos de  <em>software</em> cumplan con los más altos estándares y expectativas del cliente.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/TLs-a1Cok-w?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
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
