import React, { Component } from "react";
import projects from "../projects.json";
import ProjectCard from "./ProjectCard";
import ContactForm from "./ContactForm";
import About from "./About";

class Body extends Component {
  state = {
    projects
  };

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6 col-12">
            <h2 id="about" className="about text-center text-light mb-3">
              About Me
            </h2>
          </div>
        </div>
        <About />
        <div className="row mt-5">
          <div className="col-12">
            <h2
              id="portfolio"
              className="portfolio text-center text-light mb-3"
            >
              Portfolio
            </h2>
          </div>
        </div>
        <div className="row">
          {this.state.projects.map(project => (
            <ProjectCard
              key={project.id}
              id={project.id}
              name={project.name}
              image={project.image}
              github={project.github}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-6 col-12">
            <h2 id="contact" className="contact text-center text-light mb-3">
              Contact
            </h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <ContactForm />
        </div>
      </div>
    );
  }
}

export default Body;
