export const links = [
  {
    name: "Agroindustrial",
    submenu: true,
    sublinks: [
      {
        Head: "Agroquímicos",
        subitem: true,
        sublink: [
          { name: "Insecticidas", link: "/" },
          { name: "Herbicidas", link: "/" },
          { name: "Fungicidas", link: "/" },
          { name: "OtroS", link: "/" },
        ],
      },
      {
        Head: "Semillas",
        subitem: true,
        sublink: [
          { name: "Frutas y Hortalizas", link: "/" },
          { name: "Pasto", link: "/" },
          { name: "Maiz", link: "/" },
          { name: "Sustratos", link: "/" },
        ],
      },
      {
        Head: "Fertilizantes",
        subitem: false,
      },

      {
        Head: "Sacos, Cabuyas y Cordeles",
        subitem: false,
      },
      {
        Head: "Cercas de Alambre y Eléctricas",
        subitem: false,
      },
    ],
  },
  {
    name: "Maquinarias",
    submenu: true,
    sublinks: [
      {
        Head: "Equípos Agrícolas",
        subitem: true,
        sublink: [
          { name: "Asperjadoras", link: "/" },
          { name: "Abonadoras, Sembradoras y Cosechadoras", link: "/" },
          { name: "Desmalezadoras", link: "/" },
          { name: "Motosierras", link: "/" },
          { name: "Motocultores", link: "/" },
        ],
      },
      {
        Head: "Bombas de Agua",
        subitem: true,
        sublink: [
          { name: "Alta presión", link: "/" },
          { name: "Baja presión", link: "/" },
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
    name: "Salud Animal",
    submenu: true,
    sublinks: [
      {
        Head: "Medicina Veterinaria",
        subitem: true,
        sublink: [
          { name: "Antibióticos", link: "/" },
          { name: "Anti-Diarreícos", link: "/" },
          { name: "Analgésicos y Antiflamatorios", link: "/" },
          { name: "Baños, Ectoparasitarios y Matagusanos", link: "/" },
          { name: "Desparacitantes", link: "/" },
          { name: "Tópicos y Sicatrizantes", link: "/" },
          { name: "Vacunas", link: "/" },
          { name: "Vitaminas y Suplementos", link: "/" },
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
    name: "Ferretería",
    submenu: true,
    sublinks: [
      { Head: "Ferretería Agrícola", subitem: false, },
      { Head: "Electricidad", subitem: false, },
      { Head: "Otros Productos", subitem: false, },
    ],
  },
  {
    name: "Salud Pública",
    submenu: true,
    sublinks: [
      { Head: "Control De Plaga", subitem: false, },
      { Head: "Desinfectante", subitem: false },
    ],
  },
];
