import React from "react";

const About = () => {
  return (
    <div className="card shadow mx-auto">
      <div className="card-body text-center">
        <h4 className="title">Josh Appel</h4>
        <h5 className="title2 font-italic">Fullstack Web Developer</h5>
        <p className="card-text">joshappeldev@gmail.com</p>
        <p className="card-text">
          Coding has become a passion for me. I enjoy learning new languages and
          building clean, responsive, and functional web apps using HTML, CSS,
          JavaScript, jQuery, React, Express, Node.js, MySQL, MongoDB, Python,
          and Django.
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
  );
};

export default About;
