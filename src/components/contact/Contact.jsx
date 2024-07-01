import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section className="contact_section" id="contact">
      <div className="section_subtitle_container">
        <h2 className="section_title">Get in touch</h2>
      </div>

      <div className="contact_container container">
        <div className="contact_content">
          <div className="contact_info">
            <div className="contact_card">
              <i className="bx bx-mail-send contact_card-icon"></i>
              <h3 className="contact_card-title">Email</h3>
              <span className="contact_card-data">prjwl888.dkc@gmail.com</span>
            </div>
            <div className="contact_card">
              <i className="bx bxl-whatsapp contact_card-icon"></i>
              <h3 className="contact_card-title">Whatsapp</h3>
              <span className="contact_card-data">+91-9729265172</span>
            </div>
            <div className="contact_card">
              <i className="bx bxl-messenger contact_card-icon"></i>
              <h3 className="contact_card-title">Messenger</h3>
              <span className="contact_card-data">prjwl7</span>
            </div>
          </div>
        </div>

        <div className="contact_content">
          <form className="contact_form" onSubmit={handleSubmit}>
            <div className="contact_form-div">
              <label className="contact_form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact_form-input"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="contact_form-div">
              <label className="contact_form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact_form-input"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="contact_form-div">
              <label className="contact_form-tag">Project</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact_form-input"
                placeholder="Message"
                value={formData.project}
                onChange={handleChange}
              ></textarea>
            </div>
            <button className="button button--flex">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
