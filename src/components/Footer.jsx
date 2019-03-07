import React from "react";
import { Animated } from "react-animated-css";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="text-center sticky-footer">
        <Animated animationIn="slideInUp">
          <a
            href="https://github.com/jhadev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="text-light fab fa-github icon-large" />
          </a>
          <a
            href="http://linkedin.com/in/josh-a-9865bb175"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="text-light mx-1 fab fa-linkedin-in icon-large" />
          </a>
        </Animated>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
