<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Vistas y documentación en SQuaRE
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.md-5
        .bloque-texto-g.color-terciario.p-3.p-sm-4.p-md-5
          .bloque-texto-f__comillas
            img(src='@/assets/curso/temas/tema5/img_1.svg',).quote__left
            img(src='@/assets/curso/temas/tema5/img_2.svg',).quote__right
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img_3.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La correcta interpretación de la calidad del software requiere considerar distintas vistas que reflejen tanto su estructura interna como su comportamiento en uso, complementadas con una documentación detallada que respalde la evaluación.

    separador

    #t_5_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.1 Vistas internas, externa y en uso
    .mb-3
    
    p.mb-3 Se definen tres vistas fundamentales para la evaluación del software:

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-8.mb-lm-3.order-2.order-lg-1.mb-0
        p.mb-0 Esta norma establece las recomendaciones para definir y documentar los requisitos de calidad que debe cumplir el <em>software</em>. Se enfatiza la importancia de detallar de manera precisa las características esperadas, lo que permite orientar el desarrollo y establecer criterios claros de aceptación. El uso de este estándar facilita la comunicación entre los equipos de desarrollo y los usuarios, asegurando que las expectativas se reflejen en el producto final.
      .col-7.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
        figure.mb-0
          img.mb-0(src="@/assets/curso/temas/tema5/img_7.png", class="img-fluid")

    separador

    #t_5_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.2 Requisitos documentales: políticas, simulacros, históricos de progreso
    .mb-3

    .row.justify-content-center.align-items-center.mb-0
      .col-7.col-lg-4.mb-lg-0.mb-3
        figure
          img(src="@/assets/curso/temas/tema5/img_11.png", class="img-fluid")
      .col-12.col-lg-8.mb-lm-3.mb-0
        .row.justify-content-center.align-items-center.mb-0.p-0
          .col-2.col-lg-2.mb-lg-0.mb-3
            figure
              img(src="@/assets/curso/temas/tema5/img_12.svg", class="img-fluid")
          .col-10.col-lg-10.mb-lm-3.mb-0
            p.mb-0 La documentación en <em>SQuaRE</em> es esencial para asegurar la trazabilidad y el control de la calidad. Entre los elementos que deben incluirse se encuentran:
          .col-12.col-lg-12.mb-lm-3.mb-0
            .crd.crd--avatarHorizontal
              .row.align-items-center
                .col-auto.position-relative
                  figure
                    img.img100(src="@/assets/curso/temas/tema5/img_13.svg", alt="Control químico" class="img-fluid")
                .col
                  p 
                    b Políticas de gestión de calidad: 
                    | normas y lineamientos que orientan el desarrollo y la evaluación del <em>software</em>.
            .crd.crd--avatarHorizontal
              .row.align-items-center
                .col-auto.position-relative
                  figure
                    img.img100(src="@/assets/curso/temas/tema5/img_14.svg", alt="Control químico" class="img-fluid")
                .col
                  p 
                    b Simulacros y pruebas: 
                    | registros de pruebas realizadas, simulaciones de uso y resultados obtenidos que permitan verificar el cumplimiento de los requisitos.
            .crd.crd--avatarHorizontal
              .row.align-items-center
                .col-auto.position-relative
                  figure
                    img.img100(src="@/assets/curso/temas/tema5/img_15.svg", alt="Control químico" class="img-fluid")
                .col
                  p 
                    b Históricos de progreso:  
                    | documentación que registre las mejoras, cambios y revisiones efectuadas a lo largo del desarrollo, facilitando la identificación de tendencias y áreas de mejora.

</template>

<script>
export default {
  name: 'Tema5',
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
