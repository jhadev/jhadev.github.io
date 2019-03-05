import React from "react";

const ContactForm = () => {
  return (
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
              <input className="btn btn-primary" type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
