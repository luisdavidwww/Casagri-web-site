
//Banners Main
import bannerCompany from '../assets/img/banner06.jpg';
import bannerCompanyMini from '../assets/img/banner06mini.jpg';
import bannerContact from '../assets/img/banner07.jpg';
import bannerContactMini from '../assets/img/banner07mini.jpg';
import bannerHome from '../assets/img/banner00.jpg';
import SaludAnimal from '../assets/img/SaludAnimal.jpg';

//Banner Comercial 
import SaludAnimalF from '../static/images/banner/SaludAnimalF.jpg';
import SaludAnimalMiniF from '../static/images/banner/SaludAnimalMiniF.jpg';

//Banner Category
import buscar from '../static/images/category/buscar.jpg';
import buscarMini from '../static/images/category/buscarMini.jpg';
import agro from '../static/images/category/Agroindustrial.jpg';
import agroMini from '../static/images/category/AgroindustrialMini.jpg';
import Maquinarias from '../static/images/category/Maquinarias.jpg';
import MaquinariasMini from '../static/images/category/MaquinariasMini.jpg';
import saludA from '../static/images/category/SaludAnimal.jpg';
import saludAMini from '../static/images/category/SaludAnimalMini.jpg';
import Ferretería from '../static/images/category/Ferretería.jpg';
import FerreteríaMini from '../static/images/category/FerreteríaMini.jpg';

//Banner Search
import buscart from '../static/images/search/search.jpg';
import buscarMinit from '../static/images/search/searchMini.jpg';


export const BannerData = [
    {
        id:'01C-All-todo',
        category:'All',
        img:bannerHome,
        miniimg:bannerHome,
        title:'La compañía para la agroindustria',
        subTitle:"",
        href:'/'
    },
    {
        category:'All',
        img:bannerCompany,
        miniimg:bannerCompanyMini,
        title:'Acerca de Nosotros',
        subTitle:"",
        href:'/'
    },
    {
        category:'All',
        img:bannerContact,
        miniimg:bannerContactMini,
        title:'Contactanos',
        subTitle:"",
        href:'/'
    },
    {
        
        category:'All',
        img:SaludAnimal,
        miniimg:SaludAnimal,
        title:'',
        subTitle:"",
        href:'/'
    },
    {
        id: 'SaludAnimalF',
        category:'Home',
        img:SaludAnimalF,
        miniimg:SaludAnimalMiniF,
        title:'',
        subTitle:"",
        href:'/'
    },

]


export const BannerCategoryImg = [
    {
        id:'01C-All',
        category:'buscar',
        img:buscar,
        miniimg:buscarMini,
        title:'',
        subTitle:""
    },
    {
        id:'01C-Agroindustrial',
        category:'Agroindustial',
        img:agro,
        miniimg:agroMini,
        title:'',
        subTitle:""
    },
    {
        id:'01C-Maquinarias',
        category:'Maquinarias',
        img:Maquinarias,
        miniimg:MaquinariasMini,
        title:'',
        subTitle:""
    },
    {
        id:'01C-SaludAnimal',
        category:'SaludAnimal',
        img:saludA,
        miniimg:saludAMini,
        title:'',
        subTitle:"",
        href:'/'
    },
    {
        id:'01C-Ferretería',
        category:'Ferretería',
        img:Ferretería,
        miniimg:FerreteríaMini,
        title:'',
        subTitle:"",
        href:'/'
    },

]

export const BannerSearch = [
    {
        id:'01Search',
        category:'buscar',
        img:buscart,
        miniimg:buscarMinit,
        title:'',
        subTitle:""
    }

]