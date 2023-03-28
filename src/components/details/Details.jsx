import React, { useEffect, useState } from "react"

//importacion de datos de productos
import { featuredProductss } from "../../data/featuredProductss";
import { useParams, useNavigate } from "react-router-dom"
import { ADD, DELETE, REMOVE_INT } from "../../controller/action"


//importacion temporal de imagenes
const imgL = require.context('../../static/images/product', true);

export const Details = () => {

  const [data, setData] = useState([])
  
  // delete item
  const { nombre } = useParams();
  const navigate = useNavigate();


  const compare = () => {
    let compareData = featuredProductss.filter((e) => {
      return e.title == nombre
    })
    setData(compareData);
    console.log(data);
  }

  useEffect(() => {
    compare()
  }, [nombre])

  

  return (
    <>
      <article>
        <section className=''>
          {data.map((item) => (
            <div className=''>
              <h1>{item.title}</h1>
              <div className=''>
                <img src={imgL(`./${item.imgUrl}`)} alt='' style={{width:'500px'}}/>
              </div>
              <div className=''>
                <h3>{item.price}</h3>
                <p>{item.presentation}</p>
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
