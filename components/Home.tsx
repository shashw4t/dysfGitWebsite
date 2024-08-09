import React from 'react';
import TypeText from './TypeText';
import HomeBackground from '../images/HomeBackground.jpg';
import Ground from '../images/Ground.jpg';
import HomeForeground from '../images/HomeForeground.jpg';

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
            <div onMouseMove={this._onMouseMove} style={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
                <div style={{ height: "100vh", width: "100vw", position: "absolute" }}>
                    <img src={HomeBackground} 
                        style={{
                            objectFit: "cover", 
                            objectPosition: "center", 
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                        }} 
                        alt="Background"
                    />
                </div>
                <div style={{
                        height: "100vh",
                        width: "100vw",
                        position: "absolute",
                        overflow: "hidden",
                        right: this.state.rightProportion ? this.state.rightProportion * this.state.shift / 3 : undefined,
                        left: this.state.leftProportion ? this.state.leftProportion * this.state.shift / 3 : undefined,
                        bottom: this.state.bottomProportion ? this.state.bottomProportion * this.state.shift / 3 : undefined,
                    }}>
                    <img src={Ground} 
                        style={{
                            objectFit: "cover", 
                            objectPosition: "center", 
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                        }} 
                        alt="Ground"
                    />
                </div>
                <div style={{
                        height: "100vh",
                        width: "100vw",
                        position: "absolute",
                        overflow: "hidden",
                        right: this.state.rightProportion ? this.state.rightProportion * this.state.shift : undefined,
                        left: this.state.leftProportion ? this.state.leftProportion * this.state.shift : undefined,
                        top: this.state.topProportion ? this.state.topProportion * this.state.shift : undefined,
                        bottom: this.state.bottomProportion ? this.state.bottomProportion * this.state.shift : undefined,
                    }}>
                    <img src={HomeForeground} 
                        style={{
                            objectFit: "cover", 
                            objectPosition: "center", 
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                        }} 
                        alt="Foreground"
                    />
                </div>
                <div className="intro-text">
                    <TypeText text="shashw4t - Data Scientist & Software Engineer"/>
                    <p className="intro-subtext">Turning Data into Meaningful Insights. Let's build the future together.</p>
                    <button className="cta-button">Explore My Work</button>
                </div>
            </div>
        )
    }
}

export default Home;