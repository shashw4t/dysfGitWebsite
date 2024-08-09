import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <header className="jumbotron text-center">
        <h1 className="display-4 header-title">Shashwat Singh</h1>
        <p className="lead header-subtitle">Software Engineer & Data Scientist</p>
        <p><a href="mailto:shashwat.singh98@gmail.com">shashwat.singh98@gmail.com</a> | 732-210-7862</p>
        <p><a href="https://linkedin.com/in/shashwat">LinkedIn Profile</a></p>
      </header>

      <section id="summary" className="container">
        <h2 className="section-title">Summary</h2>
        <p>With a Master’s degree in Data Science from NJIT and a solid Computer Science foundation from Rutgers University, I leverage extensive experience in Java, SQL, and full-stack development. Currently, at HTD Talent, I enhance client projects by delivering tailored software solutions, including a versatile reservation system. I am adept at translating complex technology into practical applications for diverse clients.</p>
      </section>

      <section id="experience" className="container">
        <h2 className="section-title">Experience</h2>
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Software Engineer (SWE)</h5>
            <h6 className="card-subtitle mb-2 text-muted">HTD Talent (Jul 2024 - Present)</h6>
            <ul>
              <li><strong>Training:</strong> Delivered two intensive 5-week programs on Java, OOP, SQL, Docker, and MVC.</li>
              <li><strong>Projects:</strong> Developed a versatile reservation system and a comprehensive full-stack website.</li>
              <li><strong>Deployment:</strong> Successfully deployed tailored software solutions to client sites.</li>
              <li><strong>Impact:</strong> Leveraged advanced skills to drive significant improvements in client projects.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="education" className="container">
        <h2 className="section-title">Education</h2>
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Master's Degree in Data Science</h5>
            <h6 className="card-subtitle mb-2 text-muted">New Jersey Institute of Technology (NJIT)</h6>
            <p className="card-text">Completed in 2022</p>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Bachelor's Degree in Computer Science</h5>
            <h6 className="card-subtitle mb-2 text-muted">Rutgers University @ New Brunswick</h6>
            <p className="card-text">Completed in 2020</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;import React from 'react';
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
