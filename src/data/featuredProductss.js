const featuredProducts = [

    //Agroindustrial
    {
        id: 1,
        title: "Audax Fs 600",
        category: "Agroindustrial",
        subCategory: "Agroquímicos",
        TipoProducto: "Insecticidas",
        imgUrl: "Audax_FS_600_1Litro.jpg",
        presentation: "1 Litro",
        marca:"Bayer",
        price: "102.35 $",
        description: "Insecticida Agrícola"
    },
    {
        id: 2,
        title: "Decis EC 25",
        category: "Agroindustrial",
        subCategory: "Agroquímicos",
        TipoProducto: "Insecticidas",
        imgUrl: "Decis_EC_25_1litro.jpg",
        presentation: "1 Litro",
        marca:"Bayer",
        price: "27.54 $",
        description: "Insecticida Agrícola"
    },
    {
        id: 3,
        title: "Larvin SC 375",
        category: "Agroindustrial",
        subCategory: "Agroquímicos",
        TipoProducto: "Insecticidas",
        imgUrl: "Larvin_SC_375_1Litro.jpg",
        presentation: "1 Litro",
        marca:"Bayer",
        price: "54.05 $",
        description: "Insecticida Agrícola"
    },
    {
        id: 4,
        title: "Nativo SC",
        category: "Agroindustrial",
        subCategory: "Agroquímicos",
        TipoProducto: "Fungicida",
        imgUrl: "Nativo_SC_1Litro.jpg",
        presentation: "1 Litro",
        marca:"Bayer",
        price: "64.50 $",
        description: "Fungicida Agrícola"
    },
    {
        id: 5,
        title: "Silvacur EC 300",
        subCategory: "Agroquímicos",
        TipoProducto: "Fungicidas",
        imgUrl: "Silvacur_EC_300_1Litro.jpg",
        presentation: "1 Litro",
        marca:"Bayer",
        price: "64.10 $",
        description: "Fungicida Agrícola"
    },
    {
        id: 6,
        title: "Tordon 212",
        category: "Agroindustrial",
        subCategory: "Agroquímicos",
        TipoProducto: "Herbicidas",
        imgUrl: "Tordon_212_4Litros.jpg",
        presentation: "4 Litros",
        marca:"Dow",
        price: "87.70 $",
        description: "Herbicida Agrícola"
    },
    {
        id: 7,
        title: "Cebolla Híbrido F-1 Granex 429",
        category: "Agroindustrial",
        subCategory: "Semillas",
        TipoProducto: "Frutas y Hortalizas",
        imgUrl: "Cebolla_Híbrido_F-1_Granex_429.jpg",
        presentation: "100.000 semillas",
        marca:"Westar",
        price: "70.70 $",
        description: "Semilla de Cebolla Westar"
    },
    {
        id: 8,
        title: "Cebolla Texas Early Grano 502 PRR 429",
        category: "Agroindustrial",
        subCategory: "Semillas",
        TipoProducto: "Frutas y Hortalizas",
        imgUrl: "Cebolla_Texas_Early_Grano_502_PRR_429.jpg",
        presentation: "500 GRAMOS",
        marca:"Westar",
        price: "67,65 $",
        description: "Semilla de Cebolla Westar"
    },
    {
        id: 9,
        title: "Patilla Charleston Grey",
        category: "Agroindustrial",
        subCategory: "Semillas",
        TipoProducto: "Frutas y Hortalizas",
        imgUrl: "Patilla_Charleston_Grey.jpg",
        presentation: "1 Libra",
        marca:"Westar",
        price: "30,25 $",
        description: "Semilla de Cebolla Westar"
    },
    {
        id: 10,
        title: "Pasto Brachiaria Brizantha CV Toledo",
        category: "Agroindustrial",
        subCategory: "Semillas",
        TipoProducto: "Pasto",
        imgUrl: "Pasto_Brachiaria_Brizantha_CV_Toledo.jpg",
        presentation: "5 Kg",
        marca:"Wolf",
        price: "30,25 $",
        description: "Semilla de Cebolla Westar"
    },
    {
        id: 11,
        title: "Pasto Brachiaria Brizantha CV Piata",
        category: "Agroindustrial",
        subCategory: "Semillas",
        TipoProducto: "Pasto",
        imgUrl: "Pasto_Brachiaria_Brizantha_CV_Piata.jpg",
        presentation: "5 Kg",
        marca:"Wolf",
        price: "30,25 $",
        description: "Semilla de Cebolla Westar"
    },
    {
        id: 12,
        title: "Grama Bermuda Unhulled Coated",
        category: "Agroindustrial",
        subCategory: "Semillas",
        TipoProducto: "Pasto",
        imgUrl: "Grama_Bermuda_Unhulled_Coated.jpg",
        presentation: "5 Kg",
        marca:"Westar",
        price: "153,45 $",
        description: "Semilla de Cebolla Westar"
    },
    {
        id: 13,
        title: "Maíz Blanco Híbrido DK357",
        category: "Agroindustrial",
        subCategory: "Semillas",
        TipoProducto: "Maiz",
        imgUrl: "Maíz_Blanco_Híbrido_DK357.jpg",
        presentation: "60.000 Semillas",
        marca:"Dekalb",
        price: "165,00 $",
        description: "Semilla de Maíz Dekalb Amarillo "
    },
    {
        id: 14,
        title: "Maíz Blanco Híbrido DK410",
        category: "Agroindustrial",
        subCategory: "Semillas",
        TipoProducto: "Maiz",
        imgUrl: "Maíz_Blanco_Híbrido_DK410.jpg",
        presentation: "60.000 Semillas",
        marca:"Dekalb",
        price: "164,98 $",
        description: "Semilla de Maíz Dekalb Amarillo "
    },
    {
        id: 15,
        title: "Maíz Blanco Híbrido DK6018",
        category: "Agroindustrial",
        subCategory: "Semillas",
        TipoProducto: "Maiz",
        imgUrl: "Maíz_Blanco_Híbrido_DK6018.jpg",
        presentation: "60.000 Semillas",
        marca:"Dekalb",
        price: "165,00 $",
        description: "Semilla de Maíz Dekalb Amarillo "
    },
    {
        id: 16,
        title: "Maíz Amarillo Híbrido DK7500",
        category: "Agroindustrial",
        subCategory: "Semillas",
        TipoProducto: "Maiz",
        imgUrl: "Maíz_Amarillo_Híbrido_DK7500.jpg",
        presentation: "60.000 Semillas",
        marca:"Dekalb",
        price: "154,99 $",
        description: "Semilla de Maíz Dekalb Amarillo "
    },
    {
        id: 17,
        title: "Maíz Amarillo Híbrido DK7508",
        category: "Agroindustrial",
        subCategory: "Semillas",
        TipoProducto: "Maiz",
        imgUrl: "Maíz_Amarillo_Híbrido_DK7508.jpg",
        presentation: "60.000 Semillas",
        marca:"Dekalb",
        price: "160,01 $",
        description: "Semilla de Maíz Dekalb Amarillo "
    },
    {
        id: 17,
        title: "Maíz Amarillo Híbrido DK7088",
        category: "Agroindustrial",
        subCategory: "Semillas",
        TipoProducto: "Maiz",
        imgUrl: "Maíz_Amarillo_Híbrido_DK7088.jpg",
        presentation: "60.000 Semillas",
        marca:"Dekalb",
        price: "160,01 $",
        description: "Semilla de Maíz Dekalb Amarillo "
    },


    //Maquinaria
    {
        id: 18,
        title: "Asperjadora Selene",
        category: "Maquinarias",
        subCategory: "Equípos Agrícolas",
        TipoProducto: "Asperjadoras",
        imgUrl: "Asperjadora_Selene.jpg",
        presentation: "16 Litros",
        marca:"Daldegan",
        price: "38.00 $",
        description: "Asperjadora Selene"
    },
    {
        id: 18,
        title: "Asperjadora Ares",
        category: "Maquinarias",
        subCategory: "Equípos Agrícolas",
        TipoProducto: "Asperjadoras",
        imgUrl: "Asperjadora_Ares_8Litros.jpg",
        presentation: "8 Litros",
        marca:"Daldegan",
        price: "12.00 $",
        description: "Asperjadora Selene"
    },
    {
        id: 18,
        title: "Asperjadora Gardenia",
        category: "Maquinarias",
        subCategory: "Equípos Agrícolas",
        TipoProducto: "Asperjadoras",
        imgUrl: "Asperjadora_Gardenia_8Litros.jpg",
        presentation: "8 Litros",
        marca:"Daldegan",
        price: "10.00 $",
        description: "Asperjadora Gardenia"
    },
    {
        id: 19,
        title: "Bomba de Agua Diesel",
        category: "Maquinarias",
        subCategory: "Bombas de Agua",
        TipoProducto: "Baja Presión",
        imgUrl: "Bomba_de_Agua_Diesel_2_pulg.jpg",
        presentation: "2 Pulgadas",
        marca:"Alpina",
        price: "280.00 $",
        description: "Bomba de Agua Diesel"
    },
    {
        id: 20,
        title: "Bomba de Agua Diesel",
        category: "Maquinarias",
        subCategory: "Bombas de Agua",
        TipoProducto: "Baja Presión",
        imgUrl: "Bomba_de_Agua_Diesel_4_pulg.jpg",
        presentation: "4 Pulgadas",
        marca:"Alpina",
        price: "280.00 $",
        description: "Bomba de Agua Diesel"
    },
    {
        id: 21,
        title: "Bomba de Agua Diesel",
        category: "Maquinarias",
        subCategory: "Bombas de Agua",
        TipoProducto: "Alta Presión",
        imgUrl: "Bomba_de_Agua_Diesel_AltaPresion_3_pulg.jpg",
        presentation: "3 Pulgadas",
        marca:"Alpina",
        price: "280.00 $",
        description: "Bomba de Agua Diesel"
    },
    {
        id: 21,
        title: "Bomba de Agua Diesel",
        category: "Maquinarias",
        subCategory: "Bombas de Agua",
        TipoProducto: "Alta Presión",
        imgUrl: "Bomba_de_Agua_Diesel_AltaPresion_4_pulg.jpg",
        presentation: "3 Pulgadas",
        marca:"Alpina",
        price: "280.00 $",
        description: "Bomba de Agua Diesel"
    },
    {
        id: 3,
        title: "Motosierra SP 526",
        category: "Maquinarias",
        subCategory: "Bombas de Agua",
        TipoProducto: "Motosierras",
        imgUrl: "Motosierra_sp_526.jpg",
        presentation: "52 CC - 3.1 HP",
        price: "350.00 $",
        description: "Motosierra"
    },




    //Salud Animal
    {
        id: 22,
        title: "Cipermetrina Calbos 6% ",
        category: "Salud Animal",
        subCategory: "Medicina Veterinaria",
        TipoProducto: "Baños, Ectoparasitarios y Matagusanos",
        imgUrl: "Cipermetrina_Calbos.jpg",
        presentation: "1 Litro",
        price: "9.59 $",
        marca:"Calbos",
        description: "TOPICO DORSAL/CIPERMETRIna"
    },
    {
        id: 22,
        title: "Gado Limpo",
        category: "Salud Animal",
        subCategory: "Medicina Veterinaria",
        TipoProducto: "Baños, Ectoparasitarios y Matagusanos",
        imgUrl: "Gado_limpo_200ml.jpg",
        presentation: "200 ml",
        price: "12.02 $",
        marca:"Calbos",
        description: "CLORFENVIFOS-DICLOROVINI "
    },
    {
        id: 22,
        title: "Calbiotico SOL INY",
        category: "Salud Animal",
        subCategory: "Medicina Veterinaria",
        TipoProducto: "Antibioticos",
        imgUrl: "calbiotico_sol_iny.jpg",
        presentation: "10 ml",
        price: "7.07 $",
        marca:"Calbos",
        description: "PENICILINA + DICLOFENAC "
    },
    {
        id: 23,
        title: "Diazil SOL INY",
        category: "Salud Animal",
        subCategory: "Medicina Veterinaria",
        TipoProducto: "Antibioticos",
        imgUrl: "diazil_100ml_sol_iny.jpg",
        presentation: "100 ml",
        price: "15.80 $",
        marca:"Calbos",
        description: "SULFA / TRIMETROPIN"
    },


















    
   
    
    

]

export { featuredProducts }