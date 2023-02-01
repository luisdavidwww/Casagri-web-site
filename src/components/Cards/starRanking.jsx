import React, { useEffect, useState } from 'react';
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";


/* Estilos */
import './starRanking.css'


const StarRanking = (props) => {

    const [ranking, setRanking] = useState(props.ranking)
    const [estrellas, setEstrellas]= useState(props.style)

    useEffect(()=>{
        if(props.card == false){
            if(ranking <= 2){
                setEstrellas({color: "red"})
              }else{
                setEstrellas({color: "green"})
              }
        }     
    }, [ranking])


    const indexStart = (index)=>{
        setRanking(index+1)
    }
    return (
        <div className='star-container' >
            {
                [... new Array(5)].map((star, index)=>{
                    return index < ranking ? 
                    <BsStarFill  key={index} style={estrellas} className='star__icon' onClick={() =>indexStart(index)} />  :
                    <BsStar  key={index} style={estrellas} className='star__icon' onClick={() =>indexStart(index)} />                    
                })
            }
            
        
        </div>
    );
};

export default StarRanking;