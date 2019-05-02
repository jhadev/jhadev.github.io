import React from "react";
import { ReactComponent as HTML } from "../images/html5.svg";
import { ReactComponent as CSS } from "../images/css3.svg";
import { ReactComponent as JS } from "../images/javascript.svg";
import { ReactComponent as JQuery } from "../images/jquery.svg";
import { ReactComponent as ReactImage } from "../images/react.svg";
import { ReactComponent as MySQL } from "../images/mysql.svg";
import { ReactComponent as Mongo } from "../images/mongodb.svg";
import { ReactComponent as Firebase } from "../images/firebase.svg";
import { ReactComponent as Node } from "../images/node-dot-js.svg";
import { ReactComponent as Python } from "../images/python.svg";
import { ReactComponent as Django } from "../images/django.svg";
import { ReactComponent as Git } from "../images/git.svg";

const About = () => {
  const images = [
    <HTML />,
    <CSS />,
    <JS />,
    <JQuery />,
    <ReactImage />,
    <MySQL />,
    <Mongo />,
    <Firebase />,
    <Node />,
    <Python />,
    <Django />,
    <Git />
  ];
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
        <div className="row mb-3">
          {images.map((image, index) => (
            <div className="col-md-2 col-3" key={index}>
              <div className="img-fluid svg-img p-2">{image}</div>
            </div>
          ))}
        </div>
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
