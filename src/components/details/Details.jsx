import React, { useEffect, useState } from "react"

//importacion de datos de productos
import { featuredProductss } from "../../data/featuredProductss";
import { useParams, useNavigate, useLocation } from "react-router-dom"
import { ADD, DELETE, REMOVE_INT } from "../../controller/action"


//Estilos
import './Details.css'


//importacion temporal de imagenes
const imgL = require.context('../../static/images/product', true);

export const Details = (props) => {

  const { categoria } = props;

  const [data, setData] = useState([])
  
  // delete item
  const { nombre } = useParams();
  const navigate = useNavigate();

  // parametros de categorias
  const location = useLocation()
  const  from  = location.state


  const compare = () => {
    let compareData = featuredProductss.filter((e) => {
      return e.title == nombre
    })
    setData(compareData);
    console.log(data);
  }

  useEffect(() => {
    compare();
    console.log(from)
  }, [nombre])

  

  return (
    <>
      <article >
        <section className="Details__main">
          {data.map((item) => (
            <div className='Details__container'
            >
              <div className=''>
                <img src={imgL(`./${item.imgUrl}`)} alt='' style={{width:'500px'}}/>
              </div>
              
              
              
              <div className='information__Details'> 
              
                <h1 className="text__Details__Title" >{item.title}</h1>
                <h1 className="text__Details__Title" >AGUJA DEMAPLAST 16X1</h1>
                <h3 className="text__Details__Price" >{item.price}</h3>
                <p className="text__Details__Presentation" >{item.presentation}</p>
                <div className=''>
                  <button className=''>Add To Cart</button>
                </div>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </section>
      </article>
    </>
  )
}
