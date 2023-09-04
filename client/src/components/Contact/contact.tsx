import React from 'react';

function Contact() {
  return (
    <div className="contact-form-block">
      <div className="contact-form">
        <h4>
          <span>contact-form</span>
        </h4>
        <div className="contactForm-desktop">
          <form role="form" method="post" className="contactForm">
            <div className="row">
              <div className="col-sm-6">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    name="first_name"
                    placeholder="your first name"
                    required={true}
                  />
                  <span className="input-group-addon">*</span>
                </div>
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email_address"
                    placeholder="your email ID"
                    required={true}
                  />
                  <span className="input-group-addon">*</span>
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    name="designation"
                    placeholder="your designation"
                    required={true}
                    spellCheck={false}
                    data-ms-editor={true}
                  />
                  <span className="input-group-addon">*</span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    name="last_name"
                    placeholder="your last name"
                    required={true}
                  />
                  <span className="input-group-addon">*</span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
