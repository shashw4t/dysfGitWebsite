import React from 'react';
import { Link } from 'react-router-dom';
import "./TypeText.css";

type TypeTextProps = {
    text: string,
}

type TypeTextState = {
    time: number,
    timer: any,
    displayedText: string,
    showButtons: string[],
}

class TypeText extends React.Component<TypeTextProps, TypeTextState> {
    constructor(props: TypeTextProps) {
        super(props);
        this.state = {
            time: 0,
            timer: null,
            displayedText: "",
            showButtons: ["initial", "initial", "initial", "initial", "initial"],
        };
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        this.setState({
            timer: setInterval(this.tick, 200)
        });
    }

    tick() {
        const delay = 5;
        const { time, displayedText, showButtons } = this.state;
        const { text } = this.props;

        if (time < delay) {
            this.setState({ time: time + 1 });
        } else if (time > text.length + delay) {
            const newText = time % 3 === 0 ? text : text + "|";
            this.setState({ time: time + 1, displayedText: newText });

            if (time >= text.length + delay + 2 && time <= text.length + delay + 6) {
                const updatedShowButtons = [...showButtons];
                updatedShowButtons[time - (text.length + delay + 2)] = "initial show";
                this.setState({ showButtons: updatedShowButtons });
            }
        } else {
            this.setState({
                time: time + 1,
                displayedText: text.substring(0, time - delay) + "|",
            });
        }
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    render() {
        const { displayedText, showButtons } = this.state;

        return (
            <div style={{ position: "absolute", left: "55vw" }}>
                <h1 style={{
                    color: "white",
                    fontSize: "6vw",
                    fontFamily: "Raleway",
                    fontWeight: "lighter",
                    marginBottom: "5vh",
                }}>
                    {displayedText}
                </h1>
                <div style={{ marginLeft: "5vw", display: "flex", flexDirection: "column" }}>
                    <Link to='/AboutMe'>
                        <button className={showButtons[0]}>About Me</button>
                    </Link>
                    <Link to='/Portfolio'>
                        <button className={showButtons[1]}>Portfolio</button>
                    </Link>
                    <Link to='/WorkExperience'>
                        <button className={showButtons[2]}>Work</button>
                    </Link>
                    <Link to='/Photography'>
                        <button className={showButtons[3]}>Photography</button>
                    </Link>
                    <Link to='/Contact'>
                        <button className={showButtons[4]}>Contact</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default TypeText;
