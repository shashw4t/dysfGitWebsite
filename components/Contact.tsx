import React from 'react';
import ContactBackground from '../assets/pictures/background.png';

type ContactProp = {}

type ContactState = {
  centerx: number,
  centery: number,
}

class Contact extends React.Component<ContactProp, ContactState> {
  constructor(props: ContactProp) {
    super(props);
    this.state = {
      centerx: 0,
      centery: 0,
    };
    this._updateWindowDimensions = this._updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this._updateWindowDimensions();
    window.addEventListener('resize', this._updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._updateWindowDimensions);
  }

  _updateWindowDimensions() {
    this.setState({ centerx: window.innerWidth / 2, centery: window.innerHeight / 2 });
  }

  render() {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh", position: "relative" }}>
        <div className="w-100 h-100 position-absolute">
          <img
            src={ContactBackground}
            className="w-100 h-100"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              overflow: "hidden",
            }}
            alt="Contact Background"
          />
        </div>
        <div className="text-center position-absolute" style={{ zIndex: 1 }}>
          <h1>Contact Me</h1>
          <p>If you have any questions or would like to get in touch, feel free to reach out.</p>
          <button className="btn btn-primary">Get in Touch</button>
        </div>
      </div>
    );
  }
}

export default Contact;
