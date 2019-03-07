import React from "react";
import { Col } from "reactstrap";

const ProjectCard = ({ name, image, description, github, link }) => {
  return (
    <Col lg="4" md="6" xs="12">
      <div className="card shadow mx-auto my-2">
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body text-center">
          <h5 className="card-title text-center">{name}</h5>
          <p className="card-text">{description}</p>
          <div>
            <a
              className="github-button"
              href={github}
              data-size="large"
              aria-label={name}
            >
              {name} on Github
            </a>
          </div>
          {name === "Sounds" && (
            <div>
              <a
                className="github-button"
                href="https://github.com/jhadev/sounds/archive/master.zip"
                data-icon="octicon-cloud-download"
                data-size="large"
                aria-label="Download jhadev/sounds on GitHub"
              >
                Download
              </a>
            </div>
          )}
          {link && (
            <a
              className="btn mt-1 btn-block btn-outline-primary"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              data-size="large"
              aria-label="heroku-link"
            >
              View {name === "Sounds" ? "Demo" : "Project"}
            </a>
          )}
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
