
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
import All from '../static/images/category/All.jpg';
import AllMini from '../static/images/category/AllMini.jpg';
import agro from '../static/images/category/Agroindustrial.jpg';
import agroMini from '../static/images/category/AgroindustrialMini.jpg';
import Maquinarias from '../static/images/category/Maquinarias.jpg';
import MaquinariasMini from '../static/images/category/MaquinariasMini.jpg';
import saludA from '../static/images/category/SaludAnimal.jpg';
import saludAMini from '../static/images/category/SaludAnimalMini.jpg';
import Ferretería from '../static/images/category/Ferretería.jpg';
import FerreteríaMini from '../static/images/category/FerreteríaMini.jpg';




export const BannerData = [
    {
        id:0,
        category:'All',
        img:bannerHome,
        miniimg:bannerHome,
        title:'La compañía para la agroindustria',
        subTitle:"",
        href:'/'
    },
    {
        id:1,
        category:'All',
        img:bannerCompany,
        miniimg:bannerCompanyMini,
        title:'Acerca de Nosotros',
        subTitle:"",
        href:'/'
    },
    {
        id:2,
        category:'All',
        img:bannerContact,
        miniimg:bannerContactMini,
        title:'Contactanos',
        subTitle:"",
        href:'/'
    },
    {
        id:3,
        category:'All',
        img:SaludAnimal,
        miniimg:SaludAnimal,
        title:'',
        subTitle:"",
        href:'/'
    },
    {
        id:'SaludAnimalF',
        category:'Home',
        img:SaludAnimalF,
        miniimg:SaludAnimalMiniF,
        title:'',
        subTitle:"",
        href:'/Category/All'
    },

]


export const BannerCategoryImg = [
    {
        id:'01C-All',
        category:'All',
        img:All,
        miniimg:AllMini,
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