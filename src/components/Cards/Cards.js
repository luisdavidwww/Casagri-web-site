import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

const Cards = () =>  {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src=''
              text='Plan Básico'
              label='Mystery'
              path='/'
            />
            <CardItem
              src=''
              text='Plan Médio'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src=''
              text='Plan crack'
              label='Adrenaline'
              path='/sign-up'
            />
            <CardItem
              src=''
              text='Plan crack'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
