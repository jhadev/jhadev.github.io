import React from "react";

const Body = () => {
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
          <h2 id="portfolio" className="portfolio text-center text-light mb-3">
            Portfolio
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card shadow mx-auto my-2">
            <img
              src="https://user-images.githubusercontent.com/42519030/49109709-68db1700-f259-11e8-8770-27a48af21584.png"
              className="card-img-top"
              alt="curren$ee"
            />
            <div className="card-body text-center">
              <h5 className="card-title text-center">curren$ee</h5>
              <p className="card-text">
                A budgeting app built with the MongoDB, Express, React, Node.js
                (MERN) stack. Worked on a team of 3 for this project. Users can
                login to their own accounts and enter their income and expenses.
                They can visualize their money flow over time with tables and
                multiple graphs.
              </p>
              <a
                className="github-button"
                href="https://github.com/jhadev/currensee"
                data-size="large"
                aria-label="currensee"
              >
                curren$ee on Github
              </a>
              <a
                className="btn mt-1 btn-block btn-outline-primary"
                href="https://pacific-ridge-46060.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                data-size="large"
                aria-label="heroku-link"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card shadow mx-auto my-2">
            <img
              src="https://user-images.githubusercontent.com/42519030/53685086-1a1f9c00-3ce4-11e9-9dc8-de5e54786efc.PNG"
              className="card-img-top"
              alt="sounds"
            />
            <div className="card-body text-center">
              <h5 className="card-title text-center">Sounds</h5>
              <p className="card-text">
                A base to make a soundboard for anything. Uses HTML, CSS,
                JavaScript, jQuery, Lodash, Bootstrap, and FontAwesome. Another
                developer can clone this project and create their own soundboard
                in 2 steps as everything is dynamically created. Download below.
              </p>
              <a
                className="github-button sounds-button"
                href="https://github.com/jhadev/sounds"
                data-size="large"
                aria-label="sounds"
              >
                Sounds on Github
              </a>
              <span>{"\u00A0"}</span>
              <a
                className="github-button"
                href="https://github.com/jhadev/sounds/archive/master.zip"
                data-icon="octicon-cloud-download"
                data-size="large"
                aria-label="Download jhadev/sounds on GitHub"
              >
                Download
              </a>
              <a
                className="btn mt-1 btn-block btn-outline-primary"
                href="https://jhadev.github.io/sounds/"
                target="_blank"
                rel="noopener noreferrer"
                data-size="large"
                aria-label="heroku-link"
              >
                View Demo
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card shadow mx-auto my-2">
            <img
              src="https://user-images.githubusercontent.com/42519030/53701452-8923f000-3dcb-11e9-8d2e-69ca8b2d2452.gif"
              className="card-img-top"
              alt="sounds"
            />
            <div className="card-body text-center">
              <h5 className="card-title text-center">Simple Raffle</h5>
              <p className="card-text">
                As simple as adding the entrant's name and number of entries and
                hitting submit. Randomizes multiple times and displays a
                shuffling animation when picking a winner.
              </p>
              <a
                className="github-button"
                href="https://github.com/jhadev/raffle"
                data-size="large"
                aria-label="raffle"
              >
                Raffle on Github
              </a>
              <a
                className="btn mt-1 btn-block btn-outline-primary"
                href="https://jhadev.github.io/raffle/"
                target="_blank"
                rel="noopener noreferrer"
                data-size="large"
                aria-label="project-link"
              >
                View Project
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12">
          <div className="card shadow mx-auto my-2">
            <img
              src="https://user-images.githubusercontent.com/42519030/50379099-6cba4900-060d-11e9-98f2-8509e2e71a91.PNG"
              className="card-img-top"
              alt="scraper"
            />
            <div className="card-body text-center">
              <h5 className="card-title text-center">Reddit TIL Scraper</h5>
              <p className="card-text">
                A scraper for the Reddit TodayILearned subreddit. Allows users
                to pull latest articles from the subreddit in chronological
                order and save notes for articles in the Mongo database.
              </p>
              <a
                className="github-button"
                href="https://github.com/jhadev/reddit-scraper"
                data-size="large"
                aria-label="scraper"
              >
                Scraper on Github
              </a>
              <a
                className="btn mt-1 btn-block btn-outline-primary"
                href="https://gentle-river-12321.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                data-size="large"
                aria-label="project-link"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card shadow mx-auto my-2">
            <img
              src="https://user-images.githubusercontent.com/42519030/53699295-984b7380-3db4-11e9-8c03-7e6b1abfbb89.jpg"
              className="card-img-top"
              alt="lotto"
            />
            <div className="card-body text-center">
              <h5 className="card-title text-center">Lottery Generator</h5>
              <p className="card-text">
                Generates lottery numbers for Pick 3, Pick 4, Cash 5, Pick, 6,
                Mega Millions, and Powerball. Uses an algorithm to display a
                tooltip of other combinations (box, wheel) of a generated number
                for Pick 3 or Pick 4.
              </p>
              <a
                className="github-button"
                href="https://github.com/jhadev/lotto"
                data-size="large"
                aria-label="lotto"
              >
                Lotto on Github
              </a>
              <a
                className="btn mt-1 btn-block btn-outline-primary"
                href="https://jhadev.github.io/lotto/"
                target="_blank"
                rel="noopener noreferrer"
                data-size="large"
                aria-label="project-link"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card shadow mx-auto my-2">
            <img
              src="https://user-images.githubusercontent.com/42519030/50379137-e6066b80-060e-11e9-9d00-de2afd24080f.PNG"
              className="card-img-top"
              alt="gifme"
            />
            <div className="card-body text-center">
              <h5 className="card-title text-center">Gif Me!</h5>
              <p className="card-text">
                An app to search and view GIF images using the Giphy API. Uses
                Bootstrap, jQuery, and CSS animations. Mobile responsive.
              </p>
              <a
                className="github-button"
                href="https://github.com/jhadev/gif-me"
                data-size="large"
                aria-label="gifme"
              >
                Gif Me! on Github
              </a>
              <a
                className="btn mt-1 btn-block btn-outline-primary"
                href="https://jhadev.github.io/gif-me/"
                target="_blank"
                rel="noopener noreferrer"
                data-size="large"
                aria-label="project-link"
              >
                View Project
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12">
          <div className="card shadow mx-auto my-2">
            <img
              src="https://github.com/jhadev/liri-hw/raw/master/images/spotifyThis.PNG"
              className="card-img-top"
              alt="liri"
            />
            <div className="card-body text-center">
              <h5 className="card-title text-center">LIRI</h5>
              <p className="card-text">
                A Node.js CLI app that uses the OMDB, Spotify, and Bands In Town
                APIs to pull info about movies, songs, artists, and upcoming
                concerts.
              </p>
              <a
                className="github-button"
                href="https://github.com/jhadev/liri"
                data-size="large"
                aria-label="gifme"
              >
                LIRI on Github
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card shadow mx-auto my-2">
            <img
              src="https://user-images.githubusercontent.com/42519030/53745412-f6d42880-3e6c-11e9-9270-2b952f5fdcb4.jpg"
              className="card-img-top"
              alt="breaking"
            />
            <div className="card-body text-center">
              <h5 className="card-title text-center">
                Breaking Bad Memory Game
              </h5>
              <p className="card-text">
                A memory game themed for Breaking Bad. Built with React using
                Reactstrap. Don't pick the same character twice.
              </p>
              <a
                className="github-button"
                href="https://github.com/jhadev/breaking-react-game/tree/code"
                data-size="large"
                aria-label="breaking"
              >
                Breaking Bad Game on Github
              </a>
              <a
                className="btn mt-1 btn-block btn-outline-primary"
                href="https://jhadev.github.io/breaking-react-game/"
                target="_blank"
                rel="noopener noreferrer"
                data-size="large"
                aria-label="project-link"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card shadow mx-auto my-2">
            <img
              src="https://user-images.githubusercontent.com/42519030/53740389-0f8b1100-3e62-11e9-904d-045248045551.jpg"
              className="card-img-top"
              alt="perfecto"
            />
            <div className="card-body text-center">
              <h5 className="card-title text-center">
                Perfecto Importers (WIP)
              </h5>
              <p className="card-text">
                A front-end React app built for a wine importer. End product
                will allow potential customers and wine buyers to learn about
                the company and their wine portfolio, complete with a faux cart
                system (for legal reasons) to calculate costs of a potential
                order with automated quantity discounts.
              </p>
              <a
                className="github-button"
                href="https://github.com/jhadev/perfecto"
                data-size="large"
                aria-label="perfecto"
              >
                Perfecto Importers on Github
              </a>
            </div>
          </div>
        </div>
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
};

export default Body;
