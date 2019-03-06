import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import projects from "../projects.json";
import ProjectCard from "./ProjectCard";
import ContactForm from "./ContactForm";
import About from "./About";
import { Animated } from "react-animated-css";

class Body extends Component {
  state = {
    projects
  };

  render() {
    return (
      <Container>
        <Animated animationIn="zoomIn">
          <Row className="justify-content-center mt-5">
            <Col md="6" xs="12">
              <h2 id="about" className="about text-center text-light mb-3">
                About Me
              </h2>
              <About />
            </Col>
          </Row>
        </Animated>
        <Animated animationIn="zoomIn">
          <Row className="mt-5">
            <Col xs="12">
              <h2
                id="portfolio"
                className="portfolio text-center text-light mb-3"
              >
                Portfolio
              </h2>
            </Col>
          </Row>
          <Row>
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
          </Row>
        </Animated>
        <Animated animationIn="zoomIn">
          <Row className="justify-content-center mt-5">
            <Col md="6" xs="12">
              <h2 id="contact" className="contact text-center text-light mb-3">
                Contact
              </h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <ContactForm />
          </Row>
        </Animated>
      </Container>
    );
  }
}

export default Body;
