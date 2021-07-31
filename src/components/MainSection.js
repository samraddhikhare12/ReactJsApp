import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainSection.css';

function MainSection() {
  return (
    <div className='main-container'>
      <video id="background-video" autoPlay loop muted poster="https://assets.codepen.io/6093409/river.jpg">
  <source src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4"/>
</video>
      <h1>Lets Make Your Day Special</h1>
      <p>What are you waiting for?</p>
      <div className='main-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default MainSection;