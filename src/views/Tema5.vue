<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bg_img_4
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Vistas y documentación en <em>SQuaRE</em>
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.md-5
        .bloque-texto-g.color-terciario.p-3.p-sm-4.p-md-5
          .bloque-texto-f__comillas
            img(src='@/assets/curso/temas/tema5/img_1.svg',).quote__left
            img(src='@/assets/curso/temas/tema5/img_2.svg',).quote__right.d-none.d-sm-block
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img_3.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La correcta interpretación de la calidad del <i>software</i> requiere considerar distintas vistas que reflejen tanto su estructura interna como su comportamiento en uso, complementadas con una documentación detallada que respalde la evaluación.

    separador

    #t_5_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.1 Vistas internas, externa y en uso
    .mb-3
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.order-2.order-lg-1.mb-lg-0.mb-5
        p.mb-3 Se definen tres vistas fundamentales para la evaluación del <i>software</i>:
        .crd--Horizontal.crd__secundario-5.mb-3
          .row.align-items-center
            .col-auto.position-relative
              figure
                img(src="@/assets/curso/temas/tema5/img_4.svg", alt="Control químico" class="img-fluid")
            .col
              p
                b Vista interna: 
                | se centra en la arquitectura, el diseño del código y la estructura del <i>software</i>, evaluando aspectos como la mantenibilidad y la eficiencia.
        .crd--Horizontal.crd__sistema-h.mb-3
          .row.align-items-center
            .col-auto.position-relative
              figure
                img(src="@/assets/curso/temas/tema5/img_5.svg", alt="Control químico" class="img-fluid")
            .col
              p
                b Vista externa: 
                | evalúa la experiencia del usuario final, abarcando la usabilidad, la satisfacción y la efectividad en la realización de tareas.
        .crd--Horizontal.crd__secundario-5.mb-3
          .row.align-items-center
            .col-auto.position-relative
              figure
                img(src="@/assets/curso/temas/tema5/img_6.svg", alt="Control químico" class="img-fluid")
            .col
              p
                b Vista en uso: 
                | registros de pruebas realizadas, simulaciones de uso y resultados obtenidos que permitan verificar el cumplimiento de los requisitos.
      .col-7.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-5
        figure
          img(src="@/assets/curso/temas/tema5/img_7.png", class="img-fluid")
    .titulo-sexto.color-acento-contenido
      h5 Figura 3.  
      I(style="font-weight: normal;") Vistas de calidad en <em>SQuaRE</em>
    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-md-8.col-lg-4.mb-lg-0.mb-3
        figure
          img(src="@/assets/curso/temas/tema5/img_8.svg", class="img-fluid")
      .col-12.col-md-8.col-lg-4.mb-lg-0.mb-3
        figure
          img(src="@/assets/curso/temas/tema5/img_9.svg", class="img-fluid")
      .col-12.col-md-8.col-lg-4.mb-lg-0.mb-3
        figure
          img(src="@/assets/curso/temas/tema5/img_10.svg", class="img-fluid")
    figcaption 
      I(style="font-weight: normal;") Fuente.  
      | SENA (2025).

    separador

    #t_5_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.2 Requisitos documentales: políticas, simulacros, históricos de progreso
    .mb-3

    .row.justify-content-center.align-items-center.mb-0
      .col-7.col-lg-4.mb-lg-0.mb-3
        figure
          img(src="@/assets/curso/temas/tema5/img_11.png", class="img-fluid")
      .col-12.col-lg-8.mb-lm-3.mb-0
        .crd.crd--Horizontal.mb-3
          .row.align-items-center
            .col-auto.position-relative
              figure
                img.mb-3(src="@/assets/curso/temas/tema5/img_12.svg", class="img-fluid")
            .col
              p La documentación en <em>SQuaRE</em> es esencial para asegurar la trazabilidad y el control de la calidad. Entre los elementos que deben incluirse se encuentran:
        .crd--Horizontal.crd__acento-contenido-5.mb-3
          .row.align-items-center
            .col-auto.position-relative
              figure
                img(src="@/assets/curso/temas/tema5/img_13.svg", alt="Control químico" class="img-fluid")
            .col
              p
                b Políticas de gestión de calidad: 
                | normas y lineamientos que orientan el desarrollo y la evaluación del <em>software</em>.
        .crd--Horizontal.crd__acento-contenido-5.mb-3
          .row.align-items-center
            .col-auto.position-relative
              figure
                img(src="@/assets/curso/temas/tema5/img_14.svg", alt="Control químico" class="img-fluid")
            .col
              p
                b Simulacros y pruebas: 
                | registros de pruebas realizadas, simulaciones de uso y resultados obtenidos que permitan verificar el cumplimiento de los requisitos.
        .crd--Horizontal.crd__acento-contenido-5
          .row.align-items-center
            .col-auto.position-relative
              figure
                img(src="@/assets/curso/temas/tema5/img_15.svg", class="img-fluid")
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
