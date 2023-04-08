

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
          { name: "Rodenticidas", link: "/search" },
          { name: "Fitorreguladores", link: "/search" },
          { name: "Reguladores de PH", link: "/search" },
          { name: "Adherentes Humectantes", link: "/search" },
        ],
      },
      {
        Head: "Semillas",
        subitem: true,
        sublink: [
          { name: "Maíz", link: "/search" },
          { name: "Pasto", link: "/search" },
          { name: "Hortalizas", link: "/search" },
          { name: "Leguminosas", link: "/search" },
          /*{ name: "Bolsas de Germinación", link: "/search" },
          { name: "Bandejas de Germinación", link: "/search" },*/
        ],
      },
      {
        Head: "Fertilizantes",
        subitem: true,
        sublink: [
          { name: "Macronutientes", link: "/search" },
          { name: "Organicos", link: "/search" },
          { name: "Foliares Líquidos", link: "/search" },
          { name: "Sustratos", link: "/search" },
          { name: "Desintectantes de Suelos", link: "/search" },
          { name: "Roca Fosfórica", link: "/search" },
          { name: "Foliares e Hidrosolubles", link: "/search" },
          { name: "Aditivo para Fertilizantes", link: "/search" },
        ],
      },

      {
        Head: "Sacos, Cabuyas y Cordeles",
        subitem: false,
      },
      {
        Head: "Mallas y Plásticos",
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
        Head: "Equipos de Fumigación",
        subitem: true,
        sublink: [
          { name: "Asperjadoras", link: "/search" },
          { name: "Accesorios", link: "/search" }
        ],
      },
      {
        Head: "Máquinaria  para la  Siembra",
        subitem: true,
        sublink: [
          { name: "Acolchadoras y Entablonadoras", link: "/search" },
          { name: "Sembradoras", link: "/search" },
          { name: "Transplantadoras", link: "/search" },
          { name: "Tratamineto de Semillas", link: "/search" }
        ],
      },
      {
        Head: "Maquinaria Intermedia",
        subitem: true,
        sublink: [
          { name: "Motores", link: "/search" },
          { name: "Desmalezadoras", link: "/search" },
          { name: "Motosierras", link: "/search" },
          { name: "Corta Grama", link: "/search" },
        ],
      },
      {
        Head: "Maquinaria Ferretera",
        subitem: true,
        sublink: [
          { name: "Generadores Eléctricos", link: "/search" },
          { name: "Bombas de Agua", link: "/search" },
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
