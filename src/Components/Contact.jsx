// import React from 'react'

// function Contact() {
//   return (
//     <div className='contact'>
//         <h3>Get the Best Property</h3>
//         <div className='conatct-input'>
//             <input type="email" placeholder='example@gmail.com' />
//         </div>
      
//     </div>
//   )
// }

// export default Contact


import React, { useState } from 'react';

function Contact() {
  // Handle form state (email input)
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add functionality here to send the email or process the form
    alert("Thank you for contacting us!");
  };

  return (
    <div className="contact">
      <h3>Contact Us for the Best Property Deals</h3>
      
      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="contact-input">
          <input
            type="email"
            placeholder="Enter your email (e.g., example@gmail.com)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <button type="submit" className="submit-btn">Subscribe</button>
      </form>

      {/* Developer's Information */}
      <div className="developer-info">
        <h4>Developer Information</h4>
        <p><strong>Name:</strong> Habtamu Kebede</p>
        <p><strong>Email:</strong> <a>kebedehabtamu743@gmail.com</a></p>
        <p><strong>Phone:</strong> +2519</p>
        <p><strong>Address:</strong>Ethiopia</p>
      </div>

      {/* Social Media Links */}
      <div className="social-links">
        <h4>Connect with Us</h4>
        <a href="https://www.linkedin.com/in/habtamu-kebede-840952319/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/hatbsh-kw" target="_blank" rel="noopener noreferrer">GitHub</a>
        
      </div>
    </div>
  );
}

export default Contact;
