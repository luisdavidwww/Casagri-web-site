import React from 'react';
import { Link } from "react-router-dom";
import { CatalogoCalbos } from 'data/CatalogoCalbos';

import './DocumentoCalbos.css'

const DocumentoCalbos = ({ DocumentosCalbos }) => {
  return (
    <>
      <div className='Document__title__Container'>
        <h1 className='title-basic-Catalogo'> Descargables <span style={{ color: '#489B1E' }}> Calbos </span> </h1>
      </div>

      <div className='Document__Catalogo__container'>
        <ul className='cards__items__Container'>
          {DocumentosCalbos?.map((item, index) => {
            const catalogoItem = CatalogoCalbos[index];
            return (
              <li className='cards__item' key={index}>
                <a className='cards__item__link' href={item.enlaceDescarga} target="_blank" rel="noopener noreferrer">
                  <figure className='cards__item__pic-wrap'>
                    <img
                      className='cards__item__img'
                      alt={item.nombre}
                      src={catalogoItem?.img}
                      layout="fill"
                      style={{
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: "100%",
                        height: "5rem"
                      }}
                    />
                  </figure>

                  <div className='cards__item__info-container'>
                    <div className='cards__item__info-title'>
                      <h1 className='cards__item__text-title'>{item.nombre}</h1>
                    </div>
                    <div className='cards__item__info'>
                      <button className='btn-outline-Catalogos btn-text-Catalogo'> Descargar </button>
                    </div>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>

      </div>
    </>
  )
}

export default DocumentoCalbos;