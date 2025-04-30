<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Requisitos y evaluación de calidad
    .bloque-texto-t.justify-content-center.align-items-center.mb-0
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/temas/tema4/img_1.png', alt='Código de programación en pantalla, representación de software')
      .bloque-texto-t__texto.col-8.mb-0
        p.mb-0 La integración de requisitos claros y procesos de evaluación rigurosos es fundamental para garantizar que el software cumpla con las expectativas y necesidades del cliente a lo largo de su ciclo de vida.

    separador

    #t_4_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.1 ISO/IEC 25030: especificación de requisitos de calidad
    .mb-3
    
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-8.mb-lm-3.mb-0
        p.mb-0 Esta norma establece las recomendaciones para definir y documentar los requisitos de calidad que debe cumplir el <em>software</em>. Se enfatiza la importancia de detallar de manera precisa las características esperadas, lo que permite orientar el desarrollo y establecer criterios claros de aceptación. El uso de este estándar facilita la comunicación entre los equipos de desarrollo y los usuarios, asegurando que las expectativas se reflejen en el producto final.
      .col-lg-4.mb-0
        figure.mb-0
          img.mb-0(src="@/assets/curso/temas/tema4/img_2.png", class="img-fluid")

    separador

    #t_4_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.2 ISO/IEC 25040-25044: procesos de evaluación para desarrolladores, compradores y evaluadores
    .mb-3
    
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-3.mb-0
        figure.mb-0
          img.mb-0(src="@/assets/curso/temas/tema4/img_3.png", class="img-fluid")
      .col-lg-7.mb-lm-3.mb-0
        p.mb-0 El conjunto de normas ISO/IEC 25040 a 25044 define los procesos de evaluación de la calidad, orientados a distintos actores involucrados en el ciclo de vida del <em>software</em>. Se contemplan procedimientos específicos para desarrolladores (integración de pruebas y verificación), compradores (evaluación de conformidad y desempeño) y evaluadores externos (auditorías de calidad). Estos procesos garantizan que la evaluación sea sistemática, objetiva y basada en criterios preestablecidos, lo que permite la mejora continua del producto.
      .col-lg-2.mb-0
        figure.mb-0
          img.mb-0(src="@/assets/curso/temas/tema4/img_4.png", class="img-fluid")
</template>

<script>
export default {
  name: 'Tema4',
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
