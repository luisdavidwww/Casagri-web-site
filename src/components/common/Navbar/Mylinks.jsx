

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
        Head: "Maquinaria Agrícola",
        subitem: true,
        sublink: [
          
          /*{ name: "Abonadoras, Sembradoras y Cosechadoras", link: "/search" },*/
          { name: "Motocultores", link: "/search" },
          { name: "Siembra", link: "/search" },
          { name: "Recolección", link: "/search" },
          { name: "Abono y Fertilización", link: "/search" },
          { name: "Procesamiento de Materiales", link: "/search" },
          { name: "Fumigación", link: "/search" },
        ],
      },
      {
        Head: "Desmalezadoras",
      },
      {
        Head: "Motosierras",
      },
      {
        Head: "Bombas de Agua",
        subitem: true,
        sublink: [
          { name: "Bombas de Agua Domésticas", link: "/search" },
          { name: "Bombas de Agua Portátiles", link: "/search" },
        ],
      },
      {
        Head: "Motores",
        subitem: false,
      },
      {
        Head: "Generadores",
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
          { name: "Analgésicos y Antiinflamatorios", link: "/search" },
          { name: "Antisepticos y Desinfectantes", link: "/search" },
          { name: "Antibióticos", link: "/search" },
          { name: "Antidiarreicos", link: "/search" },
          /*{ name: "Antiemeticos", link: "/search" },*/
          { name: "Baños, Ectoparasitarios y Matagusanos", link: "/search" },
          { name: "Biológicos", link: "/search" },
          { name: "Desparasitantes", link: "/search" },
          { name: "Hemoparasiticidas", link: "/search" },
          { name: "Hormonales", link: "/search" },
          { name: "Vitaminas y Minerales", link: "/search" },
        ],
      },
      {
        Head: "Implementos Veterinarios",
        subitem: false,
      },
      {
        Head: "Manejo e Identificadores",
        subitem: false,
      },
      {
        Head: "Alimento Animal",
        subitem: false,
      },
      {
        Head: "Mascotas",
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
      { Head: "Control De Plagas", subitem: false, },
      { Head: "Desinfectante", subitem: false },
    ],
  },
];
