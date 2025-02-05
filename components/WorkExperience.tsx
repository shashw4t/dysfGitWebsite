import React from 'react';
import { Link } from 'react-router-dom';
import './../stylesheets/WorkExperience.css';

type WelcomeProps = {}

type WelcomeState = {
  showSearch: boolean;
  currentJob: string;
}

class WorkExperience extends React.Component<WelcomeProps, WelcomeState> {
  constructor(props: WelcomeProps) {
    super(props);
    this.state = {
      showSearch: false,
      currentJob: "HTD Talent",
    };
  }

  render() {
    const jobDescription = this.state.currentJob === "HTD Talent"
      ? "As a Software Engineer at HTD Talent, I am currently on a contract basis, where I hire and train for two 5-week training programs to prepare for deployment. I then deploy to clients needing a Java software engineer/developer. The training includes Java basics, OOPs, SQL, Docker, MVC-architecture, and streams. So far, I have coded four projects, including a full-stack website that manages reservations using a Spring MVC annotation model."
      : this.state.currentJob === "Amazon"
      ? "As a Software Development Engineer at Amazon, I was part of the Finance Automation Team. I worked with Java, Python, and Bash scripting to continuously deploy code and optimize financial systems that support millions of AWS users."
      : this.state.currentJob === "TCS"
      ? "As a Full Stack Engineer at Tata Consultancy Services, I developed internal applications using Node.js, Angular, and MongoDB. I also worked on a training management system that improved mentor effectiveness by 15%."
      : this.state.currentJob === "Knowt"
      ? "At Knowt, I was an intern focusing on improving the web application’s user interface using React and Node.js. I also contributed to the development of a teacher platform that integrates Google Suite."
      : "Currently seeking new opportunities to apply my expertise in data science and software engineering to impactful projects.";

    return (
      <div className="container-fluid vh-100 d-flex flex-column align-items-center justify-content-center">
        <div className="experience">
          <h1 className="titlemap">{this.state.currentJob}</h1>
          <p className="text">
            {jobDescription}
          </p>
          <div className="listOfLinks">
            <Link to='/'>
              <button className="btn btn-link">Home</button>
            </Link>
            <Link to='/aboutme'>
              <button className="btn btn-link">About Me</button>
            </Link>
            <Link to='/projects'>
              <button className="btn btn-link">Projects</button>
            </Link>
            <Link to='/contact'>
              <button className="btn btn-link">Contact</button>
            </Link>
          </div>
        </div>
        <div className="experiencePicker mt-4">
          <button className="btn btn-secondary" onClick={() => { this.setState({ showSearch: !this.state.showSearch }) }}>
            {this.state.currentJob === "HTD Talent" ? "HTD Talent, SWE, Jul 2024 - Present" :
              this.state.currentJob === "Amazon" ? "Amazon, Software Development Engineer, Aug 2021 - Jul 2022" :
                this.state.currentJob === "TCS" ? "TCS, Full Stack Engineer, Feb 2021 - Jul 2022" :
                  this.state.currentJob === "Knowt" ? "Knowt Inc, Developer Intern, Jul 2019 - Apr 2020" :
                    "Select a Job Experience"
            }
          </button>
          {this.state.showSearch &&
            <div className="mt-2">
              <button className="btn btn-outline-secondary d-block w-100 mb-2" onClick={() => { this.setState({ showSearch: false, currentJob: "HTD Talent" }) }}>
                HTD Talent, SWE, Jul 2024 - Present
              </button>
              <button className="btn btn-outline-secondary d-block w-100 mb-2" onClick={() => { this.setState({ showSearch: false, currentJob: "Amazon" }) }}>
                Amazon, Software Development Engineer, Aug 2021 - Jul 2022
              </button>
              <button className="btn btn-outline-secondary d-block w-100 mb-2" onClick={() => { this.setState({ showSearch: false, currentJob: "TCS" }) }}>
                TCS, Full Stack Engineer, Feb 2021 - Jul 2022
              </button>
              <button className="btn btn-outline-secondary d-block w-100" onClick={() => { this.setState({ showSearch: false, currentJob: "Knowt" }) }}>
                Knowt Inc, Developer Intern, Jul 2019 - Apr 2020
              </button>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default WorkExperience;
