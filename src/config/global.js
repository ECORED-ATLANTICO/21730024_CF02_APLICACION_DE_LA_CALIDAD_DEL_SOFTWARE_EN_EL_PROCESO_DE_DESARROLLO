export default {
  global: {
    Name:
      'Medición, evaluación y aplicación práctica de la calidad de software',
    Description:
      'Este componente formativo profundiza en la medición y evaluación de calidad de software mediante normas ISO/IEC 25000 (2501n, 2502n), modelos (ISO/IEC 25010, 25012) y métricas (internas, externas, uso). Incluye casos prácticos de aplicación para ilustrar implementación de estándares y procesos evaluativos, reforzando la gestión integral de calidad con enfoque SQuaRE.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Introducción a la norma ISO/IEC 25000 SQuaRE',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Ventajas: estandarización, guías para requisitos, ajuste de normas existentes',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Divisiones: 2501n (modelo), 2502n (medidas), 2503n (requisitos), 2504n (evaluación)',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Modelos de calidad en ISO/IEC 25000',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'ISO/IEC 25010: características y subcaracterísticas para sistemas y software',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'ISO/IEC 25012: calidad de datos inherente y dependiente del sistema',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Medidas de calidad (ISO/IEC 2502n)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'ISO/IEC 25020: modelo de referencia para medición con guía',
            hash: 't_2_1',
          },
          {
            numero: '3.2',
            titulo: 'ISO/IEC 25021: medidas primitivas (QME)',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'ISO/IEC 25022: métricas de calidad en uso',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'ISO/IEC 25023: métricas de calidad externa',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'ISO/IEC 25024: métricas de calidad interna',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Requisitos y evaluación de calidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'ISO/IEC 25030: especificación de requisitos de calidad',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'ISO/IEC 25040-25044: procesos de evaluación para desarrolladores, compradores y evaluadores',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Vistas y documentación en SQuaRE',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Vistas internas, externa y en uso',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              'Requisitos documentales: políticas, simulacros, históricos de progreso',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Caso práctico de aplicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Análisis de caso',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Comparación de software de diseño (Adobe vs. Corel)',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo:
              'Métricas aplicadas (funcionalidad, fiabilidad, usabilidad, eficiencia)',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Integración de modelos en la evaluación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo:
              'Uso combinado de CMMI, PSP/TSP y SQuaRE para garantizar calidad total',
            hash: 't_7_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'PSP y TSP',
      referencia:
        'Humphrey, W. S. (2017). Introducción al proceso software personal. SEI.',
      tipo: 'Capítulo de libro',
      link:
        'https://www.academia.edu/16340802/Introduccion_al_Proceso_Software_Personal',
    },
    {
      tema: 'ISO/IEC 25000 SQuaRE',
      referencia:
        'Garzás, J. (2012). Cómo estandarizar la evaluación de la calidad software… la ISO 9126 y la ISO 25000.',
      tipo: 'Blog técnico',
      link: 'https://www.javiergarzas.com/2012/10/iso-9126-iso-25000-2.html',
    },
    {
      tema: 'ISO/IEC 25000 SQuaRE',
      referencia:
        'Domínguez, J. (2019). Evaluación de la Calidad del Software con la ISO 25000.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Nc4YOEwN6ek',
    },
  ],
  glosario: [
    {
      termino: 'Calidad en uso',
      significado:
        'grado en que un software satisface necesidades de efectividad, eficiencia y satisfacción del usuario en un contexto específico.',
    },
    {
      termino: 'CMMI',
      significado:
        'modelo de integración de madurez de capacidades para mejorar procesos de desarrollo de software, enfocado en niveles de madurez organizacional.',
    },
    {
      termino: 'GQM',
      significado:
        'método para definir métricas a partir de objetivos (Goal-Question-Metric), utilizado para medir calidad y rendimiento.',
    },
    {
      termino: 'ISO/IEC 25000',
      significado:
        'familia de normas que establece requisitos y evaluación de calidad de software (SQuaRE), integrando modelos, medidas y procesos.',
    },
    {
      termino: 'PSP',
      significado:
        'proceso software personal: método para mejorar la productividad individual en desarrollo de software mediante planificación y registro.',
    },
    {
      termino: 'QME',
      significado:
        'elementos de medida de calidad: métricas base para evaluar atributos del software según normas ISO/IEC 2502n.',
    },
    {
      termino: 'SQuaRE',
      significado:
        'proceso Software en equipo: metodología para optimizar trabajo colaborativo en desarrollo de software, complementando PSP.',
    },
    {
      termino: 'Validación',
      significado:
        'confirmación mediante pruebas de que el software cumple con los requisitos del usuario.',
    },
    {
      termino: 'Verificación',
      significado:
        'confirmación de que el software cumple con especificaciones técnicas y está libre de errores.',
    },
  ],
  referencias: [
    {
      referencia: '<b>Cordero, I.</b> (2017). Norma ISO 25000:2500 SQuaRE.',
      link:
        'https://www.mindmeister.com/es/91369914/norma-iso-25000-2005-square-software-quality-requirements-and-evaluation',
    },
    {
      referencia:
        '<b>Garzás, J.</b> (2017). Cómo estandarizar la evaluación de la calidad software... la ISO 9126 y la ISO 25000.',
      link: 'http://www.javiergarzas.com/2012/10/iso-9126-iso-25000-2.html',
    },
    {
      referencia:
        '<b>Humphrey, W. S.</b> (2017). Introducción al proceso software personal.',
      link:
        'https://www.uv.mx/personal/asumano/files/2010/07/psp.pdf?utm_source=chatgpt.com',
    },
    {
      referencia:
        '<b>ISO 25000.com.</b> (2017). La familia de normas ISO/IEC 25000.',
      link: 'http://iso25000.com/index.php/normas-iso-25000',
    },
    {
      referencia: '<b>Samuel, J.</b> (2017). TSP (Team Software Proccess).',
      link: 'http://ingsistemascalidad.blogspot.com.co/2009/11/desarrollo.html',
    },
    {
      referencia:
        '<b>Wagner, S.</b> (2017). Software Product quality control. ',
      link:
        'https://books.google.com.co/books?id=cNy4BAAAQBAJ&pg=PA25&lpg=PA25&dq=(SPQM-RM)&source=bl&ots=RxUkbHtsqC&sig=jJ08WfcW2bVEPohAtJ1p_XR30n0&hl=es-',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sandra Aydeé López Contador',
          cargo: 'Experta temática',
          centro:
            'Centro de Gestión de Mercados Logística y Tecnologías de la Información - Regional Distrito Capital ',
        },
        {
          nombre: 'Heydy Cristina Gonzalez Garcia',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios -Regional Atlántico',
        },
        {
          nombre: 'Jair Coll',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios -Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Alexander Donado Molinares',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Nelson Ivan Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Maria Fernanda Morales Angulo',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adie Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
