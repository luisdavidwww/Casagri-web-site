

import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

//imagenes barinasWeb-Final
import barquisimeto from 'static/images/company/barquisimetoWeb-Final.jpg';
import barinas from 'static/images/company/barinasWeb-Final.jpg';

//Estilos y diseño
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css';
import './Companys.css'; 

//Icons 
import { AiFillPhone } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";




const Companys = ({Loanding}) => {

  // Crea una referencia para el contenedor del mapa
  const mapContainerLara = useRef(null); 
  const mapContainerBarinas = useRef(null);
  const mapContainerquibor = useRef(null);

  useEffect(() => {

    //Configurar las instancia de los mapas
    const mapLara = new mapboxgl.Map({
      container: mapContainerLara.current,
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-69.33903707758553, 10.077709841225721], // 
      zoom: 16.5, // Nivel de zoom inicial
    });

    const mapBarinas = new mapboxgl.Map({
      container: mapContainerBarinas.current,
      style: 'mapbox://styles/mapbox/outdoors-v12',
      center: [-70.24822151349306 , 8.649386575018674],
      zoom: 15,
    });

    const mapQuibor = new mapboxgl.Map({
      container: mapContainerquibor.current,
      style: 'mapbox://styles/mapbox/outdoors-v12',
      center: [-69.61207930973639, 9.928171728852451],
      zoom: 15.9,
    });

    // Crea una instancia de Popup y agrega un título
    const popup = new mapboxgl.Popup().setHTML("<h2>Casagri de Lara</h2>");
    
    const markerLara = new mapboxgl.Marker()
        .setLngLat([-69.33903707758553, 10.077709841225721])
        .setPopup(popup)
        .addTo(mapLara);
    
    const markerBarinas = new mapboxgl.Marker()
        .setLngLat([-70.24822151349306 , 8.649386575018674])
        .setPopup(popup)
        .addTo(mapBarinas);

    const markerQuibor = new mapboxgl.Marker()
        .setLngLat([ -69.61207930973639, 9.928171728852451])
        .setPopup(popup)
        .addTo(mapQuibor);


    // Agregar una capa de texto al mapa para mostrar el título
    mapLara.on('load', function () {
      mapLara.addLayer({
        id: 'title-layer',
        type: 'symbol',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'Point',
                  coordinates: [-69.33903707758553, 10.077709841225721], // Coordenadas de Nueva York como ejemplo
                },
              },
            ],
          },
        },
        layout: {
          'text-field': 'Casagri de Lara',
          'text-size': 14,
          'text-anchor': 'top',
        },
        paint: {
          'text-color': '#000000',
        },
      });
    });

    mapBarinas.on('load', function () {
      mapBarinas.addLayer({
        id: 'title-layer',
        type: 'symbol',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'Point',
                  coordinates: [-70.24822151349306 , 8.649386575018674],
                },
              },
            ],
          },
        },
        layout: {
          'text-field': 'Casagri Barinas',
          'text-size': 14,
          'text-anchor': 'top',
        },
        paint: {
          'text-color': '#000000',
        },
      });
    });

    mapQuibor.on('load', function () {
      mapQuibor.addLayer({
        id: 'title-layer',
        type: 'symbol',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'Point',
                  coordinates: [ -69.61207930973639, 9.928171728852451 ],
                },
              },
            ],
          },
        },
        layout: {
          'text-field': 'Casagri Quibor',
          'text-size': 14,
          'text-anchor': 'top',
        },
        paint: {
          'text-color': '#000000',
        },
      });
    });




    // Limpia los mapas al desmontar el componente
    return () => {
      mapLara.remove();
      mapBarinas.remove();
      mapQuibor.remove();
    };
  }, []); // El segundo argumento vacío asegura que se ejecute solo una vez al montar el componente



  return (
    <>
      <div className=''>

      {/* -----------   Casagri de Lara  ----------------*/}
      <div className='container__main__sede'>
        <div className='title_sede' style={{paddingLeft:'2rem'}}>
          <h1 className='title-basic-start'> 
            Casagri de <span style={{color:'#489B1E'}}> Lara </span> 
          </h1>
          
          <div className='us-text' style={{paddingLeft:'0.5rem'}}>
            <p className='text-basic'><MdLocationOn/> Ubicación: Estado Lara - Barquisimeto</p>
            <p className='text-basic'><AiFillPhone/> Teléfono: +58 414-2272474 </p>
          </div>
        </div>

        <div
          className='maps_center'
          ref={mapContainerLara}
        />
      </div>

      {/* ----------- Casagri Barinas ----------------*/}   
      <div className='container__main__sede'>
        <div className='title_sede' style={{paddingLeft:'2rem'}}>
          <h1 className='title-basic-start'> 
            Casagri <span style={{color:'#489B1E'}}> Barinas </span> 
          </h1>
          
          <div className='us-text' style={{paddingLeft:'0.5rem'}}>
            <p className='text-basic'><MdLocationOn/> Ubicación: Estado Barinas - Barinas</p>
            <p className='text-basic'><AiFillPhone/> Teléfono: +58 414-5458521 </p>
          </div>
        </div>

        <div
          className='maps_center'
          ref={mapContainerBarinas}
        />
      </div>

      {/* ----------- Casagri Quibor ----------------*/}   
      <div className='container__main__sede'>
        <div className='title_sede' style={{paddingLeft:'2rem'}}>
          <h1 className='title-basic-start'> 
            Casagri <span style={{color:'#489B1E'}}> Quibor </span> 
          </h1>
          
          <div className='us-text' style={{paddingLeft:'0.5rem'}}>
            <p className='text-basic'><MdLocationOn/> Ubicación: Estado Lara - Quibor</p>
            <p className='text-basic'><AiFillPhone/> Teléfono: +58 414-2272474 </p>
          </div>
        </div>

        <div
          className='maps_center'
          ref={mapContainerquibor}
        />
      </div>

      </div>
    </>
  )
}

export default Companys;
