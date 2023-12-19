
import './Contact.css';
import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className='ContactUS'>
      <div className="heading">
        <h1>Contact US</h1>
      </div>
    <div className = 'contact-block'>

      <div className="leftside">
      <h2>Get in touch with us for personalized consulting services tailored to your business needs.</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-content'>
          {/* <label htmlFor="name">Name:</label> */}

          <input
            placeholder='Name'
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        
          {/* <label htmlFor="email">Email:</label> */}

          <input
            placeholder='Email'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
       
          {/* <label htmlFor="message">Message:</label> */}

          <textarea
            placeholder='Message'
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>

    <div className="rightside">
    <div className='picture'>
      <img src="https://th.bing.com/th/id/OIP.Gal8T40MNWTINM15QEuLAwHaLH?rs=1&pid=ImgDetMain" alt="Image" />
    </div>
    </div>
      </div>
    </div> 
  );
};

export default ContactUs;

