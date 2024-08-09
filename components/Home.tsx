import React from 'react';
import TypeText from './TypeText';
import HomeBackground from '../assets/pictures/homebackground.png';
import Ground from '../assets/pictures/ground.png';
import HomeForeground from '../assets/pictures/home.png';
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
    this.setState({ x: e.screenX, y: e.screenY });
    this.setState({
      leftProportion: mousex > this.state.centerx ? (mousex - this.state.centerx) / this.state.centerx : 0,
      rightProportion: mousex < this.state.centerx ? (this.state.centerx - mousex) / this.state.centerx : 0,
      topProportion: mousey > this.state.centery ? (mousey - this.state.centery) / this.state.centery : 0,
      bottomProportion: mousey < this.state.centery ? (this.state.centery - mousey) / this.state.centery : 0,
    });
  }

  _updateWindowDimensions() {
    this.setState({ centerx: window.innerWidth / 2, centery: window.innerHeight / 2 });
  }

  render() {
    return (
      <div onMouseMove={this._onMouseMove} className="position-relative vh-100 vw-100 overflow-hidden">
        <div className="position-absolute w-100 h-100">
          <img
            src={HomeBackground}
            className="w-100 h-100"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              overflow: "hidden",
            }}
            alt="Background"
          />
        </div>
        <div
          className="position-absolute w-100 h-100"
          style={{
            overflow: "hidden",
            right: this.state.rightProportion ? this.state.rightProportion * this.state.shift / 3 : undefined,
            left: this.state.leftProportion ? this.state.leftProportion * this.state.shift / 3 : undefined,
            bottom: this.state.bottomProportion ? this.state.bottomProportion * this.state.shift / 3 : undefined,
          }}
        >
          <img
            src={Ground}
            className="w-100 h-100"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              overflow: "hidden",
            }}
            alt="Ground"
          />
        </div>
        <div
          className="position-absolute w-100 h-100"
          style={{
            overflow: "hidden",
            right: this.state.rightProportion ? this.state.rightProportion * this.state.shift : undefined,
            left: this.state.leftProportion ? this.state.leftProportion * this.state.shift : undefined,
            top: this.state.topProportion ? this.state.topProportion * this.state.shift : undefined,
            bottom: this.state.bottomProportion ? this.state.bottomProportion * this.state.shift : undefined,
          }}
        >
          <img
            src={HomeForeground}
            className="w-100 h-100"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              overflow: "hidden",
            }}
            alt="Foreground"
          />
        </div>
        <div className="intro-text text-center position-absolute w-100" style={{ zIndex: 1 }}>
          <TypeText text="shashw4t - Data Scientist & Software Engineer" />
          <p className="intro-subtext">Turning Data into Meaningful Insights. Let's build the future together.</p>
          <button className="btn btn-primary mt-3">Explore My Work</button>
        </div>
      </div>
    );
  }
}

export default Home;
