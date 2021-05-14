import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Anthologies!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-26.jpg'
              text='Explore the Best character building Biopics'
              label='Biographies'
              path='/services'
            />
            <CardItem
              src='images/img-22.jpg'
              text='Can you unbind these unsolved Mysteries?'
              label='Mysteries'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-23.jpg'
              text='Set Sail in the top Romantic novels of all time '
              label='Romantic'
              path='/services'
            />
            <CardItem
              src='images/img-24.jpg'
              text='Experience devastating Thrillers from selected masterpieces'
              label='Thrillers'
              path='/products'
            />
            <CardItem
              src='images/img-25.jpg'
              text='Ride through the number of historical fictions'
              label='History'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
