<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bg_img_1
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Introducción a la norma ISO/IEC 25000 <em>SQuaRE</em>
    .bloque-texto-t.justify-content-center.align-items-center.mb-0
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/temas/tema1/img_1.png', alt='Código de programación en pantalla, representación de software')
      .bloque-texto-t__texto.col-10.mb-0
        p.mb-0 La familia de normas ISO/IEC 25000, conocida como <em>SQuaRE</em> (<em>System and <i>Software</i> Quality Requirements and Evaluation</em>), constituye un marco integral para evaluar la calidad de productos de <i>software</i>. Dicho conjunto normativo se orienta a establecer criterios, medir atributos y proporcionar lineamientos para asegurar que el desarrollo y mantenimiento de <i>software</i> responda a las expectativas del cliente y se ajuste a las necesidades de uso, independientemente del contexto en el que se aplique. Este modelo se fundamenta en las normas anteriores (ISO/IEC 9126 y ISO/IEC 14598) y responde a la evolución de las tecnologías y metodologías de desarrollo.

    separador

    #t_1_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.1	Ventajas: estandarización, guías para requisitos, ajuste de normas existentes
    .mb-3
    
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-9.mb-lg-3.order-2.order-lg-1.mb-0
        p.mb-0 El uso de la norma ISO/IEC 25000 <em>SQuaRE</em> ofrece ventajas significativas, entre las que se destaca la estandarización de procesos y métodos en la evaluación de la calidad del  <I>software</i>. Esta norma facilita la formulación de requisitos de calidad de manera sistemática, lo que permite que los desarrolladores cuenten con guías claras para definir y medir atributos críticos del producto. Asimismo, al integrar y ajustar las normas existentes, <em>SQuaRE</em> posibilita una evaluación integral que abarca tanto la calidad interna (estructura y eficiencia del código), como la calidad externa (rendimiento y experiencia de uso), contribuyendo a la mejora continua del proceso de desarrollo (Cordero, 2017).
      .col-6.col-lg-3.order-1.order-lg-2.mb-lg-0.mb-3
        figure.mb-0
          img.mb-0(src="@/assets/curso/temas/tema1/img_2.png", class="img-fluid")

    separador

    #t_1_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.2	Divisiones: 2501n (modelo), 2502n (medidas), 2503n (requisitos), 2504n (evaluación)
    .mb-3
    .row.justify-content-center.align-items-center.mb-0
      p.mb-lg-3.order-2.order-lg-1.mb-3 El marco <em>SQuaRE</em> se organiza en diversas divisiones, cada una con un enfoque específico:
      .col-5.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
        figure
          img(src="@/assets/curso/temas/tema1/img_3.png", class="img-fluid")
      .col-12.col-lg-7.mb-0.order-3.order-lg-3.p-0
        .custom-slider.p-3
          SlyderF(columnas="col-12 col-sm-10 col-md-6 col-lg-6 p-3")
            .tarjeta.tarjeta.rounded-5.custom-slider__tarjeta.custom-slider__tarjeta--1
              .custom-slider__title.color-secundario-20.mb-3.mb-md-3.mb-lg-5 2501n – Modelo de calidad 
              .custom-slider__content.mb-0 Define las características y subcaracterísticas que debe poseer el producto de  <I>software</i> para cumplir con estándares de calidad, estableciendo parámetros que abarcan desde la funcionalidad hasta la usabilidad y seguridad.
            .tarjeta.tarjeta.p-4.rounded-5.custom-slider__tarjeta.custom-slider__tarjeta--2
              .custom-slider__title.color-secundario-20.mb-3.mb-lg-5  2502n – Medidas de calidad 
              .custom-slider__content.mb-0 Proporciona un marco para la definición y aplicación de métricas que permiten cuantificar la calidad en diferentes contextos, incluyendo medidas internas, externas y en uso.
            .tarjeta.tarjeta.p-4.rounded-5.custom-slider__tarjeta.custom-slider__tarjeta--3
              .custom-slider__title.color-secundario-20.mb-3.mb-lg-5 2503n – Requisitos de calidad 
              .custom-slider__content.mb-0 Especifica los requisitos que debe satisfacer el producto, sirviendo como base para la planificación y desarrollo, y garantizando que se cumplan las expectativas del cliente.
            .tarjeta.tarjeta.p-4.rounded-5.custom-slider__tarjeta.custom-slider__tarjeta--4
              .custom-slider__title.color-secundario-20.mb-3.mb-lg-5 2504n – Evaluación de calidad
              .custom-slider__content.mb-0 Establece los procedimientos y criterios para la valoración sistemática del software, orientados a la auditoría y mejora continua. Cada división se articula de manera que el conjunto normativo ofrezca una visión holística de la calidad del producto, facilitando su aplicación en diferentes escenarios de desarrollo.
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
