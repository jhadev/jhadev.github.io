import React, { Component } from "react";
import { Col, Tooltip, Button } from "reactstrap";

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    const genId = Math.random()
      .toString(36)
      .substr(2, 9);
    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false,
      id: `tooltip-${genId}`
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    const { name, image, description, github, link, tech } = this.props;
    return (
      <Col lg="4" md="6" xs="12">
        <div className="card shadow mx-auto my-2">
          <a
            href={image}
            title={name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={image} className="card-img-top" alt={name} />
          </a>
          <div className="card-body text-center">
            <h5 className="card-title text-center tech-used">{name}</h5>
            <Tooltip
              trigger="hover"
              placement="top"
              isOpen={this.state.tooltipOpen}
              autohide={false}
              target={this.state.id}
              toggle={this.toggle}
            >
              {tech}
            </Tooltip>
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
            <div className="mx-3">
              <Button
                className="my-2 tech-btn"
                outline
                color="success"
                block
                onClick={this.toggle}
                id={this.state.id}
              >
                Technologies
              </Button>
              {link && (
                <Button
                  className="mt-1 project"
                  outline
                  color="primary"
                  block
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-size="large"
                  aria-label="heroku-link"
                >
                  View {name === "Sounds" ? "Demo" : "Project"}
                </Button>
              )}
            </div>
          </div>
        </div>
      </Col>
    );
  }
}

export default ProjectCard;
