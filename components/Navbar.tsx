import React from 'react';
import TypeText from './TypeText';
import HomeBackground from '../assets/pictures/homebackground.png';
import Ground from '../assets/pictures/ground.png';
import HomeForeground from '../assets/pictures/home.png';
import Navbar from './Navbar'; // Import Navbar component

type WelcomeProp = {}
type WelcomeState = {
  x: number,
  y: number,
  centerx: number,
  centery: number,
  rightProportion: number,
  leftProportion: number,
  topProportion: number,
  bottomProportion: number,
  shift: number,
}

class Home extends React.Component<WelcomeProp, WelcomeState> {
  constructor(props: WelcomeProp) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      centerx: 0,
      centery: 0,
      rightProportion: 0,
      leftProportion: 0,
      topProportion: 0,
      bottomProportion: 0,
      shift: 20,
    }
    this._onMouseMove = this._onMouseMove.bind(this);
    this._updateWindowDimensions = this._updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this._updateWindowDimensions();
    window.addEventListener('resize', this._updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._updateWindowDimensions);
  }

  _onMouseMove(e: any) {
    const mousex = e.screenX;
    const mousey = e.screenY;
    const centerx = window.innerWidth / 2;
    const centery = window.innerHeight / 2;
    const rightProportion = (mousex - centerx) / centerx;
    const leftProportion = (centerx - mousex) / centerx;
    const topProportion = (centery - mousey) / centery;
    const bottomProportion = (mousey - centery) / centery;
    this.setState({
      x: mousex,
      y: mousey,
      centerx: centerx,
      centery: centery,
      rightProportion: rightProportion,
      leftProportion: leftProportion,
      topProportion: topProportion,
      bottomProportion: bottomProportion,
    });
  }

  _updateWindowDimensions() {
    const centerx = window.innerWidth / 2;
    const centery = window.innerHeight / 2;
    this.setState({
      centerx: centerx,
      centery: centery,
    });
  }

  render() {
    return (
      <div onMouseMove={this._onMouseMove}>
        <Navbar />
        <img src={HomeBackground} alt="Home Background" />
        <img src={Ground} alt="Ground" />
        <img src={HomeForeground} alt="Home Foreground" />
        <TypeText />
      </div>
    );
  }
}

export default Home;