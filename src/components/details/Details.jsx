import React, { useEffect, useState } from "react"

//importacion de datos de productos
import { featuredProductss } from "../../data/featuredProductss";

import { useDispatch, useSelector } from "react-redux"
import { useParams, useNavigate } from "react-router-dom"
import { ADD, DELETE, REMOVE_INT } from "../../controller/action"

export const Details = () => {

  const [data, setData] = useState([])
  
  // delete item
  const { id } = useParams();
  const navigate = useNavigate();


  const compare = () => {
    let compareData = featuredProductss.filter((e) => {
      return e.id == id
    })
    setData(compareData)
  }

  useEffect(() => {
    compare()
  }, [id])

  

  return (
    <>
      <article>
        <section className=''>
          <h2 className=''>Product Details Pages</h2>
          {data.map((item) => (
            <div className=''>
              <div className=''>
                <img src={item.cover} alt='' />
              </div>
              <div className=''>
                <h1>{item.title}</h1>
                <div className=''>
                  <label htmlFor=''>(1 customer review)</label>
                </div>
                <h3> ${item.price * item.qty}</h3>
                <p>{item.author}</p>
                <div className=''>

                  <button className=''>Add To Cart</button>
                </div>
                <div className=''>
                  <h4>PRODUCTS DESCRIPTION</h4>
                  <p>Designed by Puik in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The last of a series of chairs wegner designed based on inspiration from antique chinese armchairs.</p>
                  <h4> PRODUCT DETAILS</h4>
                  <ul>
                    <li>
                      <p> Material: Plastic, Wood</p>
                    </li>
                    <li>
                      <p>Legs: Lacquered oak and black painted oak</p>
                    </li>
                    <li>
                      <p>Dimensions and Weight: Height: 80 cm, Weight: 5.3 kg</p>
                    </li>
                    <li>
                      <p>Length: 48cm</p>
                    </li>
                    <li>
                      <p>Depth: 52 cm</p>
                    </li>
                    <li>
                      <p>Seat Height: 44 cm</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </section>
      </article>
    </>
  )
}
