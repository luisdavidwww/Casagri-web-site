export const links = [
  {
    name: "AGROINDUSTRIAL",
    submenu: true,
    sublinks: [
      {
        Head: "AGROQUÍMICOS",
        subitem: true,
        sublink: [
          { name: "Insecticidas", link: "/" },
          { name: "Herbicidas", link: "/" },
          { name: "Fungicidas", link: "/" },
          { name: "OtroS", link: "/" },
        ],
      },
      {
        Head: "SEMILLAS",
        subitem: true,
        sublink: [
          { name: "Frutas y Hortalizas", link: "/" },
          { name: "Pasto", link: "/" },
          { name: "Maiz", link: "/" },
          { name: "Sustratos", link: "/" },
        ],
      },
      {
        Head: "FERTILIZANTES",
        subitem: false,
      },

      {
        Head: "SACOS, CABUYAS Y CORDELES",
        subitem: false,
      },
      {
        Head: "CERCAS DE ALAMBRE Y ELÉCTRICAS",
        subitem: false,
      },
    ],
  },
  {
    name: "MAQUINARIAS",
    submenu: true,
    sublinks: [
      {
        Head: "EQUIPOS AGRÍCOLAS",
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
        Head: "BOMBAS DE AGUA",
        subitem: true,
        sublink: [
          { name: "Alta presión", link: "/" },
          { name: "Baja presión", link: "/" },
        ],
      },
      {
        Head: "GENERADORES",
        subitem: false,
      },

      {
        Head: "MOTORES",
        subitem: false,
      },
    ],
  },
  {
    name: "SALUD ANIMAL",
    submenu: true,
    sublinks: [
      {
        Head: "MEDICINA VETERINARIA",
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
        Head: "INSTRUMENTAL VETERINARIO",
        subitem: false,
      },
      {
        Head: "MANEJO E IDENTIFICADORES",
        subitem: false,
      },
    ],
  },
  {
    name: "FERRETERÍA",
    submenu: true,
    sublinks: [
      { Head: "FERRETERÍA AGRICOLA", subitem: false, },
      { Head: "ELECTRICIDAD", subitem: false, },
      { Head: "OTROS PRODUCTOS", subitem: false, },
    ],
  },
  {
    name: "SALUD PÚBLICA",
    submenu: true,
    sublinks: [
      { Head: "CONTROL DE PLAGA", subitem: false, },
      { Head: "DESINFECTANTE", subitem: false },
    ],
  },
];
