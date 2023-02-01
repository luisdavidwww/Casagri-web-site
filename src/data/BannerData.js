
//Banners Main
import bannerCompany from '../assets/img/banner06.jpg';
import bannerCompanyMini from '../assets/img/banner06mini.jpg';
import bannerContact from '../assets/img/banner07.jpg';
import bannerContactMini from '../assets/img/banner07mini.jpg';
import bannerHome from '../assets/img/banner00.jpg';
import SaludAnimal from '../assets/img/SaludAnimal.jpg';
//BannerComercial 
import SaludAnimalF from '../static/images/banner/SaludAnimalF.jpg';
import SaludAnimalMiniF from '../static/images/banner/SaludAnimalMiniF.jpg';

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