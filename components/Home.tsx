import React, { useState, useEffect } from 'react';
import TypeText from './TypeText';
import HomeBackground from '../assets/pictures/homebackground.png';
import Ground from '../assets/pictures/ground.png';
import HomeForeground from '../assets/pictures/home.png';
import Navbar from './Navbar';

const Home: React.FC = () => {
  const [state, setState] = useState({
	x: 0,
	y: 0,
	centerx: 0,
	centery: 0,
	rightProportion: 0,
	leftProportion: 0,
	topProportion: 0,
	bottomProportion: 0,
	shift: 20,
  });

  const _onMouseMove = (e: any) => {
	const mousex = e.screenX;
	const mousey = e.screenY;
	const centerx = window.innerWidth / 2;
	const centery = window.innerHeight / 2;
	const rightProportion = (mousex - centerx) / centerx;
	const leftProportion = (centerx - mousex) / centerx;
	const topProportion = (centery - mousey) / centery;
	const bottomProportion = (mousey - centery) / centery;
	setState({
	  ...state,
	  x: mousex,
	  y: mousey,
	  centerx: centerx,
	  centery: centery,
	  rightProportion: rightProportion,
	  leftProportion: leftProportion,
	  topProportion: topProportion,
	  bottomProportion: bottomProportion,
	});
  };

  const _updateWindowDimensions = () => {
	const centerx = window.innerWidth / 2;
	const centery = window.innerHeight / 2;
	setState({
	  ...state,
	  centerx: centerx,
	  centery: centery,
	});
  };

  useEffect(() => {
	_updateWindowDimensions();
	window.addEventListener('resize', _updateWindowDimensions);
	return () => {
	  window.removeEventListener('resize', _updateWindowDimensions);
	};
  }, []);

  return (
	<div onMouseMove={_onMouseMove}>
	  <Navbar />
	  <img src={HomeBackground} alt="Home Background" />
	  <img src={Ground} alt="Ground" />
	  <img src={HomeForeground} alt="Home Foreground" />
	  <TypeText />
	</div>
  );
};

export default Home;