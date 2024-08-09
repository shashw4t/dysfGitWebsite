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
            <div style={{ height: "100vh", width: "100vw", overflow: "hidden", position: "relative" }}>
                <div style={{ height: "100vh", width: "100vw", position: "absolute" }}>
                    <img src={ContactBackground}
                        style={{
                            objectFit: "cover",
                            objectPosition: "center",
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                        }}
                        alt="Contact Background"
                    />
                </div>
                <div style={{
                        position: "absolute",
                        top: this.state.centery - 50, // Adjust for vertical centering
                        left: this.state.centerx - 50, // Adjust for horizontal centering
                        width: "100%",
                        textAlign: "center",
                    }}>
                    <h1>Contact Me</h1>
                    <p>If you have any questions or would like to get in touch, feel free to reach out.</p>
                    <button className="cta-button">Get in Touch</button>
                </div>
            </div>
        );
    }
}

export default Contact;
