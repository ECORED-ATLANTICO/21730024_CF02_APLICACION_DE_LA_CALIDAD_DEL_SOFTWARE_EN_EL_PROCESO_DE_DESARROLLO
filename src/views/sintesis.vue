<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-9.mb-0
        p.mb-3 El componente formativo “Medición, evaluación y aplicación práctica de la calidad de <em>software</em>” permite comprender los fundamentos, procesos y herramientas que garantizan la calidad del  <i>software</i> a través de la aplicación de modelos normativos y estrategias de evaluación. Se inicia con el estudio de la norma ISO/IEC 25000 <em>SQuaRE</em>, sus divisiones y su impacto en la estandarización de procesos. Posteriormente, se profundiza en los modelos de calidad, tales como ISO/IEC 25010, que clasifica las características esenciales del <em>software</em>, e ISO/IEC 25012, centrado en la calidad de los datos, lo que permite establecer parámetros claros para la evaluación de productos digitales. Asimismo, se examinan las medidas de calidad descritas en la familia ISO/IEC 2502n, proporcionando herramientas para la medición cuantitativa de atributos internos, externos y en uso del <em>software</em>. Se presentan también los requisitos de calidad y los procesos de evaluación definidos en las normas ISO/IEC 25030 e ISO/IEC 25040-25044, aplicables tanto en el desarrollo como en la compra y certificación de <em>software</em>. La documentación de estos procesos se aborda desde la perspectiva de las vistas en <em>SQuaRE</em>, asegurando que la información relevante sobre calidad sea registrada de manera efectiva. Para fortalecer la aplicación de estos conceptos, se estudia un caso práctico basado en la evaluación de <em>software</em>, comparando herramientas de diseño y aplicando métricas como funcionalidad, fiabilidad y usabilidad. Finalmente, se analiza la integración de modelos como CMMI, PSP/TSP y <em>SQuaRE</em> para garantizar una evaluación completa de la calidad del <em>software</em>.
      .col-lg-3.mb-0
        figure
          img.mb-5(src="@/assets/curso/sintesis/img_1.png", class="img-fluid")
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="El componente formativo “Medición, evaluación y aplicación práctica de la calidad de  <i>software</i>” ofrece una aproximación integral a la gestión y mejora de la calidad en el desarrollo de  <i>software</i>. Este módulo analiza detalladamente la implementación de la norma ISO/IEC 25000 SQuaRE, resaltando sus ventajas en cuanto a estandarización y sistematización de los requisitos, y se desglosan sus divisiones clave: modelo de calidad (2501n), medidas (2502n), requisitos (2503n) y evaluación (2504n). Asimismo, se estudian los modelos de calidad ISO/IEC 25010 y 25012, que definen las características esenciales tanto de sistemas y  <i>software</i> como de la calidad de datos. La propuesta profundiza en la aplicación de métricas a través de estándares específicos (ISO/IEC 25020, 25021, 25022, 25023 y 25024), así como en la definición de requisitos y en los procesos de evaluación (ISO/IEC 25030 y 25040-25044). Además, se destacan las vistas internas, externas y en uso, y la importancia de la documentación para la trazabilidad y mejora continua. La aplicación práctica se ejemplifica mediante estudios de caso, permitiendo evidenciar la efectividad de la integración de modelos como CMMI, PSP/TSP y SQuaRE para alcanzar una calidad total.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
