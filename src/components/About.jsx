import React from "react";

const About = () => {
  return (
    <div className="card shadow mx-auto mt-4">
      <div className="card-body text-center">
        <h4 className="title">Josh Appel</h4>
        <h5 className="title2 font-italic">Fullstack Web Developer</h5>
        <p className="card-text">joshappeldev@gmail.com</p>
        <p className="card-text p-2">
          I have always been interested in technology. I finally decided to take
          the plunge and immerse myself in learning the craft of Web
          Development. I was hooked as soon as I wrote my first line of code. In
          late 2018 I graduated from the Full Stack Coding Bootcamp at Rutgers
          University and haven't looked back.
        </p>
        <p className="card-text p-2">
          There is something magical about opening up a code editor and watching
          your ideas come to life. It has become a passion for me. I enjoy
          learning new languages and building clean, responsive, and functional
          web apps using HTML, CSS, JavaScript, jQuery, React, Express, Node.js,
          MySQL, MongoDB, Firebase, Python, and Django.
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
            className="linked-size btn btn-sm btn-outline-primary"
            id="linked-in"
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
