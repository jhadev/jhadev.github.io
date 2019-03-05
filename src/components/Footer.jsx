import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="spacer mt-4" />
      <footer className="text-center sticky-footer">
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
      </footer>
    </React.Fragment>
  );
};

export default Footer;
