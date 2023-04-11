

export const links = [
  {
    id: 1,
    name: "Agroindustrial",
    submenu: true,
    sublinks: [
      {
        Head: "Agroquímicos",
        subitem: true,
        sublink: [
          { name: "Insecticidas", link: "/search" },
          { name: "Herbicidas", link: "/search" },
          { name: "Fungicidas", link: "/search" },
          { name: "Otros", link: "/search" },
        ],
      },
      {
        Head: "Semillas",
        subitem: true,
        sublink: [
          { name: "Maíz", link: "/search" },
          { name: "Pasto", link: "/search" },
          { name: "Hortalizas", link: "/search" },
          { name: "Hortalizas Híbridas", link: "/search" },
          { name: "Bandejas de Germinación", link: "/search" },
          { name: "Bolsas de Vivero", link: "/search" },
        ],
      },
      {
        Head: "Fertilizantes",
        subitem: false,
      },

      {
        Head: "Sacos, Cabullas y Cordeles",
        subitem: false,
      },
      {
        Head: "Cercas de Alambre y Eléctricas",
        subitem: false,
      },
    ],
  },
  {
    id: 2,
    name: "Maquinarias",
    submenu: true,
    sublinks: [
      {
        Head: "Equípos Agrícolas",
        subitem: true,
        sublink: [
          { name: "Asperjadoras", link: "/search" },
          { name: "Abonadoras, Sembradoras y Cosechadoras", link: "/search" },
          { name: "Desmalezadoras", link: "/search" },
          { name: "Motosierras", link: "/search" },
          { name: "Motocultores", link: "/search" },
        ],
      },
      {
        Head: "Bombas de Agua",
        subitem: true,
        sublink: [
          { name: "Alta presión", link: "/search" },
          { name: "Baja presión", link: "/search" },
        ],
      },
      {
        Head: "Generadores",
        subitem: false,
      },

      {
        Head: "Motores",
        subitem: false,
      },
    ],
  },
  {
    id: 3,
    name: "Salud Animal",
    submenu: true,
    sublinks: [
      {
        Head: "Medicina Veterinaria",
        subitem: true,
        sublink: [
          { name: "Antibióticos", link: "/search" },
          { name: "Anti-Diarreícos", link: "/search" },
          { name: "Analgésicos y Antiflamatorios", link: "/search" },
          { name: "Baños, Ectoparasitarios y Matagusanos", link: "/search" },
          { name: "Desparasitantes", link: "/search" },
          { name: "Tópicos y Cicatrizantes", link: "/search" },
          { name: "Vacunas", link: "/search" },
          { name: "Vitaminas y Suplementos", link: "/search" },
        ],
      },
      {
        Head: "Instrumental Veterinario",
        subitem: false,
      },
      {
        Head: "Manejo e Identificadores",
        subitem: false,
      },
    ],
  },
  {
    id: 4,
    name: "Ferretería",
    submenu: true,
    sublinks: [
      { Head: "Ferretería Agrícola", subitem: false, },
      { Head: "Electricidad", subitem: false, },
      { Head: "Otros Productos", subitem: false, },
    ],
  },
  {
    id: 5,
    name: "Salud Pública",
    submenu: true,
    sublinks: [
      { Head: "Control De Plaga", subitem: false, },
      { Head: "Desinfectante", subitem: false },
    ],
  },
];
