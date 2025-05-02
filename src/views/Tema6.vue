<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bg_img_5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Ejemplo práctico de aplicación
    .bloque-texto-t.justify-content-center.align-items-center.mb-0
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/temas/tema6/img_1.png', alt='Código de programación en pantalla, representación de software')
      .bloque-texto-t__texto.col-8.mb-0
        p.mb-0 La aplicación práctica de los estándares ISO/IEC 25000 permite evaluar de forma concreta la calidad del software en escenarios reales. Se presenta a continuación un ejemplo ilustrativo.

    separador

    #t_6_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 6.1 Análisis de caso
    .mb-3

    .row.justify-content-center.align-items-center.mb-0
      .col-6.col-lg-3.mb-0.mb-lg-0.mb-3
        figure
          img(src="@/assets/curso/temas/tema6/img_2.png", class="img-fluid")
      .col-lg-9.mb-0
        p.mb-0 Se considera el análisis de calidad realizado por el Ministerio de Salud del Perú para la adquisición de un software de diseño y aplicaciones creativas. En este caso se evaluaron diversos atributos, tales como la funcionalidad, fiabilidad y usabilidad, utilizando un conjunto de métricas basadas en los estándares ISO/IEC 25000. La aplicación de estos criterios permitió identificar fortalezas y áreas de mejora, lo que facilitó la toma de decisiones en la selección del producto.

    separador

    #t_6_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 6.2 Comparación de software de diseño (Adobe vs. Corel)
    .mb-3

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-9.order-2.order-lg-1.mb-0
        p.mb-0 Mediante la aplicación de las normas y métricas establecidas, se realizó una comparación entre dos soluciones de software de diseño. El análisis incluyó aspectos como la eficiencia en el procesamiento, la usabilidad y la estabilidad en condiciones de uso intensivo. Los resultados obtenidos sirvieron para determinar cuál de los productos se ajustaba mejor a las necesidades definidas, demostrando la utilidad de un enfoque normativo para la evaluación comparativa
      .col-6.col-lg-3.order-1.order-lg-2.mb-lg-0.mb-3
        figure.mb-0
          img.mb-0(src="@/assets/curso/temas/tema6/img_3.png", class="img-fluid")

    separador

    #t_6_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 6.3 Métricas aplicadas (funcionalidad, fiabilidad, usabilidad, eficiencia)
    .mb-3
    p.mb-5 En el ejemplo práctico se aplicaron diversas métricas:
    .row.justify-content-center.align-items-center.mb-5
      .col-7.col-lg-5.mb-lm-3.mb-lg-0.mb-3
        figure.mb-0
          img.mb-0(src="@/assets/curso/temas/tema6/img_4.png", class="img-fluid")

      .col-12.col-lg-7.mb-lg-0.mb-3
        .custom-slider__tema__6
          SlyderF().p-3.rounded-3
            .tarjeta.p-3.rounded-3.d-flex
              .row.justify-content-center.align-items-center
                .col-3.d-none.d-md-block
                  figure
                    img.width-110(src='@/assets/curso/temas/tema6/img_5.png', alt='01')(data-aos="fade-up")
                .col-md-9
                  h3.factores-slider__number.color-acento-contenido Funcionalidad:
                  p.mb-0 se midió el grado de cumplimiento de las funciones especificadas en los requerimientos.
            .tarjeta.p-3.rounded-3.d-flex
              .row.justify-content-center.align-items-center
                .col-3.d-none.d-md-block
                  figure
                    img.width-110(src='@/assets/curso/temas/tema6/img_6.png', alt='02')(data-aos="fade-up")
                .col-md-9
                  h3.factores-slider__number.color-acento-contenido Fiabilidad:
                  p.mb-0 se evaluó la capacidad del software para operar sin interrupciones ni errores.
            .tarjeta.p-3.rounded-3.d-flex  
              .row.justify-content-center.align-items-center
                .col-3.d-none.d-md-block
                  figure
                    img.width-110(src='@/assets/curso/temas/tema6/img_7.png', alt='Ilustración decorativa')(data-aos="fade-up")
                .col-md-9
                  h3.factores-slider__number.color-acento-contenido Usabilidad:
                  p.mb-0 se analizaron indicadores de facilidad de uso y satisfacción del usuario.
            .tarjeta.p-3.rounded-3.d-flex  
              .row.justify-content-center.align-items-center
                .col-3.d-none.d-md-block
                  figure
                    img.width-110(src='@/assets/curso/temas/tema6/img_8.png', alt='Ilustración decorativa')(data-aos="fade-up")
                .col-md-9
                  h3.factores-slider__number.color-acento-contenido Eficiencia:
                  p.mb-0 se consideraron métricas de tiempo de respuesta y consumo de recursos. La integración de estos indicadores permitió una valoración integral que facilitó la toma de decisiones basada en datos objetivos (G., 2014).
    .titulo-sexto.color-acento-contenido
      h5 Figura 4.  
      I(style="font-weight: normal;") Análisis de caso práctico

    figure.mb-0
      img.mb-3(src="@/assets/curso/temas/tema6/img_11.svg", class="img-fluid")
    figcaption 
      I(style="font-weight: normal;") Fuente.  
      | SENA (2025).
</template>

<script>
export default {
  name: 'Tema6',
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
