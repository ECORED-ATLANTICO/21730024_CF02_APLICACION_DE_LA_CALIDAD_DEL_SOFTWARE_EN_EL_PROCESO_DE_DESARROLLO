<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bg_img_2
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Modelos de calidad en ISO/IEC 25000
    .bloque-texto-t.justify-content-center.align-items-center.mb-0
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/temas/tema2/img_1.png', alt='Código de programación en pantalla, representación de software')
      .bloque-texto-t__texto.col-8.mb-0
        p.mb-0 Los modelos de calidad que integran la familia ISO/IEC 25000 permiten caracterizar de forma detallada las propiedades tanto de los sistemas y el software como de los datos que éstos manejan, brindando bases para una evaluación robusta.

    separador

    #t_2_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.1 ISO/IEC 25010: características y subcaracterísticas para sistemas y software
    .mb-3
    
    .row.justify-content-center.align-items-center.mb-0
      .col-7.col-lg-3.mb-lg-0.mb-3
        figure.mb-0
          img.mb-0(src="@/assets/curso/temas/tema2/img_2.png", class="img-fluid")
      .col-12.col-lg-9.mb-0
        p.mb-0 La norma ISO/IEC 25010 define un modelo de calidad que identifica un conjunto de características y subcaracterísticas esenciales para evaluar productos de software. Entre ellas se encuentran la funcionalidad, fiabilidad, usabilidad, eficiencia, mantenibilidad y portabilidad. Cada característica se desglosa en subatributos que permiten una valoración específica; por ejemplo, la usabilidad abarca la facilidad de aprendizaje, operación y atracción, mientras que la eficiencia se relaciona con el comportamiento temporal y el uso adecuado de los recursos. 

    separador

    .titulo-sexto.color-acento-contenido
      h5 Figura 1. 
      I(style="font-weight: normal;") Características y subcaracterísticas del modelo ISO/IEC 25010
      
    figure
      img.mb-3(src="@/assets/curso/temas/tema2/img_3.png", class="img-fluid")
    figcaption 
      I(style="font-weight: normal;") Fuente.  
      | SENA (2025).

    separador

    #t_2_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.2 ISO/IEC 25012: calidad de datos inherente y dependiente del sistema
    .mb-3
    
    .row.justify-content-center.align-items-center.mb-5
      .col-2.col-md-2.col-lg-1.mb-lg-0.mb-3
        figure
          img.mb-3(src="@/assets/curso/temas/tema2/img_4.svg", class="img-fluid")
      .col-12.col-md-10.col-lg-11.mb-3
        p.mb-3 La norma ISO/IEC 25012 complementa el modelo anterior al centrarse en la calidad de los datos, tanto en términos inherentes (exactitud, integridad, consistencia) como dependientes del sistema (accesibilidad, seguridad). Este modelo resulta fundamental para aquellos contextos en los que la información es un activo crítico y se requiere garantizar que los datos sean confiables y estén alineados con las necesidades del negocio. 
      .col-lg-8.mb-0
        .titulo-sexto.color-acento-contenido
          h5 Figura 2. 
          I(style="font-weight: normal;") Características de calidad de producto de datos (ISO/IEC 25012)

        figure.mb-0
          img.mb-3(src="@/assets/curso/temas/tema2/img_5.png", class="img-fluid")
        figcaption 
          I(style="font-weight: normal;") Fuente.  
          | SENA (2025).
</template>

<script>
export default {
  name: 'Tema2',
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
