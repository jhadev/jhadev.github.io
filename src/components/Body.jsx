import React, { Component } from "react";
import projects from "../projects.json";
import ProjectCard from "./ProjectCard";

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
            <div className="card shadow mx-auto">
              <div className="card-body text-center">
                <h4 className="title">Josh Appel</h4>
                <h5 className="title2 font-italic">Fullstack Web Developer</h5>
                <p className="card-text">joshappeldev@gmail.com</p>
                <p className="card-text">
                  Coding has become a passion for me. I enjoy learning new
                  languages and building clean, responsive, and functional web
                  apps using HTML, CSS, JavaScript, jQuery, React, Express,
                  Node.js, MySQL, MongoDB, Python, and Django.
                </p>
                <a
                  className="github-button"
                  href="https://github.com/jhadev"
                  data-size="large"
                  aria-label="@jhadev GitHub"
                >
                  @jhadev Github
                </a>
                <div className="linked-in">
                  <a
                    className="linked-size btn btn-block btn-sm btn-outline-primary"
                    href="http://linkedin.com/in/josh-a-9865bb175"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="mx-1 linked-size fab fa-linkedin icon-small" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
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
          <div className="col-md-6 col-12">
            <div className="card shadow mt-2">
              <div className="card-header text-center">Send Me a Message</div>
              <div className="card-body">
                <form
                  action="https://formspree.io/joshappeldev@gmail.com"
                  method="POST"
                >
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Name"
                      name="name"
                    />
                  </div>
                  <label htmlFor="email">Email</label>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="joshappeldev@gmail.com"
                      name="_replyto"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Message</label>
                    <textarea
                      placeholder="Write message here."
                      className="form-control"
                      id="text-area"
                      type="text"
                      rows="3"
                      name="message"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="btn btn-primary"
                      type="submit"
                      value="Send"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
