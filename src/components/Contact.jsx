import './Contact.css';
import React from 'react';
// import emailjs from 'emailjs-com';
import { toast } from "react-toastify";
import { useForm, ValidationError } from '@formspree/react';

const ContactUs = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  // const [isNameFocused, setIsNameFocused] = useState(false);
  // const [isEmailFocused, setIsEmailFocused] = useState(false);
  // const [isSent, setIsSent] = useState(false);
  // const [error, setError] = useState("");
  const [state, handleSubmit] = useForm("xayggykg");


  if (state.succeeded) {
    // Trigger toast notification
    toast.success("Thank you for contacting yugma. We will respond to your message within 3 working days.😊", {
        position: "top-right",
        autoClose: 5000, // Display the toast for 5 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
  }

  // const notify = () => {
  //   toast.success(
  //     "Thank you for contacting yugma. We will respond to your message within 3 working days.😊",
  //     {
  //       position: "top-right",
  //       autoClose: 5000, // Display the toast for 5 seconds
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "dark",
  //     }
  //   );
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!name || !email || !message) {
  //     setError("Please fill in all fields.");
  //     return;
  //   }

  //   const templateParams = {
  //     from_name: name,
  //     from_email: email,
  //     message: message,
  //   };

  //   emailjs
  //     .send(
  //       process.env.REACT_APP_EMAILJS_SERVICEID,
  //       process.env.REACT_APP_EMAILJS_TEMPLATEID,
  //       templateParams,
  //       process.env.REACT_APP_EMAILJS_PUBLICKEY
  //     )
  //     .then(
  //       (response) => {
  //         notify();
  //         setIsSent(true);
  //         setName("");
  //         setEmail("");
  //         setMessage("");
  //         setError("");
  //         console.log("Email sent:", response);
  //       },
  //       (error) => {
  //         console.error("Failed to send the email:", error);
  //         setError("Oops! Something went wrong. Please try again later.");
  //       }
  //     );
  // };

  return (
    <div className="ContactUS">
      <div className="contact-heading">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-block">
        <div className="leftside">
          <h2>Get in touch with us for personalized consulting services tailored to your business needs.</h2>
          {/* {isSent ? (
            <div>
              <p>Thank you for contacting yugma. We will respond to your message within 3 working days. 😊</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-content">
                <input
                  placeholder="Name"
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => setIsNameFocused(true)}
                  onBlur={() => setIsNameFocused(false)}
                  required
                />
                <input
                  placeholder="Email"
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsEmailFocused(true)}
                  onBlur={() => setIsEmailFocused(false)}
                  required
                />
                <input
                  placeholder="Message"
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          )} */}
          {state.succeeded ? (
            <div>
              <p>Thank you for contacting yugma. We will respond to your message within 3 working days. 😊</p>
            </div>
          ) : (  
        <form onSubmit={handleSubmit}>
            <input
              placeholder="Name"
              type="text"
              id="name"
              name="name"
              required
                />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
            <input
              placeholder="Email"
              type="email"
              id="email"
              name="email"
              required
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
            <input
              placeholder="Message"
              id="message"
              name="message"
              required
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
            
            <button type="submit" disabled={state.submitting}>
              Submit
            </button>
          </form>
          )}
        </div>
        <div className="rightside">
          <div className="picture">
            <img
              src="https://th.bing.com/th/id/OIP.Gal8T40MNWTINM15QEuLAwHaLH?rs=1&pid=ImgDetMain"
              alt="Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;