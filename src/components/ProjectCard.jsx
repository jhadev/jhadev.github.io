import React from "react";
import { Col } from "reactstrap";

const ProjectCard = ({ id, name, image, description, github, link }) => {
  return (
    <Col lg="4" md="6" xs="12">
      <div className="card shadow mx-auto my-2">
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body text-center">
          <h5 className="card-title text-center">{name}</h5>
          <p className="card-text">{description}</p>
          <a
            className="github-button"
            href={github}
            data-size="large"
            aria-label={name}
          >
            {name} on Github
          </a>
          {id < 8 && (
            <a
              className="btn mt-1 btn-block btn-outline-primary"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              data-size="large"
              aria-label="heroku-link"
            >
              View Project
            </a>
          )}
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
