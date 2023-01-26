import React, {useEffect} from 'react';

//componente
import CardItem from '../Cards/CardItem'


const ProductContainerNew = ({ id,imgUrl, title, price, presentation }) =>  {

  
  return (
    <div className='cards'>

      { /*Lista de Productos*/ }
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
              <CardItem
              key={id}
              src={imgUrl}
              title={title}
              label=''
              path=''
              price={price}
              presentation={presentation}
              />
          </ul>
        </div>
      </div>


    </div>
  );
}

export default ProductContainerNew;
